import { Box, Text, VStack } from '@chakra-ui/react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useCallback, useEffect, useState } from 'react'

const Chat = ({ speechResult }: any) => {
  const [bardReturn, setBardReturn]: any = useState<string>('');
  const [chatMessages, setChatMessages]: any = useState<string[]>([]);

  const promptReturn = useCallback(async () => {
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_API_KEY);
      const generationConfig = {
        stopSequences: ['red'],
        maxOutputTokens: 200,
        temperature: 0.9,
        topP: 0.1,
        topK: 16,
      };
      const model = genAI.getGenerativeModel({ model: 'gemini-pro', generationConfig });
      const prompt = await speechResult;
      const result = await model?.generateContent(prompt);
      const response = result?.response;
      const text = response?.text();
      setBardReturn(text);
      console.log(text);
    }
    catch (error) {
      console.log(error)
    }
  }, [speechResult])

  useEffect(() => {
    setChatMessages([...chatMessages, speechResult, bardReturn])
  }, [speechResult, bardReturn]);

  useEffect(() => {
    promptReturn();
  }, [speechResult]);

  return (
    <VStack
      overflow="auto"
      w="100%"
    >
      {speechResult &&
        chatMessages?.slice(4)?.map((item: any, index: any) => (
          <Box
            border="1px solid #D9D9D966"
            p="10px"
            backgroundColor={index % 2 === 1 ? "rgba(107, 107, 107, 0.35);" : "rgba(217, 217, 217, 0.35);"}
            w={["70%", "70%"]}
            alignSelf={index % 2 === 1 ? "flex-start" : "flex-end"}
            borderRadius={index % 2 === 1 ? "20px 20px 20px 5px" : "20px 5px 20px 20px"}
          >
            <Text>{item}</Text>
          </Box>
        ))}
    </VStack >
  )
}

export default Chat;
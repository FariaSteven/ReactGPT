import { Box, Text, VStack } from '@chakra-ui/react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useCallback, useEffect, useState } from 'react'

const Chat = ({ speechResult }: any) => {
  const [chatMessages, setChatMessages]: any = useState<string[]>([]);

  const addMessage = useCallback(
    (text: string) => {
      setChatMessages((prevMessages: string[]) => [...prevMessages, text]);
    },
    []
  );

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
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response?.text();

      if (
        text !== "" &&
        text !== "package com.example.demo.controller; import com.example.demo.model.User; import com.example.demo.service.UserService; import org.springframework.beans.factory.annotation.Autowi" &&
        text !== "package com.example.android.sunshine.app; import android.content.Intent; import android.content.Sha"
      ) {
        addMessage(speechResult);
        addMessage(text);
      } else {
        console.error("Error");
      }

      console.log(text);
    } catch (error) {
      console.log(error);
    }
  }, [speechResult, addMessage]);

  useEffect(() => {
    promptReturn();
  }, [speechResult, promptReturn]);

  return (
    <VStack overflow="auto" w="100%">
      {chatMessages?.map((message: any, index: any) => (
        <Box
          key={index}
          border="1px solid #D9D9D966"
          p="10px"
          backgroundColor={index % 2 === 1 ? "rgba(107, 107, 107, 0.35)" : "rgba(217, 217, 217, 0.35)"}
          w={["70%", "70%"]}
          alignSelf={index % 2 === 1 ? "flex-start" : "flex-end"}
          borderRadius={index % 2 === 1 ? "20px 20px 20px 5px" : "20px 5px 20px 20px"}
        >
          <Text>{message}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Chat;


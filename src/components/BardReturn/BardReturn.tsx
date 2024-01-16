import { GoogleGenerativeAI } from '@google/generative-ai';
import { useCallback, useEffect, useState } from 'react'

const BardReturn = ({ speechResult }: any) => {
  const [bardReturn, setBardReturn] = useState<string>();

  const promptReturn = useCallback(async () => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_API_KEY);
    const generationConfig = {
      stopSequences: ['red'],
      maxOutputTokens: 200,
      temperature: 0.9,
      topP: 0.1,
      topK: 16,
    };
    const model = genAI.getGenerativeModel({ model: 'gemini-pro', generationConfig });
    const prompt = speechResult;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setBardReturn(text);
    console.log(text);
  }, [speechResult])

  useEffect(() => {
    promptReturn();
  }, [speechResult]);

  return (
    <div>{bardReturn}</div>
  )
}

export default BardReturn
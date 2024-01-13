import { useEffect, useState } from 'react';
import './App.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

const App = () => {
  const [bardReturn, setBardReturn] = useState<string>();

  const promptReturn = async () => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_API_KEY);
    const generationConfig = {
      stopSequences: ["red"],
      maxOutputTokens: 200,
      temperature: 0.9,
      topP: 0.1,
      topK: 16,
    };
    const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig })

    const prompt = "Me de uma ideia do que desenhar hoje";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setBardReturn(text)
    console.log(text);
  };

  useEffect(() => {
    promptReturn()
  }, [])

  

  return (
    <div>asdasdasd
      <p>{bardReturn}</p>
    </div>
  )
}

export default App
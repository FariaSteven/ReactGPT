import { useCallback, useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

import './App.css';
import { Button, Input, VStack } from '@chakra-ui/react';

const App = () => {
  const [bardReturn, setBardReturn] = useState<string>();
  const [speechResult, setSpeechResult] = useState<string>("");

  const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechToText) {
    console.error('SpeechRecognition is not available in this browser.');
  }

  const speech = new SpeechToText();
  speech.continuous = true;
  speech.lang = 'pt-BR';

  speech.onresult = (e) => {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;

    setSpeechResult(transcript);
  };

  const start = () => {
    speech.start();
  };

  const stop = () => {
    speech.stop();
  };

  const promptReturn = useCallback(async() => {
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
    const result =  await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setBardReturn(text);
    console.log(text);
  }, [speechResult])

  useEffect(() => {
    promptReturn();
  }, [speechResult]);

  return (
    <VStack color="#fff">
      <p>asdasd</p>
      <p>{bardReturn}</p>
      <Input defaultValue={speechResult} />
      <Button onClick={start}>Gravar</Button>
      <Button onClick={stop}>Parar</Button>
    </VStack>
  );
};

export default App;

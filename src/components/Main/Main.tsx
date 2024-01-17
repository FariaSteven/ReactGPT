import { HStack, Text, VStack } from '@chakra-ui/react';
import BardReturn from '../Chat/Chat';
import { PromptInput } from '../PromptInput/PromptInput';
import { useState } from 'react';
import LastAsked from '../LastAsked/LastAsked';
import SuggestionCard from '../SuggestionCard/SuggestionCard';
import ReactGPT from '../../assets/svg/ReactGTP.svg';

const Main = () => {
  const [speechResult, setSpeechResult] = useState('');

  const windowWidth = window.innerWidth;

  return (
    <HStack h="100vh" padding="30px" alignItems="end">
      { windowWidth >= 1024 && <LastAsked />}
      <VStack w="100%" height="100%" justifyContent="end">
        {!speechResult &&
          <VStack height="100%" mt="20px">
            <img width="120px" src={ReactGPT} />
            <Text maxW="40rem" fontSize={["3rem", "5rem"]} fontWeight="100" textAlign="center" lineHeight={["3rem", "5rem"]}>How can I help you today?</Text>
          </VStack>}
        <VStack w="100%">
          {speechResult ? <BardReturn /> : <SuggestionCard />}
          <BardReturn speechResult={speechResult} />
          <PromptInput speechResult={speechResult} setSpeechResult={setSpeechResult} />
        </VStack>
      </VStack>
    </HStack>

  )
}

export default Main
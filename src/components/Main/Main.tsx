import { HStack, VStack } from '@chakra-ui/react'
import BardReturn from '../BardReturn/BardReturn'
import { PromptInput } from '../PromptInput/PromptInput'
import { useState } from 'react'
import LastAsked from '../LastAsked/LastAsked'

const Main = () => {
  const [speechResult, setSpeechResult] = useState("");

  return (
    <HStack h="100vh" padding="30px" alignItems="end">
      <LastAsked />
      <VStack w="100%">
        <BardReturn speechResult={speechResult} />
        <PromptInput speechResult={speechResult} setSpeechResult={setSpeechResult} />
      </VStack>
    </HStack>

  )
}

export default Main
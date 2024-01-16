import { VStack } from '@chakra-ui/react'
import BardReturn from '../BardReturn/BardReturn'
import { PromptInput } from '../PromptInput/PromptInput'
import { useState } from 'react'

const Main = () => {
  const[speechResult, setSpeechResult] = useState("");

  return (
    <VStack>
      <BardReturn speechResult={speechResult}/>
      <PromptInput speechResult={speechResult} setSpeechResult={setSpeechResult}/>
    </VStack>
  )
}

export default Main
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import mic from '../../assets/svg/mic.svg';
import send from '../../assets/svg/send.svg';

interface IProps {
    speechResult: string;
    setSpeechResult: React.Dispatch<React.SetStateAction<any>>;
}

export const PromptInput: React.FC<IProps> = ({ speechResult, setSpeechResult }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechToText) {
        console.error('SpeechRecognition is not available in this browser.');
    }

    const speech = new SpeechToText();
    speech.continuous = true;
    speech.lang = 'pt-BR';

    speech.onresult = (e: any) => {
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

    isDisabled ? start() : stop()

    return (
        <InputGroup size='md'>
            <Input
                defaultValue={speechResult}
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.35);"
                color="#D9D9D9"
                _placeholder={{ color: '#D9D9D9' }}
                border="none"
                backdropBlur="10px"
                pr='4.5rem'
                placeholder='Ask me about anything.'
            />
            <InputRightElement width='4.5rem'>
                <Button disabled={true} onClick={() => setIsDisabled(!isDisabled)}><img src={mic} /></Button>
                <Button disabled={true}><img src={send} /></Button>
            </InputRightElement>
        </InputGroup>
    )
}

import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

interface IProps {
    speechResult: string;
    setSpeechResult: React.Dispatch<React.SetStateAction<any>>;
}

export const PromptInput: React.FC<IProps> = ({ speechResult, setSpeechResult }) => {
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
    return (
        <InputGroup size='md'>
            <Input
                defaultValue={speechResult}
                pr='4.5rem'
                placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
                <Button onClick={start}>Gravar</Button>
                <Button onClick={stop}>Parar</Button>
            </InputRightElement>
        </InputGroup>
    )
}

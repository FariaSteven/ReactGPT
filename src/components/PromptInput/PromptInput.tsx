import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import mic from '../../assets/svg/mic.svg';
import micFill from '../../assets/svg/micFill.svg';
import send from '../../assets/svg/send.svg';

interface IProps {
    speechResult: string;
    setSpeechResult: React.Dispatch<React.SetStateAction<string>>;
}

export const PromptInput: React.FC<IProps> = ({ speechResult, setSpeechResult }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [inputText, setInputText] = useState("");

    let getWindow: any = window;
    const SpeechToText = getWindow.SpeechRecognition || getWindow.webkitSpeechRecognition;

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

    useEffect(() => {
        isDisabled ? start() : () => stop()
        console.log(isDisabled)
    }, [isDisabled]);

    return (
        <InputGroup size='lg' p="none">
            <Input
                defaultValue={speechResult}
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.35);"
                color="#D9D9D9"
                _placeholder={{ color: '#D9D9D9' }}
                border="none"
                backdropBlur="10px"
                placeholder='Ask me about anything.'
                onChange={(e: any) => setInputText(e.target.value)}
            />
            <InputRightElement width=''>
                <Button
                    paddingStart="none"
                    p="2"
                    _hover={{ backgroundColor: "transparent" }}
                    _active={{ backgroundColor: "transparent" }}
                    bg="transparent"
                    onClick={() => setIsDisabled(!isDisabled)}
                >
                    <img src={isDisabled ? micFill : mic} />
                </Button>
                <Button
                    paddingStart="none"
                    _hover={{ backgroundColor: "transparent" }}
                    _active={{ backgroundColor: "transparent" }}
                    bg="transparent"
                    onClick={() => setSpeechResult(inputText)}
                >
                    <img src={send} />
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

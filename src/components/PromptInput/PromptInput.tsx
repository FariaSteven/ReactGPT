import { Button, Input, InputGroup } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
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

    // useEffect(() => {
    //     setInputText("LIMPO")
    // }, [])

    const handleKeyPress = useCallback((event: any) => {
        if (event.key === 'Enter') {
            setSpeechResult(inputText)
            setInputText("")
            console.log("INPUTTEXT", inputText)
        }
    }, [inputText, speechResult])

    // const handleKeyPress = (event: any) => {
    //     if (event.key === 'Enter') {
    //         setSpeechResult(inputText)
    //         console.log(event.key)
    //     }
    // }

    return (
        <InputGroup w={["100%", "50%"]} size='lg' p="none">
            <Input
                onKeyDown={(e) => handleKeyPress(e)}
                defaultValue={speechResult}
                borderRadius="15px 0px 0px 15px"
                backgroundColor="rgba(217, 217, 217, 0.25);"
                color="#D9D9D9"
                _placeholder={{ color: '#D9D9D9' }}
                _focus={{ border: "none" }}
                border="none"
                backdropBlur="10px"
                placeholder='Ask me about anything.'
                onChange={(e: any) => setInputText(e.target.value)}
            />
            <Button
                paddingStart="none"
                p="0"
                borderRadius="0px"
                _hover={{ backgroundColor: "rgba(217, 217, 217, 0.40);" }}
                _focus={{ backgroundColor: "rgba(217, 217, 217, 0.40);" }}
                backgroundColor="rgba(217, 217, 217, 0.35);"
                onClick={() => setIsDisabled(!isDisabled)}
            >
                <img src={isDisabled ? micFill : mic} />
            </Button>
            <Button
                paddingStart="none"
                p="0"
                borderRadius="0px 10px 10px 0px"
                _hover={{ backgroundColor: "rgba(217, 217, 217, 0.40);" }}
                backgroundColor="rgba(217, 217, 217, 0.35);"

                onClick={() => setSpeechResult(inputText)}
            >
                <img src={send} />
            </Button>
        </InputGroup>
    )
}

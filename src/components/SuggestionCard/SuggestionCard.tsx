import { VStack, Text } from "@chakra-ui/react"

const SuggestionCard = () => {
    const windowWidth = window.innerWidth;

    return (
        <VStack
            w={["100%", "50%"]}
            display="grid"
            gridTemplateColumns={["1fr", "1fr 1fr",]}
            m="30px 0px"
        >
            <VStack
                h="100%"
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.10);"
                p="20px"
            >
                <Text fontWeight="500">Development</Text>
                <Text fontWeight="100">I can give you some development tips or help you improve your code...</Text>
            </VStack>
            <VStack
                h="100%"
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.10);"
                p="20px"
            >
                <Text fontWeight="500">Design</Text>
                <Text fontWeight="100">I can help you improve your designs and give you ideias...</Text>
            </VStack>
            <VStack
                h="100%"
                display={windowWidth <= 425 ? "none" : "block"}
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.10);"
                p="20px"
            >
                <Text fontWeight="500">Brainstorm</Text>
                <Text fontWeight="100">I can help you develop your ideas...</Text>
            </VStack>
            <VStack
                h="100%"
                display={windowWidth <= 425 ? "none" : "block"}
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.10);"
                p="20px"
            >
                <Text fontWeight="500">Resumes</Text>
                <Text fontWeight="100">I can make some resumes about a text...</Text>
            </VStack>
        </VStack>
    )
}

export default SuggestionCard
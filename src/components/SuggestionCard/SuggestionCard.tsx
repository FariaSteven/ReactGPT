import { VStack, Text } from "@chakra-ui/react"

const SuggestionCard = () => {
    const windowWidth = window.innerWidth;

    return (
        <VStack
            w="100%"
            display="grid"
            gridTemplateColumns={["1fr", "1fr 1fr",]}
            m="30px 0px"
        >
            <VStack
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.35);"

                p="20px"
            >
                <Text>Development</Text>
                <Text fontWeight="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
            </VStack>
            <VStack
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.35);"

                p="20px"
            >
                <Text>Design</Text>
                <Text fontWeight="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
            </VStack>
            <VStack
                display={windowWidth <= 425 ? "none" : "block"}
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.35);"

                p="20px"
            >
                <Text>Brainstorm</Text>
                <Text fontWeight="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
            </VStack>
            <VStack
                display={windowWidth <= 425 ? "none" : "block"}
                alignItems="flex-start"
                borderRadius="15px"
                backgroundColor="rgba(217, 217, 217, 0.35);"

                p="20px"
            >
                <Text>Resumes</Text>
                <Text fontWeight="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
            </VStack>
        </VStack>
    )
}

export default SuggestionCard
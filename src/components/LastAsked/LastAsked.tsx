import { Text, VStack } from "@chakra-ui/react"

const LastAsked = () => {
    return (
        <VStack overflow="auto" css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'transparent',
              borderRadius: '24px',
            },
          }} maxW="350px" h="100%" p="20px" mr="30px" borderRadius="20px"  backgroundColor="rgba(217, 217, 217, 0.35);" backdropBlur="10px">
            <VStack alignItems="flex-start">
                <Text fontWeight="400" fontSize="18px">Today</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text> 
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="400" fontSize="18px" mt="20px">Yesterday</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="400" fontSize="18px" mt="20px">30 days ago</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
                <Text fontWeight="100" fontSize="16px" pb="8px" mb="5px" borderBottomWidth="1px" borderBottomColor="rgba(217, 217, 217, 0.35);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie dignissim...</Text>
            </VStack>
        </VStack>
    )
}

export default LastAsked
import { Box, Image, Heading, Text, HStack, Spacer, Stack, VStack } from "@chakra-ui/react";
import Link from "next/link";

const VictorsPage = () => {
    return (
        
    
    // <Box backgroundColor= "#F1EDDF" padding="100%" w='100%' h="100%">
    <Box  backgroundColor="#F1EDDF" paddingBottom="100px"color="black" fontFamily="Poppins" top="550px" left="150px" fontWeight="700" fontStyle="normal" position="absolute"> 
        <Box/>
        <Heading fontSize="6xl">
            Past Victors
        </Heading>
        <Box position="absolute">
                <Text fontSize="4xl" w="900px">
                The Grand Cheese Race has been the most elite sporting event for thousands of years. Every year, each country sends one honorable representative to compete for the Double Gloucester cheese. 
                To remember all of the legendary victors, we keep a list of the past winners and a description of their victory. 
                </Text>
            </Box>
            </Box> 
         
    // </Box>
    );
  };
  
  export default VictorsPage;
import { Box, Image, Heading, Text, HStack, Spacer, Stack, VStack } from "@chakra-ui/react";
import Link from "next/link";
const LandingHome = () => {
    return (
        
        //not sure if i wasnt to do relative or absolute here
    <Box>
        <Image src="/background.png" position="absolute" overflowY="auto" /> 
    <Box color="white" fontFamily="Poppins" paddingTop="350px" paddingLeft="150px" fontWeight="700" fontStyle="normal" position="absolute"> 
        <Heading fontSize="8xl">
            Grand Cheese Race
        </Heading>
        <Box position="absolute">
                <Text fontSize="4xl">
                    It's the race of the century! All victors return for 
                </Text>
                <Text fontSize="4xl">
                    one final race... who do you think will win?
                </Text>
            </Box>
            </Box> 
         
    </Box>
    );
  };
  
  export default LandingHome;
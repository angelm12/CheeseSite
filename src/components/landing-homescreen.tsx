import { Box, Image, Heading, Text, HStack, Spacer, Stack, VStack } from "@chakra-ui/react";
import Link from "next/link";
const LandingHome = () => {
    return (
        
    //Below I displayed the background image and text.
    <Box>
        <Image src="/background.png" position="absolute" overflowY="auto" /> 
        <Box color="white" fontFamily="Poppins" paddingTop="20%" paddingLeft="10%" fontWeight="700" fontStyle="normal" position="absolute"> 
            <Heading fontSize="8xl">
                Grand Cheese Race
            </Heading>
            <Box position="absolute">
                <Text fontSize="4xl" w="88%">
                    It's the race of the century! All victors return for 
                    one final race... who do you think will win?
                </Text>
            </Box>
        </Box> 
    </Box>
    );
  };
  
  export default LandingHome;
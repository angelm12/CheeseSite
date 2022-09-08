import { Box, Heading, Text,} from "@chakra-ui/react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import NavBar from "../components/nav-bar";
const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'

//Running the next.js function in ordet to statically render the props upon build time and aquire json balues from api endpoint above.
export async function getStaticProps() {
    const res = await fetch(votingEndpoint);
    const data = await res.json();
    const victorsData = data.victors;
    
    //Generate the prop being passed into the following function, specifically getting the json values and 
    return {
        props: { victorsData }
    }
}
export default function Voting({ victorsData }) {
    return(
        <>
        <NavBar/>

        {/* Handling the text output for the left segment of the screen with the historical background of the competition, primarily utilizing basic Chakra components. */}
        <Box position="absolute" backgroundColor="#F1EDDF"  padding="5%" paddingTop="25%">
            <Box >
                <Heading fontSize="5xl" as="b"> Past Victors </Heading>
                <Text fontSize="3xl" w="600px" paddingTop="15%" >
                    The Grand Cheese Race has been the most elite sporting event for thousands of years. Every year, each country sends one honorable representative to compete for the Double Gloucester cheese. 
                </Text>
                <Text fontSize="3xl" w="600px" paddingTop="15%" paddingBottom="100%">
                    To remember all of the legendary victors, we keep a list of the past winners and a description of their victory. 
                </Text>
            </Box>
        </Box>
        
        {/* Setting up padding and overall placement on page for the accordion or drop down components that contain the api vaules fetched through the pop created above. */}
        <Box paddingTop="25%" paddingRight="8%">
            {victorsData.map(result => { 
            return ( 
                //Entire Accordion functionality of the chakra component below that allows for multiple drop downs to be toggled at once.
                <>
                <Box display="flex" justifyContent="right" flexDirection="row" >
                    <Box key={result.name}>
                        <Box display="flex" justifyContent="right" alignItems="right" maxWidth="sm" >
                            <Accordion allowToggle>
                                <AccordionItem width="475px">
                                    <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            <Text> Contestant </Text>
                                            <Text as='b'> {result.name} </Text>
                                        {result.year}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        {result.description}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>      
                    </Box>
                </Box>
                </>
                )
            },)}
        </Box>
        </>
    );
}


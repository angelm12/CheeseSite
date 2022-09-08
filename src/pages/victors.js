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

export async function getStaticProps() {
    const res = await fetch(votingEndpoint);
    const data = await res.json();
    const victorsData = data.victors;
    // const [votingScore, setVotingScore] = useState([]);
    //     setVotingScore(result.score);
    
    return {
        props: { victorsData }
    }
}
export default function Voting({ victorsData }) {
    return(
        <>
        <NavBar/>
        <Box position="absolute" backgroundColor="#F1EDDF"  padding="50px" paddingTop="300px">
            <Box >
                <Heading fontSize="5xl" as="b"> Past Victors </Heading>
                <Text fontSize="3xl" w="600px" paddingTop="50px" >
                    The Grand Cheese Race has been the most elite sporting event for thousands of years. Every year, each country sends one honorable representative to compete for the Double Gloucester cheese. 
                </Text>
                <Text fontSize="3xl" w="600px" paddingTop="75px" paddingBottom="100%">
                    To remember all of the legendary victors, we keep a list of the past winners and a description of their victory. 
                </Text>
            </Box>

        </Box>
        
        <Box paddingTop="225px" paddingRight="125px">

            {victorsData.map(result => { 
            return ( 
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


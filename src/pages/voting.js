import { useState, useRef } from "react";
import NavBar from "../components/nav-bar";
import { Box, Image, Button, Heading, Text, HStack, VStack } from "@chakra-ui/react";
const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'
import { useOutsideClick } from '@chakra-ui/react'

//Running the next.js function in ordet to statically render the props upon build time and aquire json balues from api endpoint above.
export async function getStaticProps() {
    const res = await fetch(votingEndpoint);
    const data = await res.json();
    const updatedData = data.voting;

    return {
        props: { updatedData }
    }
}

export default function Voting({ updatedData }) {
 
    // creating an array to temporary hold the values of the prop's (json) iterated score values, then using useState in order to correctly
    // set an array that will be used for the remainder of the page used to display the incremented score values.
    let tmp = [];
    for (let i = 0; i < updatedData.length; i += 1) {
        tmp[i] = updatedData[i].score;
    }
    const [competitors, setCompetitors] = useState(tmp);

 


    //ran for loop again because if I were to set the temp array equal to the exact same competitors array react would treat that as the useState function just updating to the exact same array.
    //Two functions below that will handle the functionality of incrementing a single competitor's score without mutating another competitor's score.
    function subScore(i){
        const tmpChange = competitors[i] - 1;
        let tmpArray = []
        for (let i = 0; i < competitors.length; i += 1) {
            tmpArray[i] = competitors[i];
        }
        tmpArray[i] = tmpChange
        setCompetitors(tmpArray)
        }

  
    function addScore(i){
        const tmpChange = competitors[i] + 1;
        let tmpArray = []
        for (let i = 0; i < competitors.length; i += 1) {
            tmpArray[i] = competitors[i];
        }

        tmpArray[i] = tmpChange
        setCompetitors(tmpArray)
        }

        // Modal functionality
        const ref = useRef()
        const [isModalOpen, setIsModalOpen] = useState(false)
        useOutsideClick({
          ref: ref,
          handler: () => setIsModalOpen(false),
        })
        // End of Modal.
    
    return(
        <>
        <NavBar/>
        <Heading fontSize="4xl" as="b" display="flex" justifyContent="center" paddingTop="50px">Cast your Votes!</Heading>


        {/* following enclosure is for extra modal function that gives a user the ability to see the intention of the buttons and overall voting page, feel free to delete if need be! */}
        <Box display="flex" justifyContent="center">
            {isModalOpen ? (
                <Text as='i' paddingTop="16px" ref={ref}>
                Place your vote for your favorite contestant who you think will win this year's Grand Cheese Race!
                </Text>
            ) : (
                <Button  bgColor="#F1EDDF" onClick={() => setIsModalOpen(true)}>Info!</Button>
            )}
            </Box>
            {/* End of Modal. */}

                {/* Below is the mapping functionality of redering each component for each competitor without hardcoding data. 
                Uses the indexOf() method in order to keep track of which user's information to input in each loop of the mapping function.
                */}
            <Box display="flex" justifyContent="space-evenly" flexDirection="row" paddingTop="50px" >
            {updatedData.map(result => { 
                const i = updatedData.indexOf(result);
            return ( 
                <>
                <Box display="flex" flexDirection="row" >
                    <Box key={result.name}>
                        <Image backgroundColor="white"  boxSize='300px' roundedTop='lg' boxShadow='2xl' objectFit='cover' src={result.image} alt='competitor image source' />
                        <Box backgroundColor="#F1EDDF" roundedBottom='lg' boxShadow='2xl' > 
                            <VStack flex="1" justifyContent="space-evenly">
                                <VStack>
                                    <Text as='i'> {result.name} </Text>
                                    <Text as='b'> Score: {competitors[i]}! </Text>
                                </VStack>
                            </VStack>
                            <HStack justifyContent="center">                  
                                <Button bgColor="#EFDCB6" _hover={{ bg: "#FFFFF0" }} border-radius="30px" onClick={() => addScore(i)}> + </Button>
                                <Button  bgColor="#EFDCB6" _hover={{ bg: "#FFFFF0" }} onClick={() => subScore(i)}> - </Button>
                            </HStack>   
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


import { useState, useRef } from "react";
import NavBar from "../components/nav-bar";
import { Box, Image, Button, Heading, Text, HStack, Spacer, Stack, VStack } from "@chakra-ui/react";
const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'

import { useOutsideClick } from '@chakra-ui/react'
export async function getStaticProps() {
    const res = await fetch(votingEndpoint);
    const data = await res.json();
    const updatedData = data.voting;

    return {
        props: { updatedData }
    }
}
export default function Voting({ updatedData }) {
 
    let tmp = [];
    for (let i = 0; i < updatedData.length; i += 1) {
        tmp[i] = updatedData[i].score;
    }
    const [competitors, setCompetitors] = useState(tmp);

 
    function subScore(i){
        const tmpChange = competitors[i] - 1;
        let tmpArray = []
        for (let i = 0; i < competitors.length; i += 1) {
            tmpArray[i] = competitors[i];
        }
        tmpArray[i] = tmpChange
        setCompetitors(tmpArray)
        }

    //ran for loop again because if I were to set the temp array equal to the exact same competitors array react
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


        {/* following enclosure is for extra modal funßction, feel free to delete if need be! */}
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
                    {" "}
                    <Text as='b'> Score: {competitors[i]}! </Text>
                    </VStack>
                    </VStack>
                    <HStack justifyContent="center">                  
                    <Button bgColor="#EFDCB6" _hover={{ bg: "#FFFFF0" }} border-radius="30px" onClick={() => addScore(i)}> + </Button>
                    {"                 "}
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



// import { useState } from "react";
// import NavBar from "../components/nav-bar";
// import { Box, Image, Button, Collapse, Heading, Text, HStack, Spacer, Stack, VStack } from "@chakra-ui/react";
// const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'

// export async function getStaticProps() {
//     const res = await fetch(votingEndpoint);
//     const data = await res.json();
//     const updatedData = data.voting;

//     return {
//         props: { updatedData }
//     }
// }
// export default function Voting({ updatedData }) {
 
//     let tmp = [];
//     for (let i = 0; i < updatedData.length; i += 1) {
//         tmp[i] = updatedData[i].score;
//     }
//     const [competitors, setCompetitors] = useState(tmp);

 
//     function subScore(i){
//         const tmpChange = competitors[i] - 1;
//         let tmpArray = []
//         for (let i = 0; i < competitors.length; i += 1) {
//             tmpArray[i] = competitors[i];
//         }
//         tmpArray[i] = tmpChange
//         setCompetitors(tmpArray)
//         }

//     //ran for loop again because if I were to set the temp array equal to the exact same competitors array react
//     function addScore(i){
//         const tmpChange = competitors[i] + 1;
//         let tmpArray = []
//         for (let i = 0; i < competitors.length; i += 1) {
//             tmpArray[i] = competitors[i];
//         }

//         tmpArray[i] = tmpChange
//         setCompetitors(tmpArray)
//         }
    
//     return(
//         <>
//         <NavBar/>
//         <Box padding="50px" display="flex" justifyContent="space-evenly" flexDirection="row"  >
//         {updatedData.map(result => { 
//             const i = updatedData.indexOf(result);
//         return ( 
//             <>
//             <Box display="flex" flexDirection="row" >
//                 <Box key={result.name}>
//                 <Image _hover={{ borderColor: "#F1EDDF", bg: "#F1EDDF" }} backgroundColor="white"  paddingLeft="50px" padding="50px"  boxSize='300px' objectFit='cover' src={result.image} alt='competitor image source' />
//                 <Box backgroundColor="#F1EDDF" rounded='lg' > 
//                     <Text as='i'> {result.name} </Text>
//                     {" "}
//                     <Text as='b'> {competitors[i]} </Text>

//                     {" "}

//                     <Button rounded='lg' colorScheme="#EFDCB6" onClick={() => addScore(i)}> + </Button>
//                     {"                 "}
//                     <Button rounded='lg' colorScheme="#FEFCBF" onClick={() => subScore(i)}> - </Button>
//                 </Box>
                    
//                 </Box>
//             </Box>
//             </>
//             )
//         },)}
//         </Box>
//         </>
//     );
// }


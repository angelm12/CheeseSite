import { Box, Image, Heading, Text, HStack, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box px={12} py={10} bg="black">
      <HStack align="center" spacing={4}>
        <Image src="/cheese-icon.svg" w={10} />
        <Heading color="white" fontSize="2xl">
          Grand Cheese Race
        </Heading>
        <Spacer />
        <HStack color="white" fontSize="2xs" fontWeight="semibold">
          <Link href="/">
          <Button colorScheme='white' variant='link'>
            HOME
          </Button>
          </Link>

          <Text>/</Text>

          <Link href="/voting">
          <Button colorScheme='white' variant='link'>
            VOTING
          </Button>
          </Link>

          <Text>/</Text>

          <Link href="/victors">
          <Button colorScheme='white' variant='link'>
            PAST VICTORS
          </Button>
          </Link>
          {/* <Text>/</Text>
          <Text>PAST VICTORS</Text> */}
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;

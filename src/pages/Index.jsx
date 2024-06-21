import { Container, Text, VStack, Heading, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to DataStore</Heading>
        <Text fontSize="lg">Your secure place to upload and store data.</Text>
        <Button as={Link} to="/login" colorScheme="teal" size="lg">Login</Button>
        <Button as={Link} to="/signup" colorScheme="teal" size="lg">Sign Up</Button>
      </VStack>
      <Box mt={10} w="full">
        <Heading as="h2" size="lg" mb={4}>Our Services</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Image Storage</Heading>
            <Text mt={4}>Securely store and manage your images.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Photo Storage</Heading>
            <Text mt={4}>Keep your photos safe and accessible.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Video Storage</Heading>
            <Text mt={4}>Store and stream your videos with ease.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Audio Storage</Heading>
            <Text mt={4}>Manage your audio files securely.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Map and Location Storage</Heading>
            <Text mt={4}>Store and manage location data.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Additional Information and Building</Heading>
            <Text mt={4}>Store additional information and manage your data efficiently.</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
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
    </Container>
  );
};

export default Index;
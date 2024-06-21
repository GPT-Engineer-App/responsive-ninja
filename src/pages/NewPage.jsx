import { Box, Button, Container, Heading, VStack, Text } from "@chakra-ui/react";

const NewPage = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h2" size="xl">New Page</Heading>
        <Text fontSize="lg">This is a new page in the dashboard.</Text>
        <Button colorScheme="teal" size="lg">Action 1</Button>
        <Button colorScheme="teal" size="lg">Action 2</Button>
      </VStack>
    </Container>
  );
};

export default NewPage;
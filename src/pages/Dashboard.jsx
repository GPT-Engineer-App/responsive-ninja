import { Box, Button, Container, Heading, VStack, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Dashboard</Heading>
        <Text fontSize="lg">Manage your data here.</Text>
        <Button colorScheme="teal" size="lg">Upload Data</Button>
        <Button colorScheme="teal" size="lg">View Data</Button>
      </VStack>
    </Container>
  );
};

export default Dashboard;
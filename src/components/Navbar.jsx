import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">DataStore</Link>
        </Box>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/home" colorScheme="teal" variant="outline" mr={4}>Home Page</Button>
          <Button as={RouterLink} to="/new-page" colorScheme="teal" variant="outline" mr={4}>New Page</Button>
          <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline" mr={4}>Login</Button>
          <Button as={RouterLink} to="/signup" colorScheme="teal" variant="outline">Sign Up</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
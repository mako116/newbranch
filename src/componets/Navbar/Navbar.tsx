// src/components/Navbar.tsx
import { Box, Flex, Text, IconButton, Badge } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      w="full"
      h="60px"
       borderBottom="1px"
      borderColor="gray.200"
      align="center"
      justify="space-between"
      px={4}
    >
      <Text fontSize="lg" fontWeight="bold">
        Dashboard
      </Text>
      <Flex align="center">
        <Text mr={4}>User Name</Text>
        <IconButton
          aria-label="Notifications"
          icon={
            <Badge colorScheme="red" borderRadius="full" p={1}>
              <FaBell />
            </Badge>
          }
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;

// src/components/DashboardContent.tsx
"use client"
import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";

const DashboardContent = () => {
  return (
    <div >
      <Box p={4} className="">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Flex
          bg="gray.100"
          height="150px"
          align="center"
          justify="center"
          borderRadius="md"
        >
          <Text>Card 1</Text>
        </Flex>
        <Flex
          bg="gray.100"
          height="150px"
          align="center"
          justify="center"
          borderRadius="md"
        >
          <Text>Card 2</Text>
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
        <Flex
          bg="gray.100"
          height="150px"
          align="center"
          justify="center"
          borderRadius="md"
        >
          <Text>Card 3</Text>
        </Flex>
        <Flex
          bg="gray.100"
          height="150px"
          align="center"
          justify="center"
          borderRadius="md"
        >
          <Text>Card 4</Text>
        </Flex>
        <Flex
          bg="gray.100"
          height="150px"
          align="center"
          justify="center"
          borderRadius="md"
        >
          <Text>Card 5</Text>
        </Flex>
      </SimpleGrid>
    </Box>
    </div>
  );
};

export default DashboardContent;

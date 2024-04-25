import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaSearch, FaFileAlt, FaCheck, FaTimes } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAudit = () => {
    toast({
      title: "Audit Initiated",
      description: "The audit process has been started successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSearch = () => {
    toast({
      title: "Search Complete",
      description: "Search results are ready to be reviewed.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Audit Management System
        </Heading>
        <Text fontSize="lg">Welcome to the Audit Management Interface. Start an audit or search previous records.</Text>

        <Flex w="full" gap={4}>
          <Input placeholder="Search audits..." />
          <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
            Search
          </Button>
        </Flex>

        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaFileAlt />} colorScheme="teal" onClick={handleAudit}>
            Start New Audit
          </Button>
          <Button leftIcon={<FaCheck />} colorScheme="green">
            Approve Audit
          </Button>
          <Button leftIcon={<FaTimes />} colorScheme="red">
            Reject Audit
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;

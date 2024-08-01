import React from 'react';
import { Avatar, Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack, useTheme } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';

export const GuaranteesContents = () => {
  const theme = useTheme();

  return (
    <Box className="poppins" w="full" p={4}>
      <Box className="guaranteecontents">
        <Link href="/">
        <Flex align="center" cursor="pointer" fontWeight="600" fontSize="14px" color="#5586FF" mb={4}>
          <IoIosArrowBack />
          <Text ml={2}>Back</Text>
        </Flex>
        </Link>
        <Heading fontSize="16px" fontWeight="600" mb={4} color="#000">
          Guarantees
        </Heading>
        <Box>
          <Box
            maxH="600px"
            overflowY="auto"
            p={4}
            pt="30px"
            borderRadius="20px"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '&': {
                '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
                'scrollbar-width': 'none',  /* Firefox */
              },
            }}
            className='bg-[#fff] pt-[20px]'
          >
            <Flex direction="row" mb={4} pl="20px" pr="20px" gap="20px">
            <InputGroup width="800px" display="flex" alignItems="center" className='flex items-center justify-center h-auto'>
                <InputLeftElement pointerEvents="painted" className='pl-[5px] pr-[5px]'>
                  <FiSearch color="#979797" cursor="pointer" className='text-[50px] mt-[15px] '/>
                </InputLeftElement>
                <Input
                  type="search"
                  backgroundColor="#ECF2FF"
                  placeholder="Search..."
                  mb={2}
                  height="56px"
                  outline="none"
                  border="none"
                  boxShadow="none"
                />
              </InputGroup>
              <Button color="#fff" backgroundColor="#5586FF" width="171px" borderRadius="10px" height="56px" fontSize="13px" flexWrap="wrap" >Add Guarantee</Button>
            </Flex>
            <Box pl="23px" pr="23px" mb={4}>
              <Flex direction="row" justifyContent="space-between" pl={5} pr={5} pt="30px" pb="20px" borderRadius="20px" alignItems="center" className="bg-[#ECF2FF]">
                <Flex direction="row">
                  <Avatar
                    size={'sm'}
                    src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                  <VStack
                    // display={{ md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="#000">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin@gmail.com
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Account Number</Text>
                    <Text fontSize="xs" color="gray.600">
                      7052581498
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Status</Text>
                    <Text fontSize="xs" color="gray.600">
                      Active
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <Button color="#fff" backgroundColor="#5586FF" width="90px" borderRadius={10}>Remove</Button>
                </Flex>
              </Flex>
            </Box>
            <Box pl="23px" pr="23px" mb={4}>
              <Flex direction="row" justifyContent="space-between" pl={5} pr={5} pt="30px" pb="20px" borderRadius="20px" alignItems="center" className="bg-[#ECF2FF]">
                <Flex direction="row">
                  <Avatar
                    size={'sm'}
                    src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                  <VStack
                  
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="#000">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin@gmail.com
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Account Number</Text>
                    <Text fontSize="xs" color="gray.600">
                      7052581498
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Status</Text>
                    <Text fontSize="xs" color="gray.600">
                      Active
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <Button color="#fff" backgroundColor="#5586FF" width="90px" borderRadius={10}>Remove</Button>
                </Flex>
              </Flex>
            </Box>
            <Box pl="23px" pr="23px" mb={4}>
              <Flex direction="row" justifyContent="space-between" pl={5} pr={5} pt="30px" pb="20px" borderRadius="20px" alignItems="center" className="bg-[#ECF2FF]">
                <Flex direction="row">
                  <Avatar
                    size={'sm'}
                    src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                  <VStack
                     
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="#000">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin@gmail.com
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Account Number</Text>
                    <Text fontSize="xs" color="gray.600">
                      7052581498
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Status</Text>
                    <Text fontSize="xs" color="gray.600">
                      Active
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <Button color="#fff" backgroundColor="#5586FF" width="90px" borderRadius={10}>Remove</Button>
                </Flex>
              </Flex>
            </Box>
            <Box pl="23px" pr="23px" mb={4}>
              <Flex direction="row" justifyContent="space-between" pl={5} pr={5} pt="30px" pb="20px" borderRadius="20px" alignItems="center" className="bg-[#ECF2FF]">
                <Flex direction="row">
                  <Avatar
                    size={'sm'}
                    src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                  <VStack
                    
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="#000">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin@gmail.com
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Account Number</Text>
                    <Text fontSize="xs" color="gray.600">
                      7052581498
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Status</Text>
                    <Text fontSize="xs" color="gray.600">
                      Active
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <Button color="#fff" backgroundColor="#5586FF" width="90px" borderRadius={10}>Remove</Button>
                </Flex>
              </Flex>
            </Box>
            <Box pl="23px" pr="23px" mb={4}>
              <Flex direction="row" justifyContent="space-between" pl={5} pr={5} pt="30px" pb="20px" borderRadius="20px" alignItems="center" className="bg-[#ECF2FF]">
                <Flex direction="row">
                  <Avatar
                    size={'sm'}
                    src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="#000">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin@gmail.com
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Account Number</Text>
                    <Text fontSize="xs" color="gray.600">
                      7052581498
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Status</Text>
                    <Text fontSize="xs" color="gray.600">
                      Active
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <Button color="#fff" backgroundColor="#5586FF" width="90px" borderRadius={10}>Remove</Button>
                </Flex>
              </Flex>
            </Box>
            <Box pl="23px" pr="23px" mb={4}>
              <Flex direction="row" justifyContent="space-between" pl={5} pr={5} pt="30px" pb="20px" borderRadius="20px" alignItems="center" className="bg-[#ECF2FF]">
                <Flex direction="row">
                  <Avatar
                    size={'sm'}
                    src={'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="12px" lineHeight="18px" fontWeight="400" color="#000">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin@gmail.com
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Account Number</Text>
                    <Text fontSize="xs" color="gray.600">
                      7052581498
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Status</Text>
                    <Text fontSize="xs" color="gray.600">
                      Active
                    </Text>
                  </VStack>
                </Flex>
                <Flex direction="row" mb={4}>
                  <Button color="#fff" backgroundColor="#5586FF" width="90px" borderRadius={10}>Remove</Button>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

import { useSelector } from 'react-redux';
import {
  Heading,
  Flex,
  Spinner,
  VStack,
  Link,
  Text,
  Box,
  Center,
} from '@chakra-ui/react';
import { selectIsLoading } from 'redux/contacts/selectors';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Flex
          w="100%"
          h="100vh"
          align="center"
          justify="center"
          paddingY="400px"
        >
          <Spinner
            size="xl"
            color="#188C69"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
          />
        </Flex>
      ) : (
        <Box
          as="main"
          bg="#FDF8D7"
          position="relative"
          h="100vh"
          w="100%"
          >    
            <Center>
            <VStack gap={{base: "10px", md:"24px"}} mw="600px" mt="15px">
              <Heading
                as="h1"
                position="relative"
                color="#192655"
                fontFamily="Merriweather Sans"
               
                fontSize={{ base: '18px', md: '30px' }}
                align="center"
                width="100%"
              >
                Welcome to contact book
              </Heading>
              <Text
                color="#192655"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                fontWeight={'bold'}
                align="center"
              >
                If you have already registered, please, choose for authorization{' '}
              </Text>
              <Link
                as={NavLink}
                boxShadow='base'
                
                pr="10px"
                pl="10px"
                color="#192655"
                borderRadius="10%"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                  fontWeight={'bold'}
                  textShadow="0 0 7px #fFF,0 0 10px #fFF,0 0 21px #fFF,0 0 42px #d2e0fb,0 0 82px #d2e0fb,0 0 92px #d2e0fb,0 0 102px #d2e0fb,0 0 151px #d2e0fb"
                _hover={{
                  color: '#fff',
                  textShadow:
                    '0 0 7px #A0E9FF,0 0 10px #A0E9FF,0 0 21px #A0E9FF,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff',
                }}
                _activeLink={{
                  color: '#fff',
                  textShadow:
                    '0 0 7px #A0E9FF,0 0 10px #A0E9FF,0 0 21px #A0E9FF,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff',
                }}
                to="/login"
              >
                Log In
              </Link>
              <Text
                color="#192655"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                fontWeight={'bold'}
                align="center"
              >
                If it is your first visit, please, fill registration form
              </Text>
              <Link
                as={NavLink}
                boxShadow='base'
                
                pr="10px"
                pl="10px"
                color="#192655"
                borderRadius="10%"
                fontFamily="Merriweather Sans"
                fontSize={{ base: '16px', md: '24px' }}
                  fontWeight={'bold'}
                  textShadow="0 0 7px #fFF,0 0 10px #fFF,0 0 21px #fFF,0 0 42px #d2e0fb,0 0 82px #d2e0fb,0 0 92px #d2e0fb,0 0 102px #d2e0fb,0 0 151px #d2e0fb"
                _hover={{
                  color: '#fff',
                  textShadow:
                    '0 0 7px #A0E9FF,0 0 10px #A0E9FF,0 0 21px #A0E9FF,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff',
                }}
                _activeLink={{
                  color: '#fff',
                  textShadow:
                    '0 0 7px #A0E9FF,0 0 10px #A0E9FF,0 0 21px #A0E9FF,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff',
                }}
                to="/register"
              >
                Register
              </Link>
            </VStack>
            </Center>
            
          
        </Box>
      
      )}
    </>
  );
}

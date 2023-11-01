import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Text, Button, Avatar, Icon, Circle, VStack, Flex } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineLogout } from 'react-icons/ai';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

  return (
  <>
    {isTabletOrMobile ? (
        <VStack
          alignItems="center"          
          display="grid"
          justifyItems="end"
        >
      <Flex>
        <Avatar bg="#abe1e8" w="30px" h="30px" mr="10px" />
            <Text
        as="span"
        fontFamily="Montserrat Alternates"
        fontSize="16px"
        color="#192655"
        fontWeight="bold"
      >
        Welcome, {user.name}!
      </Text>
      </Flex>
        <Circle size='30px' bg='#8EACCD' 
        type="button"
          onClick={handleLogOut}
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}>
    <Icon as={AiOutlineLogout} />
          </Circle>
          </VStack>) : (
        <Flex alignItems="center" grow={1} display="flex" justify="flex-end" gap="10px">
     
            
            <Text
        as="span"
        fontFamily="Montserrat Alternates"
        fontSize={isTabletOrMobile ? '16px' : '24px'}
        color="#192655"
        fontWeight={'bold'}
      >
        Welcome, {user.name}!
      </Text>
<Avatar bg="#abe1e8" w="40px" h="40px" mr="10px" />
         <Button
        type="button"
        borderRadius="50%"
        h="40px"
        w="40px"
        onClick={handleLogOut}
        fontFamily="Merriweather Sans"
        fontSize={isTabletOrMobile ? '16px' : '24px'}
        fontWeight={'bold'}
        backgroundColor="#8EACCD"
        
        
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
         <Icon as={AiOutlineLogout} />
      
            </Button> 
          </Flex>
          
      )    
    
      }


    
        </>
        );
}

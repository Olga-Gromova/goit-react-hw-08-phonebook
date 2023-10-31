import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Flex, Text, Button, Avatar, Icon } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineLogout } from 'react-icons/ai';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

  return (
    <Flex alignItems="center" grow={1} justify="flex-end" gap="10px">
       
       <Text
        as="span"
        fontFamily="Montserrat Alternates"
        fontSize={isTabletOrMobile ? '18px' : '24px'}
        color="#192655"
        fontWeight={'bold'}
      >
        Welcome, {user.name}!
      </Text>
      <Avatar bg="#abe1e8" w="30px" h="30px" />
    <Button
        type="button"
        borderRadius="50%"
        h="40px"
        w="40px"
        onClick={handleLogOut}
        fontFamily="Merriweather Sans"
        fontSize={isTabletOrMobile ? '16px' : '24px'}
        fontWeight={'bold'}
        backgroundColor="#00A9FF"
        
        
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
         <Icon as={AiOutlineLogout} />
      
      </Button>
    


      
    </Flex>
  );
};

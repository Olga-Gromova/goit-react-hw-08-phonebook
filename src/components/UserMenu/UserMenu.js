import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Flex, Text, Button, Avatar } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

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
        fontSize={isTabletOrMobile ? '18px' :'24px'}
        color="#192655"
        fontWeight={'bold'}
      >
        Welcome, {user.name}!
      </Text>
      <Avatar 
      // width={isTableOrMobile ? '24px' : '36px'}
      // height={isTableOrMobile ? '24px' : '36px'}
      w="36px" h="36px" 
      />
      <Button
        type="button"
        onClick={handleLogOut}
        fontFamily="Merriweather Sans"
        fontSize={isTabletOrMobile ? '18px' :'24px'}
        fontWeight={'bold'}
        borderColor="#89d3da"
        borderWidth="1px"
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        Log out
      </Button>
    </Flex>
  );
};

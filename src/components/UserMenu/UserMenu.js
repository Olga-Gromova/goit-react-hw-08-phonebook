import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Flex, Text, Button, Avatar } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex alignItems="center" grow={1} justify="flex-end" gap="10px">
      <Text
        as="span"
        fontFamily="Montserrat Alternates"
        fontWeight={400}
        fontSize={30}
        color="#282828"
      >
        Welcome, {user.name}!
      </Text>
      <Avatar w="36px" h="36px" />
      <Button
        type="button"
        onClick={handleLogOut}
        fontFamily="Merriweather Sans"
        fontSize={24}
        fontWeight={300}
        borderColor="#89d3da"
        borderWidth="1px"
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        Log out
      </Button>
    </Flex>
  );
};

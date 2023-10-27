import { Flex, Spacer } from '@chakra-ui/react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex as="header" align="center" h={70} px={8} py={4} bg="#89d3da">
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
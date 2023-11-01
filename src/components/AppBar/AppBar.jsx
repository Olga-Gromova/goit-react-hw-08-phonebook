import { Flex, Spacer } from '@chakra-ui/react';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { useMediaQuery } from 'react-responsive';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });
  return (
    <Flex as="header"
      align="center"
      h={70}
      p={isTabletOrMobile ? "5px" : "16px"}     
      bg="#89d3da">
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};

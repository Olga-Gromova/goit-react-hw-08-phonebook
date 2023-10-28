import { HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const AuthNav = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });
  return (
    <HStack spacing={10}>
      <Link
        as={NavLink}
        color="#192655"
        fontFamily="Merriweather Sans"
        fontSize={isTabletOrMobile ? '18px' : '24px'}
        fontWeight={'bold'}
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
      <Link
        as={NavLink}
        color="#192655"
        fontFamily="Merriweather Sans"
        fontSize={isTabletOrMobile ? '18px' : '24px'}
        fontWeight={'bold'}
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
    </HStack>
  );
};

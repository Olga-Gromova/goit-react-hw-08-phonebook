import { Box, Link } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });
  return (
    <Box as="nav"
    display={isTabletOrMobile ? 'grid' : "block"}
    mr="10px">
      <Link
        as={NavLink}
        color="#192655"
        fontFamily="Merriweather Sans"
        fontSize={isTabletOrMobile ? '16px' : '24px'}
        fontWeight={'bold'}
        _hover={{
          color: '#fff',
          textShadow:
            '0 0 7px #A0E9FF,0 0 10px #A0E9FF,0 0 21px #A0E9FF,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff',
        }}
        _activeLink={{
          color: '#fff',
          textShadow:
            '0 0 7px #A0E9FF,0 0 10px #A0E9FF,0 0 21px #A0E9FF,0 0 42px #5271ff,0 0 82px #5271ff,0 0 92px #5271ff,0 0 102px #5271ff,0 0 151px #5271ff)',
        }}
        mr={isTabletOrMobile ? '10px' : '72px'}
        to="/"
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          color="#192655"
          fontFamily="Merriweather Sans"
          fontSize={isTabletOrMobile ? '16px' : '24px'}
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
          to="/contacts"
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};

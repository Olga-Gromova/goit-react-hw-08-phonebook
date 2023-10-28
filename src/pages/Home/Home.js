import imageBg from '../../images/imageBg.png';
import { useSelector } from 'react-redux';
import { Box, Heading, Flex, Spinner } from '@chakra-ui/react';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
  const isLoading = useSelector(selectIsLoading);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

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
          position="relative"
          h="100vh"
          backgroundImage={imageBg}
          backgroundPosition="center"
          backgroundRepeat="no-repet"
          backgroundSize="cover"
        >
          <Heading
            as="h1"
            position="absolute"
            top="10px"
            left="50%"
            color="#192655"
            fontFamily="Merriweather Sans"
            textShadow="0 0 7px #fFF,0 0 10px #fFF,0 0 21px #fFF,0 0 42px #2dd6f4,0 0 82px #2dd6f4,0 0 92px #2dd6f4,0 0 102px #2dd6f4,0 0 151px #2dd6f4"
            width={isTabletOrMobile ? '50%' : '100%'}
          >
            Welcome to contact book
          </Heading>
        </Box>
      )}
    </>
  );
}

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Flex, HStack, VStack, Avatar, Text, Button, Circle } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'react-responsive';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const firstLetter = name.charAt(0);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

  return (
    <Flex
      as="li"
      borderBottom="1px"
      paddingY="8px"
      justify="space-between"
      align="center"
    >
      <HStack>
        {isTabletOrMobile ? (<Avatar
          name={firstLetter}
          color="#000"
          w="30px"
          h="30px"          
          borderRadius="50%"
          bg="#abe1e8"
        />) : (<Avatar
          name={firstLetter}
          color="#000"
          w="50px"
          h="50px"
          borderRadius="50%"
          bg="#abe1e8"
        />)}
        
        <VStack justify="flex-start" align="self-start" minW="100px" mr="10px">
          <Text fontFamily="Merriweather Sans" fontWeight={300}
            fontSize={isTabletOrMobile ? '14px' : '18px'}
          >
            {name}
          </Text>
          <Text fontFamily="Merriweather Sans" fontWeight={300} fontSize={isTabletOrMobile ? '14px' : '18px'}>
            {number}
          </Text>
        </VStack>
      </HStack>
      {isTabletOrMobile ? (
        <Circle size='40px' bg='#ACBCFF' color='white'
        type="button"
          onClick={handleDelete}
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}>
    <DeleteIcon />
  </Circle>
      ) : (
      <Button
        type="button"
        onClick={handleDelete}
        borderColor="#89d3da"
        borderWidth="1px"
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        Delete
      </Button>    
)}




      
    </Flex>
  );
};

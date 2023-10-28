import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Flex, HStack, VStack, Avatar, Text, Button } from '@chakra-ui/react';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const firstLetter = name.charAt(0);

  return (
    <Flex
      as="li"
      borderBottom="1px"
      paddingY="8px"
      justify="space-between"
      align="center"
    >
      <HStack>
        <Avatar
          name={firstLetter}
          color="#000"
          w="50px"
          h="50px"
          borderRadius="50%"
          bg="#abe1e8"
        />
        <VStack justify="flex-start" align="self-start">
          <Text fontFamily="Merriweather Sans" fontWeight={300} fontSize="18px">
            {name}
          </Text>
          <Text fontFamily="Merriweather Sans" fontWeight={300} fontSize="18px">
            {number}
          </Text>
        </VStack>
      </HStack>
      <Button
        type="button"
        onClick={handleDelete}
        borderColor="#89d3da"
        borderWidth="1px"
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        Delete
      </Button>
    </Flex>
  );
};

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Flex, HStack, VStack, Avatar, Text, Circle } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

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
          color="white"
          w={{ base: '30px', md: '50px' }}
          h={{ base: '30px', md: '50px' }}
          borderRadius="50%"
          bg="#acbcff"
        />
        <VStack justify="flex-start" align="self-start" minW="100px" mr="10px">
          <Text
            fontFamily="Merriweather Sans"
            fontWeight={300}
            fontSize={{ base: '14px', md: '18px' }}
          >
            {name}
          </Text>
          <Text
            fontFamily="Merriweather Sans"
            fontWeight={300}
            fontSize={{ base: '14px', md: '18px' }}
          >
            {number}
          </Text>
        </VStack>
      </HStack>
      <Circle
        size={{ base: '30px', md: '50px' }}
        bg="#ACBCFF"
        color="white"
        type="button"
        onClick={handleDelete}
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        <DeleteIcon />
      </Circle>
    </Flex>
  );
};

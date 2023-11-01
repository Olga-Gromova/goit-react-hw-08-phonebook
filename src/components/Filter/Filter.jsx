import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { Text, VStack, Input } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

export const Filter = () => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

  const handleFilterChange = event => {
    return dispatch(setFilterValue(event.target.value));
  };

  return (
    <VStack gap="5px" justify="space-between" mb="5px">
      <Text
        // minH="50%"
        fontFamily="Merriweather Sans"
        fontWeight={300}
        fontSize={isTabletOrMobile ? '16px' : '24px'}
        color="#497a86"
      >
        Find contacts by name:
      </Text>
      <Input
        maxW="400px"
        w="100%"
        minW="200px"
        marginInlineStart="0px"
        type="text"
        name="filter"
        onChange={handleFilterChange}
        borderColor="#89d3da"
        borderWidth="1px"
        bg="#fff"
      />
    </VStack>
  );
};

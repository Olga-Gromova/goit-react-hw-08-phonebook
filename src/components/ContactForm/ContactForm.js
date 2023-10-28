import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsContactAdded } from 'redux/contacts/selectors';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  useToast,
} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const isContactAdded = useSelector(selectIsContactAdded);
  const dispatch = useDispatch();
  const toast = useToast();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1190px)' });

  const isNumberDublicated = number => {
    return contacts.some(contact => contact.number === number);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = contacts.find(contact => contact.name === name);
    if (newContact && isContactAdded) {
      toast({
        position: 'top-right',
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#e84a5f"
            borderRadius="10px"
            textAlign="center"
          >
            {name} is already in contacts
          </Box>
        ),
      });
      return;
    }

    if (isNumberDublicated(number)) {
      toast({
        position: 'top-right',
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#e84a5f"
            borderRadius="10px"
            textAlign="center"
          >
            {number} is already in contacts
          </Box>
        ),
      });
      return;
    }
    if (isContactAdded) {
      toast({
        position: 'top-right',
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#188C69"
            borderRadius="10px"
            textAlign="center"
          >
            The new contact was created!
          </Box>
        ),
      });
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');

    form.reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Box
      as="form"
      maxWidth="660px"
      width="50%"
      minWidth="300px"
      padding="10px"
      onSubmit={handleSubmit}
      textAlign="center"
    >
      <FormControl isRequired mb="32px">
        <FormLabel
          fontFamily="Merriweather Sans"
          fontWeight={400}
          fontSize={isTabletOrMobile ? '18px' : '24px'}
          color="#497a86"
        >
          Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          required
          autoComplete="name"
          placeholder="Enter name"
        />
      </FormControl>
      <FormControl isRequired mb="32px">
        <FormLabel
          fontFamily="Merriweather Sans"
          fontWeight={400}
          fontSize={isTabletOrMobile ? '18px' : '24px'}
          color="#497a86"
        >
          Number
        </FormLabel>
        <Input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          required
          placeholder="Enter phone number"
        />
      </FormControl>
      <Button
        fontFamily="Merriweather Sans"
        fontWeight="bold"
        fontSize="18px"
        type="submit"
        paddingX="20px"
        paddingY="12px"
        w="160px"
        borderColor="#89d3da"
        borderWidth="1px"
        color="#192655"
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        {!isContactAdded ? (
          <CircularProgress isIndeterminate size="24px" color="#188C69" />
        ) : (
          'Add contact'
        )}
      </Button>
    </Box>
  );
};

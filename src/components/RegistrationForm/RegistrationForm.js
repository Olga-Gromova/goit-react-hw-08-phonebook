import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';


export const RegistrationForm = () => {
  const dispatch = useDispatch();

  

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      as="form"
      width={400}
      mx="auto"
      onSubmit={handleSubmit}
      textAlign="center"
    >
      <FormControl isRequired mb="16px">
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="name"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          autoComplete="name"
        />
      </FormControl>
      <FormControl isRequired mb="16px">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          autoComplete="email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          borderColor="#89d3da"
          borderWidth="1px"
          bg="#fff"
          autoComplete="new-password"
        />
      </FormControl>
      <Button
        type="submit"
        width="200px"
        mt={4}
        borderColor="#89d3da"
        borderWidth="1px"
        _hover={{ bg: '#0cc0df', borderColor: 'transparent', color: '#fff' }}
      >
        Sign up
      </Button>
    </Box>
  );
};

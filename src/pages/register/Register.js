import { Formik, Form } from 'formik';
import { registerSchema } from 'constants/schema';
import { nanoid } from 'nanoid';
import {
  Label,
  StyledField,
  StyledError,
  Button,
} from 'pages/register/Register.styled';
import { useSelector } from 'react-redux';
import { selectOperation } from 'redux/selectors';
import { Box } from 'styles/Box';

const initialValues = {
  id: '',
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const operation = useSelector(selectOperation);

  const handleSubmit = (values, { resetForm }) => {
    //   const isContact = contacts.some(
    //     contact =>
    //       contact.name.toLowerCase() === values.name.toLowerCase().trim()
    //   );
    //   if (isContact) {
    //     changeNameMessage(values.name);
    //     return;
    //   } else {
    //     const newContact = {
    //       name: values.name.trim(),
    //       number: values.number.trim(),
    //     };
    //     dispatch(addContact(newContact)) && !error && resetForm();
    //   }
    // };
  };

  return (
    <Box
      pt={3}
      pb={3}
      pr={4}
      pl={4}
      textAlign="center"
      width="300px"
      ml="auto"
      mr="auto"
    >
      <h1>Register Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form>
          <Label htmlFor={nameInputId}>Name</Label>
          <StyledField
            type="text"
            name="name"
            required
            id={nameInputId}
            placeholder="Peter Pen"
          />
          <StyledError name="name" component="div" />
          <Label htmlFor={emailInputId}>Email</Label>
          <StyledField
            type="email"
            name="email"
            required
            id={emailInputId}
            placeholder="your.mail@email.com"
          />
          <StyledError name="email" component="div" />
          <Label htmlFor={passwordInputId}>Password</Label>
          <StyledField
            type="password"
            name="password"
            required
            id={passwordInputId}
          />
          <StyledError name="password" component="div" />
          <Button type="submit" disabled={operation === 'register'}>
            {operation === 'register' ? 'registering...' : 'Register'}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterPage;

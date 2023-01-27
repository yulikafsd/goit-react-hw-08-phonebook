import { Formik, Form } from 'formik';
import { loginSchema } from 'constants/schema';
import { nanoid } from 'nanoid';
import {
  Label,
  StyledField,
  StyledError,
  Button,
} from 'pages/login/Login.styled';
import { useSelector } from 'react-redux';
import { selectOperation } from 'redux/contacts/selectors';
import { Box } from 'styles/Box';

const initialValues = {
  id: '',
  email: '',
  password: '',
};

const LoginPage = () => {
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
      <h1>Login Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form>
          <Label htmlFor={emailInputId}>Login</Label>
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
          <Button type="submit" disabled={operation === 'login'}>
            {operation === 'login' ? 'Logging in...' : 'Log in'}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginPage;

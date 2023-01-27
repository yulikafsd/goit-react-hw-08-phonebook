import { Formik, Form } from 'formik';
import { loginSchema } from 'constants/schema';
import { nanoid } from 'nanoid';
import {
  Label,
  StyledField,
  StyledError,
  Button,
} from 'pages/login/Login.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectOperation, selectError } from 'redux/contacts/selectors';
import { Box } from 'styles/Box';
import { logIn } from 'redux/auth/operations';
// import { Helmet } from 'react-helmet';

const initialValues = {
  id: '',
  email: '',
  password: '',
};

const LoginPage = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const operation = useSelector(selectOperation);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    //   const isContact = contacts.some(
    //     contact =>
    //       contact.name.toLowerCase() === values.name.toLowerCase().trim()
    //   );
    //   if (isContact) {
    //     changeNameMessage(values.name);
    //     return;
    //   } else {
    const user = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(logIn(user)) && !error && resetForm();
    //   }
    // };
  };

  return (
    <>
      {/* <Helmet>
        <title>Log In</title>
      </Helmet> */}
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
    </>
  );
};

export default LoginPage;

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
import { selectError, selectIsAuthorising } from 'redux/auth/selectors';
import { Box } from 'styles/Box';
import { logIn } from 'redux/auth/operations';
import { Helmet } from 'react-helmet-async';

const initialValues = {
  id: '',
  email: '',
  password: '',
};

const LoginPage = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const error = useSelector(selectError);
  const isAuthorising = useSelector(selectIsAuthorising);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(logIn(user)) && !error && resetForm();
  };

  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
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
            <Button type="submit" disabled={isAuthorising}>
              {isAuthorising ? 'Logging in...' : 'Log in'}
            </Button>
          </Form>
        </Formik>
      </Box>
    </>
  );
};

export default LoginPage;

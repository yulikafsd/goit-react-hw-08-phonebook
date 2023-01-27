import { Formik, Form } from 'formik';
import { registerSchema } from 'constants/schema';
import { nanoid } from 'nanoid';
import {
  Label,
  StyledField,
  StyledError,
  Button,
} from 'pages/register/Register.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsAuthorising } from 'redux/auth/selectors';
import { Box } from 'styles/Box';
import { register } from 'redux/auth/operations';
import { Helmet } from 'react-helmet-async';

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

  const dispatch = useDispatch();
  const isAuthorising = useSelector(selectIsAuthorising);
  const error = useSelector(selectError);

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password,
    };
    dispatch(register(newUser)) && !error && resetForm();
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
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
        <h1>Register Page</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
          autoComplete="off"
        >
          <Form>
            <Label htmlFor={nameInputId}>Name</Label>
            <StyledField
              type="text"
              name="name"
              // value={name}
              // onChange={handleChange}
              required
              id={nameInputId}
              placeholder="Peter Pen"
            />
            <StyledError name="name" component="div" />
            <Label htmlFor={emailInputId}>Email</Label>
            <StyledField
              type="email"
              name="email"
              // value={email}
              // onChange={handleChange}
              required
              id={emailInputId}
              placeholder="your.mail@email.com"
            />
            <StyledError name="email" component="div" />
            <Label htmlFor={passwordInputId}>Password</Label>
            <StyledField
              type="password"
              name="password"
              // value={password}
              // onChange={handleChange}
              required
              id={passwordInputId}
            />
            <StyledError name="password" component="div" />
            <Button type="submit" disabled={isAuthorising}>
              {isAuthorising ? 'registering...' : 'Register'}
            </Button>
          </Form>
        </Formik>
      </Box>
    </>
  );
};

export default RegisterPage;

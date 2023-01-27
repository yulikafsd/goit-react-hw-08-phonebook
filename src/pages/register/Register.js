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
// import { useState } from 'react';
import { selectError, selectOperation } from 'redux/contacts/selectors';
import { Box } from 'styles/Box';
import { register } from 'redux/auth/operations';
import { Helmet } from 'react-helmet';

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

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const operation = useSelector(selectOperation);
  const error = useSelector(selectError);

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = (values, { resetForm }) => {
    //   const isContact = contacts.some(
    //     contact =>
    //       contact.name.toLowerCase() === values.name.toLowerCase().trim()
    //   );
    //   if (isContact) {
    //     changeNameMessage(values.name);
    //     return;
    //   } else {
    const newUser = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password,
    };
    alert('register!');
    dispatch(register(newUser)) && !error && resetForm();
    // setName('');
    // setEmail('');
    // setPassword('');
    // }
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
            <Button type="submit" disabled={operation === 'register'}>
              {operation === 'register' ? 'registering...' : 'Register'}
            </Button>
          </Form>
        </Formik>
      </Box>
    </>
  );
};

export default RegisterPage;

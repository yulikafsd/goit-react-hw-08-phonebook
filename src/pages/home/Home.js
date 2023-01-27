import { Box } from 'styles/Box';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Box pt={3} pb={3} pr={4} pl={4} textAlign="center" ml="auto" mr="auto">
        <h1>Homepage</h1>
        <h2>😎🤙📱</h2>
        <p>Welcome to the home page of your Phonebook</p>
      </Box>
    </>
  );
};

export default Home;

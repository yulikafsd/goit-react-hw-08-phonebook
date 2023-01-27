import { Box } from 'styles/Box';
import { ContactForm, ContactList, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectOperation } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';

function ContactsPage() {
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchContacts(signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>My contacts</title>
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
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {operation === 'fetch' && <p>Loading contacts...</p>}
        {error && error !== 'canceled' && (
          <p>Oops, {error}. Try reload the page.</p>
        )}
        {operation !== 'fetch' && !error && <ContactList />}
      </Box>
    </>
  );
}

export default ContactsPage;

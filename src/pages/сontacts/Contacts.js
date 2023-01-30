import { Box } from 'styles/Box';
import { IoPersonAddSharp } from 'react-icons/io5';
import { Button } from './Contacts.styled';
import { ContactForm, ContactList, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectError,
  selectOperation,
  selectIsOpen,
} from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet-async';
import { setEditedContactId, setIsOpen } from 'redux/contacts/contactsSlice';

function ContactsPage() {
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  const isOpen = useSelector(selectIsOpen);
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
      <Box pt={3} pb={3} pr={4} pl={4} display="flex" alignItems="start">
        <Box mr={5}>
          <Filter />
          {operation === 'fetch' && <p>Loading contacts...</p>}
          {error && error !== 'canceled' && (
            <p>Oops, {error}. Try reload the page.</p>
          )}
          {operation !== 'fetch' && !error && <ContactList />}
        </Box>
        <Box>
          <Button
            type="button"
            onClick={() => {
              dispatch(setIsOpen(true));
              dispatch(setEditedContactId(null));
            }}
          >
            <IoPersonAddSharp size="30px" color="inherit" fill="inherit" />
          </Button>
          {isOpen && <ContactForm />}
        </Box>
      </Box>
    </>
  );
}

export default ContactsPage;

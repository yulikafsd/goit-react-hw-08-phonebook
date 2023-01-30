import {
  Header,
  StyledForm,
  Label,
  StyledField,
  StyledError,
  Button,
} from 'components/contactForm/ContactForm.styled.js';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectOperation,
  selectEditedContactId,
} from 'redux/contacts/selectors';
import { addContact, updateContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { formSchema } from 'constants/schema';
import { changeNameMessage } from 'constants/notifications';
import { Box } from 'styles/Box';
import { useEffect, useState } from 'react';
import { setEditedContactId, setIsOpen } from 'redux/contacts/contactsSlice';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  const contactId = useSelector(selectEditedContactId);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (!contactId) {
      setName('');
      setNumber('');
    } else {
      const contact = contacts.find(contact => contact.id === contactId);
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [contacts, contactId]);

  const handleChange = e => {
    const { name, value } = e.target;
    const newValue = value;
    name === 'name' ? setName(newValue) : setNumber(newValue);
  };

  const handleClick = () => {
    dispatch(setIsOpen(false));
    dispatch(setEditedContactId(null));
  };

  const handleSubmit = (values, { resetForm }) => {
    const isContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );

    if (!contactId && isContact) {
      changeNameMessage(name);
      return;
    }

    if (!contactId && !isContact) {
      const newContact = {
        name: name.trim(),
        number: number.trim(),
      };
      dispatch(addContact(newContact)) && !error && resetForm();
      return;
    }

    if (contactId) {
      const hasContact = contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase().trim() &&
          contact.id !== contactId
      );

      if (hasContact) {
        changeNameMessage(name);
      }

      if (!hasContact) {
        const newData = {
          id: contactId,
          name: name.trim(),
          number: number.trim(),
        };
        dispatch(updateContact(newData)) && !error && resetForm();
        return;
      }
    }
  };

  return (
    <Box display="block">
      <Header>{!contactId ? 'Add contact' : 'Update contact'}</Header>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <StyledForm>
          <Label htmlFor={nameInputId}>Name</Label>
          <StyledField
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Peter Pen"
            required
            id={nameInputId}
          />
          <StyledError name="name" component="div" />
          <Label htmlFor={numberInputId}>Number</Label>
          <StyledField
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            placeholder="111 - 123 456 789"
            required
            id={numberInputId}
          />
          <StyledError name="number" component="div" />
          <Box as="div" display="flex" justifyContent="space-around">
            <Button
              type="submit"
              disabled={operation === 'add' || operation === 'add'}
            >
              {contactId && operation !== 'update' && 'Update'}
              {contactId && operation === 'update' && 'Updating...'}
              {!contactId && operation !== 'add' && 'Add'}
              {!contactId && operation === 'add' && 'Adding...'}
            </Button>
            <Button
              type="button"
              disabled={operation === 'add' || operation === 'add'}
              onClick={handleClick}
            >
              Cancel
            </Button>
          </Box>
        </StyledForm>
      </Formik>
    </Box>
  );
};

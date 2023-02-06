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
  selectIsOpen,
  selectUsedForm,
} from 'redux/contacts/selectors';
import { addContact, updateContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { formSchema } from 'constants/schema';
import { changeNameMessage } from 'constants/notifications';
import { Box } from 'styles/Box';
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
  const isOpen = useSelector(selectIsOpen);
  const usedForm = useSelector(selectUsedForm);

  const handleClick = () => {
    if (isOpen) {
      dispatch(setIsOpen(false));
    }
    if (contactId) {
      dispatch(setEditedContactId(null));
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    const isContact = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );

    const isContactName = !contactId && isContact;
    const isNewContact = !contactId && !isContact;

    if (isContactName) {
      return changeNameMessage(values.name);
    }

    if (isNewContact) {
      const newContact = {
        name: values.name.trim(),
        number: values.number.trim(),
      };
      dispatch(addContact(newContact)) && !error && resetForm();
      return;
    }

    if (contactId) {
      const isExistingContact = contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.toLowerCase().trim() &&
          contact.id !== contactId
      );

      if (isExistingContact) {
        return changeNameMessage(values.name);
      }

      if (!isExistingContact) {
        const newData = {
          id: contactId,
          name: values.name.trim(),
          number: values.number.trim(),
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
        enableReinitialize="true"
        initialValues={
          usedForm === 'update' && operation !== 'update'
            ? contacts.find(contact => contact.id === contactId)
            : initialValues
        }
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <StyledForm>
          <Label htmlFor={nameInputId}>Name</Label>
          <StyledField
            type="text"
            name="name"
            placeholder="Peter Pen"
            required
            id={nameInputId}
          />
          <StyledError name="name" component="div" />
          <Label htmlFor={numberInputId}>Number</Label>
          <StyledField
            type="tel"
            name="number"
            placeholder="+11(123)4567890"
            required
            id={numberInputId}
          />
          <StyledError name="number" component="div" />
          <Box as="div" display="flex" justifyContent="space-around">
            <Button
              type="submit"
              disabled={operation === 'add' || operation === 'update'}
            >
              {contactId && operation !== 'update' && 'Update'}
              {contactId && operation === 'update' && 'Updating...'}
              {!contactId && operation !== 'add' && 'Add'}
              {!contactId && operation === 'add' && 'Adding...'}
            </Button>
            <Button
              type="button"
              disabled={operation === 'add' || operation === 'update'}
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

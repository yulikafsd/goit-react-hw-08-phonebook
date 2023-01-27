import {
  Label,
  StyledField,
  StyledError,
  Button,
} from 'components/contactForm/ContactForm.styled.js';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectOperation,
} from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { contactSchema } from 'constants/schema';
import { changeNameMessage } from 'constants/notifications';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isContact = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );
    if (isContact) {
      changeNameMessage(values.name);
      return;
    } else {
      const newContact = {
        name: values.name.trim(),
        number: values.number.trim(),
      };
      dispatch(addContact(newContact)) && !error && resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <Label htmlFor={nameInputId}>Name</Label>
        <StyledField type="text" name="name" required id={nameInputId} />
        <StyledError name="name" component="div" />
        <Label htmlFor={numberInputId}>Number</Label>
        <StyledField type="tel" name="number" required id={numberInputId} />
        <StyledError name="number" component="div" />
        <Button type="submit" disabled={operation === 'add'}>
          {operation === 'add' ? 'Adding...' : 'Add Contact'}
        </Button>
      </Form>
    </Formik>
  );
};

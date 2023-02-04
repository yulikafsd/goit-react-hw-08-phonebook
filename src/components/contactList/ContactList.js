import { Box } from 'styles/Box';
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import {
  Item,
  ContactWrapper,
  ButtonsWrapper,
  Text,
  Number,
  Button,
} from 'components/contactList/ContactList.styled';
import {
  selectEditedContactId,
  selectIsOpen,
  selectOperation,
} from 'redux/contacts/selectors';
import { selectFilteredContacts } from 'redux/filter/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { setEditedContactId, setIsOpen } from 'redux/contacts/contactsSlice';

export function ContactList() {
  const operation = useSelector(selectOperation);
  const searchResults = useSelector(selectFilteredContacts);
  const editedContactId = useSelector(selectEditedContactId);
  const contactId = useSelector(selectEditedContactId);
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleEdit = id => {
    if (isOpen && contactId === id) {
      dispatch(setIsOpen(false));
      dispatch(setEditedContactId(null));
      return;
    }
    dispatch(setEditedContactId(id));
    if (!isOpen) {
      dispatch(setIsOpen(true));
    }
  };

  return (
    <>
      {searchResults.length === 0 && (
        <Box as="p" fontSize={14}>
          No contacts
        </Box>
      )}
      {searchResults.length > 0 && (
        <Box as="ul" textAlign="left">
          {searchResults.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <ContactWrapper>
                  <Text>{name}</Text>
                  <Number>{number}</Number>
                </ContactWrapper>

                <ButtonsWrapper>
                  <Button
                    type="button"
                    disabled={operation === 'update'}
                    onClick={() => handleEdit(id)}
                  >
                    {operation === 'update' && editedContactId === id ? (
                      <BiLoaderCircle
                        size="20px"
                        color="white"
                        fill="#00bcd5"
                      />
                    ) : (
                      <AiFillEdit size="20px" color="white" fill="#00bcd5" />
                    )}
                  </Button>

                  <Button
                    type="button"
                    disabled={operation === id}
                    onClick={() => handleDelete(id)}
                  >
                    {operation === id ? (
                      <BiLoaderCircle
                        size="20px"
                        color="white"
                        fill="#00bcd5"
                      />
                    ) : (
                      <AiFillCloseCircle
                        size="20px"
                        color="white"
                        fill="#00bcd5"
                      />
                    )}
                  </Button>
                </ButtonsWrapper>
              </Item>
            );
          })}
        </Box>
      )}
    </>
  );
}

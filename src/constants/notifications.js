import { toast } from 'react-toastify';

export const loadMessage = contacts => {
  contacts.length > 0
    ? toast.info(`There are ${contacts.length} contacts in your phonebook`)
    : toast.info(`There are no contacts in your phonebook`);
};

export const addMessage = name => toast.success(`Contact ${name} was added!`);

export const deleteMessage = name =>
  toast.success(`Contact ${name} was deleted!`);

export const updateMessage = name =>
  toast.success(`Contact ${name} was updated!`);

export const changeNameMessage = name =>
  toast.warn(`Contact ${name} already exists. Please, choose another name`);

export const logInMessage = name => toast(`${name}, welcome to your Phonebook`);

export const logOutMessage = () => toast('Come back soon... 😥');

export const errorMessage = error =>
  toast.error(`Something went wrong. ${error}. Try again or reload the page`);

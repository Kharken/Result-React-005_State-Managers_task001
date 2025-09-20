import { ContactDto } from 'src/types/dto/ContactDto';

const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
const GET_CONTACT = 'GET_CONTACT';
// const GET_ALL_GROUPS = 'GET_ALL_GROUPS';
// const GET_GROUP = 'GET_GROUP';
// const GET_FAVORITE_CONTACTS = 'GET_FAVORITE_CONTACTS';

const getAllContactsAction = (contacts: ContactDto[]) => {
  return { type: GET_ALL_CONTACTS, payload: contacts };
};

// const getAllGroupsAction = () => {
//   return { type: GET_ALL_GROUPS };
// };

const getContactAction = (contactId: string) => {
  return { type: GET_CONTACT, payload: contactId };
};

export {
  GET_CONTACT,
  GET_ALL_CONTACTS,
  getAllContactsAction,
  getContactAction,
};

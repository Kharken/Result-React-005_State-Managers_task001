import groups from 'src/__data__/group-contacts.json';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

const initialState: GroupContactsDto[] = groups;

const groupsReducer = (state = initialState) => {
  return state;
};

export { groupsReducer };

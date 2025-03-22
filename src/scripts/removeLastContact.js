import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();
    const removedContact = contacts.splice(0, contacts.length - 1);
    return writeContacts(removedContact);

};

removeLastContact();

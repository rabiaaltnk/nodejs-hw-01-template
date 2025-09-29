import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const list = await readContacts();
    const one = createFakeContact();
    list.push(one);
    await writeContacts(list);
};

addOneContact();

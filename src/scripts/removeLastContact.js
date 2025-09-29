import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const list = await readContacts();
    if (list.length === 0) {
        return;
    }
    list.pop();
    await writeContacts(list);
};

removeLastContact();

import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const list = await readContacts();
    return list;
};

console.log(await getAllContacts());

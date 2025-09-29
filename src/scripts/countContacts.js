import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const list = await readContacts();
    return list.length;
};

console.log(await countContacts());

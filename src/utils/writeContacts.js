import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    const payload = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, payload, 'utf-8');
};

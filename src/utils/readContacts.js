import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const raw =await fs.readFile(PATH_DB, 'utf-8');
        if (!raw.trim()) return [];
        const data = JSON.parse(raw);
        return Array.isArray(data) ? data : [];
    } catch (err) {
        console.error(err);
        return [];
    }
};

import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
  const existing = await readContacts();

  const fresh = [];
  for (let i = 0; i < number; i++) {
    fresh.push(createFakeContact());
  }

  const merged = [...existing, ...fresh];

  await writeContacts(merged);

};

generateContacts(5);

import Theme from './Theme/Theme';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './App.module.css';

export function App() {
  return (
    <div className={css.appBox}>
      <main>
        <Theme />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </main>
    </div>
  );
}

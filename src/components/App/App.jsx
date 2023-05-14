import { BoxApp } from './App.styled';
import Section from 'components/Section/Section';
import Form from 'components/PhoneForm/PhoneForm';
import FilterContacts from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const App = () => {
  return (
    <BoxApp>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <FilterContacts />
        <ContactsList />
      </Section>
    </BoxApp>
  );
};
export default App;

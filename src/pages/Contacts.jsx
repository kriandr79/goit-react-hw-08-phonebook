import ContactList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";

const Contacts = () => {
  return (
    <>
      <h1>My Contacts</h1>
      <Form />
      <Filter/>
      <ContactList/>
    </>
  );
};

export default Contacts;

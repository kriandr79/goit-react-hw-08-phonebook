import ContactList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";

const Contacts = () => {
  return (
    <>
      <div>Contacts Page</div>
      <Form />
      <Filter/>
      <ContactList/>
    </>
  );
};

export default Contacts;

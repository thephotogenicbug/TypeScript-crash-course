// union type
type StringOrNumber = string | number | boolean;

function acceptValue(val: StringOrNumber) {}

// intersection type
interface BusinessPartner {
  name: string;
}

interface ContactDetails {
  email: string;
  phone: string;
}

type BusinessContact = BusinessPartner & ContactDetails;

const contact: BusinessContact = {
  name: "time",
  email: "xyz@gmail.com",
  phone: "",
};

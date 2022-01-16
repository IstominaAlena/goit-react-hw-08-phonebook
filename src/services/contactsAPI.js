import axios from 'axios';

axios.defaults.baseURL = 'https://61debee6fb8dae0017c2e232.mockapi.io';

const path = '/contacts';

export const getContactsAPI = async () => {
  const { data } = await axios.get(path);
  return data;
};

export const addContactAPI = async contact => {
  const { data } = await axios.post(path, contact);
  const responsedContact = {
    ...contact,
    id: data.id,
  };
  return responsedContact;
};

export const deleteContactAPI = async id => {
  await axios.delete(path + '/' + id);
  return id;
};

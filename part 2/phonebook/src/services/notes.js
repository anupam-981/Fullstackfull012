import axios from 'axios';

const baseUrl = 'https://fullstackback-arcu.onrender.com/api/persons'; // Add "/api/persons"
 // Corrected URL

const getAll = () => axios.get(baseUrl);
const create = (newObject) => axios.post(baseUrl, newObject);
const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject);
const remove = (id) => axios.delete(`${baseUrl}/${id}`);

export default { getAll, create, update, remove };

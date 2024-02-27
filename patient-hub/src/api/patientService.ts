

// GET request for remote image in node.js
import { client } from './index';
import { Patient } from '../App';

export const getPatients = async () =>
  await client.get('patient').then(r => r.data as Patient[]);

export const createPatient = async (patient: Patient) =>
  await client.post('patient', patient);

export const getPatient = async (id: string) =>
  await client.get(`patient/${id}`);

/*export const createPatient(patient: Patient) {
  const res = await fetch('http://localhost:3001/patients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patient),
  });
  const { success, data } = await res.json();
  if (!success) {
    throw new Error('An error occurred while creating the patient');
  }
  queryClient.setQueriesData(['patients'], (old) => [...old, data]);*/
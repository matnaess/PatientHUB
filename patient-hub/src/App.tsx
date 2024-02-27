import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Spinner from './components/Spinner';
import RegisterPatientForm from './RegisterPatientForm';
import { getPatient, getPatients } from './api/patientService';


export interface Patient {
  createdAt: string;
  id: string;
  fnr: string;
  name: string;
  anamnese: string;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['patients'],
    queryFn: getPatients,
  });


  function addPatient() {
    setIsOpen(true);
  }


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <Wrapper>
        <h1>Feilmelding</h1>
        <div>Noe gikk galt</div>
      </Wrapper>
    );
  }

  const onPatientClick = (id: string) => {
    getPatient(id).then(r => console.log(r));
  };

  const patients = data as Patient[];


  return (
    <Wrapper>
      <h1>Kvikna Private Legevaktsenter</h1>
      <h2>Pasienter</h2>
      {patients.map((patient: Patient) => (
        <Card onClick={() => onPatientClick(patient.id)}>
          <div key={patient.id}>
            <p>{patient.name} </p>
          </div>
        </Card>
      ))}
      <Card>
        <button onClick={addPatient}>Legg til pasient</button>
      </Card>
      <RegisterPatientForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
`;

const Card = styled.div`
    padding: 2em;
`;

export default App;

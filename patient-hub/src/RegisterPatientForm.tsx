import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Patient } from './App';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createPatient } from './api/patientService';

export default function RegisterPatientForm({ isOpen, setIsOpen }) {
  const { register, handleSubmit} = useForm<Patient>();
  const mutation = useMutation(createPatient, {
    onSuccess: () => {
      setIsOpen(false);
    },
  });

  function onSubmit(data: Patient) {
    mutation.mutate(data);
  }
  function closeForm() {
    setIsOpen(false);
  }


  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Fnr</label>
        <input {...register('fnr', { required: true, maxLength: 11 })} />
      </div>
      <div>
        <label>Navn</label>
        <input {...register('name', { required: true })} />
      </div>
      <div>
        <label>Anamnese</label>
        <input {...register('anamnese', { required: true })} />
      </div>
      <button type={"submit"} >Opprett pasient</button>
      <button onClick={closeForm} >Lukk skjema</button>
    </form>
  );

}
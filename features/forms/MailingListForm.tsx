'use client';

import Button from '@/components/buttons/Button';
import yup from '@/lib/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

export default function MailingListForm() {
  const FormSchema = yup.object({
    email: yup.string().email('Please enter a valid email address.').required(),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(FormSchema),
  });

  // modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(formData) {
    const { email } = formData;
    async function postEmail() {
      try {
        await axios({
          method: 'POST',
          url: '/api/mailinglist/',
          data: { email },
        }).then(() => {
          console.log('success submit..');
          openModal();
          reset();
        });
      } catch (error) {
        console.log('Error submitting form..');
      }
    }
    postEmail();
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="mx-auto text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-auto gap-2">
        <div>
          <input
            {...register('email')}
            placeholder="enter email"
            className="flex-2 input input-lg w-full  max-w-xs rounded-full text-gray-800"
          />
          {formState.errors.email && (
            <div className="text-xs text-red-500">
              {formState.errors.email.message}
            </div>
          )}
        </div>

        <Button
          variant="contained"
          type="submit"
          className="flex-2 btn capitalize text-white"
        >
          Send
        </Button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Success"
        ariaHideApp={false}
      >
        <h2>Success!</h2>
        <div>Email Signup Success!</div>
      </Modal>
    </div>
  );
}

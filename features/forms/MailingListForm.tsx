'use client';

import Button from '@/components/buttons/Button';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

export default function MailingListForm() {
  const [email, setEmail] = useState('');

  // modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    async function postEmail() {
      try {
        const data = await axios({
          method: 'POST',
          url: '/api/mailinglist/',
          data: { email },
        }).then((res) => {
          console.log('success submit..');
          setEmail('');
          openModal();
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
      <form onSubmit={(e) => handleSubmit(e)} className="flex w-auto gap-2">
        <input
          type="email"
          placeholder="example@email.com"
          name="email"
          className="flex-2 input input-lg w-full  max-w-xs rounded-full"
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
        />

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

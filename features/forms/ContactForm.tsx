'use client';

import Button from '@/components/buttons/Button';
import { Typography } from '@/components/Typography';
import yup from '@/lib/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const FormSchema = yup.object({
    email: yup.string().email('Please enter a valid email address.').required(),
    message: yup.string().required(),
  });

  const { handleSubmit, register, reset, formState } = useForm({
    defaultValues: {
      email: '',
      message: '',
    },
    resolver: yupResolver(FormSchema),
  });

  function onSubmit(formData) {
    console.log('formData', formData);
    async function postContact() {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = await axios({
          method: 'POST',
          url: '/api/contact/',
          data: { email, message },
        }).then(() => {
          console.log('success submit..');
          setEmail('');
          setMessage('');
          openModal();
          reset();
        });
      } catch (error) {
        console.log('Error submitting form..');
      }
    }
    postContact();
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
    <>
      <div className="card mx-auto w-full bg-base-100 p-16 shadow-xl">
        <h2 className="card-title"></h2>
        <Typography variant="h2">Contact Form</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="card">
          {/* EMAIL */}
          <div className="form-control">
            <label className="label">
              <Typography variant="p" className="font-bold">
                What is your email?
              </Typography>
            </label>
            <input
              {...register('email')}
              placeholder="example@example.com"
              className="input input-lg w-full border border-gray-200 text-gray-800"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {formState.errors.email && (
              <Typography variant="p" className="text-red-500">
                {formState.errors.email.message}
              </Typography>
            )}
          </div>

          {/* MESSAGE */}
          <div className="form-control">
            <label className="label">
              <Typography variant="p" className="font-bold">
                What is your message?
              </Typography>
            </label>
            <textarea
              {...register('message')}
              className="textarea-bordered textarea textarea-lg mb-4 h-48 w-full border border-gray-200 text-gray-800"
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.currentTarget.value)}
            ></textarea>
            {formState.errors.email && (
              <Typography variant="p" className="text-red-500">
                {formState.errors.message.message}
              </Typography>
            )}
          </div>

          <Button variant="contained" type="submit">
            submit
          </Button>
        </form>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Success"
        ariaHideApp={false}
      >
        <h2>Success!</h2>
      </Modal>
    </>
  );
}

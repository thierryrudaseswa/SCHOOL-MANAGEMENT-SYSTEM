import React, { useState } from 'react';
import contact from "../../assets/images/contact 1.svg";
import './Contact.css'; 

const Contact = () => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event?.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className='p-4 Contact'>
      <div className="h-32 grid justify-center font-bold text-white">
        <h1 className='flex items-center justify-center font-extrabold text-3xl text-black'>Contact</h1>
        <p className='' style={{ color: "#7F7F7F" }}>Find us on Email</p>
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-4 flex justify-center">
          <form className="my-auto p-5 rounded-2xl" style={{ background: "#F5F5F5", width: "500px" }} onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="shadow-sm  bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="block mb-2 text-sm font-bold">Subject</label>
              <input
                type="text"
                id="text"
                value={text}
                onChange={handleTextChange}
                className="shadow-sm  bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder=" your subject here..."
                required
              />
            </div>

            <div className='mb-5'>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={handleMessageChange}
                className="shadow-sm  bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="send a message..."
              ></textarea>
            </div>
            <div className="h-24 flex items-center justify-center">
              <button className='h-16 w-full rounded-full text-white font-bold' style={{ background: "#EE780B" }}>Send me a message</button>
            </div>
          </form>
        </div>
        <div className="col-span-4 flex justify-center">
          <img src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

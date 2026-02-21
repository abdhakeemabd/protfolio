import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Alert from '../component/alert';
import { Particles } from '../component/particles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")
  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 5000);
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_y0viyat",
        "template_wfj8g1m",
        {
          from_name: formData.name,
          to_name: "Hakeem",
          from_email: formData.email,
          to_email: "hakeem@codesap.com",
          message: formData.message
        },
        "qWE6qxpTaTR_JnFEc"
      );

      setIsLoading(false);
      showAlertMessage("success", "Your message has been sent successfully!")

      setFormData({ name: "", email: "", message: "", });
    } catch (error) {
      showAlertMessage("danger", "Failed to send message")
    }
  };

  return (
    <section className='relative flex flex-col items-center c-space section-spacing'>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <h2 className='text-heading mb-10'>Contact Me</h2>
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className='flex flex-col items-center justify-center max-w-md w-full p-8 mx-auto border border-white/10 rounded-2xl bg-midnight/30 backdrop-blur-md shadow-2xl'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-3xl font-bold bg-linear-to-r from-lavender to-royal bg-clip-text text-transparent'>Let's Talk</h2>
          <p className='text-neutral-400'>Whether you're looking to build a website, improve your existing website or bring a unique project to life, I'd love to help.</p>
        </div>

        <form className='w-full' onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className='field-label'>Full name <span className='text-red-500'>*</span></label>
            <input type="text" id='name' name='name' className='field-input field-input-focus' placeholder='Enter Your name' onChange={handleChange} required value={formData.name} />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className='field-label'>Email <span className='text-red-500'>*</span></label>
            <input type="email" id='email' name='email' className='field-input field-input-focus' placeholder='Enter Email' onChange={handleChange} required value={formData.email} />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className='field-label'>Message <span className='text-red-500'>*</span></label>
            <textarea id='message' name='message' rows={5} className='field-input field-input-focus' placeholder='Enter Message' onChange={handleChange} required value={formData.message} />
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='w-full px-6 py-4 text-lg font-bold text-white bg-linear-to-r from-lavender to-royal rounded-xl cursor-pointer hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-royal/20'
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
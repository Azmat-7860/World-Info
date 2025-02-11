import React from 'react'

function Contact() {
  const handleSubmit = (formData)=> {
    // console.log(formData);
    const formInput = Object.fromEntries(formData.entries())
    console.log(formInput);

  }
  return <div className='contact-container container text-center'>
    <h2 className='text-white fw-bold mt-5'>
      Contact Us!!
    </h2>
    <div className="form-container container mt-4 ">
      <form action={handleSubmit} className='contact-form m-auto  d-flex justify-content-center align-items-center flex-column'>
        <input type="text"
        placeholder='Enter your Name '
        name='username'
        autoCapitalize='true'
        required
        />
        <input type="email"
        placeholder='Enter your Email '
        name='email'
        autoCapitalize='true'
        required
        />
        <textarea name="message" placeholder='Leave Your message.....' rows={5}></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  </div>
}

export default Contact
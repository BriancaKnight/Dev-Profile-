import React from 'react';

function ContactForm() {
  return (
    <>
    <h2>Want me to reach out? Happy to! </h2>
    <form>
      <label for='name'>Name or Business:</label>
      <input type='text' name='name'/><br/>
      <label for='email'>Email Adress:</label>
      <input type='text' name='name'/><br/>
    </form>
    <h3>Looking forward to chatting soon!</h3>
</>
  );
}

export default ContactForm;
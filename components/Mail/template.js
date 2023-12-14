import * as React from 'react';

export const EmailTemplate = ({ email, name, message }) => (
  <div>
    <h1>Sender name: {name}</h1>
    <p>Sender email: {email}</p>
    <p>Sender message: {message}</p>
  </div>
);

import React from 'react';
import { useInput } from 'hooks/useInput';

export const AboutPage = () => {
  const [name, handleName] = useInput('');
  const [surname, handleSurName] = useInput('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({ name, surname });
  };

  return (
    <div>
      <h3>About</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            onChange={handleName}
            value={name}
            placeholder="Frist Name"
          />
        </div>

        <div>
          <input
            type="text"
            name="surname"
            onChange={handleSurName}
            value={surname}
            placeholder="Last Name"
          />
        </div>

        <button>Send</button>
      </form>
    </div>
  );
};

import React from 'react';
import { useState } from 'react';
import { FormStyled, FormInput, FormLabel, FormButton } from './Form.styled';
import PropTypes from 'prop-types';

export const Form = ({ getValue }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isAddedContact = { name, number };
    getValue(isAddedContact);
    resetForm();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormStyled>
  );
};

Form.propTypes = {
  getValue: PropTypes.func.isRequired,
};

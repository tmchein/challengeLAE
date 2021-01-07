import React from 'react';
import style from './FormButton.module.scss';

const FormButton = ({ text }) => {
  return (
    <button type="submit" className={style.o_button}>
      {text}
    </button>
  );
};

export default FormButton;

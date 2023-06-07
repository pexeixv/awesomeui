import React from 'react';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  foregroundColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text='button',
  backgroundColor = 'blue',
  foregroundColor = 'white',
}) => {
  const buttonStyle = {
    backgroundColor,
    color: foregroundColor,
    border: 0,
    outline: 0,
    padding: '1em 2em',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
};

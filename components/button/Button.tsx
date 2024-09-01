import React from 'react';

interface ButtonProps {
    text: string;
  }

const Button : React.FC<ButtonProps> = ({text}) => {
    return (
        <button className="btn border-none px-6 bg-[#ccf281] hover:text-[#ccf281] hover:bg-black">{text}</button>
    )
}

export default Button;
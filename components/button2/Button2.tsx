import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    text: string;
  }

const Button2 : React.FC<ButtonProps> = ({text}) => {
    return (
        <motion.button 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' },
          }}
          whileTap={{
            scale: 0.9,
            opacity: 0.7,
            transition: { type:"spring",duration: 0.2 },
          }}
            className="px-8 py-4 text-lg rounded-full font-semibold text-black bg-[#CCF281] hover:bg-[#D3BCE5] max-w-max"
        >
            {text}
        </motion.button>
    )
}

export default Button2;
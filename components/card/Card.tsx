import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    text: string;
    imageText: string
  }

const Card : React.FC<CardProps> = ({title,text,imageText}) => {
    return (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' },
          }}
            className="flex flex-col items-center text-center m-2"
        >
            <motion.img 
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                src={imageText} alt="image" />
            <h2 
                style={{"fontFamily":"Big Shoulders Display"}}
                className='text-[35px] font-semibold mt-5 mb-3 tracking-wider text-[#CCF281] hover:text-[#D3BCE5]'
            >{title}</h2>
            <p
                className='text-lg'
            >{text}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="size-7 mt-7 hover:text-[#CCF281] text-[#D3BCE5]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </motion.div>
    )
}

export default Card;
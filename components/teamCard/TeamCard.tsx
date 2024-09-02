import React from 'react';
import { motion } from 'framer-motion';

interface TeamCardProps {
    name: string;
    title: string;
    imageText: string
  }

const TeamCard : React.FC<TeamCardProps> = ({name,title,imageText}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }} 
            className="text-white mt-10 z-20"
        >
            <img src={imageText} alt="" className="w-48 h-48 rounded-full"/>
            <p className="text-lg font-bold mt-5">{name}</p>
            <p className="font-extralight text-sm">{title}</p>
        </motion.div>
    )
}

export default TeamCard;
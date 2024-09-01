import React from 'react';
import { motion } from 'framer-motion';


const Section4 = () => {
    return (
        <div className="bg-black absolute">
        <img src="/sec4.jpg" alt="section4 bg" className="opacity-50"/>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeIn' },
          }}
          className="text-white text-center"
        >
          <p 
            style={{"fontFamily":"Big Shoulders Display"}}
            className="text-center lg:text-left font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px]"
          >
            SETTING THE PACE IN TECHNOLOGY
          </p>
        </motion.div>

      </div>
    )
}

export default Section4;
import React from 'react';
import { motion } from 'framer-motion';


const Footer = () => {
    return (
        <div className="text-white bg-[#1a191a]">
            <div className="flex flex-col justify-around lg:grid lg:grid-cols-5 gap-5 px-8 pt-28 pb-20">
              <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'easeIn' },
                  }} className="col-span-2">
                <p 
                  style={{"fontFamily":"Big Shoulders Display"}}
                  className="text-left font-extrabold tracking-wider leading-none text-[40px] md:text-[50px] lg:text-[60px]"
                >
                  SETTING THE PACE IN TECHNOLOGY
                </p>
                <div className="flex gap-5 mt-10">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'easeIn' },
                  }} className="text-right">
                <p 
                  style={{"fontFamily":"Big Shoulders Display"}}
                  className="font-extrabold tracking-wider leading-none text-[30px] text-[#CCF281]"
                >
                  SERVICES
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  <p className="hover:text-[#CCF281]">Solution</p>
                  <p className="hover:text-[#CCF281]">Development</p>
                  <p className="hover:text-[#CCF281]">Clouds</p>
                  <p className="hover:text-[#CCF281]">VR / AR</p>
                  <p className="hover:text-[#CCF281]">Security</p>
                </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'easeIn' },
                  }} className="text-right">
                <p 
                  style={{"fontFamily":"Big Shoulders Display"}}
                  className="font-extrabold tracking-wider leading-none text-[30px] text-[#CCF281]"
                >
                  COMPANY
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  <p className="hover:text-[#CCF281]">About</p>
                  <p className="hover:text-[#CCF281]">Partnership</p>
                  <p className="hover:text-[#CCF281]">Features</p>
                  <p className="hover:text-[#CCF281]">Testimonials</p>
                  <p className="hover:text-[#CCF281]">Media Center</p>
                  <p className="hover:text-[#CCF281]">Career</p>
                </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'easeIn' },
                  }} className="text-right">
                <p 
                  style={{"fontFamily":"Big Shoulders Display"}}
                  className="font-extrabold tracking-wider leading-none text-[30px] text-[#CCF281]"
                >
                  LINKS
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  <p className="hover:text-[#CCF281]">Our Clients</p>
                  <p className="hover:text-[#CCF281]">Contact</p>
                  <p className="hover:text-[#CCF281]">Help Center</p>
                  <p className="hover:text-[#CCF281]">News</p>
                  <p className="hover:text-[#CCF281]">Insights</p>
                </div>
              </motion.div>
            </div>

            <hr />

            <div className="mx-8 mt-4 pb-8 flex justify-between">
              <p>Powered by Shah Alam</p>
              <div className="flex">
                <p>Privacy Policy</p>
                <p> | </p>
                <p>Out Teams</p>
              </div>
            </div>
        </div>
    )
}

export default Footer;
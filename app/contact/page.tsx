'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import '@fontsource/big-shoulders-display/400.css';
import Footer from "@/components/footer/Footer";
import TeamCard from "@/components/teamCard/TeamCard";
import Button2 from "@/components/button2/Button2";

export default function Contact() {
  return (
    <>
      <Navbar/>

      {/* Section 1 */}
      <div className="bg-black relative">
        <div
          style={{backgroundImage:"url('/mainbg.jpg')"}}
          className="bg-cover text-white"
        >
          <div className="bg-black h-full w-full absolute top-0 left-0 z-0 opacity-75"></div>

          <div className="flex flex-col text-center py-28 md:py-36">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              style={{"fontFamily":"Big Shoulders Display"}} 
              className="font-bold tracking-wide leading-none text-[50px] md:text-[70px] lg:text-[100px] z-20"
            >
                CONTACT US
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }} 
                className="text-lg md:text-xl mt-10 mx-10 md:mx-36 z-20"
            >
                Have questions or need assistance? Feel free to reach out to us. Our team is here to help
            </motion.p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-[#000] text-white px-8 py-28">
        <div className="flex flex-col md:grid md:grid-cols-5 gap-10 mt-0 md:mt-20">
          <div className="md:col-span-3 flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: 'easeIn' },
                }} 
                className="flex flex-col gap-5"
            >
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  style={{"fontFamily":"Big Shoulders Display"}} 
                  className="font-bold tracking-wide leading-none text-[50px] md:text-[80px] z-20">
                    GET IN TOUCH
                </motion.h1>
                <div>
                  <form className="w-full md:w-3/4 my-10">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="form_name" id="form_name" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-[#CCF281] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#CCF281] peer" placeholder=" " required />
                        <label htmlFor="form_name" className="peer-focus:font-medium absolute text-lg text-[#D3BCE5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[##CCF281] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="form_phone" id="form_phone" className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-[#CCF281] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#CCF281] peer" placeholder=" " required />
                        <label htmlFor="form_phone" className="peer-focus:font-medium absolute text-lg text-[#D3BCE5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[##CCF281] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone</label>
                    </div>
                    <div className="relative z-0 w-full my-5 group">
                      <label htmlFor="message" className="block mb-2 text-lg font-medium text-[#D3BCE5] dark:text-white">Your message</label>
                      <textarea id="message" rows={4} className="block p-2.5 w-full text-base text-gray-900 bg-transparent rounded-lg border border-[#CCF281] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <Button2 text="SUBMIT"/>
                  </form>
                </div>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: 'easeIn' },
                }}  
                className="flex flex-col gap-5 mb-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                style={{"fontFamily":"Big Shoulders Display"}} 
                className="font-bold tracking-wide leading-none text-[30px] md:text-[35px]  z-20">
                  OTHERS INFO
              </motion.h1>
              <div className="flex flex-col gap-8 mt-10 md:mt-24">
                <div className="flex gap-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ccf281" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg">shahalamabir21@gmail.com</p>
                    <p>Feel free to share your thoughts with this email adress.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#ccf281" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg">01869230211</p>
                    <p>We are looking forward to hear your advices.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><path fill="#ccf281" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg">Bandar, Narayanganj</p>
                    <p>Here we work to grow your dream, so dream big.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>


      {/* Section 7 */}
      <Footer />
    </>
  );
}

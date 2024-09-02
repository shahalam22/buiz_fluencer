'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import '@fontsource/big-shoulders-display/400.css';
import Button2 from "@/components/button2/Button2";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>

      {/* Section 1 */}
      <div className="bg-black relative">
        <div
          style={{backgroundImage:"url('/mainbg.jpg')"}}
          className="text-white"
        >
          <div className="bg-black h-full w-full absolute top-0 left-0 z-0 opacity-75"></div>

          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              style={{"fontFamily":"Big Shoulders Display"}} 
              className="text-center font-black tracking-wide leading-none text-[80px] md:text-[150px] lg:text-[200px] mt-28 z-20">
                ELEVATE YOUR BRAND WITH INFLUENCERS
            </motion.h1>

            <div className="flex flex-col md:flex-row justify-between items-center mx-16 md:mx-36 my-10 z-20">
              <Button2 text="GET STARTED"/>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: 'easeInOut' },
                }}
                className="text-3xl text-right mt-10 md:mt-0 font-sans"
              >
                Your Product, <br />Their Passion, <br />Our Platform
              </motion.h2>
            </div>

            <div className="container mx-auto mt-16 z-20">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    staggerChildren: 1,
                    ease: "easeIn",
                  }}
                className="grid grid-cols-4 md:grid-cols-12 gap-4"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'easeIn' },
                  }}
                  className="col-span-4 bg-[#5555AE] p-6 flex flex-col space-y-28">
                  <p className="text-xl">Riding the Waves of Influencer Marketing</p>
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">LEARN MORE</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'easeIn' },
                  }} 
                  className="col-span-4 min-h-32 bg-[#CCF281] p-0 flex flex-col space-y-28 relative">
                    {/* <img src="/neon.jpg" alt="image" className="absolute bottom-0 left-auto right-auto h-[500px]"/> */}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: 'easeIn' },
                  }} 
                  className="col-span-4 bg-[#D3BCE5] p-6 flex flex-col space-y-28 text-black">                
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="font-semibold text-lg">TRUSTED</p>
                      <p style={{"fontFamily":"Big Shoulders Display"}} className="font-semibold text-5xl">4.9/5</p>
                    </div>
                    <div className="h-[2px] mt-4 bg-black"></div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">LEARN MORE</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#000] text-white">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 pt-36 pb-28 mx-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="col-span-2"
          >
            <p 
              style={{"fontFamily":"Big Shoulders Display"}}
              className="text-center lg:text-left font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px]"
            >
              POWERING THE DIGITAL REVOLUTION
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="row-start-2 col-start-1"
          >
            <img src="/sec2img1.jpg" alt="image1" className="object-cover h-full w-full"/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="row-start-2 col-start-2 flex flex-col justify-between gap-10"
          >
            <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button2 text="Learn More"></Button2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }} 
            className="row-start-1 col-start-3 row-span-2"
          >
            <img src="/neon.jpg" alt="image2" className="object-cover h-full w-full"/>
          </motion.div>
        </div>
      </div>
          
      {/* Section 3 */}
      <div className="text-white bg-[#1a191a]">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10 pt-32 pb-32 mx-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="col-span-2"
          >
            <p 
              style={{"fontFamily":"Big Shoulders Display"}}
              className="text-center lg:text-left font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px]"
            >
              SETTING THE PACE USING TECHNOLOGY
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="col-start-3"
          >
           <p>Our platform connects businesses with the perfect influencers to drive brand awareness, increase sales, and engage your target audience.</p>
          </motion.div>
          <div>
            <Card title="INFLUENCER MATCHING" text="Our platform connects businesses with the perfect influencers based on their niche, audience demographics, and campaign goals" imageText="/hero1.jpg"/>
          </div>
          <div>
            <Card title="CAMPAIGN MANAGEMENT" text="We provide tools to help businesses plan, execute, and track the success of their influencer marketing campaigns" imageText="/hero2.jpg"/>
          </div>
          <div>
            <Card title="PAYMENT PROCESSING" text="Our secure payment system ensures hassle-free transactions between businesses and influencers" imageText="/hero3.jpg"/>
          </div>
          <div className="col-start-2">
            <Card title="ANALYTICS & REPORTING" text="Gain valuable insights into campaign performance with detailed analytics and reporting" imageText="/hero3.jpg"/>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-black relative">
        <div style={{backgroundImage:"url('/sec4.jpg')"}} className="bg-cover py-32">
            
          <div className="h-full w-full bg-black opacity-40 absolute top-0 z-0"></div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 mx-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: 'easeIn' },
              }}
              className="text-white text-center z-20"
            >
              <p 
                style={{"fontFamily":"Big Shoulders Display"}}
                className="text-center lg:text-left font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px]"
              >
                SETTING THE PACE IN TECHNOLOGY
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: 'easeIn' },
              }}
              className="text-white bg-black p-10 mt-16 lg:mt-0 z-20"
            >
              <p className="text-[#D3BCE5] font-semibold">EXPERTISE</p>
              <p 
                style={{"fontFamily":"Big Shoulders Display"}}
                className="text-center lg:text-left font-black tracking-wider leading-none text-[40px] md:text-[40px] lg:text-[40px] my-5"
              >
                EXCELLENCE IN BYTES
              </p>
              <p className="mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis voluptates consequuntur assumenda fuga animi possimus atque porro dolor, pariatur, soluta perferendis libero. Fugiat eius architecto nostrum optio minus doloremque.</p>

              <div className="flex flex-col lg:flex-row gap-8 mt-5">
                <div className="flex items-center text-[#CCF281] hover:text-white">
                  <p className="text-lg font-semibold mr-2">SERVICE</p>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={4.5} 
                    stroke="currentColor" 
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <div className="flex items-center text-[#CCF281] hover:text-white">
                  <p className="text-lg font-semibold mr-2">ABOUT</p>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={4.5} 
                    stroke="currentColor" 
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <div className="flex items-center text-[#CCF281] hover:text-white">
                  <p className="text-lg font-semibold mr-2">CONTACT</p>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={4.5} 
                    stroke="currentColor" 
                    className="size-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-[#000] text-white px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeIn' },
          }} 
          className="text-center"
      >
          <p className="text-[#D3BCE5] font-semibold">OUR WORKS</p>
          <p 
            style={{"fontFamily":"Big Shoulders Display"}}
            className="text-center font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px] w-2/3 mx-auto mt-8 mb-16"
          >
            YOUR STATION FOR TECH INNOVATION
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-around gap-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }} 
            className="text-center flex flex-col items-center"
          >
            <p 
              style={{"fontFamily":"Big Shoulders Display"}}
              className="font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px] mx-auto text-[#D3BCE5]"
            >
              125+
            </p>
            <p className="text-[#CCF281] font-semibold">PROJECTS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="text-center flex flex-col items-center"
          >
            <p 
              style={{"fontFamily":"Big Shoulders Display"}}
              className="font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px] mx-auto text-[#D3BCE5]"
            >
              48
            </p>
            <p className="text-[#CCF281] font-semibold">EXPERTS</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="text-center flex flex-col items-center"
          >
            <p 
              style={{"fontFamily":"Big Shoulders Display"}}
              className="font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px] mx-auto text-[#D3BCE5]"
            >
              75K
            </p>
            <p className="text-[#CCF281] font-semibold">BYTES</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: 'easeIn' },
            }}
            className="text-center flex flex-col items-center"
          >
            <p 
              style={{"fontFamily":"Big Shoulders Display"}}
              className="font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px] mx-auto text-[#D3BCE5]"
            >
              350
            </p>
            <p className="text-[#CCF281] font-semibold">COUNTRIES</p>
          </motion.div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="bg-black relative">
        <div style={{backgroundImage:"url('/sec6.jpg')"}} className="bg-cover py-32">
            
          <div className="h-full w-full bg-black opacity-40 absolute top-0 z-0"></div>

          <div className="flex flex-col mx-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: 'easeIn' },
              }}
              className="text-white text-center z-20"
            >
              <p className="mb-6">JOIN NOW</p>
              <p 
                style={{"fontFamily":"Big Shoulders Display"}}
                className="text-center font-bold tracking-wider leading-none text-[50px] md:text-[70px] lg:text-[100px] w-2/3 lg:w-1/2 mx-auto"
              >
                UNVEIL THE POWER OF INFLUENCER MARKETING
              </p>
            </motion.div>
            <div className="mt-10 mx-auto z-20">            
              <Button2 text="GET STARTED"/>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <Footer />
    </>
  );
}

'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import '@fontsource/big-shoulders-display/400.css';
import Button2 from "@/components/button2/Button2";
import Card from "@/components/card/Card";
import styles from './homepage.module.css';

export default function Home() {
  return (
    <>
      <Navbar/>

      {/* Section 1 */}
      <div className="bg-black">
        
        {/* <div className="bg-[url('/mainbg.jpg')] object-cover opacity-15">
        </div> */}
        <img src={'/mainbg.jpg'} alt="mainbg"
          className="absolute object-cover w-[100vw] h-[1120px] md:h-[1000px] opacity-15"
        />
        
        <div
          className="bg-black text-white"
        >    
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            style={{"fontFamily":"Big Shoulders Display"}} 
            className="text-center font-black tracking-wide leading-none text-[80px] md:text-[150px] lg:text-[200px] pt-10">
              ELEVATE YOUR BRAND WITH INFLUENCERS
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center mx-16 md:mx-36 my-10">
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

          <div className="container mx-auto mt-16">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
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
            className="col-start-3"
          >
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cupiditate et? Reprehenderit animi deserunt, eligendi harum laborum officiis illum doloribus, quidem placeat eos quam nemo rerum provident exercitationem voluptatem quos!</p>
          </motion.div>
          <div>
            <Card title="ARTIFICIAL INTELLIGENCE" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia, hic ea assumenda harum sit." imageText="/hero1.jpg"/>
          </div>
          <div>
            <Card title="MACHINE LEARNING" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia, hic ea assumenda harum sit." imageText="/hero2.jpg"/>
          </div>
          <div>
            <Card title="DATA ANALYTICS" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia, hic ea assumenda harum sit." imageText="/hero3.jpg"/>
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
                className="text-center font-extrabold tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px] w-2/3 lg:w-1/2 mx-auto"
              >
                SETTING THE PACE IN TECHNOLOGY
              </p>
            </motion.div>
            <div className="mt-10 mx-auto z-20">            
              <Button2 text="GET STARTED"/>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
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
    </>
  );
}

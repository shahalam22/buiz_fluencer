'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import '@fontsource/big-shoulders-display/400.css';
import Footer from "@/components/footer/Footer";
import TeamCard from "@/components/teamCard/TeamCard";

export default function About() {
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
              className="font-bold tracking-wide leading-none text-[50px] md:text-[70px] lg:text-[100px] z-20">
                ABOUT
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }} 
                className="text-lg md:text-xl mt-10 mx-10 md:mx-36 z-20"
            >
                BIZZFLUENCER is a leading platform that connects businesses with the perfect influencers to drive brand awareness, increase sales, and engage your target audience. Our mission is to streamline the influencer marketing process, making it easier for businesses and influencers to collaborate and achieve mutual success.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-[#1a191a] text-white px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeIn' },
          }} 
          className="text-center"
      >
          {/* <p className="text-[#D3BCE5] font-semibold">ABOUT US</p> */}
          <p 
            style={{"fontFamily":"Big Shoulders Display"}}
            className="text-center font-black tracking-wider leading-none text-[40px] md:text-[60px] lg:text-[80px] w-2/3 mx-auto mt-8 mb-16"
          >
            YOUR STATION FOR INFLUENCER MARKETING
          </p>
        </motion.div>
        
        <div className="grid grid-cols-4 gap-10 mt-20">
          <div className="col-span-2 flex flex-col">
            <div className="col-span-1">
                <motion.img src="/about1.webp" alt="about 1" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' }, }} className="max-w-[300px]"/>
            </div>
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
                  className="font-bold tracking-wide leading-none text-[30px] md:text-[35px] mt-12  z-20">
                    OUR FEATURE
                </motion.h1>
                <p>
                    <b>Advanced Influencer Matching:</b> Our algorithm carefully matches businesses with influencers who align with their brand, target audience, and campaign goals. <br />
                </p>
                <p>
                    <b>Streamlined Communication:</b> Our messaging system facilitates direct communication between businesses and influencers, making it easy to collaborate and negotiate terms. <br />
                </p>    
                <p>
                    <b>Secure Payment Processing:</b> Our platform ensures safe and secure payment transactions between businesses and influencers. <br />
                </p>
                <p>
                    <b>Comprehensive Analytics:</b> Track the performance of your influencer marketing campaigns with detailed analytics and reporting. <br />
                </p>
                <p>
                    <b>Community Building:</b> Connect with other businesses and influencers in our online community to share best practices and network. <br />
                </p>
            </motion.div>
          </div>
          <div className="col-span-2">
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
                  WHY CHOOSE US
              </motion.h1>
              <p>
                  <b>Data-Driven Insights:</b> Our platform leverages advanced analytics to provide actionable insights for optimizing your influencer marketing campaigns. <br />
              </p>
              <p>
                  <b>Efficiency and Ease of Use:</b> Our user-friendly interface and streamlined processes make it easy for businesses and influencers to collaborate effectively. <br />
              </p>
              <p>
                  <b>Trusted Platform:</b> We are committed to providing a safe and secure environment for our users, ensuring the protection of their data and privacy. <br />
              </p>
              <p>
                  <b>Proven Results:</b> Our platform has helped countless businesses achieve their marketing goals through successful influencer partnerships. <br />
              </p>
            </motion.div>
            <motion.img src="/about2.webp" alt="about 2" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' }, }}/>
          </div>
        </div>

      </div>


      <div className="bg-black relative">
        <div style={{backgroundImage:"url('/sec6.jpg')"}} className="bg-cover py-32">
            
          <div className="h-full w-full bg-black opacity-85 absolute top-0 z-0"></div>

          <div className="flex flex-col mx-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: 'easeIn' },
              }} 
              className="text-center"
          >
              <div className="flex flex-col">
                <div className="z-20">
                <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: 'easeIn' },
                }}  
                className="text-[#CCF281] font-semibold text-4xl z-20"
              >OUR TEAM</motion.p>
                </div>
              </div>

              <div className="flex justify-center">
                <TeamCard name="SHAH ALAM ABIR" title="CTO, BUIZZFLUENCER" imageText="/cto.jpg"/>
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

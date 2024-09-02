'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import '@fontsource/big-shoulders-display/400.css';
import Button2 from "@/components/button2/Button2";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";

export default function Service() {
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
                SERVICES
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }} 
                className="text-lg md:text-xl mt-5 z-20"
            >
                Drive Sales and Increase Visibility Through Influencer Partnerships.
            </motion.p>
          </div>
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

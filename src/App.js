import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion/dist/framer-motion'
import "./sass/main.scss";
import Gallery from 'react-grid-gallery';
import Link from 'next/link'
import Snowfall from 'react-snowfall'

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import Carousel from "react-multi-carousel";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            <Snowfall 
            snowflakeCount={400}/>
            {!loading && (
              <>
              <div className='transition-image final'>
                  {/*<a href="/images/image-2.jpg" title="Monterey Bay on September 4th">*/}
                  <motion.div 
                    transition={{
                      type: 'tween',
                      duration: 2
                    }}
                  >
                    <motion.img
                    key={process.env.PUBLIC_URL + `/images/image-3.jpg`}
                      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                      src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      layoutId='main-image-1'
                    />
                  </motion.div>
                  {/*</a>*/}

              </div>
              </>
            )}
            <div className='images-vertical final'>
            <a href="/images/image-4.jpg" title="Palomar Mountain on March 6th"   target="_blank"  rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + `/images/image-4.jpg`}/></a>
                  <a href="/images/image-3.jpg" title="Long Beach on June 20th"  target="_blank"  rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + `/images/image-3.jpg`}/></a>
                  <a href="/images/image-5.jpg" title="Heart Lake on August 16th"  target="_blank"  rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + `/images/image-5.jpg`}  target="_blank"  rel="noopener noreferrer"/></a>
                  <a href="/images/image-6.jpg" title="Methuselah walk on August 17th"  target="_blank"  rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + `/images/image-6.jpg`}  target="_blank"  rel="noopener noreferrer"/></a>
                  <a href="/images/image-7.jpg" title="Cheesecake Factory on December 13th"  target="_blank"  rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + `/images/image-7.jpg`}  target="_blank"  rel="noopener noreferrer"/></a>

            </div>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;

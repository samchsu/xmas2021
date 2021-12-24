import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion/dist/framer-motion'
import "./sass/main.scss";
import Gallery from 'react-grid-gallery';
import Link from 'next/link'

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
            {!loading && (
              <div className='transition-image final'>
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId='main-image-1'
                />
                  <img src={process.env.PUBLIC_URL + `/images/image-3.jpg`}/>
                  <img src={process.env.PUBLIC_URL + `/images/image-4.jpg`}/>
                  <img src={process.env.PUBLIC_URL + `/images/image-1.jpg`}/>
                  <img src={process.env.PUBLIC_URL + `/images/image-5.jpg`}/>
                  <img src={process.env.PUBLIC_URL + `/images/image-6.jpg`}/>
                
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;

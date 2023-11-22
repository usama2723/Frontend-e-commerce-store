import { useLocation } from "react-router-dom";
import FeatureSection3 from "./FeatureSection3";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";

const Layout = ({ children }) => {

  const location = useLocation()

  console.log(location.pathname)

  return (
    <>
      {location.pathname !== '/signup' && location.pathname !== '/signin'  && location.pathname !== '/addtocart' && <Navbar />}
      {children}
     
    
      <NewsLetter />
      <FeatureSection3 />
      <Footer />
    </>
  )

}

export default Layout;
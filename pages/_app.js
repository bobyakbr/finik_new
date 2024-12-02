import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component }) {
  return (
    <div>
      
      <ThemeProvider defaultTheme="light" attribute="class">
      <Navbar />
      <div className="dark:bg-[#171a18] overflow-x-hidden">
        <Component/>
        <Footer /> 
      </div>
      </ThemeProvider>
      
    </div>
  );
}



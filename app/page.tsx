import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Steps from "./components/Steps";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <Services />
        <About />
        <Steps />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

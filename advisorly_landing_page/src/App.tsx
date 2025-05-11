import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemStatement from "./components/ProblemStatement";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement /> {/* Based on the first mockup's lower part */}
        <Features />{" "}
        {/* Based on the second mockup's "Welcome" and three features */}
        <CallToAction /> {/* Based on the second mockup's CTA */}
        <WhyChooseUs /> {/* Based on the second mockup's "Why Choose Us" */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

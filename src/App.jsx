import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    return (
        <div class={"relative z-0 h-screen w-screen bg-gray-50"}>
            {/*<div className="h-96 w-full bg-slate-700 absolute -skew-y-3 mt-96"></div>*/}
            <div className={""}>
                <Header />
                <Hero />
                <About />
                <Footer />
            </div>
        </div>
    );
}

export default App;

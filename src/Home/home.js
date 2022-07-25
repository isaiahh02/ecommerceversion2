import Slider from '../Slider/slider.js';
import Navbar from '../Navbar/nav.js';
import './home.css';
import Contact from '../Contact/contact.js';
import {Outlet} from "react-router-dom";
{/* <div id="item-1">
<Slider />
</div> */}
function Home() {
    return (
        <div className="App">
            <header className="home-container">
                <div id="item-0">
                    <Navbar />
                </div>
                <div id="item-2">Footer</div>
                <div id="item-3">Logo</div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Home;



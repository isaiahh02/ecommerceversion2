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
                <div id="item-3"></div>
                
            </header>
            <main>
                <Outlet/>
            </main>
            <footer id="item-2">Designed by Isaiah Foster</footer>
            
        </div>
    );
}

export default Home;



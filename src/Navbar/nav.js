import React, { Component } from 'react';
import './nav.css';

class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
            <ul>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/shop">SHOP</a>
                </li>
                <li>
                    <a href="/contact">CONTACT</a>
                </li>
            </ul>
            </nav>
        );
    }
};

export default Navbar;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

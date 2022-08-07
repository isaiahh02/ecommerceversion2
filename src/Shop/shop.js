import "./shop.css";
import orange from "../photos/orange.jpeg";
import silverring from "../photos/silverring.webp";
import goldennecklace from "../photos/goldennecklace.webp";
import blackpurpletie from "../photos/bwps.jpeg";
import bluedarkgreytie from "../photos/bluegrey.jpeg";
import bluemaze2 from "../photos/bluemaze2.jpeg";
import whitegold from "../photos/whitegold.jpeg";
import darkbluem from "../photos/darkbluem.jpeg";
import greyswirls from "../photos/greyswirls.jpeg";
import bloodred from "../photos/bloodred.jpeg";
import yellowcircles from "../photos/yellowcircles.jpeg";
import chain from "../photos/chain.webp";
import { useEffect } from "react";


function Shop(){
    useEffect(()=>{
    alert("Isaiah");
    },[])

    return (
    <section className="wrapper">
       
        <section>
            <img className="greystripestie" alt="grey stripes tie" src={orange} width="100%"/>
            Orange WonderLand Tie
            100% Seta Soie Seide Silk Handtailor
            [$10.99]

        </section>

        <section>
            <img className="ring" alt="silver ring" src={silverring} width="100%"/>
            Silver ring
            Premium 316L Stainless Steel & Rhodium
            [$41.99]
        </section>
        <section>
            <img className="necklace" alt="gold necklace" src={goldennecklace} width="100%"/>
            Gold Necklace
            Premium 18K Gold
            Water Resistant
            [$89.99]
        </section>
        <section>
            <img className="blackpurpletie" alt="black purple tie" src={blackpurpletie} width="100%"/>
            Black with White & Purple Stripes Tie
            100% Silk Hand Made
            [$10.99]
        </section>

        <section>
            <img className="bluedarkgreytie" alt="blue dark grey tie" src={bluedarkgreytie} width="100%"/>
            Blue & Gray Stripes Tie
            100% Silk Hand Made 
            [$10.99]
        </section>
        <section>
            <img className="bluemazetie" alt="blue maze tie" src={bluemaze2} width="100%"/>
            Shiny Water Blue Maze Tie
            100% Silk Hand Made
            [$15.99]
        </section>

        <section>
            <img className="brownbluewhitetie" alt="brown blue white tie" src={whitegold} width="100%"/>
            Golden Yellow Tie
            100% Polyester
            [$12.99]
        </section>
        <section>
            <img className="darkbluemazetie" alt="dark blue maze tie" src={darkbluem} width="100%"/>
            Dark Blue Maze Tie
            100% Silk
            [$10.99]
        </section>

        <section>
            <img className="greytie" alt="grey tie" src={greyswirls} width="100%"/>
            Gray Diamond Tie 
            82% Polyester 18% Silk
            [$12.99]
        </section>

        <section>
            <img className="redtie" alt="red tie" src={bloodred} width="100%"/>
            Blood Red Maze Tie
            100% Silk
            [$14.99]
        </section>

        <section>
            <img className="yellowbluetie" alt="yellow blue tie" src={yellowcircles} width="100%"/>
            Yellow Circles Tie
            100% Polyester
            [$11.99]
        </section>
        <section>
            <img className="smallnecklace" alt="gold chain" src={chain} width="100%"/>
            Gold Chain 
            18k Gold 
            Premium 316L Stainless Steel
            Water Resistant
            [$49.99]
        </section>

        
    </section>
    );
}
export default Shop;
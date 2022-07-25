import "./shop.css";
import orange from "../photos/orange.jpeg";
import silverring from "../photos/silverring.webp";
function Shop(){

    return (
    <section className="wrapper">
       
        <section>
            <img className="greystripestie" alt="grey stripes tie" src={orange} width="100%"/>
            Gray & Beige Stripes Tie
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
            <img className="necklace" alt="gold necklace" src="ecommerce/photos/goldennecklace.webp" width="100%"/>
            Gold Necklace
            Premium 18K Gold
            Water Resistant
            [$89.99]
        </section>
        <section>
            <img className="blackpurpletie" alt="black purple tie" src="ecommerce/photos/bwps.jpeg" width="100%"/>
            Black with White & Purple Stripes Tie
            100% Silk Hand Made
            [$10.99]
        </section>

        <section>
            <img className="bluedarkgreytie" alt="blue dark grey tie" src="ecommerce/photos/bluegrey.jpeg" width="100%"/>
            Blue & Gray Stripes Tie
            100% Silk Hand Made 
            [$10.99]
        </section>
        <section>
            <img className="bluemazetie" alt="blue maze tie" src="ecommerce/photos/bluemaze2.jpeg" width="100%"/>
            Shiny Water Blue Maze Tie
            100% Silk Hand Made
            [$15.99]
        </section>

        <section>
            <img className="brownbluewhitetie" alt="brown blue white tie" src="ecommerce/photos/whitegold.jpeg" width="100%"/>
            Brown White & Blue Striped Tie
            100% Polyester
            [$12.99]
        </section>
        <section>
            <img className="darkbluemazetie" alt="dark blue maze tie" src="ecommerce/photos/darkbluem.jpeg" width="100%"/>
            Dark Blue Maze Tie
            100% Silk
            [$10.99]
        </section>

        <section>
            <img className="greytie" alt="grey tie" src="ecommerce/photos/greyswirls.jpeg" width="100%"/>
            Gray Diamond Tie 
            82% Polyester 18% Silk
            [$12.99]
        </section>

        <section>
            <img className="redtie" alt="red tie" src="ecommerce/photos/bloodred.jpeg" width="100%"/>
            Blood Red Maze Tie
            100% Silk
            [$14.99]
        </section>

        <section>
            <img className="yellowbluetie" alt="yellow blue tie" src="ecommerce/photos/yellowcircles.jpeg" width="100%"/>
            Yellow & Blue Stripes Tie
            100% Polyester
            [$11.99]
        </section>
        <section>
            <img className="smallnecklace" alt="gold chain" src="ecommerce/photos/chain.webp" width="100%"/>
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
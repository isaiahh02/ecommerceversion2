import "./shop.css";
// import orange from "../photos/orange.jpeg";
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
import { useEffect, useState } from "react";
import axios from "../Helpers/axios";

function Shop() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState("");

  const filterData = (d) => {
    return d.filter((row) =>
      row.name.toLowerCase().includes(searchString.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/getshop");
      if (res.status === 200) {
        setData(res.data.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="searchbar-container">
        <input
          className="searchbar"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <section className="wrapper">
        {filterData(data).map((product) => {
          return (
            <section key={product.id}>
              <img src={require(`../photos/${product.pic}`)} width="100%" />
              {product.name}
            </section>
          );
        })}
      </section>
    </>
  );
}
export default Shop;

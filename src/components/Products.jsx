import React from "react";
import "./css/products.css";

const products = [
  {
    id: 1,
    price: "₹199",
    img: "assets/neckpiece/butterfly.jpeg",
    category: "neckpiece",
  },
  {
    id: 2,
    price: "₹49",
    img: "assets/earrings/bow.jpeg",
    category: "earrings",
  },
  {
    id: 3,
    price: "₹199",
    img: "assets/watches/stack_watch.jpeg",
    category: "watch",
  },
  {
    id: 4,
    price: "₹199",
    img: "assets/neckpiece/heart_necpiece.jpeg",
    category: "neckpiece",
  },
  {
    id: 5,
    price: "₹79",
    img: "assets/earrings/crystal_circle.jpeg",
    category: "earrings",
  },
  {
    id: 6,
    price: "₹199",
    img: "assets/neckpiece/teddy_necpice.jpeg",
    category: "neckpiece",
  },
  {
    id: 7,
    price: "₹79",
    img: "assets/earrings/heart.jpeg",
    category: "earrings",
  },
  {
    id: 8,
    price: "₹149",
    img: "assets/neckpiece/necklace.png",
    category: "neckpiece",
  },
  {
    id: 9,
    price: "₹79",
    img: "assets/earrings/long_pearl.jpeg",
    category: "earrings",
  },
  {
    id: 10,
    price: "₹149",
    img: "assets/watches/silver_watch.jpeg",
    category: "watch",
  },
  {
    id: 11,
    price: "₹149",
    img: "assets/neckpiece/silver.jpeg",
    category: "neckpiece",
  },
  {
    id: 12,
    price: "49",
    img: "assets/earrings/motu_moti.jpeg",
    category: "earrings",
  },
  {
    id: 13,
    price: "₹79",
    img: "assets/earrings/pearl_vine.jpeg",
    category: "earrings",
  },
  {
    id: 14,
    price: "₹79",
    img: "assets/earrings/pearl_whisper.jpeg",
    category: "earrings",
  },
  {
    id: 15,
    price: "₹79",
    img: "assets/earrings/round.jpeg",
    category: "earrings",
  },
  ,
  {
    id: 16,
    price: "₹99",
    img: "assets/earrings/black_white.jpeg",
    category: "earrings",
  },
  {
    id: 17,
    price: "₹149",
    img: "assets/earrings/fishtail_earring.jpeg",
    category: "earrings",
  },
  {
    id: 18,
    price: "₹49",
    img: "assets/earrings/classy_pearl_earring.jpeg",
    category: "earrings",
  },
  {
    id: 19,
    price: "₹49",
    img: "assets/earrings/squirrel_earrings.jpeg",
    category: "earrings",
  },
  {
    id: 20,
    price: "₹79",
    img: "assets/earrings/butterfly_earring.jpeg",
    category: "earrings",
  },
  {
    id: 21,
    price: "₹79",
    img: "assets/earrings/butterfly_pearl.jpeg",
    category: "earrings",
  }, {
    id: 22,
    price: "₹49",
    img: "assets/earrings/chotu_pearl.jpeg",
    category: "earrings",
  },
  {
    id: 23,
    price: "₹99",
    img: "assets/earrings/pink_circle_earring.jpeg",
    category: "earrings",
  }
  , {
    id: 24,
    price: "₹99",
    img: "assets/earrings/peacock_earring.jpeg",
    category: "earrings",
  },
  {
    id: 25,
    price: "₹49",
    img: "assets/earrings/pearl_stud.jpeg",
    category: "earrings",
  }
  , {
    id: 26,
    price: "₹49",
    img: "assets/earrings/tulip_earring.jpeg",
    category: "earrings",
  },
  {
    id: 27,
    price: "₹49",
    img: "assets/earrings/swan_earring.jpeg",
    category: "earrings",
  }, {
    id: 28,
    price: "₹49",
    img: "assets/earrings/two_bracelets.jpeg",
    category: "bracelets",
  }
];

const Products = ({ category }) => {
  const visible =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section className="products-section">
      <div className="products-grid">
        {visible.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img-wrap">
              <img src={p.img} alt={p.name} className="product-img" />
            </div>
            {/* <h3 className="product-name">{p.name}</h3> */}

            <p className="product-price">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

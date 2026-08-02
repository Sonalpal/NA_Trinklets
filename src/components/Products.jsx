import React from 'react'
import './css/products.css'

const products = [
    { id: 1, price: '₹649', img: 'assets/neckpiece/butterfly.jpeg', category: 'neckpiece' },
  { id: 1, price: '₹649', img: 'assets/earrings/bow.jpeg', category: 'earrings' },
  { id: 2, price: '₹599', img: 'assets/watches/stack_watch.jpeg', category: 'watch' },
      { id: 1, price: '₹649', img: 'assets/neckpiece/heart_necpiece.jpeg', category: 'neckpiece' },
  { id: 3,  price: '₹799', img: 'assets/earrings/crystal_circle.jpeg', category: 'earrings' },
      { id: 1, price: '₹649', img: 'assets/neckpiece/teddy_necpice.jpeg', category: 'neckpiece' },
  { id: 4,  price: '₹549', img: 'assets/earrings/heart.jpeg', category: 'earrings' },
      { id: 1, price: '₹649', img: 'assets/neckpiece/necklace.png', category: 'neckpiece' },
  { id: 5, price: '₹1,299', img: 'assets/earrings/long_pearl.jpeg', category: 'earrings' },
   { id:6,  price: '₹599', img: 'assets/watches/silver_watch.jpeg', category: 'watch' },
       { id: 1, price: '₹649', img: 'assets/neckpiece/silver.jpeg', category: 'neckpiece' },
  { id: 7,  price: '₹699', img: 'assets/earrings/motu_moti.jpeg', category: 'earrings' },
  { id: 8,  price: '₹599', img: 'assets/earrings/pearl_vine.jpeg', category: 'earrings' },
  { id: 9,  price: '₹599', img: 'assets/earrings/pearl_whisper.jpeg', category: 'earrings' },
  { id: 10, price: '₹599', img: 'assets/earrings/round.jpeg', category: 'earrings' },
  
]

const Products = ({ category }) => {
  const visible =
    category === 'all' ? products : products.filter((p) => p.category === category)

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
  )
}

export default Products
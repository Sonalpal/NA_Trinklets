import React from 'react'
import './css/category.css'

const categories = [
  { label: 'all', key: 'all' },
  { label: 'bracelet', key: 'bracelet' },
  { label: 'PENDANT', key: 'neckpiece' },
  { label: 'earring', key: 'earrings' },
  { label: 'Kashmiri Watches', key: 'watch' },
  { label: 'Tulip Bracelet', key: 'tulip' },
  { label:'Kashmiri earrings', key: 'kashmiri earrings' }
]

const Category = ({ active, onSelect }) => {
  return (
    <nav className="category-bar">
      <ul className="category-list">
        {categories.map((c) => (
          <li key={c.key}>
            <button
              className={`category-btn ${active === c.key ? 'active' : ''}`}
              onClick={() => onSelect(c.key)}
            >
              {c.label}
            </button>
          </li>
        ))}

        {/* these two aren't product filters, so they stay as real links */}
        <li>
          <a className="category-btn" href="#order">How to Order</a>
        </li>
        <li>
          <a className="category-btn" href="#about">About Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Category
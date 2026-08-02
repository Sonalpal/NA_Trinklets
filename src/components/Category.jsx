import React from 'react'
import './css/category.css'

const categories = [
  { label: 'All', key: 'all' },
  { label: 'Bracelet', key: 'bracelet' },
  { label: 'Pendant', key: 'pendant' },
  { label: 'Ear Rings', key: 'earrings' },
  { label: 'Kashmiri Watches', key: 'watches' },
  { label: 'Tulip Bracelet', key: 'tulip' },
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
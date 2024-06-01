import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import ProductCard from '../../Components/Card/ProductCard';
import Smartphone from '../../Assets/smartphone.jpg';
import Tablet from '../../Assets/tablets.jpg';
import Smartwatch from '../../Assets/smartwatch.jpg';
import Speaker from '../../Assets/speaker.jpg';


const dummyData = [
    
    {
      image: Smartphone,
      title: 'Smartphone',
      description: 'A used smartphone in good condition.',
      price: '10,000',
      category: 'Smartphones'
    },
    {
      image: Tablet,
      title: 'Tablet',
      description: 'A tablet with a minor scratch on the screen.',
      price: '15,000',
      category: 'Tablets'
    },
    {
      image: Smartwatch,
      title: 'Smartwatch',
      description: 'A smartwatch with fitness tracking features.',
      price: '9,500',
      category: 'Wearable Tech'
    },
    {
      image: Speaker,
      title: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with long battery life.',
      price: '16,000',
      category: 'Speakers'
    },
  ];
const HomePage = () => {
  const sliderRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceOrder, setPriceOrder] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);

  useEffect(() => {
    const slider = sliderRef.current;
    let interval;

    const startSlider = () => {
      interval = setInterval(() => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          setTimeout(() => {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          }, 1000);
        }
      }, 2000);
    };

    startSlider();

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    let filtered = dummyData;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(product =>
        product.description.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (priceOrder === 'lowToHigh') {
      filtered = filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (priceOrder === 'highToLow') {
      filtered = filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredData(filtered);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Second Hand Store</h1>
        <p>Your one-stop shop for quality second-hand electronics</p>
        <div className="search-filters">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <select value={priceOrder} onChange={(e) => setPriceOrder(e.target.value)}>
            <option value="">Sort by price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-slider" ref={sliderRef}>
          {filteredData.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Second Hand Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

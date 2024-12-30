import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchItems } from '../Store';

const NonVegItems = () => {
  const dispatch = useDispatch();
  const nonVegItems = useSelector((state) => state.items.nonVeg);
  const [selectedRange, setSelectedRange] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const priceRanges = [
    { label: '50-100', min: 50, max: 100 },
    { label: '100-200', min: 100, max: 200 },
    { label: '200-500', min: 200, max: 500 },
    { label: 'Above 500', min: 500, max: Infinity },
  ];

  const brands = [...new Set(nonVegItems.map((item) => item.brand))];

  let filteredItems = nonVegItems;

  if (selectedRange) {
    const { min, max } = priceRanges.find((range) => range.label === selectedRange);
    filteredItems = filteredItems.filter((item) => item.price >= min && item.price <= max);
  }

  if (selectedBrands.length > 0) {
    filteredItems = filteredItems.filter((item) => selectedBrands.includes(item.brand));
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((item) => item !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="non-veg-items-container">
      <div className="container my-5 style={{ maxWidth: '800px', width: '100%' }}">
        <h2 className="text-center text-success mb-5">Non-Veg Items</h2>

        {/* Filters Section */}
        <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
          {/* Price Filter */}
          <div className="me-4">
            <label htmlFor="priceFilter" className="text-primary me-2 fw-bold fs-4">
              Filter by Price:
            </label>
            <select
              id="priceFilter"
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              className="form-select w-auto d-inline-block"
            >
              <option value="">All Prices</option>
              {priceRanges.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div>
            <h5 className="text-danger mb-2 fs-4">Filter by Brand:</h5>
            <div className="d-flex flex-wrap text-primary">
              {brands.map((brand) => (
                <div key={brand} className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`brand-${brand}`}
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <label className="form-check-label" htmlFor={`brand-${brand}`}>
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Display filtered items */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="col d-flex justify-content-center">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={`/Image/${item.image}`}
                    alt={item.name}
                    className="card-img-top img-fluid rounded-3"
                    style={{ height: '350px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{item.name}</h5>
                    <p className="card-text">
                      <strong>Price:</strong> {item.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn btn-primary mt-auto w-75 mx-auto"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No non-vegetarian items available for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NonVegItems;

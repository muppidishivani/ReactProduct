import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import your custom CSS file

function PurchaseHistory() {
  // Access the purchase history from Redux store
  const purchaseHistory = useSelector((state) => state.purchaseHistory.history);

  return (
    <div className="purchase-history-container">
      <div className="card shadow-lg" style={{ maxWidth: '800px', width: '100%' }}>
        <div className="card-body">
          <h2 className="text-center text-success mb-4">Purchase History</h2>
          {purchaseHistory.length === 0 ? (
            <p className="text-center">No past purchases available.</p>
          ) : (
            purchaseHistory.map((purchase, index) => (
              <div key={index} className="mb-4">
                <div className="bg-primary text-white p-3 rounded">
                  <h5>Purchase on: {purchase.date}</h5>
                </div>
                <div className="mt-3">
                  <p>
                    <strong>Total Amount:</strong> ${purchase.totalAmount.toFixed(2)}
                  </p>
                  <h6 className="mt-3">Items:</h6>
                  <ul className="list-group">
                    {purchase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-group-item">
                        <p>
                          <strong>Product:</strong> {item.name}
                        </p>
                        <p>
                          <strong>Price per item:</strong> ${item.price.toFixed(2)}
                        </p>
                        <p>
                          <strong>Quantity:</strong> {item.quantity}
                        </p>
                        <p>
                          <strong>Total for this item:</strong> $
                          {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PurchaseHistory;

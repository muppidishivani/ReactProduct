import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart, clearCart, addPurchase } from "../Store";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const itemsList = cartItems.length > 0 ? (
        cartItems.map((item) => (
            <li key={item.name} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>{item.name}</strong>, ${(item.price * item.quantity).toFixed(2)}, Quantity: {item.quantity}
                </div>
                <div>
                    <button className="btn btn-sm btn-success me-2" onClick={() => dispatch(increment({ name: item.name }))}>+1</button>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => dispatch(decrement({ name: item.name }))}>-1</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
            </li>
        ))
    ) : (
        <li className="list-group-item text-center">Cart is empty</li>
    );

    const [disperce, setDisPerc] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState(0);

    const calculateTotal = () => {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = total * (discountPercentage / 100);
        const discountByButton = total * disperce;
        const netAmount = total - discount - discountByButton;
        return {
            total,
            discount,
            discountByButton,
            netAmount
        };
    };

    const { total, discount, discountByButton, netAmount } = calculateTotal();

    const handleDisPercentage = (percentage) => {
        setDisPerc(percentage / 100);
    };

    const handleApplyCoupon = () => {
        switch (couponCode.toUpperCase()) {
            case "SHIVANI10":
                setDiscountPercentage(10);
                break;
            case "SHIVANI11":
                setDiscountPercentage(20);
                break;
            case "SHIVANI12":
                setDiscountPercentage(30);
                break;
            default:
                setDiscountPercentage(0);
                alert("Invalid coupon code");
        }
    };

    const handleCompletePurchase = () => {
        const { netAmount } = calculateTotal();
        const purchaseDate = new Date().toLocaleDateString();

        const purchaseDetails = {
            date: purchaseDate,
            items: [...cartItems],
            totalAmount: Number(netAmount),
        };
        dispatch(clearCart());
        dispatch(addPurchase(purchaseDetails));
    };

    return (
        <div className="fullscreen-center">
            <div className="card">
                <div className="card-header">
                    <h2>Your Cart</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group mb-4">{itemsList}</ul>
                    <div className="mb-4">
                        <h4>Total before discount: <span className="text-primary">${total.toFixed(2)}</span></h4>
                    </div>
                    <div className="mb-4">
                        <h5>Apply Manual Discount</h5>
                        <div className="btn-group">
                            <button className="btn btn-outline-primary" onClick={() => handleDisPercentage(10)}>Apply 10%</button>
                            <button className="btn btn-outline-primary" onClick={() => handleDisPercentage(20)}>Apply 20%</button>
                            <button className="btn btn-outline-primary" onClick={() => handleDisPercentage(30)}>Apply 30%</button>
                        </div>
                    </div>
                    <h5>Manual Discount: {(disperce * 100).toFixed(0)}% | Amount: <span className="text-success">${discountByButton.toFixed(2)}</span></h5>
                    <div className="mt-4">
                        <h5>Apply Coupon Code</h5>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter coupon code"
                            />
                            <button className="btn btn-primary" onClick={handleApplyCoupon}>Apply Coupon</button>
                        </div>
                    </div>
                    <h5>Coupon Discount: {discountPercentage}% | Amount: <span className="text-danger">${discount.toFixed(2)}</span></h5>
                    <h4 className="mt-3">Net Amount after Discounts: <span className="text-primary">${netAmount.toFixed(2)}</span></h4>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success w-100" onClick={handleCompletePurchase}>Proceed To Order</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;

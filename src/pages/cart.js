// Cart.js
import React from 'react';

function Cart({ cartItems, setCartItems }) {
  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  // Function to calculate the updated price for each item based on quantity
  const calculateUpdatedPrice = (item) => {
    return (parseFloat(item.price) * item.quantity).toFixed(2);
  };
  // Calculate the total price of all items in the cart
 
 const calculateTotalPrice = () => {
  let totalPrice = 0;
  for (const item of cartItems) {
    // Assuming each item has a "price" property and considering quantity
    totalPrice += parseFloat(item.price) * item.quantity;
  }
  return totalPrice;
};

const updateQuantity = (item, increment) => {
  const updatedCart = [...cartItems];
  const index = updatedCart.findIndex((cartItem) => cartItem.name === item.name);
  if (index !== -1) {
    updatedCart[index].quantity += increment;
    if (updatedCart[index].quantity < 1) {
      // Remove the item from the cart if quantity becomes zero or negative
      updatedCart.splice(index, 1);
    }
    setCartItems(updatedCart);
  }
};

  console.log('Cart Items:', cartItems);
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cartItems) {
      subtotal += parseFloat(item.price) * item.quantity;
    }
    return subtotal.toFixed(2);
  };

  // Function to calculate the total including shipping
  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipping = 3000; // Change this to the actual shipping cost
    return (subtotal + shipping).toFixed(2);
  };

  return (
    <div className='mt-5'>
    <div className='' style={{marginTop:'50px'}}>
      <h3 className='ml-4' style={{marginLeft:'70px'}}> Cart</h3>
    </div>
      <div className="container mt-5">
  <table className="table">
    <thead>
      <tr className='text-center'>
        <th className='border'>Image</th>
        <th className='border'>Name</th>
        <th className='border'>Price</th>
        <th className='border'>Quantity</th>
        <th className='border'>Total</th>
        <th className='border'>Remove</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {cartItems.map((item, index) => (
        <tr key={index}>
          <td className='border'>
            <img
              src={item.image}
              className="img-fluid"
              style={{ width: '100px' }}
              alt={item.name}
            />
          </td>
          <td className='border'>
            <div className='mt-4'>
            {item.name}
            </div>
          </td>
          <td className='border'>
            <div className='mt-4 text-primary'>
            NGN{item.price}
            </div>
          </td>
          <td className='border'>
         <div className='d-flex justify-content-center align-items-center mt-3'>
         <div className='d-flex justify-content-center align-items-center' style={{border:'1px solid blue',
         borderRadius:'5px',width:'90px',
        
        }}>
         <div className='' style={{marginRight:'10px', cursor:'pointer'}}  onClick={() => updateQuantity(item, -1)}>
         -
         </div>
              <div className='m-2'>
              {item.quantity}
              </div>
              <div className='' style={{marginLeft:'10px', cursor:'pointer'}} onClick={() => updateQuantity(item, 1)}>
              +
              </div>
         </div>
         </div>

          </td>
          <td className='border'>
            <div className='mt-4 text-primary'>
            NGN{calculateUpdatedPrice(item)}
            </div>
          </td>
          <td className='border'> 
        
         <div className='d-flex justify-content-center align-items-center mt-4'>
         <i    onClick={() => handleRemoveFromCart(index)} className="fas fa-trash  trash-icon"></i>
            
         </div>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div>
      <p>Total Price: NGN{calculateTotalPrice()}</p>
    </div>
    <div className="cart-totals">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>₦{calculateSubtotal()}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>
              <div>
          <input
            type="checkbox"
            id="localDeliveryCheckbox"
          
          />
          <label htmlFor="localDeliveryCheckbox">Home Delivery(1-3days): ₦3,000.00</label>
        </div>
                
                  
              </td>
            
          
            </tr>
            <tr>
            <td>
                <div style={{marginLeft:'150px'}}>
              <input
            type="checkbox"
            id="localDeliveryCheckbox"
          
          />
            
          <label htmlFor="localDeliveryCheckbox">LOcal Delivery</label>
        </div>
               
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td>₦{calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
       
        <p className="btn btn-danger mt-3">proceed to checkout</p>
      </div>
</div>


     
    </div>
  );
}

export default Cart;

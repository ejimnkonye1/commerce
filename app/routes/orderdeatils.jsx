import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { orderId } = useParams(); // Get order ID from URL

  // Sample order data
  const order = {
    id: orderId,
    date: "Feb 10, 2025",
    status: "Shipped",
    paymentMethod: "Credit Card",
    shipping: {
      name: "Ejimnkonye Onyedika",
      address: "Ubaka Street, Achara Layout, Enugu, Nigeria",
      phone: "+234 801 234 5678",
    },
    items: [
      {
        id: 1,
        name: "Ashluxe Hoodie",
        image: "https://via.placeholder.com/100", // Replace with real image
        price: 50.0,
        quantity: 2,
      },
      {
        id: 2,
        name: "Ashluxe Sneakers",
        image: "https://via.placeholder.com/100",
        price: 120.0,
        quantity: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white p-6 flex flex-col items-center">
      <header className="w-full max-w-3xl bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">Order Details</h1>
      </header>

      {/* Order Summary */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 mt-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
        <p>📅 Date: {order.date}</p>
        <p>📦 Status: <span className="font-bold text-green-400">{order.status}</span></p>
        <p>💳 Payment: {order.paymentMethod}</p>
      </div>

      {/* Shipping Info */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 mt-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
        <p>👤 {order.shipping.name}</p>
        <p>📍 {order.shipping.address}</p>
        <p>📞 {order.shipping.phone}</p>
      </div>

      {/* Ordered Items */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 mt-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Items Ordered</h2>
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg mt-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p>💰 Price: ${item.price}</p>
              <p>🔢 Quantity: {item.quantity}</p>
              <p className="font-bold">Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        ⬅ Back to Orders
      </button>
    </div>
  );
}

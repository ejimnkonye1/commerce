import {  LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "~/Firebase";

type User = {
  uid: string;
  email?: string;
};

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Order = {
  id: string;
  date: string;
  status: string;
  paymentMethod: string;
  address: string;
  shipping: {
    phone: string;
  };
  items: OrderItem[];
};

export const loader: LoaderFunction = async () => {
  const user = auth.currentUser ;
  return { user };
};

export default function OrderDetails() {
  const { user } = useLoaderData<{ user: User }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderData = async () => {
      if (user?.uid) {
        try {
          const orderDocRef = doc(firestore, "order", user.uid);
          const orderDoc = await getDoc(orderDocRef);

          if (orderDoc.exists()) {
            console.log("Firestore Document Data:", orderDoc.data());
            const OrderData = orderDoc.data() as Order; // Cast to Order type
            setOrder(OrderData);
          } else {
            console.log("Order document not found!");
          }
        } catch (error) {
          console.error("Error fetching order document:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!order) {
    return <div>No order found.</div>; // Handle case where order is not found
  }

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
        {/* <p>👤 Recipient: {order.recipient}</p>  */}
        <p>📍 Address: {order.address}</p>
        <p>📞 Phone: {order.shipping.phone}</p>
      </div>

      {/* Ordered Items */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 mt-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Items Ordered</h2>
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg mt-4">

            <img src={item.image || ''} alt={item.name} className="w-16 h-16 rounded-lg" />
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p>💰 Price: ${item.price || ''}</p>
              <p>🔢 Quantity: {item.quantity || ''}</p>
              <p className="font-bold">Total: ${item.price * item.quantity || ''}</p>
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

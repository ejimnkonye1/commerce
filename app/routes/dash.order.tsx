import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { collection,  getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, firestore } from "~/Firebase";

type User = {
  uid: string;
  email?: string;
};

type Order = {
  id: string;
  orderId: string;
  createdAt: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  status: string;
  paymentMethod: string;
  date:string
  total?: number;
};

export const loader: LoaderFunction = async () => {
  const user = auth.currentUser;
  if (!user) throw json({ error: "Unauthorized" }, { status: 401 });
  return json({ userId: user.uid });
};


  
export default function OrderDetails() {
  const { user } = useLoaderData<{ user: User }>();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useLoaderData<{ userId: string }>();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(firestore, "orders");
        const q = query(ordersRef, where("userId", "==", userId));
        const snapshot = await getDocs(q);

        const ordersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Order[];
        
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) return <div className="p-4 text-white">Loading orders...</div>;
  if (orders.length === 0) return <div className="p-4 text-gray-900">No orders found</div>;


  return (
    <div className="min-h-screen  text-white p-6 flex flex-col items-center">
      <header className="w-full max-w-3xl  p-4 rounded-lg mb-6">
        <h1 className="text-2xl text-gray-700 font-bold">Order Summary</h1>
      </header>
 
      {/* Order Summary Only */}
      {orders.map((order) => (
      <div key={order.id} className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg space-y-4 mb-5">
     
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Order ID:</h2>
          <span className="text-blue-400">#{order.orderId}</span>
          
        </div>
        
        <div className="flex justify-between items-center">
          <span>📅 Date:</span>
          <span>{order.date}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>📦 Status:</span>
          <span className="text-green-400">{order.status}</span>
        </div>

        <div className="flex justify-between items-center">
          <span>💳 Payment Method:</span>
          <span className="text-blue-500">{order.paymentMethod}</span>
        </div>
      </div>
   ))}
      <button
     
        className="mt-6 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
      >
      Back to Home
      </button>
    </div>
  );
}
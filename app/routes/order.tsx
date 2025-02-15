import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link, useSearchParams } from "@remix-run/react";
import {  firestore } from "../Firebase"; 
import { doc, getDoc,  } from "firebase/firestore";

import { useEffect } from "react";
import { useCart } from "~/context/cartcontext";

type LoaderData = {
  orderId: string;
  date: string;
  paymentMethod: string;
  name: string;
  address: string;
  phone: string;
  userId: string;
  email:string;
}
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const orderId = url.searchParams.get("orderId");

  if (!orderId) return json({ error: "Order ID is missing" }, { status: 400 });

  const orderRef = doc(firestore, "orders", orderId);
  const orderSnap = await getDoc(orderRef);

  if (!orderSnap.exists()) {
    return json({ error: "Order not found" }, { status: 404 });
  }

  const orderData = orderSnap.data();

  return json({
    orderId,
    date: orderData.createdAt,
    paymentMethod: "Ibadan monthly installments",
    name: `${orderData.firstName} ${orderData.lastName}`,
    address: orderData.address,
    phone: orderData.number,
    userId: orderData.userId,
    email: orderData.email,
  });
};


export default function OrderConfirmation() {
  const order = useLoaderData<LoaderData>(); 
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();

  useEffect(() => {
      // Check if the order was successful
      if (searchParams.get("success") === "true") {
          console.log("Clearing cart...");
          clearCart();
      }
  }, [searchParams]);
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
            Your order{" "}
            <Link to="#" className="font-medium text-gray-900 dark:text-white hover:underline">
              #{order.orderId}
            </Link>{" "}
            will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          {[
            { label: "Date", value: order.date },
            { label: "Payment Method", value: order.paymentMethod },
            { label: "Name", value: order.email },
            { label: "Address", value: order.address },
            { label: "Phone", value: order.phone },
          ].map((item, index) => (
            <dl key={index} className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">{item.label}</dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{item.value}</dd>
            </dl>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="#"
            className="text-white bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Track your order
          </Link>
          <Link
            to="/"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Return to shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

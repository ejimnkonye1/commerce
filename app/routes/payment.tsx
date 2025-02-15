import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation, useSearchParams } from "@remix-run/react";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCart } from "~/context/cartcontext";
import { auth, firestore } from "../Firebase";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const number = formData.get("number") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const zip = formData.get("zip") as string;

    if (!firstName || !lastName || !email || !number || !address || !city || !state || !zip) {
        return json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        const userId = auth.currentUser?.uid; 
        if (!userId) {
            return json({ error: "User not authenticated" }, { status: 401 });
        }

        const orderId = uuidv4(); // Generate unique order ID
        const orderData = {
            orderId,
            userId,
            firstName,
            lastName,
            email,
            number,
            address,
            city,
            state,
            zip,
            createdAt: new Date().toISOString(),
        };
        await setDoc(doc(collection(firestore, "orders"), orderId), orderData);
        return redirect(`/order?orderId=${orderId}&success=true`);

        // return redirect(`/order?orderId=${orderId}`);
    } catch (error: any) {
        return json({ error: error.message }, { status: 500 });
    }
};


const Checkout = () => {
    const { cart, clearCart } = useCart();
    
    const totalPrice = cart.reduce((total, item) => total + (item.price) * item.quantity, 0);
    const actionData = useActionData(); // Get response from action
    const navigation = useNavigation(); // Detect when form is submitting
    const isSubmitting = navigation.state === "submitting";
    useEffect(() => {
        // Check if order was placed successfully and clear cart
        if (actionData?.orderId) {
            clearCart();
        }
    }, [actionData]);
    return (
        <section className="bg-white py-8 antialiased  md:py-16 p-10">
          <Form method="post" 
          
          className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8 grid grid-cols-1 gap-4 lg:grid-cols-3 ">
                <div className="space-y-4 lg:col-span-2 rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>
    
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
              
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Bonnie"
                        required
                      />
                    </div>
    
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                     
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Paul"
                        required
                      />
                    </div>
    
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="name@gmail.com"
                        required
                      />
                    </div>
    
                    <div>
                      <label htmlFor="number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone Number*</label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                    
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
    
                    <div>
                      <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Address*</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="123 Main St"
                        required
                      />
                    </div>
    
                    <div>
                      <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">City*</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                    
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Samagu"
                        required
                      />
                    </div>
    
                    <div>
                      <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">State*</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                       
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Ibandan"
                        required
                      />
                    </div>
    
                    <div className='mb-4'>
                      <label htmlFor="zip" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Zip Code*</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                      
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="94103"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800 lg:col-span-1">
      <div className="mt-6 w-full sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md mb-5">
        <div className="flow-root">
          <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">₦{totalPrice.toFixed(2)}</dd>
            </dl>
    
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Delivery Fee</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">₦3500</dd>
            </dl>
    
            <dl className="flex items-center justify-between gap-4 py-3">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">₦{(totalPrice + 3500 ).toFixed(2)}</dd>
            </dl>
          </div>
        </div>
      </div>
    
      <div className='mt-3 pt-10 border-t'>
        <button type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
          Proceed to Payment
        </button>
      </div>
    </div>
                  </div>
    
    
    
           
              </div>
            </div>
          </Form>
        </section>
      );
  };
  
  export default  Checkout;
  
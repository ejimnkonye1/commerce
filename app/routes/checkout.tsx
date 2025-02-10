
import { redirect } from '@remix-run/node';
import  React, { useEffect, useState } from 'react';

// import { GrStatusGood } from "react-icons/gr";
type Item = {
  image: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  id: number;
  thumbnails: string[];
}
const Checkout = () => {
  const [cart, setCart] = useState<Item[]>([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
  
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart) as Item[];
        console.log("Loaded cart from localStorage:", parsedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setCart([]); // Fallback to an empty cart if parsing fails
      }
    }
  }, []);

  const totalPrice = cart.reduce((total, item) => total + (item.price) * item.quantity, 0);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(formData);
    return redirect("/");
  };

  return (
    <section className="bg-white py-8 antialiased  md:py-16 p-10">
      <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      
        {/* <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
      <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
      <GrStatusGood size='40' className="mr-2" />
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          Cart
        </span>
      </li>
      
      <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
      <GrStatusGood size='60' className="mr-2" />
        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden">
          Checkout
        </span>
      </li>
      <li className="flex shrink-0 items-center">
      
        Order summary
      </li>
    </ol> */}
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
                    value={formData.firstName}
                    onChange={handleChange}
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
                    value={formData.lastName}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.number}
                    onChange={handleChange}
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
                    value={formData.address}
                    onChange={handleChange}
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
                    value={formData.city}
                    onChange={handleChange}
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
                    value={formData.state}
                    onChange={handleChange}
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
                    value={formData.zip}
                    onChange={handleChange}
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
    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
      Proceed to Payment
    </button>
  </div>
</div>
              </div>



       
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
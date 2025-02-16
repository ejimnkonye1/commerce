import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { useCart } from '~/context/cartcontext';
import initialProducts from '~/productimg'; // Assuming this is the correct import path for initialProducts

// Define types for the product and loader parameters
type Product = {
  image: string;
  name: string;
  price: string;
  description: string;
  quantity: number;
  id: number;
  thumbnails: string[];
};

type LoaderData = {
  product: Product;
};

// export const loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
    export const loader: LoaderFunction = async ({ params }) => {
  const productId = params.id;

  // Find the product based on the ID in the initialProducts array
//   const product = initialProducts.find((prod: Product) => prod.name === productId);
  const product = initialProducts.find((prod) => prod.id === Number(productId)) as Product | undefined;

  if (!product) {
    console.log('error');
    
    throw new Response('Product not found at all', { status: 404 });
  }

  return json<LoaderData>({ product });
};

export default function ProductDetail() {
  const [mainImage, setMainImage] = useState<string>(''); 

  const { product } = useLoaderData<LoaderData>(); // Get the product from loader data

  // Initialize mainImage with the product's image on load
  useEffect(() => {
    setMainImage(product.image);
  }, [product.image]);

  const changeImage = (src: string) => {
    setMainImage(src); // Update the main image state
  };
  const [quantity, setQuantity] = useState(1); 

  const {  addToCart,   updateQuantity } = useCart();
  return (
    <div className="pt-5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 relative top-[-5px]">
  <img
    src={mainImage} // Display the main image from state
    alt="Product"
    className="w-[500px] h-[370px] rounded-lg border border-gray-100 bg-gray-50  dark:border-gray-700 dark:bg-gray-800 mb-4 object-cover mx-auto"
    id="mainImage"
  />

  <div className="flex gap-4 py-4 justify-center overflow-x-auto">
    {product.thumbnails.map((thumbnail, index) => (
      <button
        key={index}
        onClick={() => changeImage(thumbnail)}
        className="size-16 sm:size-20 object-cover rounded-lg border border-gray-100 bg-gray-50  dark:border-gray-700 dark:bg-gray-800 opacity-60 hover:opacity-100 transition duration-300"
        aria-label={`Thumbnail ${index + 1}`}
      >
        <img
          src={thumbnail}
          alt={`Thumbnail ${index + 1}`}
          className="w-full h-full object-cover rounded-md"
        />
      </button>
    ))}
  </div>
</div>


          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2 dark:text-gray-800 text-white">{product.name.toUpperCase()}</h2>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2 text-gray-600">${product.price}</span>
              <span className="text-gray-500 line-through ">$399.99</span>
            </div>
            
            <p className=" mb-6 text-white dark:text-gray-700">{product.description}</p>
            <div className="mb-6 w-[20px] ">
              <label htmlFor="quantity" className="block text-sm font-medium text-white mb-1">Quantity:</label>

              <div className="flex items-center justify-between flex space-x-2">
                <button
              onClick={() => updateQuantity(product.id, -1)} 
                  className="text-lg px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  aria-label="Decrease Quantity"
                >
                  -
                </button>

                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={product.quantity}
                  onChange={() => setQuantity(product.quantity)}
                  className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  readOnly
                />

                <button
            onClick={() => updateQuantity(product.id, 1)} 
                  className="text-lg px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  aria-label="Increase Quantity"
                >
                  +
                </button>
              </div>
            </div>


            <div className="flex space-x-4 mb-6">
              <button
              onClick={() => addToCart(product)} 
              className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Add to Cart
              </button>
            
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-white">
      <li>24 MP High-Resolution Sensor</li>
      <li>4K Video Recording</li>
      <li>Optical Image Stabilization</li>
      <li>Fast Autofocus System</li>
      <li>Built-in Wi-Fi and Bluetooth</li>
      <li>Interchangeable Lenses</li>
      
    </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// routes/products/$id.tsx
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import initialProducts from '~/productimg'; // Assuming this is the correct import path for initialProducts

// Define types for the product and loader parameters
type Product = {
  image: string;
  name: string;
  price: string;
  description: string;
  quantity: number;
};

type LoaderData = {
  product: Product;
};

export const loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  const productId = params.id;

  // Find the product based on the ID in the initialProducts array
  const product = initialProducts.find((prod: Product) => prod.name === productId);

  if (!product) {
    console.log('error')
    throw new Response('Product not found at al', { status: 404 });
   
  }

  return json({ product });
};

export default function ProductDetail() {
  const { product } = useLoaderData<LoaderData>(); // Get the product from loader data

  return (
    <div className="product-detail">
      <div className="flex justify-center mb-6">
        <img className="w-full lg:w-[400px] h-auto" src={product.image} alt={product.name} />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        <p className="text-xl font-bold text-red-600 mt-4">₦{product.price}</p>
        <button className="bg-blue-700 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
      </div>
    </div>
  );
}

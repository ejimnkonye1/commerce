import { json, LoaderFunction, } from "@remix-run/node";

import initialProducts from "../productimg"; // Import your product data
import { useLoaderData ,Link} from "@remix-run/react";
import { useCart } from "~/context/cartcontext";


type Product = {
  image: string;
  name: string;
  price: string;
  description: string;
  quantity: number;
  id:number;

}
type LoaderData = {
  products: Product[],
  query: string,
}
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";

  // Filter products that match the query
  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return json({ products: filteredProducts, query });
};
export default function SearchPage() {
  const { products, query } = useLoaderData<LoaderData>();
  const {  addToCart } = useCart();
  return (
    <div className="container mx-auto px-4 py-10">
      {products.length === 0 ? (
        <h5 className="text-red-600 font-semibold text-black text-lg text-center mb-5">
          No products found for: `{query}`
        </h5>
      ) : (
        <h3 className="text-xl font-bold text-black text-center mb-6">
          Search Results for: `{query}`
        </h3>
      )}


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
                  <div
                    className="max-w-sm bg-white lg:w-[250px] rounded-lg border border-gray-100 bg-gray-50  dark:border-gray-700 dark:bg-gray-800"
                    key={product.id}
                  >
                    <div className="flex justify-center border-b ">
                      <Link to={`/products/${product.id}`}>
                        <img
                          className=" rounded-t-lg lg:w-[250px] object-cover lg:h-[250px]"
                          src={product.image}
                          alt={product.name}
                        />
                      </Link>
                    </div>
                    <div className="px-5 pb-2 mt-4">
                      <Link to={`/products/${product.id}`}>
                        <h5 className="lg:text-md text-sm lg:font-semibold tracking-tight dark:text-white">
                          {product.name.toUpperCase()}
                        </h5>
                      </Link>
                      <div className="flex items-center flex-col lg:flex-row lg:justify-between hidden lg:flex">
                        <span className="text-sm font-semibold text-gray-300">₦{product.price}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-2 py-2 text-lg mt-0"
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className="lg:hidden block flex-grow">
                        <p className="text-gray-300 lg:font-semibold text-sm">
                          <strong>₦{product.price}</strong>
                        </p>
                        <div className="text-center mt-4">
                          <button className="bg-blue-700 text-white text-sm py-2 px-4 rounded">Add to cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
      </div>
    </div>
  );
}
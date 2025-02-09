import { json, LoaderFunction, } from "@remix-run/node";

import initialProducts from "../productimg"; // Import your product data
import { useLoaderData ,Link} from "@remix-run/react";


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
            key={product.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center border-b p-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  className="w-28 sm:w-32 md:w-36 lg:w-40 object-cover"
                  alt={product.name}
                />
              </Link>
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-medium">{product.name}</p>
              <p className="text-green-600 font-semibold text-lg">
                NGN{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
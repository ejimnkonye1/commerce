export default function OrdersPage() {
    return (
      <div className=" text-white flex flex-col items-center p-6">
        {/* Header */}
        <header className="w-full max-w-4xl  p-4 rounded-lg flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">Orders</h1>
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            📦
          </div>
        </header>
  
        {/* Orders List */}
        <div className="w-full max-w-4xl bg-gray-800 p-6 mt-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
  
          <div className="space-y-4">
            {/* Order Item 1 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-lg font-semibold">Order #123456</p>
              <p>📅 Date: Feb 10, 2025</p>
              <p>📦 Status: Shipped</p>
              <p>💰 Total: $120.00</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
  
            {/* Order Item 2 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-lg font-semibold">Order #654321</p>
              <p>📅 Date: Jan 25, 2025</p>
              <p>📦 Status: Delivered</p>
              <p>💰 Total: $85.00</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
  
            {/* Order Item 3 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-lg font-semibold">Order #987654</p>
              <p>📅 Date: Jan 10, 2025</p>
              <p>📦 Status: Processing</p>
              <p>💰 Total: $45.00</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default function Settings() {
    const handleLogout = () => {
      alert("You have been logged out everywhere!");
      // Add actual logout logic here
    };
  
    return (
      <div className=" text-white flex justify-center items-center p-6">
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
  
          <h2 className="text-lg font-semibold mb-2">Log Out Everywhere</h2>
          <p className="text-gray-300 mb-4">
            If you've lost a device or have security concerns, log out everywhere to ensure the security of your account.
          </p>
  
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
          >
            Log Out Everywhere
          </button>
  
          <p className="text-sm text-gray-400 mt-3">
            You will be logged out on this device as well.
          </p>
        </div>
      </div>
    );
  }
  
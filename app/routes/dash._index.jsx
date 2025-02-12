// routes/dashboard._index.tsx

  export default function ProfilePage() {
    return (
      <div className=" text-white flex flex-col items-center p-6">
        {/* Header */}
        <header className="w-full max-w-4xl  p-4 rounded-lg flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            👤
          </div>
        </header>
  
        {/* Profile Info */}
        <div className="w-full max-w-4xl bg-gray-800 p-6 mt-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-2">
            <p><span className="font-bold">Name:</span> Ejimnkonye Onyedika</p>
            <p><span className="font-bold">Email:</span> ejimnkonyeonyedika@gmail.com</p>
          </div>
        </div>
  
        {/* Addresses */}
        <div className="w-full max-w-4xl bg-gray-800 p-6 mt-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Addresses</h2>
          <p className="mb-2 font-bold">Default Address:</p>
          <p>Ejimnkonye Onyedika</p>
          <p>Kingsley, Ubaka Street, Achara Layout</p>
          <p>400102 Enugu, Nigeria</p>
        </div>
      </div>
    );
  }
  


import { useState, useEffect } from "react";
import { auth, firestore } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import EditModal from "../modal/editmodal";

type User = {
  uid: string;
  email?: string;
  address: string;
};

// Fetch authenticated user using Remix loader
export const loader: LoaderFunction = async () => {
  const user = auth.currentUser;
  return { user };
};

export default function ProfilePage() {
  const { user } = useLoaderData<{ user: User }>();

  const [profile, setProfile] = useState({ name: "", email: "" });
  const [address, setAddress] = useState({ name: "", street: "", city: "", postalCode: "", country: "" });
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        try {
          const userDocRef = doc(firestore, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
  
          if (userDoc.exists()) {
            console.log("Firestore Document Data:", userDoc.data()); // Debugging output
  
            const userData = userDoc.data();
  
            setProfile({
              name: `${userData.firstName || ""} ${userData.lastName || ""}`.trim(),
              email: userData.email || user.email || "",
            });
  
            setAddress({
              name: userData.firstName + " " + userData.lastName || "",
              street: userData.address || "Not provided",
              city: userData.city || "Not provided",
              postalCode: userData.postalCode || "Not provided",
              country: userData.country || "Not provided",
            });
  
            console.log("Fetched Address:", userData.address);
          } else {
            console.log("User document not found!");
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }
      }
    };
  
    fetchUserData();
  }, [user]);
  
  // Runs when `user` changes

  return (
    <div className="text-white flex flex-col items-center p-6">
      <header className="w-full max-w-4xl p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Profile {user?.email}</h1>
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">👤</div>
      </header>

      {/* Personal Information */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 mt-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button onClick={() => setProfileModalOpen(true)} className="text-blue-500 hover:text-blue-400">Edit</button>
        </div>
        <p><span className="font-bold">Name:</span> {profile.name || "Not provided"}</p>
        <p><span className="font-bold">Email:</span> {profile.email}</p>
      </div>

      
<div className="w-full max-w-4xl bg-gray-800 p-6 mt-6 rounded-lg">
  <div className="flex justify-between items-center">
    <h2 className="text-xl font-semibold">Address</h2>
    <button onClick={() => setAddressModalOpen(true)} className="text-blue-500 hover:text-blue-400">
      Edit
    </button>
  </div>

  {address.street !== "Not provided" ? (
    <>
      <p><span className="font-bold">Name:</span> {address.name}</p>
      <p><span className="font-bold">Street:</span> {address.street}</p>
      <p><span className="font-bold">City:</span> {address.city}</p>
      <p><span className="font-bold">Postal Code:</span> {address.postalCode}</p>
      <p><span className="font-bold">Country:</span> {address.country}</p>
    </>
  ) : (
    <p className="text-gray-400">No address available</p>
  )}
</div>


      {/* Edit Profile Modal */}
      <EditModal
        isOpen={isProfileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        title="Edit Profile"
        fields={[
          { name: "name", label: "Name", required: true },
          { name: "email", label: "Email", type: "email", required: true }
        ]}
        onSubmit={() => {}} // Handle updates
      />

      {/* Edit Address Modal */}
      <EditModal
        isOpen={isAddressModalOpen}
        onClose={() => setAddressModalOpen(false)}
        title="Edit Address"
        fields={[
          { name: "name", label: "Full Name", required: true },
          { name: "street", label: "Street Address", required: true },
          { name: "city", label: "City", required: true },
          { name: "postalCode", label: "Postal Code", required: true },
          { name: "country", label: "Country", required: true }
        ]}
        onSubmit={() => {}} // Handle updates
      />
    </div>
  );
}

import { Link } from "@remix-run/react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
            
              <li className="mb-4">
                <Link to="#" className="hover:underline">Address: shop eu2 9&10 army shopping arena ibadan</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">Phone number: 08137795180</Link>
              </li>
          
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="#" className="hover:underline">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">Learn</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">Shop</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">Account</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link to="#" className="hover:underline">iOS</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">Android</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">Windows</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">MacOS</Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2025 <Link to="">Estyne</Link>. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
      <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <FaFacebookF className="w-5 h-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <FaInstagram className="w-5 h-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <FaWhatsapp className="w-5 h-5" />
        <span className="sr-only">WhatsApp</span>
      </Link>
      <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <FaTwitter className="w-5 h-5" />
        <span className="sr-only">Twitter</span>
      </Link>
    </div>



        </div>
      </div>
    </footer>
  );
}















// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faTiktok,
//   faWhatsapp,
//   faThreads,
// } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "../styles/Footer.css";
// function Footer() {
//   return (
//     <footer className="footer  bg-success border-top p-2"  id="abt">
//       <div className="container " id="foot">
//         <div className="mb-3"> 
//         <div className="row">
//           <div className="col-md-12">
//             <h4 className="text-center mb-2 p-3">About Us</h4>
//           </div>
//         </div>
//         <div className="row ">
//           <div className="col-md-4">
//             <h5>Branch Contacts</h5>
            
//               <>
//                 Address: shop eu2 9&10 army shopping arena ibadan<br />
//                 Phone number: 08137795180
//               </>
//               <p>
//                 Address: shop eu2 9&10 army shopping arena ibadan<br />
//                 Phone number: 08137795180
//               </p>
//           </div>
//           <div className="lin col-md-4">
//             <h5>Quick Links</h5>
//             <ul className="">
//             <li className="">
//               <Link className="" to="/home">
//            Home
//               </Link>
//             </li>
//             <li className="">
//               <Link className="" to="/learn">
//            Learn
//               </Link>
//             </li>
//             <li className="">
//               <Link className="" to="/shop">
//            Shop
//               </Link>
//             </li>
//             <li className="">
//               <Link className="" to="/account">
//             My Account
//               </Link>
//             </li>
//             </ul>
//           </div>
//           <div className="col-md-4 ct mb-5">
//             <h5  className="">Connect with Us</h5>
//             <div className="social-icons p-2 ">
//               <a href="https://facebook.com/yourhandle" className="social-icon ">
//                 <FontAwesomeIcon icon={faFacebook} className="m-1" />
//               </a>
//               <a href="https://instagram.com/yourhandle" className="social-icon">
//                 <FontAwesomeIcon icon={faInstagram} className="m-1" />
//               </a>
//               <a href="https://twitter.com/yourhandle" className="social-icon">
//                 <FontAwesomeIcon icon={faTwitter} className="m-1" />
//               </a>
//               <a href="https://tiktok.com/yourhandle" className="social-icon">
//                 <FontAwesomeIcon icon={faTiktok} className="m-1" />
//               </a>
//               <a href="https://whatsapp.com/yournum" className="social-icon">
//                 <FontAwesomeIcon icon={faWhatsapp} className="m-1" />
//               </a>
//               <a href="https://threads.com/yourhandle" className="social-icon">
//                 <FontAwesomeIcon icon={faThreads} className="m-1" />
//               </a>
//             </div>
//           </div>
         
//         </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;



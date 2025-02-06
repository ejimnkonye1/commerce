
import toolImage2 from "../images/came2.jpeg";

import '../styles/About.css';

function Tools() {
  return (
    <div className="container mt-4 p-10">
      <h5 className="text-xl font-semibold mb-4 text-black">Tutorials</h5>
    
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        
        <div className=" p-4">
          <div className="flex justify-center mb-4">
            <img src={toolImage2} alt="How to link your phone" className="w-3/4" />
          </div>
          <div className="card-body">
            <h6 className="text-lg font-semibold mb-2 text-black">How to Link Your Phone</h6>
            <p className="text-sm mb-4 text-black">This tutorial will walk you through the process of linking your phone to the tool, allowing for a smooth connection and integration.</p>
            <p className="text-xs text-gray-600 mb-4">
              <strong>What You’ll Learn:</strong>
              <ul className="list-disc ml-4">
                <li>Step-by-step guide on linking your phone.</li>
                <li>Troubleshooting connection issues.</li>
              </ul>
            </p>
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Watch the tutorial
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center mb-4">
            <img src={toolImage2} alt="How to set up your account" className="w-3/4" />
          </div>
          <div className="card-body">
            <h6 className="text-lg font-semibold mb-2 text-black">How to Set Up Your Account</h6>
            <p className="text-sm mb-4 text-black">Learn how to set up your account from scratch, including profile creation and configuring settings.</p>
            <p className="text-xs text-gray-600 mb-4">
              <strong>What You’ll Learn:</strong>
              <ul className="list-disc ml-4">
                <li>Account registration.</li>
                <li>Setting preferences and notifications.</li>
                <li>Common setup issues and solutions.</li>
              </ul>
            </p>
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Watch the tutorial
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center mb-4">
            <img src={toolImage2} alt="How to track your usage" className="w-3/4" />
          </div>
          <div className="card-body">
            <h6 className="text-lg font-semibold mb-2 text-black">How to Track Your Usage</h6>
            <p className="text-sm mb-4 text-black">In this video, you’ll learn how to track your usage and view detailed analytics.</p>
            <p className="text-xs text-gray-600 mb-4">
              <strong>What You’ll Learn:</strong>
              <ul className="list-disc ml-4">
                <li>Tracking specific usage metrics.</li>
                <li>How to view and interpret the data.</li>
                <li>Setting up usage alerts.</li>
              </ul>
            </p>
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Watch the tutorial
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center mb-4">
            <img src={toolImage2} alt="How to use advanced features" className="w-3/4" />
          </div>
          <div className="card-body">
            <h6 className="text-lg font-semibold mb-2 text-black">How to Use Advanced Features</h6>
            <p className="text-sm mb-4 text-black">This tutorial covers advanced features that allow you to maximize the tool’s potential.</p>
            <p className="text-xs text-gray-600 mb-4">
              <strong>What You’ll Learn:</strong>
              <ul className="list-disc ml-4">
                <li>Integrating the tool with other services.</li>
                <li>Using automation features.</li>
                <li>Advanced troubleshooting.</li>
              </ul>
            </p>
            <a
              href="https://www.youtube.com/watch?v=VIDEO_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Watch the tutorial
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tools;

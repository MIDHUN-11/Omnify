
// import React from 'react';
// import './Sidebar.css'; 
// const Sidebar = ({ component, setComponent }) => {
//   return (
//     <div className="w-full md:w-1/4 bg-white p-4 border-r">
//       <nav>
//         <ul>
//           <li className="mb-4">
//             <button
//               className="flex items-center justify-start text-blue-500 w-full custom-button"
//               onClick={() => setComponent('Date')}
//             >
//               <span className="mr-2">📅</span><span className="txt">Scheduled Date</span>
//             </button>
//           </li>
//           <li className="mb-4">
//             <button
//               className="flex items-center justify-start text-gray-700 w-full custom-button"
//               onClick={() => setComponent('People')}
//             >
//               <span className="mr-2">👤</span>People
//             </button>
//           </li>
//           <li className="mb-4">
//             <button
//               className="flex items-center justify-start text-gray-700 w-full custom-button"
//               onClick={() => setComponent('Service')}
//             >
//               <span className="mr-2">📦</span>Services / Products
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';

const Sidebar = ({ component, setComponent }) => {
  return (
    <div className="w-full md:w-1/4 bg-white p-4 border-r">
      <nav>
        <ul>
          <li className="mb-4">
            <button
              className={`flex items-center justify-start w-full p-2 rounded-md transition-colors duration-200 ${
                component === 'Date' ? 'bg-gray-100 text-blue-500' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setComponent('Date')}
            >
              <span className="mr-2">📅</span>
              <span className="flex-grow text-left">Scheduled Date</span>
              <span className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full ml-2">1</span>
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`flex items-center justify-start w-full p-2 rounded-md transition-colors duration-200 ${
                component === 'People' ? 'bg-gray-100 text-blue-500' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setComponent('People')}
            >
              <span className="mr-2">👤</span>
              <span className="flex-grow text-left">People</span>
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`flex items-center justify-start w-full p-2 rounded-md transition-colors duration-200 ${
                component === 'Service' ? 'bg-gray-100 text-blue-500' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setComponent('Service')}
            >
              <span className="mr-2">📦</span>
              <span className="flex-grow text-left">Services / Products</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

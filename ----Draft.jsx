// import React from "react";

// const CartPage = ({ cartItems, onIncrease, onDecrease, onRemove, onClear }) => {
//   const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-600">Your Shopping Cart</h1>
//         <p className="text-gray-600">Review your selected items and manage your cart.</p>
//       </div>

//       {/* Cart Items */}
//       <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         {cartItems.length > 0 ? (
//           <>
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div
                  
//                   className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow"
//                 >
//                   {/* Item Details */}
//                   <div>
//                     <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
//                     <p className="text-sm text-gray-500">{item.company}</p>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Price:</span> ${item.price.toFixed(2)} per unit
//                     </p>
//                     <p className="text-gray-700">
//                       <span className="font-semibold">Total:</span> $
//                       {(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>

//                   {/* Quantity Controls */}
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => onDecrease(item.id)}
//                       className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-4 py-1 bg-white rounded-lg border text-gray-800">
//                       {item.quantity}
//                     </span>
//                     <button
//                       onClick={() => onIncrease(item.id)}
//                       className="px-3 py-1 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>

//                   {/* Remove Button */}
//                   <button
//                     onClick={() => onRemove(item.id)}
//                     className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Footer */}
//             <div className="mt-8 flex justify-between items-center">
//               {/* Clear All */}
//               <button
//                 onClick={onClear}
//                 className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 Clear All Items
//               </button>

//               {/* Total Cost */}
//               <p className="text-xl font-bold">
//                 Total Cost: <span className="text-blue-600">${totalCost.toFixed(2)}</span>
//               </p>
//             </div>
//           </>
//         ) : (
//           <p className="text-center text-gray-500 text-lg">Your cart is currently empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;



[
  {
      
      "itemName": "Paracetamol",
      "genericName": "Acetaminophen",
      "description": "Paracetamol is used to treat mild to moderate pain and reduce fever. It is commonly used for headaches, muscle aches, and cold-related symptoms.",
      "image": "https://i.ibb.co.com/Rzq9bhR/Paracetamol.jpg",
      "category": "Tablet",
      "company": "HealthCare Pharma",
      "massUnit": "500 Mg",
      "price": 5,
      "discount": 7,
      "sellerEmail": "seller1@gmail.com",
      "bannerStatus": ""
  },
  {
      
      "itemName": "Cetrizine",
      "genericName": "Cetirizine Hydrochloride",
      "description": "Cetrizine is an antihistamine used to relieve allergy symptoms like runny nose, itching, and watery eyes. It is effective for hay fever and hives.",
      "image": "https://i.ibb.co.com/DV2s8vn/Cetrizine.jpg",
      "category": "Tablet",
      "company": "AllergyCare Ltd",
      "massUnit": "10 Mg",
      "price": 8,
      "discount": 5,
      "sellerEmail": "seller2@gmail.com",
      "bannerStatus": ""
  },
  {
      
      "itemName": "Amoxicillin",
      "genericName": "Amoxicillin Trihydrate",
      "description": "Amoxicillin is a penicillin antibiotic used to treat bacterial infections, including pneumonia, bronchitis, and infections of the ear, nose, and throat.",
      "image": "https://i.ibb.co.com/qdMm59S/Amoxicillin.jpg",
      "category": "Capsule",
      "company": "BioPharma Inc",
      "massUnit": "250 Mg",
      "price": 10,
      "discount": 0,
      "sellerEmail": "seller3@gmail.com",
      "bannerStatus": "Approved"
  },
  {
      
      "itemName": "Cough Syrup",
      "genericName": "Diphenhydramine HCL",
      "description": "Cough Syrup is used to relieve coughing caused by minor throat and bronchial irritation, often associated with a cold or inhaled irritants.",
      "image": "https://i.ibb.co.com/ypsVj1f/Cough-Syrup.jpg",
      "category": "Syrup",
      "company": "Wellness Meds",
      "massUnit": "100 ML",
      "price": 50,
      "discount": 10,
      "sellerEmail": "seller4@gmail.com"
  },
  {
      
      "itemName": "Omeprazole",
      "genericName": "Omeprazole Magnesium",
      "description": "Omeprazole is used to treat acid reflux, heartburn, and stomach ulcers by reducing the amount of acid produced in the stomach.",
      "image": "https://i.ibb.co.com/pxVD7RR/Omeprazole.jpg",
      "category": "Capsule",
      "company": "AcidCare Pharmaceuticals",
      "massUnit": "20 Mg",
      "price": 12,
      "discount": 0,
      "sellerEmail": "seller5@gmail.com",
      "bannerStatus": "Approved"
  },
  {
      
      "itemName": "ORS Solution",
      "genericName": "Oral Rehydration Salts",
      "description": "ORS Solution is used to treat dehydration caused by diarrhea or vomiting. It restores essential salts and fluids in the body.",
      "image": "https://i.ibb.co.com/mhcrX2k/ors.jpg",
      "category": "Suspension",
      "company": "HydraLife Ltd",
      "massUnit": "200 ML",
      "price": 25,
      "discount": 7,
      "sellerEmail": "seller6@gmail.com",
      "bannerStatus": "Approved"
  },
  {
      
      "itemName": "Paracetamol",
      "genericName": "Acetaminophen",
      "description": "Paracetamol is used to treat mild to moderate pain and reduce fever. It is commonly used for headaches, muscle aches, and cold-related symptoms.",
      "image": "https://i.ibb.co.com/Rzq9bhR/Paracetamol.jpg",
      "category": "Antibiotic",
      "company": "HealthCare Pharma",
      "massUnit": "500 Mg",
      "price": 5,
      "discount": 2,
      "sellerEmail": "seller7@gmail.com"
  },
  {
      
      "itemName": "Cetrizine",
      "genericName": "Cetirizine Hydrochloride",
      "description": "Cetrizine is an antihistamine used to relieve allergy symptoms like runny nose, itching, and watery eyes. It is effective for hay fever and hives.",
      "image": "https://i.ibb.co.com/DV2s8vn/Cetrizine.jpg",
      "category": "Tablet",
      "company": "AllergyCare Ltd",
      "massUnit": "10 Mg",
      "price": 8,
      "discount": 5,
      "sellerEmail": "seller8@gmail.com",
      "bannerStatus": "Approved"
  },{
    
    "itemName": "Paracetamol",
    "genericName": "Acetaminophen",
    "description": "Paracetamol is used to treat mild to moderate pain and reduce fever. It is commonly used for headaches, muscle aches, and cold-related symptoms.",
    "image": "https://i.ibb.co.com/Rzq9bhR/Paracetamol.jpg",
    "category": "Tablet",
    "company": "HealthCare Pharma",
    "massUnit": "500 Mg",
    "price": 5,
    "discount": 7,
    "sellerEmail": "seller1@gmail.com",
    "bannerStatus": ""
},
{
    
    "itemName": "Cetrizine",
    "genericName": "Cetirizine Hydrochloride",
    "description": "Cetrizine is an antihistamine used to relieve allergy symptoms like runny nose, itching, and watery eyes. It is effective for hay fever and hives.",
    "image": "https://i.ibb.co.com/DV2s8vn/Cetrizine.jpg",
    "category": "Tablet",
    "company": "AllergyCare Ltd",
    "massUnit": "10 Mg",
    "price": 8,
    "discount": 5,
    "sellerEmail": "seller2@gmail.com",
    "bannerStatus": ""
},
{
    
    "itemName": "Amoxicillin",
    "genericName": "Amoxicillin Trihydrate",
    "description": "Amoxicillin is a penicillin antibiotic used to treat bacterial infections, including pneumonia, bronchitis, and infections of the ear, nose, and throat.",
    "image": "https://i.ibb.co.com/qdMm59S/Amoxicillin.jpg",
    "category": "Injection",
    "company": "BioPharma Inc",
    "massUnit": "250 Mg",
    "price": 10,
    "discount": 0,
    "sellerEmail": "seller3@gmail.com",
    "bannerStatus": "Approved"
}
]

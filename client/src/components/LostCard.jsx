import React from 'react';

function LostCard({ date, item, desc, location }) {
  return (
    <div className="w-[320px] bg-yellow-100 border border-yellow-600 rounded-lg p-4 shadow-md text-black">
      <h2 className="text-xl font-bold text-red-700 mb-2">Lost Item</h2>
      <p><strong>Lost Date:</strong> {date}</p>
      <p><strong>Item:</strong> {item}</p>
      <p><strong>Description:</strong> {desc}</p>
      <p><strong>Lost At:</strong> {location}</p>
    </div>
  );
}

export default LostCard;

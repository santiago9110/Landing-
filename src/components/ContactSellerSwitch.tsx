import React from 'react';

interface ContactSellerSwitchProps {
  sellers: { name: string; phone: string; }[];
}

const ContactSellerSwitch: React.FC<ContactSellerSwitchProps> = ({ sellers }) => (
  <div>
    <h2>Contacta a un vendedor</h2>
    <ul>
      {sellers.map((seller, idx) => (
        <li key={idx}>{seller.name} - {seller.phone}</li>
      ))}
    </ul>
  </div>
);

export default ContactSellerSwitch;

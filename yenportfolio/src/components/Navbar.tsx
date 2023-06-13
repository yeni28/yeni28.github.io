import React from 'react';



const Navbar: React.FC = () => {
  const items =['Home', 'Profile', 'Project','Contact']
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
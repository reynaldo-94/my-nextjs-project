// src/layouts/MainLayout.tsx

import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <header style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
        <h2>Mi App22</h2>
      </header>
      <main>{children}</main>
      <footer style={{ backgroundColor: '#222', padding: '10px', color: '#fff' }}>
        <p>© 2024 Todos los derechos reservados.</p>
      </footer>
    </>
  );
};

export default MainLayout;

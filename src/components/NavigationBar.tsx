// navigation.js

"use client";

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { useRouter } from "next/navigation"; // Hook para manejar la navegación
import Link from 'next/link';


export default function NavigationBar() {
  const router = useRouter(); // Inicializa el router

  const handleButtonClick = (path: string) => {
    router.push(path); // Ruta a la que deseas redirigir
  };

  return (
    <AppBar position="static" color="default" style={{ padding: '0 1rem' }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link href="/" passHref>
            <img
              src="/logo.png" // Cambia esta ruta al logo correspondiente
              alt="Zona Music Logo"
              style={{ height: "40px", marginRight: "1rem", cursor: "pointer" }}
            />
          </Link>

          {/* <Typography variant="h6" component="div" color="textPrimary">
            musicalia
          </Typography> */}
        </Box>

        {/* Menú de navegación */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit">Géneros</Button>
          <Button color="inherit">Eventos</Button>
          <Button color="inherit">Instrumentos</Button>
          <Button color="inherit">Blog</Button>
        </Box>

        {/* Botón de búsqueda */}
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>

        {/* Botón de acción */}
        <Button variant="contained" color="secondary" 
          // style={{ marginLeft: '1rem' }}
          sx={{
            // mt: 6,
            backgroundColor: "#d32f2f",
            color: "white",
            // px: 4,
            // py: 1.5,
            // fontSize: "16px",
            "&:hover": { backgroundColor: "#b71c1c" },
          }}
          onClick={() => handleButtonClick('/musicos')}
        >
          🎵 Conectarse/Registrarse como músico
        </Button>
      </Toolbar>
    </AppBar>
  );
}

// components/HeroSection.tsx
"use client";

import React from "react";
import { Box, Typography, Button, TextField, Select, MenuItem } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#99002E", // Color de fondo del contenedor
        color: "white",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Título principal */}
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Busca músicos, grupos, DJs y bandas para tu evento
      </Typography>

      {/* Formulario de búsqueda */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          display: "flex",
          boxShadow: 3,
          p: 1,
          gap: 1,
          alignItems: "center",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Selector de tipo */}
        <Select defaultValue="Cualquiera" sx={{ flex: 1, height: "56px" }}>
          <MenuItem value="Cualquiera">Cualquiera</MenuItem>
          <MenuItem value="Músico">Músico</MenuItem>
          <MenuItem value="Grupo">Grupo</MenuItem>
          <MenuItem value="DJ">DJ</MenuItem>
        </Select>

        {/* Selector de provincia */}
        <Select defaultValue="Cualquier provincia" sx={{ flex: 1, height: "56px" }}>
          <MenuItem value="Cualquier provincia">Cualquier provincia</MenuItem>
          <MenuItem value="Madrid">Madrid</MenuItem>
          <MenuItem value="Barcelona">Barcelona</MenuItem>
          <MenuItem value="Valencia">Valencia</MenuItem>
        </Select>

        {/* Selector de estilo */}
        <Select defaultValue="Cualquier estilo" sx={{ flex: 1, height: "56px" }}>
          <MenuItem value="Cualquier estilo">Cualquier estilo</MenuItem>
          <MenuItem value="Rock">Rock</MenuItem>
          <MenuItem value="Pop">Pop</MenuItem>
          <MenuItem value="Jazz">Jazz</MenuItem>
        </Select>

        {/* Botón de búsqueda */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            height: "56px",
            px: 3,
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;

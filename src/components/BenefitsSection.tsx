"use client";

// components/BenefitsSection.tsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Cancel, MonetizationOnOutlined, People, PhoneInTalk, Shield, Start } from "@mui/icons-material";

const BenefitsSection = () => {
  // Datos para los íconos y textos
  const benefits = [
    {
      icon: <People fontSize="large" sx={{ color: "#C2185B" }} />,
      title: "Inmensa variedad de músicos y DJs",
      description: "Siempre tendremos algo para ti.",
    },
    {
      icon: <Start fontSize="large" sx={{ color: "#C2185B" }} />,
      title: "Calidad, puntualidad y responsabilidad",
      description: "Todo saldrá perfecto.",
    },
    {
      icon: <MonetizationOnOutlined fontSize="large" sx={{ color: "#C2185B" }} />,
      title: "Opciones al mejor precio",
      description: "Te damos opciones para que puedas contratar al mejor precio.",
    },
    {
      icon: <PhoneInTalk fontSize="large" sx={{ color: "#C2185B" }} />,
      title: "Te escuchamos",
      description: "Te recomendamos y te resolvemos cualquier duda.",
    },
    {
      icon: <Shield fontSize="large" sx={{ color: "#C2185B" }} />,
      title: "Fácil, cómoda y segura",
      description: "Contrata música en directo de forma fácil, cómoda y segura.",
    },
    {
      icon: <Cancel fontSize="large" sx={{ color: "#C2185B" }} />,
      title: "Políticas de cancelación",
      description: "Por si surge un imprevisto.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fdfdf9", // Fondo claro
        textAlign: "center",
        py: 8,
        px: 4,
      }}
    >
      {/* Título */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#333",
          mb: 4,
        }}
      >
        ¿Por qué contratar música en directo para eventos con Fander?
      </Typography>

      {/* Beneficios */}
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              textAlign: "center",
            }}
          >
            {benefit.icon}
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
              {benefit.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
              {benefit.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default BenefitsSection;

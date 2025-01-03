// components/StepsSection.tsx
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const StepsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fdfdf9", // Fondo claro
        textAlign: "center",
        py: 8,
        px: 4,
      }}
    >
      {/* Encabezado */}
      <Typography variant="overline" sx={{ color: "#666", fontWeight: "bold" }}>
        EN EVIDENCIA
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#333",
          mb: 2,
        }}
      >
        Cómo funciona
      </Typography>

      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          color: "#000",
        }}
      >
        Buscar <span style={{ color: "#d32f2f" }}>músicos</span> nunca ha sido tan fácil
      </Typography>

      {/* Pasos */}
      <Grid container spacing={4} justifyContent="center">
        {/* Paso 1 */}
        <Grid item xs={12} md={4}>
          <Box>
            <img
              src="/paso1.png"
              alt="Step 1 Icon"
              style={{ maxWidth: "80px", marginBottom: "16px" }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              PASO 1
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Utiliza nuestros filtros de búsqueda para encontrar fácilmente la música adecuada entre miles de sugerencias.
            </Typography>
          </Box>
        </Grid>

        {/* Paso 2 */}
        <Grid item xs={12} md={4}>
          <Box>
            <img
              src="/paso2.png"
              alt="Step 2 Icon"
              style={{ maxWidth: "80px", marginBottom: "16px" }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              PASO 2
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Ver fotos, ver vídeos y leer opiniones de otros usuarios.
            </Typography>
          </Box>
        </Grid>

        {/* Paso 3 */}
        <Grid item xs={12} md={4}>
          <Box>
            <img
              src="/paso3.png"
              alt="Step 3 Icon"
              style={{ maxWidth: "80px", marginBottom: "16px" }}
            />
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              PASO 3
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Contacta con los músicos que desees contratar por correo electrónico, teléfono o WhatsApp. Música no recibe comisiones.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Botón final */}
      <Button
        variant="contained"
        sx={{
          mt: 6,
          backgroundColor: "#d32f2f",
          color: "white",
          px: 4,
          py: 1.5,
          fontSize: "16px",
          "&:hover": { backgroundColor: "#b71c1c" },
        }}
      >
        Buscar músicos
      </Button>
    </Box>
  );
};

export default StepsSection;

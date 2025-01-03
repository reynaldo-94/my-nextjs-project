// components/EventsSection.tsx
import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

const EventsSection = () => {
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
        EVENTOS
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#333",
          mb: 4,
        }}
      >
        La música adecuada para tus eventos
      </Typography>

      {/* Tarjetas */}
      <Grid container spacing={4} justifyContent="center">
        {/* Tarjeta 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#99002E",
              color: "white",
              textAlign: "center",
              borderRadius: 3,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/evento1.png" // Cambia por la ruta de tu imagen
              alt="Música para cumpleaños"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Música para cumpleaños
              </Typography>
              <Typography variant="body2" mt={2}>
                Cualquier excusa es buena para celebrar por todo lo alto un cumpleaños, y no hay
                nada más especial que contratar un músico para la fiesta ¡o sorprender a alguien
                querido!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#99002E",
              color: "white",
              textAlign: "center",
              borderRadius: 3,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/evento2.png" // Cambia por la ruta de tu imagen
              alt="Música para bodas"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Música para bodas
              </Typography>
              <Typography variant="body2" mt={2}>
                La mejor música en directo para un día tan especial: instrumental en la ceremonia, un
                solista durante el cóctel, un DJ para la fiesta de bodas o un grupo de versiones ¡la
                que prefieras!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#99002E",
              color: "white",
              textAlign: "center",
              borderRadius: 3,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/evento3.png" // Cambia por la ruta de tu imagen
              alt="Música para fiestas privadas"
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Música para fiestas privadas
              </Typography>
              <Typography variant="body2" mt={2}>
                Todos sabemos lo difícil que se hace organizar un bautizo o comunión original donde
                tanto mayores como niños disfruten. ¡La música en directo puede ser clave!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Botón */}
      <Button
        variant="outlined"
        sx={{
          mt: 4,
          color: "#99002E",
          borderColor: "#99002E",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#99002E",
            color: "white",
          },
        }}
      >
        Descubre todos los eventos
      </Button>
    </Box>
  );
};

export default EventsSection;

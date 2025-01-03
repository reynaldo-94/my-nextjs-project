import React from 'react';
import {
  Box,
  TextField,
  Button,
  Slider,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FilterAndCardsPage = () => {
  const marks = [
    { value: 100, label: '100€' },
    { value: 20000, label: '20000€' },
  ];

  const renderCards = () => (
    <Grid container spacing={2}>
      {[1, 2, 3].map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`/banda${item}.png`} // Actualiza con la URL o imagen adecuada
              alt="Card image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item}. Nombre del Artista
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción breve del grupo o artista.
              </Typography>
              <Box display="flex" alignItems="center" mt={2}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" color="text.secondary" ml={1}>
                  Ciudad o localidad
                </Typography>
              </Box>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button size="small" color="primary">
                  Contactar
                </Button>
                <Button size="small" color="secondary">
                  Ver el perfil
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box display="flex" p={2}>
      {/* Sidebar Filtros */}
      <Box width="25%" p={2}>
        <Typography variant="h6" gutterBottom>
          Filtros
        </Typography>
        <TextField fullWidth label="Qué buscas?" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Tipos de músicos" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Ciudad" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Estilos musicales" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Tipos de eventos" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Orden por defecto" variant="outlined" sx={{ mb: 2 }} />

        <Typography gutterBottom>Precio</Typography>
        <Slider
          defaultValue={[100, 20000]}
          min={100}
          max={20000}
          marks={marks}
          valueLabelDisplay="auto"
          sx={{ mb: 2 }}
        />

        <Button fullWidth variant="contained" color="primary" sx={{ mb: 1 }}>
          Buscar
        </Button>
        <Button fullWidth variant="text" color="secondary">
          Limpiar filtros
        </Button>
      </Box>

      {/* Cards de resultados */}
      <Box width="75%" p={2}>
        <Typography variant="h6" gutterBottom>
          Resultados
        </Typography>
        {renderCards()}
      </Box>
    </Box>
  );
};

export default FilterAndCardsPage;

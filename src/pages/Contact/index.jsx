import { useState } from 'react';
import styled from 'styled-components';
import { Container, Typography, Grid, TextField, Button, Box, Paper } from '@mui/material';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactForm = styled(Paper)`
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const PageHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 0;
  margin-bottom: 4rem;
`;

const StyledButton = styled(Button)`
  background-color: var(--secondary-color);
  padding: 0.8rem 2rem;
  
  &:hover {
    background-color: #19a9b5;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, ajoutez la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader>
        <Container>
          <Typography variant="h2" gutterBottom>
            Contactez-nous
          </Typography>
          <Typography variant="h5">
            Nous sommes là pour répondre à vos questions
          </Typography>
        </Container>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Informations de Contact
            </Typography>
            
            <ContactInfo>
              <LocationOn color="primary" />
              <Box>
                <Typography variant="h6">Adresse</Typography>
                <Typography variant="body1">
                  123 Avenue de la Santé<br />
                  75000 Paris, France
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <Phone color="primary" />
              <Box>
                <Typography variant="h6">Téléphone</Typography>
                <Typography variant="body1">
                  +33 1 23 45 67 89
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <Email color="primary" />
              <Box>
                <Typography variant="h6">Email</Typography>
                <Typography variant="body1">
                  contact@meddical.fr
                </Typography>
              </Box>
            </ContactInfo>

            <ContactInfo>
              <AccessTime color="primary" />
              <Box>
                <Typography variant="h6">Horaires d'ouverture</Typography>
                <Typography variant="body1">
                  Lundi - Vendredi: 8h00 - 20h00<br />
                  Samedi: 9h00 - 18h00<br />
                  Dimanche: Fermé
                </Typography>
              </Box>
            </ContactInfo>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactForm elevation={3}>
              <Typography variant="h4" gutterBottom>
                Prendre Rendez-vous
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nom complet"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service souhaité"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledButton
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Envoyer la demande
                    </StyledButton>
                  </Grid>
                </Grid>
              </form>
            </ContactForm>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Contact; 
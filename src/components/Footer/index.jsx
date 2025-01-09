import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled.footer`
  background-color: #2B3087;
  color: #ffffff;
  padding: 4rem 0 2rem;
`;

const FooterLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: #1DBFCC;
  }
`;

const ContactItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              À propos de Meddical
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Meddical est votre partenaire de confiance pour des soins de santé de qualité.
              Notre équipe de professionnels dévoués s'engage à fournir les meilleurs services médicaux.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Liens Rapides
            </Typography>
            <FooterLink to="/services">Nos Services</FooterLink>
            <FooterLink to="/doctors">Nos Médecins</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/urgences">Urgences</FooterLink>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <ContactItem>
              <LocationOnIcon />
              <Typography variant="body2">
                123 Avenue de la Santé<br />
                75000 Paris, France
              </Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon />
              <Typography variant="body2">
                +33 1 23 45 67 89
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon />
              <Typography variant="body2">
                contact@meddical.fr
              </Typography>
            </ContactItem>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Meddical. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 
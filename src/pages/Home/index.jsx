import styled from 'styled-components';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const HeroSection = styled.section`
  background: linear-gradient(rgba(31, 43, 108, 0.8), rgba(31, 43, 108, 0.8)),
    url('/src/assets/images/hero-bg.jpg') no-repeat center;
  background-size: cover;
  min-height: 85vh;
  display: flex;
  align-items: center;
  color: var(--white);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom right, transparent 49.5%, var(--white) 50%);
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  position: relative;
  z-index: 1;
`;

const StyledButton = styled(Button)`
  background-color: var(--secondary-blue);
  color: var(--white);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-family: var(--body-font);
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  
  &:hover {
    background-color: var(--primary-blue);
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: var(--white);
`;

const ServiceCard = styled(Box)`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(31, 43, 108, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: var(--accent-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 2.5rem;
    color: var(--primary-blue);
  }
`;

const ServiceTitle = styled(Typography)`
  font-family: var(--heading-font);
  color: var(--primary-blue);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled(Typography)`
  color: #666;
  line-height: 1.6;
`;

const Home = () => {
  const services = [
    {
      icon: <AccessTimeIcon />,
      title: 'Services d\'Urgence 24/7',
      description: 'Une équipe médicale disponible jour et nuit pour répondre à vos urgences avec professionnalisme et rapidité.'
    },
    {
      icon: <LocalHospitalIcon />,
      title: 'Médecins Spécialistes',
      description: 'Des experts qualifiés dans diverses spécialités médicales pour des soins complets et personnalisés.'
    },
    {
      icon: <MedicalServicesIcon />,
      title: 'Équipements Modernes',
      description: 'Un plateau technique de pointe pour des diagnostics précis et des traitements efficaces.'
    }
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <Typography 
              variant="h1" 
              gutterBottom
              sx={{ 
                fontFamily: 'var(--heading-font)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                marginBottom: '1.5rem'
              }}
            >
              Votre Santé est Notre Priorité
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                marginBottom: '2rem',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Des soins médicaux d'excellence avec une approche humaine et personnalisée pour votre bien-être.
            </Typography>
            <StyledButton
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
            >
              Prendre Rendez-vous
            </StyledButton>
          </HeroContent>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ServiceCard>
                  <IconWrapper>
                    {service.icon}
                  </IconWrapper>
                  <ServiceTitle variant="h5">
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ServicesSection>
    </>
  );
};

export default Home; 
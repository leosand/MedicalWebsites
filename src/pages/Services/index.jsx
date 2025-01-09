import styled from 'styled-components';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ServiceCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceImage = styled(CardMedia)`
  height: 200px;
`;

const PageHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 0;
  margin-bottom: 4rem;
`;

const Services = () => {
  const services = [
    {
      title: 'Urgences 24/7',
      description: 'Service d\'urgence disponible 24h/24 et 7j/7 avec une équipe médicale expérimentée.',
      image: '/images/services/emergency.jpg'
    },
    {
      title: 'Consultations Spécialisées',
      description: 'Consultations avec des médecins spécialistes dans différents domaines médicaux.',
      image: '/images/services/consultation.jpg'
    },
    {
      title: 'Imagerie Médicale',
      description: 'Équipements d\'imagerie de dernière génération pour des diagnostics précis.',
      image: '/images/services/imaging.jpg'
    },
    {
      title: 'Laboratoire d\'Analyses',
      description: 'Analyses médicales complètes avec des résultats rapides et fiables.',
      image: '/images/services/lab.jpg'
    },
    {
      title: 'Chirurgie',
      description: 'Service de chirurgie avec des équipements modernes et une équipe hautement qualifiée.',
      image: '/images/services/surgery.jpg'
    },
    {
      title: 'Maternité',
      description: 'Accompagnement complet pour la grossesse et l\'accouchement dans un environnement sécurisé.',
      image: '/images/services/maternity.jpg'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader>
        <Container>
          <Typography variant="h2" gutterBottom>
            Nos Services Médicaux
          </Typography>
          <Typography variant="h5">
            Une gamme complète de services de santé pour votre bien-être
          </Typography>
        </Container>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <ServiceImage
                  image={service.image}
                  title={service.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Pourquoi Choisir Nos Services ?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            Notre établissement s'engage à fournir des soins médicaux d'excellence avec une approche centrée sur le patient. 
            Nous combinons expertise médicale, technologies de pointe et attention personnalisée pour assurer votre bien-être.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Services; 
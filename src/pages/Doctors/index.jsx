import styled from 'styled-components';
import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Box } from '@mui/material';
import { LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { motion } from 'framer-motion';

const DoctorCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const DoctorImage = styled(CardMedia)`
  height: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Specialty = styled(Typography)`
  color: var(--secondary-color);
  font-weight: 500;
`;

const PageHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 0;
  margin-bottom: 4rem;
`;

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sophie Martin',
      specialty: 'Cardiologie',
      image: '/images/doctors/doctor1.jpg',
      description: 'Spécialiste en cardiologie interventionnelle avec plus de 15 ans d\'expérience.',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Dr. Thomas Bernard',
      specialty: 'Neurologie',
      image: '/images/doctors/doctor2.jpg',
      description: 'Expert en troubles neurologiques et maladies neurodégénératives.',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Dr. Marie Dubois',
      specialty: 'Pédiatrie',
      image: '/images/doctors/doctor3.jpg',
      description: 'Pédiatre dévouée avec une approche chaleureuse envers les enfants.',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Dr. Pierre Laurent',
      specialty: 'Chirurgie',
      image: '/images/doctors/doctor4.jpg',
      description: 'Chirurgien expérimenté spécialisé en chirurgie mini-invasive.',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Dr. Claire Moreau',
      specialty: 'Gynécologie',
      image: '/images/doctors/doctor5.jpg',
      description: 'Gynécologue-obstétricienne experte en suivi de grossesse.',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      name: 'Dr. Jean Petit',
      specialty: 'Radiologie',
      image: '/images/doctors/doctor6.jpg',
      description: 'Radiologue spécialisé en imagerie diagnostique avancée.',
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
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
            Notre Équipe Médicale
          </Typography>
          <Typography variant="h5">
            Des professionnels de santé dévoués à votre bien-être
          </Typography>
        </Container>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {doctors.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DoctorCard>
                <DoctorImage
                  image={doctor.image}
                  title={doctor.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {doctor.name}
                  </Typography>
                  <Specialty variant="subtitle1" gutterBottom>
                    {doctor.specialty}
                  </Specialty>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.description}
                  </Typography>
                  <SocialLinks>
                    <IconButton href={doctor.social.linkedin} color="primary">
                      <LinkedIn />
                    </IconButton>
                    <IconButton href={doctor.social.twitter} color="primary">
                      <Twitter />
                    </IconButton>
                    <IconButton href={doctor.social.facebook} color="primary">
                      <Facebook />
                    </IconButton>
                  </SocialLinks>
                </CardContent>
              </DoctorCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Expertise et Dévouement
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Notre équipe médicale combine expertise, expérience et compassion pour offrir les meilleurs soins possibles. 
            Chaque membre de notre équipe est dévoué à votre santé et votre bien-être.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Doctors; 
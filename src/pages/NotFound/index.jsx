import styled from 'styled-components';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundContainer = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled(Typography)`
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: var(--secondary-color);
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  
  &:hover {
    background-color: #19a9b5;
  }
`;

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NotFoundContainer>
        <Container maxWidth="sm">
          <ErrorCode variant="h1">
            404
          </ErrorCode>
          <Typography variant="h4" gutterBottom>
            Page Non Trouvée
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </Typography>
          <StyledButton
            component={Link}
            to="/"
            variant="contained"
            size="large"
          >
            Retour à l'accueil
          </StyledButton>
        </Container>
      </NotFoundContainer>
    </motion.div>
  );
};

export default NotFound; 
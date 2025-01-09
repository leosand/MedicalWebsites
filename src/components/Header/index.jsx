import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TopBar = styled.div`
  background-color: var(--primary-blue);
  color: var(--white);
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1rem;
  }
`;

const HeaderContainer = styled(AppBar)`
  background-color: var(--white);
  box-shadow: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  .MuiToolbar-root {
    padding: 1rem 0;
  }
`;

const Logo = styled(Link)`
  font-family: var(--heading-font);
  font-size: 2rem;
  color: var(--primary-blue);
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    color: var(--secondary-blue);
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: var(--body-font);
  font-weight: 500;
  color: var(--primary-blue);
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: var(--secondary-blue);
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;
  color: var(--primary-blue);
  
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' },
    { path: '/services', label: 'Services' },
    { path: '/doctors', label: 'Médecins' },
    { path: '/news', label: 'Actualités' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <TopBar>
        <Container>
          <TopBarContent>
            <ContactInfo>
              <ContactItem>
                <EmailIcon />
                <span>contact@meddical.com</span>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <span>+33 1 23 45 67 89</span>
              </ContactItem>
              <ContactItem>
                <LocationOnIcon />
                <span>123 Avenue de la Santé, Paris</span>
              </ContactItem>
            </ContactInfo>
          </TopBarContent>
        </Container>
      </TopBar>
      
      <HeaderContainer position="sticky">
        <Container>
          <Toolbar disableGutters>
            <Logo to="/">
              Meddical<span>.</span>
            </Logo>

            <Navigation>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
              ))}
            </Navigation>

            <MobileMenuButton
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </MobileMenuButton>

            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
            >
              <Box sx={{ width: 250, p: 2 }}>
                <IconButton
                  sx={{ mb: 2 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
                
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                      <NavLink
                        to={item.path}
                        className={location.pathname === item.path ? 'active' : ''}
                        onClick={() => setMobileOpen(false)}
                        style={{ width: '100%', padding: '1rem' }}
                      >
                        {item.label}
                      </NavLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header; 
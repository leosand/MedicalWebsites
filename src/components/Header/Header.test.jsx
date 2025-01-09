import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  test('renders logo and navigation links', () => {
    renderWithRouter(<Header />);
    
    // Vérifie la présence du logo
    expect(screen.getByAltText('Meddical Logo')).toBeInTheDocument();
    
    // Vérifie la présence des liens de navigation
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Médecins')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('mobile menu button toggles drawer', () => {
    renderWithRouter(<Header />);
    
    // Simule un écran mobile
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
    
    // Trouve le bouton du menu mobile
    const menuButton = screen.getByLabelText('open drawer');
    
    // Vérifie que le menu est fermé initialement
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    
    // Clique sur le bouton du menu
    fireEvent.click(menuButton);
    
    // Vérifie que le menu est ouvert
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  test('navigation links have correct hrefs', () => {
    renderWithRouter(<Header />);
    
    // Vérifie les URLs des liens
    expect(screen.getByText('Accueil').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Services').closest('a')).toHaveAttribute('href', '/services');
    expect(screen.getByText('Médecins').closest('a')).toHaveAttribute('href', '/doctors');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });
}); 
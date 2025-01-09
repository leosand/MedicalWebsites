import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
`;

function MainLayout() {
  return (
    <MainContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </MainContainer>
  );
}

export default MainLayout; 
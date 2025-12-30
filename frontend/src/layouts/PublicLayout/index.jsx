import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
// import { useContext } from 'react';
// import { ThemeContext } from '../../utils/context';
// import styled from 'styled-components';
// import colors from '../../utils/style/color';

// const CardMain = styled.main`
//   background-color: ${({ isDarkMode }) =>
//           isDarkMode ? colors.fond : 'white'};
// `

const PublicLayout = () => {
  // const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Header/>
      <main className="mt-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;

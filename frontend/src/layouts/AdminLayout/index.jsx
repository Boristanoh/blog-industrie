// import { Outlet } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import styled from 'styled-components';
// import { ThemeContext } from '../../utils/context';
// import colors from '../../utils/style/color';
// import Header from '../../admin/components/Header';
// import Sidebar from '../../admin/components/Sidebar';

// // Layout global : Header en haut
// const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// // Conteneur horizontal : Sidebar à gauche + MainContent à droite
// const LayoutWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   transition: all 0.3s ease;
// `;

// // Sidebar visible ou cachée (sans position: fixed)
// const SidebarWrapper = styled.div`
//   width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
//   transition: width 0.3s ease;
//   overflow: hidden;
// `;

// // Contenu principal
// const MainContent = styled.main`
//   flex-grow: 1;
//   padding: 1rem;
//   background-color: ${({ isDarkMode }) =>
//     isDarkMode ? colors.fond : 'white'};
//   transition: all 0.3s ease;
// `;

// const AdminLayout = () => {
//   const { isDarkMode } = useContext(ThemeContext);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <PageWrapper>
//       <Header toggleSidebar={toggleSidebar} />
//       <LayoutWrapper>
//         <SidebarWrapper isOpen={isSidebarOpen}>
//           <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         </SidebarWrapper>
//         <MainContent isDarkMode={isDarkMode}>
//           <Outlet />
//         </MainContent>
//       </LayoutWrapper>
//     </PageWrapper>
//   );
// };

// export default AdminLayout;

import { Outlet } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
import colors from '../../utils/style/color';
import Header from '../../admin/components/Header';
import Sidebar from '../../admin/components/Sidebar';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Conteneur horizontal : Sidebar à gauche + tout le reste à droite
const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  transition: all 0.3s ease;
  width: 100%;
`;

// Sidebar responsive
const SidebarWrapper = styled.div`
  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
    background-color: #1f2937;
    overflow: auto;
    transition: width 0.3s ease;
    z-index: 999;
  }

  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: 100%;
    background-color: #1f2937;
    transition: left 0.3s ease;
    z-index: 999;
  }
`;


// Overlay mobile
const Overlay = styled.div`
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 998;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

// Colonne droite du layout
const RightPane = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    margin-left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  }
`;


// Contenu principal
const MainContent = styled.main`
  padding: 1rem;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? colors.white : colors.fond_50};
  min-height: 100%;
  flex-grow: 1;
`;

const AdminLayout = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <PageWrapper>
      <LayoutWrapper>
        <SidebarWrapper isOpen={isSidebarOpen}>
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </SidebarWrapper>

        <RightPane isOpen={isSidebarOpen}>
          <Header toggleSidebar={toggleSidebar} />
          <MainContent isDarkMode={isDarkMode}>
            <Outlet />
          </MainContent>
        </RightPane>
      </LayoutWrapper>

      {/* Overlay pour mobile */}
      <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />
    </PageWrapper>
  );
};

export default AdminLayout;
import { RouterProvider } from 'react-router-dom';
import router from './router';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;

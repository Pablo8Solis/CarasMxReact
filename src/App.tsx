import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyles';
import theme from './theme';
import Header from './Components/HEADER';
import Main from './Components/HEADER/MAIN-C';
import Footer from './Components/Footer';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
     <div className="App">
      <Header/>
      <Main/>
      <Footer />

     </div>
    </ThemeProvider>
  );
}

export default App;

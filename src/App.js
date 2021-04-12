//global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;

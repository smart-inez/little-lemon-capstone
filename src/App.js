import './styles/App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className='App'>
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;

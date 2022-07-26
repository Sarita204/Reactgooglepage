import './App.css';
import Google from './Google'
import Main from './main'
import Searchbar from './Searchbar'
import Input1 from './Input1'
import Language from './Language'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Google title />
      <Main />
      <Searchbar placeholder="Search" />
      <Input1 placeholder="Google Search" />
      <Language />
      <Footer />

    </div>
  );
}

export default App;



import './App.css';
import { Discover } from './components/discover/Discover';
import { Header } from './components/header/Header'
import { Market } from './components/market/Market';
import { Getstart } from "./components/getstart/Getstart";
import { Community } from "./components/community/Community";
import { Foot } from "./components/footer/Foot";

function App() {
  return (
    <div className='home' id="home">
      <nav>
        <Header />

      </nav>

      <div className="containnav">


        <section>
          <Discover />
        </section>

      </div>
      <section className='rest' id="market">
        <Market />
      </section>


      <div className='getstart-rest' id="getstart">
        <section className='getstart'>
          <Getstart />
        </section>
        <div className="community" id="join">
          <Community />
        </div>
        <footer>
          <Foot />
        </footer>
      </div>



    </div>
  );
}

export default App;

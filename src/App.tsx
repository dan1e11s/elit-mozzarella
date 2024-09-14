import AboutUs from './components/AboutUs/AboutUs';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <div>
      <Header />
      <main>
        <AboutUs />
        <Catalog />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Cards from './components/Cards';
import Campaigns from './components/Campaigns';
import Favorites from './components/Favorites';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import MobileApp from './components/MobileApp';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <div className='bg-[#FAFAFA] py-4'>
        <Campaigns />
        <Favorites/>
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;

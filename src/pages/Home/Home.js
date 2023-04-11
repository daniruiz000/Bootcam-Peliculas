import Trending from '../../components/Trending/Trending';
import Discover from '../../components/Discover/Discover';
import Popular from '../../components/Popular/Popular';
import WatchFree from '../../components/WacthFree/WacthFree';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Trending />
      <Discover />
      <Popular />
      <WatchFree />
      <Footer></Footer>
    </div>
  );
};

export default Home;

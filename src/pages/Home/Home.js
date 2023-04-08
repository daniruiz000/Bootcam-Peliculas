import Trending from '../../components/Trending/Trending';
import Discover from '../../components/Discover/Discover';
import Popular from '../../components/Popular/Popular';
import WatchFree from '../../components/WacthFree/WacthFree';

const Home = () => {
  return (
    <div>
      <Trending />
      <Discover />
      <Popular />
      <WatchFree />
    </div>
  );
};

export default Home;

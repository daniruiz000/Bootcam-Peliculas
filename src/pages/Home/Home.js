import Trending from '../../components/Trending/Trending';
import Discover from '../../components/Discover/Discover';
import Popular from '../../components/Popular/Popular';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Trending />
      <Discover />
      <Popular />
    </div>
  );
};

export default Home;

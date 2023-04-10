import useFetch from '../../hooks/useFetch';
import DiscoveredItem from '../DiscoveredItem/DiscoveredItem';

const Discover = ({ item }) => {
  const API_URL_DISCOVER = process.env.REACT_APP_API_URL + process.env.REACT_APP_DISCOVER + '&api_key=' + process.env.REACT_APP_API_KEY;
  const [discoverData] = useFetch(API_URL_DISCOVER);
  return (
    <div className='discover'>
      <h3>Últimos avances en películas</h3>
      {discoverData?.results?.map((item) => (
        <DiscoveredItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Discover;

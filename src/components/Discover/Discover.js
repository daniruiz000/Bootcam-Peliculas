import useFetch from '../../hooks/useFetch';
import DiscoveredItem from '../DiscoveredItem/DiscoveredItem';
import './Discover.scss';

const Discover = () => {
  const API_URL = process.env.REACT_APP_API_URL + '/discover/movie?page=1&release_date.desc&vote_average.gte=6.5&api_key=' + process.env.REACT_APP_API_KEY;
  const [discoverData] = useFetch(API_URL);

  return (
    <div className='discover'>
      <h3 className='discover__title'>Últimos avances</h3>
      {discoverData?.results?.map((item) => (
        <DiscoveredItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Discover;

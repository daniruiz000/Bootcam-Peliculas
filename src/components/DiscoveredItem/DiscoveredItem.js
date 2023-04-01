import useFetch from '../../hooks/useFetch';

const DiscoveredItem = ({ item }) => {
  const [urlItemVideo] = useFetch(process.env.REACT_APP_API_URL + '/movie/' + item?.id + '/videos?' + process.env.REACT_APP_API_KEY);
  const urlOficialTrailerItem = urlItemVideo?.results?.find((element) => element.name.includes('Trailer'));

  return (
    <div className='Item'>
      <a target='_blank' rel='noreferrer' href={`https://www.youtube.com/watch?v=${urlOficialTrailerItem?.key}`}>
        Ver en Youtube
      </a>
      <p>{item?.title}</p>
      <p>Trailer Oficial</p>
    </div>
  );
};

export default DiscoveredItem;

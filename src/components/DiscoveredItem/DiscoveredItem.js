import useFetch from '../../hooks/useFetch';

const DiscoveredItem = ({ item }) => {
  const [urlItemVideo] = useFetch(process.env.REACT_APP_API_URL + '/movie/' + item?.id + '/videos?api_key=' + process.env.REACT_APP_API_KEY);
  const urlOficialTrailerItem = urlItemVideo?.results?.find((element) => element.name?.includes('Trailer') && element.site === 'YouTube' && element.key);
  return (
    <div className='Item'>
      {urlOficialTrailerItem ? (
        <a target='_blank' rel='noreferrer' href={`https://www.youtube.com/watch?v=${urlOficialTrailerItem?.key}`}>
          Ver en Youtube
        </a>
      ) : (
        <p>No hay vídeo para Youtube</p>
      )}
      <p>{item?.title}</p>
      <p>Trailer Oficial</p>
    </div>
  );
};

export default DiscoveredItem;

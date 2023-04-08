import React from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';

const WatchFree = () => {
  const [optionMedia, setOptionMedia] = React.useState('movie');
  const API_URL_WATCH_FREE = process.env.REACT_APP_API_URL + '/discover/' + optionMedia + '?sort_by=release_date.desc&language=es-ES&page=1&vote_count.gte=1000&vote_average.gte=5&watch_region=ES&with_watch_monetization_types=free&api_key=' + process.env.REACT_APP_API_KEY;
  const [watchFreeData] = useFetch(API_URL_WATCH_FREE);
  return (
    <div className='item-list'>
      <div className='item-list__info'>
        {' '}
        <h3>Ver gratis</h3>
        <button onClick={() => setOptionMedia('tv')}>Televisión</button>
        <button onClick={() => setOptionMedia('movie')}>Película</button>
      </div>
      <div className='item-list__data'>
        {watchFreeData?.results?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WatchFree;

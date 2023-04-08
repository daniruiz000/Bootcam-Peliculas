import React from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';

const Trending = () => {
  const [optionTime, setOptionTime] = React.useState('week');
  const API_URL_TRENDING = process.env.REACT_APP_API_URL + '/trending/' + 'movie' + '/' + optionTime + '?api_key=' + process.env.REACT_APP_API_KEY;

  const [trendingData] = useFetch(API_URL_TRENDING);

  return (
    <div className='item-list'>
      <div className='item-list__info'>
        <h3>Tendencias</h3>
        <button onClick={() => setOptionTime('day')}>Hoy</button>
        <button onClick={() => setOptionTime('week')}>Esta semana</button>
      </div>
      <div className='item-list__data'>
        {trendingData?.results?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

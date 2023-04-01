import React from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';

const Trending = () => {
  const [optionMedia, setOptionMedia] = React.useState('movie');
  const [optionTime, setOptionTime] = React.useState('week');
  const API_URL_TRENDING = process.env.REACT_APP_API_URL + '/trending/' + optionMedia + '/' + optionTime + '?' + process.env.REACT_APP_API_KEY;

  const [trendingData] = useFetch(API_URL_TRENDING);

  return (
    <div>
      <h3>Tendencias</h3>
      <button onClick={() => setOptionTime('day')}>Hoy</button>
      <button onClick={() => setOptionTime('week')}>Esta semana</button>
      <button onClick={() => setOptionMedia('tv')}>Televisión</button>
      <button onClick={() => setOptionMedia('movie')}>Película</button>
      {trendingData?.results?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Trending;

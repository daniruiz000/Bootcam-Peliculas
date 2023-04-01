import React from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';

const Popular = () => {
  const [optionMedia, setOptionMedia] = React.useState('movie');
  const API_URL_POPULAR = process.env.REACT_APP_API_URL + '/' + optionMedia + '/popular/' + '?' + process.env.REACT_APP_API_KEY;
  const [popularData] = useFetch(API_URL_POPULAR);
  console.log(popularData);
  return (
    <div>
      <h3>Popular</h3>
      <button onClick={() => setOptionMedia('tv')}>Televisión</button>
      <button onClick={() => setOptionMedia('movie')}>Película</button>
      {popularData?.results?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Popular;

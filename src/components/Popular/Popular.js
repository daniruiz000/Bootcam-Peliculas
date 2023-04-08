import React from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';

const Popular = () => {
  const [optionMedia, setOptionMedia] = React.useState('movie');
  const API_URL_POPULAR = process.env.REACT_APP_API_URL + '/' + optionMedia + '/popular/' + '?api_key=' + process.env.REACT_APP_API_KEY;
  const [popularData] = useFetch(API_URL_POPULAR);
  return (
    <div className='item__list'>
      <div className='item-list__info'>
        {' '}
        <h3>Lo más popular</h3>
        <button onClick={() => setOptionMedia('tv')}>Televisión</button>
        <button onClick={() => setOptionMedia('movie')}>Película</button>
      </div>
      <div className='item-list__data'>
        {popularData?.results?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

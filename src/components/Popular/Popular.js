import './Popular.scss';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import Item from '../Item/Item';
import { usePagination } from '../../hooks/usePaginator';

const Popular = () => {
  const [optionMedia, setOptionMedia] = useState('movie');
  const API_URL_POPULAR = process.env.REACT_APP_API_URL + '/' + optionMedia + '/popular/' + '?' + `api_key=${process.env.REACT_APP_API_KEY}`;
  const [popularData] = useFetch(API_URL_POPULAR);
  const [firstItems, showMoreItems, theAreMore] = usePagination(popularData?.results);

  return (
    <div className='popular'>
      <div className='popular__text'>
        <h3 className='popular__title'>Lo más popular</h3>
        <div className='popular__buttons'>
          <button className='btn popular__btn-time' onClick={() => setOptionMedia('movie')}>
            Películas
          </button>
          <button className='btn popular__btn-time' onClick={() => setOptionMedia('tv')}>
            Televisión
          </button>
        </div>
      </div>
      <div className='popular__films'>
        {firstItems?.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
      {theAreMore && (
        <button onClick={() => showMoreItems()} className='btn popular__show-more'>
          + MORE
        </button>
      )}
    </div>
  );
};

export default Popular;

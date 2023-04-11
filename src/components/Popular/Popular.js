import '../../styles/section_home.scss';
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
    <div className='section'>
      <div className='section__text'>
        <h3 className='section__title'>Lo más Popular</h3>
        <div className='section__buttons'>
          <button className='btn section__btn-time' onClick={() => setOptionMedia('movie')}>
            Películas
          </button>
          <button className='btn section__btn-time' onClick={() => setOptionMedia('tv')}>
            Televisión
          </button>
        </div>
      </div>
      <div className='trends__films--wrapper'>
        <div className='section__films'>
          {firstItems?.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>
      {theAreMore && (
        <button onClick={() => showMoreItems()} className='btn section__show-more'>
          + MORE
        </button>
      )}
    </div>
  );
};

export default Popular;

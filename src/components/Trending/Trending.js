import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';
import { usePagination } from '../../hooks/usePaginator';
import './Trending.scss';
import { FormattedMessage } from 'react-intl';

const Trending = () => {
  const [optionTime, setOptionTime] = useState('day');
  const API_URL = process.env.REACT_APP_API_URL + '/trending/movie/' + optionTime + '?' + `api_key=${process.env.REACT_APP_API_KEY}`;
  const [movieData] = useFetch(API_URL);
  const [firstMovies, showMoreMovies, theAreMore] = usePagination(movieData?.results);

  return (
    <div className='trends'>
      <div className='trends__text'>
        <h3 className='trends__title'>
          <FormattedMessage id='trending_title' />
        </h3>
        <div className='trends__buttons'>
          <button onClick={() => setOptionTime('day')} className='btn trends__btn-time'>
            Hoy
          </button>
          <button onClick={() => setOptionTime('week')} className='btn trends__btn-time'>
            Esta semana
          </button>
        </div>
      </div>
      <div className='trends__films'>
        {firstMovies?.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
      {theAreMore && (
        <button onClick={() => showMoreMovies()} className='btn trends__show-more'>
          + MORE
        </button>
      )}
    </div>
  );
};

export default Trending;

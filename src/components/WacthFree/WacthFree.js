import '../../styles/section_home.scss';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import Item from '../Item/Item';
import { usePagination } from '../../hooks/usePaginator';

const WatchFree = () => {
  const [optionMedia, setOptionMedia] = useState('movie');

  const API_URL_WATCH_FREE = process.env.REACT_APP_API_URL + '/discover/' + optionMedia + '?sort_by=release_date.desc&language=es-ES&page=1&vote_count.gte=1000&vote_average.gte=5&watch_region=ES&with_watch_monetization_types=free&api_key=' + process.env.REACT_APP_API_KEY;
  const [freeData] = useFetch(API_URL_WATCH_FREE);
  const [firstItems, showMoreItems, theAreMore] = usePagination(freeData?.results);

  return (
    <div className='section'>
      <div className='section__text'>
        <h3 className='section__title'>Ver gratis</h3>
        <div className='section__buttons'>
          <button className='btn section__btn-time' onClick={() => setOptionMedia('movie')}>
            Películas
          </button>
          <button className='btn section__btn-time' onClick={() => setOptionMedia('tv')}>
            Televisión
          </button>
        </div>
      </div>
      <div className='section__films--wrapper'>
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

export default WatchFree;

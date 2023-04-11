import './WatchFree.scss';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';
import { useContext, useState } from 'react';
import { LanguageSelector } from '../../App';

const WatchFree = () => {
  const [optionMedia, setOptionMedia] = useState('movie');
  const { language } = useContext(LanguageSelector);
  const API_URL_WATCH_FREE = process.env.REACT_APP_API_URL + '/discover/' + optionMedia + '?sort_by=release_date.desc&language=' + language + '&page=1&vote_count.gte=1000&vote_average.gte=5&watch_region=ES&with_watch_monetization_types=free&api_key=' + process.env.REACT_APP_API_KEY;
  const [freeData] = useFetch(API_URL_WATCH_FREE);

  return (
    <div className='popular'>
      <div className='popular__text'>
        <h3 className='popular__title'>Ver gratis</h3>
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
        {freeData?.results?.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default WatchFree;

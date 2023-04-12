import '../../styles/section_home.scss';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import Item from '../Item/Item';
import { usePagination } from '../../hooks/usePaginator';
import { FormattedMessage } from 'react-intl';
const Popular = () => {
  const [optionMedia, setOptionMedia] = useState('movie');
  const API_URL_POPULAR = process.env.REACT_APP_API_URL + '/' + optionMedia + '/popular/' + '?' + `api_key=${process.env.REACT_APP_API_KEY}`;
  const [popularData] = useFetch(API_URL_POPULAR);
  const [firstItems, showMoreItems, theAreMore] = usePagination(popularData?.results);

  return (
    <div className='section'>
      <div className='section__text'>
        <h3 className='section__title'>
          {' '}
          <FormattedMessage id='most_popular' />
        </h3>
        <div className='section__buttons'>
          <button className='btn section__btn-time' onClick={() => setOptionMedia('movie')}>
            <FormattedMessage id='films' />
          </button>
          <button className='btn section__btn-time' onClick={() => setOptionMedia('tv')}>
            <FormattedMessage id='television' />
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
          <FormattedMessage id='more_button' />
        </button>
      )}
    </div>
  );
};

export default Popular;

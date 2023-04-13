import { useParams } from 'react-router-dom';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePaginator';
import { formatDate, formatTime, formatGenres, roundedToFixed, formatYear, generateColor, getProductionCountriesName } from '../../utils/utils';
import CastDetail from '../../components/CastDetail/CastDetail';
import CrewDetail from '../../components/CrewDetail/CrewDetail';
import RecommdationItem from '../../components/RecommdationItem/RecommdationItem';
import './ItemDetail.scss';
import { LanguageSelector } from '../../App';
import { FormattedMessage } from 'react-intl';

const ItemDetail = () => {
  const { id } = useParams(':id');
  const { type } = useParams(':type');
  const { language } = React.useContext(LanguageSelector);

  const API_URL_DETAIL = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '?language=' + language + '&api_key=' + process.env.REACT_APP_API_KEY;
  const [itemData] = useFetch(API_URL_DETAIL);

  const porcentVote = roundedToFixed(itemData?.vote_average) * 10;
  const colorVote = generateColor(roundedToFixed(itemData?.vote_average) * 10);

  const API_URL_RECOMMENDATIONS = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '/recommendations' + '?api_key=' + process.env.REACT_APP_API_KEY;
  const [recommendationsData] = useFetch(API_URL_RECOMMENDATIONS);
  const [firstItemsRecommendations, showMoreItemsRecommendations, theAreMoreRecommendations] = usePagination(recommendationsData?.results);

  const API_URL_CAST = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '/credits' + '?language=' + language + '&api_key=' + process.env.REACT_APP_API_KEY;
  const [personsData] = useFetch(API_URL_CAST);
  const [firstItemsCast, showMoreItemsCast, theAreMoreCast] = usePagination(personsData?.cast);

  const importantJobs = ['Editor', 'Director', 'Screenplay', 'Story', 'Screenplay', 'Characters', 'Producer'];
  const crew = personsData?.crew?.map((element) => element);
  const crewFilter = crew?.filter((person) => importantJobs.includes(person.job));

  return (
    <div className='item-detail'>
      <div className='item-detail__header'>
        <img className='item-detail__img' src={`${process.env.REACT_APP_IMG}${itemData?.poster_path}`} />
        <div className='item-detail__info'>
          <h3 className='item-detail__title'>
            {itemData?.title || itemData?.name}
            <span>{formatYear(itemData?.release_date || itemData?.first_air_date)}</span>
          </h3>
          <p className='item-detail__data'>
            <span>{formatDate(itemData?.release_date || itemData?.first_air_date)}</span>
            <span>{getProductionCountriesName(itemData?.production_countries)}</span> | {formatGenres(itemData?.genres)} | <span>{formatTime(itemData?.runtime || itemData?.episode_run_time)}</span>
          </p>
          <div className='item-detail__score-container'>
            <div className='item-detail__score'>
              <div className='item-detail__exterior-circle'>
                <div className='item-detail__interior-circle' style={{ border: `3px solid ${colorVote}` }}>
                  <p className='item-detail__vote'>
                    {porcentVote}
                    <span className='item-detail__span'>%</span>
                  </p>
                </div>
              </div>
            </div>
            <p className='item-detail__score-text'>
              <FormattedMessage id='score' />
            </p>
          </div>
          <p className='item-detail__subtitle'>{itemData?.tagline}</p>
          <p className='item-detail__overview-title'>
            <FormattedMessage id='general-view' />
          </p>
          <p className='item-detail__overview'>{itemData?.overview}</p>
          <div className='item-detail__crew-container'>
            {crewFilter?.map((person) => (
              <CrewDetail key={person.id} person={person} />
            ))}
          </div>
        </div>
      </div>
      <div className='item-detail__cast'>
        <h3 className='item-detail__cast-title'>
          <FormattedMessage id='principal-cast' />
        </h3>
        <div className='item-detail__cast-container'>
          {firstItemsCast?.map((character) => (
            <CastDetail key={character.id} character={character} />
          ))}
        </div>
        {theAreMoreCast && (
          <button onClick={() => showMoreItemsCast()} className='btn section__show-more'>
            <FormattedMessage id='more_button' />
          </button>
        )}
      </div>
      <div className='item-detail__results'>
        <h3>
          <FormattedMessage id='recommendations' />
        </h3>
        <div className='item-detail__results_container'>
          {recommendationsData?.total_pages !== 0 ? (
            firstItemsRecommendations?.map((element) => <RecommdationItem key={element.id} item={element} />)
          ) : (
            <h2>
              <FormattedMessage id='recommendations-not' />
            </h2>
          )}
        </div>
        {theAreMoreRecommendations && (
          <button onClick={() => showMoreItemsRecommendations()} className='btn section__show-more'>
            <FormattedMessage id='more_button' />
          </button>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;

import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import RecommdationItem from '../../components/RecommdationItem/RecommdationItem';
import { formatDate, formatTime, formatGenres, roundedToFixed } from '../../utils/utils';
import CastDetail from '../../components/CastDetail/CastDetail';
import CrewDetail from '../../components/CrewDetail/CrewDetail';
import './ItemDetail.scss';

const ItemDetail = () => {
  const { id } = useParams(':id');
  const { type } = useParams(':type');
  const API_URL_DETAIL = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '?api_key=' + process.env.REACT_APP_API_KEY;
  const [itemData] = useFetch(API_URL_DETAIL);
  const API_URL_RECOMMENDATIONS = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '/recommendations' + '?api_key=' + process.env.REACT_APP_API_KEY;
  const [recommendationsData] = useFetch(API_URL_RECOMMENDATIONS);
  const porcentVote = roundedToFixed(itemData?.vote_average) * 10 + '%';
  const API_URL_CAST = process.env.REACT_APP_API_URL + '/' + type + '/' + id + '/credits' + '?api_key=' + process.env.REACT_APP_API_KEY;
  const [personsData] = useFetch(API_URL_CAST);

  return (
    <div className='item-datail'>
      <div>
        <img className='item-datail__img' src={`${process.env.REACT_APP_IMG}${itemData?.poster_path}`} />
        <h3 className='item-datail__title'>{itemData?.title || itemData?.name}</h3>
        <p>
          <span>{formatDate(itemData?.release_date || itemData?.first_air_date)}</span> | {formatGenres(itemData?.genres)} | <span>{formatTime(itemData?.runtime || itemData?.episode_run_time[0])}</span>
        </p>
        <p className='item-datail__vote'>{porcentVote}puntuación del usuario</p>
        <p className='item-datail__subtitle'>{itemData?.tagline}</p>
        <p>Vista general</p>
        <p className='item-datail__overview'>{itemData?.overview}</p>
      </div>
      <div className='item-datail__crew'>
        {personsData?.crew?.map((person) => (
          <CrewDetail key={person.id} person={person} />
        ))}
      </div>
      <div className='item-datail__cast'>
        <h3>Reparto Principal</h3>
        {personsData?.cast?.map((character) => (
          <CastDetail key={character.id} character={character} />
        ))}
      </div>
      <div className='item-datail__results'>
        <h3>Recomendaciones</h3>
        {recommendationsData?.results?.map((element) => (
          <RecommdationItem key={element.id} item={element} />
        ))}
      </div>
    </div>
  );
};
export default ItemDetail;

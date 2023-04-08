import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import RecommdationItem from '../RecommdationItem/RecommdationItem';
import { roundedToFixed } from '../../utils/utils';
import CastDetail from '../CastDetail/CastDetail';
import CrewDetail from '../CrewDetail/CrewDetail';

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
    <div>
      <div>
        <img src={`${process.env.REACT_APP_IMG}${itemData?.poster_path}`} />
        <h3>{itemData?.title || itemData?.name}</h3>
        <p>{porcentVote}puntuación del usuario</p>
        <p>{itemData?.tagline}</p>
        <p>Vista general</p>
        <p>{itemData?.overview}</p>
      </div>
      <div>
        {personsData?.crew?.map((person) => (
          <CrewDetail key={person.id} person={person} />
        ))}
      </div>
      <div>
        <h3>Reparto Principal</h3>
        {personsData?.cast?.map((character) => (
          <CastDetail key={character.id} character={character} />
        ))}
      </div>
      <div>
        <h3>Recomendaciones</h3>
        {recommendationsData?.results?.map((element) => (
          <RecommdationItem key={element.id} item={element} />
        ))}
      </div>
      <p>Item detail de {id}</p>
    </div>
  );
};
export default ItemDetail;

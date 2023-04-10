import { roundedToFixed } from '../../utils/utils';
import { Link } from 'react-router-dom';
const RecommdationItem = ({ item }) => {
  const type = item.title ? 'movie' : 'tv';
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + '%';
  return (
    <Link className='Item' to={`/items/${item?.id}/${type}`}>
      <img src={`${process.env.REACT_APP_IMG}${item?.backdrop_path}`} />
      <h4>{item?.name || item?.title}</h4>
      <p>{porcentVote}</p>
    </Link>
  );
};
export default RecommdationItem;

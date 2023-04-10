import { Link } from 'react-router-dom';
import { roundedToFixed, generateColor, convertDate } from '../../utils/utils';
import './Item.scss';

const Item = ({ item }) => {
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + '%';
  const colorVote = generateColor(roundedToFixed(item?.vote_average) * 10);
  const type = item.title ? 'movie' : 'tv';
  return (
    <Link className={`item ${colorVote}`} to={`/items/${item?.id}/${type}`}>
      <img src={`${process.env.REACT_APP_IMG}${item?.poster_path}`} />
      <p>{item?.title || item?.name}</p>
      <p>{convertDate(item?.release_date) || convertDate(item?.first_air_date)}</p>
      <p>{porcentVote}</p>
    </Link>
  );
};

export default Item;

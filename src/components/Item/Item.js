import { Link } from 'react-router-dom';
import { roundedToFixed, generateColor } from '../../utils/utils';
import './Item.scss';

const Item = ({ item }) => {
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + '%';
  const colorVote = generateColor(roundedToFixed(item?.vote_average) * 10);
  const type = item.title ? 'movie' : 'tv';
  return (
    <Link className={`item ${colorVote}`} to={`/items/${item?.id}/${type}`}>
      <img src={`${process.env.REACT_APP_IMG}${item?.poster_path}`} />
      <p>{item?.title || item?.name}</p>
      <p>{item?.release_date || item?.first_air_date}</p>
      <p>{porcentVote}</p>
      <p style={{ color: { colorVote } }}>{colorVote}</p>
    </Link>
  );
};

export default Item;

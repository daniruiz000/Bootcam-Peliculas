import { roundedToFixed, generateColor } from '../../utils/utils';

const Item = ({ item }) => {
  const porcentVote = roundedToFixed(item?.vote_average) * 10 + '%';
  const colorVote = generateColor(roundedToFixed(item?.vote_average) * 10);

  return (
    <div className='Item'>
      <img src={`${process.env.REACT_APP_IMG}${item?.poster_path}`} />
      <p>{item?.title || item?.name}</p>
      <p>{item?.release_date || item?.first_air_date}</p>
      <p>{porcentVote}</p>
      <p>{colorVote}</p>
    </div>
  );
};

export default Item;

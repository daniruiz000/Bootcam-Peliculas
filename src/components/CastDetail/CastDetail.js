import './CastDetail.scss';

const CastDetail = ({ character }) => {
  return (
    <div className='cast-detail'>
      <img className='cast-detail__img' src={`${process.env.REACT_APP_IMG}${character?.profile_path}`} />
      <p className='cast-detail__name'>{character?.name}</p>
      <p className='cast-detail__character'>{character?.character}</p>
    </div>
  );
};
export default CastDetail;

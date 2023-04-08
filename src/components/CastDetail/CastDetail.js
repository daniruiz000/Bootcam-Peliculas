const CastDetail = ({ character }) => {
  return (
    <div>
      <img src={`${process.env.REACT_APP_IMG}${character?.profile_path}`} />
      <p>{character?.name}</p>
      <p>{character?.character}</p>
    </div>
  );
};
export default CastDetail;

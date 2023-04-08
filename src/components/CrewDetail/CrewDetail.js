const CrewDetail = ({ person }) => {
  return (
    <div>
      <p>{person?.name}</p>
      <p>{person?.job}</p>
    </div>
  );
};

export default CrewDetail;

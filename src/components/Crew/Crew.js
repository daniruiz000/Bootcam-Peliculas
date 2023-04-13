import './Crew.scss';
import React from 'react';
import CrewDetail from '../../components/CrewDetail/CrewDetail';

const Crew = ({ personsData }) => {
  const importantJobs = ['Editor', 'Director', 'Screenplay', 'Story', 'Screenplay', 'Characters', 'Producer'];
  const crew = personsData?.crew?.map((element) => element);
  const crewFilter = crew?.filter((person) => importantJobs.includes(person.job));
  return (
    <div className='item-detail__crew-container'>
      {crewFilter?.map((person) => (
        <CrewDetail key={person.id} person={person} />
      ))}
    </div>
  );
};
export default Crew;

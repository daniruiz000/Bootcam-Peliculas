import React from 'react';
import './GamePage.scss';
import { generateRandom } from '../../utils/utils';

const GamePage = () => {
  const [nameSelected, setNameSelected] = React.useState();
  const [gameIsSolved, setGameIsSolved] = React.useState(false);
  const [filmList, setFilmList] = React.useState([]);
  const page = generateRandom(0, 100);
  const [currentFilmTitle, setCurrentFilmTitle] = React.useState();
  const [currentFilmOverview, setCurrentFilmOverview] = React.useState();
  const [options, setOptions] = React.useState([]);
  const FILM_URL = process.env.REACT_APP_API_URL + '/movie/top_rated?language=en-US&page=' + page + '&api_key=' + process.env.REACT_APP_API_KEY;
  React.useEffect(() => {
    fetch(FILM_URL)
      .then((response) => response.json())
      .then((dataParsed) => {
        setFilmList(dataParsed.results);
        generateNewGamePlay(dataParsed.results);
      });
  }, []);
  console.log(page);
  const generateNewGamePlay = (dataParsed) => {
    const randomIndexes = Array.from({ length: 4 }, () => generateRandom(0, dataParsed.length));
    const currentFilmIndex = randomIndexes[generateRandom(0, 3)];
    const currentItemFromList = dataParsed[currentFilmIndex];
    const newGameOptions = randomIndexes.map((index) => dataParsed[index].title);
    setOptions(newGameOptions);
    setCurrentFilmTitle(currentItemFromList?.title);
    setCurrentFilmOverview(currentItemFromList?.overview);
    setGameIsSolved(false);
    setNameSelected(null);
  };
  const selectOption = (name) => {
    if (!gameIsSolved) {
      setNameSelected(name);
    }
  };
  const getClassesForButton = (option) => {
    if (gameIsSolved) {
      if (option === currentFilmTitle) {
        return 'btn--option-correct';
      } else if (option === nameSelected) {
        return 'btn--option-wrong';
      }
    } else {
      if (option === nameSelected) {
        return 'btn--option-selected';
      }
    }
  };

  return (
    <div className='game-page'>
      <div className='game-page__detail'>
        <p>{currentFilmOverview}</p>
      </div>
      <div className='game-page__options'>
        {options.map((name) => (
          <button onClick={() => selectOption(name)} key={name} className={'btn btn--big btn--option game-page__button ' + getClassesForButton(name)}>
            {name}
          </button>
        ))}
      </div>
      <div className='game-page__solve'>
        <button className='btn btn--link game-page__solve-btn' onClick={() => generateNewGamePlay(filmList)}>
          Recargar Juego
        </button>
        <button className='btn game-page__solve-btn' disabled={gameIsSolved} onClick={() => setGameIsSolved(true)}>
          Resolver
        </button>
      </div>
    </div>
  );
};
export default GamePage;

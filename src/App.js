/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  Core Application that includes the search and management tools

*/
import { Fragment, useState, useCallback } from 'react';
import { SEARCH_MODE, SEARCH_PHASE, REGISTRATION_PHASE, CONFIRMATION_PHASE} from './constants';
import NavigationHeader from './NavigationHeader';
import SearchPhase from './SearchPhase';
import RegistrationPhase from './RegistrationPhase';
import ConfirmationPhase from './ConfirmationPhase';
import './App.css';

function App() {
  const [mode, setMode] = useState(SEARCH_MODE);
  const [activePhase, setActivePhase] = useState(SEARCH_PHASE);
  const [selectedBooks, setSelectedBooks] = useState({});

  const updateBookSelection = useCallback((bookId, removeItem = false) => {
    setSelectedBooks(prev => {
      const updatedBookSelection = {...prev};
      if (removeItem)
        delete updatedBookSelection[bookId];
      else
        updatedBookSelection[bookId] = true;
      return updatedBookSelection;
    })
  }, []);

  return (
      <Fragment>
        <NavigationHeader setMode={(mode) => {setMode(mode)}} activeMode={mode}/>
        {mode === SEARCH_MODE && (
          <div className="Wrapper">
            {activePhase === SEARCH_PHASE && (
              <SearchPhase onComplete={setActivePhase} selectedBooks={selectedBooks} onBookSelection={updateBookSelection} />
            )}
            {activePhase === REGISTRATION_PHASE && (
              <RegistrationPhase onComplete={setActivePhase}/>
            )}
            {activePhase === CONFIRMATION_PHASE && (
              <ConfirmationPhase />
            )}
          </div>
        )}
      </Fragment>
  );
}

export default App;

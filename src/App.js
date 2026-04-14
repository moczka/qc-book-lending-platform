/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  Core Application that includes the search and management tools

*/
import { Fragment, useState } from 'react';
import { SEARCH_MODE, SEARCH_PHASE, REGISTRATION_PHASE, CONFIRMATION_PHASE} from './constants';
import NavigationHeader from './NavigationHeader';
import SearchPhase from './SearchPhase';
import './App.css';

function App() {
  const [mode, setMode] = useState(SEARCH_MODE);
  const [activePhase, setActivePhase] = useState(SEARCH_PHASE);

  return (
      <Fragment>
        <NavigationHeader setMode={(mode) => {setMode(mode)}} activeMode={mode}/>
        {mode === SEARCH_MODE && (
          <div className="Wrapper">
            {activePhase === SEARCH_PHASE && (
              <SearchPhase />
            )}
          </div>
        )}
      </Fragment>
  );
}

export default App;

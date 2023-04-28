import React from 'react';
import './App.css';
import { Confirmation } from './components/confirmation';

function App() {
  const [toggleConfirmation, updateToggleConfirmation] = React.useState<boolean>(true);

  const props = {
    message: 'Should we bake a pie?',
    type: 'caution',
  };

  const accept = React.useCallback(() => {
    updateToggleConfirmation(!toggleConfirmation);
  }, []);

  const decline = React.useCallback(() => {
    updateToggleConfirmation(!toggleConfirmation);
  }, []);

  if (toggleConfirmation) {
    return (
      <div id="App">
        <Confirmation {...{ accept, decline, ...props }} />
      </div>
    );  
  }

  return null;
}

export default App;

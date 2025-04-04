import React, { useState } from 'react';
import Anagrafiche from '../components/Anagrafiche';
import Famiglie from '../components/Famiglie';

function Archivio() {
  const [isFamiglie, setIsFamiglie] = useState(true);
  
  return (
    <>
      <div className="container mb-4">
        <button className="btn mx-auto" onClick={() => setIsFamiglie(!isFamiglie)}>Visualizzazione famiglie / anagrafiche</button>
      </div>

      {isFamiglie ? <Famiglie isArchived /> : <Anagrafiche isArchived />}
    </>
  );
}

export default Archivio;

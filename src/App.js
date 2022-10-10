import { useState } from 'react';

import Form from './components/form';

function App() {
  const [isTelentForm, setIsTelentFrom] = useState(false);

  return (
    <div className="my-3">
      <div className="mb-2 d-flex align-items-center justify-content-center">
        <div className="bg-secondary rounded-pill p-1">
          <label className={`${!isTelentForm ? 'bg-dark text-white rounded-pill' : ''} me-2 p-2`} onClick={() => setIsTelentFrom(false)}>
            FAN SIGNUP
          </label>
          <label className={`${isTelentForm ? 'bg-dark text-white rounded-pill' : ''} p-2`} onClick={() => setIsTelentFrom(true)}>
            TALENT SIGNUP
          </label>
        </div>
      </div>
      <div className="App d-flex align-items-center justify-content-center">
        <Form isTelentForm={isTelentForm} />
      </div>
    </div>
  );
}

export default App;

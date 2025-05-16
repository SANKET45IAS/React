import { useState } from 'react';
import { Card } from './LiftingUp1/Card';

function App1() {
  const [name, setName] = useState('');

  return (
    <div>
      <Card setName={setName} title="Card1" name={name} />
      <Card setName={setName} title="Card2" name={name} />
    </div>
  );
}

export default App1;

import viteLogo from '/vite.svg'
import './App.css'
import { ChildA } from './ChildA'
import { createContext, useState } from 'react'

// ✅ Move context creation here

  // Step 1 - Create Context 
  // Step 2- Wrap all the child inside a provider (Give permission to the children's who want to became a Conusmer in the future)
  // Step 3- Pass Value
  //Step 4-Consume the value from inside the consumer
const UserContext = createContext();

function App() {
  const [user, SetUser] = useState({ name: "SANKET SIDHIVINAYAK", redg_no: "2341019464" });

  return (
    <UserContext.Provider value={{ user, SetUser }}>
      <ChildA />
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };

import './World.css';
import { Jagannath } from './Jagannath';
import { Route, Routes } from 'react-router-dom';

export function Lord() {
  return (
    <>
      <Routes>
        <Route path="/Kali" element={<Jagannath />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Jay Balabhadra Bhagwan</h1>
    </>
  );
}

export function Maa() {
  return (
    <>
      <h1 id="Yellow" className="text-3xl font-bold text-blue-500">
        Jay Maa Subhadra💙
      </h1>
     
    </>
  );
}

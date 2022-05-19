import React, {useState, createContext} from 'react';
import { createRoot } from 'react-dom/client';
import User from './User.jsx';
import Todos from './Todos.jsx';
export const userContext = createContext();
const root = createRoot(document.getElementById('root'));


const App = () => {
  const [user, setUser] = useState('');
  return (
    <div className="app-div">
      <userContext.Provider value={{user, setUser}}>
        <User />
        <Todos text="Learn React"/>
        <Todos text="Learn React"/>
      </userContext.Provider>
    </div>
  );
};

root.render(<App />);

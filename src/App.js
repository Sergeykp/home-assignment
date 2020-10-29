import React, {useState} from 'react';
import './App.css';
import Store from './Store';
import Welcome from './Welcome';

const App = () => {
  const [renderShop, setRenderShop] = useState(false);
  return renderShop ? <Store/> : <Welcome onsubmit={() => setRenderShop(true)}/>;
};

export default App;

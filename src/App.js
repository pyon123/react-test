import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import Search from './pages/Search';

// styles
import './App.scss';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <div className='container'>
        <Search />
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Search from './pages/Search';

// styles
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;

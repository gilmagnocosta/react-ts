import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './components/User/List'

import RepositoryList from './components/RepositoryList';

import store from './store'

const App = () => (
  <Provider store={store}>
    <RepositoryList />
    <UsersList />
  </Provider>
)
export default App;

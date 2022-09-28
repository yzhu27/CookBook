import React from 'react';
import { Provider } from 'react-redux'
import applicationStore from './store'
import logo from './logo.svg';
import './App.css';
import GetIngredients from './features/GetIngredients/GetIngredients';
import Header from './features/Header/Header';
import AppContent from './features/AppContent/AppContent';

const store = applicationStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-searchComponent">
          <GetIngredients />
        </div>
        <div className="App-body">
          <AppContent />
        </div>
      </div>
    </Provider>
  );
}

export default App;

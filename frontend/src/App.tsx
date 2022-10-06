/**
 * File name: App.tsx
 * Task - This is the parent component of the application. It creates the basic UI skeleton
 * viz the header, the search component and the app contents
 * Header and Search component remain static and app contents change according to the state of the application
 * @author Priyanka Ambawane - dearpriyankasa@gmail.com
 */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import applicationStore from './store'
import './App.css'
import GetIngredients from './features/GetIngredients/GetIngredients'
import Header from './features/Header/Header'
import AppContent from './features/AppContent/AppContent'

const store = applicationStore()

function App() {
  return (
    // Provider ensures that the state of the app, i.e. stored in the app-store is accessible across the application
    <Provider store={store}>
      {/* Browser router enables routing and navigation across multiple pages in the application */}
      <BrowserRouter>
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
      </BrowserRouter>
    </Provider>
  )
}

export default App

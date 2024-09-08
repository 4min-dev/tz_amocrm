import React from 'react'
import '../style/css/main.css'
import { Provider } from 'react-redux'
import LeadsPage from './UI/pages/leadsPage/LeadsPage'
import { setupStore } from '../redux/setupStore'

const App:React.FC = () => {

    const store = setupStore()

  return (
    <React.StrictMode>
        <Provider store={store}>
            <LeadsPage/>
        </Provider>
    </React.StrictMode>
  )
}

export default App

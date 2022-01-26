import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import routes from './routes'

function App() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 40, padding: '0px 20px' }}>

        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={<route.element navigate={navigate} />} />
          ))}

        </Routes >
      </div>
    </>
  )
}

export default App

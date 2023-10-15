import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import FourierToTime from './pages/FourierToTime'
import TimeToFourier from './pages/TimeToFourier'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/welcome"
          element={
            <>
              <Welcome />
            </>
          }
        ></Route>
        <Route
          path="/fourier-to-time"
          element={<FourierToTime />}
        ></Route>
        <Route
          path="/time-to-fourier"
          element={<TimeToFourier />}
        ></Route>
      </Routes>
    </>
  )
}

export default App


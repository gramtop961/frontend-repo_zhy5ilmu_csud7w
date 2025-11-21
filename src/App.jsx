import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import How from './pages/How'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="how" element={<How />} />
      </Route>
    </Routes>
  )
}

export default App

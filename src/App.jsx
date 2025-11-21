import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import How from './pages/How'
import { SignIn, SignUp } from './pages/Auth'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>        
        <Route index element={<Home />} />
        <Route path="how" element={<How />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

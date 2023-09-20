import { Routes, Route } from 'react-router-dom';
import { Portret, Codder, Contact, Studio, Lifestyle, Cosplay } from '../Shared';
import { MainPage } from "../Pages"
import { RequireAuth, } from "../hoc"
import AuthProvider from "../hoc/AuthProvider"

export default function Routess() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Codder />}></Route>
        <Route path='/main' element={
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        }>
          <Route path='portret' element={<Portret />} />
          <Route path='lifestyle' element={<Lifestyle />} />
          <Route path='contact' element={<Contact />} />
          <Route path='studio' element={<Studio />} />
          <Route path='cosplay' element={<Cosplay />} />
          <Route path='*' element={<MainPage />} />
        </Route>
        <Route path='*' element={<Codder />} />
      </Routes>
    </AuthProvider>

  );
}

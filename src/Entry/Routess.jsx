import { Routes, Route } from 'react-router-dom';
import { About, Codder, Contact, Media, Portfolio } from '../Shared';
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
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='socialmedia' element={<Media />} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

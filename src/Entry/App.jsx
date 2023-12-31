import Routess from "./Routess"
import { MainWrapper } from "../Wrappers"
import { Dasher } from "../Shared"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='h-screen w-full py-5 bg-slate-600 z-10 scrollable-content'>
      <Dasher />
      <MainWrapper>
        <Routess />
        <ToastContainer />
      </MainWrapper>
    </div>
  )
}

export default App

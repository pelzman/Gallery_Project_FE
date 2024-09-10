
import './App.css'
import MainRoutes from './routes'
import { GalleryProvider } from './context/galleryContext'
import { ToastContainer } from 'react-toastify'
function App() {


  return (
    <GalleryProvider>
      <ToastContainer />
  <div>
      <MainRoutes />
    </div>

    </GalleryProvider>
  
  )
}

export default App

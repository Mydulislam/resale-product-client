import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Pages/Routes/Routes/Router';

function App() {
  return (
    <div className="max-w-[1060px] mx-auto p-4 lg:p-0">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

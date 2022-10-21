import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Mobile from './pages/Mobile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Mobile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

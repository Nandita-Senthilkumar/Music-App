// import logo from './logo.svg';
import { BrowserRouter as  Router,Routes,Route} from 'react-router-dom';
import { Home,Layout } from './router';
import './App.css';
// import { Layout } from './components/layout/Layout';

function App() {
  return (
    <>
    <Router>
      < Routes>
        <Route path="/" element={<Layout ><Home/></Layout>}></Route>
        </Routes>    
    </Router>
  
    </>
  );
}

export default App;

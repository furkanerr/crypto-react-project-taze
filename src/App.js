import Routers from './router/router.jsx';
import './App.css';
import { CoinProvider } from './context/coinContext.jsx';
function App() {
  return (
    <div className="App">
      <CoinProvider>
     <Routers/>
      </CoinProvider>
    </div>
  );
}

export default App;

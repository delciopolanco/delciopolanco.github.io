import './App.css';
import { TemplateLean } from '@allamgr/portafolio'
import jsonData from './cv.json';

function App() {

  let json = JSON.stringify(jsonData);
  return (
    <div className="App container">
      <TemplateLean json={json} />
    </div>
  );
}

export default App;
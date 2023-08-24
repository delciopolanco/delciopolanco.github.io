import './App.css';
import jsonData from './cv.json';
import CustomTemplate from './CustomTemplate/customTemplate';

function App() {
  return (
    <div className='App container'>
      <CustomTemplate jsonData={jsonData} />
    </div>
  );
}

export default App;

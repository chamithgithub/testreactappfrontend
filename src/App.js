import { useNavigate } from 'react-router-dom';
import './App.css';
import UserForm from './UserForm';
function App() {

  const navigate = useNavigate();


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='users-h1' style={{color: 'red'}}>welcome to chamith site</h1>
        <button className='users-button' onClick={clickme}>Uses</button> 
        {/* <button className='users-button' onClick={() => navigate('/users')}>Uses</button> */} 
      </header>
    </div>
  );
  function clickme() {
    navigate('/users');
  }
   
}


export default App;

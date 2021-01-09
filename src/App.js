import Button from './Components/Buttons/Button';
import Appbar from './Components/AppBar/Appbar';
import Textfeild from './Components/Textfeilds/Textfeild';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Textfeild />
      <Button clicked={() => alert('Data Save Feature hasn\'t beeen added')}> Save Data</Button>
    </div >
  );
}

export default App;

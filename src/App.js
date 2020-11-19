import './App.css';
import Achievenments from './Components/Achievenments/Achievenments';
import Florence from './Components/Florence/Florence';
import Navbar from './Components/Navbar/Navbar';
import StayProject from './Components/StayProject/StayProject';
import Whatwe from './Components/Whatwe/Whatwe';

function App() {
  return (
    <div >
      <div className="bg2">
        <Navbar></Navbar>
        <Florence></Florence>
      </div>

      <Whatwe></Whatwe>
      <StayProject></StayProject>
      <Achievenments></Achievenments>
    </div>
  );
}

export default App;

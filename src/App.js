import Navbar from "./Components/Navbar";
import './App.css'
import Searchbar from "./Components/Searchbar";
import Line from "./Components/Line";
import Days from "./Components/Days";
import Grid from "./Components/Grid";
import Modal from "./Components/Modal";
import Action from "./Components/Action";

function App() {

  const hideModal = () => {
    document.getElementById('modalId').classList.add('-z-50')
    document.getElementById('modalId').classList.add('opacity-0')
    document.getElementById('modalId').classList.add('scale-50')
    document.getElementById('modalId').classList.remove('z-50')
    document.getElementById('modalId').classList.remove('opacity-100')
    document.getElementById('modalId').classList.remove('scale-100')

  }
  const showModal = () => {

    document.getElementById('modalId').classList.add('z-50')
    document.getElementById('modalId').classList.add('opacity-100')
    document.getElementById('modalId').classList.add('scale-100')
    document.getElementById('modalId').classList.remove('scale-50')
    document.getElementById('modalId').classList.remove('-z-50')
    document.getElementById('modalId').classList.remove('opacity-0')

}

  return (
    <div className="App">
    <Navbar/>
    <Searchbar/>
      <Line />
      <Action function={showModal} />
    <Days/>
      <Grid />
      <Modal modalId="modalId" func={hideModal}/>
    </div>
  );
}

export default App;

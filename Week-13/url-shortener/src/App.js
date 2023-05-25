import Shortener from './components/Shortener';
import Header from './components/Header';
import Fotter from './components/Fotter';
import './App.css';


function App() {

  // const[data, setData] = useState();
  // const[btnName, setBtnName] = useState("Copy");


  // function handleBtn(){
  //   const apiUrl = "https://api.shrtco.de/v2/shorten?url="
  //   let inputUrl = document.getElementById('txtInputurl').value
  //   if(inputUrl.length > 0){
  //     fetch(apiUrl+inputUrl)
  //   .then((response) => response.json())
  //   .then((resp) => setData(resp["result"]["full_short_link"]))
  //   .catch((err) => alert(err))
  //   document.getElementById('txtInputurl').value = "";
  //   console.log('Button name change to Copy');
  //   setBtnName("Copy");
  //   }else{
  //     console.error("Please type valid URL.")
  //   }
  //   //fetch("https://api.shrtco.de/v2/shorten?url=www.google.com")
    
  // }

  // const copied = () => {
  //   navigator.clipboard.writeText(data)
  //   console.log('Button name change to Copied');
  //   setBtnName("Copied");
  // }

  return (
    <div className="App">
      <Header/>
      <Shortener/>
      <Fotter/>
    </div>
  );
}

export default App;

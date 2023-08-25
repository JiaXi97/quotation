import "./App.css";
import MainPage from "./components/MainPage/MainPage";

const appStyle={
  height:'100%',
  width:'100%',
  display:'flex',
  background:'black'
}

function App() {
  return (
    <div style={appStyle}>
      <MainPage />
    </div>
  );
}

export default App;

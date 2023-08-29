import "./App.css";
import MainPage from "./components/PageParts/MainPage";

const appStyle={
  height:'100vh',
  width:'100vw',
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

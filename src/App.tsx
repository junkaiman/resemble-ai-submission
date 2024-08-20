import './App.css';
import Header from "./Header";
import MainContent from './MainContent';
import VoiceList from './VoiceList';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <MainContent />
      <VoiceList />
    </div>
  );
}

export default App;

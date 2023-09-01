import './App.css';
import Navbar from './components/navbar/Navbar';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';

function App() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 relative">
        <Aside />
        <Content />
      </div>
    </div>
  )
}

export default App;

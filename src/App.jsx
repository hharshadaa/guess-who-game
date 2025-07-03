import './App.css';

const imageImport = import.meta.glob('./assets/*.png', {eager: true, as: 'url'});
const images = Object.values(imageImports);

function App() {
  return (
    <div>

      <div className="headerRow">
        <h1 className="header">Barbie Guess Who</h1>
        <button className="reset">Reset</button>
      </div>

    </div>
  );
}

export default App;
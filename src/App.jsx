import './App.css';

// import all images at the same time using an array
//use vite's import.meta.glob to grab all the assets
const imageImports = import.meta.glob('./assets/*.jpg', { eager: true, as: 'url' });
const images = Object.values(imageImports);


function App() {
  return (
    <div>

      <div className="headerRow">
        <h1 className="header">Barbie Guess Who</h1>
        <button className="reset">Reset</button>
      </div>

     
      <div className="images">
        {images.map((src, index) => (  // for loop to load all images
          <img
            key={index}
            src={src}
            alt={`character-${index + 1}`}
            className="character-card" 
          />
        ))}
      </div>

    </div>
  );
}

export default App;

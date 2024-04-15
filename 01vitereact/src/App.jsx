import Heyy from "./heyy";

function App() {
  var userName = "Prateek";
  // Rendering userName in {} is an 'evaluated function'
  return (
    <>
      <Heyy />
      <h1>{userName} React Project</h1>
      <p>test para</p>
    </>
  );
}

export default App;

import Counter from './Counter'
import User from './User'
import './App.css'

function App() {
  return (
    <>
      <Counter />
      <User user={{firstName: 'Joe', lastName: 'Smith'}}/>
    </>
  );
}

export default App;

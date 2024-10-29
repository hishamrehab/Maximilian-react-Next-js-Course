import { useState } from 'react'
import { TabButton } from "./components/TabButton";
const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please Click a Button Text');


  let tabContent = 'Please click a button'
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  console.log('App Component Executing');
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        {selectedTopic}
      </section>
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import AppHeader, { API_PATH } from './components/Header';

const stylePara = { color: 'green', fontSize: '20px' }

function App() {
  const onSelection = (option) => {
    console.log(option);
  }
  return (
    <div className="container">
      <Counter />
      <AppHeader title="HOW TO MANAGE STATES" />
      <p style={{ color: 'blue', fontSize: '20px' }}>You should never mutate the state of a component directly, but only through the update function. Another thing you need to be careful about is that the [useState] callback does not merge the state as [setState] in class components did. This means that you have to return a full object in callback even if you want to change only one of its properties.</p>
      <AppHeader title="WHY SHOULD YOU USE JSX?" />
      <p style={stylePara}>The reason for using JSX is quite obvious. It makes it very simple to build React applications. With JSX, the UI automatically stays updated with the user-count value, and you don’t have to care about any markup or logic consistency. Also, it works a little faster than normal JavaScript, as it automatically performs optimizations while translating to regular JavaScript.</p>
      <hr />
      <Dropdown options={['Audi', 'bmw', 'MG']} onSelection={onSelection} />
      <Dropdown options={['Red', 'Blue', 'Green']} onSelection={onSelection} />
      <Card title="React">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
      <Card title="HTML" >
        <img src='https://www.imagemobiles.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-11-at-12.13.54-PM.jpeg' width={'200px'} alt='' />
      </Card>
    </div>
  );
}

export default App;
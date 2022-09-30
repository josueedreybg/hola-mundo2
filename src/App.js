import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list.jsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*JS dentro de HTML*/}
        {/*Componente propio Greeting.jsx*/}
        {/*<Greeting name="Josué"></Greeting> */}
        {/* <GreetingF name="Josué"></GreetingF> */}
        {/*Componente de Listado de Tareas*/}
        {/*Componente de Listado de Tareas <TaskListComponent></TaskListComponent> */}
        {/*Componente de Contactos*/}
        <ContactListComponent></ContactListComponent>


        
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list.jsx'
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled.jsx'
import Clock from './hooks/Clock';
import ClockF from './hooks/ClockF';


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
        {/*Componente de Listado de Tareas */}
        {/*<TaskListComponent></TaskListComponent> */}
        {/*Componente de Contactos*/}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/*<MiComponenteConContexto></MiComponenteConContexto> */}
        {/*<Ejemplo4 nombre="Josué">
          <h3> */}
        {/**Todo lo que est+a aquí dentro es tratado como props.children */}
        {/*  Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/*<GreetingStyled name="Josué"></GreetingStyled> */}
        <ClockF></ClockF>


        
      </header>
    </div>
  );
}

export default App;

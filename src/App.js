//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import Fragment from './components/Fragment';
import Table from './components/Table';
import PureComp from './components/PureComp';
import CLickTwo from './components/CLickTwo';
import HoverCOunter from './components/HoverCOunter';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <div className="App">
  <UserProvider value="Mumo">
      <ComponentC />
  </UserProvider>
  


{/* 
<CounterTwo
    render={(count, incrementCount) => (
      <CLickTwo count={count} incrementCount= {incrementCount} />
      )}
  />
   <CounterTwo
    render={(count, incrementCount) => (
      <HoverCOunter count={count} incrementCount= {incrementCount} />
      )}
  />
  <CLickTwo />
<HoverCOunter />
<User name= {(isLoggedIn) => isLoggedIn ? "Mumo" : "Guest"}/>
<User name= "Mumo"/> 
*/}

{/*
<PureComp />
<Table />
<Fragment />
<Form />
<Inline />
<Stylesheet primary={true}/> 
<NameList />
<UserGreeting />
<ParentComponent />
<EventBinding />
<FunctionClick />
<ClassClick />
<Counter />


<Greet />
<Welcome /> 

<Greet name="Mumo" heroName="Nicholas"/>
<p>This is a childs props</p>
<Greet name="Mwia" heroName="Carol" />
<button>Action</button>
<Greet name="Ndanu" heroName="Joy" />


<Welcome name="Mumo" heroName="Nicholas"/>
<Welcome name="Mwia" heroName="Carol" />
<Welcome name="Ndanu" heroName="Joy"/> 

<Message /> 
*/}
    </div>

   
  );
}

export default App;

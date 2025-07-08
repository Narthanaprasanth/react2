import React, { Component, PureComponent } from "react";
import Greet from "./Greet.jsx";
import Welcome from "./Welcome.jsx";
import Hello from "./Hello.js";
import Message from "./Message.jsx";
import Counter from "./Counter.jsx";
import Functionclick from "./Functionclick.jsx";
import Classclick from "./Classclick.jsx";
import EventBind from "./EventBind.jsx";
import Parentcomponent from "./Parentcomponent.jsx";
import UserGreeting from "./Usergreeting.jsx";
import Namelist from "./Namelist.jsx";
import Stylesheet from "./Stylesheet.jsx";
import Inline from "./Inline.jsx";
import "./appstyles.css";
import styles from "./appstyle.module.css";
import Form from "./Form.jsx";
import LifecycleA from "./LifecycleA.jsx";
import FragmentDemo from "./FragmentDemo.jsx";
import Table from "./Table.jsx";
import Purecomp from "./Purecomp.jsx";
import Parentcom from "./Parentcom.jsx";
import RefDemo from "./RefsDemo.jsx";
import FocusInput from "./Focusinput.jsx";
import FRParentinput from "./FRParentinput.jsx";
import PortalDemo from "./PortalDemo.jsx";
import Hero from "./Hero.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Clickcounter from "./Clickcounter.jsx";
import Hovercounter from "./Hovercounter.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className="error">ERROR</h1> */}
        {/* <h1 className={styles.success}>SUCCES</h1>   CSS MODULE APPROACH */}
        {/* <Greet name="doraemon" heroname="dorame">
            <p>this is children paragraph</p>
          </Greet> 
          <Welcome name="doraemon" heroname="dorame"/>  */}

        {/* <Greet name="shizuka" heroname="nobii">
          <button>Action</button>
          </Greet>
         <Greet name="nobitha" heroname="doremoo"/>




         <Welcome name="doraemon" heroname="dorame"/> 
         <Welcome name="shizuka" heroname="nobii"/> 
         <Welcome name="nobitha" heroname="doremoo"/> */}

        {/* <Hello/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <Functionclick/> */}
        {/* <Classclick/> */}
        {/* <EventBind/> */}
        {/* <Parentcomponent/> */}
        {/* <UserGreeting/> */}
        {/* <Namelist/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <Inline/>  */}
        {/* <Form/> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}
        {/* <Parentcom/> */}
        {/* <RefDemo/> */}
        {/* <FocusInput/> */}
        {/* <FRParentinput/> */}
        {/* <PortalDemo/> */}
        {/* <ErrorBoundary>
          <Hero heroname="spiderman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname="joker"></Hero>
        </ErrorBoundary> */}
        <Clickcounter/>
        <Hovercounter/>
       
      </div>
    );
  }
}

export default App;























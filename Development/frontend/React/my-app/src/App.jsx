import Hello from "./Hello";
import "./App.css";
import Fun from "./Fun";
import ArrayAndObj from "./ArrayAndObj";
import ConditionalReadering from "./ConditonalReadering";
import Props from "./Props";
import { Button } from "./Button";
import State from "./stateManagement/State";
import ToggleText from "./stateManagement/ToggleText";
import Student from "./stateManagement/Student";
import Form1 from "./formHandling/Form1";
import SimpleForm from "./formHandling/SimpleForm"
import MultiInputForm from "./formHandling/MultiInputForm";
import AdvancedForm from "./formHandling/AdvancedForm";
import UncontrolledForm from "./formHandling/UncontrolledForm";
import BasicValidationForm from "./formHandling/BasicValidationForm";
import First from "./useEffect/First";
import Timer from "./useEffect/Timer";
import WindowSizeTracker from "./useEffect/WindowSizeTracker";
import Users from "./useEffect/Users";
import Main from "./react-rounter-dom/Main";
import AutoSaveForm from "./useEffectEvent/AutoSaveForm";
import BasicUseContext from "./useContext/BasicUseContext";
import Theme from "./useContext/Theme";
import Auth from "./useContext/Auth";
import UseReducer from "./useReducer/UseReducer";
import UseMemo from "./useMemo/UseMemo";
import UseCallback from "./useCallback/UseCallback";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import CustomHook from "./customHook/CustomHook";
import HigherOrderFun from "./higherOrderComponent/HigherOrderFun";
import CreatePortal from "./createPortal/CreatePortal";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import ReactHookForm from "./react-hook-form/ReactHookForm";





function App() {
  function message() {
    alert("alert from app component");
  }

  return (
    <>
      {/* <Hello/>
      <Fun/>
      <ArrayAndObj/> */}

      {/* <ConditionalReadering/> */}

      {/* <Props 
        name="imran khan" 
        age={23} 
        city="chandigarh" 
        hobbies={["reading","coding","travelling"]}
      />
      <Button label="click me" onClick={message}/> */}

      {/* <State/> */}
      {/* <ToggleText/> */}
      {/* <Student/> */}

      {/* <Form1 /> */}
      {/* <SimpleForm/> */}
      {/* <MultiInputForm/> */}
      {/* <AdvancedForm/> */}
      {/* <UncontrolledForm/> */}
      {/* <BasicValidationForm/> */}

      {/*useEffect */}
      {/* <First/> */}
      {/* <Timer/> */}
      {/* <WindowSizeTracker/> */}
      {/* <Users/> */}


      {/* react-rounter-dom */}
      {/* <Main/> */}
      {/* <AutoSaveForm/> */}
      {/* userContext */}

      {/* <BasicUseContext/> */}
      {/* <Theme/> */}
      {/* <Auth/> */}
      {/* <UseReducer/> */}
      {/* <UseCallback/> */}
      {/* <UseLayoutEffect/> */}
      {/* <CustomHook/> */}
      {/* <HigherOrderFun/> */}
      {/* <LazyLoading/> */}


      {/* <CreatePortal/> */}

      {/* <ErrorBoundary/> */}
      <ReactHookForm/>
     
    


      

      
      




    </>
  );
}

export default App;
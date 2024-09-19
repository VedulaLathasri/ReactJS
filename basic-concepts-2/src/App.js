import logo from './logo.svg';
import './App.css';
import Fragments from './components/Fragment/Fragments';
// import ParentComp from './components/Purecomp/ParentComp';
import ParentComp from './components/Memo/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/RefsWithClassComp/FocusInput';
import PortalDemo from './components/Portals/PortalDemo';
import Hero from './components/Error boundaries/Hero';
import ErrorBoundary from './components/Error boundaries/ErrorBoundary';
import ClickCounter from './components/HigherOrderComponents/ClickCounter';
import HoverCounter from './components/HigherOrderComponents/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
      {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <Fragments/> */}
      {/* <ParentComp/> */}
      {/* <MyPureComp/> */}
    </div>
  );
}

export default App;

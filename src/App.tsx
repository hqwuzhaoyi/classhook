import { DesignerEngineContext } from "./context";
import Engine from "./Engine";
import { List } from "./List";
import { Setting } from "./Setting";

const engine = new Engine();

const Content = () => {
  return (
    <div>
      <Setting></Setting>
      <List></List>
    </div>
  );
};

function App() {
  return (
    <DesignerEngineContext.Provider value={engine}>
      <Content></Content>
      111
    </DesignerEngineContext.Provider>
  );
}

export default App;

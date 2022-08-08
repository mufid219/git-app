import { Provider } from "react-redux";
import store from "./app/store";
import Grid from "./component/Grid/Index";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}

export default App;

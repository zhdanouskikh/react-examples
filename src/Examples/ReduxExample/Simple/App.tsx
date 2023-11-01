import { Provider } from 'react-redux';
import store from './store';
import CounterContainer from './Features/Counter/Container';

const App = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

export default App;
import { useRoutes } from 'react-router-dom';

import routes from './useRouter'
const App = () => {
  return useRoutes(routes);
};
export default App;
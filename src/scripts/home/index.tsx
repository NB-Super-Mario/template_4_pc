import { createRoot } from 'react-dom/client';
import Common from '../common';
import App from './app';
import './index.less';

const rootElement = document.getElementById('app') as HTMLInputElement;
const root = createRoot(rootElement);

const Home = (): void => {
  Common();
  root.render(<App />);
};
export default Home;

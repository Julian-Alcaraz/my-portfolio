import './App.css';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <Layout></Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

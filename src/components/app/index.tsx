import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/index';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
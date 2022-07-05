import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Home } from './pages/home';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

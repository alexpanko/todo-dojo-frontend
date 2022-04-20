import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/images/karate2.gif"
            width="70"
            height="70"
            className="d-inline-block align-bottom"
          />{' '}
          <b>Hajime - ToDo Dojo</b>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header


import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <>
    <header>
      <p>Header forhelvede</p>
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/weather">Weather</Link>&nbsp;&nbsp;
      <Link to="/location">Weather in my location</Link>
    </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Footer NU!</p>
      </footer>
    </>
   );
};

 

export default App;
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <>
    <header>
      <p>Header</p>
      <Link to="/">Home</Link>
      <Link to="/weather">Weather</Link>
    </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </>
   );
};

 

export default App;
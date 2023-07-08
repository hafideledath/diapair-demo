import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      <nav className='flex justify-end pr-20 pt-10 text-2xl lg:text-3xl align-middle content-box'>
        <div className="logo text-center absolute left-20">
          <h2 className='text-5xl lg:text-6xl'>DIAPAIR</h2>
          <h3 className='text-xl lg:text-2xl leading-3'>Student Connect</h3>
        </div>
        <a href="#">Dashboard</a>
        <a href="#">About</a>
        <a href="#" className='sign-in px-2.5 py-1 rounded-lg text-xl lg:text-2xl h-10'>Sign Out</a>
      </nav>
    </div>
  );
}

export default Nav;
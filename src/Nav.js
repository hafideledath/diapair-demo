import './Nav.css';

const Nav = ({ auth }) => {
  return (
    <div className="Nav">
      <nav className='flex justify-end pr-20 pt-10 text-2xl lg:text-3xl align-middle content-box'>
        <div className="logo text-center absolute left-20">
          <h2 className='text-5xl lg:text-6xl tracking-tight'><span style={{color: "#EE2D24", fontWeight: 900}}>D</span><span style={{color: "#04A161", fontWeight: 900}}>I</span><span style={{color: "#000000", fontWeight: 900}}>A</span>PAIR</h2>
          <h3 className='text-xl lg:text-2xl lg:leading-3'>Student Connect</h3>
        </div>
        <a href="/">Dashboard</a>
        <a href="/chat">Chat</a>
        <a href="/about">About</a>
        <a href="#" className='sign-out px-2.5 py-1 rounded-lg text-xl lg:text-2xl h-10' onClick={() => auth.signOut()}>Sign Out</a>
      </nav>
    </div>
  );
}

export default Nav;
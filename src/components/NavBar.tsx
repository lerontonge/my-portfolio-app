export default function NavBar() {
  return (
    <>
      <nav className='menu nav-css'>
        <span className='brand'>
          <a href='#'>LT</a>
        </span>
        <ul className='menu-items object-center'>
          <li className='nav-link'>
            <a href='#'>home</a>
          </li>
          <li className='nav-link'>
            <a href='#'>portfolio</a>
          </li>
          <li className='nav-link'>
            <a href='#'>about me</a>
          </li>
          <li className='nav-link'>
            <a href='#'>contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

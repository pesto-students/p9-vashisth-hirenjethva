import '../styles/Header.css'

const Header = () => {
  return (
    <>
    <div className='header-container'>
    <div className='container-app-name'><ul><li><b>Shortly</b></li></ul></div>
    <div className='container-menu'>
      <ul>
        <li><a href="/">Features</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Resources</a></li>
      </ul>
    </div>
    <div className='container-forms'>
        <ul>
          <li>LogIn</li>
          <li>Sign Up</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Header
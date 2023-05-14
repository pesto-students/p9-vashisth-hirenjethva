import '../styles/Fotter.css' 

const Fotter = () => {
  return (
    <>
    <div className='footer-container'>
        <div className='company-name'>
            <ul>
                <li> <b>Shortly</b> </li>
            </ul>
        </div>
        <div className='feature-list'>
            <ul>
                <li><b>Features</b></li>
                <li>Link Sharing</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul>
                <li><b>Resources</b></li>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul>
                <li><b>Company</b></li>
                <li>About</li>
                <li>Our Team</li>
                <li>Carrers</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='forms'>
            <ul>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Fotter
import logoWhite from '../assets/Unicorn_Solutions_white.svg';
import logoBlack from '../assets/Unicorn_Solutions_black.svg';
import logo from '../assets/Unicorn_Solutions.svg';
import '../App.css';

const Navbar = () => (
  <>
    <div className="banner-light">
        <img src={logo} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="banner-light">
        <img src={logoBlack} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="banner-dark">
        <img src={logoWhite} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="banner2-light">
        <img src={logo} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="banner2-light">
        <img src={logoBlack} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="banner2-dark">
        <img src={logoWhite} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
  </>
);

export default Navbar;
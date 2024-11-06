import logoWhite from '../assets/Unicorn_Solutions_white.svg';
import logoBlack from '../assets/Unicorn_Solutions_black.svg';
import '../App.css';

const Navbar = () => (
  <>
    <div className="navbar">
        <img src={logoBlack} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="navbar">
        <img src={logoWhite} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="navbar2">
        <img src={logoBlack} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
    <div className="navbar2">
        <img src={logoWhite} style={{ height: 100, width: 100, verticalAlign: 'middle' }} alt="logo" />
        <span style={{ paddingLeft: 10, color: 'white', verticalAlign: 'middle', fontSize: 50}}>Unicorn Solutions</span>
    </div>
  </>
);

export default Navbar;
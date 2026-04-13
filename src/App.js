import logo from './media/quincy-college-logo.svg';
import './App.css';

function App() {
  return (
    <header className="NavigationHeader">
        <div className="NavigationHeader-content">
            <a href="index.html" className="NavigationHeader-logoLink">
                <div className="BrandLogo">
                    <img src={logo} alt="Quincy College Logo" className="BrandLogo-image" />
                    <h1 className="BrandLogo-title"><span className="BrandLogo-titleText">QUINCY COLLEGE</span><span className="BrandLogo-subtitle">BOOK LENDING</span></h1>
                </div>
            </a>
            <ul className="NavigationHeader-pages">
                <li><a href="index.html" className="NavigationHeader-link is-active">Search</a></li>
                <li><a href="manage.html" className="NavigationHeader-link">Manage</a></li>
            </ul>
        </div>
    </header>
  );
}

export default App;

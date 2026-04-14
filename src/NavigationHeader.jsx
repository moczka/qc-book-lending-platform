/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  The navigation header at the top of the application. 
  Used by users to switch between application flows.
  
*/
import { useCallback } from 'react';
import {SEARCH_MODE, MANAGE_MODE} from "./constants";
import logo from './media/quincy-college-logo.svg';
import './NavigationHeader.css';

function NavigationHeader({setMode, activeMode}) {

  const handleClick = useCallback((event) => {
    event.preventDefault();
    setMode(event.currentTarget.dataset.mode);
  }, [setMode]);

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
                <li><a href="index.html" data-mode={SEARCH_MODE} onClick={handleClick} className={`NavigationHeader-link ${activeMode === SEARCH_MODE && "is-active"}`}>Search</a></li>
                <li><a href="manage.html" data-mode={MANAGE_MODE} onClick={handleClick} className={`NavigationHeader-link ${activeMode === MANAGE_MODE && "is-active"}`}>Manage</a></li>
            </ul>
        </div>
    </header>
  );
}

export default NavigationHeader;
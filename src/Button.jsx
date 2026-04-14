/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  Re-usable button component styled with the application theme

*/
import './Button.css';

function Button({onClick, isDisabled = false, isSecondary = false, children}) {
    return (
        <button class={`ApplicationButton ${isSecondary && 'ApplicationButton--secondary'}`} onClick={onClick} disabled={isDisabled}>
            {children}
        </button>
    );
}

export default Button;
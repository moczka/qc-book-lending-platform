/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  Registration phase - allows student to register to complete their reservation.

*/
import Button from './Button';

function RegistrationPhase() {
    return (
        <div className="ApplicationPhase" id="ApplicationRegistrationPhase">
            <h3 className="ArticleSection-title">Register</h3>
            <p className="ArticleSection-paragraph">To reserve books, you must provide basic contact details and accept our terms of use. Please complete the form below to finalize your order.</p>
            <button id="previousStep" className="ApplicationButton ApplicationButton--secondary"><span className="material-symbols-outlined">arrow_back</span>Book Selection</button>
            <form className="RegistrationForm" id="registrationForm">
                <div className="RegistrationForm-field">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="RegistrationForm-field">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required/>
                </div>
                <div className="RegistrationForm-field">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="RegistrationForm-field">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required/>
                </div>
                <div className="RegistrationForm-field">
                    <label htmlFor="studentId">Student ID:</label>
                    <input type="text" id="studentId" name="studentId" required/>
                </div>
                <Button>Submit</Button>
            </form>
        </div>
    );
}

export default RegistrationPhase;
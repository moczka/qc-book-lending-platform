/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  Confirmation phase - provides the student with a confirmation and 
  a summary of their reservation.

*/

function ConfirmationPhase() {
    return (
      <div class="ApplicationPhase" id="ApplicationConfirmationPhase">
        <h3 class="ArticleSection-title">Order Confirmed <span class="material-symbols-outlined">check_circle</span></h3>
        <div class="ArticleSection-description">
            <div>
                <p class="ArticleSection-paragraph">Please have your <strong>student ID with you</strong> when picking up your books. Books not picked up within 24 hours will become available for other students to reserve.</p>
                <p class="ArticleSection-paragraph">Proceed to pick up your books at the Quincy College library located on the third floor and check-in with one of our librarians, thank you.</p>
                <p class="ConfirmatonPhase-detailsLabel"><strong>Books Ordered:</strong></p>
                <div id="ConfirmationPhase-details"></div>
            </div>
            <img class="ArticleSection-image" src="media/quincy-college-library.jpg" alt="Quincy College Library" />
        </div>
      </div>
    );
}

export default ConfirmationPhase;
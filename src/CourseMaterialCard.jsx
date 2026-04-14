/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  A selectable card used to display information about the book such 
  as title, author, course and available quantity

*/
import './CourseMaterialCard.css';
import DEFAULT_BOOK_IMG from './media/book-thumbnail-placeholder.jpg';

function CourseMaterialCard({id, title, edition, author, quantity, reserved, courseId, courseName, isbnNumber, isSelected, onClick}) {
  
    const isOutOfStock = quantity === reserved;
    const bookStatus = isOutOfStock ? "Out of Stock" : `${reserved} out of ${quantity}`;

    return (
      <div className={`CourseMaterialCard ${isOutOfStock ? "is-outOfStock" : "" }`}>
          <input checked={isSelected} className="CourseMaterialCard-input" type="checkbox" disabled={isOutOfStock} id={isbnNumber} onChange={onClick} name="selection" value={id} />
          <label htmlFor={isbnNumber} className="CourseMaterialCard-wrapper">
              <div className="CourseMaterialCard-image">
                  <img className="CourseMaterialCard-bookImage" src={DEFAULT_BOOK_IMG} />
              </div>
              <div className="CourseMaterialCard-content">
                  <div className="CourseMaterialCard-description">
                      <p><span className="CourseMaterialCard-label">Title:</span>{title}</p>
                      <p><span className="CourseMaterialCard-label">Edition:</span>{edition}</p>
                      <p><span className="CourseMaterialCard-label">Authors:</span>{author}</p>
                  </div>
                  <div className="CourseMaterialCard-status">{bookStatus}</div>
                  <div className="CourseMaterialCard-courseLabel">{courseId}</div>
                  <div className="CourseMaterialCard-additionalInfo">{courseName}</div>
              </div>
          </label>
      </div>
    );
}

export default CourseMaterialCard;
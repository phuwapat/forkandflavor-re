import React, { useState } from 'react';
import BtnBox from './BtnBox';
import { Cursor } from 'mongoose';

function RateComment() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [rating, setRating] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = index => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  const handleClick = index => {
    setRating(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRating(-1);
  };

  const renderStar = index => {
    const isShiny = hoverIndex >= index || rating >= index;
    const starSrc = isShiny
      ? '../../public/Image/Icon/star-rate-y.svg'
      : '../../public/Image/Icon/star-rate-w.svg';
    return (
      <img
        key={index}
        src={starSrc}
        alt={`${index + 1} star`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
        style={{cursor:'pointer'}}
      />
    );
  };
  
  return (
    <div className="RateComment">
      {[0, 1, 2, 3, 4].map(index => renderStar(index))}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              <img src='../../public/Image/Icon/FaTimes.svg'/>
            </span>
            <div>
                <p>You rating this recipe</p>
                {[0, 1, 2, 3, 4].map(index => renderStar(index))}
            </div>
            <div className='comment-box'>
                <div>
                    <img src='../../public/Image/Profile/Ellipse 34.svg'/>
                    <textarea placeholder='Tell us what you think...'/>
                </div>
                <div>
                    <img src='../../public/Image/Icon/FaCamera.svg'/>
                    <label htmlFor="file-input">add some photos</label>
                    <input type="file" id="file-input" accept="image/*" />
                </div>
            </div>
            <BtnBox name="Submit"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default RateComment;

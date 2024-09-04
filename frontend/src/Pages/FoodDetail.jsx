import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import FilterBadge from '../Components/FilterBadge';
import StarRate from '../Components/StarRate';
import BtnBox from '../Components/BtnBox';
import reciept from '../Data/reciept';
import BtnBack from '../Components/BtnBack';
import FreeSlides from '../Components/FreeSlides';
import RateComment from '../Components/RateComment';

function FoodDetail() {
  const mock = reciept[0];

  return (
    <div className="Fooddetail">
      <header>
        <Navbar />
      </header>
      <main>
        <BtnBack />
        <button className="fooddetail-fav">
          <img src="../../public/Image/Icon/bookmark.svg" />
        </button>
        <div className="fooddetail-first-container">
          <img className="fooddetail-food-img" src={mock.img} />
          <div className="fooddetail-detail">
            <h1>{mock.name} Egg Sandwich</h1>
            <div className="fooddetail-filter">
              <FilterBadge name={mock.filter1} />
              <FilterBadge name={mock.filter2} />
            </div>
            <StarRate rate={mock.rate} rateCount={mock.rateCount} />
            <div>
              <img src="../../public/Image/Icon/FaRegClockB.svg" /> Cook Time:{' '}
              {mock.cookTime}
            </div>
            <div>
              <img src="../../public/Image/Icon/usersB.svg" /> Yield:{' '}
              {mock.yield}
            </div>
            <div>
              by <img src="../../public/Image/Profile/Ellipse 34.svg" /> TuiTui{' '}
              <BtnBox name="follow" />
            </div>
            <div className="fooddetail-description">
              <p>{mock.preface}</p>
            </div>
          </div>
        </div>
        <div className="fooddetail-second-container">
          <h2>Ingredients</h2>
          <div className="ingredient-box">
            <ul className="ingredient-list">
              {mock.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="ingredient-item noto-sans-thai-looped-regular"
                >
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">
                    {ingredient.quantity}
                  </span>
                  <span className="ingredient-unit">{ingredient.unit}</span>
                </li>
              ))}
            </ul>
            <img
              className="end-box-input"
              src="./../../public/Image/Icon/end-box-ingre2.svg"
              alt="End Box Icon"
            />
          </div>
        </div>
        <div className="fooddetail-third-container">
          <h2>Instructions</h2>
          {}
        </div>
        <div className="fooddetail-forth-container">
          <h2>Reviews</h2>
          <div className="fooddetail-rate">Rate this recipe</div>
          <RateComment />
          <hr />
          <div className="fooddetail-freeslide">
            สูตรอาหารอื่นๆจาก คุณ TuiTui
            <FreeSlides />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FoodDetail;

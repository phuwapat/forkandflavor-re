function StarRate({ rate , rateCount}) {
    const star = "./../../public/Image/Star/star.svg"; 
    return (
        <div className="StarRate ">
            <div className="star">
                {Array.from({ length: rate }, (_, index) => (
                    <img key={index} src={star} alt={`Star ${index + 1}`} />
                ))}
                
            </div>
            <p>({rateCount})</p>
        </div>
    );
}

export default StarRate;
import "./Explore.css";

const EXPLORE = () => {
  return (
    <div className="adventure-section">
      <div className="content-section">
        <div className="number-section">
          <h1>01</h1>
          <h2>/02</h2>
        </div>
        <h1 id="title">
          Come to <br /> winter .
        </h1>
        <div className="last-section">
          <div className="text">
            <h1>Award nomination for real estate.</h1>
            <p>The feeling when it's snowing</p>
          </div>
          <div className="card">
            <div className="card-desctription">
              <h1 id="num">01</h1>
              <h1>Our House</h1>
              <p>Check our products</p>
            </div>
            <div className="card-desctription">
              <h1 id="num">02</h1>
              <h1>Reviews</h1>
              <p>Check our products</p>
            </div>
            <div className="card-desctription">
              <h1 id="num">03</h1>
              <h1>Cases</h1>
              <p>Check our products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reservation-section ">
        <p>We create comfort and we're waiting for you at any time</p>
        <h1>Mountain camp</h1>
        <div className="reservation">
          <div className="checks">
            <h1>Location</h1>
            <input type="text" name="" placeholder="City" />
          </div>
          <div className="checks">
            <h1>Check In</h1>
            <input type="date" name="" id="" placeholder="Check In" />
          </div>
          <div className="checks">
            <h1>Check Out</h1>
            <input type="date" name="" placeholder="Check Out" />
          </div>
          <div className="book-button">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EXPLORE;

import "./Buyer.scss";

const Buyer = () => {
  return (
    <div className="buyer">
      <div className="container">
        <h1>Register as a Buyer</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" />
            <label htmlFor="">Surname</label>
            <input type="text" placeholder="Your Surname" />

            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="Your E-mail" />
            <label htmlFor="">Birthday</label>
            <input type="date" />
            <label htmlFor="">Where are you from?</label>
            <input type="text" placeholder="City, Country" />

            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer;

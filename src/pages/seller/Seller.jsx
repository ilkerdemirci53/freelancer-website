import "./Seller.scss";

const Seller = () => {
  return (
    <div className="seller">
      <div className="container">
        <h1>Register as a Seller</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" />
            <label htmlFor="">Surname</label>
            <input type="text" placeholder="Your Surname" />
            <label htmlFor="">What is your specialty?</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
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

export default Seller;

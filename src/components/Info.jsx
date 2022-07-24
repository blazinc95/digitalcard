
import linkedin from "../assets/ln.png"
import email from "../assets/em.png"
function Info() {
  return (
    <div className="info">
      <div className="info--information">
          <h1>Rooh Afza</h1>
          <h5>Tasty Drink</h5>
          <h6>roohafza.website</h6>
      </div>
      <div className="info--buttons">
        <button className="info--emailbtn">
          <img src={email} alt="in" className="email-icon" />
             <p>Email</p>
          </button>
          <button className="info--linkedinbtn">
            <img src={linkedin} alt="in" className="linked-icon"/>
              <p>LinkedIn</p>
          </button>
      </div>

      <div className="info--about">
        <h1>About</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta qui assumenda quaerat laboriosam deleniti rerum repellendus tempore, veritatis magnam consectetur, provident, fuga dolorum omnis quam maxime ullam quidem harum!
          </p>
      </div>

      <div className="info--interests">
          <h1>Interests</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur veritatis ea dolor. Ducimus error at assumenda modi laudantium minima eius sequi quibusdam voluptatum nulla, rem quaerat doloribus explicabo illum!</p>
      </div>
        
    </div>
  )
}

export default Info

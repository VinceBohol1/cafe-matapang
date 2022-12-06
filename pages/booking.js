import Hero from "../components/Hero/Hero1";
import Nav from "../components/bookingnav";



function Booking() {
  return (
    <div>
      <Nav/>
      <Hero
        heading1="Book a Table"
        address="Whatever the occasion, we’re certain that you can make it special at Caffeine Grounds.
        "
        Order="Submit"
        first="First Name"
        last="Last Name:"
        email="Email:"
        message="Message:"
      />

    </div>
  );
  
}

export default Booking;
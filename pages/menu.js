import Hero from "../components/Hero/Hero2";
import Nav from "../components/menunav";



function Menu() {
  return (
    <div>
      <Nav/>
      <Hero
        heading1="Menu"
        address="Espresso------------"
        heading2="2.00$"
        address2="Americano-----------"
        heading3="5.00$"
        address3="Fredo--------------"
        heading4="7.00$"
        address4="Doppio-------------"
        heading5="4.00$"
        address5="Cappucino-----------"
        heading6="6.00$"
        address6="Frappe-------------"
        heading7="7.00$"
        address7="Macchiato----------"
        heading8="4.00$"
        address8="Latte-----------------"
        heading9="6.00$"
        address9="Mocha-------------"
        heading10="7.00$"
        
      />

    </div>
  );
  
}

export default Menu;
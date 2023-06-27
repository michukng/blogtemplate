import { useState } from "react";
import useWindowSize from "./hooks/useWindowSize";

const Header = () => {

  const [burger, setBurger] = useState("nav-header");
  const [active, setActive] = useState(false);

  const { width } = useWindowSize();

  const openBurger = () => {
    if (!active) {
      setBurger("active-burger");
      setActive(true);
    } else if (active) {
      setBurger("nav-header");
      setActive(false);
    }
  }

  return (
    <header>
      <h1 className='h1-header'>{width >= 850 ? "BEDPOK" : "BDPK"}</h1>
      <section id='nav' className={width >= 850 ? "nav-header" : burger}>
        <p className='p-nav-header'>Home</p>
        <p className='p-nav-header'>About</p>
        <p className='p-nav-header'>Contact</p>
        <input 
          type="text"
          placeholder="&#x1F50E;&#xFE0E; Search"
          className='input-search-header' 
        />{width >= 850
          ? <button className='sub-btn'>Subscribe</button>
          : <p className="p-nav-header">Subscribe</p>
      }
      </section>
        <button
          className="burger"
          onClick={openBurger}>
          <div className={!active ? "line-burger" : "close-burger"}></div>
          <div className={!active ? "line-burger" : "close-burger"}></div>
          <div className={!active ? "line-burger" : "close-burger"}></div>
          {/* <div className="line-burger"></div>
          <div className="line-burger"></div>
          <div className="line-burger"></div> */}
        </button>
      
    </header>
  )
}

export default Header

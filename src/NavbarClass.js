import React, { Component } from "react";
import "./NavbarClass.css";
// import { Link } from "react-router-dom";
import Logo from "./assets/Edinburgh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Container } from "reactstrap";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_class: "",
      shown:false,
     
    };
    this.myNavbar = React.createRef();
  }
  toggleNav = () => {
    if (this.state.menu_class === "") {
      this.setState({
        menu_class: "toggled"
      });
    } else {
      this.setState({
        menu_class: ""
      });
    }
  };


  render() {
    let topnav = `top-menu ${this.state.menu_class}`;
    // let logoArea=`top-menu ${this.state.logo_area}`
    window.addEventListener("scroll", _ => console.log(this.myNavbar.current.offsetTop), true);
    
    return (
      <div>
        <div id="banner">
          <div
            className={topnav} id="myTopNav">
            
            <a href="/" ref={this.myNavbar} onScroll={this.onScroll}>
              <img src={Logo} alt="logo" className="logo" />
            </a>
            <button         
            onMouseEnter={() => this.state.shown(true)}
            onMouseLeave={() =>this.state.shown(false)}>Check</button>
            {this.state.shown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
            <a href="#home" className="active">
              Home
            </a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
           
            
            
            <a href="#signUp">Sign In</a>
            <a href="#signIn">Sign Up</a>
            

            <FontAwesomeIcon
                icon={faBars}
                className="top-menu-icon"
                onClick={this.toggleNav}
              />
            <div className="clear-fix" />
          </div>
        </div>
        <Container>
          <div className="pageBody">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              possimus necessitatibus, quis, soluta sapiente quasi a quidem,
              atque provident facere nisi doloremque culpa expedita eligendi.
              Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
              vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
              voluptatibus veniam ipsa! Tempora, et nemo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              possimus necessitatibus, quis, soluta sapiente quasi a quidem,
              atque provident facere nisi doloremque culpa expedita eligendi.
              Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
              vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
              voluptatibus veniam ipsa! Tempora, et nemo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              possimus necessitatibus, quis, soluta sapiente quasi a quidem,
              atque provident facere nisi doloremque culpa expedita eligendi.
              Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
              vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
              voluptatibus veniam ipsa! Tempora, et nemo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              possimus necessitatibus, quis, soluta sapiente quasi a quidem,
              atque provident facere nisi doloremque culpa expedita eligendi.
              Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
              vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
              voluptatibus veniam ipsa! Tempora, et nemo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              possimus necessitatibus, quis, soluta sapiente quasi a quidem,
              atque provident facere nisi doloremque culpa expedita eligendi.
              Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
              vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
              voluptatibus veniam ipsa! Tempora, et nemo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              possimus necessitatibus, quis, soluta sapiente quasi a quidem,
              atque provident facere nisi doloremque culpa expedita eligendi.
              Tenetur eius quo hic maiores fuga illum non nisi nobis nostrum
              vero harum, aliquid, distinctio reiciendis beatae quaerat rerum,
              voluptatibus veniam ipsa! Tempora, et nemo.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

//written in plain javascript

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

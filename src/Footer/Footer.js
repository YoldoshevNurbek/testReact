import React from "react";
import './Footer.css';
import Imag from './img/1.png'
import Imag2 from './img/2.png'
import Imag3 from './img/3.png'
import Imag4 from './img/4.png'


function Footer(props){
    return(
        <div className="big">
        <div className="container">
    <footer>
        <div className="Footer">
                <div className="icons">
                    <a href="#!" className="Trev">{props.name}</a>
                    <p className="Conatact">{props.lorem}</p>
                    <a href="https://www.instagram.com/yoldoshev_nbk?r=nametag" className="href2">{props.href}</a>
                    <div>
                    <img src={Imag} alt="png" className="tg"></img>
                    <img src={Imag2} alt="png" className="tg"></img>
                    <img src={Imag3} alt="png" className="tg"></img>
                    <img src={Imag4} alt="png" className="tg"></img>
                    </div>
                </div>
                <div className="links">
                    <a href="#!" className="FooterLink">{props.link}</a>
                    <a href="#!" className="FooterLink">{props.link2}</a>
                    <a href="#!" className="FooterLink">{props.link3}</a>
                    <a href="#!" className="FooterLink">{props.link4}</a>
                    <a href="#!" className="FooterLink">{props.link5}</a>
                </div>
                <div className="links">
                <a href="#!" className="FooterLink">{props.link5}</a>
                <a href="#!" className="FooterLink">{props.link5}</a>
                <a href="#!" className="FooterLink">{props.link5}</a>
                <a href="#!" className="FooterLink">{props.link5}</a>
                </div>
                <div className="input">
                    <p className="write">{props.write}</p>
                    <input type="mail" className="inp1"></input>
                </div> 
                <div className="button1">
                    <button className="btn1">{props.btn}</button>
                </div>
        </div>
    </footer>
    </div>
    </div>
    )
        
}
export default Footer;
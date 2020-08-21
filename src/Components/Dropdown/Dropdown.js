import React from 'react'
import './style.css'

export default function (props) {

  function onDropdownClick() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function onTypeSelected(element) {
    onDropdownClick()
    props.onClick(element)
  }

  return (
    <div className="dropdown">
      <button onClick={() => { onDropdownClick() }} className="dropbtn">{props.value}</button>
      <div id="myDropdown" className="dropdown-content">
        {/* <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a> */}
        {props.elements && props.elements.map(element => <button key={element} onClick={() => onTypeSelected(element)} className="">{element}</button>)}
      </div>
    </div>
  )
}
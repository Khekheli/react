import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import pic34 from "./images/Group 2.png";
import pic22 from "./images/Group 2.png";
import pic56 from "./images/Group 2.png";

//adding props
const Person = ({ img, name, job, children }) => {
  //using template litrals
  // const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    < article className="person">
      {/* <img src={url} alt=""></img> */}
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article >
  );
};

//now to create a component
const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="Khekheli" job="Web Developer">
        <img src={pic34}></img>
      </Person>
      <Person img="22" name="Enam" job="Personal Trainer">
        <img src={pic22}></img>
      </Person>
      <Person img="56" name="Dennis" job="Accountant">
        <img src={pic56}></img>
        <p>lorem</p>
      </Person>
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
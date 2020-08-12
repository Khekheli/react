import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import pic1 from "./images/kai.png";
import pic2 from "./images/rodrygo.png";
import pic3 from "./images/ihattaren.png";
import pic4 from "./images/esposito.png";
import pic5 from "./images/jude.png";
import pic6 from "./images/zaracho.png";
import pic7 from "./images/marin.png";
import pic8 from "./images/pinamonti.png";
import pic9 from "./images/ianis.png";

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
    <div>
      <section className="person-list">
        <Person img="" name="Kai Havertz" job="FM Wonderkid">
          <img src={pic1} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
        <Person img="" name="Rodrygo" job="FM Wonderkid">
          <img src={pic2} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
        <Person img="" name="Mohammed Ihattaren" job="FM Wonderkid">
          <img src={pic3} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
      </section>
      <section className="person-list">
        <Person img="" name="Sebastiano Esposito" job="FM Wonderkid">
          <img src={pic4} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
        <Person img="" name="Jude Bellingham" job="Personal Trainer">
          <img src={pic5} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
        <Person img="" name="Matias Zaracho" job="Accountant">
          <img src={pic6} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
      </section>
      <section className="person-list">
        <Person img="" name="Antonio Marin" job="Web Developer">
          <img src={pic7} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
        <Person img="" name="Andrea Pinamonti" job="FM Wonderkid">
          <img src={pic8} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
        <Person img="" name="Ianis Hagi" job="Accountant">
          <img src={pic9} alt=""></img>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur nemo sint iure, animi eum deleniti ducimus totam, at
            repudiandae blanditiis laboriosam facere eaque maiores?
          </p>
        </Person>
      </section>
    </div>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
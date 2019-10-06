import React, { Component } from 'react';
import './Bodyimage.css';
import Aux from '../../hoc/Aux'
import '../../fonts/css/all.css';
import Description from '../description/Description.js';

class Bodyimage extends Component {

  state ={
    index: 0,
    class: ["pizzabackground", 'burgerbackground', 'drinksbackground', 'cookiesbackground']
  }

changeBlogPicForwards() {
  let i = this.state.index;
  if (i === this.state.class.length - 1) {
      i = 0;
  } else {
      i = i + 1;
  }
  const newState = Object.assign({}, this.state, {index: i});
  this.setState(newState);
}

changeBlogPicBackwards() {
  let i = this.state.index;
  if (i === 0) {
      i = this.state.class.length - 1;
  } else {
      i = i - 1;
  }
  const newState = Object.assign({}, this.state, {index: i});
  this.setState(newState);
}

onDotFirst() {
  const updatedState = {
    ...this.state,
    index: 0
  };
  this.setState(updatedState);
  console.log(this.state)
}

onDotSecond() {
  const updatedState = {
    ...this.state,
    index: 1
  };
  this.setState(updatedState);
  console.log(this.state)
}

onDotThird() {
  const updatedState = {
    ...this.state,
    index: 2
  };
  this.setState(updatedState);
  console.log(this.state)
}

onDotFourth() {
  const updatedState = {
    ...this.state,
    index: 3
  };
  this.setState(updatedState);
  console.log(this.state)
}

  render() {
   let blogCurrentPic = this.state.class[this.state.index];

   let blogCurrentTitle = null;
   let i = this.state.index;
   let dot1 = <i className="far fa-circle"></i>
   let dot2 = <i className="far fa-circle"></i>
   let dot3 = <i className="far fa-circle"></i>
   let dot4 = <i className="far fa-circle"></i>


   if( i === 0) {
     blogCurrentTitle = "Italian pizza"
     dot1 = <i className="fas fa-circle"></i>
   }else if( i === 1){
     blogCurrentTitle = "Delicious burger"
     dot2 = <i className="fas fa-circle"></i>
   } else if (i === 2){
      blogCurrentTitle = "Refresh drink"
      dot3 = <i className="fas fa-circle"></i>
   }else {
    blogCurrentTitle = "Handmade cookies"
    dot4 = <i className="fas fa-circle"></i>
   }

    return(
      <Aux>
        <div className="background-image">
            <div className={`image-holder ${blogCurrentPic}`}>
              <p className="title-background"> {blogCurrentTitle} </p>
            </div>
            <div className="blog-name">
              <div className="left-arrow-action arrow-icons">
                  <i onClick={(e) => this.changeBlogPicBackwards(e)} className="fa fa-angle-left fa-4x" aria-hidden="false"></i>
              </div>
              <div className="right-arrow-action arrow-icons">
                  <i onClick={(e) => this.changeBlogPicForwards(e)} className="fa fas fa-angle-right fa-4x" aria-hidden="false"></i>
              </div>
            </div>
            <ul className="dots">
              <li onClick={(e) => this.onDotFirst(e)}> {dot1} </li>
              <li onClick={(e) => this.onDotSecond(e)}> {dot2} </li>
              <li onClick={(e) => this.onDotThird(e)}> {dot3} </li>
              <li onClick={(e) => this.onDotFourth(e)}> {dot4} </li>
            </ul>
            <Description />
        </div>
     </Aux>
    );
  }
}


export default Bodyimage;

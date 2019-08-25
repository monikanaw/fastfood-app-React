import React, { Component } from 'react';
import './Bodyimage.css';
import Aux from '../../hoc/Aux'
import '../../fonts/css/all.css';

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
  this.setState({index: i});
}

changeBlogPicBackwards() {
  let i = this.state.index;
  if (i === 0) {
      i = this.state.class.length - 1;
  } else {
      i = i - 1;
  }
  this.setState({index: i});
}

  render() {
   let blogCurrentPic = this.state.class[this.state.index];

   let blogCurrentTitle = null;
   let i = this.state.index;

   if( i === 0) {
     blogCurrentTitle = "Italian pizza"
   }else if( i === 1){
     blogCurrentTitle = "Delicious burger"
   } else if (i === 2){
      blogCurrentTitle = "Refresh drink"
   }else {
    blogCurrentTitle = "Handmade cookies"
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
        </div>
     </Aux>
    );
  }
}


export default Bodyimage;
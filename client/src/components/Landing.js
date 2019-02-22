import React, { Component } from 'react'

class Landing extends Component {

componentDidMount() {
    let custom_elements = document.querySelectorAll(".custom_container .column");

    custom_elements.forEach( (element) => {
        
        element.addEventListener('mouseover', function(){
                        
          let el = custom_elements[0];
          
          while(el) {
              if (el.tagName === "DIV") {
                  el.classList.remove("active");
              }
              el = el.nextElementSibling;
              
          }

        this.classList.add("active");  
                    
    });
    });
  }

  render() {
    return (
      <div>

  <div className="custom_container">
    <div className="column active">
        <div className="content">
            <h1><span>step</span>1</h1>
            <div className="box">
                <h2>Step Number 1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusantium, est laudantium distinctio fugit ea neque quae dolore eum reiciendis.</p>
            </div>
            
        </div>
        <div className="bg bg1"></div>
    </div>
    <div className="column">
            <div className="content">
                <h1><span>step</span>2</h1>
                <div className="box">
                    <h2>Step Number 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusantium, est laudantium distinctio fugit ea neque quae dolore eum reiciendis.</p>
                </div>
            </div>
            <div className="bg bg2"></div>
    </div>
    <div className="column">
            <div className="content">
                <h1><span>step</span>3</h1>
                <div className="box">
                    <h2>Step Number 3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusantium, est laudantium distinctio fugit ea neque quae dolore eum reiciendis.</p>
                </div>
            </div>
            <div className="bg bg3"></div>
      </div>
      <div className="column">
              <div className="content">
                  <h1><span>step</span>4</h1>
                  <div className="box">
                      <h2>Step Number 4</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusantium, est laudantium distinctio fugit ea neque quae dolore eum reiciendis.</p>
                  </div>
              </div>
              <div className="bg bg4"></div>
      </div>
  </div> 
          
      </div>
    )
  }
}

export default Landing

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
            <h1><span>1</span></h1>
            <div className="box">
                <h2>Step Number 1</h2>
                <div>
                    <h5>Login Using Google Account</h5>
                    <p>Click on the login button to create a free account using google for a safe authorization. After you select an account you will redirected back to this page.</p>
                </div>
            </div>
            
        </div>
        <div className="bg bg1"></div>
    </div>
    <div className="column">
            <div className="content">
                <h1><span>2</span></h1>
                <div className="box">
                    <h2>Step Number 2</h2>
                    <div>
                        <h5>Add Credits To Your Account</h5>
                        <p>Click on add credits to add credits to your account so you can send surveys to your clients.</p>
                        <p>( NOTE: this application is on test mode, so you cannot add a real credit card just yet )</p>
                </div>
                </div>
            </div>
            <div className="bg bg2"></div>
    </div>
    <div className="column">
            <div className="content">
                <h1><span>3</span></h1>
                <div className="box">
                    <h2>Step Number 3</h2>
                    <div>
                        <h5>Go To The Dashboard</h5>
                        <p>Click on the plus in the right bottom corner to Create new surveys to send to your clients via E-mail. Once you add all your desired list, confirm that all fields are correct and send your amazing survey away!</p>
                </div>
                </div>
            </div>
            <div className="bg bg3"></div>
      </div>
      <div className="column">
              <div className="content">
                  <h1><span>4</span></h1>
                  <div className="box">
                      <h2>Step Number 4</h2>
                      <div>
                        <h5>Wait For The Feedback To Return</h5>
                        <p>Now you wait for your clients to answer the survey that you just sent. Once you do, all the information needed will be in the dashboard page.</p>
                </div>
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

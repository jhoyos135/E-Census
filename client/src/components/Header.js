import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';


class Header extends Component {

    renderContent() {
        switch(this.props.auth) {
            
            case null:
            return
            case false:
            return(
                <li>
                    <a href="/auth/google">Login</a>
                </li>
            )
            default:
            return (
                [
            <div className="left custom_left">
                <li key="1"> <Payments /> </li>
                <li key="2" style={{margin: '0 10px'}}>
                    Credits: { this.props.auth.credits }
                </li>
                <li key="5">
                    <a href="/">Home</a>
                </li>   
                <li key="3">
                    <a href="/surveys">Dashboard</a>
                </li>
                <li key="4">
                    <a href="/api/logout">Logout</a>
                </li>
            </div>,
            <div className="right custom_name" style={{margin: '0 10px'}}>
                <li key="6">
                    {this.props.auth.displayName}
                </li>
            </div>
                
              ]
            ) // this case is when the user is logged in
        }

    }

  render() {

    return (
      <div className="navbar-fixed">
          <nav> 
              <div className="nav-wrapper container">
                  <Link 
                  to={ this.props.auth ? '/surveys' : '/' } 
                  className="brand-logo left"
                  >
                
                 <i className="material-icons custom_mail">mail</i>- Census

                  </Link>

            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                <ul className="sidenav" id="mobile-demo">
                    {this.renderContent()}
                </ul>
              </div>
          </nav>
        
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {

    return { auth }

}

export default connect(mapStateToProps)(Header)

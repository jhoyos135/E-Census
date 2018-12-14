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
                <li key="1"> <Payments /> </li>,
                <li key="2" style={{margin: '0 10px'}}>
                    Credits: { this.props.auth.credits }
                </li>,
                <li key="3">
                    <a href="/surveys">Dashboard</a>
                </li>,
                <li key="4">
                    <a href="/api/logout">Logout</a>
                </li>
              ]
            ) // this case is when the user is logged in
        }

    }

  render() {

    

    return (
      <div>

          <nav className="indigo">
              <div className="nav-wrapper container">
                  <Link 
                  to={ this.props.auth ? '/surveys' : '/' } 
                  className="brand-logo left"
                  >
                  Surveys
                  </Link>
                  <ul className="right">
                      { this.renderContent() }
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

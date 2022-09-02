import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {inputValue: '', passwordsList: []}

  onAddNewPassword = () => {
    const {inputValue} = this.state

    return (
      <div className="add-new-password-container">
        <form className="add-password-container">
          <h1 className="heading">Add New Password</h1>
          <div className="logo-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="logos"
            />

            <input type="text" placeholder="Enter Website" className="input" />
          </div>
          <div className="logo-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="logos"
            />

            <input type="text" placeholder="Username" className="input" />
          </div>
          <div className="logo-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="logos"
            />

            <input type="password" className="input" placeholder="Password" />
          </div>
          <button type="submit" className="button">
            Add
          </button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          className="image"
          alt="password manager"
        />
      </div>
    )
  }

  onSavesPassword = () => {
    const {inputValue} = this.state

    return (
      <div className="password-container">
        <div className="search-container">
          <div className="password-count">
            <h1 className="password-heading">Your Passwords</h1>
            <p className="count">0</p>
          </div>
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="logos"
            />

            <input
              type="search"
              placeholder="Search"
              className="search-input"
            />
          </div>
        </div>
        <hr />
        <ul className="all-passwords-data">
          <li>No Passwords</li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        {this.onAddNewPassword()}
        {this.onSavesPassword()}
      </div>
    )
  }
}

export default App

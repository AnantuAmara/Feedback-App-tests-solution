// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onEmojiClicking = () => {
    this.setState({isEmojiClicked: true})
  }

  renderAuthContainer = () => {
    const {isEmojiClicked} = this.state
    const {resources} = this.props

    if (isEmojiClicked === false) {
      return (
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-container">
            {resources.emojis.map(each => (
              <li key={each.id}>
                <img
                  src={each.imageUrl}
                  className="emoji"
                  alt={each.name}
                  onClick={this.onEmojiClicking}
                />
                <p className="para">{each.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="card-container">
        <img src={resources.loveEmojiUrl} className="emoji" alt="love emoji" />
        <h1 className="head-1">Thank You!</h1>
        <p className="para-1">
          We will use your feedback to improve our customer to support
          performance.
        </p>
      </div>
    )
  }

  render() {
    const {resources} = this.props
    return <div className="container">{this.renderAuthContainer()}</div>
  }
}

export default Feedback

// Write your code here.

import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswerText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onToggleIsActive}>
        <img src={image} alt={altText} className="show-hide-icon" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="faq-heading">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem

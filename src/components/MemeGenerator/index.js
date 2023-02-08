import {Component} from 'react'
import {MemeDisplay, Para} from './styledComponents'
import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    dataSubmitted: false,
  }

  onOptionSelection = e => {
    this.setState({fontSize: e.target.value})
  }

  onTopTextChange = e => {
    this.setState({topText: e.target.value})
  }

  onBottomTextChange = e => {
    this.setState({bottomText: e.target.value})
  }

  onImageTextChange = e => {
    this.setState({imageUrl: e.target.value})
  }

  memeDataSubmission = e => {
    e.preventDefault()
    this.setState({dataSubmitted: true})
  }

  render() {
    const {fontSize, imageUrl, topText, bottomText, dataSubmitted} = this.state
    console.log(fontSize, imageUrl, topText, bottomText)
    return (
      <div className="main-container">
        <h1 className="meme-main-heading">Meme Generator</h1>
        <div className="form-and-meme-display-container">
          <form className="form-container">
            <div className="label-and-input-container">
              <label htmlFor="imageUrl" className="label">
                Image URL
              </label>
              <input
                onChange={this.onImageTextChange}
                placeholder="Enter the Image URL"
                id="imageUrl"
                type="text"
                className="input-field"
              />
            </div>
            <div className="label-and-input-container">
              <label htmlFor="topText" className="label">
                Top Text
              </label>
              <input
                onChange={this.onTopTextChange}
                placeholder="Enter the Top Text"
                id="topText"
                type="text"
                className="input-field"
              />
            </div>
            <div className="label-and-input-container">
              <label htmlFor="bottomText" className="label">
                Bottom Text
              </label>
              <input
                onChange={this.onBottomTextChange}
                placeholder="Enter the Bottom Text"
                id="bottomText"
                type="text"
                className="input-field"
              />
            </div>
            <div className="label-and-input-container">
              <label htmlFor="bottomText" className="label">
                Font Size
              </label>
              <select
                onChange={this.onOptionSelection}
                className="drop-down-input-field"
              >
                {fontSizesOptionsList.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={this.memeDataSubmission}
              type="submit"
              className="generate-button"
            >
              Generate
            </button>
          </form>
          {dataSubmitted && (
            <MemeDisplay data-testid="meme" imageUrl={imageUrl}>
              <Para fontSize={fontSize}>{topText}</Para>
              <Para fontSize={fontSize}>{bottomText}</Para>
            </MemeDisplay>
          )}
        </div>
      </div>
    )
  }
}

export default MemeGenerator

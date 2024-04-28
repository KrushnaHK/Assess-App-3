import './index.css'

const Question = props => {
  const {questionDetails} = props
  const {id, options, optionType, questionText} = questionDetails

  const renderFourOption = option => <li className="options">{option.text}</li>

  const renderImageOption = option => (
    <img src={option.image_url} alt={option.text} />
  )

  const renderSelectOption = option => (
    <option value={option.text}>{option.text}</option>
  )

  const renderOption = () => {
    switch (optionType) {
      case 'DEFAULT':
        return options.map(eachOption => renderFourOption(eachOption))
      case 'IMAGE':
        return options.map(eachOption => renderImageOption(eachOption))
      case 'SINGLE_SELECT':
        return (
          <select>
            {options.map(eachOption => renderSelectOption(eachOption))}
          </select>
        )
      default:
        return 'Hi'
    }
  }

  return (
    <div>
      <li className="quetsion">
        <h1>{questionText}</h1>
        {renderOption()}
      </li>
    </div>
  )
}

export default Question

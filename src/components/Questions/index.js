import Question from '../Question'

const Questions = props => {
  const {questionList} = props
  return (
    <div>
      <ul>
        {questionList.map(eachQuestion => (
          <Question questionDetails={eachQuestion} key={eachQuestion.id} />
        ))}
      </ul>
      <button className="button" type="button">
        Start Assessment
      </button>
    </div>
  )
}

export default Questions

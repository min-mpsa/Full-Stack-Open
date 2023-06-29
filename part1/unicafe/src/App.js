import { useState } from 'react'

const Button = ({handler, text}) => (
  <button onClick={handler}>{text}</button>
)

const Feedback = ({increaseGood, increaseNeutral, increaseBad}) => (
    <div>
      <h3>Give Feedback</h3>
      <Button handler={increaseGood} text="Good" />
      <Button handler={increaseNeutral} text="Neutral" />
      <Button handler={increaseBad} text="Bad" />
    </div>
)


const StatisticLine = ({text, value}) => (
    <tr>
      <td><p>{text}</p></td>
      <td><p>{value}</p></td>
    </tr>
)

const Statistics = ({goodScore, neutralScore, badScore}) => {

  let totalScore = goodScore + neutralScore + badScore
  
  let averageScore = totalScore !== 0
  ? (goodScore + badScore*-1)/totalScore
  : 0

  let positivePercentage = totalScore !== 0
  ? ((goodScore/totalScore)*100) + '%'
  : '0%'


  if (totalScore === 0) 
    return (
      <div>
        <h3>Statistics</h3>
        <p>No feedbacks given</p>
      </div>
    )
  return (
      <div>
        <h3>Statistics</h3>
        <table>
          <tbody>
            <StatisticLine text="Good" value={goodScore} />
            <StatisticLine text="Neutral" value={neutralScore} />
            <StatisticLine text="Bad" value={badScore} />
            <StatisticLine text="All" value={totalScore} />
            <StatisticLine text="Average" value={averageScore} />
            <StatisticLine text="Positive" value={positivePercentage} />
          </tbody>
        </table>
      </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good => good + 1)
  const increaseNeutral = () => setNeutral(neutral => neutral + 1)
  const increaseBad = () => setBad(bad => bad + 1)

  return (
    <div>
      <Feedback 
        increaseGood={increaseGood}
        increaseNeutral={increaseNeutral}
        increaseBad={increaseBad} 
      />
      <Statistics
        goodScore={good}
        neutralScore={neutral}
        badScore={bad}
      />
    </div>
  )
}

export default App
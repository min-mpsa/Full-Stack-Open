const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({part, exercises}) => (
  <p>{part} {exercises}</p>
)

const Content = ({partInfo}) => {
  return (
    <div>
      <Part part={partInfo[0].part} exercises={partInfo[0].exercises}/>
      <Part part={partInfo[1].part} exercises={partInfo[1].exercises}/>
      <Part part={partInfo[2].part} exercises={partInfo[2].exercises}/>
    </div>
  )
}

const Total = ({partInfo}) => (
  <p>Number of exercises {partInfo[0].exercises+partInfo[1].exercises+partInfo[2].exercises}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const partInfo = [
    {
      "part": "Fundamentals of React",
      "exercises": 10
    },
    {
      "part": "Using props to pass data",
      "exercises": 7
    },
    {
      "part": "State of a component",
      "exercises": 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content partInfo={partInfo} />
      <Total partInfo={partInfo} />
    </div>
  )
}

export default App;

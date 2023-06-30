const Header = ({course}) => <h1>{course}</h1>
  
  
const Part = ({part, exercises}) => <p>{part} {exercises}</p>

const Content = ({parts}) => (
    <div>
    {parts.map(part => 
        <Part key={part.id} part={part.name} exercises={part.exercises} />
    )}
    </div>
)
  
const Total = ({parts}) => (<p>Number of exercises {
    parts.reduce((accumulator, currentValue) => 
        accumulator + currentValue.exercises
    , 0)}</p>
)
  
  const Course = ({course}) => (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

  export default Course
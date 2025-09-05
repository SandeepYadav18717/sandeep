import { Card } from "../Cards/Cards"
import "./Skills.css"


function Skills() {
  return (
    <>
      <h1> Technologies & Tools</h1>
      <div id="card-skill">
        <Card
          className="card-skill-1"
          title={<>⚛️</>}
          description="React"
        />
        <Card
          className="card-skill-2"
          title={<>🌐</>}
          description="HTML / CSS"
        />
        <Card
          className="card-skill-3"
          title={<>📜</>}
          description="JavaScript"
        />
        <Card
          className="card-skill-4"
          title={<>🗄️</>}
          description="SQL"
        />
      </div>

      {/* another div line 2 */}
      <div id="card-skill">
        <Card
          className="card-skill-1"
          title={<>🐼</>}
          description="Pandas"
        />
        <Card
          className="card-skill-2"
          title={<>🐍</>}
          description="Python"
        />
        <Card
          className="card-skill-3"
          title={<>🐙</>}
          description="github"
        />
        <Card
          className="card-skill-4"
          title={<>🛠️</>}
          description="Tools"
        />
      </div>
    </>
  )
}

export default Skills;

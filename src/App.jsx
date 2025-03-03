
import './App.css'
import { Table } from "./Table";


/*
const testData = [
  {room: "1", time: "12:00", date: "1/1/2000" },
  {room: "2", time: "12:00", date: "1/1/2000" },
  {room: "3", time: "12:00", date: "1/1/2000" }
]
*/

function App() {
  return <Table />;

  /*
  return (
    <div className="card">
      <table>
        <tr>
          <th>Room Number</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
        {testData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.room}</td>
              <td>{val.time}</td>
              <td>{val.date}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
    */
}

export default App

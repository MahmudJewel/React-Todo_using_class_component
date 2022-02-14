import "./App.css";
import { Component } from "react";
import { Showdata } from "./components/Showdata";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Jewel",
      taskList: [
        { action: "Reading favourite Book", done: true },
        { action: "Walking", done: false },
        { action: "Do something funny", done: false },
        { action: "Codingggggg", done: false },
      ],
      newTodo: "",
    };
  }

  showData = () =>
    this.state.taskList.map((task) => (
      <Showdata key={task.action} task = {task} abc={this.toggleDone}/>
    ));

  toggleDone = (task) =>
    this.setState({
      taskList: this.state.taskList.map((item) =>
        item.action === task.action ? { ...item, done: !item.done } : item
      ),
    });

  updateValue = (e) => {
    // console.log('new item', e.target.value);
    this.setState({ newTodo: e.target.value });
    // console.log(this.state.newTodo);
  };

  addItem = () => {
    if(this.state.newTodo.length != ''){
    this.setState({
      taskList: [
        ...this.state.taskList,
        { action: this.state.newTodo, done: false },
      ],
    });}
  };

  render = () => (
    <div className="App ">
      <div className="container wrapper">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <h2 className="text-primary mt-3 mb-3">Hello world</h2>
            {/* <h4 className="text-primary">{this.state.username}</h4> */}
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className='form-control'
              value={this.state.newTodo}
              onChange={this.updateValue}
            />
          </div>
          <div className="col-md-8">
            <button onClick={this.addItem} className="btn btn-primary m-3 p-2 px-4">
              Add
            </button>
          </div>
          {/* <div>{this.showData()} hellooo</div> */}
          <div className="col-md-8">
            <table className='table'>
              <thead>
                <th className='text-start p-4'>Task</th>
                <th>actions</th>
              </thead>

              <tbody>{this.showData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default App;

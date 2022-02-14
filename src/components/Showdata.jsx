import React, { Component } from 'react';
export class Showdata extends Component {
    render = () =>(
        <tr>
        <td className="text-start p-2">{this.props.task.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.task.done}
            onChange={() => this.props.abc(this.props.task)}
          />
        </td>
      </tr>
    );
}
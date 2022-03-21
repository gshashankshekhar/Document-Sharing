import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }
  componentDidMount() {
    fetch("")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)

      return (
        <div className="container mt-3">
          <h2>Documents List</h2>
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>S.no.</th>
                <th>User Name</th>
                <th>Document</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.username}</td>
                  <td>{item.docname}</td>
                  <td>{ }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
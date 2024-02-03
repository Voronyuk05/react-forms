import { Component } from "react"
import { Form } from "../Form/Form"
export class App extends Component {
  state = {
    data: ''
  }

  getFormData = (data) => {
    this.setState({data})
  }

  render () {
    return (
      <Form onSubmit={this.getFormData} />
    )
  }
};

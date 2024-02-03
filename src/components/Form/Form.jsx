import { Component } from "react";

export class Form extends Component {
    state = {
        whoIs: '',
        member: '',
        license: ''
      }
    
      handleNameChange = (e) => {
        this.setState({
          whoIs: e.currentTarget.value
        })
      }
    
      handleRadioChange = (e) => {
        this.setState({
          member: e.currentTarget.name
        })
      }
    
      handleCheckboxChange = () => {
        this.setState(prevState => ({
          license: !prevState.license
        }))
      }

      handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
      }
    
      render () {
        return (
          <div>
            <form action="" onSubmit={this.handleSubmit}>
              <label htmlFor="">
                <input type="text" name="whoIs" value={this.state.whoIs} onChange={this.handleNameChange}/>
              </label>
              <hr />
              <label htmlFor="">
                Учень
                <input type="radio" name="student" value={this.state.member} onChange={this.handleRadioChange} checked={this.state.member === 'student'}/>
              </label>
              <label htmlFor="">
                Вчитель
                <input type="radio" name="profesor" value={this.state.member} onChange={this.handleRadioChange} checked={this.state.member === 'profesor'}/>
              </label>
              <hr />
              <label htmlFor="">
              <input type="checkbox" value={this.state.license} onChange={this.handleCheckboxChange} checked={this.state.license} />
              Погоджуюсь на участь в конферкнсії
              </label>
              <hr />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
        )
      }
}
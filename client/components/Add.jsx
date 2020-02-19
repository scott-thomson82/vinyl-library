import React from 'react'
import { addRecord } from '../apis/records'

class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: "",
      album: "",
      genre: ""
      
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addRecord(this.state)

  }

  render() {

    return(
      <React.Fragment>
        <div className="add-form">
          <form onSubmit={this.handleSubmit}> 
            <div>
            <input type="text" name="artist" placeholder="Artist" onChange={this.handleChange} />
            
            </div> 

            <div>
            <input type="text" name="album" placeholder="Album" onChange={this.handleChange}/>
            
            </div> 

            <div>
            <input type="text" name="genre" placeholder="Genre" onChange={this.handleChange}/>
            
            </div> 
            <div>
            <input type="submit" value="submit"/>
            </div>
    <h1>{this.state.artist} {this.state.album} {this.state.genre}</h1>
          </form>
        </div>

      </React.Fragment>
      
    )
  }


}

export default Add
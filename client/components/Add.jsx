import React from 'react'


class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {

    return(
      <React.Fragment>
        <div className="add-form">
          <form> 
            <div>
            <input type="text" name="artist" placeholder="Enter Artist" />
            <input type="submit"/>
            </div> 

            <div>
            <input type="text" name="album" placeholder="Enter Album" />
            <input type="submit"/>
            </div> 

            <div>
            <input type="text" name="genre" placeholder="Enter Genre" />
            <input type="submit"/>
            </div> 
          </form>
        </div>

      </React.Fragment>
      
    )
  }


}

export default Add
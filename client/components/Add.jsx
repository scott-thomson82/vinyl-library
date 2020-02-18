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
            <input type="text" name="artist" placeholder="Artist" />
            
            </div> 

            <div>
            <input type="text" name="album" placeholder="Album" />
            
            </div> 

            <div>
            <input type="text" name="genre" placeholder="Genre" />
            
            </div> 
            <div>
            <input type="submit" value="submit"/>
            </div>
          </form>
        </div>

      </React.Fragment>
      
    )
  }


}

export default Add
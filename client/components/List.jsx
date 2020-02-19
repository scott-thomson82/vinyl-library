import React from 'react'
import {connect} from 'react-redux'
import {fetchRecords} from '../actions/index'




class List extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecords())
  }
  render() {
    

    return (
      <>
        <div className="record-list">
          <h1>Your Current collection! </h1>
        </div>

        {this.props.records.length > 0 &&
        <ul>
          {this.props.records.map(record => {
            return (
              <li key={record.id}>{record.artist}, {record.album}, {record.genre}</li>
            )
          }
          )}
        </ul>}
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    records: globalState.records
  }
}

export default connect(mapStateToProps)(List)
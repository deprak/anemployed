import React, { Component } from 'react'
import { setIsLoading, setError, fetchJobs, fetchJobsEmpty } from '../store/actions'
import { connect } from 'react-redux'

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: value => dispatch(setIsLoading(value)),
    setError: errorMessage => dispatch(setError(errorMessage)),
    fetchJobs: (jobQuery, page) => dispatch(fetchJobs(jobQuery, page)),
    fetchJobsEmpty: () => dispatch(fetchJobsEmpty())
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      job: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      job: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchJobsEmpty()
    this.props.fetchJobs(this.state.job, 1)
  }

  render() {
    return (
      <>
        <div className="w-full mx-auto border mt-20 mb-4 shadow-lg rounded p-2">
          <div>
            <h3 className="font-bold text-gray-700">Find Jobs</h3>
            <form
              onSubmit={this.handleSubmit}
              className="bg-white flex rounded px-8 p-2 mb-4">
              <div className="w-full mr-2">
                <input
                  id="job"
                  type="text"
                  value={this.state.job}
                  onChange={this.handleChange}
                  placeholder="Eg. Software Developer"
                  className="shadow h-full appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <button
                type="submit"
                className="rounded p-2 mt-auto bg-blue-400 text-white hover:bg-blue-500">
                Search
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBox)
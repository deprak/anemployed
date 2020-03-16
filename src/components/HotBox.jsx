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

function mapStateToProps(state) {
  return {
    hotJobs: state.status.hotJobs
  }
}

class HotBox extends Component {
  constructor(props) {
    super(props)

    this.handleClick= this.handleClick.bind(this)
  }

  handleClick(job) {
    this.props.fetchJobsEmpty()
    this.props.fetchJobs(job)
  }

  componentDidMount() {
    this.props.fetchJobsEmpty()
    this.props.fetchJobs('PHP')
  }
  render() {
    return (
      <>
        <div className="w-64 mx-auto border mt-20 mb-4 shadow-lg rounded p-2">
          <div>
            <h3 className="font-bold text-gray-700 mb-2">Hot Jobs</h3>
            <div className="flex text-center">
              <div className="mx-auto flex">
                {
                  this.props.hotJobs.map(job => {
                    return <p className="bg-blue-300 mx-2 px-3 py-1 rounded-full text-white font-bold cursor-pointer hover:bg-blue-400"
                    onClick={() => this.handleClick(job)} key={job}>{job}</p>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotBox)
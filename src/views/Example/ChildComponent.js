import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJob: false
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob
    });
  };

  handleRemoveJob = (job) => {
    this.props.removeJob(job);
  };

  render() {
    let arrJobs = this.props.arrJobs;
    let showJob = this.state.showJob;
    return (
      <div>
        {showJob ? (
          <button className="btn-show" onClick={() => this.handleShowHide()}>
            Show list
          </button>
        ) : (
          <>
            <button className="btn-hide" onClick={() => this.handleShowHide()}>
              Hide list
            </button>
            <div className="job-list">
              {arrJobs.map((job, i) => {
                return (
                  <div key={job.id}>
                    {job.name} - {job.salary}${" "}
                    <span onClick={() => this.handleRemoveJob(job)}> x</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}
export default ChildComponent;

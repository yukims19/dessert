import React, { Component } from "react";

class ProjectList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.projectList);
    return (
      <div className="project-list">
        {this.props.projectList.map(project => {
          return <a href={"/" + project}>{project}</a>;
        })}
      </div>
    );
  }
}

export default ProjectList;

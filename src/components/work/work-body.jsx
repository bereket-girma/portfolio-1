import React from 'react';

import WorkFilters from './work-filters.jsx';
import WorkItem from './work-item.jsx';

import { works } from "../../config";

export default class WorkBody extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.generateFilters(),
      works: works
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleAllFilterChange = this.handleAllFilterChange.bind(this);
    this.getFilteredWorkItems = this.getFilteredWorkItems.bind(this);
  }
  generateFilters() {
    var filters = {};
    works.forEach((work) => {
      work.categories.forEach((category) => {
        if (!Object.keys(filters).includes(category)) {
          filters[category] = true
        }
      })
    })
    return filters
  }
  getFilteredWorkItems() {
    return this.state.works.map((w, i) => {
      var match = false;
      w.categories.forEach((cat)=> {
        if(this.state.filters[cat]) {
          match = true;
        }
      })
      if(match) {
        return <WorkItem key={i} work={w}/>
      }
    });
  }
  handleFilterChange(cat, value) {
    var filters = Object.assign({}, this.state.filters);
    filters[cat] = value;
    this.setState({ filters })
  }
  handleAllFilterChange(cat, value) {
    var filters = Object.assign({}, this.state.filters)
    Object.keys(this.state.filters).forEach((fil) => {
      filters[fil] = value;
    });
    this.setState({ filters });
  }
  render() {
    return (
      <div className="pt-content-card__body flex flex-cross-center">
        <WorkFilters filters={this.state.filters} handleFilterChange={this.handleFilterChange} handleAllFilterChange={this.handleAllFilterChange} />
        <div className="pt-content-card__body__work-items">
          {this.getFilteredWorkItems()}
        </div>
      </div>
    );
  }
}
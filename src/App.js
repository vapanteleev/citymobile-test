import React, { Component } from "react";
import Table from "./Table/Table";
import _ from "lodash";
import DetailRowView from "./DetailRowView/DetailRowView";
import TableSearch from "./TableSearch/TableSearch";
import './index.css'

class App extends Component {
  state = {
    
    data: [],
    sort: "asc",
    sortField: "",
    row: null,
    search: "",
    noResults:false
  };

  async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
     console.log(data.cars[0]);
    this.setState({
      isLoading: false,
      data: data.cars
    });
  }
  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(cloneData, sortField, sort);

    this.setState({
      data,
      sort,
      sortField,
    });
  };
  onRowSelect = (row) => {
    this.setState({ row });
  };
  searchHandler = (search) => {
    console.log(search)
    this.setState({
      search
     
    });
  };
 

 
  getFilteredData() {
    const { data, search } = this.state;

    if (!search) {
      return data;
    }
    var result = data.filter((item) => {
      return (
        item["mark"].toLowerCase().includes(search.toLowerCase()) ||
        item["model"].toLowerCase().includes(search.toLowerCase())
        
      );
    });
    if (!result.length) {
      result = []
      
    }
    return result;
  }
  componentDidMount() {
    this.fetchData(`https://city-mobil.ru/api/cars`);
  }
  
  render() {





    const filteredData = this.getFilteredData();
    //debugger;



    return (
      <>
      
        <header className="header"><h1>Header</h1></header>
        <section className="sidebar"><h1>Sidebar</h1></section>


      <div className="container">
        
        
          <React.Fragment>
            <TableSearch onSearch={this.searchHandler} />
            <Table
              data={filteredData}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
              onRowSelect={this.onRowSelect}
            />
          </React.Fragment>
       
        
        {this.state.row ? <DetailRowView car={this.state.row} /> : null}
                

        </div>
        <footer className="footer"><h1>Footer</h1></footer>
        
       
      </>
    );
  }
}

export default App;

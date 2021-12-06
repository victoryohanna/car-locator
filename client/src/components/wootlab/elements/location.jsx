import React, { Component } from "react";
import axios from "axios";

const URL = "http://localhost:4000";

class VehicleLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regNumber: "",
      locations: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let formData = { regNumber: this.state.regNumber };

    await axios.post(URL + "/list-locations", formData).then((response) => {
      //console.log(response)
      if (response.status !== 200) {
        alert("Data not found");

        this.setState({ regNumber: "" });
      } else {
        this.setState({ locations: response.data.response });
        console.log(this.state.locations);
      }
    });
  };

  render() {
    const data = this.state.locations;

    return (
      <div className="container">
        <div className="d-flex justify-content-center mb-3">
          <h1>Vehicle Location</h1>
        </div >
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  name="regNumber"
                  placeholder="Registration Number"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={this.state.regNumber}
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-outline-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="location-table mt-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Vehicle Location</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                <th scope="col">Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th> {item.locationName} </th>
                    <td>{item.latitude}</td>
                    <td>{item.longitude}</td>
                    <td>{item.date} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default VehicleLocation;
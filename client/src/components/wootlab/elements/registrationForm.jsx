import React, { Component } from "react";
import axios from "axios";

const URL = "http://localhost:4000"

class RegistrationForm extends Component {
  constructor(props){
    super(props)
    this.state={
      regNumber : " ",
      vehicleMake : " ",
      vehicleModel : " ",
      vehicleColor : " ",
      engineCapacity : " ",
      chasisNumber : " "
    }

  }

  handleChange = (e)=>{
    this.setState({[e.target.name] : e.target.value});

    //console.log(this.state)
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    
    const Id = Math.floor(Math.random() * 100000) + 1;
    const vehicle = {
      vehicleId : Id,
      regNumber : this.state.regNumber,
      vehicleMake : this.state.vehicleMake,
      vehicleModel : this.state.vehicleModel,
      vehicleColor : this.state.vehicleColor,
      engineCapacity : this.state.engineCapacity,
      chasisNumber : this.state.chasisNumber
    }

   await axios.post(URL + "/register", vehicle).then((response)=>{
    if(!response) {alert("Regitration Failed")} 

    alert("Vehicle registerred");
    this.setState({
      regNumber : " ",
      vehicleMake : " ",
      vehicleModel : " ",
      vehicleColor : " ",
      engineCapacity : " ",
      chasisNumber : " "
    })
    
   })

  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center mt-3">
          <h2>Vehicle Registration Form</h2>
        </div>
        <div className="card col-md-8 mx-auto mt-3">
          <div className="card-body">
            <form onSubmit={this.handleSubmit} novalidation="true">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="regNum">Plate Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="regNum"
                      name="regNumber"
                      value={this.state.regNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="make">Vehicle Make</label>
                    <input
                      type="text"
                      className="form-control"
                      id="make"
                      name="vehicleMake"
                      value = {this.state.vehicleMake}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input type="text" 
                    className="form-control"
                    id="model"
                    name="vehicleModel"
                    value = {this.state.vehicleModel}
                    onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input type="text"
                    className="form-control"
                    id="color"
                    name="vehicleColor"
                    value = {this.state.vehicleColor}
                    onChange={this.handleChange} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="capacity">Engine Capacity</label>
                    <input type="text"
                    className="form-control" 
                    id="capacity"
                    name="engineCapacity" 
                    value = {this.state.engineCapacity}
                    onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="chasis">Chasis Number</label>
                    <input type="text"
                    className="form-control"
                    id="chasis"
                    name="chasisNumber"
                    value = {this.state.chasisNumber}
                    onChange={this.handleChange} 
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                  <button className="btn btn-primary" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
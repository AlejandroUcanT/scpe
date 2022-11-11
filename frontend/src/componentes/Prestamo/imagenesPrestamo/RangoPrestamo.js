import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListaPrestamo from './ListaPrestamo';

class controlPrestamo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fechaInicial: "",
      fechaCorte: "", 
      filtro: "", 
      argumento: ""
    }
  }

  render(){
    return(
      <section className = "App-section">
        <div class="form-row justify-content-center">
          <div class="form-group col-md-6">
            <label>Fecha Inicial</label>
            <input type="date" class="form-control"  
              placeholder="dd-mm-aaaa" 
              onChange={(value)=> this.setState({fechaInicial:value.target.value})}
            />
          </div>

          <div class="form-group col-md-6">        
            <label>Fecha de Corte</label>
            <input type="date" class="form-control"  
              placeholder="dd-mm-aaaa" 
              onChange={(value)=> this.setState({fechaCorte:value.target.value})}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={()=>this.findPrestamos()}>Consultar</button> 
        </div>
      </section>
    );
  }

  findPrestamos(){
    if (this.state.fechaInicial === "") {
      alert("Ingrese la fechaInicial");
    }
    else if (this.state.fechaCorte === "") {
      alert("Ingrese la fechaCorte");
    }else{
      alert(this.state.fechaInicial)
      alert(this.state.fechaCorte)
      
      const direccionUrl = "http://localhost:3000/prestamo/rango";
      
      const datosConsulta = {
        fechaInicial: this.state.filtro,
        A: this.state.argumento
      }  
      
      axios.post(direccionUrl, datosConsulta)
      .then(res => {
        if(res.data.success) {
          alert('Exito')
          const data = res.data.data
          this.setState({listPrestamo: data})
        }else{
        alert("Error web service")
        }
      })
      .catch(err => {
        alert("Error server" + err)
      })
    }
  }
}

export default controlPrestamo;
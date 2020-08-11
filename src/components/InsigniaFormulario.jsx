import React from 'react';

class InsigniaFormulario extends React.Component{
    state = {
       /*  firstName: "Sebas",
        lastName: "Restrepo",
        email: "sebaxrpo@gmail.com",
        ocupacion: "BackEnd",
        twitter: "none" */
    };
    //Event Form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
        console.log(this.state)
    }
    //Event Input
    /* handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    } */
    //Event Button
    handleClick = e => {
        console.log('Botón presionado')
    }
    render(){
        return(
            <div>
                <h1>Formulario de Registro</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Nombre
                        </label>
                        <input onChange={this.props.onChange} className="form-control" name="firstName" type="text" value={this.props.formValues.firstName}/>
                    </div>                    
                    <div className="form-group">
                        <label>
                            Apellido
                        </label>
                        <input onChange={this.props.onChange} className="form-control" name="lastName" type="text" value={this.props.formValues.lastName}/>
                    </div>                    
                    <div className="form-group">
                        <label>
                            Email
                        </label>
                        <input onChange={this.props.onChange} className="form-control" name="email" type="email" value={this.props.formValues.email}/>
                    </div>                    
                    <div className="form-group">
                        <label>
                            Ocupación
                        </label>
                        <input onChange={this.props.onChange} className="form-control" name="ocupacion" type="text" value={this.props.formValues.ocupacion}/>
                    </div>                    
                    <div className="form-group">
                        <label>
                            Twitter
                        </label>
                        <input onChange={this.props.onChange} className="form-control" name="twitter" type="text" value={this.props.formValues.twitter}/>
                    </div>   
                    <button onClick={this.handleClick} className="btn btn-success">Guardar</button>                 
                </form>
            </div>
        )
    }
}

export default InsigniaFormulario;
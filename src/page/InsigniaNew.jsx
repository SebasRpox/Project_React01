import React from 'react';
import "../styles/insigniaNew.css";
import Navbar from '../components/Navbar.jsx';
import Insignia from '../components/Insignia.jsx';
import InsigniaFormulario from '../components/InsigniaFormulario.jsx';
import LogoHeader from '../images/logo-poli.png';


class InsigniaNew extends React.Component{
    state = {form: { 
        firstName: "",
        lastName: "",
        email: "",
        ocupacion: "",
        twitter: ""}}
    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value
        this.setState({
            form: nextForm
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={LogoHeader} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Insignia
                            firstName={this.state.form.firstName}
                            lastName={this.state.form.lastName}
                            email={this.state.form.email}
                            ocupacion={this.state.form.ocupacion}
                            twitter={this.state.form.twitter}
                            avatar="https://avatars2.githubusercontent.com/u/65957714?s=460&u=06a3eacc79cd0c282bea62ec4e8c9fcf6a18fa22&v=4t"/>
                        </div>
                        <div className="col-6">
                            <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InsigniaNew;
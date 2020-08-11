import React from 'react';
import '../styles/Insignia.css';
import Logo from '../images/xd.png';

class Insignia extends React.Component{
    render(){
        //const firtsName ="Sebas";
        //const lastName = "Restrepo";
        return(
            <div className="Insignia">
                <div className="Insignia_header">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="Insignia__section_name">
                    <img className="Insignia__avatar" src={this.props.avatar} alt="Avatar"/>
                    <div className="Insignia__section_text">
                        <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                        <p>{this.props.email}</p>
                    </div>
                </div>
                <div className="Insignia__section_info">
                    <h3>{this.props.ocupacion}</h3>
                <div>
                    @{this.props.twitter}
                </div>
                </div>
                <div className="Insignia__footer">
                    Derechos reservados
                </div>
            </div>
        )
    }
}

export default Insignia; 


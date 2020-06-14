import React, { Component } from 'react'

 class ClientForm extends Component {
     state={nouveauClient:''}
     handleChange=(event)=>{
        const value=event.currentTarget.value;
        this.setState({nouveauClient:value});
        }
     handleSubmit=(event)=>{
         event.preventDefault();
         const id=new Date().getTime();
         const nom=this.state.nouveauClient;
         this.props.onClientAdd({id,nom});
         this.setState({ nouveauClient:""});
     }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
        <input  onChange={this.handleChange} value={this.state.nouveauClient} type="text" placeholder="Ajouter un client"/>
         <button>Confirmer</button>
      </form>  
            </div>
        )
    }
}
export default ClientForm;
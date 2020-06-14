import React from 'react';
import Client from './Client';
import Counter from './Counter';
import ReactDOM from 'react-dom';
import ClientForm from './ClientForm';
class App extends React.Component{
  nouveauClient=''
    state={
      clients:[
        {id:1,nom:"Lior Chamla"},
        {id:1,nom:"Magali Pernin"},
        {id:3,nom:"Joseph Durand"}],
    }
    
    handleAdd=(client)=>{
    const clients=[...this.state.clients];
    clients.push(client);
    this.setState({clients});
    }
    handleDelete=(id)=>{
      const clients=[...this.state.clients];
      const index=clients.findIndex(client=>client.id===id);
      clients.splice(index,1);
      this.setState({clients:clients});
    }
    
    
  render(){
    const title="Liste des Clients"
  return (
    <div className="App">
      <h1>{title}</h1>
      <Counter/>
      <ul>
        {this.state.clients.map(client=>
        <Client details={client} onDelete={this.handleDelete}/>)} 
      </ul>
     <ClientForm onClientAdd={this.handleAdd}/>
    </div>
  );
}}
export default App;

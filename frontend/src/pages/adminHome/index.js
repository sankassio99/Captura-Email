
import React ,{ useState } from 'react';
import './index.css';
import api from '../../services/api.js'

class App extends React.Component {

  constructor(props) {
    
    super(props)
        this.state = {
          peoples: []
        }
    }

    
  componentDidMount(){
    api.get('getData').then(response=> {
      const dados = response.data ;
      // for (let i of dados) {
        // console.log("dados: "+i.nome);
        this.setState({
          peoples:dados
        })
      
    });  
  }
  
  render() {

    return (
      <body className="body"> 
        <header>
            <h1>Página de Gerenciamento dos E-mails</h1>
        </header>
        <section>
            <table className="table">
              <tbody className="tbody">
                <tr>
                  <th>id</th><th>nome</th><th>E-mail</th><th>Telefone</th><th>Data Criação</th>
                </tr>
                
                  {
                    this.state.peoples.map(peaple => {
                      return (
                        <tr>
                          <td key={peaple.id}>{peaple.id}</td>
                          <td key={peaple.nome}>{peaple.nome}</td>
                          <td key={peaple.email}>{peaple.email}</td>
                          <td key={peaple.whatsapp}>{peaple.whatsapp}</td>
                          <td key={peaple.createdAt}>{peaple.createdAt}</td>
                        </tr>
                      )
                    })
                  }
                
              </tbody>
            </table>
        </section>
        <footer>

        </footer>
    </body>
    )
  }
}

export default App ;
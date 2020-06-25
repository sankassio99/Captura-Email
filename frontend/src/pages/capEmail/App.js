import React ,{ useState } from 'react';
import './home.css';
import api from '../../services/api.js'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const history = useHistory()

  async function Register(e) {
    e.preventDefault() ;
    

    const data = {
      name,
      email,
      whatsapp
    }

    try {
      const response = await api.post('msg', data);

      alert(" "+response.data);

      history.push('/sentEmail');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register">
      <header className="header"> 
        <h1>Preencha o formulário e ganhe esse e-book grátis</h1>
      </header>
      <div className="section">

        <img src="ebook.png"className="img"/>
        <form onSubmit={Register} className="form">
          <h4>Receba no seu email</h4>
          <input type="text" className="nome" placeholder="Name" 
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
          <input type="text" placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>
          <input type="text" placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          ></input>
          <Button type="submit" >Enviar Email</Button>
        </form>
      </div>
      <div className="conteudo"> 
        
      </div>
    </div>
  );
}




import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1>Hum, parece que essa pagina nao existe!</h1><br />

      <span>Você pode estar procurando:</span>
      <Link to="/" >Home</Link> <br/>
      <Link to="/contatos">Contatos</Link><br />
      <Link to="/sobre">Sobre</Link>

    </div>
  );
 }
import { Container, Content } from './styles';
import logo from '../../assets/images/logo.svg';

export function Header(){
  return (
    <Container>
      <Content>
        <div>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img alt='' src={logo} />
      </Content>
    </Container>
  );
}

import { useEffect, useState } from 'react';
import { fakeOrders } from '../../Database/Orders';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../Types/Order';
import { Container } from './styles';

export function Orders(){
  const [orders, setOrders] = useState<Order[]>([]);

  async function fakeRequestLoadOrders(){
    setOrders(fakeOrders);
  }

  useEffect(() => {
    fakeRequestLoadOrders();
  },[]);


  const ordersWaiting = orders.filter((order) => order.status === 'WAITING');
  const ordersWorking = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const ordersDone = orders.filter((order) => order.status === 'COMPLETED');

  return(
    <Container>
      <OrdersBoard icon="⏱" title="Fila de espera" orders={ordersWaiting}/>
      <OrdersBoard icon="⏳" title="Preparando" orders={ordersWorking}/>
      <OrdersBoard icon="🍕" title="Pronto" orders={ordersDone}/>
    </Container>
  );
}

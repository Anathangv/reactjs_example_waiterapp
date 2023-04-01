import { useState } from 'react';
import { OrderModal } from '../OrderModal';
import { Order } from '../Types/Order';
import { Board, OrdersContainer } from './styles';

interface IOrdersBoardProps {
  icon: string,
  title: string,
  orders: Order[]
}

export function OrdersBoard({icon, title, orders}:IOrdersBoardProps){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderSelected, setOrderSelected] = useState<Order | null>(null);

  function handleModalOpen(order: Order){
    setIsModalVisible(arg => !arg);
    setOrderSelected(order);
  }

  function handleModalClose(){
    setIsModalVisible(arg => !arg);
    setOrderSelected(null);
  }

  return(
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={orderSelected}
        onclose={handleModalClose}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {
        orders.length > 0 && (
          <OrdersContainer>
            {orders.map((order) => (
              <button type='button' key={order._id} onClick={() => handleModalOpen(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            ))}
          </OrdersContainer>
        )
      }

    </Board>
  );
}

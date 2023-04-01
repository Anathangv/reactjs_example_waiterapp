import { Actions, ModalBody, OrderDetails, Overlap } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../Types/Order';
import { FormatCurrency } from '../../assets/Utils/FormatCurrency';
import { useEffect } from 'react';

interface IOrderModalProps {
  visible: boolean,
  order: Order | null,
  onclose: () => void,
}

export function OrderModal({visible, order, onclose}:IOrderModalProps){

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        onclose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onclose]);

  if(!visible || !order){
    return null;
  }

  const total = order.products.reduce((totalAcc , {product, quantity}) => totalAcc + (product.price * quantity),0);

  return (
    <Overlap>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onclose}>
            <img src={closeIcon} alt='Ícone para fechar modal'/>
          </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '⏱'}
              {order.status === 'IN_PRODUCTION' && '⏳'}
              {order.status === 'COMPLETED' && '🍕'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Em Espera'}
              {order.status === 'IN_PRODUCTION' && 'Em Preparação'}
              {order.status === 'COMPLETED' && 'Pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className='order-itens'>
            {order.products.map(({_id, product, quantity}) => (
              <div className='item' key={_id}>
                <img src={'https://cdn-icons-png.flaticon.com/512/2819/2819194.png'}/>

                <span className='quantity'>{quantity}x</span>

                <div className='product-details'>
                  <strong>{product.name}</strong>
                  <span>{FormatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total-area">
            <span>Total</span>
            <strong>{FormatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>{'👨‍🍳'}</span>
            <span>Iniciar Produção</span>
          </button>

          <button type='button' className='secundary'>
            <span>Cancelar Pedido</span>
          </button>
        </Actions>
      </ModalBody>
    </Overlap>
  );

}

import styled from 'styled-components';

export const Overlap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;


export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 24px;
    }

    button{
      line-height: 0;
      border: 0;
      background: none;
    }
  }

  .status-container{
    margin-top: 32px;

    small{
      font-size: 14px;
      opacity: 0.8;
    }

    div{
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong{
    opacity: 0.8;
    font-size: 14px;
    font-weight: 500;
  }

  .order-itens{
    margin-top: 16px;

    .item{
      display: flex;

      & + .item{
        margin-top: 16px;
      }

      img{
        width: 60px;
        border-radius: 6px;
      }

      .quantity{
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details{
        margin-left: 4px;

        strong{
          display: block;
          margin-bottom: 4px;
        }

        span{
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total-area {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
      opacity: 0.8;
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .primary{
    background: #333;
    border-radius: 48px;
    border: none;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
  }

  .secundary{
    padding: 12px 24px;
    color: #d73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 16px;
  }
`;

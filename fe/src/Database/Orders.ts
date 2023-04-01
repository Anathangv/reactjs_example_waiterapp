import { Order } from '../components/Types/Order';


export const fakeOrders: Order[] = [
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'description': 'Pizza quatro queijos',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'description': 'Coca cola',
          'imagePath': '1668473462705-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      },
    ],
  },
  {
    '_id': '6372e48cbcd195b0d3d0f7g3',
    'table': '1',
    'status': 'COMPLETED',
    'products': [
      {
        'product': {
          'name': 'Hamburger',
          'description': 'Hamburger completo',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 38,
        },
        'quantity': 1,
        '_id': '6372e48cbcd195b0d3d0f7g4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'description': 'Coca cola',
          'imagePath': '1668473462705-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '6372e48cbcd195b0d3d0f7g5'
      },
    ],
  },
  {
    '_id': '6372e48cbcd195b0d3d0f7d3',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza calabreza',
          'description': 'Pizza quatro queijos',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '6372e48cbcd195b0d3d0f7d4'
      },
      {
        'product': {
          'name': 'Agua',
          'description': 'Agua',
          'imagePath': '1668473462705-coca-cola.png',
          'price': 5,
        },
        'quantity': 1,
        '_id': '6372e48cbcd195b0d3d0f7d5'
      },
    ],
  },
  {
    '_id': '6372e48cbcd195b0d3d0f7s3',
    'table': '3',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Torta (Fatia)',
          'description': 'Torta (Fatia)',
          'imagePath': '1668472896991-quatro-queijos.png',
          'price': 9,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7s4'
      },
    ],
  }
];

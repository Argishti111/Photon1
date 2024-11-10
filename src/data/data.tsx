import LightningIcon from '../Icons/LightningIcon';
import SunIcon from '../Icons/SunIcon';

export const exampleMessages = [
  {
    id: 1,
    messageTitle: 'Hello, World!',
    messageLogo: <SunIcon />,
    messages: [
      {id: 1, message: 'This is a message'},
      {id: 2, message: 'This is a reply'},
    ],
  },
  {
    id: 2,
    messageTitle: 'Goodbye, World!',
    messageLogo: <LightningIcon />,
    messages: [
      {id: 3, message: 'This is another message'},
      {id: 4, message: 'This is another reply'},
    ],
  },
  {
    id: 3,
    messageTitle: 'How are you?',
    messageLogo: <SunIcon />,
    messages: [
      {id: 5, message: 'I am doing well!'},
      {id: 6, message: 'Thank you for asking'},
    ],
  },
  // Add more messages here...
];

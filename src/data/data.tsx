import SunIcon from '../Icons/SunIcon';
import LightningIcon from '../Icons/LightningIcon';
import LimitationIcon from '../Icons/LimitationIcon';
import {View} from 'react-native';

export const exampleMessagesEN = [
  {
    id: 1,
    title: 'Examples',
    logo: (
      <View style={{marginTop: 10}}>
        <SunIcon />
      </View>
    ),
    messages: [
      {id: 1, text: 'Сome up with which cryptocurrencies to buy'},
      {id: 2, text: 'Where is it profitable to sell cryptocurrency'},
    ],
  },
  {
    id: 2,
    title: 'Capabilities',
    logo: (
      <View
        style={{
          width: 42,
          height: 42,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LightningIcon />
      </View>
    ),
    messages: [
      {id: 3, text: 'Remembers what user said earlier in the conversation'},
      {id: 4, text: 'Allows user to provide follow up corrections'},
    ],
  },
  {
    id: 3,
    title: 'Limitations',
    logo: (
      <View
        style={{
          width: 42,
          height: 42,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LimitationIcon />
      </View>
    ),
    messages: [
      {id: 5, text: 'May occasionally generate incorrect information'},
      {id: 6, text: 'Limited knowledge of world and events after 2024'},
    ],
  },
  // Add more messages here...
];

export const exampleMessagesFR = [
  {
    id: 1,
    title: 'Exemples',
    logo: (
      <View style={{marginTop: 10}}>
        <SunIcon />
      </View>
    ),
    messages: [
      {id: 1, text: 'Découvrez quelles crypto-monnaies acheter'},
      {id: 2, text: 'Où est-il rentable de vendre des crypto-monnaies'},
    ],
  },
  {
    id: 2,
    title: 'Capacités',
    logo: (
      <View
        style={{
          width: 42,
          height: 42,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LightningIcon />
      </View>
    ),
    messages: [
      {
        id: 3,
        text: 'Se souvient de ce que l`utilisateur a dit plus tôt dans la conversation',
      },
      {
        id: 4,
        text: 'Permet à l`utilisateur d`apporter des corrections de suivi',
      },
    ],
  },
  {
    id: 3,
    title: 'Limites',
    logo: (
      <View
        style={{
          width: 42,
          height: 42,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LimitationIcon />
      </View>
    ),
    messages: [
      {id: 5, text: 'Peut parfois générer des informations incorrectes'},
      {
        id: 6,
        text: 'Connaissance limitée du monde et des événements après 2024',
      },
    ],
  },
  // Add more messages here...
];

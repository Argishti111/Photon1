import SunIcon from '../Icons/SunIcon';
import LightningIcon from '../Icons/LightningIcon';
import LimitationIcon from '../Icons/LimitationIcon';
import {View} from 'react-native';

export const exampleMessages = [
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

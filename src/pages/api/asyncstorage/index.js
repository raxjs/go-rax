import { createElement, useState } from 'rax';
import AsyncStorage from 'universal-asyncstorage';
import Toast from 'universal-toast';
import TextInput from 'rax-textinput';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function App() {
  const [key, setKey] = useState('StorageKey');
  const [value, setValue] = useState('Hello World');

  function setItem() {
    AsyncStorage.setItem(key, value).then(() => {
      Toast.show('Set item success.');
    });
  }

  function getItem() {
    AsyncStorage.getItem(key).then(value => {
      Toast.show(value ? value : 'Please store the value first.');
    });
  }

  function removeItem() {
    AsyncStorage.removeItem(key).then(() => {
      Toast.show('Remove item success.');
    });
  }

  function clear() {
    AsyncStorage.clear().then(() => {
      Toast.show('Clear all success.');
    });
  }

  function getAllKeys() {
    AsyncStorage.getAllKeys().then(res => {
      Toast.show(res.join());
    });
  }

  function onBlurWithKey(e) {
    const key = e.target.value;
    setKey(key);
  }

  function onBlurWithValue(e) {
    const value = e.target.value;
    setValue(value);
  }

  return (
    <Container
      title={'Storage/AsyncStorage'}
      moduleTitle={'AsyncStorage'}
      desc={'Gets or sets an asynchronous interface for cached data.'}
    >
      <Section title={'Store the data: '}>
        <TextInput onBlur={onBlurWithKey.bind(null)} placeholder="key" value={key} />
        <TextInput onBlur={onBlurWithValue.bind(null)} placeholder="value" value={value} />

        <SectionItem>
          <SectionOper onClick={setItem.bind(null)}>Store {key} data</SectionOper>
        </SectionItem>
      </Section>

      <Section title={'Read the data: '}>
        <SectionItem>
          <SectionOper onClick={getItem.bind(null)}>Read {key} data</SectionOper>
        </SectionItem>
      </Section>

      <Section title={'Delete the data: '}>
        <SectionItem>
          <SectionOper onClick={removeItem.bind(null)}>Delete {key} data</SectionOper>
        </SectionItem>
      </Section>

      <Section title={'Clear all storage: '}>
        <SectionItem>
          <SectionOper onClick={clear.bind(null)}>Clear all storage data</SectionOper>
        </SectionItem>
      </Section>

      <Section title={'Gets all storage keys: '}>
        <SectionItem>
          <SectionOper onClick={getAllKeys.bind(null)}>Gets all storage keys</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

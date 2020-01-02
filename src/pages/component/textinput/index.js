import { createElement, useState } from 'rax';
import View from 'rax-view';
import styles from './index.css';
import TextInput from 'rax-textinput';

import Container from '../../../components/Container';
import Section  from '../../../components/Section';

export default function TextInputDemo() {
  const [value, setValue] = useState('');
  const [multiText, setMultiText] = useState('');

  return (
    <Container
      title={'TextInput'}
      moduleTitle={'TextInput'}
      desc={
        'A foundational component for inputting text into the app via a keyboard.'
      }
    >
      <Section title={'atuoFocus'}>
        <View style={styles.container}>
          <TextInput autoFocus={true} autofocus={true} style={styles.default} />
        </View>
      </Section>

      <Section title={'numberPad'}>
        <View style={styles.container}>
          <TextInput keyboardType="numeric" style={styles.default} />
        </View>
      </Section>

      <Section title={'maxLength'}>
        <View style={styles.container}>
          <TextInput maxLength={5} style={styles.default} />
        </View>
      </Section>

      <Section title={'onChangeText'}>
        <View style={styles.container}>
          <TextInput
            value={value}
            style={styles.default}
            onChangeText={setValue}
          />
        </View>
      </Section>

      <Section title={'password'}>
        <View style={styles.container}>
          <TextInput password={true} style={styles.default} />
        </View>
      </Section>

      <Section title={'multiline'}>
        <View style={styles.container}>
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={{ ...styles.default, ...styles.multiline }}
            value={multiText}
            onChangeText={setMultiText}
          />
        </View>
      </Section>
    </Container>
  );
}

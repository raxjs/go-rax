import { createElement, useState, useEffect } from 'rax';
import Modal from 'rax-modal';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import styles from './index.css';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionOper from '../../../components/SectionOper';

export default function ModalDemo() {
  const [visible, setVisible] = useState(false);
  const [maskCanBeClick, setMaskCanBeClick] = useState(true);
  const [delay, setDelay] = useState(0);
  useEffect(() => {
    setVisible(true);
  }, [maskCanBeClick, delay]);
  return [
    <Container
      title={'Functional Components/Modal'}
      moduleTitle={'Modal'}
      desc={
        'Modal provides the ability to pop up masks, Alert, Confirm and other dialog components to provide the underlying capabilities.'
      }
    >
      <Section title={'Basic Usage: '}>
        <SectionOper onClick={setVisible.bind(this, true)}>Open Modal</SectionOper>
      </Section>

      <Section title={'Click on the mask to close the modal: '}>
        <SectionOper onClick={setMaskCanBeClick.bind(this, !maskCanBeClick)}>
          {maskCanBeClick ? 'Cancel' : 'Open'} click on change
        </SectionOper>
      </Section>

      <Section title={'Set delayed response: '}>
        <SectionOper onClick={setDelay.bind(this, delay ? 0 : 1000)}>
          {delay ? 'Open Modal delay' : 'Reset delay'}
        </SectionOper>
      </Section>
    </Container>,
    <Modal
      visible={visible}
      delay={delay}
      onHide={() => {
        setVisible(false);
      }}
      onShow={() => {
        setVisible(true);
      }}
      maskCanBeClick={maskCanBeClick}
      contentStyle={styles.modal}
    >
      <Image
        source={{
          uri: '//img.alicdn.com/tfs/TB1vsRKcq61gK0jSZFlXXXDKFXa-750-928.png',
        }}
        style={styles.img}
      />
      <View style={styles.close} onClick={() => setVisible(false)}>
        <Text style={{ color: '#49a9ee' }}>Close</Text>
      </View>
    </Modal>,
  ];
}

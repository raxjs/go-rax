import { createElement, useRef, useState } from 'rax';
import transition from 'universal-transition';
import inMiniApp from '../../../utils/inMiniApp';

import View from 'rax-view';
import styles from './index.css';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

let findDOMNode;
if (!inMiniApp) {
  findDOMNode = require('rax-find-dom-node').default;
}

export default function App() {
  const [transitionInfo, setTransitionInfo] = useState({});
  const animationRef = useRef();

  const changeWidth = width => {
    const transitionCall = transition(
      inMiniApp ? null : findDOMNode(animationRef.current),
      {
        width,
      },
      {
        timingFunction: 'ease',
        delay: 0,
        duration: 1000,
      },
      () => {
        // timing end
      },
    );
    inMiniApp && setTransitionInfo(transitionCall.export());
  };

  return (
    <Container
      title={'Animation/Transition'}
      moduleTitle={'Transition'}
      desc={
        'Used to define different transition effects when elements switch between different states.'
      }
    >
      <View style={styles.animationWrap}>
        <View ref={animationRef} animation={transitionInfo} style={styles.animationDemo} />
      </View>

      <Section title={'Use transition to change width: '}>
        <SectionItem>
          <SectionOper onClick={() => changeWidth('500rpx')}>Increase the width</SectionOper>
          <SectionOper onClick={() => changeWidth('100rpx')}>Reduce the width</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

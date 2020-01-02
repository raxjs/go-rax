import { createElement, useRef, useState } from 'rax';
import animate from 'universal-animation';
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
  const [animationInfo, setAnimationInfo] = useState({});
  const animationRef = useRef(null);

  const rotate = () => {
    const animation = animate(
      {
        props: [
          {
            element: inMiniApp ? 'view' : findDOMNode(animationRef.current),
            property: 'transform.rotateZ',
            easing: 'easeOutSine',
            duration: 200,
            start: 0,
            end: Math.random() * 720 - 360,
            delay: 100,
          },
        ],
      },
      () => {
        // timing end
      },
    );
    setAnimationInfo(animation.export().view);
  };
  const scale = () => {
    const animation = animate(
      {
        props: [
          {
            element: inMiniApp ? 'view' : findDOMNode(animationRef.current),
            property: 'transform.scale',
            easing: 'easeOutSine',
            duration: 200,
            start: 1,
            end: 0.5,
            delay: 100,
          },
        ],
      },
      () => {
        // timing end
      },
    );
    setAnimationInfo(animation.export().view);
  };

  const translate = () => {
    const animation = animate(
      {
        props: [
          {
            element: inMiniApp ? 'view' : findDOMNode(animationRef.current),
            property: 'transform.translateX',
            easing: 'easeOutSine',
            duration: 200,
            start: 0,
            end: 200,
            delay: 100,
          },
        ],
      },
      () => {
        // timing end
      },
    );
    setAnimationInfo(animation.export().view);
  };

  const opacity = () => {
    const animation = animate(
      {
        props: [
          {
            element: inMiniApp ? 'view' : findDOMNode(animationRef.current),
            property: 'opacity',
            easing: 'easeOutSine',
            duration: 200,
            start: 1,
            end: 0.5,
            delay: 100,
          },
        ],
      },
      () => {
        // timing end
      },
    );
    setAnimationInfo(animation.export().view);
  };

  const rotateAndScale = () => {
    const el = inMiniApp ? 'view' : findDOMNode(animationRef.current);
    const animation = animate(
      {
        props: [
          {
            element: el,
            property: 'transform.rotateZ',
            easing: 'easeOutSine',
            duration: 200,
            start: 0,
            end: Math.random() * 720 - 360,
            delay: 100,
          },
          {
            element: el,
            property: 'transform.scale',
            easing: 'easeOutSine',
            duration: 1000,
            start: 1,
            end: 0.5,
            delay: 100,
          },
        ],
      },
      () => {
        // timing end
      },
    );
    setAnimationInfo(animation.export().view);
  };

  const rotateThenScale = () => {
    const el = inMiniApp ? 'view' : findDOMNode(animationRef.current);
    const animation = animate(
      {
        props: [
          {
            element: el,
            property: 'transform.rotateZ',
            easing: 'easeOutSine',
            duration: 200,
            start: 0,
            end: Math.random() * 720 - 360,
            delay: 100,
          },
          {
            element: el,
            property: 'transform.scale',
            easing: 'easeOutSine',
            duration: 1000,
            start: 1,
            end: 0.5,
            delay: 300,
          },
        ],
      },
      () => {
        // timing end
      },
    );
    setAnimationInfo(animation.export().view);
  };

  return (
    <Container
      title={'Animation'}
      moduleTitle={'Animation'}
      desc={'You can perform a series of animation operations on the element.'}
    >
      <View style={styles.animationWrap}>
        <View
          ref={animationRef}
          animation={animationInfo}
          style={styles.animationDemo}
        />
      </View>
      <Section title={'A series of animation operations: '}>
        <SectionItem>
          <SectionOper onClick={rotate}>Rotate</SectionOper>
          <SectionOper onClick={scale}>Scale</SectionOper>
        </SectionItem>

        <SectionItem>
          <SectionOper onClick={translate}>Translate</SectionOper>
          <SectionOper onClick={opacity}>Opacity</SectionOper>
        </SectionItem>

        <SectionItem>
          <SectionOper onClick={rotateAndScale}>RotateAndScale</SectionOper>
          <SectionOper onClick={rotateThenScale}>RotateThenScale</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

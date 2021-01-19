import { createElement, useState, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.css';
import ScrollView from 'rax-scrollview';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionOper from '../../../components/SectionOper';

const THUMBS = [];
for (let i = 0; i < 20; i++) THUMBS.push(i);

export default function App() {
  const [
    horizontalScrollViewEventLog,
    setHorizontalScrollViewEventLog,
  ] = useState(false);
  const [scrollViewEventLog, setScrollViewEventLog] = useState(false);
  const horizontalScrollView = useRef(null);
  const scrollView = useRef(null);

  return (
    <Container
      title={'ScrollView'}
      moduleTitle={'ScrollView'}
      desc={'A container for rendering lists.'}
    >
      <Section title={'Vertical ScrollView'}>
        <View style={{ ...styles.container, height: '600rpx' }}>
          <ScrollView
            ref={scrollView}
            style={{
              height: '437rpx',
            }}
            onEndReached={() => setScrollViewEventLog(true)}
          >
            <View style={styles.sticky}>
              <Text>Sticky View</Text>
            </View>

            {THUMBS.map((val, i) => (
              <View style={styles.button} key={i}>
                <View style={styles.box} />
              </View>
            ))}
          </ScrollView>

          <View style={styles.button}>
            <SectionOper
              onClick={() => {
                scrollView.current.scrollTo({ y: 0 });
              }}
            >
              Scroll to top
            </SectionOper>
          </View>

          <View style={styles.eventLogBox}>
            <Text>{scrollViewEventLog ? 'onEndReached' : ''}</Text>
          </View>
        </View>
      </Section>

      <Section title={'Horizontal ScrollView'}>
        <View style={styles.container}>
          <ScrollView
            ref={horizontalScrollView}
            style={{
              height: '100rpx',
            }}
            horizontal={true}
            onEndReached={() => setHorizontalScrollViewEventLog(true)}
          >
            <View style={{ flexDirection: 'row' }}>
              {THUMBS.map((val, i) => (
                <View style={styles.button} key={i}>
                  <View style={styles.box} />
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={styles.button}>
            <SectionOper
              onClick={() => {
                horizontalScrollView.current.scrollTo({ x: 0 });
              }}
            >
              Scroll to start
            </SectionOper>
          </View>

          <View style={styles.eventLogBox}>
            <Text>{horizontalScrollViewEventLog ? 'onEndReached' : ''}</Text>
          </View>
        </View>
      </Section>
    </Container>
  );
}

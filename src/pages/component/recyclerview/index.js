import { createElement, useRef } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.css';
import RecyclerView from 'rax-recyclerview';

import Container from '../../../components/Container';
import Section  from '../../../components/Section';

function Thumb() {
  return (
    <RecyclerView.Cell>
      <View style={styles.button}>
        <View style={styles.box} />
      </View>
    </RecyclerView.Cell>
  );
}
const THUMBS = [];
for (let i = 0; i < 20; i++) THUMBS.push(i);
let createThumbRow = (val, i) => <Thumb key={i} />;

export default function App() {
  const scrollView = useRef(null);
  return (
    <Container
      title={'Basic Containers/RecyclerView'}
      moduleTitle={'RecyclerView'}
      desc={
        'Dynamic View scroll component for large data list scenarios. Under Weex is a wrapper for lists and cells, which improves the performance of rolling lists by reuse of internal subcomponents.'
      }
    >
      <Section title={'Basic Usage: '}>
        <View style={styles.root}>
          <View style={styles.container}>
            <RecyclerView
              ref={scrollView}
              onEndReached={() => alert('reach end')}
              style={{
                height: 500,
              }}
            >
              <RecyclerView.Header style={styles.sticky}>
                <Text>Sticky view is not header</Text>
              </RecyclerView.Header>

              <RecyclerView.Header>
                <View style={styles.sticky}>
                  <Text>Sticky view must in header root</Text>
                </View>
              </RecyclerView.Header>

              {THUMBS.map(createThumbRow)}
            </RecyclerView>

            <View
              style={styles.button}
              onClick={() => scrollView.current.scrollTo({ y: 0 })}
            >
              <Text>Scroll to top</Text>
            </View>
          </View>
        </View>
      </Section>
    </Container>
  );
}

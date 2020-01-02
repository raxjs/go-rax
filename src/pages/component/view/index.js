import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import alert from 'universal-alert';
import styles from './index.css';

import Container from '../../../components/Container';
import Section  from '../../../components/Section';

export default function App() {
  return (
    <Container
      title={'Basic Components/View'}
      moduleTitle={'View'}
      desc={
        'View is the most basic component, defaults to Flexbox layout, and can be nested arbitrarily.'
      }
    >
      <Section title={'Basic Usage: '}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#222831',
              },
            }}
          />
        </View>
      </Section>

      <Section title={'Add events: '}>
        <View style={styles.container}>
          <View
            onClick={() => {
              alert({
                content: 'View was clicked!',
                buttonText: 'OK'
              });
            }}
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#222831',
              },
            }}
          >
            <Text style={{ color: '#ffffff' }}>Click on the event</Text>
          </View>
        </View>
      </Section>

      <Section title={'Horizontal layout: '}>
        <View
          style={styles.container}
          onClick={() => {
            alert({
              content: 'Container was clicked!',
              buttonText: 'OK'
            });
          }}
        >
          <View
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#222831',
              },
            }}
          />
          <View
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#393e46',
              },
            }}
          />
          <View
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#00adb5',
              },
            }}
          />
        </View>
      </Section>

      <Section title={'Longitudinal layout: '}>
        <View style={{ ...styles.container, ...styles.columnLayout }}>
          <View
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#222831',
              },
            }}
          />
          <View
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#393e46',
              },
            }}
          />
          <View
            style={{
              ...styles.box,
              ...{
                backgroundColor: '#00adb5',
              },
            }}
          />
        </View>
      </Section>
    </Container>
  );
}

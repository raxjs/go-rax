import { createElement } from 'rax';
import View from 'rax-view';
import Countdown from 'rax-countdown';
import styles from './index.css';

import Container from '../../../components/Container';
import Section from '../../../components/Section';

export default function App() {
  function complete() {
    console.log('countdown complete');
  }
  return (
    <Container
      title={'Functional Components/CountDown'}
      moduleTitle={'CountDown'}
      desc={
        'Countdown components that can set the number of milliseconds countdown, as well as render templates.'
      }
    >
      <Section title={'Basic Usage: '}>
        <View style={styles.container}>
          <Countdown
            timeRemaining={100000}
            tpl={'{d}天{h}时{m}分{s}秒'}
            onComplete={complete}
          />
        </View>
      </Section>

      <Section title={'Change the style of the Numbers: '}>
        <View style={styles.container}>
          <Countdown
            timeRemaining={100000000}
            timeStyle={{
              backgroundColor: '#eee',
              marginLeft: '2rem',
              marginRight: '2rem',
            }}
            secondStyle={{ backgroundColor: '#393e46', color: '#fff' }}
            textStyle={{ backgroundColor: '#00adb5' }}
            tpl={'{d}-{h}-{m}-{s}'}
            onComplete={complete}
          />
        </View>
      </Section>

      <Section title={'The style of each time block: '}>
        <View style={styles.container}>
          <Countdown
            timeRemaining={500000}
            tpl="{h}:{m}:{s}"
            timeStyle={{
              color: '#ffffff',
              fontSize: 40,
              position: 'relative',
            }}
            secondStyle={{
              color: '#ffffff',
              fontSize: 40,
              position: 'relative',
            }}
            timeWrapStyle={{
              borderRadius: 6,
              width: 50,
              height: 60,
              backgroundColor: '#333333',
            }}
          />
        </View>
      </Section>

      <Section title={'Background of each time block plus background: '}>
        <View style={styles.container}>
          <Countdown
            timeRemaining={500000}
            tpl="{h}:{m}:{s}"
            timeStyle={{
              color: '#000000',
              fontSize: 40,
              position: 'relative',
            }}
            secondStyle={{
              color: '#000000',
              fontSize: 40,
              position: 'relative',
            }}
            timeBackground={{
              uri:
                'https://gw.alicdn.com/tfs/TB11oXVXRGE3KVjSZFhXXckaFXa-149-148.png',
            }}
            timeBackgroundStyle={{
              width: 50,
              height: 80,
            }}
          />
        </View>
      </Section>
    </Container>
  );
}

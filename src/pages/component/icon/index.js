import { createElement } from 'rax';
import View from 'rax-view';
import styles from './index.css';

import Icon, { createIconSet } from 'rax-icon';

import Container from '../../../components/Container';
import Section from '../../../components/Section';

const IconFont1 = createIconSet(
  {},
  'iconfont',
  'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf',
);
const IconFont2 = createIconSet(
  {
    hello: '\uE60f',
  },
  'iconfont',
  'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf',
);

export default function App() {
  return (
    <Container
      title={'Basic Components/Icon'}
      moduleTitle={'Icon'}
      desc={
        'Icon component, the Icon component implements the W3C standard IconFont interface.'
      }
    >
      <Section title={'Use fontFamily: '}>
        <View style={styles.box}>
          <Icon
            fontFamily="iconfont"
            source={{
              uri: 'https://at.alicdn.com/t/font_pkm0oq8is8fo5hfr.ttf',
              codePoint: '\uE60f',
            }}
          />
        </View>
      </Section>

      <Section title={'Using codePoint: '}>
        <View style={styles.box}>
          <IconFont1 codePoint={'\uE60f'} />
        </View>
      </Section>

      <Section title={'Use name: '}>
        <View style={styles.box}>
          <IconFont2 name={'hello'} />
        </View>
      </Section>
    </Container>
  );
}

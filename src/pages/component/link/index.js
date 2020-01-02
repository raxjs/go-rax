import { createElement } from 'rax';
import Link from 'rax-link';
import View from 'rax-view';
import Text from 'rax-text';
import alert from 'universal-alert';
import styles from './index.css';
import inMiniApp from '../../../utils/inMiniApp';

import Container from '../../../components/Container';
import Section from '../../../components/Section';

export default function App() {
  return (
    <Container
      title={'Basic Components/Link'}
      moduleTitle={'Link'}
      desc={
        "Link is the basic Link component, implemented in the Web container through the a tag that has the default style textDecoration: 'none'."
      }
    >
      <Section title={'Basic Usage: '}>
        <View style={styles.container}>
          <Link
            miniappHref={"navigate:/pages/component/view/index"}
            href={'https://m.taobao.com'}
            style={styles.link}
            onPress={e => {}}
          >
            <Text> {!inMiniApp ? 'Jump to the taobao' : 'Jump to the Home'}</Text>
          </Link>
        </View>
      </Section>

      <Section title={'Add events of press: '}>
        <View style={styles.container}>
          <Link
            miniappHref={"navigate:/pages/component/view/index"}
            href={'https://m.taobao.com'}
            style={styles.link}
            onPress={e => {
              alert({
                content: 'Link was clicked!',
                buttonText: 'OK'
              });
            }}
          >
            <Text> {!inMiniApp ? 'Add events of press and jump to taobao' : 'Add events of press and jump to Home'}</Text>
          </Link>
        </View>
      </Section>
    </Container>
  );
}

import { createElement } from 'rax';
import Embed from 'rax-embed';
import View from 'rax-view';
import styles from './index.css';

import Container from '../../../components/Container';
import Section from '../../../components/Section';

export default function App() {
  const urlParam = {
    paramOne: 123,
    paramTwo: 456,
  };
  return (
    <Container
      title={'Functional Components/Embed'}
      moduleTitle={'Embed'}
      desc={
        'The embedded content container is implemented in the Weex container via <web> and in the web container via <iframe> <embed>.'
      }
    >
      <Section title={'Basic Usage: '}>
        <View style={styles.container}>
          <Embed
            urlParam={urlParam}
            src={'https://m.taobao.com/'}
            useIframeInWeb={true}
            style={{ height: 750, width: 680 }}
          />
        </View>
      </Section>
    </Container>
  );
}

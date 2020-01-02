import { createElement } from 'rax';
import Clipboard from 'universal-clipboard';
import alert from 'universal-alert';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function App() {
  function readText() {
    Clipboard.readText()
      .then(text => {
        alert({
          content: text,
          buttonText: 'OK'
        });
      })
      .catch(() => {
        alert({
          content: 'The web is not currently supported',
          buttonText: 'OK'
        });
      });
  }

  function writeText() {
    Clipboard.writeText('Hello Rax')
      .then(() => {
        alert({
          content: 'Success write text.',
          buttonText: 'OK'
        });
      })
      .catch(() => {
        alert({
          content: 'WriteText failure.',
          buttonText: 'OK'
        });
      });
  }

  return (
    <Container
      title={'System/Clipboard'}
      moduleTitle={'Clipboard'}
      desc={'Gets or sets clipboard data.'}
    >
      <Section title={'Set clipboard data: '}>
        <SectionItem>
          <SectionOper onClick={writeText.bind(null)}>Clipboard set 'Hello Rax'</SectionOper>
        </SectionItem>
      </Section>

      <Section title={'Get clipboard data: '}>
        <SectionItem>
          <SectionOper onClick={readText.bind(null)}>Get data from the clipboard</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

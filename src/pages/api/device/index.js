import { createElement } from 'rax';
import { appName, platform, screenWidth, screenHeight, appVersion } from './lib';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionTextItem from '../../../components/SectionTextItem';

export default function App() {
  return (
    <Container
      title={'System/Device'}
      moduleTitle={'Device'}
      desc={'Get system information.'}
    >
      <Section title={'The name of the APP : '}>
        <SectionTextItem>{appName}</SectionTextItem>
      </Section>

      <Section title={'The name of the platform : '}>
        <SectionTextItem>{platform}</SectionTextItem>
      </Section>

      <Section title={'Screen width : '}>
        <SectionTextItem>{screenWidth} px</SectionTextItem>
      </Section>

      <Section title={'Screen height: '}>
        <SectionTextItem>{screenHeight} px</SectionTextItem>
      </Section>

      <Section title={'App Version: '}>
        <SectionTextItem>{appVersion}</SectionTextItem>
      </Section>
    </Container>
  );
}

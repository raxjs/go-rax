import { createElement } from 'rax';
import Toast from 'universal-toast';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function ToastDemo() {
  function showToast() {
    Toast.show('Success !')
  }
  return (
    <Container
      title={'Feedback/Toast'}
      moduleTitle={'Toast'}
      desc={'Toast generic weak prompt.'}
    >
      <Section title={'Show a toast: '}>
        <SectionItem>
          <SectionOper onClick={showToast.bind(null)}>Click on the display</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

import { createElement } from 'rax';
import Confirm from 'universal-confirm';
import alert from 'universal-alert';
import Container from '../../../components/Container';
import View from 'rax-view';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function App() {
  function getFeedback({
    title,
    content,
    confirmButtonText,
    cancelButtonText,
  }) {
    Confirm({
      title,
      content,
      confirmButtonText,
      cancelButtonText,
    }).then(confirm => {
      alert({
        content: confirm ? 'Confirm' : 'Cancel',
        buttonText: 'OK'
      });
    });
  }

  const contentOption = {
    content: 'content change',
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
  };

  const buttonOption = {
    content: 'button change',
    confirmButtonText: 'good',
    cancelButtonText: 'Cancel',
  };

  return (
    <Container
      title={'Feedback/Confirm'}
      moduleTitle={'Confirm'}
      desc={'A confirmation box for prompts'}
    >
      <Section title={'Set confirm content:'}>
        <SectionItem>
          <SectionOper onClick={() => getFeedback(contentOption)}>Display content changes</SectionOper>
        </SectionItem>
      </Section>

      <Section title={'Set confirm button:'}>
        <SectionItem>
          <SectionOper onClick={() => getFeedback(buttonOption)}>Display button changes</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

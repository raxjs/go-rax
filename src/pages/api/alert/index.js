import { createElement } from 'rax';
import alert from 'universal-alert';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function App() {
  function getFeedback({ title, content, buttonText }) {
    alert({
      title,
      content,
      buttonText,
    }).then(() => {
      console.log('Success.');
    });
  }

  const contentOption = {
    content: 'content change',
    buttonText: 'OK'
  };

  const buttonOption = {
    content: 'content change',
    buttonText: 'good',
  };

  return (
    <Container
      title={'Feedback/Alert'}
      moduleTitle={'Alert'}
      desc={
        'Alert, you can configure the warning box title, content, button text, etc.'
      }
    >
      <Section title={'Set alert content: '}>
        <SectionItem>
          <SectionOper onClick={() => getFeedback(contentOption)}>Display content changes</SectionOper>
        </SectionItem>
      </Section>

      <Section title={'Set alert button: '}>
        <SectionItem>
          <SectionOper onClick={() => getFeedback(buttonOption)}>Display with change button</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

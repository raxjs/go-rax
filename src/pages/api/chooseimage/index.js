import { createElement } from 'rax';
import chooseImage from 'universal-choose-image';
import alert from 'universal-alert';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function App() {
  function handleChoose() {
    chooseImage()
      .then(res => {
        alert({
          content: res.data,
          buttonText: 'OK'
        });
      })
      .catch((err) => {
        alert({
          content: JSON.stringify(err),
          buttonText: 'OK'
        });
      });
  }

  return (
    <Container
      title={'Media/ChooseImage'}
      moduleTitle={'ChooseImage'}
      desc={'Take a photo or select an image from your local album.'}
    >
      <Section title={'Choose photos in Web and Mini APP: '}>
        <SectionItem>
          <SectionOper onClick={handleChoose.bind(null)}>Select a photo</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

import { createElement } from 'rax';
import Navigate from 'universal-navigate';
import Toast from 'universal-toast';
import inMiniApp from '../../../utils/inMiniApp';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function App() {
  function navigatePush() {
    Navigate.push({
      url: !inMiniApp ? 'https://www.taobao.com/' : '/pages/component/view/index',
      animated: true, // only supported in Weex
    }).then(() => {
      Toast.show('Success.');
    });
  }

  return (
    <Container
      title={'Navigation/Navigate'}
      moduleTitle={'Navigate'}
      desc={'From the current page, jump to a specific page.'}
    >
      <Section title={'Jump to new page: '}>
        <SectionItem>
          <SectionOper onClick={navigatePush.bind(null)}> {inMiniApp ? 'Jump to the Home' : 'Jump to the taobao'}</SectionOper>
        </SectionItem>
      </Section>

      {/* <Section title={'Go back to the previous page: '}>
        <SectionItem>
          <SectionOper onClick={navigatePush.bind(null)}>Click the jump</SectionOper>
        </SectionItem>
      </Section> */}
    </Container>
  );
}

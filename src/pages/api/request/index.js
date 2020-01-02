import { createElement } from 'rax';
import request from 'universal-request';
import alert from 'universal-alert';
import inMiniApp from '../../../utils/inMiniApp';
import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionItem from '../../../components/SectionItem';
import SectionOper from '../../../components/SectionOper';

export default function RequestDemo() {

  function handleRequest() {
    if (inMiniApp) {
      alert({
        content: '可以直接查看源码噢',
        buttonText: 'OK'
      });
      return;
    }
    request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        test: '1',
      },
      timeout: 5000,
    })
      .then(data => {
        alert({
          content: JSON.stringify(data.data),
        });
      })
      .catch(error => {});
  }

  return (
    <Container
      title={'Network/Request'}
      moduleTitle={'Request'}
      desc={'Used to initiate network requests.'}
    >
      <Section title={'Network request: '}>
        <SectionItem>
          <SectionOper onClick={handleRequest.bind(null)}>Make a network request</SectionOper>
        </SectionItem>
      </Section>
    </Container>
  );
}

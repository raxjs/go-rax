import { createElement, useState, useEffect } from 'rax';
import AppState from 'universal-appstate';
import Toast from 'universal-toast';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionTextItem from '../../../components/SectionTextItem';

export default function App() {
  const [state, setState] = useState('background');

  useEffect(() => {
    const _handleAppStateChange = nextAppState => {
      setState(nextAppState); // active|background
      Toast.show(nextAppState);
    };

    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      // Clean up
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  return (
    <Container
      title={'System/Appstate'}
      moduleTitle={'Appstate'}
      desc={
        'Applications are displayed or about to be placed in the background, supported only on the Weex side.'
      }
    >
      <Section title={'Container supports it: '}>
        <sectionItem>
          <SectionTextItem>
            {JSON.stringify(AppState.isAvailable)}{' '}
          </SectionTextItem>
        </sectionItem>
      </Section>

      {AppState.isAvailable ? (
        <Section title={'Please try to close the APP and then open it: '}>
          <sectionItem>
            <SectionTextItem>
              Current App status: {AppState.currentState}
            </SectionTextItem>
          </sectionItem>
        </Section>
      ) : null}
    </Container>
  );
}

import { createElement, useRef, useState } from 'rax';
import Image from 'rax-image';
import Slider from 'rax-slider';
import View from 'rax-view';
import commonStyles from '../../assets/css/common.css';
import styles from './index.css';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import SectionOper from '../../../components/SectionOper';

export default function SliderDemo() {
  const sliderRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showsPagination, setShowsPagination] = useState(true);
  const [loop, setLoop] = useState(true);

  function onChange(index) {
    console.log('change', index);
  }

  function slideTo(index) {
    sliderRef.current.slideTo(index);
  }

  return (
    <Container
      title={'Functional Components/Slider'}
      moduleTitle={'Slider'}
      desc={
        'A rotating component that shows content components horizontally through a slide show. The content of rotation is independent of each other, and there is no logical relationship between the content and data before and after.'
      }
    >
      <Section title={'Basic Usage: '}>
        <View style={{ ...commonStyles.section, ...commonStyles.viewCenter }}>
          <Slider
            width="680"
            height="500"
            style={styles.slider}
            autoPlay={autoPlay}
            loop={loop}
            showsPagination={showsPagination}
            paginationStyle={styles.paginationStyle}
            autoplayTimeout={3000}
            onChange={onChange}
            ref={sliderRef}
          >
            <View style={styles.itemWrap}>
              <Image
                style={styles.image}
                source={{
                  height: 500,
                  width: 375,
                  uri:
                    '//gw.alicdn.com/tfs/TB19NbqKFXXXXXLXVXXXXXXXXXX-750-500.png',
                }}
              />
            </View>
            <View style={styles.itemWrap}>
              <Image
                style={styles.image}
                source={{
                  height: 500,
                  width: 375,
                  uri:
                    '//gw.alicdn.com/tfs/TB1tWYBKFXXXXatXpXXXXXXXXXX-750-500.png',
                }}
              />
            </View>
            <View style={styles.itemWrap}>
              <Image
                style={styles.image}
                source={{
                  height: 500,
                  width: 375,
                  uri:
                    '//gw.alicdn.com/tfs/TB1SX_vKFXXXXbyXFXXXXXXXXXX-750-500.png',
                }}
              />
            </View>
          </Slider>
        </View>
      </Section>

      <Section title={'Control pagination: '}>
        <SectionOper onClick={() => setShowsPagination(!showsPagination)}>
          {showsPagination ? 'Hidden' : 'Show'}
        </SectionOper>
      </Section>

      <Section title={'Auto play or not: '}>
        <SectionOper onClick={() => setAutoPlay(!autoPlay)}>
          {autoPlay ? 'Not' : 'Auto'}
        </SectionOper>
      </Section>

      <Section title={'Whether to loop: '}>
        <SectionOper onClick={() => setLoop(!loop)}>
          {loop ? 'Not' : 'Loop'}
        </SectionOper>
      </Section>

      <Section title={'Return to the first slide: '}>
        <SectionOper onClick={() => slideTo(0)}>Return</SectionOper>
      </Section>
    </Container>
  );
}

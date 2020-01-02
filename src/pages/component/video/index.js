import { createElement, useState, useEffect } from 'rax';
import Video from 'rax-video';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.css';

import Container from '../../../components/Container';
import Section  from '../../../components/Section';

const videoSource =
  'https://cloud.video.taobao.com/play/u/2780279213/p/1/e/6/t/1/d/ld/36255062.mp4';
export default function VideoDemo() {
  const [play, setPlay] = useState(false);
  const [playStatus, setPlayStatus] = useState(play ? 'play' : 'pause');
  useEffect(() => {
    setPlayStatus(play ? 'play' : 'pause');
  }, [play]);
  return (
    <Container
      title={'Basic Components/Video'}
      moduleTitle={'Video'}
      desc={'Video playback component, you can set play, pause.'}
    >
      <Section title={'Basic Usage: '}>
        <View style={styles.section}>
          <Video
            style={{ width: '680rpx', height: '400rpx' }}
            autoPlay={true}
            src={videoSource}
          />
        </View>
      </Section>

      <Section title={'Click Play video: '}>
        <View style={styles.section}>
          <View onClick={() => setPlay(!play)}>
            <Text style={styles.button}>{playStatus}</Text>
          </View>
          <Video
            style={{ width: '680rpx', height: '400rpx' }}
            playControl={playStatus}
            src={videoSource}
          />
        </View>
      </Section>

      <Section title={'Video cancels autoplay: '}>
        <View style={styles.section}>
          <Video style={{ width: '680rpx', height: '400rpx' }} src={videoSource} />
        </View>
      </Section>
    </Container>
  );
}

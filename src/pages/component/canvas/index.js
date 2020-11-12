import { createElement, useRef, useEffect } from 'rax';
import Canvas from 'rax-canvas';

import Container from '../../../components/Container';
import Section from '../../../components/Section';
import inMiniApp from '../../../utils/inMiniApp';

export default function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const context = canvasRef.current.getContext();
    inMiniApp
      ? context.setFillStyle('#49a9ee')
      : (context.fillStyle = '#49a9ee');
    context.fillRect(0, 0, 300, 300);

    // Only miniapp needs and has .draw API.
    if (inMiniApp) {
      context.draw();
    }
  }, []);
  return (
    <Container
      title={'Canvas'}
      moduleTitle={'Canvas'}
      desc={'Canvas component.'}
    >
      <Section title={'Basic Usage: '}>
        <Canvas
          id="canvas"
          style={{
            width: '300rpx',
            height: '300rpx',
            display: 'block',
          }}
          ref={canvasRef}
        />
      </Section>
    </Container>
  );
}

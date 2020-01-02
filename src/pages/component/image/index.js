import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import styles from './index.css';
import Container from '../../../components/Container';
import Section from '../../../components/Section';

const image2 = {
  uri: 'https://gw.alicdn.com/tfs/TB11oXVXRGE3KVjSZFhXXckaFXa-149-148.png',
};

const gifImage = {
  uri: 'https://gw.alicdn.com/tfs/TB1VEmHbubviK0jSZFNXXaApXXa-201-99.gif',
};

const base64Image = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAMAAAB8+nPGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUdwTP+9APKhBvywAP6yAeCTDfOcCB8XAv+8AeydCvijBu+IEP62AP+7AO2GEfCMD//AAOqEFP6zAf+sAP+lAP+aAPWgC/mqB/KWDu+NEv8j1X0AAAAQdFJOUwD1Q5njE2AH/yh8x7rfp+lHis5OAAACyElEQVRYw62Xi5KrIBBEowYQ1Aj4iP7/j94BfIARHbzbSbZC1XLS0wOor1cg/voT0epvQJV6BiLBiBGlHoG4qvKgLPUM9DHT8nCs1CcZ1Np5FWVbPA5EEtNRi1pqZ5JWPQLlalMriIlLPQIJ5Utw7g1YYsyeZn9MWcqqCznz7IOecYAxW22J5Q84s3UzT/MEWlAtT8/HWbGUaRpHh0IvbLq58SnAAc0J3ec+xtU0On3hNeG7Xx3NOBBQjMATxS/o2TMzjR5Gf/WIbBr7hNGEFK3LLxJEqgNldBQDMZxSv1FNY+TjihqXojw3JWBAb1TTGKPteU2WIqXUBY7DiGin0cfYZFaMlBkyaxDV+rtGo13CKwVUIJc1G81/Q6ZbwtbNipENbjVWWu4CWhm6gcIwLaODvBOCw4de3nNuO98O+h4j3+yupKFEYGR93aUhVlNWN8H4Mp4iipE140UmUW0nwzB0sTrMyiz24cVyFoCJJszh9xnPdndRzHCFcWcpWTlZFJNfYlwafGtkHuNUlxhZwLy9KDuMdPsSIxtRlH7rLmpCLeKlSBZbNFcN/1mQEcyQhpHnGLMR4N3/pxtuvPTh1sxolppNDgxjR4fGRRbtPzvfCT1w+j4IJzdHfBPZHOeY3toJwzFrjIV7eynX/MBpv60X+Oggx+Wyw4vGPyYEi1BetYP0oZ31jtRMIzkVohCUMxalvD79qlKeHk8sVOzk2zBByPTnqgqEi6NvxwR2spQbdtupcztFGibvz+3IPAnDNy8HO1nSAw2B+esr5DRJdixheXcaf408rr9ug8CnfMqhluAgIPmQw7tA+inne8Vp0P0quitOxp9UpX84EvvY+DaztffnwKkJslc7RLtvxzMPdUsMc82NcKetFSv5wJBY5zuG/X68FxQoOxtj05HT3FdG9Zl+rnS3va/fZ8rKUPcRMZxQz0JI0D8nxpejbxWbygAAAABJRU5ErkJggg==',
};

export default function App() {
  return (
    <Container
      title={'Basic Components/Image'}
      moduleTitle={'Image'}
      desc={
        'Image presentation component, similar to the HTML image tag, but with richer functionality, specifying style width and height values.'
      }
    >
      <Section title={'Display GIF figure: '}>
        <View style={styles.container}>
          <Image style={styles.gif} source={gifImage} />
        </View>
      </Section>

      <Section title={'Image set rounded corners: '}>
        <View style={styles.container}>
          <Image
            source={image2}
            style={{
              ...styles.base,
              ...{
                borderRadius: 200,
              },
            }}
          />
        </View>
      </Section>

      <Section title={'Display local images: '}>
        <View style={styles.container}>
          <Image source={base64Image} style={styles.base} />
        </View>
      </Section>
    </Container>
  );
}

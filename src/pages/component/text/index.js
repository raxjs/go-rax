import { createElement, render, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './index.css';

import Container from '../../../components/Container';
import Section  from '../../../components/Section';

export default function App() {
  return (
    <Container
      title={'Basic Components/Text'}
      moduleTitle={'Text'}
      desc={
        'Text is used to display Text and is implemented in the Web container using span tags instead of p tags.'
      }
    >
      <Section title={'Text mixed: '}>
        <View
          style={{
            ...styles.container,
            ...{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            },
          }}
        >
          <Text>Text</Text>
          <Text
            style={{
              color: '#1890ff',
            }}
          >
            mixed
          </Text>
        </View>
      </Section>

      <Section title={'Single-line text overflow: '}>
        <View style={styles.container}>
          <Text
            numberOfLines={1}
            style={{
              textOverflow: 'ellipsis',
            }}
          >
            Single line text exceeds truncated text. Single line text exceeds
            truncated text. Single line text exceeds truncated text.
          </Text>
        </View>
      </Section>

      <Section title={'Multiline text overflow: '}>
        <View style={styles.container}>
          <Text
            numberOfLines={2}
            style={{
              textOverflow: 'ellipsis',
            }}
          >
            Multiline text exceeds truncated text, exceeds truncated text,
            exceeds truncated text, exceeds truncated text. Multiline text
            exceeds truncated text, exceeds truncated text, exceeds truncated
            text, exceeds truncated text.
          </Text>
        </View>
      </Section>

      <Section title={'The text line: '}>
        <View style={styles.container}>
          <Text style={{ textDecoration: 'underline' }}>Text underline</Text>
          <Text style={{ textDecorationLine: 'none' }}>Not underlined</Text>
          <Text style={{ textDecoration: 'line-through' }}>
            Text strikethrough
          </Text>
        </View>
      </Section>

      <Section title={'The text line height: '}>
        <View style={styles.container}>
          <Text style={{ lineHeight: '120rpx' }}>
            Line height of 120rem, multi - line folding effect of this text.
          </Text>
        </View>
      </Section>
    </Container>
  );
}

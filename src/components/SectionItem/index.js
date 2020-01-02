import { createElement } from 'rax';

import View from 'rax-view';

export default function SectionItem({ children }) {
  return (
    <View
      style={{
        display: 'flex',
        borderTop: '2rpx solid #dddddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100rpx',
      }}
    >
      {children}
    </View>
  );
}

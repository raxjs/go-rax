import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import RefreshControl from 'rax-refreshcontrol';
import Waterfall from 'rax-waterfall';
import styles from './index.css';
import commonStyles from '../../../assets/css/common.css';

import Navigator from '../../../components/Navigator';
let listSource = [
  { height: 550, item: {} },
  { height: 624, item: {} },
  { height: 708, item: {} },
  { height: 600, item: {} },
  { height: 300, item: {} },
  { height: 100, item: {} },
  { height: 400, item: {} },
  { height: 550, item: {} },
  { height: 624, item: {} },
  { height: 708, item: {} },
  { height: 600, item: {} },
  { height: 300, item: {} },
  { height: 100, item: {} },
  { height: 400, item: {} },
];

export default function WaterfallDemo() {
  const [refreshing, setRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState(listSource);

  const handleRefresh = () => {
    if (refreshing) {
      return;
    }
    setRefreshing(true);
    setDataSource([]);

    setTimeout(() => {
      setRefreshing(false);
      setDataSource(dataSource);
    }, 500);
  };

  const loadMore = () => {
    setTimeout(() => {
      setDataSource(dataSource.concat(listSource));
    }, 1000);
  };

  return (
    <View style={commonStyles.app}>
      <Navigator title="Waterfall" />
      <Waterfall
        columnWidth={150}
        columnCount={4}
        columnGap={50}
        dataSource={dataSource}
        renderHeader={() => {
          return [
            <RefreshControl
              key="0"
              refreshing={refreshing}
              onRefresh={handleRefresh}
            >
              <Text>下拉刷新</Text>
            </RefreshControl>,
            <View style={styles.descBox}>
              <Text style={styles.moduleTitle}>Waterfall</Text>
              <Text style={styles.desc}>
                The list container used to implement the waterfall flow, each
                item in the waterfall flow needs to specify a height to
                calculate the layout.
              </Text>
            </View>,
          ];
        }}
        renderFooter={() => {
          return (
            <View
              key="3"
              style={{
                width: 750,
                height: 80,
                backgroundColor: '#07152A',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 28 }}>
                Supported By Rax Team
              </Text>
            </View>
          );
        }}
        renderItem={(item, index) => {
          return (
            <View
              style={{
                height: item.height,
                backgroundColor: '#eeeeee',
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Goods</Text>
            </View>
          );
        }}
        onEndReached={loadMore}
      />
    </View>
  );
}

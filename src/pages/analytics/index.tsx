import React from 'react';
import {Dimensions} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';
import * as S from './styled';

const Analytics: React.FC = () => {
  return (
    <S.Container>
      <ScrollView>
        <S.HeaderTitle>Estatísticas</S.HeaderTitle>
        <S.TextSupport>
          Nesta página são apresentados os dados de carregamento e manipulação
          dos dados salvos em banco local.
        </S.TextSupport>

        <S.TitleCategory>Carregamento do banco</S.TitleCategory>
        <LineChart
          data={{
            labels: ['WatermelonDB', 'Async-storafe', 'Realm.io'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 32} // from react-native
          height={250}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#E0F0F8',
            backgroundGradientTo: '#E0F0F8',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(7, 45, 75, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(7, 45, 75, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '4',
              stroke: 'rgba(7, 45, 75, 0.1)',
              opacity: 0.7,
            },
          }}
          bezier
          style={{
            marginVertical: 16,
            borderRadius: 8,
          }}
        />

        <S.TitleCategory>Carregamento do banco</S.TitleCategory>
        <BarChart
          data={{
            labels: ['WatermelonDB', 'Async-storafe', 'Realm.io'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 32} // from react-native
          height={220}
          // yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#E0F0F8',
            backgroundGradientTo: '#E0F0F8',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(7, 45, 75, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(7, 45, 75, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '4',
              stroke: 'rgba(7, 45, 75, 0.1)',
              opacity: 0.7,
            },
          }}
          verticalLabelRotation={30}
          style={{
            marginVertical: 16,
            borderRadius: 8,
          }}
        />
      </ScrollView>
    </S.Container>
  );
};

export default Analytics;

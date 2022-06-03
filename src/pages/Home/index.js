import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions'
import Lembrets from '../../components/Lembrets'

const list = [
  {
    id: 1,
    label: 'Boleto conta Luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '17/05/2022',
    type: 1 // receita / entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.200,00',
    date: '02/05/2022',
    type: 1 // receita / entradas
  }
]
export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      vertical={true}
      showsVerticalScrollIndicator={false}
    >
      <Header name="Fernando Hudson Moyoga Filho" />

      <Balance saldo="9.250,90" gastos="-527,80" />
      <Actions></Actions>
        <Text style={styles.title}>Eventos Próximos</Text>
        <Lembrets></Lembrets>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  },
})

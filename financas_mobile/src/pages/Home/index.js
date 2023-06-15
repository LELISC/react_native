import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../../components/Header';
import Balanco from '../../components/Balanco';
import Movimentos from '../../components/Movimentos';
import Actions from '../../components/Actions';


const list = [
  
  {
  id:1,
  label: 'Boleto Conta de Água',
  value: '237,00',
  date: '09/06/2023',
  type: 0 //despesas
},

 {
  id:2,
  label: 'Pix Josivaldo Lopes',
  value: '35,00',
  date: '09/06/2023',
  type: 1 //receitas / entradas
},

{
  id:3,
  label: 'Salário',
  value: '15.00,00',
  date: '10/06/2023',
  type: 1 // receita / entradas
},

]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Filipe Lelis"/>

        <Balanco saldo="9.830,90" gastos="-237,00"/>

         <Actions/>
        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList style={styles.list}
         data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScroLLIndicator={false}
        renderItem={({ item }) => <Movimentos data={item}/>}
        />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
  title:{

    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});


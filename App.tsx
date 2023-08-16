import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App(): JSX.Element {
  const [state, setState] = React.useState({
    prevVal: 0,
    curVal: 0,
    operator: '',
    total: '0',
  });

  function handleNum(value) {
    if (state.curVal === 0) {
      setState({
        ...state,
        curVal: value,
        total:
          state.prevVal === 0
            ? value
            : `${state.prevVal}${state.operator}${value}`,
      });
    } else {
      setState({
        ...state,
        curVal: `${state.curVal}${value}`,
        total:
          state.prevVal === 0
            ? `${state.curVal}${value}`
            : `${state.prevVal}${state.operator}${state.curVal}${value}`,
      });
    }
    return;
  }

  function handleClear() {
    setState({prevVal: 0, curVal: 0, operator: '', total: '0'});
    return;
  }

  function handleOperate(operator) {
    if (state.operator === '') {
      setState({
        operator: operator,
        prevVal: state.curVal,
        curVal: 0,
        total: `${state.curVal}${operator}`,
      });
    } else {
      if (state.curVal !== 0 && state.prevVal !== 0) {
        equal(operator);
      } else {
        setState({
          operator: operator,
          prevVal: state.prevVal,
          curVal: state.curVal,
          total: `${state.prevVal}${operator}`,
        });
      }
    }
    return;
  }

  function equal() {
    const {prevVal, curVal, operator} = state;
    const refreshState = {prevVal: 0, operator: ''};
    switch (operator) {
      case '+':
        setState({
          ...refreshState,
          curVal: Number(prevVal) + Number(curVal),
          total: Number(prevVal) + Number(curVal),
        });
        break;
      case '-':
        setState({
          ...refreshState,
          curVal: Number(prevVal) - Number(curVal),
          total: Number(prevVal) - Number(curVal),
        });
        break;
      case '*':
        setState({
          ...refreshState,
          curVal: Number(prevVal) * Number(curVal),
          total: Number(prevVal) * Number(curVal),
        });
        break;
      case '/':
        setState({
          ...refreshState,
          curVal: Number(prevVal) / Number(curVal),
          total: Number(prevVal) / Number(curVal),
        });
        break;
      default:
        return state;
    }
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.result}>{state.total}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNum(1)}>
          <Text style={styles.cell}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNum(2)}>
          <Text style={styles.cell}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNum(3)}>
          <Text style={styles.cell}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperate('*')}>
          <Text style={[styles.cell, styles.operatorCell]}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNum(4)}>
          <Text style={styles.cell}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNum(5)}>
          <Text style={styles.cell}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNum(6)}>
          <Text style={styles.cell}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperate('+')}>
          <Text style={[styles.cell, styles.operatorCell]}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNum(7)}>
          <Text style={styles.cell}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNum(8)}>
          <Text style={styles.cell}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNum(9)}>
          <Text style={styles.cell}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperate('-')}>
          <Text style={[styles.cell, styles.operatorCell]}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleClear()}>
          <Text style={[styles.cell, styles.clearCell]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNum(0)}>
          <Text style={styles.cell}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => equal()}>
          <Text style={[styles.cell, styles.operatorCell]}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperate('/')}>
          <Text style={[styles.cell, styles.operatorCell]}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  result: {
    fontSize: 40,
  },
  cell: {
    padding: 10,
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    margin: 10,
    width: 60,
    textAlign: 'center',
  },
  operatorCell: {
    backgroundColor: 'orange',
    borderColor: 'orange',
  },
  clearCell: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});

export default App;

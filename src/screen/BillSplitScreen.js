import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const BillSplitScreen = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [numberOfFriends, setNumberOfFriends] = useState('');
  const [splitAmount, setSplitAmount] = useState('');

  const calculateSplit = () => {
    const total = parseFloat(totalAmount);
    const friends = parseInt(numberOfFriends);

    if (total && friends) {
      const shareAmount = total / friends;
      setSplitAmount(shareAmount.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bill Splitter</Text>

      <TextInput
        style={styles.input}
        placeholder="Total Amount"
        value={totalAmount}
        onChangeText={text => setTotalAmount(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Number of Friends"
        value={numberOfFriends}
        onChangeText={text => setNumberOfFriends(text)}
        keyboardType="numeric"
      />

      <Button title="Split Bill" onPress={calculateSplit} />

      {splitAmount !== '' && (
        <Text style={styles.resultText}>
          Each friend should pay: ₹{splitAmount}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 18,
    marginTop: 24,
  },
});

export default BillSplitScreen;

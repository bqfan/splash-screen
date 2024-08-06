import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReferenceRange = ({ minValue,  maxValue, value, unit }) => {

return (
    <>
        <View style={[styles.container, { marginBottom: 10 }]}>
            <View style={[styles.greenPart, { width: '68%', height: 20}]}>
              <Text style={{textAlign: 'right'}}>{value.toFixed(1)} {unit}</Text>
            </View>
        </View>
        <View style={styles.container}>
          <View style={[styles.redPartFirst, { width: '20%', backgroundColor: 'red' }]} />
          <View style={[styles.greenPart, { width: '37.5%', backgroundColor: 'green' }]} />
          <View style={[styles.greenPart, { width: '0.5%', backgroundColor: 'white' }]} />
          <View style={[styles.greenPart, { width: '12%', backgroundColor: 'green' }]} />
          <View style={[styles.redPartSecond, { width: '30%', backgroundColor: 'red' }]} />
        </View>
        <View style={[styles.container, { marginTop: 0 }]}>
        <View style={[styles.redPartFirst, { width: '30%', height: 30 }]}>
          <Text style={{textAlign: 'right'}}>{minValue.toFixed(1)}  {unit}</Text>
        </View>
        <View style={[styles.greenPart, { width: '32%' }]} />
        <View style={[styles.redPartSecond, { width: '60%' }]}>
          <View style={[styles.redPartFirst, { width: '40%', height: 30 }]}>
              <Text style={{textAlign: 'left'}}>{maxValue.toFixed(1)}  {unit}</Text>
          </View>
        </View>
      </View>
    </>
)}

export default ReferenceRange;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '80%',
      // justifyContent: 'space-between',
      //marginTop: 30,
      height: 10,
    },
    redPartFirst: {
      // flex: 1,
      //width: '20%',
      // backgroundColor: 'red',
    },
    greenPart: {
      // flex: 1,
      // width: '40%',
      // backgroundColor: 'green',
    },
    redPartSecond: {
      // flex: 1,
      // width: '40%',
      // backgroundColor: 'red',
    },
  })
  
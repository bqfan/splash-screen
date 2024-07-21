import { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#01579B' }}>HealthQ</Text>
      <Entypo name="circle-with-plus" size={40} color={'red'} />
      <View style={[styles.container, { marginBottom: 10 }]}>
        {/* <View style={[styles.redPartFirst, { width: '20%', height: 30 }]}>
          <Text style={{textAlign: 'right'}}>2</Text>
        </View> */}
        <View style={[styles.greenPart, { width: '60%', height: 20}]}>
          <Text style={{textAlign: 'right'}}>2.5</Text>
        </View>
        {/* <View style={[styles.redPartSecond, { width: '30%' }]}>
          <View style={[styles.redPartFirst, { width: '30%', height: 30 }]}>
            <Text style={{textAlign: 'left'}}>3</Text>
          </View>
        </View> */}
      </View>
      <View style={styles.container}>
        <View style={[styles.redPartFirst, { width: '20%', backgroundColor: 'red' }]} />
        <View style={[styles.greenPart, { width: '37.5%', backgroundColor: 'green' }]} />
        <View style={[styles.greenPart, { width: '0.5%', backgroundColor: 'white' }]} />
        <View style={[styles.greenPart, { width: '12%', backgroundColor: 'green' }]} />
        <View style={[styles.redPartSecond, { width: '30%', backgroundColor: 'red' }]} />
      </View>
      <View style={[styles.container, { marginTop: 0 }]}>
        <View style={[styles.redPartFirst, { width: '20%', height: 30 }]}>
          <Text style={{textAlign: 'right'}}>2</Text>
        </View>
        <View style={[styles.greenPart, { width: '50%' }]} />
        <View style={[styles.redPartSecond, { width: '30%' }]}>
          <View style={[styles.redPartFirst, { width: '30%', height: 30 }]}>
            <Text style={{textAlign: 'left'}}>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

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

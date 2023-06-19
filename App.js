/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const textInputInitialValue = '';

function SectionDescription({children}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        styles.sectionDescription,
        {
          color: isDarkMode ? Colors.light : Colors.dark,
        },
      ]}>
      {children}
    </Text>
  );
}

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      {title && (
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [textInputValue, setTextInputValue] = useState(textInputInitialValue);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Multiline Input Backspace Bug">
            <SectionDescription>
              To recreate, enter any text and then press the clear button. The
              logs will show that the TextInput onKeyPress event handler
              receives a Backspace event EVERY time value is changed on iOS 16
              and when the value is reset to an empty string on iOS 15+.
            </SectionDescription>
          </Section>
          <Section>
            <TextInput
              multiline
              placeholder="Enter some text"
              value={textInputValue}
              onChangeText={setTextInputValue}
              onKeyPress={e => {
                console.log('onKeyPress received with key:', e.nativeEvent.key);
              }}
              style={styles.textInput}
            />
          </Section>
          <Section>
            <Button
              title="Clear"
              onPress={() => setTextInputValue(textInputInitialValue)}
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    fontSize: 16,
    padding: 8,
    borderColor: '#eeeeee',
    borderWidth: 1,
  },
});

export default App;

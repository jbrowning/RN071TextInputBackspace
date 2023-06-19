# RN071TextInputBackspace

This is a demonstration of a bug in the React Native TextInput component where the onKeyPress event handler receives a Backspace event on every change, including after the value is cleared.

To run follow the usual steps for running in the iOS simulator:

```
$ yarn && (cd ios && bundle exec pod install)
$ npm run ios
```

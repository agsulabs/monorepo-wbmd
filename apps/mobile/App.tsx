import {API_URL_ANDROID, API_URL_IOS} from '@env';
import {client, appControllerHealth} from '@monorepo/api-client';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Platform} from 'react-native';

type State = {text: string};

const API_BASE_URL = Platform.OS === 'android' ? API_URL_ANDROID : API_URL_IOS;

export default class App extends React.Component<Record<string, never>, State> {
  state: State = {text: 'loading...'};

  async componentDidMount() {
    try {
      client.setConfig({baseUrl: API_BASE_URL});

      const res: unknown = await appControllerHealth();

      this.setState({
        text: JSON.stringify(
          (res as {data?: unknown} | null | undefined)?.data ?? res,
        ),
      });
    } catch (e: unknown) {
      const message =
        e instanceof Error
          ? e.message
          : typeof e === 'string'
            ? e
            : JSON.stringify(e);

      this.setState({text: `error: ${message}`});
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.state.text}</Text>
      </SafeAreaView>
    );
  }
}

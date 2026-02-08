import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { Platform } from "react-native";
import { API_URL_ANDROID, API_URL_IOS } from "@env";

import { client, appControllerHealth } from '@monorepo/api-client';

type State = { text: string };
const API_BASE_URL = Platform.OS === "android" ? API_URL_ANDROID : API_URL_IOS;
export default class App extends React.Component<{}, State> {
  state: State = { text: 'loading...' };

  async componentDidMount() {
    try {
      client.setConfig({ baseUrl: API_BASE_URL });
      const res: any = await appControllerHealth();
      this.setState({ text: JSON.stringify(res?.data ?? res) });
    } catch (e: any) {
      this.setState({ text: `error: ${e?.message ?? String(e)}` });
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.state.text}</Text>
      </SafeAreaView>
    );
  }
}

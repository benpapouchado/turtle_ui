import { SafeAreaView } from 'react-native-safe-area-context';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
}
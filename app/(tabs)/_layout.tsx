import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
    <Stack
      screenOptions={{
        headerShown: useClientOnlyValue(false, false),
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    >
  
      <Stack.Screen name="index" options={{ title: 'Screen One' }} />
      <Stack.Screen name="two" options={{ title: 'Screen Two' }} />
      <Stack.Screen name="three" options={{ title: 'Shop' }} />
    </Stack>
  );
}

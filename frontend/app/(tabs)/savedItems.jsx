import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SavedItems = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Saved Items</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SavedItems
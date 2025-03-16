import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const NoResult = () => {
  return (
      <View style={styles.comtainer}>
        <Image source={images.noResult} resizeMode='contain' style={{ width: '91.666667%', // w-11/12 (11/12 = 91.666667%)
  height: 320,}} />
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20, color: "black" }} >No Result</Text>
          <Text style={{marginTop:8, color:"black", fontSize:12}}> we could not find any result</Text>
    </View>
  )
}

export default NoResult

const styles = StyleSheet.create({
    comtainer: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        marginVertical: 20,
    }
});
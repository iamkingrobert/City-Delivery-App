import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import {LocationMarkerIcon} from 'react-native-heroicons/outline';
import { AntDesign } from '@expo/vector-icons';

const BrandCard = ({
    id,
    imgUrl,
    title,
    rating,
    brand,
    address,
    short_description,
    long,
    lat,
    
}) => {
  return (
    <TouchableOpacity style={{backgroundColor: 'white', marginRight: 8, shadowColor: 'black', shadowOpacity: 0.2}}>
      <Image
        source={{ uri: imgUrl }}
        style={{
          width: 230, height: 140,}}
      />
      <View style={{paddingRight: 3, paddingBottom: 5}}>
        <Text
        style={{
          fontSize: 17, fontWeight: '600', paddingTop: 5
        }}>{title}</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 1, marginTop: 1}}>
          <AntDesign name="star" size={15} color="green" />
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 13, marginLeft: 4}}><Text style={{color: 'green', fontWeight: '600'}}>{rating} </Text>  {brand}</Text>
        </View>
        <View>
          <Text style={{color: 'green', fontSize: 12}}>Store Location: {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default BrandCard
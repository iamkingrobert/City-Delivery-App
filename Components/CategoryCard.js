import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={{position: 'relative', marginRight: 2}}>
    <Image source= {{uri: imgUrl 
        }}
        style={{height: 100, width: 100}}
    />
    <Text style={{position: 'absolute', bottom: 1, left:1, color: 'white', fontSize: 16, fontWeight: '600'}} >{title}
    </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard

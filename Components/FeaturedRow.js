import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import BrandCard from './BrandCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
    <View style={{marginTop: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingStart: 12, marginLeft: 1}}>
    <Text style={{fontWeight: '500', fontSize: '19', marginTop: 3}}>{title}</Text>
    <ArrowRightIcon color='#00CCDD'/>
    </View>
    <Text style={{fontSize: '12', color: 'gray', paddingStart: 12, marginLeft: 1}}>{description}</Text>
    <ScrollView
    horizontal
    contentContainerStyle={{
        paddingHorizontal: 15,
    }}
    showsHorizontalScrollIndicator={false}
    style={{paddingTop: 4,}}
    >

    {/* BrandCard */}
    <BrandCard
        id={123}
        imgUrl={'https://media.gq.com/photos/59f8c444f2dce71f12816308/3:2/w_939,h_626,c_limit/what-is-nike-air-max-270.jpg'}
        title='Nike Air Lede 270'
        rating="4.5"
        brand="Nike"
        address="London, UK"
        short_description="Some Short Description"
        long={0.20}
        lat={5467}
    />
    <BrandCard
        id={123}
        imgUrl={'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fapple-iphone-14-pro-max-price-increase-100-usd-rumors-000.jpg?w=960&cbr=1&q=90&fit=max'}
        title='iPhone 14 Pro'
        rating="4.5"
        brand="Apple Inc"
        address="London, UK"
        short_description="Some Short Description"
        long={0.20}
        lat={5467}
    />
    <BrandCard
        id={123}
        imgUrl={'https://www.macworld.com/wp-content/uploads/2022/12/macbook-pro-m2-graphic-1.jpg?quality=50&strip=all'}
        title='Macbook Pro M2'
        rating="4.5"
        brand="Apple Inc"
        address="London, UK"
        short_description="Some Short Description"
        long={0.20}
        lat={5467}
    />

    </ScrollView>
      
    </View>
  )
}

export default FeaturedRow
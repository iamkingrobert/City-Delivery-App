
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryCard from '../Components/CategoryCard'


export default function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >

    {/* CategoryCard */}
    <CategoryCard imgUrl='https://assets.gqindia.com/photos/6343bda4bac0ed8f5bc20d96/4:3/w_1440,h_1080,c_limit/iPhone-14-Pro-Max-Review_02.jpg' title='Apple iPhones'/>
    <CategoryCard imgUrl='https://media.gq.com/photos/5a5521efa929253c4d20a065/1:1/w_1999,h_1999,c_limit/nike-air-lede-270.jpg' title='Nike Sneakers'/>
    <CategoryCard imgUrl='https://img.tatacliq.com/images/i7/437Wx649H/MP000000010640912_437Wx649H_202109180918331.jpeg' title='Shop Forever 21'/>
    <CategoryCard imgUrl='http://cdn.shopify.com/s/files/1/0290/9650/9492/collections/Barner_Glasses.png?v=1660314622' title='Barner Glasses'/>
    <CategoryCard imgUrl='https://9to5mac.com/wp-content/uploads/sites/6/2022/08/macbook-pro-2022.jpg?quality=82&strip=all' title='Macbook Pro M2'/>




    </ScrollView>
  );
}
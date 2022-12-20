import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  UserIcon, 
  ChevronDownIcon, 
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";
import Categories from '../Components/Categories';
import FeaturedRow from '../Components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });              
    },[])

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image 
          source={require('../assets/NewLogo.png')}
          className="h-9 w-9 bg-gray-300 p-4 rounded-full"
        />
        <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'>City Delivery</Text>
        <Text className='font-bold text-xl'>Current Location<ChevronDownIcon size={20} color='#00CCDD'/></Text>
        </View>
        <UserIcon size={30} color='#00CCDD'/>
      </View>
      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
      <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
      <MagnifyingGlassIcon size={20} color='gray'/>
        <TextInput placeholder='Search for Products, Brands...'
          keyboardType='default'
        />
      </View>
       <AdjustmentsVerticalIcon color='#00CCDD'/>
      </View>

      {/* Body */}
      <ScrollView className='bg-gray-100'
      contentContainerStyle={{
        paddingBottom: 100,
      }}>
      {/* Categories*/}
      <Categories />
      {/* Featured Row */}

      <FeaturedRow
        id='123' 
        title='Featured'
        description='Paid placement for your Brand'
      />

      <FeaturedRow 
        id='124'
        title='Holiday Discounts'
        description='Get quality for less this season of sharing'
      />
      <FeaturedRow 
        id='12345'
        title='Made In Ghana'
        description='Buy top quality Brands from Ghana'
      />



      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
// King Robert Creation


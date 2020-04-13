import React, {FC, useState} from "react";
import Taro, {Current} from '@tarojs/taro';
import {Image, View, Text} from "@tarojs/components";
import './test.scss';

interface IProps {

}

const C: FC<IProps> = ()=>{
  return (
    <View className='container'>
      <Text className='test-title'>这是页面C</Text>
    </View>
  );
}

export default C;

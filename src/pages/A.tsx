import React, {FC, useState} from "react";
import Taro, {Current} from '@tarojs/taro';
import {Image, View, Text, Label} from "@tarojs/components";
import './test.scss';
import {AtList, AtListItem} from "taro-ui";

interface IProps {

}

const A: FC<IProps> = ()=>{
  return (
    <View className='container'>
      <Text className='test-title'>这是页面A</Text>
      <AtListItem title={'跳转到页面B'} onClick={()=>{
        Taro.navigateTo({
          url: '/pages/B?a=这是页面A->B的参数'
        });
      }} />
    </View>
  );
}

export default A;

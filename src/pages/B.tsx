import React, {FC, useState} from "react";
import Taro, {Current} from '@tarojs/taro';
import {Image, View, Text} from "@tarojs/components";
import {AtList, AtListItem} from "taro-ui";
import './test.scss';

interface IProps {

}

const B: FC<IProps> = ()=>{
  const [router, setRouter] = useState<any>(null);
  return (
    <View className='container'>
      <Text className='test-title'>这是页面B</Text>
      <AtListItem title={'跳转到页面C'} onClick={()=>{
        Taro.navigateTo({
          url: '/pages/C?a=这是页面B->C的参数'
        });
      }} />
      <AtListItem title={'获取Current.router'} onClick={()=>{
        console.log('Taro.getCurrentPages:',Taro.getCurrentPages())
        console.log('Current.router:',Current.router);
        setRouter(Current.router);
      }} />
      {router?
        <View className='flex-column' style='padding: 0rpx 20rpx'>
          <Text style={''}>
            {'path: '+router.path}
          </Text>
          <Text style={''}>
            {'params: '+JSON.stringify(router.params)}
          </Text>
        </View>:null}
    </View>
  );
}

export default B;

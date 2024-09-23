import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState(1); 
  const pricePerItem = 141800; 
  const [totalPrice, setTotalPrice] = useState(pricePerItem);

  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice((quantity + 1) * pricePerItem);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice((quantity - 1) * pricePerItem);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image style={styles.image} source={require('./assets/book.png')} />
        </View>
        <View>
          <Text style={styles.textHeader}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.textHeader}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.textPrice}>{totalPrice.toLocaleString()} đ</Text>
          <Text style={styles.textLineThrough}>190.800đ</Text>
          <View
            style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 15,
              }}>
              <TouchableOpacity
                style={{ backgroundColor: '#C0C0C0', width: 15, height: 15, justifyContent: 'center' }}
                onPress={decreaseQuantity}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ paddingHorizontal: 10, fontSize: 18 }}>{quantity}</Text>
              <TouchableOpacity
                style={{ backgroundColor: '#C0C0C0', width: 15, height: 15, justifyContent: 'center' }}
                onPress={increaseQuantity}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#134FEC',
                  fontWeight: 'bold',
                  fontFamily: 'Roboto',
                }}>
                Mua sau
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingLeft: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 13 }}>Mã giảm giá đã lưu</Text>
        <Text
          style={{ paddingLeft: 10, color: '#134FEC', fontFamily: 'Roboto' }}>
          Xem tại đây
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            width: 200,
            borderWidth: 1,
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View
            style={{ width: 30, height: 15, backgroundColor: 'yellow' }}></View>
          <Text style={{ paddingLeft: 10, fontWeight: 'bold', fontSize: 15 }}>
            Mã giảm giá
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Áp dụng
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ height: 15, width: '100%', backgroundColor: '#CCCCCC' }}></View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          width: '100%',
          alignItems: 'center',
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}> Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <TouchableOpacity>
          <Text style={{ color: 'blue', fontWeight: 'bold', padding: 25 }}> Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ height: 15, width: '100%', backgroundColor: '#CCCCCC' }}></View>
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}> Tạm tính</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>
          {totalPrice.toLocaleString()} đ
        </Text>
      </View>

      <View
        style={{ height: 100, width: '100%', backgroundColor: '#CCCCCC' }}></View>
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'Black' }}>
          Thành tiền:
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}>
          {totalPrice.toLocaleString()} đ
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 35,
          width: '90%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          TIẾN HÀNH ĐẶT HÀNG
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 104,
    height: 127,
  },
  header: {
    flexDirection: 'row',
    margin: 10,
  },
  textHeader: {
    padding: 9,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textPrice: {
    paddingLeft: 15,
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textLineThrough: {
    paddingLeft: 15,
    color: '#808080',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textDecorationLine: 'line-through',
  },
});

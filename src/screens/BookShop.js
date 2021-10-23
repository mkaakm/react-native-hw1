import React from "react";

import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Button from "../components/shared/Button/Button";
import {useDispatch} from "react-redux";

import {addToCart} from "../store/cart/cart-slice";
import CartButton from "../components/CartButton";
const books = [
    {
        id: '1',
        name: 'Тьма, что приходит прежде',
        author: 'Скотт Беккер',
        price: 200
    },
    {
        id: '2',
        name: 'Воин кровавых времен',
        author: 'Скотт Беккер',
        price: 300
    },
    {
        id: '3',
        name: 'Нечистивый консульт',
        author: 'Скотт Беккер',
        price: 400
    }
]

const renderItem = ({ item }) => {
    return (
        <View style={styles.bookContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textAuthor}>{item.author}</Text>
            <Text style={styles.textPrice}>{item.price} UAH</Text>
            <Button text='buy' type='dark' onPress={item.onPress}/>
        </View>
    );
};

export default function AllBooks() {
    const dispatch = useDispatch()
    const addBook = (book) => {
        dispatch(addToCart(book))
    }
    const items = books.map(item => ({...item, onPress: () => addBook(item)}))
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                <CartButton/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000',
        position:'relative'
    },
    bookContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    text:{
        fontSize: 20,
        color: "#fff",
        paddingBottom:10
    },
    textAuthor:{
        fontSize: 15,
        color: "#fff",
        paddingBottom:10
    },
    textPrice:{
        fontSize: 15,
        color: "#fff",
        paddingBottom:10
    }
});

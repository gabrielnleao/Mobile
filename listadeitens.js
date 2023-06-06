import React from "react";
import{ StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function ListaItens({ props, funcao}) {
    return (

        <TouchableOpacity onPress={() => funcao(props.key)}>
            <View>
                <Text>{props.itens}</Text>
            </View>
        </TouchableOpacity>
    )
}
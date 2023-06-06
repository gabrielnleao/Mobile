import React from "react";
import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AdicionarItem({ funcao }) {
    const [texto, setTexto] = useState("");

    const pegarMudanca = (val) => {
        setTexto(val);
    }

    return (
        <View style={styles.cabecalho}>

            <TextInput
                style={styles.input}
                placeholder="Adicionar"
                onChangeText={pegarMudanca}
            />

            <Button
                onPress={() => funcao(texto)}
                color="coral"
                title="Adicionar"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '40%',
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 0
    }
})
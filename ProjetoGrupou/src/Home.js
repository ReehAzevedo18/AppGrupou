import React from 'react';
import {Stylesheet, Text, View, TextInput, Image} from 'react-native';

export default function Home(){
    return(
        <View>
            <Image source={require('../assets/img/logo_sem_fundo.png')} style={style.imagePrincipal}></Image>

            <Text style={style.formTexto}>E-mail</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.formTexto}>Senha</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.formSubTitulo}>Esqueceu sua senha?</Text>

            <button title="Realizar cadastro"
            onPress={ () => navigation.navigate('Cadastro')}
            style={style.formButton} />
            {/* <Text style={style.formTexto} onPress={ () => navigation.navigate('Cadastro')}>É novo por aqui? Realize seu cadastro!</Text> */}
            <button title="Entrar" style={style.formButton}></button>
        </View>
    )
};

const style = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imagePrincipal: {
      position: absolute,
      alignItems: 'center',
      width: 367,
      height: 129      
    },

    formTexto: {
      fontSize: 18,
      color: '#000000',
      alignItems: 'left'
    },

    formSubTitulo: {
      fontSize: 14,
      color: '#000000',
      alignItems: 'right'
    },

    input:{
      borderRadius: 5,
      color: '#FFFFFF'
    },

    formButton: {
      position: absolute,
      width: 206,
      height: 27,
      background: '#EC9023',
      borderRadius: 80
    }
});


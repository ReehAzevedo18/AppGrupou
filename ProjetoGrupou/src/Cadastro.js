import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { RadioButton } from 'react-native-paper';



export default function Cadastro(){
    return(
        <View style={style.container}>
            <Image source={require('../assets/img/logo_sem_fundo.png')} style={style.imagePrincipal}></Image>
            <Text style={style.formTexto}>Quem é você?</Text>
            <RadioButton
                value="Aluno"
                status={ checked === 'Aluno' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Aluno')}
            /> 
            <RadioButton
              value="Professor"
              status={ checked === 'Professor' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Professor')}
            />

            <Text style={style.formTexto}>Nome</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.formTexto}>Matrícula (caso seja aluno)</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.formTexto}>CPF (caso seja professor)</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.formTexto}>Curso</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.formTexto}>E-mail</Text>
            <TextInput style={style.input}></TextInput>

            <Text style={style.formTexto}>Senha</Text>
            <TextInput style={style.input}></TextInput>

            <button name="Cadastrar" style={style.formButton}></button>

            <button title="Início"
            onPress={ () => navigation.navigate('Home')}
            style={style.formButton} />
        </View>
    );
}

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
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'
import AlunoService from './AlunoService'

export default function AlunoForm({ navigation, route }) {

  const AlunoAntigo = route.params || {}

  const [nome, setNome] = useState(AlunoAntigo.nome || "")
  const [cpf, setCpf] = useState(AlunoAntigo.cpf || "")
  const [email, setEmail] = useState(AlunoAntigo.email || "")
  const [telefone, setTelefone] = useState(AlunoAntigo.telefone || "")
  const [dataNascimento, setDataNascimento] = useState(AlunoAntigo.dataNascimento || "")

  async function salvar() {
    let aluno = {
      nome,
      cpf,
      email,
      telefone,
      dataNascimento
    }

    if (!aluno.nome || !aluno.cpf || !aluno.email || !aluno.dataNascimento || !aluno.telefone) {
      alert('Preencha todos os campos!')
   return 
  }

if (AlunoAntigo.id){
  aluno.id = AlunoAntigo.id
  await AlunoService.atualizar(aluno);
  alert ('Aluno alterado');


}else {
  
  await AlunoService.salvar(aluno)
  alert('Aluno cadastrado com sucesso!!')
  navigation.reset({
    index: 0,
    routes: [{name: 'AlunoLista'}]

  })
  }
  }
  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Informe os dados do Aluno:</Text>
      
      <Text variant='titleLarge'>ID do Aluno: {AlunoAntigo.id || 'NOVO'}</Text>

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Nome"
        placeholder='Informe o nome'
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="CPF"
        placeholder='Informe o CPF'
        value={cpf}
        onChangeText={setCpf}
        keyboardType='decimal-pad'
        render={(props) => (
          <TextInputMask 
            {...props}
            type={'cpf'}
          />
        )}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="E-mail"
        placeholder='Informe o E-mail'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Telefone"
        placeholder='Informe o Telefone'
        value={telefone}
        onChangeText={setTelefone}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99)'
            }}
          />
        )}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Data de Nascimento"
        placeholder='Informe a Data'
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType='numeric'
        render={(props) => (
          <TextInputMask
            {...props}
             type={'datetime'}
             options={{
              format: 'DD/MM/YYYY'
             }} 
          />
        )}
      />

      <Button
        style={styles.input}
        mode='contained'
        onPress={salvar}
      >
        Salvar
      </Button>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    width: '90%',
    marginTop: 10
  }
})
const URL = 'https://api-contato-dot-api-samples-423102.uc.r.appspot.com/api/contatos'

export async function findAll() {
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer 12121968'
    }
  }

  const httpResponse = await fetch(URL, requestInit)

  if(httpResponse.ok) {
    console.log('Sucesso ao consultar os contatos')
    return await httpResponse.json()
  } else {
    const error = await httpResponse.text()
    console.log('Falha ao consultar os contatos:', httpResponse.status, error)

    throw new Error('Deu ruim')
  }
}


export async function deleteById(id) {
  const requestInit = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer 12121968'
    }
  }

  const httpResponse = await fetch(URL + '/' + id, requestInit)

  if(httpResponse.ok) {
    console.log('Sucesso ao remover o contato')
    return await httpResponse.json()
  } else {
    const error = await httpResponse.text()
    console.log('Falha ao remover o contato:', httpResponse.status, error)

    throw new Error('Deu ruim')
  }
}

export async function insert(tipo, nome, telefone) {
  const body = JSON.stringify({ tipo, nome, telefone })

  console.log('Body: ', body)

  const requestInit = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 12121968',
      'Content-Type': 'application/json'
    },
    body
  }

  const httpResponse = await fetch(URL, requestInit)

  if(httpResponse.ok) {
    console.log('Contato cadastrado com sucesso!')
    return await httpResponse.json()
  } else {
    const erro = await httpResponse.text()
    console.log(httpResponse.status, erro)
    throw new Erro(erro)
  }

} 

export async function update(id, tipo, nome, telefone) {
  const body = JSON.stringify({ tipo, nome, telefone })

  console.log('Body: ', body)

  const requestInit = {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer 12121968',
      'Content-Type': 'application/json'
    },
    body
  }

  const httpResponse = await fetch(URL + '/' + id, requestInit)

  if(httpResponse.ok) {
    console.log('Contato alterado com sucesso!')
    return await httpResponse.json()
  } else {
    const erro = await httpResponse.text()
    console.log(httpResponse.status, erro)
    throw new Erro(erro)
  }

} 











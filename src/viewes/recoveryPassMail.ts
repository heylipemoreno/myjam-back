export function recoverPassword(userName: string, token: string) {
    const mail = `
    Olá, ${userName}.
    Segue abaixo o link para atualizar a sua senha:
    <a href= localhost:3000/users/recover?secret=${token}> Clique aqui </a>

    Caso não funcionar, copie o link e cole no navegador:
    localhost:3000/users/recover?secret=${token}
    `

    return mail;
}
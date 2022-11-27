export default {
    APP: {
        MESSAGES: {
            STATUS: {
                OK: 'Status: OK [iniciado]'
            }
        }
    },
    ERROR: {
        TYPE: {
            UNAUTHORIZED_ERROR: 'UnauthorizedError',
            VALIDATION_ERROR: 'ValidationError'
        },
        MESSAGE: {
            UNAUTHORIZED: 'O token informado está inválido ou se encontra ausente.',
            VALIDATION: 'Todos os campos são obrigatórios.'
        }
    },
    CRUD: {
        USERS: {
            NOT_FOUND: 'O usuário não existe.',
            UPDATE: 'Os dados do usuário foram atualizados com sucesso.',
            EXISTS: 'O usuário já existe.'
        },
        SONGS: {
            NOT_FOUND: 'A música não está registrada.',
            UPDATE: 'Os dados da música foram atualizados com sucesso.',
            EXISTS: 'A música já existe'
        },
        QUESTIONS: {
            NOT_FOUND: 'Não foi encontrada nenhuma questão com esse ID.',
            UPDATE: 'Questão atualizada com sucesso.',
            EXISTS: 'A questão já existe.'
        },
        LESSONS: {
            NOT_FOUND: 'Não foi encontrado nenhuma lição com esse ID.',
            UPDATE: 'Lições atualizadas com sucesso.',
            QUESTIONS: {
                NOT_FOUND: 'A lição informada não contém questões cadastradas.'
            },
            EXISTS:'A lição já existe.'
        },
        GENRES: {
            NOT_FOUND: 'Este gênero musical não está registrado.',
            UPDATE: 'O gênero musical foi atualizado com sucesso.',
            EXISTS:'O gênero musical já existe.'
        },
        CLASSES: {
            NOT_FOUND: 'Esta aula não está registrada.',
            UPDATE: 'A aula foi atualizada com sucesso.'
        },
        CHORDS: {
            NOT_FOUND: 'Este acorde não está registrado.',
            UPDATE: 'O acorde foi atualizado com sucesso.',
            EXISTS:'O acorde já existe.'
        },
        PRACTICE: {
            NOT_FOUND: 'Esta prática não está registrada.',
            UPDATE: 'A prática foi atualizada com sucesso.',
            EXISTS: 'A prática já existe.'
        },
        STYLE: {
            NOT_FOUND: 'O estilo não está registrado.',
            UPDATE: 'O estilo foi atualizado com sucesso.',
            EXISTS:'O estilo já existe.'
        },
        LEARN: {
            NOT_FOUND: 'Não foi encontrada nenhuma opção com o ID informado.',
            UPDATE: 'A opção foi atualizada com sucesso.',
            EXISTS: 'A opção já existe.'
        },
        EXPERIENCE: {
            NOT_FOUND: 'Não foi encontrada nenhuma opção com o ID informado.',
            UPDATE: 'A experiência foi atualizada com sucesso.',
            EXISTS:'A experiência já foi incluída para o ID informado'
        },
        INSTRUMENT: {
            NOT_FOUND: 'O instrumento não está registrado.',
            UPDATE: 'O instrumento foi atualizado com sucesso.',
            EXISTS:'O instrumento já existe.'
        },
        GENRES_SONGS:{
            NOT_FOUND:'Tabela de relação [Songs => Genres] não encontrada.',
            UPDATE:'Tabela de relação [Songs => Genres] atualizada com sucesso.',
            EXISTS:'A tabela de relação [Songs => Genres] já existe.'
        },
        SONGS_CHORDS:{
            NOT_FOUND:'Tabela de relação [Songs => Chords] não encontrada.',
            UPDATE:'Tabela de relação [Songs => Chords] atualizada com sucesso.',
            EXISTS:'A tabela de relação [Songs => Chords] já existe.'
        },
        USERS_CHORDS:{
            NOT_FOUND:'Tabela de relação [Users => Chords] não encontrada.',
            UPDATE:'Tabela de relação [Users => Chords] atualizada com sucesso.'
        },
        USERS_LESSONS:{
            NOT_FOUND:'Tabela de relação [Users => Lessons] não encontrada.',
            UPDATE:'Tabela de relação [Users => Lessons] atualizada com sucesso.'
        },
        USERS_QUESTIONS:{
            NOT_FOUND:'O usuário não tem respostas cadastradas.',
            UPDATE:'Tabela de relação [Users => Questions] atualizada com sucesso.'
        },
        USERS_SONGS:{
            NOT_FOUND:'Tabela de relação [Users => Songs] não encontrada.',
            UPDATE:'Tabela de relação [Users => Songs] atualizada com sucesso.'
        },
        ERROR: 'Houve um erro ao fazer requisição com o servidor, todas as informações se encontram nos Logs.'
    },
    LOGIN: {
        MESSAGE: {
            ABSENT: 'O Token obrigatório está ausente na requisição.',
            ERROR: 'Ocorreu um erro no processo de autenticação.',
            PROCESS_ERROR: 'Ocorreu um erro no processo de Decode do Token.'
        },
        USECASE: {
            EMAIL_INCORRECT: 'O email informado está incorreto',
            PASSWORD_INCORRECT: 'A senha está incorreta'
        },
        ERROR: 'Ocorreu um erro com o servidor na tentativa de logar e criar um Token'
    }
}
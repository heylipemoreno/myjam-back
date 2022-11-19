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
            UNAUTHORIZED_EROOR: 'UnauthorizedError',
            VALIDATION_ERROR: 'ValidationError'
        },
        MESSAGE: {
            UNAUTHORIZED: 'O token informado está inválido ou se encontra ausente',
            VALIDATION: 'Todos os campos são obrigatórios'
        }
    },
    CRUD: {
        USERS: {
            NOT_FOUND: 'O usuário não existe',
            UPDATE: 'Os dados do usuário foram atualizados com sucesso'
        },
        SONGS: {
            NOT_FOUND: 'A música não está registrada',
            UPDATE: 'Os dados da música foram atualizados com sucesso'
        },
        QUESTIONS: {
            NOT_FOUND: 'Não foi encontrada nenhuma questão com esse ID',
            UPDATE: 'Questão atualizada com sucesso'
        },
        LESSONS: {
            NOT_FOUND: 'Não foi encontrado nenhuma lição com esse ID',
            UPDATE: 'Lições atualizadas com sucesso'
        },
        GENRES: {
            NOT_FOUND: 'Este gênero musical não está registrado',
            UPDATE: 'O gênero musical foi atualizado com sucesso'
        },
        CLASSES: {
            NOT_FOUND: 'Esta aula não está registrada',
            UPDATE: 'Esta aula foi atualizada com sucesso'
        },
        CHORDS:{
            NOT_FOUND: 'Este acorde não está registrado',
            UPDATE: 'O acorde foi atualizado com sucesso'
        },
        ERROR: 'Houve um erro ao fazer requisição com o servidor, todas as informações se encontram nos Logs.'
    }
}
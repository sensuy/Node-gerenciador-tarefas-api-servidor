const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
	listarTarefaId,
	listarTarefas,
	cadastrarTarefa,
	atualizarTarefa,
	removerTarefa,
	concluirTarefa
} = require('./controllers/gerenciador-tarefas');

const app = express();

const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// get, post, put,  delete
function naoImplementado(req, res) {
	res.status(501).json({ err: 'Não implementado.' });
}

// Listar todas as tarefas - get
app.get('/gerenciador-tarefas', listarTarefas);
// listar uma tarefa por id - get
app.get('/gerenciador-tarefas/:id', listarTarefaId);
// Cadastrar uma tarefa - post
app.post('/gerenciador-tarefas', cadastrarTarefa);
// Atualizar uma tarefa - put
app.put('/gerenciador-tarefas/:id', atualizarTarefa);
// Remover uma tarefa - delete
app.delete('/gerenciador-tarefas/:id', removerTarefa);
// Concluir uma tarefa - put
app.put('/gerenciador-tarefas/:id/concluir', concluirTarefa);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));

# Receitinhas da Vovó 👵🍰

Este é um site de receitas desenvolvido com Next.js que oferece visualização pública de receitas e gerenciamento protegido por autenticação. Um local para armazenar e compartilhar receitas tradicionais, transmitidas de geração em geração.

## Estrutura do Projeto

O projeto segue uma estrutura onde:
- **Rotas públicas**: Visualização de receitas (GET) e (GetById)

### Principais Funcionalidades

- **Página Inicial (`/`)**: Exibe página de boas vindas
- **Página de receitas (`/recipes`)**: Exibea página de receitas



## Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19
- **Estilização**: CSS Modules,Tailwind
- **API**: Conexão com backend em http://localhost:4000

## Instalação e Configuração

### Requisitos
- Node.js 18.0 ou superior
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Vinirocha388/Front-End-RdV2.git
cd RdV-Front-End
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```


3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.


# Guia Passo a Passo: Receitinhas da Vovó 🍲

Este guia vai ajudar você a navegar e utilizar todas as funcionalidades do site Receitinhas da Vovó.

## 📱 Navegação pelo Site (Para Visitantes)

### Página Inicial
1. Ao entrar no site, você verá a página inicial com as receitas mais recentes
2. Use a barra de navegação superior para acessar diferentes seções

### Visualização de Receitas
 Ao clicar em uma receita, você verá:
   - Imagem da receita
   - Lista de ingredientes
   - Modo de preparo passo a passo
   - Categoria da receita

### Edição de Receitas (clicar na imagem da cozinheira na home)
1. No Dashboard, localize a receita que deseja editar
2. Clique no ícone de lápis (editar)
3. Faça as alterações necessárias no formulário
4. Clique em "Atualizar Receita"

### Exclusão de Receitas
1. No Dashboard, localize a receita que deseja excluir
2. Clique no ícone de lixeira (excluir)
3. Confirme a exclusão na janela de confirmação


## 🛠️ Solução de Problemas

### Problemas ao Criar/Editar Receitas
1. Certifique-se de preencher todos os campos obrigatórios
2. Se houver erro ao enviar a imagem, verifique se está no formato correto (JPG, PNG)
3. O tamanho máximo para imagens é de 5MB


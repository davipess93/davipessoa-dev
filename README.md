# Meu Site Pessoal

Este projeto foi desenvolvido utilizando **Next.js**, **ShadCN/UI** e **Tailwind CSS**. Ele exibe informações diretamente do **GitHub** e da API do **Google**, então algumas configurações são necessárias para que tudo funcione corretamente.

## 📌 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: 18 ou superior)
- [Git](https://git-scm.com/)

## 🚀 Instalação

1. Clone o repositório:

   ```sh
   git clone git@github.com:davipess93/davipessoa-dev.git
   mv davipessoa-dev [NOME DO SEU PROJETO]
   cd [NOME DO SEU PROJETO]
   ```

2. Instale as dependências (devido a incompatibilidades com o **npm**, use `--force`):

   ```sh
   npm install --force
   ```

   Ou, se estiver usando **yarn**:

   ```sh
   yarn install
   ```

3. Configure as variáveis de ambiente:

   O site utiliza informações da API do **GitHub**, então é necessário configurar algumas variáveis de ambiente.  

   Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes configurações:

   ```sh
   GITHUB_PERSONAL_KEY=sua-chave-aqui
   GITHUB_API=https://api.github.com
   GITHUB_USER=seu-usuario
   GITHUB_REPO_README=seu-usuario
   WEBSITE_API=url-do-site
   GOOGLE_CREDENTIALS_BASE64=credenciais-google-condificada-para-base64
   GOOGLE_DOC_ID=id-do-documento
   ```

4. **Gerando uma Personal Access Token (PAT) no GitHub**  

   Para que o site consiga acessar seus dados no GitHub, você precisa gerar um **Personal Access Token**:

   - Acesse [GitHub Personal Access Tokens](https://github.com/settings/personal-access-tokens).
   - Vá até **Generate new token (Fine-grained tokens)**.
   - Defina um nome para o token, uma descrição, data de expiração o modo de acesso aos repositórios.
   - Clique em **Generate token** e copie a chave gerada.
   - Cole a chave na variável `GITHUB_PERSONAL_KEY` no arquivo `.env.local`.

## 🔄 Executando o Projeto

Para rodar o projeto em ambiente de desenvolvimento:

```sh
npm run dev
```

Ou, se estiver usando **yarn**:

```sh
yarn dev
```

O site estará disponível em **http://localhost:3000**.

## 🎯 Exibindo o Site com dados Perfil do GitHub

Para que o site seja exibido automaticamente com dados do seu perfil do **GitHub**, o nome do repositório deve ser **exatamente o mesmo do seu nome de usuário no GitHub**.  

Exemplo: Se seu usuário for `joaodev`, o repositório deve ser:

```
https://github.com/joaodev/joaodev
```

Isso garantirá que o site apareça diretamente no seu perfil.

---

## 📝 Modelo de README para o Perfil do GitHub

Crie um repositório com o mesmo nome do seu usuário no GitHub e adicione um arquivo `README.md` com o seguinte conteúdo:

```md
## Sobre mim  
[ALGUMA DESCRIÇÃO]

## Carreira
- [NOME DA EMPRESA]
  - **[NOME DO CARGO]** / [PERÍODO]

## Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
```

Obs: na seção "carreira" pode ser colocado várias empresas, assim como a seção de "cargo e período" que são separados pela barra. Na seção "Tecnologias" também podem ser colocadas várias separadas por um espaço em branco, seguindo o de badge padrão do [Shields.io](https://shields.io/)

## 📄 Google Docs API

O download do currículo é feito pela API do Google, pode ser utilizado qualquer formato, mas eu utilizo o docx para poder sempre deixar o currículo atualizado.

Para utilizar a API do Google a ter acesso ao seu arquivo alguns passos precisam ser executados:

- Primeiro é preciso criar um projeto em [Google Cloud Console](https://console.cloud.google.com)
- No painel do projeto escolher as apis que serão ativas: Google Drive API e Google Docs API
- Em credenciais criar uma conta de serviço
- Após a conta criada procurar a aba chaves e ir em adicionar chave(um arquivo json será gerado)
- Use alguma ferramenta para transformar em base64 e cole na variável de ambiente

---

Agora é só configurar e colocar no ar! 🚀

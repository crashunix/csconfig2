# CSConfig
O CSConfig é um app para configuração e execução de binds em tempo real para o jogo CS:GO. O servidor foi desenvolvido em Electron + Express, enquanto o cliente é um aplicativo Ionic + Angular.

## Instalação
Experimente utilizar o pnpm para gerenciar as dependências deste projeto.

```bash
npm install -g pnpm
```

## Server
O servidor é construído com Electron e utiliza um servidor Express em paralelo com a aplicação principal.

### Instalando as dependências
Entre na pasta **/server** e execute o seguinte comando para instalar as dependências:

```bash
pnpm install
```

### Executando o Servidor
Para iniciar o servidor, execute o seguinte comando:

```bash
pnpm start
```

Isso iniciará tanto o servidor Express quanto a aplicação Electron.

## App
O aplicativo cliente é construído com Ionic e permite a conexão por IP ao servidor na rede interna. Ele oferece uma interface para configurar e executar binds no CS:GO.

### Pré-requisitos
Certifique-se de ter a CLI do Ionic instalada globalmente para executar o aplicativo.

```bash
pnpm add -g @ionic/cli
```

### Instalando as dependências
Entre na pasta **/client** e execute o seguinte comando para instalar as dependências:

```bash
pnpm install
```

### Executando o Aplicativo
Para executar o aplicativo Ionic, execute o seguinte comando na raiz do projeto app:

```bash
ionic serve
```

Isso iniciará o aplicativo no navegador padrão, onde você poderá interagir com a interface de configuração e execução de binds do CS:GO.

Este projeto utiliza o gerenciador de pacotes pnpm como uma alternativa ao npm ou yarn. O pnpm oferece uma experiência de instalação mais rápida e eficiente, além de economizar espaço em disco. Se preferir usar npm ou yarn, você pode substituir os comandos pnpm pelos equivalentes do npm ou yarn.

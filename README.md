# Coffee Delivery - Desafio

Este repositório contém o desafio de desenvolver uma aplicação completa para gerenciar um carrinho de compras de uma cafeteria fictícia.

## Sobre o desafio

A aplicação deve ser capaz de:

- Exibir uma listagem de produtos (cafés) disponíveis para compra.
- Adicionar uma quantidade específica de itens no carrinho.
- Aumentar ou remover a quantidade de itens no carrinho.
- Permitir que o usuário preencha um formulário com o seu endereço.
- Exibir o total de itens no carrinho no Header.
- Calcular e exibir o valor total do carrinho (quantidade x preço de cada produto).

## Tecnologias utilizadas

- **React** para a construção da interface do usuário.
- **React Router** para o roteamento entre páginas.
- **Context API** e **useReducer** para gerenciar o estado global do carrinho e do pedido.
- **Zod** para a validação dos dados do formulário.
- **Styled Components** para estilizações dinâmicas.
- **React Hook Form** para manipulação de formulários.
- **React Hot Toast** para feedbacks visuais.

## Estrutura do projeto

### Principais páginas

- **Home**: exibe os produtos disponíveis para compra.
- **Checkout**: permite que o usuário insira as informações do endereço e visualize o carrinho.
- **Order Confirmed**: confirmação do pedido, exibindo um resumo.

### Contextos principais

#### CartContext

Gerencia as funcionalidades do carrinho de compras:

- Adicionar produtos ao carrinho.
- Atualizar a quantidade de produtos.
- Remover produtos.
- Limpar o carrinho.
- Calcular o total de itens e o valor total do carrinho.

#### OrderContext

Gerencia as informações do pedido:

- Armazenar e validar os dados do formulário de endereço.
- Limpar os dados do pedido após a confirmação.

### Reducers

#### cartReducer

Responsável por gerenciar o estado do carrinho:

- `ADD_TO_CART`: adiciona um produto ou atualiza sua quantidade.
- `REMOVE_ITEM`: remove um produto do carrinho.
- `UPDATE_QUANTITY`: atualiza a quantidade de um produto.
- `CLEAR_CART`: limpa todo o carrinho.

#### orderReducer

Responsável por gerenciar o estado do pedido:

- `SET_ORDER_DATA`: define os dados do pedido após a validação.
- `CLEAR_ORDER_DATA`: reseta os dados do pedido.

### Rotas principais

- **/**: Página inicial (Home).
- **/checkout**: Checkout e formulário de endereço.
- **/order-confirmed**: Pedido confirmado.

## Como executar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git;
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie a aplicação:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em [http://localhost:5173](http://localhost:5173).

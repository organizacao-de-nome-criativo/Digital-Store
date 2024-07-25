# Documentação do Projeto

Bem-vindo à documentação do projeto! Esta documentação foi criada para ajudar novos desenvolvedores a entenderem a estrutura do projeto e a começarem a contribuir.

## Índice

- [Introdução](#introdução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Descrição dos Diretórios e Arquivos](#Descrição-dos-Diretórios-e-Arquivos)
- [Dependências](#dependências)
- [Práticas Recomendadas](#práticas-recomendadas)

## Introdução

Este projeto é uma aplicação web construída com React Js. 

## Estrutura do Projeto

Abaixo está a estrutura geral do projeto:

      digital-store/
    ├── src/
    │ ├── Components/
    │ │ ├── AsideSection/
    │ │ ├── Button/
    │ │ ├── CardSection/
    │ │ ├── Carousel/
    │ │ ├── FeaturedSection/
    │ │ ├── Footer/
    │ │ ├── Header/
    │ │ ├── HighlightsSection/
    │ │ ├── Nav/
    │ │ ├── OffersSection/
    │ │ ├── PromoCard/
    │ ├── Pages/
    │ │ ├── Categories/
    │ │ ├── Home/
    │ │ ├── PageNotFound/
    │ │ ├── Products/
    │ ├── Requests/
    │ ├── json/
    │ ├── .eslintrc.cjs
    │ ├── App.jsx
    │ ├── index.css
    │ ├── main.jsx
    ├── .gitignore

## Descrição dos Diretórios e Arquivos

- **src/**: Diretório raiz do código-fonte da aplicação.
  - **Components/**: Contém todos os componentes reutilizáveis da interface.
    - **AsideSection/**: Componente da seção lateral.
    - **Button/**: Componentes de botões.
    - **CardSection/**: Componentes de seção de cartões.
    - **Carousel/**: Componente de carrossel da HomePage.
    - **FeaturedSection/**: Componente de seção em destaque, pénultima seção da HomePage.
    - **Footer/**: Componente de rodapé.
    - **Header/**: Componente de cabeçalho.
    - **HighlightsSection/**: Componente de seção de destaques, compõe a parte de promoções e os icones dos produtos da página.
    - **Nav/**: Componente de navegação, as rotas do router dom estão em sua maioria aqui.
    - **OffersSection/**: Componente de seção de ofertas, representa o texto com o botão ao lado do slide principal.
    - **PromoCard/**: Componente de cartão promocional, aquele logo abaixo do carrossel.
  - **Pages/**: Contém os componentes das páginas principais da aplicação.
    - **Categories/**: Página de categorias.
    - **Home/**: Página inicial.
    - **PageNotFound/**: Página de erro 404.
    - **Products/**: Página de produtos.
  - **Requests/**: Página de pedidos do usuário.
  - **json/**: Diretório para armazenar arquivos JSON utilizados na aplicação, tipo um banco de dados local.
  - **App.jsx**: Componente raiz da aplicação.
  - **index.css**: Arquivo de estilos CSS global, os estilos principais estão aqui.

## Práticas Recomendadas

 - **Não use bootstrap**
 - **100% na mão**
 - **Organize cada componente ou page em pastas**
 - **Não use bootstrap**





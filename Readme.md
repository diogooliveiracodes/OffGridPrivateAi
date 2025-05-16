# OffGrid Private Ai - English

## Overview
OffGrid Private AI is a local artificial intelligence solution that allows you to run large language models (LLMs) on your own hardware. It is designed to be easy to use and deploy, with a strong focus on privacy and security.

By default, the project uses the gemma2:2b model — a language model with 2 billion parameters, optimized to run on machines with at least 8 GB of RAM, making it accessible to a wide range of users.
If you wish to use a different model, refer to the table at the end of this document and modify line 19 of the docker-compose.yml file with the desired model name.

## Prerequisites
This project requires a machine with at least 8GB of RAM. For optimal performance, a machine with GPU support is recommended.

Ensure Docker is installed on your machine, and if you're using GPU support, make sure NVIDIA drivers and Docker GPU support are properly configured.

## Installation
The installation time is approximately 2 to 10 minutes, depending on your internet connection and hardware.

### Windows
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Execute the install script file.

### Linux | Mac
1. Install [Docker](https://docs.docker.com/engine/install/).
2. Install [Docker Compose](https://docs.docker.com/compose/install/).
3. In the project folder, run the following script:  
    ```bash
    docker-compose up -d
    ```

## Access

http://localhost:3000

<hr style="border: 1px solid white;">

# OffGrid Private AI - Português

## Visão Geral
OffGrid Private AI é uma solução de inteligência artificial local que permite executar modelos de linguagem de grande porte (LLMs) diretamente no seu próprio hardware. Foi projetada para ser simples de usar e implantar, com ênfase em privacidade e segurança.

Por padrão, o projeto utiliza o modelo gemma2:2b, um LLM com 2 bilhões de parâmetros, otimizado para rodar em máquinas com pelo menos 8 GB de RAM — o que o torna acessível para a maioria dos usuários.
Caso deseje utilizar outro modelo, consulte a tabela no final deste documento e edite a linha 19 do arquivo docker-compose.yml, substituindo pelo nome do modelo desejado.

## Pré-requisitos
Este projeto requer uma máquina com pelo menos 8GB de RAM. Para um desempenho ideal, recomenda-se uma máquina com suporte a GPU.

Certifique-se de que o Docker esteja instalado em sua máquina e, se estiver usando suporte a GPU, verifique se os drivers NVIDIA e o suporte a GPU do Docker estão configurados corretamente.


## Instalação
O tempo de instalação é de aproximadamente 2 a 10 minutos, dependendo da sua conexão com a internet e as configurações do seu computador.

### Windows
1. Instale o [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Execute o arquivo de script de instalação contido na pasta do projeto.

### Linux | Mac
1. Instale o [Docker](https://docs.docker.com/engine/install/).
2. Instale o [Docker Compose](https://docs.docker.com/compose/install/).
3. Na pasta do projeto, execute o seguinte script: 
    ```bash
    docker-compose up -d
    ```
## Acesso
http://localhost:3000

<hr style="border: 1px solid white;">


# Available Models

<table border="1">
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Size</th>
      <th>Model</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8B</td>
      <td>4.7GB</td>
      <td>llama3.1</td>
    </tr>
    <tr>
      <td>70B</td>
      <td>40GB</td>
      <td>llama3.1:70b</td>
    </tr>
    <tr>
      <td>405B</td>
      <td>231GB</td>
      <td>llama3.1:405b</td>
    </tr>
    <tr>
      <td>3.8B</td>
      <td>2.3GB</td>
      <td>phi3</td>
    </tr>
    <tr>
      <td>14B</td>
      <td>7.9GB</td>
      <td>phi3:medium</td>
    </tr>
    <tr>
      <td>2B</td>
      <td>1.6GB</td>
      <td>gemma2:2b</td>
    </tr>
    <tr>
      <td>9B</td>
      <td>5.5GB</td>
      <td>gemma2</td>
    </tr>
    <tr>
      <td>27B</td>
      <td>16GB</td>
      <td>gemma2:27b</td>
    </tr>
    <tr>
      <td>7B</td>
      <td>4.1GB</td>
      <td>mistral</td>
    </tr>
    <tr>
      <td>1.4B</td>
      <td>829MB</td>
      <td>moondream</td>
    </tr>
    <tr>
      <td>7B</td>
      <td>4.1GB</td>
      <td>neural-chat</td>
    </tr>
    <tr>
      <td>7B</td>
      <td>4.1GB</td>
      <td>starling-lm</td>
    </tr>
    <tr>
      <td>7B</td>
      <td>3.8GB</td>
      <td>codellama</td>
    </tr>
    <tr>
      <td>7B</td>
      <td>3.8GB</td>
      <td>llama2-uncensored</td>
    </tr>
    <tr>
      <td>7B</td>
      <td>4.5GB</td>
      <td>llava</td>
    </tr>
    <tr>
      <td>10.7B</td>
      <td>6.1GB</td>
      <td>solar</td>
    </tr>
  </tbody>
</table>
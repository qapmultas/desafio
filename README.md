Desafio de código - QAP Multas
===

Considere um aplicativo de uma tela, onde é listado três opções com título descritivo e possibilidade de ativar ou desativar cada item (switch). As opções são descritas abaixo:

- Receber e-mail: s/n
- Modo escuro: s/n
- Login automático: s/n

Problema
---
É necessário que as opções selecionadas sejam salvas no servidor, em tempo real e de forma invisível para o usuário. E para que isso seja possível, atualmente o aplicativo faz uma requisição POST a cada clique de switch. Porém esta implementação, apesar de funcional, faz com que o número de requisições seja muito elevado.

Proposta
---
Diminuir o máximo o número de requisições POST deste aplicativo, mas mantendo a mesma experiência de usuário.

Tarefa
---
Desenvolva este aplicativo já com a solução proposta. Demonstre visivelmente (ou em log) a contagem de número de requisições feitas para que possamos avaliar. Não é necessário criar o backend desse aplicativo, pode ser apenas uma demonstração de que a requisição foi feita e contabilizada. Será avaliado também a forma que são tratados as exceções.

Clone este repositório e apresente um pull request de sua solução quando concluir.

É obrigatório desenvolver este aplicativo em **Flutter**.

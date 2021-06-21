# Resumo - Etapa 05 - Aula 04-02

## 1. Event Bubbling e Event Delegation

- Se eu tiver um ``eventListener`` em um elemento ``<li>`` e clicar neste, o evento irá se propagar até o ``<ul>``, verificando se existe algum tipo de ``eventListener`` nele. Se existir, este será disparado também. Isso acontecerá até último elemento pai de ``<li>``, no caso, o ``<body>``;

- Como fazer com que isso não aconteça?
    - Inserindo um ``event.stopPropagation()``;

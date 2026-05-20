# Damas Multilinguagem

Jogo de dama em HTML, CSS e JavaScript puro, pronto para abrir no navegador sem build.

## Pontos base antes da publicacao

- Interface em quatro idiomas: portugues, ingles, espanhol e frances.
- Tabuleiro 8x8 com pecas vermelhas e pretas.
- Movimentos diagonais para pecas comuns.
- Capturas obrigatorias quando disponiveis.
- Multicaptura com a mesma peca.
- Promocao para dama ao chegar ao final do tabuleiro.
- Contagem de pecas e deteccao de vitoria por captura ou bloqueio.
- Modo contra bot com tres niveis: facil, medio e velho da praca.
- Opcao online com login local e criacao de sala; multiplayer real ainda exige um servidor de sincronizacao antes da publicacao final dessa funcao.
- Damas se movem em diagonais livres por qualquer distancia e nao saltam pecas da mesma cor.
- Empate automatico apos 20 lances sucessivos so de damas sem captura ou deslocamento de pedra.
- Finais reduzidos especificos sao declarados empatados apos 5 lances.

## Como executar

Abra `index.html` diretamente no navegador.

## Arquivos

- `index.html`: estrutura da tela.
- `styles.css`: layout visual responsivo.
- `app.js`: regras, estado do jogo e traducoes.

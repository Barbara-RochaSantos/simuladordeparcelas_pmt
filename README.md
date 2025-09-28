# 🏦 Sistema Financiamento Fácil — Cálculo da PMT (Parcela Fixa)

Um pequeno script em **JavaScript** para simular o valor das parcelas fixas (PMT) de um financiamento, com entrada, taxa de juros mensal e quantidade de parcelas. O script usa `prompt` e `alert`, portanto é pensado para execução em um navegador.

---

## 🔎 O que faz esse projeto

Este projeto calcula o valor da parcela fixa mensal (PMT) de um empréstimo/financiamento a partir de:

- Valor do bem a ser adquirido
- Valor de entrada (opcional)
- Taxa de juros ao mês (A.M.)
- Quantidade de parcelas

A lógica usa a fórmula da PMT (sistema de amortização francês — parcelas constantes).

---

## 🧮 Fórmula usada

A fórmula matemática usada (equivalente) é:

\[
\text{PMT} = \frac{PV \cdot i}{1 - (1+i)^{-n}}
\]

Onde:

- `PV` = valor presente (valor do financiamento após subtrair a entrada)  
- `i` = taxa de juros por período (em decimal, ex: 0.0399 = 3,99%)  
- `n` = número de períodos (parcelas)

No script foi utilizada a forma equivalente:

\[
\text{PMT} = \frac{PV \cdot i \cdot (1+i)^n}{(1+i)^n - 1}
\]

---

## 🚀 Como usar

1. Crie uma pasta do projeto e adicione os arquivos (ex.: `index.html` e `pmt.js`).
2. Abra `index.html` no navegador.
3. O navegador exibirá prompts para que você informe os dados (valor, entrada, taxa, parcelas) e mostrará o resultado por `alert`.

---

## 📁 Estrutura sugerida

📦 financiamento-facil
┣ 📜 index.html
┣ 📜 pmt.js
┗ 📜 README.md

🧪 Exemplo prático

Valor do bem: 10000

Entrada: 0

Taxa: 2 (2% a.m.)

Parcelas: 12

Saída (aprox.):
O valor das parcelas a serem pagas é: R$ 936.01

✅ Melhorias sugeridas (futuro)

Gerar uma tabela de amortização (mostrar saldo devedor, juros pagos e amortização por parcela).

Criar interface HTML (formulário) em vez de prompts para melhor usabilidade.

Permitir escolha de período (mensal, anual) e conversão de juros.

Exportar resultado para CSV ou PDF.

Validar localmente a entrada com máscaras e feedback inline.

🤝 Contribuição

Se quiser melhorar o script ou transformar em uma pequena SPA (HTML/CSS/JS), abra uma issue ou envie um pull request. Sugestões de testes e casos de borda são bem-vindas.

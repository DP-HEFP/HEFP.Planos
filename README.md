# HFP · Planos de Trabalho

Aplicação web PWA para gestão de planos de trabalho de enfermagem e assistentes operacionais do Hospital Fernando Pessoa.

## Funcionalidades

- 📋 Visualização de planos semanais por serviço (ULDM, UC, IMC, IMP3, UMDR, URG, CE)
- ✏️ Edição de turnos (Manhã, Tarde, Noite) para enfermeiros e auxiliares
- 📷 Importação de horários por foto (Plano Diário ou Grelha Mensal)
- ☁️ Sincronização automática via JSONBin
- 📢 Publicação de planos com notificações
- 📄 Exportação para PDF
- 📱 Instalável como app (PWA)

## Serviços suportados

| Sigla | Serviço |
|-------|---------|
| ULDM | Unidade de Longa Duração e Manutenção |
| UC | Unidade de Cuidados |
| IMC | Internamento Médico-Cirúrgico |
| IMP3 | Internamento Piso 3 |
| UMDR | Unidade de Média Duração e Reabilitação |
| URG | Urgência |
| CE | Consulta Externa |

## Configuração

As chaves de API estão no topo do `index.html`:

```js
const CLAUDE_API_KEY = '...';       // Anthropic API (para importação por foto)
const JSONBIN_KEY = '...';          // JSONBin (para sincronização cloud)
const JSONBIN_BIN_SCHED = '...';    // ID do bin de horários
```

## Deploy

Basta colocar os ficheiros num servidor estático (Netlify, GitHub Pages, etc.).

### GitHub Pages

1. Faz push para o repositório
2. Vai a **Settings → Pages**
3. Source: `Deploy from a branch` → `main` → `/ (root)`
4. A app fica disponível em `https://<user>.github.io/<repo>/`

## Estrutura

```
├── index.html      # App completa (single-file)
├── manifest.json   # PWA manifest
├── icon-192.png    # Ícone PWA
├── icon-512.png    # Ícone PWA
└── README.md
```

## Desenvolvido por

Diogo Pecegueiro · 2026

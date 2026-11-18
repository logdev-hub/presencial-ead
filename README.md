# Guia Presencial + EAD

Hub web estático para consulta e implantação de ofertas no formato **Presencial + EAD**, reunindo planos de curso, documentos de referência, FAQ comentada e um plano local de acompanhamento.

## Visão geral

O projeto foi criado para apoiar docentes, técnicos e equipes da unidade na consulta rápida de informações sobre os cursos técnicos de Gestão e Negócios.

Entre os recursos disponíveis estão:

- catálogo de planos de curso;
- páginas operacionais para Administração, Contabilidade, Recursos Humanos, Logística e Marketing;
- FAQ comentada com busca, filtro por categoria e abertura/fechamento dos itens;
- documentos oficiais em PDF para download;
- acesso ao conteúdo EAD institucional do projeto;
- checklist de validação antes da publicação de uma oferta;
- plano de ação com registro local de demandas e acompanhamento de status;
- fluxo visual de implantação conectando catálogo, documentos, operação, atendimento e melhoria contínua;
- layout responsivo para desktop e dispositivos móveis.

## Como acessar

Abra o arquivo [`index.html`](./index.html) no navegador para acessar a página inicial.

Para uma experiência mais próxima de um ambiente publicado, execute um servidor HTTP local na pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

Também é possível usar o Live Server do VS Code ou qualquer outro servidor estático.

## Estrutura do projeto

```text
.
├── index.html                              # Página inicial e catálogo
├── faq.html                                # FAQ comentada
├── atendimento.html                        # Plano de ação e acompanhamento local
├── Resumo ADM (Tec).html                   # Página do Técnico em Administração
├── 334_PC_Técnico_Contabilidade - EAD.html # Página do Técnico em Contabilidade
├── 337_PC_Técnico_Recursos Humanos - EAD.html
├── 338_PC_Técnico_Logistica - EAD.html      # Página do Técnico em Logística
├── 339_PC_Técnico_Marketing - EAD.html     # Página do Técnico em Marketing
├── app.js                                  # FAQ, checklists e registro de demandas
├── styles.css                              # Estilos principais
├── legacy-course.css                       # Estilos legados mantidos para referência
├── *.pdf                                   # Planos e documentos oficiais de referência
└── PROMPT_REFINADO.md                      # Contexto de elaboração do projeto
```

## Cursos disponíveis

- Técnico em Administração;
- Técnico em Contabilidade;
- Técnico em Recursos Humanos;
- Técnico em Logística;
- Técnico em Marketing.

## Tecnologias

- HTML5;
- CSS3;
- JavaScript puro;
- Bootstrap 5.3 via CDN;
- Font Awesome via CDN;
- `localStorage` do navegador para salvar checklists e demandas localmente.

Não há `package.json`, dependências de Node.js ou etapa de build. O projeto pode ser publicado como um site estático.

## Dados locais

O checklist e as demandas registradas em `atendimento.html` são armazenados somente no `localStorage` do navegador utilizado. Eles não são enviados para um servidor, não são sincronizados entre dispositivos e podem ser apagados ao limpar os dados do site.

O conteúdo EAD vinculado no projeto é institucional e pode exigir autenticação com credencial Senac.

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste diretório para a branch `main`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a geração do endereço público.

Como o arquivo inicial se chama `index.html`, ele será carregado automaticamente pelo GitHub Pages.

## Observações

- As páginas são uma camada de consulta e não substituem os documentos oficiais ou os fluxos institucionais vigentes.
- Os PDFs incluídos no repositório podem aumentar o tamanho do projeto, especialmente o Plano de Orientação para Oferta.
- Os links de Bootstrap, Font Awesome e do conteúdo EAD dependem de conexão com a internet.

## Licença

Este repositório não declara uma licença de uso. Antes de torná-lo público, confirme se os documentos, textos, links institucionais e demais materiais podem ser redistribuídos no GitHub.

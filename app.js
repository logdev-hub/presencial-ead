const faqItems = [
    {id:1,cat:'Características',q:'O que caracteriza o formato Presencial+EAD?',a:'É a integração planejada de atividades presenciais e a distância, com mediação tecnológica, recursos multimodais e foco no desenvolvimento de competências profissionais.',c:'No Técnico em Marketing, a combinação aparece na própria matriz: 656h presenciais e 144h a distância. O EAD amplia a jornada; não é um conteúdo opcional ou paralelo.'},
    {id:2,cat:'Características',q:'Devo cumprir toda carga horária EAD prevista?',a:'Sim. A carga horária a distância integra a carga total das unidades curriculares e deve ser cumprida.',c:'Ao orientar a turma, apresente o EAD como parte do percurso oficial e acompanhe as entregas junto com as atividades presenciais.'},
    {id:3,cat:'Características',q:'Como é definido o limite da carga horária EAD?',a:'O limite deve respeitar o CNCT. No Senac São Paulo, a referência é manter no mínimo 80% presencial e aproximadamente 20% a distância nos cursos técnicos.',c:'No Plano 339, a proporção é de 18% EAD (144h de 800h), dentro do desenho aprovado para o título.'},
    {id:4,cat:'Características',q:'Como a carga EAD é distribuída entre as UCs?',a:'A distribuição é estratégica, considerando o projeto pedagógico, as competências e o posicionamento da área. O detalhamento está no Plano de Curso.',c:'Para Marketing, o EAD se concentra em UCs como estratégias de marketing, marca, campanhas, relacionamento e experiências inovadoras. Consulte a tabela da página do curso.'},
    {id:5,cat:'Características',q:'O estudante pode realizar a aula EAD em outro dia?',a:'Sim, desde que a atividade seja realizada dentro do prazo estipulado e as entregas ocorram até o término da UC.',c:'O dia fixo organiza a oferta, mas a janela de entrega pode dar flexibilidade. Registre claramente prazo, atividade e critério de acompanhamento no Teams.'},
    {id:6,cat:'Características',q:'Como funciona o Projeto Integrador?',a:'O PI pode ser 100% presencial, 100% a distância ou combinado, conforme o Plano de Curso e as diretrizes do título. Quando a distância, é majoritariamente síncrono.',c:'No Plano 339, há PIs intermediários e o PI Técnico em Marketing (UC17). A articulação com as demais UCs é correquisito e deve atravessar o percurso.'},
    {id:7,cat:'Ambientes e Teams',q:'Qual é o papel dos ambientes digitais?',a:'São espaços de interação, organização do percurso, autoria e colaboração; não apenas repositórios de arquivos.',c:'Use a equipe do Teams para orientar a jornada, receber evidências e devolver feedback, conectando cada recurso ao desafio profissional de Marketing.'},
    {id:8,cat:'Ambientes e Teams',q:'As unidades devem reservar salas ou laboratórios para encontros EAD?',a:'Não. Não devem reservar infraestrutura especificamente para encontros EAD. A biblioteca permanece disponível, sem garantia de computadores; o estudante deve validar o acesso.',c:'Na comunicação inicial, oriente sobre acesso móvel e alternativas locais, mas não prometa laboratório ou computador para cada estudante.'},
    {id:9,cat:'Ambientes e Teams',q:'O que é a Ambientação no Teams?',a:'É um espaço virtual criado automaticamente pela integração com o Senac Solution para acolher e contextualizar estudantes sobre a unidade e o curso.',c:'Confira se o estudante conhece esse espaço antes da primeira atividade EAD e inclua a orientação na acolhida da turma.'},
    {id:10,cat:'Ambientes e Teams',q:'O que deve constar na Página Inicial da sala virtual?',a:'Nome da UC, boas-vindas, calendário com prazos e avisos relevantes ao longo da UC.',c:'Para Marketing, vale incluir o desafio da UC, a relação com o PI e o link da aula EAD liberada naquela etapa.'},
    {id:11,cat:'Ambientes e Teams',q:'Como são organizadas as equipes no Teams?',a:'Cada UC tem uma equipe criada automaticamente; a equipe da unidade organiza links e informações manualmente.',c:'A conferência local deve validar nome, professores, avisos, módulos e links antes da liberação para a turma.'},
    {id:12,cat:'Ambientes e Teams',q:'Os recursos contemplam celular e conexão limitada?',a:'Sim. Os recursos foram desenhados para dispositivos móveis, conexões limitadas e celulares de desempenho básico, sem ocupar armazenamento local.',c:'Ao atender uma dúvida, primeiro valide credencial, navegador e conectividade; evite pressupor que o estudante precisa de computador.'},
    {id:13,cat:'Ambientes e Teams',q:'Os links das aulas assíncronas exigem login?',a:'Sim. O acesso ocorre com login institucional do Senac via Teams Educacional, direcionando para a Plataforma Senac de Recursos Didáticos Digitais ou bibliotecas digitais.',c:'O link do PO do Marketing não é um link público de matrícula: oriente o estudante a entrar com sua conta institucional.'},
    {id:14,cat:'Ambientes e Teams',q:'Como organizar Atividades de Aula no Teams?',a:'Crie um módulo com a estrutura da UC, orientações de participação, prazos e links das aulas EAD conforme o PO.',c:'O docente pode manter autonomia sobre a condução presencial, mas deve preservar os conteúdos e atividades institucionais EAD.'},
    {id:15,cat:'Ambientes e Teams',q:'Todas as atividades EAD ficam disponíveis de uma só vez?',a:'Não. A liberação deve ser gradativa, agendada no Teams e alinhada ao cronograma e à sequência pedagógica do PO.',c:'No Marketing, libere o recurso conforme a situação de aprendizagem: por exemplo, pesquisa e plano antes de pedir uma campanha ou análise de KPI.'},
    {id:16,cat:'Ambientes e Teams',q:'O registro de frequência no Teams substitui o Senac Solution?',a:'Não. O Teams apoia o acompanhamento; o Senac Solution é o sistema oficial para registro acadêmico.',c:'A conferência deve terminar sempre no SS: atividade desenvolvida, frequência, avaliação do processo e menção quando aplicável.'},
    {id:17,cat:'Ambientes e Teams',q:'Como funciona a entrega de atividades pelo Teams?',a:'O estudante pode anexar arquivos, preencher PDFs interativos, responder quizzes, construir mapas mentais e enviar outras evidências pelo Teams.',c:'Defina no enunciado o que é evidência suficiente e até quando será aceita. Isso reduz retrabalho no acompanhamento.'},
    {id:18,cat:'Ambientes e Teams',q:'O Teams permite enviar atividades, dar feedback e acompanhar entregas?',a:'Sim. Porém, o Senac Solution continua oficial para atividade desenvolvida, frequência, avaliação e resultados.',c:'O Teams é o lugar da interação e da devolutiva; o SS é o lugar do registro institucional. Os dois precisam conversar no planejamento.'},
    {id:19,cat:'Ambientes e Teams',q:'Como abrir chamado para problemas técnicos?',a:'A unidade deve abrir chamado pela Central de Serviços na intranet. Estudantes não devem abrir diretamente.',c:'Na triagem local, diferencie erro de sistema e problema de acesso. Use os links oficiais da FAQ na área de recursos desta solução.'},
    {id:20,cat:'Planejamento',q:'Qual o período mínimo do cronograma?',a:'Para cursos técnicos, o cronograma deve contemplar preferencialmente ao menos seis meses de encontros desde o início da oferta.',c:'Use a visão de seis meses para revisar se dias EAD, UCs correquisito e PIs cabem no calendário sem sobreposição indevida.'},
    {id:21,cat:'Planejamento',q:'Como distribuir as aulas para atender ao desenvolvimento pedagógico?',a:'A unidade mantém autonomia, mas deve articular carga presencial e EAD com base no PCTD, no PC, no PO, nos recursos digitais e no acompanhamento local.',c:'Antes de publicar o cronograma do Marketing, faça uma leitura cruzada da matriz e do PO; a página do curso já deixa os pontos críticos visíveis.'},
    {id:22,cat:'Planejamento',q:'Desde a primeira semana devemos programar um dia EAD?',a:'Sim. O dia fixo semanal deve ser mantido desde a primeira semana, mesmo se a UC inicial for 100% presencial.',c:'Isso protege o acordo com a turma e evita que o EAD apareça apenas quando a UC já estiver avançada.'},
    {id:23,cat:'Planejamento',q:'Quem define o dia da semana para o EAD?',a:'A unidade educacional define o dia fixo, considerando necessidades operacionais, infraestrutura e características locais; a área pode orientar situações específicas.',c:'Registre a decisão no cadastro e no acolhimento da turma. Se o dia mudar, comunique com antecedência e atualize os canais.'},
    {id:24,cat:'Planejamento',q:'Como ficam turmas migradas de segunda a quinta?',a:'Devem considerar cinco dias letivos; a sexta-feira passa a ser o dia fixo EAD, respeitadas as especificidades da ficha técnica.',c:'Trate essa regra como cenário específico de migração, não como justificativa para alterar o cronograma sem análise.'},
    {id:25,cat:'Planejamento',q:'É possível ter mais de um dia EAD por semana?',a:'Sim, como exceção, especialmente em títulos com alta concentração de EAD em uma mesma UC.',c:'No Marketing, qualquer ajuste precisa preservar a matriz, os correquisitos e o término do curso; documente a decisão local.'},
    {id:26,cat:'Planejamento',q:'Quando é possível flexibilizar o dia fixo de EAD?',a:'Somente quando a frequência semanal ameaçar a conclusão do curso ou a sequência das UCs. Não se usa por ausência de docente no presencial.',c:'Se houver necessidade, valide com o técnico da unidade, comunique a turma e registre a justificativa pedagógica e operacional.'},
    {id:27,cat:'Planejamento',q:'Como funciona o desmembramento de encontros no noturno?',a:'No noturno, EAD equivale a 4h/dia e presencial a 3,5h/dia. No diurno, ambos seguem 4h/dia.',c:'Use o turno da oferta ao conferir se a carga do cronograma fecha com o PC e com o cadastro.'},
    {id:28,cat:'Planejamento',q:'Como acomodar uma UC com mais EAD do que presencial?',a:'O cronograma deve ser planejado para que o EAD nunca ultrapasse o presencial; podem ser necessárias UCs concomitantes ou iniciar o EAD depois do presencial.',c:'No Marketing, as UCs de 84h concentram 20h EAD. Intercale a oferta sem quebrar as relações de correquisito.'},
    {id:29,cat:'Planejamento',q:'O planejamento presencial continua sob autonomia docente?',a:'Sim. O docente planeja, media e avalia as atividades presenciais, respeitando o PC, o PO e o PCTD.',c:'Autonomia aqui significa escolher estratégias presenciais adequadas, não alterar recursos ou conteúdos EAD institucionais.'},
    {id:30,cat:'Planejamento',q:'Como ocorre a integração entre presencial e EAD?',a:'De forma intencional, explorando relações entre aulas síncronas e assíncronas da mesma UC e entre experiências de aprendizagem.',c:'Exemplo: a aula EAD sobre pesquisa de mercado pode alimentar a oficina presencial de posicionamento e o entregável do PI.'},
    {id:31,cat:'Planejamento',q:'Como integrar UCs com maior carga a distância?',a:'Recomenda-se ofertar UCs concomitantes e relacionar atividades presenciais e EAD dentro e entre UCs.',c:'No Marketing, use os PIs como eixo de integração entre marketing, campanhas, e-commerce, relacionamento e experiência.'},
    {id:32,cat:'Planejamento',q:'Como incorporar educação midiática?',a:'Analise criticamente conteúdos digitais, faça curadoria, produza com responsabilidade e reflita sobre autoria, intencionalidade, credibilidade e impacto.',c:'Isso é especialmente pertinente em Marketing: peça que estudantes justifiquem fonte, público, objetivo e ética de uma peça digital.'},
    {id:33,cat:'Registros e avaliação',q:'O lançamento da aula EAD no SS é automatizado?',a:'Não. Atividade desenvolvida e frequência são registrados diretamente pelo docente no Senac Solution.',c:'O planejamento deve reservar tempo para o registro no dia da atividade e para ajustes de frequência ao longo da UC.'},
    {id:34,cat:'Registros e avaliação',q:'O que registrar nos dias de aula EAD assíncrona?',a:'O docente registra no Diário de Classe o objetivo e as estratégias da atividade na data estipulada. As presenças são ajustadas conforme realização e entrega.',c:'Um bom registro descreve a evidência: por exemplo, análise de público, quiz, mapa de posicionamento ou plano de ação.'},
    {id:35,cat:'Registros e avaliação',q:'Como registrar a frequência em aulas EAD?',a:'Em síncronas, pela participação no ambiente virtual. Em assíncronas, pela realização/entrega ou autodeclaração no prazo. O lançamento é no SS.',c:'Não basta visualizar o link. Combine previamente qual evidência comprova participação em cada aula.'},
    {id:36,cat:'Registros e avaliação',q:'Como acompanhar a frequência sem entrega ao docente?',a:'Quando a atividade não exige entrega, use formulário de autodeclaração disponibilizado no Teams e preenchido no prazo.',c:'Avise a turma sobre a autodeclaração antes de abrir a atividade e mantenha o formulário como evidência de acompanhamento.'},
    {id:37,cat:'Registros e avaliação',q:'Há uma menção para o presencial e outra para o EAD?',a:'Há uma única UC. O SS cria duas aulas para a mesma UC: a de maior carga recebe avaliação do processo e notas; a outra recebe atividade desenvolvida e frequência.',c:'No fechamento do Marketing, confira em qual linha a avaliação deve ser lançada para não duplicar a menção.'},
    {id:38,cat:'Registros e avaliação',q:'Como registrar quando o EAD se estende por mais tempo?',a:'Distribua a carga de forma intercalada para que presencial e EAD terminem de modo coerente. Registre a atividade no dia e os demais acompanhamentos durante a UC.',c:'O cronograma precisa prever a janela EAD; não deixe registros acumularem para a última semana.'},
    {id:39,cat:'Registros e avaliação',q:'Como aparecem as UCs no Diário de Classe?',a:'Cada UC apresenta duas linhas, presencial e EAD. Avaliação do processo e notas ficam na linha de maior carga horária.',c:'Inclua essa conferência no checklist de fechamento de cada UC.'},
    {id:40,cat:'Registros e avaliação',q:'O que impede o fechamento da Lista de Notas?',a:'Qualquer Lista de Atividades presencial ou EAD não encerrada impede o fechamento e a publicação das notas.',c:'Antes de encerrar, use a validação desta solução: entregas conferidas, frequência revisada e listas encerradas.'},
    {id:41,cat:'Registros e avaliação',q:'A falta EAD soma às faltas presenciais?',a:'Sim. A frequência é apurada na carga horária total da UC, somando presencial e EAD.',c:'A conversa com o estudante deve apresentar a frequência como um único compromisso da UC.'},
    {id:42,cat:'Registros e avaliação',q:'Quando acompanhar e acionar o estudante?',a:'Quando houver cinco faltas consecutivas ou percentual superior a 20% sobre a carga mínima do componente. A contagem considera presenciais e síncronas.',c:'Crie uma rotina semanal de acompanhamento; não espere a reprovação por falta para fazer contato.'},
    {id:43,cat:'Registros e avaliação',q:'Ultrapassar 25% de faltas gera reprovação automática?',a:'Sim. A ultrapassagem do limite de 25% da UC gera reprovação por falta.',c:'Combine prazos, canais e evidências desde a acolhida e acione o estudante nos sinais de risco.'},
    {id:44,cat:'Registros e avaliação',q:'As atividades EAD podem envolver conteúdos digitais?',a:'Sim, desde que alinhadas aos objetivos da UC, aos critérios do PO e ao acompanhamento docente.',c:'Em Marketing, produção de conteúdo é pertinente, mas deve estar vinculada à competência e não apenas à estética.'},
    {id:45,cat:'Registros e avaliação',q:'As atividades EAD serão avaliadas pelo docente?',a:'Sim, quando exigirem correção. Também existem entregas autocorrigíveis e autodeclaradas; todas precisam de devolutiva no processo.',c:'Planeje feedback proporcional ao tipo de evidência e registre os encaminhamentos de recuperação quando necessário.'},
    {id:46,cat:'Registros e avaliação',q:'Mudam aproveitamento, transferência, recuperação ou reposição?',a:'Não por causa do formato. Os processos seguem como já são realizados; recuperação ocorre durante a UC e não há reposição, salvo casos legais específicos.',c:'Quando surgir uma situação acadêmica, encaminhe pelo fluxo institucional e não crie uma regra paralela para o EAD.'},
    {id:47,cat:'Atuação docente',q:'O que compõe 70% e 30% da carga docente?',a:'70% envolve aulas presenciais, síncronas e assíncronas, PCTD, registros, avaliação, notas e mediação de fóruns obrigatórios. 30% inclui planejamento, reuniões, interações pontuais, uploads e plano de aula.',c:'O dia EAD não é um dia sem trabalho: ele desloca parte da atuação para mediação, planejamento e registros.'},
    {id:48,cat:'Atuação docente',q:'O docente pode atuar em outras atividades no dia EAD?',a:'Sim, desde que não seja em outro curso ou atividade que gere registro. Deve priorizar apropriação de PC, PO, RDDs, diretrizes e capacitação digital.',c:'Use esse tempo para revisar a próxima aula, analisar entregas e preparar a ponte com a aula presencial.'},
    {id:49,cat:'Atuação docente',q:'O docente pode alterar a sequência das aulas EAD?',a:'Sim, somente dentro da mesma UC e quando o PO não indicar sequência expressa. Não pode trocar carga ou atividades entre UCs.',c:'No Marketing, a reorganização deve respeitar o encadeamento de pesquisa, planejamento, execução e monitoramento.'},
    {id:50,cat:'Atuação docente',q:'Como funciona a carga docente no PI síncrono?',a:'Os lançamentos de presença e atividade do PI síncrono já estão contemplados nos 70%.',c:'O foco local é assegurar o planejamento e a mediação do PI conforme o desenho do título.'},
    {id:51,cat:'Atuação docente',q:'O PI síncrono pode ser remoto?',a:'Docentes e monitores podem atuar remotamente quando toda a carga do dia for completamente remota, com aprovação e acompanhamento da gestão local.',c:'Não trate como decisão individual: valide com a gestão da unidade e comunique o arranjo à turma.'},
    {id:52,cat:'Recursos e acessibilidade',q:'Que tipos de recursos digitais são usados?',a:'Infográficos, animações, vídeos, podcasts, quizzes, atividades gamificadas, mapas mentais, murais e outros.',c:'Combine o formato do recurso com a competência: um mapa mental pode organizar uma estratégia; um quiz pode checar conceitos; um caso pode gerar decisão.'},
    {id:53,cat:'Recursos e acessibilidade',q:'Onde estão os recursos EAD?',a:'Na Plataforma Senac de Recursos Didáticos Digitais. O PO de cada curso traz o link para a página das aulas a distância.',c:'Para o Marketing 339, o link oficial está destacado nesta solução e no PO para facilitar a operação local.'},
    {id:54,cat:'Recursos e acessibilidade',q:'Os recursos são acessíveis?',a:'Sim. Contam com descrição de imagens, legendas, transcrições e otimização para dispositivos móveis e conexões limitadas. Adaptações específicas devem ser dialogadas com a unidade e o Programa Singularidades.',c:'Inclua a pergunta “o que você precisa para acessar?” na acolhida, sem esperar que a dificuldade apareça como evasão.'},
    {id:55,cat:'Recursos e acessibilidade',q:'Os recursos podem ser objeto de reflexão pedagógica?',a:'Sim. É possível analisar formatos, linguagens, fontes e intencionalidades e produzir conteúdos digitais de forma ética e contextualizada.',c:'Essa abordagem transforma o próprio recurso EAD em objeto de educação midiática e fortalece a formação em Marketing.'},
    {id:56,cat:'Recursos e acessibilidade',q:'Existe oficina para apoiar estudantes no Teams?',a:'Sim: “Inclusão digital: Conhecendo o Teams” (FT 23172, subárea 94, SAC 94112001-9). As UEs podem abrir e lançar turmas conforme necessidade.',c:'Se a triagem indicar dificuldade recorrente de uso, encaminhe a possibilidade à gestão local para apoiar a permanência.'},
    {id:57,cat:'Recursos e acessibilidade',q:'Como reportar problemas com recursos digitais?',a:'A unidade acessa a Central de Serviços na intranet e escolhe Teams Educacional ou Plataforma Senac de Recursos Didáticos Digitais.',c:'Registre evidência mínima do chamado: turma, UC, link, mensagem de erro, data e perfil afetado.'},
    {id:58,cat:'Processos acadêmicos',q:'O cadastro de oferta muda?',a:'Sim. Na aba “Período de aulas”, devem ser inseridos dias e horários das aulas Presencial+EAD dos cursos técnicos.',c:'Antes do início da turma, valide cadastro, cronograma comunicado e equipes do Teams como um único pacote de implantação.'},
    {id:59,cat:'Processos acadêmicos',q:'O processo de conclusão e certificação muda?',a:'Não. Conclusão e certificação seguem inalteradas.',c:'O novo formato altera a operação do percurso, não o desfecho documental. Oriente sem criar uma etapa extra de certificação.'}
];

function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char])); }

const courseProfiles = {
    'Administração': {uc:'processos administrativos', focus:'processos, projetos e indicadores', resource:'um RDD sobre mapeamento de processos', case:'o fluxo de atendimento de uma pequena empresa', evidence:'um fluxograma com pontos de melhoria', pi:'um plano de melhoria organizacional', metric:'tempo de atendimento e retrabalho', team:'a equipe responsável pelo atendimento', stakeholder:'o gestor de uma pequena empresa', scenario:'um diagnóstico organizacional'},
    'Recursos Humanos': {uc:'desenvolvimento de pessoas', focus:'pessoas, clima e desenvolvimento', resource:'um RDD sobre análise de clima', case:'os dados fictícios de uma equipe', evidence:'uma proposta de ação de desenvolvimento', pi:'um plano de desenvolvimento de pessoas', metric:'adesão e participação da equipe', team:'a equipe de RH', stakeholder:'a liderança da área', scenario:'um diagnóstico de clima'},
    'Contabilidade': {uc:'rotinas contábeis', focus:'registros, controles e análise financeira', resource:'um RDD sobre conciliação', case:'os lançamentos de uma empresa simulada', evidence:'uma conciliação com justificativa técnica', pi:'um relatório de análise contábil', metric:'divergências e tempo de fechamento', team:'a equipe responsável pelos lançamentos', stakeholder:'o responsável financeiro', scenario:'uma conferência de saldos'},
    'Logística': {uc:'armazenagem e operações logísticas', focus:'estoque, armazenagem e transporte', resource:'um RDD sobre layout e fluxo', case:'o fluxo de entrada e saída de um armazém', evidence:'um mapa de processo com proposta de melhoria', pi:'um plano de melhoria logística', metric:'tempo de separação e nível de estoque', team:'a equipe do armazém', stakeholder:'o responsável pela operação', scenario:'um diagnóstico de fluxo'},
    'Marketing': {uc:'campanhas e relacionamento', focus:'pesquisa, campanhas e relacionamento', resource:'um RDD sobre pesquisa de mercado', case:'o lançamento de uma campanha para uma empresa simulada', evidence:'um briefing com público, mensagem e indicador', pi:'um plano de campanha', metric:'alcance, conversão e engajamento', team:'a equipe responsável pela campanha', stakeholder:'o responsável pelo negócio', scenario:'um diagnóstico de público'}
};

const faqExampleTemplates = {
    1: p => `Na UC de ${p.uc}, o estudante explora ${p.resource} no dia EAD, aplica o conteúdo em ${p.case} no presencial e entrega ${p.evidence}.`,
    2: p => `Para cumprir a carga EAD de ${p.uc}, publique ${p.resource} no prazo previsto, acompanhe a atividade no Teams e registre ${p.evidence} como parte da carga oficial.`,
    3: p => `Ao explicar o limite de EAD na UC de ${p.uc}, mostre no cronograma quais horas são presenciais e quais são a distância; a atividade de EAD deve continuar ligada a ${p.focus}.`,
    4: p => `Distribua o EAD de ${p.uc} para preparar ${p.resource} e reserve o presencial para aplicar o conteúdo em ${p.case}; a tabela do PC deve sustentar essa escolha.`,
    5: p => `Se a aula EAD de ${p.uc} ocorrer em outro dia, mantenha no Teams a mesma janela de entrega para ${p.evidence} e confira a conclusão antes do encerramento da UC.`,
    6: p => `No PI, a turma pode usar ${p.case} como situação-problema e conectar ${p.evidence} às demais UCs, conforme o desenho do PC para ${p.pi}.`,
    7: p => `Na equipe do Teams de ${p.uc}, organize ${p.resource}, a orientação da atividade e o retorno sobre ${p.evidence}; o ambiente deve apoiar a autoria, não apenas armazenar arquivos.`,
    8: p => `Como ${p.resource} pode ser acessado em celular, informe que a turma não deve depender de laboratório; combine uma alternativa de acesso e uma janela para realizar ${p.evidence}.`,
    9: p => `Na Ambientação, mostre ao estudante onde encontrar a equipe de ${p.uc}, o calendário de ${p.case} e o canal de suporte antes da primeira atividade EAD.`,
    10: p => `Na Página Inicial da sala de ${p.uc}, apresente boas-vindas, prazos, ${p.resource} e a evidência esperada: ${p.evidence}.`,
    11: p => `Antes da liberação da turma de ${p.uc}, confira se a equipe automática tem docente, estudantes, nome da UC, módulos e o link correto para ${p.resource}.`,
    12: p => `Para ${p.resource}, ofereça uma orientação curta para celular e conexão limitada; por exemplo, permita que o estudante consulte o material e envie ${p.evidence} em arquivo leve.`,
    13: p => `Ao compartilhar ${p.resource} na UC de ${p.uc}, explique que o estudante deve entrar com a conta institucional e testar o acesso antes do prazo de ${p.evidence}.`,
    14: p => `No módulo Atividades de Aula de ${p.uc}, organize a sequência: orientação sobre ${p.resource}, prazo, instrução para trabalhar em ${p.case} e entrega de ${p.evidence}.`,
    15: p => `Libere ${p.resource} antes da discussão de ${p.case} e só depois abra a entrega de ${p.evidence}; assim a turma percorre ${p.focus} em etapas, sem receber tudo de uma vez.`,
    16: p => `Depois de acompanhar ${p.evidence} no Teams, transfira frequência e demais registros da UC de ${p.uc} para o Senac Solution; o Teams não substitui o sistema oficial.`,
    17: p => `Para ${p.evidence}, escreva no enunciado o formato aceito, o prazo e o critério de qualidade; a turma pode anexar um arquivo, responder um quiz ou registrar a decisão sobre ${p.case}.`,
    18: p => `Devolva no Teams um comentário sobre ${p.evidence} e use o Senac Solution para registrar a atividade, a frequência e o resultado correspondente da UC de ${p.uc}.`,
    19: p => `Se o link de ${p.resource} falhar para a turma de ${p.uc}, registre turma, UC, endereço, mensagem de erro e data; a unidade encaminha o chamado pela Central de Serviços.`,
    20: p => `Ao montar o cronograma mínimo, distribua ${p.uc}, ${p.resource} e a entrega de ${p.evidence} em uma janela que permita retomar ${p.case} sem concentrar tudo no fechamento.`,
    21: p => `Cruze PC, PO e PCTD para decidir quando a turma de ${p.uc} estudará ${p.resource}, praticará ${p.case} e consolidará ${p.evidence}; o calendário precisa mostrar essa progressão.`,
    22: p => `Mesmo que a primeira UC seja presencial, reserve desde a primeira semana o dia EAD para ambientar a turma, apresentar ${p.resource} e explicar como será acompanhado ${p.evidence}.`,
    23: p => `Ao definir o dia EAD da turma, verifique o impacto no acesso à equipe de ${p.uc}, no prazo de ${p.evidence} e na disponibilidade de ${p.team}; registre a decisão e comunique todos.`,
    24: p => `Em uma turma migrada, confira se a sexta-feira EAD comporta ${p.resource}, o prazo de ${p.evidence} e as demais aulas de ${p.uc} sem reduzir os cinco dias letivos.`,
    25: p => `Se ${p.uc} exigir mais de um dia EAD, trate como exceção: distribua ${p.resource} e ${p.evidence} em dias distintos, valide o calendário e documente o motivo.`,
    26: p => `Só flexibilize o dia EAD se a sequência de ${p.uc} estiver ameaçada; por exemplo, registre a decisão para preservar a entrega de ${p.evidence}, e não para compensar ausência docente.`,
    27: p => `No turno noturno, confira a conversão da carga de ${p.uc} antes de lançar ${p.resource} e ${p.evidence}; o calendário deve fechar com a duração prevista no PC.`,
    28: p => `Se ${p.uc} concentrar muita carga EAD, use concomitância ou inicie ${p.resource} depois do encontro presencial sobre ${p.case}, sem deixar o EAD superar o presencial.`,
    29: p => `Na aula presencial de ${p.uc}, o docente pode escolher a melhor estratégia para trabalhar ${p.case}; deve manter ${p.resource}, a competência e ${p.evidence} previstos no PO.`,
    30: p => `Conecte ${p.resource} a uma decisão sobre ${p.case} e transforme a discussão presencial em ${p.evidence}; essa ponte torna visível a integração entre os dois tempos da UC.`,
    31: p => `Para integrar UCs, faça ${p.resource} alimentar uma etapa de ${p.pi}; depois, use o presencial para revisar ${p.evidence} com base nos conteúdos de ${p.focus}.`,
    32: p => `Em ${p.uc}, peça que a turma compare a fonte usada em ${p.resource}, justifique as escolhas para ${p.case} e registre autoria, credibilidade e impacto na evidência final.`,
    33: p => `Após a entrega de ${p.evidence}, o docente ainda precisa lançar atividade e frequência da UC de ${p.uc} no Senac Solution; o cadastro não ocorre automaticamente.`,
    34: p => `No Diário de Classe, registre que a turma analisou ${p.case}, aplicou ${p.resource} e produziu ${p.evidence}; descreva objetivo e estratégia na data correta.`,
    35: p => `Para comprovar a frequência na atividade EAD de ${p.uc}, defina antes se valerá a entrega de ${p.evidence}, uma participação síncrona ou outra evidência prevista, e lance no SS.`,
    36: p => `Se ${p.uc} não exigir arquivo, crie no Teams uma autodeclaração com perguntas sobre ${p.resource} e ${p.case}; use as respostas no prazo para ajustar a frequência no SS.`,
    37: p => `No fechamento de ${p.uc}, lance a menção uma única vez na linha de maior carga e registre a atividade/frequência EAD vinculada a ${p.evidence}, sem duplicar o resultado.`,
    38: p => `Se ${p.resource} continuar por mais de um encontro, intercale as etapas de ${p.evidence}, registre cada atividade na data prevista e reserve uma conferência antes do fechamento de ${p.uc}.`,
    39: p => `Ao abrir o Diário de Classe de ${p.uc}, localize as duas linhas e confirme que a avaliação de ${p.evidence} está na linha de maior carga, enquanto a outra recebe atividade e frequência.`,
    40: p => `Antes de publicar notas de ${p.uc}, confira se a Lista de Atividades de ${p.evidence} está encerrada, se a frequência foi revisada e se não há pendência de ${p.team}.`,
    41: p => `Explique à turma de ${p.uc} que uma ausência na atividade EAD de ${p.resource} compõe a frequência total da UC junto com a aula presencial sobre ${p.case}.`,
    42: p => `Se o estudante não entregar ${p.evidence} ou acumular faltas na UC de ${p.uc}, faça contato preventivo, registre o sinal e combine uma ação de recuperação antes do fechamento.`,
    43: p => `Ao perceber risco de reprovação por falta em ${p.uc}, mostre ao estudante como as faltas presenciais e EAD somam e registre o encaminhamento antes que o limite seja ultrapassado.`,
    44: p => `Uma atividade digital em ${p.uc} pode ser a produção de ${p.evidence}, desde que desenvolva ${p.focus} e esteja prevista no PO; o recurso não deve ser usado apenas por novidade.`,
    45: p => `Depois que a turma entregar ${p.evidence}, devolva um feedback sobre a decisão tomada em ${p.case}; se houver autocorreção, oriente a revisão e registre o encaminhamento.`,
    46: p => `Se houver pedido de recuperação ou transferência relacionado a ${p.uc}, siga o fluxo institucional; não crie uma reposição informal para substituir ${p.evidence}.`,
    47: p => `No dia EAD de ${p.uc}, o docente pode mediar ${p.resource}, analisar ${p.evidence} e registrar feedback; esse trabalho faz parte da atuação, não é um dia sem atividade docente.`,
    48: p => `O tempo do dia EAD pode apoiar a preparação da aula presencial sobre ${p.case}, a análise de ${p.evidence} e a apropriação do PO, sem ser usado em outro curso com registro.`,
    49: p => `Se o PO permitir, o docente pode trocar a ordem interna de ${p.resource} e ${p.case} dentro de ${p.uc}, mas não pode retirar a evidência ${p.evidence} nem deslocá-la para outra UC.`,
    50: p => `No PI síncrono, a turma pode defender ${p.pi} usando ${p.evidence}; presenças e atividade seguem o lançamento previsto para a carga docente do PI.`,
    51: p => `Uma mediação remota do PI de ${p.uc} só deve ocorrer com aprovação da gestão; por exemplo, a equipe pode apresentar ${p.pi} em reunião síncrona e registrar a decisão.`,
    52: p => `Escolha o recurso pelo objetivo: um mapa para organizar ${p.case}, um quiz para verificar conceitos de ${p.focus} e um caso para decidir sobre ${p.evidence}.`,
    53: p => `Na UC de ${p.uc}, acesse ${p.resource} pela Plataforma Senac de Recursos Didáticos Digitais usando o link indicado no PO; não substitua por uma cópia externa sem validação.`,
    54: p => `Antes de iniciar ${p.resource}, pergunte se alguém precisa de legenda, transcrição, descrição ou outro apoio; depois confirme se consegue produzir ${p.evidence} pelo canal combinado.`,
    55: p => `Use ${p.resource} como objeto de análise: a turma identifica linguagem, fonte e intenção em um material sobre ${p.case} e propõe uma versão ética ou mais acessível.`,
    56: p => `Se a turma de ${p.uc} demonstrar dificuldade recorrente para acessar ${p.resource}, registre o padrão e avalie com a gestão o encaminhamento para a oficina de inclusão digital.`,
    57: p => `Ao reportar falha em ${p.resource}, anexe a captura de tela, o link, a UC de ${p.uc}, a turma, o horário e o perfil afetado; a unidade abre o chamado correto.`,
    58: p => `No cadastro da oferta de ${p.uc}, lance dias e horários presencial e EAD, depois compare com o cronograma do Teams e com o prazo de ${p.evidence} antes de iniciar a turma.`,
    59: p => `No encerramento de ${p.uc}, confirme registros, frequência, avaliação e ${p.evidence}; a certificação segue o processo institucional e não ganha uma etapa extra por causa do EAD.`
};

function getCourseExample(item, course) {
    const profile = courseProfiles[course] || courseProfiles.Marketing;
    const template = faqExampleTemplates[item.id];
    return template ? template(profile) : `Na UC de ${profile.uc}, aplique a orientação ao contexto de ${profile.focus} e documente a evidência prevista no PC e no PO.`;
}

function renderFaq(items = faqItems, course = 'Administração') {
    const list = document.querySelector('[data-faq-list]');
    if (!list) return;
    list.innerHTML = items.map(item => `
        <details class="faq-item" data-faq-item data-category="${escapeHtml(item.cat)}">
            <summary><span class="faq-number">${item.id.toString().padStart(2,'0')}</span>${escapeHtml(item.q)}</summary>
            <div class="faq-body">
                <div class="answer"><strong>Orientação da FAQ:</strong> ${escapeHtml(item.a)}</div>
                <div class="comment"><strong>Comentário de aplicação local:</strong> ${escapeHtml(item.c)}</div>
                <div class="example-box"><span class="course-context">Exemplo em ${escapeHtml(course)}:</span> ${escapeHtml(getCourseExample(item, course))}</div>
                <span class="chip mt-3">${escapeHtml(item.cat)}</span>
            </div>
        </details>`).join('');
    const count = document.querySelector('[data-faq-count]');
    if (count) count.textContent = `${items.length} ${items.length === 1 ? 'orientação encontrada' : 'orientações encontradas'}`;
}

function initFaq() {
    if (!document.querySelector('[data-faq-list]')) return;
    const search = document.querySelector('[data-faq-search]');
    const category = document.querySelector('[data-faq-category]');
    const course = document.querySelector('[data-faq-course]');
    const apply = () => {
        const term = (search?.value || '').toLowerCase().trim();
        const cat = category?.value || 'all';
        renderFaq(faqItems.filter(item => {
            const haystack = `${item.q} ${item.a} ${item.c} ${item.cat}`.toLowerCase();
            return (!term || haystack.includes(term)) && (cat === 'all' || item.cat === cat);
        }), course?.value || 'Administração');
    };
    search?.addEventListener('input', apply);
    category?.addEventListener('change', apply);
    course?.addEventListener('change', apply);
    document.querySelector('[data-faq-open]')?.addEventListener('click', () => document.querySelectorAll('[data-faq-list] details').forEach(item => item.open = true));
    document.querySelector('[data-faq-close]')?.addEventListener('click', () => document.querySelectorAll('[data-faq-list] details').forEach(item => item.open = false));
    renderFaq(faqItems, course?.value || 'Administração');
}

function initChecklists() {
    document.querySelectorAll('[data-checklist]').forEach(list => {
        const key = `senac-checklist-${list.dataset.checklist}`;
        const boxes = [...list.querySelectorAll('input[type="checkbox"]')];
        const progress = document.querySelector(`[data-checklist-progress="${list.dataset.checklist}"]`);
        const update = () => {
            const state = boxes.map(box => box.checked);
            localStorage.setItem(key, JSON.stringify(state));
            const done = boxes.filter(box => box.checked).length;
            if (progress) {
                progress.textContent = `${done}/${boxes.length} concluídos`;
                const bar = document.querySelector(`[data-checklist-bar="${list.dataset.checklist}"]`);
                if (bar) bar.style.width = `${boxes.length ? (done / boxes.length) * 100 : 0}%`;
            }
            updateChecklistMetric();
        };
        try { (JSON.parse(localStorage.getItem(key) || '[]')).forEach((checked, i) => { if (boxes[i]) boxes[i].checked = checked; }); } catch (_) {}
        boxes.forEach(box => box.addEventListener('change', update));
        document.querySelector(`[data-checklist-reset="${list.dataset.checklist}"]`)?.addEventListener('click', () => { boxes.forEach(box => box.checked = false); update(); });
        update();
    });
    updateChecklistMetric();
}

function updateChecklistMetric() {
    const metric = document.querySelector('[data-demand-metric="checklist"]');
    if (!metric) return;
    const boxes = [...document.querySelectorAll('[data-checklist] input[type="checkbox"]')];
    const done = boxes.filter(box => box.checked).length;
    metric.textContent = `${boxes.length ? Math.round((done / boxes.length) * 100) : 0}%`;
}

function initScenario() {
    const output = document.querySelector('[data-scenario-output]');
    if (!output) return;
    const scenarios = {
        acesso: ['Problema de acesso ao recurso EAD', '1. Confirme se a pessoa está usando a credencial institucional. 2. Teste Teams e Plataforma Senac de Recursos Didáticos. 3. Registre turma, UC, link e mensagem de erro. 4. Se persistir, a unidade abre chamado na Central de Serviços.', 'Recursos e acessibilidade'],
        falta: ['Estudante não entregou a atividade EAD', '1. Verifique o prazo e a evidência definida no Teams. 2. Faça contato preventivo. 3. Registre a atividade no SS e ajuste a frequência conforme realização/entrega. 4. Acione recuperação durante a UC quando houver dificuldade.', 'Registros, frequência e avaliação'],
        cronograma: ['Dúvida sobre o dia EAD ou sobreposição de UCs', '1. Confira PC, PO e cadastro da oferta. 2. Preserve dia fixo e correquisitos. 3. Avalie se a alteração é pedagógica e operacionalmente necessária. 4. Alinhe com o técnico e comunique a turma antes de mudar.', 'Planejamento e cronograma'],
        pedagogica: ['Docente quer adaptar uma aula EAD', '1. Verifique se a alteração está dentro da mesma UC. 2. Preserve recursos e atividades institucionais. 3. Ajuste apenas o sequenciamento quando o PO não exigir ordem. 4. Registre a decisão no PCTD/planejamento local.', 'Atuação docente']
    };
    document.querySelectorAll('[data-scenario]').forEach(button => button.addEventListener('click', () => {
        const item = scenarios[button.dataset.scenario];
        if (!item) return;
        output.innerHTML = `<div class="eyebrow">${escapeHtml(item[2])}</div><h3 class="mt-2">${escapeHtml(item[0])}</h3><p class="mb-0">${escapeHtml(item[1])}</p>`;
        document.querySelectorAll('[data-scenario]').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }));
}

function initDemandTracker() {
    const form = document.querySelector('[data-demand-form]');
    const body = document.querySelector('[data-demand-body]');
    if (!form || !body) return;
    const key = 'senac-demandas-locais';
    let demands = [];
    try { demands = JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) {}
    const render = () => {
        body.innerHTML = demands.length ? demands.map((d, i) => `<tr><td>${escapeHtml(d.date)}</td><td>${escapeHtml(d.topic)}</td><td>${escapeHtml(d.category || 'Geral')}</td><td>${escapeHtml(d.owner)}</td><td><span class="status ${d.status === 'Concluída' ? 'status-done' : d.status === 'Em andamento' ? 'status-progress' : 'status-open'}">${escapeHtml(d.status)}</span></td><td>${escapeHtml(d.nextAction || '—')}</td><td><button class="btn btn-sm btn-outline-secondary" data-demand-delete="${i}" aria-label="Excluir demanda">Excluir</button></td></tr>`).join('') : '<tr><td colspan="7" class="text-center text-muted py-4">Nenhuma demanda local registrada neste navegador.</td></tr>';
        const count = document.querySelector('[data-demand-count]');
        if (count) count.textContent = `${demands.length} ${demands.length === 1 ? 'registro' : 'registros'}`;
        const open = demands.filter(d => d.status === 'Aberta').length;
        const progress = demands.filter(d => d.status === 'Em andamento').length;
        const done = demands.filter(d => d.status === 'Concluída').length;
        document.querySelector('[data-demand-metric="open"]')?.replaceChildren(document.createTextNode(open));
        document.querySelector('[data-demand-metric="progress"]')?.replaceChildren(document.createTextNode(progress));
        document.querySelector('[data-demand-metric="done"]')?.replaceChildren(document.createTextNode(done));
        body.querySelectorAll('[data-demand-delete]').forEach(btn => btn.addEventListener('click', () => { demands.splice(Number(btn.dataset.demandDelete), 1); save(); }));
    };
    const save = () => { localStorage.setItem(key, JSON.stringify(demands)); render(); };
    form.addEventListener('submit', event => {
        event.preventDefault();
        const data = new FormData(form);
        demands.unshift({date: new Date().toLocaleDateString('pt-BR'), topic: data.get('topic'), category: data.get('category') || 'Geral', owner: data.get('owner'), status: data.get('status'), nextAction: data.get('nextAction') || ''});
        form.reset(); save();
    });
    document.querySelector('[data-demand-clear]')?.addEventListener('click', () => { demands = []; save(); });
    render();
}

function initDemandFormGuidance() {
    const form = document.querySelector('[data-demand-form]');
    if (!form) return;
    const labels = {
        topic: 'Descrição objetiva da demanda',
        category: 'Tipo de demanda',
        owner: 'Responsável pelo próximo passo',
        status: 'Status atual',
        nextAction: 'Próxima ação verificável'
    };
    Object.entries(labels).forEach(([name, label]) => {
        const field = form.querySelector(`[name="${name}"]`);
        if (!field || field.parentElement.querySelector('[data-demand-label]')) return;
        field.parentElement.insertAdjacentHTML('afterbegin', `<label class="form-label demand-form-label" data-demand-label for="${name}">${label}</label>`);
    });
}

function initDemandPresets() {
    const form = document.querySelector('[data-demand-form]');
    if (!form) return;
    const presets = {
        access: {
            topic: 'Turma [código], UC [número]: estudantes sem acesso ao recurso EAD; validar login, link e mensagem de erro.',
            category: 'Acesso / Teams', owner: 'Isabela', status: 'Aberta',
            nextAction: 'Testar com estudante afetado e abrir chamado pela unidade se persistir.'
        },
        attendance: {
            topic: 'UC [número], turma [código]: atividade EAD não entregue no prazo; verificar evidência, contato e frequência.',
            category: 'Pedagógica', owner: 'Leandro', status: 'Em andamento',
            nextAction: 'Conferir prazo no Teams, acionar estudante e registrar encaminhamento no SS.'
        },
        schedule: {
            topic: 'Turma [código]: dúvida sobre dia EAD, correquisito ou sobreposição no cronograma.',
            category: 'Oferta', owner: 'Isabela', status: 'Aberta',
            nextAction: 'Conferir PC, PO, ficha técnica e cadastro antes de comunicar a turma.'
        }
    };
    document.querySelectorAll('[data-demand-preset]').forEach(button => button.addEventListener('click', () => {
        const preset = presets[button.dataset.demandPreset];
        if (!preset) return;
        Object.entries(preset).forEach(([name, value]) => { const field = form.querySelector(`[name="${name}"]`); if (field) field.value = value; });
        form.scrollIntoView({behavior: 'smooth', block: 'center'});
        const topic = form.querySelector('[name="topic"]');
        topic?.focus();
    }));
}

function initGuideChecklist() {
    const boxes = [...document.querySelectorAll('[data-checklist-item="guia"]')];
    if (!boxes.length) return;
    const key = 'senac-checklist-guia-detalhado';
    const progress = document.querySelector('[data-checklist-progress="guia"]');
    const bar = document.querySelector('[data-checklist-bar="guia"]');
    const update = () => {
        const done = boxes.filter(box => box.checked).length;
        localStorage.setItem(key, JSON.stringify(boxes.map(box => box.checked)));
        if (progress) progress.textContent = `${done}/${boxes.length} checkpoints concluídos`;
        if (bar) bar.style.width = `${boxes.length ? done / boxes.length * 100 : 0}%`;
    };
    try { (JSON.parse(localStorage.getItem(key) || '[]')).forEach((checked, i) => { if (boxes[i]) boxes[i].checked = checked; }); } catch (_) {}
    boxes.forEach(box => box.addEventListener('change', update));
    update();
}

function initDeck() {
    const deck = document.querySelector('[data-deck]');
    if (!deck) return;
    const slides = [...deck.querySelectorAll('[data-slide]')];
    const dots = deck.querySelector('.deck-dots');
    const counter = deck.querySelector('[data-slide-counter]');
    const progress = deck.querySelector('[data-deck-progress]');
    let index = 0;
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `deck-dot${i === 0 ? ' active' : ''}`;
        dot.type = 'button';
        dot.setAttribute('aria-label', `Ir para o slide ${i + 1}`);
        dot.addEventListener('click', () => show(i));
        dots?.appendChild(dot);
    });
    const show = next => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        deck.querySelectorAll('.deck-dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
        if (counter) counter.textContent = index + 1;
        if (progress) progress.style.width = `${((index + 1) / slides.length) * 100}%`;
        const nextButton = deck.querySelector('[data-deck-next]');
        if (nextButton) nextButton.innerHTML = index === slides.length - 1 ? 'Recomeçar <i class="fa-solid fa-rotate-right ms-1"></i>' : 'Próximo <i class="fa-solid fa-arrow-right ms-1"></i>';
    };
    deck.querySelector('[data-deck-prev]')?.addEventListener('click', () => show(index - 1));
    deck.querySelector('[data-deck-next]')?.addEventListener('click', () => show(index + 1));
    const fullscreenButton = deck.querySelector('[data-deck-fullscreen]');
    const updateFullscreenLabel = () => {
        if (!fullscreenButton) return;
        const active = document.fullscreenElement === deck;
        fullscreenButton.innerHTML = active ? '<i class="fa-solid fa-compress me-1"></i>Sair da tela cheia' : '<i class="fa-solid fa-expand me-1"></i>Tela cheia';
    };
    fullscreenButton?.addEventListener('click', async () => {
        try {
            if (document.fullscreenElement) await document.exitFullscreen();
            else if (deck.requestFullscreen) await deck.requestFullscreen();
            else deck.classList.toggle('deck-fallback-fullscreen');
        } catch (_) { deck.classList.toggle('deck-fallback-fullscreen'); }
        updateFullscreenLabel();
    });
    document.addEventListener('fullscreenchange', updateFullscreenLabel);
    document.addEventListener('keydown', event => { if (event.key === 'ArrowRight') show(index + 1); if (event.key === 'ArrowLeft') show(index - 1); });
}

function initPresentationDetails() {
    if (!document.querySelector('[data-deck]')) return;
    const details = {
        modalDiaP: `<p><strong>O que este marco muda:</strong> o estudante continua tendo uma jornada de cinco dias de aprendizagem, mas um desses dias acontece sem deslocamento físico. O dia EAD precisa ter objetivo, mediação, prazo e evidência; não é um “dia livre” nem um repositório de arquivos.</p><p><strong>Exemplo em Administração:</strong> antes da oficina presencial de processos, a turma explora um RDD sobre mapeamento. Na aula, compara o fluxo de uma pequena empresa, toma decisões e entrega um fluxograma comentado. O EAD prepara o repertório; o presencial aprofunda e verifica a competência.</p><p class="mb-0"><strong>Mensagem para a equipe:</strong> o modelo pedagógico permanece; a inovação está na combinação intencional dos tempos e das linguagens.</p>`,
        modalEixos: `<ol><li><strong>Sensibilização:</strong> realize uma conversa curta com docentes, atendimento, secretaria e apoio de informática; registre as três principais resistências e responda cada uma com uma demonstração.</li><li><strong>Orientação:</strong> abra PC, PO, FAQ e demais documentos institucionais vigentes juntos e transforme a leitura em uma tabela “regra / decisão local / evidência”.</li><li><strong>Formação pedagógica:</strong> faça uma oficina entre pares em que cada docente acessa um RDD, desenha uma ponte com sua aula e recebe devolutiva.</li><li><strong>Operação & tecnologia:</strong> valide escala sem duplicidade, equipes do Teams, acesso, cronograma, frequência e apoio para a primeira semana.</li></ol><div class="example-box"><strong>Checkpoint:</strong> a unidade só avança quando consegue responder quem faz, em qual canal, até quando e qual registro comprova a ação.</div>`,
        modalPapel: `<p><strong>Antes da oferta — técnica:</strong> confirma PC, PO, carga EAD, concomitância de UCs, cadastro, dia fixo, escala e responsáveis. <strong>Docência:</strong> escolhe a UC prioritária, explicita a ponte entre RDD e situação de aprendizagem e combina a evidência.</p><p><strong>Durante — dupla:</strong> acompanha uma fila única de dúvidas, identifica padrões de acesso ou não entrega, aciona o responsável e não espera o fechamento da UC para intervir.</p><p><strong>Depois — dupla:</strong> fecha pendências, registra o que funcionou e publica uma prática sem dados pessoais no grupo de pontos focais.</p><div class="example-box"><strong>Entrega em 7 dias:</strong> mapa de uma UC + mensagem de acolhida + teste de acesso + uma publicação com contexto, ação, evidência e aprendizagem.</div>`,
        modalUC: `<p>O encadeamento evita que cada UC pareça uma tarefa isolada. Para cada unidade, preencha: competência em foco, repertório vindo da UC anterior, recurso EAD, atividade presencial, evidência e ligação com o PI.</p><p><strong>Exemplo em Recursos Humanos:</strong> um RDD sobre análise de clima é explorado antes da aula; no encontro presencial, a turma interpreta dados fictícios e propõe uma ação de desenvolvimento; no PI, justifica a solução com evidências.</p><ul class="mb-0"><li><strong>Teams:</strong> boas-vindas, agenda, instrução, entrega e feedback.</li><li><strong>Senac Solution:</strong> escala, diário, frequência e registros acadêmicos.</li><li><strong>Teams dos pontos focais:</strong> decisões da unidade e compartilhamento de práticas.</li></ul>`,
        modalAcolhimento: `<p>Reserve uma oficina no segundo ou terceiro dia, com apoio da informática quando necessário. O roteiro mínimo é: entrar com a conta institucional, localizar a equipe, abrir um RDD, responder uma atividade de teste e saber onde pedir ajuda.</p><p><strong>Exemplo de evidência:</strong> cada estudante envia no Teams uma resposta curta à atividade simulada. A equipe registra apenas quem precisa de apoio, sem expor senha ou dado sensível.</p><div class="example-box"><strong>Critério de sucesso:</strong> ninguém sai apenas com o link; todos saem com uma ação concluída e um caminho claro para suporte.</div>`,
        modalRDD: `<p>O RDD pode vir antes para ativar repertório ou depois para consolidar. A autonomia docente está em escolher a melhor mediação, mantendo a intencionalidade e os recursos institucionais.</p><p><strong>Exemplo em Contabilidade:</strong> a turma explora um caso de conciliação, chega à aula com uma hipótese, identifica inconsistências em grupos e registra a justificativa da correção. <strong>Exemplo em Logística:</strong> um vídeo sobre layout antecede uma simulação de fluxo e estoque.</p><p class="mb-0"><strong>Regra de desenho:</strong> sempre responda “o que o estudante fará com o que viu?” e “qual evidência mostrará a aprendizagem?”.</p>`,
        modalTeams: `<p><strong>Modelo de postagem para o grupo de pontos focais:</strong></p><ol><li><strong>Contexto:</strong> curso, UC e desafio observado, sem nome ou dado pessoal.</li><li><strong>Ação:</strong> roteiro, oficina ou ajuste realizado.</li><li><strong>Evidência:</strong> checklist, relato, indicador ou material reutilizável.</li><li><strong>Aprendizagem:</strong> o que mudou e o que seria ajustado.</li><li><strong>Pergunta:</strong> qual parte outra unidade poderia adaptar?</li></ol><div class="template-box">[UNIDADE] [CURSO/UC] — acolhimento digital<br>Contexto: estudantes não localizavam a equipe.<br>Ação: oficina guiada no laboratório + primeira atividade.<br>Evidência: checklist de acesso concluído.<br>Aprendizagem: o teste prático reduziu dúvidas recorrentes.<br>Pergunta: como vocês organizam o acompanhamento na primeira semana?</div><p class="mb-0 mt-3">O Teams coordena o caso e o grupo amplia a aprendizagem. Não publique credenciais, prints identificáveis ou situações individuais.</p>`
    };
    Object.entries(details).forEach(([id, html]) => {
        const modal = document.getElementById(id);
        const body = modal?.querySelector('.modal-body');
        if (body) body.innerHTML = html;
    });
}

function initPresentationModal() {
    const deck = document.querySelector('[data-deck]');
    const infoButton = deck?.querySelector('[data-deck-info]');
    if (!deck || !infoButton || !window.bootstrap) return;

    deck.querySelectorAll('.deck-card .plus-button').forEach(button => button.remove());
    document.querySelectorAll('body > .modal[id^="modal"]').forEach(modal => {
        bootstrap.Modal.getInstance(modal)?.dispose();
        modal.remove();
    });

    const slideDetails = [
        {title: 'Dia P: o que muda e o que permanece', body: '<p><strong>O que muda:</strong> um dos cinco dias de aprendizagem acontece sem deslocamento físico, com objetivo, mediação, prazo e evidência. Não é um dia livre nem um repositório de arquivos.</p><p><strong>Exemplo em Administração:</strong> antes da oficina presencial de processos, a turma explora um RDD sobre mapeamento. Na aula, compara o fluxo de uma pequena empresa, toma decisões e entrega um fluxograma comentado.</p><p class="mb-0"><strong>O que permanece:</strong> competências, marcas formativas, carga aprovada, avaliação e certificação do curso.</p>'},
        {title: 'Os quatro eixos da implantação', body: '<ol><li><strong>Sensibilização:</strong> escutar docentes, atendimento, secretaria e apoio de informática; registrar resistências e responder com demonstrações.</li><li><strong>Orientação:</strong> cruzar PC, PO, FAQ e demais documentos institucionais vigentes em uma tabela de regra, decisão local e evidência.</li><li><strong>Formação pedagógica:</strong> cada docente acessa um RDD, desenha uma ponte com sua aula e recebe devolutiva.</li><li><strong>Operação & tecnologia:</strong> validar escala, Teams, acessos, cronograma, frequência e apoio na primeira semana.</li></ol><div class="example-box"><strong>Checkpoint:</strong> a unidade sabe quem faz, em qual canal, até quando e qual registro comprova a ação.</div>'},
        {title: 'O papel dos pontos focais', body: '<p><strong>Antes da oferta:</strong> a técnica confirma PC, PO, carga EAD, concomitância, cadastro, dia fixo e responsáveis; a docência escolhe uma UC prioritária e define a evidência.</p><p><strong>Durante:</strong> a dupla acompanha acesso, entrega e dúvidas; identifica padrões; aciona responsáveis e intervém antes do fechamento da UC.</p><p class="mb-0"><strong>Depois:</strong> fecha pendências e publica uma prática sem dados pessoais no grupo de pontos focais.</p><div class="example-box"><strong>Entrega em 7 dias:</strong> mapa de uma UC + mensagem de acolhida + teste de acesso + publicação com contexto, ação, evidência e aprendizagem.</div>'},
        {title: 'Encadeamento de UCs e canais', body: '<p>Para cada UC, registre competência, repertório vindo da UC anterior, RDD, atividade presencial, evidência e ligação com o PI. Assim, o estudante entende a continuidade do percurso.</p><p><strong>Exemplo em Recursos Humanos:</strong> um RDD sobre análise de clima é explorado antes da aula; no encontro presencial, a turma interpreta dados fictícios e propõe uma ação de desenvolvimento.</p><ul class="mb-0"><li><strong>Teams:</strong> boas-vindas, agenda, instruções, entregas e feedback.</li><li><strong>Senac Solution:</strong> escala, diário, frequência e registros acadêmicos.</li><li><strong>Teams dos pontos focais:</strong> decisões da unidade e práticas compartilhadas.</li></ul>'},
        {title: 'Acolhimento digital na primeira semana', body: '<p>Reserve uma oficina no segundo ou terceiro dia. O roteiro mínimo é: entrar com a conta institucional, localizar a equipe, abrir um RDD, responder uma atividade de teste e saber onde pedir ajuda.</p><p><strong>Exemplo de evidência:</strong> cada estudante envia no Teams uma resposta curta à atividade simulada; a equipe registra somente quem precisa de apoio.</p><div class="example-box"><strong>Critério de sucesso:</strong> ninguém sai apenas com um link; todos saem com uma ação concluída e um caminho claro para suporte.</div>'},
        {title: 'RDD conectado à prática', body: '<p>O RDD pode vir antes para ativar repertório ou depois para consolidar. A docência escolhe a mediação, mantendo a intencionalidade e os recursos institucionais.</p><p><strong>Contabilidade:</strong> a turma explora um caso de conciliação, identifica inconsistências e registra a justificativa da correção. <strong>Logística:</strong> um vídeo sobre layout antecede uma simulação de fluxo e estoque.</p><p class="mb-0"><strong>Perguntas de desenho:</strong> o que o estudante fará com o que viu? Qual evidência mostrará a aprendizagem?</p>'},
        {title: 'Como compartilhar com outros pontos focais', body: '<p>Publique no grupo específico do Teams em cinco movimentos: <strong>contexto</strong>, <strong>ação</strong>, <strong>evidência</strong>, <strong>aprendizagem</strong> e <strong>pergunta para adaptação</strong>.</p><div class="template-box">[UNIDADE] [CURSO/UC] — acolhimento digital<br>Contexto: estudantes não localizavam a equipe.<br>Ação: oficina guiada + primeira atividade.<br>Evidência: checklist de acesso concluído.<br>Aprendizagem: o teste prático reduziu dúvidas.<br>Pergunta: como vocês acompanham a primeira semana?</div><p class="mb-0 mt-3">O Teams coordena o caso e o grupo amplia a aprendizagem. Não publique credenciais, prints identificáveis ou situações individuais.</p>'},
        {title: 'Próximo passo em sete dias', body: '<ol><li><strong>Hoje:</strong> confirmar curso, turma, UC prioritária e dupla de pontos focais.</li><li><strong>Em 3 dias:</strong> revisar PC, PO, FAQ, cronograma, Teams e responsabilidades.</li><li><strong>Em 7 dias:</strong> realizar acolhimento digital e publicar a primeira síntese no grupo de pontos focais.</li></ol><div class="example-box"><strong>Saída esperada:</strong> uma decisão simples, uma evidência concreta e uma melhoria que possa ser repetida por outra unidade.</div>'}
    ];

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'modalSlideInfo';
    modal.tabIndex = -1;
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = '<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h2 class="modal-title h5"></h2><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button></div><div class="modal-body"></div></div></div>';
    deck.appendChild(modal);
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    const instance = bootstrap.Modal.getOrCreateInstance(modal);
    const fillModal = () => {
        const current = slideDetails[Number(deck.querySelector('.deck-slide.active')?.dataset.slide || 0)] || slideDetails[0];
        modalTitle.textContent = current.title;
        modalBody.innerHTML = current.body;
    };
    infoButton.addEventListener('click', () => { fillModal(); instance.show(); });
    const moveBackdrop = () => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (!backdrop) return;
        if (document.fullscreenElement === deck && !deck.contains(backdrop)) deck.appendChild(backdrop);
        if (document.fullscreenElement !== deck && deck.contains(backdrop)) document.body.appendChild(backdrop);
    };
    modal.addEventListener('shown.bs.modal', moveBackdrop);
    document.addEventListener('fullscreenchange', moveBackdrop);
}

document.addEventListener('DOMContentLoaded', () => { initFaq(); initChecklists(); initGuideChecklist(); initDeck(); initPresentationDetails(); initPresentationModal(); initScenario(); initDemandTracker(); initDemandFormGuidance(); initDemandPresets(); });

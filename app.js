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

function renderFaq(items = faqItems) {
    const list = document.querySelector('[data-faq-list]');
    if (!list) return;
    list.innerHTML = items.map(item => `
        <details class="faq-item" data-faq-item data-category="${escapeHtml(item.cat)}">
            <summary><span class="faq-number">${item.id.toString().padStart(2,'0')}</span>${escapeHtml(item.q)}</summary>
            <div class="faq-body">
                <div class="answer"><strong>Orientação da FAQ:</strong> ${escapeHtml(item.a)}</div>
                <div class="comment"><strong>Comentário de aplicação local:</strong> ${escapeHtml(item.c)}</div>
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
    const apply = () => {
        const term = (search?.value || '').toLowerCase().trim();
        const cat = category?.value || 'all';
        renderFaq(faqItems.filter(item => {
            const haystack = `${item.q} ${item.a} ${item.c} ${item.cat}`.toLowerCase();
            return (!term || haystack.includes(term)) && (cat === 'all' || item.cat === cat);
        }));
    };
    search?.addEventListener('input', apply);
    category?.addEventListener('change', apply);
    document.querySelector('[data-faq-open]')?.addEventListener('click', () => document.querySelectorAll('[data-faq-list] details').forEach(item => item.open = true));
    document.querySelector('[data-faq-close]')?.addEventListener('click', () => document.querySelectorAll('[data-faq-list] details').forEach(item => item.open = false));
    renderFaq();
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

document.addEventListener('DOMContentLoaded', () => { initFaq(); initChecklists(); initScenario(); initDemandTracker(); initDemandFormGuidance(); initDemandPresets(); });

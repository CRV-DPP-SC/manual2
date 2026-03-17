// ================================================
// MANUAL OPERACIONAL CRV — Scripts
// Polícia Penal de Santa Catarina
// ================================================

// ================================================
// CADASTRO DAS UNIDADES PRISIONAIS
// ================================================
const UNIDADES = [
  // SR01 — Grande Florianópolis
  { nome: 'Penitenciária de Florianópolis',              cidade: 'Florianópolis', sr: 'SR01', diretor: 'Max Cleber Orth',                    email: 'pe01@pp.sc.gov.br', tel: '(48) 3665‑9123' },
  { nome: 'Complexo Penitenciário do Estado',            cidade: 'São Pedro de Alcântara', sr: 'SR01', diretor: 'Flávio Brasil Ganciné',      email: 'pe02@pp.sc.gov.br', tel: '(48) 3664‑2750' },
  { nome: 'Presídio Regional de Tijucas',                cidade: 'Tijucas',        sr: 'SR01', diretor: 'Nathasha Daberkow Vieira',           email: 'pr03@pp.sc.gov.br', tel: '(48) 3665‑9280' },
  { nome: 'Hospital de Custódia e Tratamento Psiquiátrico – HCTP', cidade: 'Florianópolis', sr: 'SR01', diretor: 'Fábio Medeiros Wiese',     email: 'hctp@pp.sc.gov.br', tel: '(48) 3665‑9191' },
  { nome: 'Presídio Regional de Biguaçu',                cidade: 'Biguaçu',        sr: 'SR01', diretor: 'Fabiano Oliveira Suares',            email: 'pr04@pp.sc.gov.br', tel: '(48) 3664‑2700' },
  { nome: 'Presídio Masculino Regional de Florianópolis',cidade: 'Florianópolis',  sr: 'SR01', diretor: 'Joana Mahfuz Vicini',                email: 'pr01@pp.sc.gov.br', tel: '(48) 3665‑9256' },
  { nome: 'Presídio Feminino Regional de Florianópolis', cidade: 'Florianópolis',  sr: 'SR01', diretor: 'Marina Pamplona Coelho',             email: 'pr02@pp.sc.gov.br', tel: '(48) 3665‑9107' },
  { nome: 'Unidade de Monitoramento Eletrônico',         cidade: 'Florianópolis',  sr: 'SR01', diretor: 'Gustavo Costa Vieira',               email: 'ume@pp.sc.gov.br',  tel: '(48) 3665‑7327' },
  { nome: 'Colônia Agroindustrial de Palhoça',           cidade: 'Palhoça',        sr: 'SR01', diretor: 'Renata de Souza de Oliveira',         email: 'cogri@pp.sc.gov.br',tel: '(48) 3664‑5580' },
  // SR02 — Sul
  { nome: 'Penitenciária Feminina de Criciúma',          cidade: 'Criciúma',       sr: 'SR02', diretor: 'Virginia Gabriela Gonzales',         email: 'pe04@pp.sc.gov.br', tel: '(48) 3403‑1737' },
  { nome: 'Penitenciária Masculina de Tubarão',          cidade: 'Tubarão',        sr: 'SR02', diretor: 'Deiveison Querino Batista',           email: 'pe05@pp.sc.gov.br', tel: '(48) 3631‑9777' },
  { nome: 'Penitenciária Sul',                           cidade: 'Criciúma',       sr: 'SR02', diretor: 'Alexandre Ferreira',                  email: 'pe03@pp.sc.gov.br', tel: '(48) 3403‑1485' },
  { nome: 'Presídio Regional de Araranguá',              cidade: 'Araranguá',      sr: 'SR02', diretor: 'Daniel Possamai Vieira',              email: 'pr08@pp.sc.gov.br', tel: '(48) 3529‑0441' },
  { nome: 'Presídio Regional de Criciúma',               cidade: 'Criciúma',       sr: 'SR02', diretor: 'Júnior Rodrigo Fagundes',             email: 'pr05@pp.sc.gov.br', tel: '(48) 3403‑1516' },
  { nome: 'Presídio Regional de Imbituba',               cidade: 'Imbituba',       sr: 'SR02', diretor: 'Filipe Gonzaga Lopes',                email: 'pr09@pp.sc.gov.br', tel: '(48) 3647‑7409' },
  { nome: 'Presídio Regional de Laguna',                 cidade: 'Laguna',         sr: 'SR02', diretor: 'Rafael Nunes de Oliveira',            email: 'pr10@pp.sc.gov.br', tel: '(48) 3647‑7425' },
  { nome: 'Presídio Regional de Tubarão',                cidade: 'Tubarão',        sr: 'SR02', diretor: 'Gladson Antônio da Silva',            email: 'pr06@pp.sc.gov.br', tel: '(48) 3631‑9780' },
  // SR03 — Norte Catarinense
  { nome: 'Penitenciária Industrial de Joinville',       cidade: 'Joinville',      sr: 'SR03', diretor: 'Márcio Simbalista',                   email: 'pe06@pp.sc.gov.br', tel: '(47) 3481‑3948' },
  { nome: 'Presídio Feminino Regional de Joinville',     cidade: 'Joinville',      sr: 'SR03', diretor: 'Eliana Eloi',                         email: 'pr12@pp.sc.gov.br', tel: '(47) 3481‑2369' },
  { nome: 'Presídio Regional de Joinville',              cidade: 'Joinville',      sr: 'SR03', diretor: 'André Felippe Dias',                  email: 'pr11@pp.sc.gov.br', tel: '(47) 3481‑3900' },
  { nome: 'Presídio Regional de Barra Velha',            cidade: 'Barra Velha',    sr: 'SR03', diretor: 'Léia Cristina Steffen Fuck',          email: 'pr14@pp.sc.gov.br', tel: '(47) 3481‑2885' },
  { nome: 'Presídio Regional de São Francisco do Sul',   cidade: 'São Francisco do Sul', sr: 'SR03', diretor: 'Lamartine Ximenes Fernandes',   email: 'pr13@pp.sc.gov.br', tel: '(47) 3481‑3932' },
  // SR04 — Vale do Itajaí
  { nome: 'Penitenciária Masculina do Vale do Itajaí',   cidade: 'Itajaí',         sr: 'SR04', diretor: 'Genivaldo Nazareno de Oliveira',       email: 'pe07@pp.sc.gov.br', tel: '(47) 3398‑6700' },
  { nome: 'Presídio Feminino Regional de Itajaí',        cidade: 'Itajaí',         sr: 'SR04', diretor: 'Michele Rebello de Mesquita',          email: 'pr16@pp.sc.gov.br', tel: '(47) 3398‑6185' },
  { nome: 'Presídio Regional de Brusque',                cidade: 'Brusque',        sr: 'SR04', diretor: 'Giovani Manfredini Queiroz',           email: 'pr17@pp.sc.gov.br', tel: '(47) 3251‑8280' },
  { nome: 'Presídio Regional de Itajaí',                 cidade: 'Itajaí',         sr: 'SR04', diretor: 'Rogério José Bizatto',                 email: 'pr15@pp.sc.gov.br', tel: '(47) 3398‑6750' },
  { nome: 'Presídio Regional de Itapema',                cidade: 'Itapema',        sr: 'SR04', diretor: 'Eduardo Weber Xavier',                 email: 'pr18@pp.sc.gov.br', tel: '(47) 3398‑6684' },
  // SR05 — Serrana
  { nome: 'Penitenciária Industrial de São Cristóvão do Sul', cidade: 'São Cristóvão do Sul', sr: 'SR05', diretor: 'Giselle Cordeiro Demeneck Remor', email: 'pe09@pp.sc.gov.br', tel: '(49) 3412‑3190' },
  { nome: 'Penitenciária Regional de Curitibanos',       cidade: 'São Cristóvão do Sul', sr: 'SR05', diretor: 'Fabio Marcelo Palhano',          email: 'pe08@pp.sc.gov.br', tel: '(49) 3412‑3300' },
  { nome: 'Presídio Masculino de Lages',                 cidade: 'Lages',          sr: 'SR05', diretor: 'Rodrigo Barroso',                      email: 'pr19@pp.sc.gov.br', tel: '(49) 3289‑8467' },
  { nome: 'Presídio Regional de Lages',                  cidade: 'Lages',          sr: 'SR05', diretor: 'Ricardo Fernando Moreira Floriani',    email: 'pr20@pp.sc.gov.br', tel: '(49) 3289‑8403' },
  { nome: 'Presídio Regional de Caçador',                cidade: 'Caçador',        sr: 'SR05', diretor: 'André Luiz Pierdoná',                  email: 'pr21@pp.sc.gov.br', tel: '(49) 3561‑6945' },
  { nome: 'Presídio Regional de Campos Novos',           cidade: 'Campos Novos',   sr: 'SR05', diretor: 'Evalcir Morais dos Santos',            email: 'pr22@pp.sc.gov.br', tel: '(49) 3541‑3588' },
  { nome: 'Presídio Regional de Videira',                cidade: 'Videira',        sr: 'SR05', diretor: 'Marcus Vinicius Lorenzetti',           email: 'pr23@pp.sc.gov.br', tel: '(49) 3533‑5915' },
  { nome: 'Unidade de Segurança Máxima de São Cristóvão do Sul', cidade: 'São Cristóvão do Sul', sr: 'SR05', diretor: 'Daniel de Sena',         email: 'umax@pp.sc.gov.br', tel: '(49) 3412‑3241' },
  // SR06 — Oeste
  { nome: 'Penitenciária Agrícola de Chapecó',           cidade: 'Chapecó',        sr: 'SR06', diretor: 'Itacir Ricieri Cella',                 email: 'pe10@pp.sc.gov.br', tel: '(49) 2049‑9760' },
  { nome: 'Penitenciária Industrial de Chapecó',         cidade: 'Chapecó',        sr: 'SR06', diretor: 'Iuri Elias Berwanger',                 email: 'pe11@pp.sc.gov.br', tel: '(49) 2049‑9713' },
  { nome: 'Presídio Feminino Regional de Chapecó',       cidade: 'Chapecó',        sr: 'SR06', diretor: 'Agda Remus',                           email: 'pr25@pp.sc.gov.br', tel: '(49) 2049‑9813' },
  { nome: 'Presídio Regional de Chapecó',                cidade: 'Chapecó',        sr: 'SR06', diretor: 'José Lauri Pelizzari',                 email: 'pr24@pp.sc.gov.br', tel: '(49) 2049‑9602' },
  { nome: 'Presídio Regional de Concórdia',              cidade: 'Concórdia',      sr: 'SR06', diretor: 'Rafael Schlegel Rodrigues Salgado',    email: 'pr26@pp.sc.gov.br', tel: '(49) 3482‑6222' },
  { nome: 'Presídio Regional de Joaçaba',                cidade: 'Joaçaba',        sr: 'SR06', diretor: 'Liliam Wiest',                         email: 'pr27@pp.sc.gov.br', tel: '(49) 3527‑9829' },
  { nome: 'Presídio Regional de Maravilha',              cidade: 'Maravilha',      sr: 'SR06', diretor: 'Marcelo Rodrigo Langaro',              email: 'pr29@pp.sc.gov.br', tel: '(49) 3664‑6672' },
  { nome: 'Presídio Regional de São José do Cedro',      cidade: 'São José do Cedro', sr: 'SR06', diretor: 'Rejane Birci Schrader de Mattos',  email: 'pr30@pp.sc.gov.br', tel: '(49) 3644‑3436' },
  { nome: 'Presídio Regional de São Miguel do Oeste',    cidade: 'São Miguel do Oeste', sr: 'SR06', diretor: 'Eduardo Francisco Bregola Junior', email: 'pr31@pp.sc.gov.br', tel: '(49) 3631‑3754' },
  { nome: 'Presídio Regional de Xanxerê',                cidade: 'Xanxerê',        sr: 'SR06', diretor: 'Vitor Matte',                          email: 'pr28@pp.sc.gov.br', tel: '(49) 3382‑2269' },
  // SR07 — Médio Vale do Itajaí
  { nome: 'Penitenciária Industrial de Blumenau',        cidade: 'Blumenau',       sr: 'SR07', diretor: 'Luciano Cardoso',                      email: 'pe12@pp.sc.gov.br', tel: '(47) 3378‑8600' },
  { nome: 'Presídio Regional de Blumenau',               cidade: 'Blumenau',       sr: 'SR07', diretor: 'Augusto Gregory Hilgenberg Ijaille',   email: 'pr32@pp.sc.gov.br', tel: '(47) 3378‑8716' },
  { nome: 'Presídio Regional de Indaial',                cidade: 'Indaial',        sr: 'SR07', diretor: 'Ivã Carlos Fuck',                      email: 'pr34@pp.sc.gov.br', tel: '(47) 3399‑3193' },
  { nome: 'Presídio Regional de Ituporanga',             cidade: 'Ituporanga',     sr: 'SR07', diretor: 'Marisoni dos Santos',                  email: 'pr35@pp.sc.gov.br', tel: '(47) 3533‑8797' },
  { nome: 'Presídio Regional de Rio do Sul',             cidade: 'Rio do Sul',     sr: 'SR07', diretor: 'Victor Hugo Vanelli',                  email: 'pr33@pp.sc.gov.br', tel: '(47) 3526‑3308' },
  // SR08 — Planalto Norte
  { nome: 'Penitenciária Industrial de São Bento do Sul',cidade: 'São Bento do Sul', sr: 'SR08', diretor: 'Leó Da Silva Feliciano',            email: 'pe13@pp.sc.gov.br', tel: '(47) 3647‑0240' },
  { nome: 'Presídio Regional de Canoinhas',              cidade: 'Canoinhas',      sr: 'SR08', diretor: 'Alexander Marcelo Costa',              email: 'pr38@pp.sc.gov.br', tel: '(47) 3627‑4352' },
  { nome: 'Presídio Regional de Jaraguá do Sul',         cidade: 'Jaraguá do Sul', sr: 'SR08', diretor: 'Carlos de Almeida Rossato',           email: 'pr36@pp.sc.gov.br', tel: '(47) 3276‑9409' },
  { nome: 'Presídio Regional de Mafra',                  cidade: 'Mafra',          sr: 'SR08', diretor: 'Gabriel Henning',                      email: 'pr37@pp.sc.gov.br', tel: '(47) 3647‑0222' },
  { nome: 'Presídio Regional de Porto União',            cidade: 'Porto União',    sr: 'SR08', diretor: 'Josmar Mattos e Santos',               email: 'pr39@pp.sc.gov.br', tel: '(47) 3627‑4340' },
];


// Nomes das Superintendências Regionais e seus Superintendentes
const SR_INFO = {
  SR01: { nome: 'Superintendência Regional da Grande Florianópolis', superintendente: 'Kelvyn Diehl',                          email: 'sr01@pp.sc.gov.br', tel: '(48) 3665‑9131' },
  SR02: { nome: 'Superintendência Regional Sul',                      superintendente: 'Hélio Damian Filho',                    email: 'sr02@pp.sc.gov.br', tel: '(48) 3403‑1501' },
  SR03: { nome: 'Superintendência Regional do Norte Catarinense',     superintendente: 'Efraym Ben José Falcão',                email: 'sr03@pp.sc.gov.br', tel: '(47) 3481‑3993' },
  SR04: { nome: 'Superintendência Regional do Vale do Itajaí',        superintendente: 'Anderson Luiz Teodoro',                 email: 'sr04@pp.sc.gov.br', tel: '(47) 3398‑6704' },
  SR05: { nome: 'Superintendência Regional Serrana',                   superintendente: 'André Isidoro de Oliveira Martarello',  email: 'sr05@pp.sc.gov.br', tel: '(49) 3412‑3300' },
  SR06: { nome: 'Superintendência Regional Oeste',                     superintendente: 'Guimorvan Boita',                      email: 'sr06@pp.sc.gov.br', tel: '(49) 2049‑9768' },
  SR07: { nome: 'Superintendência Regional do Médio Vale do Itajaí',  superintendente: 'Ricardo da Silva Morlo',               email: 'sr07@pp.sc.gov.br', tel: '(47) 3378‑8594' },
  SR08: { nome: 'Superintendência Regional do Planalto Norte',        superintendente: 'Edenilson Schelbauer',                  email: 'sr08@pp.sc.gov.br', tel: '(47) 3647‑0229' },
};


// ================================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ================================================
function navegarPara(paginaId) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('ativo'));
  const alvo = document.getElementById(paginaId);
  if (alvo) {
    alvo.classList.add('ativo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-principal a').forEach(a => {
    a.classList.remove('ativo');
    if (a.dataset.pagina === paginaId) a.classList.add('ativo');
  });
  atualizarBreadcrumb(paginaId);
  document.getElementById('navPrincipal').classList.remove('aberto');
  history.pushState(null, null, '#' + paginaId);
}

function abrirModeloDireto(modeloId) {
  navegarPara('modelos');
  setTimeout(() => abrirModalOficio(modeloId), 80);
}

// ================================================
// BREADCRUMB
// ================================================
const nomesPagina = {
  'inicio':          'Início',
  'hipoteses':       'Hipóteses de Transferência',
  'fluxo':           'Fluxo Operacional',
  'documentos':      'Documentos Necessários',
  'modelos':         'Modelos de Ofícios',
  'prazos':          'Prazos',
  'vedacoes':        'Vedações',
  'legislacao':      'Legislação',
  'unidades':        'Unidades Prisionais',
  'emergencial':     'Segurança / Emergência',
  'pedido-preso':    'Programa de Permutas',
  'equalizacao':     'Adequação da Capacidade de Ocupação',
  'mandado-comarca': 'Mandado de Prisão de Comarca Diversa',
  'pernoite':        'Pernoite',
  'seguranca-maxima':'Segurança Máxima / RDD',
  'faq':             'Perguntas Frequentes',
  'erros-comuns':    'Erros Mais Comuns',
  'comece-por-aqui': 'Comece por Aqui',
};

function atualizarBreadcrumb(paginaId) {
  const el = document.getElementById('breadcrumbAtual');
  if (el) el.textContent = nomesPagina[paginaId] || paginaId;
  const link = document.getElementById('breadcrumbLink');
  if (link) link.style.display = paginaId !== 'inicio' ? 'flex' : 'none';
}

// ================================================
// MENU MOBILE
// ================================================
function toggleMenu() {
  document.getElementById('navPrincipal').classList.toggle('aberto');
}

// ================================================
// ACCORDION
// ================================================
function toggleAccordion(header) {
  const item = header.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');
  const estaAberto = header.classList.contains('aberto');
  const grupo = item.closest('.accordion');
  grupo.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('aberto'));
  grupo.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('aberto'));
  if (!estaAberto) {
    header.classList.add('aberto');
    body.classList.add('aberto');
  }
}

// ================================================
// UNIDADES — Toggle SR e UP
// ================================================
function toggleSR(header) {
  const bloco  = header.closest('.sr-bloco');
  const painel = bloco.querySelector('.sr-unidades');
  const aberto = header.classList.contains('aberto');
  header.classList.toggle('aberto', !aberto);
  painel.style.display = aberto ? 'none' : 'block';
}

function toggleUP(header) {
  const card    = header.closest('.up-card');
  const detalhe = card.querySelector('.up-detalhe');
  const aberto  = header.classList.contains('aberto');
  header.classList.toggle('aberto', !aberto);
  detalhe.style.display = aberto ? 'none' : 'flex';
}

function filtrarUnidades() {
  const busca  = (document.getElementById('buscaUnidade')?.value || '').toLowerCase().trim();
  const srFilt = (document.getElementById('filtroSR')?.value || '').toLowerCase();

  document.querySelectorAll('.sr-bloco').forEach(bloco => {
    const srId = (bloco.dataset.sr || '').toLowerCase();
    if (srFilt && srId !== srFilt) { bloco.classList.add('oculto'); return; }
    bloco.classList.remove('oculto');
    if (!busca) { bloco.querySelectorAll('.up-card').forEach(c => c.classList.remove('oculto')); return; }
    let algum = false;
    bloco.querySelectorAll('.up-card').forEach(card => {
      if (card.textContent.toLowerCase().includes(busca)) {
        card.classList.remove('oculto'); algum = true;
        card.querySelector('.up-header')?.classList.add('aberto');
        const det = card.querySelector('.up-detalhe');
        if (det) det.style.display = 'flex';
      } else { card.classList.add('oculto'); }
    });
    if (algum) {
      bloco.querySelector('.sr-header')?.classList.add('aberto');
      const su = bloco.querySelector('.sr-unidades');
      if (su) su.style.display = 'block';
    } else if (!srFilt) { bloco.classList.add('oculto'); }
  });
}

// ================================================
// BUSCA GLOBAL
// ================================================
function buscarManual() {
  const input     = document.getElementById('buscaManual');
  const termo     = input.value.toLowerCase().trim();
  const resultado = document.getElementById('buscaResultado');
  const btnLimpar = document.getElementById('buscaLimpar');
  btnLimpar.style.display = termo.length > 0 ? 'flex' : 'none';
  if (!termo) {
    resultado.style.display = 'none'; resultado.innerHTML = '';
    document.querySelectorAll('.page-section').forEach(s => s.style.display = '');
    return;
  }
  const hits = [];
  // Fix: use textContent on a cloned visible version to search hidden sections too
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.style.display = 'none';
    // Create a temporary clone to extract text even if element is hidden
    const clone = sec.cloneNode(true);
    clone.style.display = 'block';
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    document.body.appendChild(clone);
    const textoSec = clone.textContent.toLowerCase();
    document.body.removeChild(clone);
    if (textoSec.includes(termo)) {
      const id = sec.id, nome = nomesPagina[id] || id;
      const idx = textoSec.indexOf(termo);
      const ini = Math.max(0, idx - 60), fim = Math.min(textoSec.length, idx + termo.length + 120);
      let trecho = textoSec.substring(ini, fim).replace(/\s+/g, ' ').trim();
      if (ini > 0) trecho = '…' + trecho;
      if (fim < textoSec.length) trecho += '…';
      const regex = new RegExp('(' + termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      // Escape HTML before highlighting
      const trechoSeguro = trecho.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      hits.push({ id, nome, trecho: trechoSeguro.replace(regex, '<mark class="busca-mark">$1</mark>') });
    }
  });
  if (!hits.length) {
    resultado.innerHTML = '<p class="busca-sem-resultado">Nenhum resultado para <strong>"' + input.value.replace(/</g,'&lt;') + '"</strong>.</p>';
  } else {
    resultado.innerHTML =
      '<p class="busca-contagem">🔍 ' + hits.length + ' seção(ões) encontrada(s) para <strong>"' + input.value.replace(/</g,'&lt;') + '"</strong>:</p>' +
      hits.map(h => '<a class="busca-item" href="#" onclick="limparBusca();navegarPara(\'' + h.id + '\');return false;"><span class="busca-item-nome">📄 ' + h.nome + '</span><span class="busca-item-trecho">' + h.trecho + '</span></a>').join('');
  }
  resultado.style.display = 'block';
}

function limparBusca() {
  document.getElementById('buscaManual').value = '';
  document.getElementById('buscaResultado').style.display = 'none';
  document.getElementById('buscaResultado').innerHTML = '';
  document.getElementById('buscaLimpar').style.display = 'none';
  document.querySelectorAll('.page-section').forEach(s => s.style.display = '');
  navegarPara('inicio');
}

// ================================================
// DARK MODE
// ================================================

// ================================================
// COMUNICAÇÃO AO JUÍZO — SELETOR SAÍDA / ENTRADA
// ================================================
function _aplicarVarianteComunicacao(tipo) {
  const m = modelosTexto['comunicacao'];
  if (!m || !m.variantes) return;
  const variante = m.variantes[tipo];
  if (!variante) return;

  // Atualiza título
  document.getElementById('oficioTitulo').textContent = variante.titulo;

  // Atualiza parágrafos
  const cont = document.getElementById('ofc-paragrafos');
  cont.innerHTML = variante.paragrafos.map((p, pIdx) => {
    const texto = typeof p === 'object' ? p.texto : p;
    const htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
      const inputId = `campo-${pIdx}-${fieldName.replace(/[^a-zA-Z0-9]/g,'_')}`;
      const w = Math.max(120, Math.min(400, fieldName.length * 9 + 40));
      return `<input type="text" class="campo-inline-editavel campo-inline-negrito" id="${inputId}" placeholder="${fieldName}" data-original="${fieldName}" style="width:${w}px;" />`;
    });
    return `<div class="oficio-paragrafo oficio-paragrafo-inline" data-texto-original="${texto.replace(/"/g,'&quot;')}">
      <p class="oficio-paragrafo-texto">${htmlTexto}</p>
    </div>`;
  }).join('');
}

function selecionarTipoComunicacao(tipo) {
  const seletorEl = document.getElementById('ofc-tipo-seletor');
  if (seletorEl) {
    seletorEl.querySelectorAll('.tipo-btn').forEach(b => {
      b.classList.toggle('ativo', b.dataset.tipo === tipo);
    });
  }
  _aplicarVarianteComunicacao(tipo);
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('btnDarkMode');
  if (btn) btn.innerHTML = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}

// ================================================
// BOTÃO VOLTAR AO TOPO
// ================================================
window.addEventListener('scroll', () => {
  const btn = document.getElementById('btnTopo');
  if (btn) btn.classList.toggle('visivel', window.scrollY > 400);
});

// ================================================
// FLUXO OPERACIONAL — Toggle passo
// ================================================
function toggleFlowStep(body) {
  body.classList.toggle('aberto');
  const btn = body.querySelector('.flow-toggle-btn');
  if (btn) btn.textContent = body.classList.contains('aberto') ? '▼ Ocultar detalhes' : '▶ Ver detalhes';
}

// ================================================
// SELETORES DE UNIDADE NO MODAL DE OFÍCIO
// ================================================

// Popula os <select> de origem e destino com optgroups por SR
function popularSelectsUnidades() {
  ['sel-origem', 'sel-destino'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel || sel.options.length > 1) return; // já populado

    const grupos = {};
    UNIDADES.forEach((u, idx) => {
      if (!grupos[u.sr]) grupos[u.sr] = [];
      grupos[u.sr].push({ u, idx });
    });

    const srLabel = {
      SR01: 'SR01 — Grande Florianópolis',
      SR02: 'SR02 — Sul',
      SR03: 'SR03 — Norte Catarinense',
      SR04: 'SR04 — Vale do Itajaí',
      SR05: 'SR05 — Serrana',
      SR06: 'SR06 — Oeste',
      SR07: 'SR07 — Médio Vale do Itajaí',
      SR08: 'SR08 — Planalto Norte',
    };

    Object.keys(srLabel).forEach(sr => {
      if (!grupos[sr]) return;
      const grp = document.createElement('optgroup');
      grp.label = srLabel[sr];
      grupos[sr].forEach(({ u, idx }) => {
        const opt = document.createElement('option');
        opt.value  = idx;
        opt.textContent = u.nome;
        grp.appendChild(opt);
      });
      sel.appendChild(grp);
    });
  });
}

// Estado global das unidades selecionadas
let unidadeOrigemSel  = null;
let unidadeDestinoSel = null;

function selecionarUnidadeOrigem() {
  const idx = document.getElementById('sel-origem').value;
  unidadeOrigemSel = (idx !== '') ? UNIDADES[parseInt(idx)] : null;
  atualizarInfoUnidade('origem', unidadeOrigemSel);
  atualizarOficioComUnidades();
}

function selecionarUnidadeDestino() {
  const idx = document.getElementById('sel-destino').value;
  unidadeDestinoSel = (idx !== '') ? UNIDADES[parseInt(idx)] : null;
  atualizarInfoUnidade('destino', unidadeDestinoSel);
  atualizarOficioComUnidades();
}

function atualizarInfoUnidade(tipo, u) {
  const el = document.getElementById('info-' + tipo);
  if (!el) return;
  if (!u) { el.innerHTML = ''; el.classList.remove('preenchido'); return; }
  const sr = SR_INFO[u.sr] || {};
  el.innerHTML = `<strong>${u.nome}</strong>${u.cidade} · ${u.sr} · Dir.: ${u.diretor} · ${u.tel}`;
  el.classList.add('preenchido');
}

// Atualiza cidade, parágrafos e assinaturas quando muda a seleção
function atualizarOficioComUnidades() {
  const ori = unidadeOrigemSel;
  const des = unidadeDestinoSel;

  // Cidade na linha de data
  const cidEl = document.getElementById('ofc-cidade-txt');
  if (cidEl) cidEl.textContent = ori ? ori.cidade : '[CIDADE]';

  // Substitui placeholders nos campos inline das unidades
  document.querySelectorAll('#ofc-paragrafos .campo-inline-editavel').forEach(input => {
    const orig = input.dataset.original || input.placeholder;
    if (ori && (orig === 'UNIDADE PRISIONAL DE ORIGEM')) {
      input.value = ori.nome;
    } else if (ori && (orig === 'CIDADE')) {
      input.value = ori.cidade;
    } else if (des && (orig === 'UNIDADE PRISIONAL DE DESTINO')) {
      input.value = des.nome;
    }
  });
  // Atualiza também os dataset.textoOriginal dos parágrafos para reflexo na exportação
  document.querySelectorAll('#ofc-paragrafos .oficio-paragrafo-inline').forEach(div => {
    let txt = div.dataset.textoOriginal || '';
    if (ori) txt = txt.replace(/\[UNIDADE PRISIONAL DE ORIGEM\]/g, ori.nome)
                      .replace(/\[CIDADE\]/g, ori.cidade);
    if (des) txt = txt.replace(/\[UNIDADE PRISIONAL DE DESTINO\]/g, des.nome);
    div.dataset.textoOriginal = txt;
  });

  // Reconstrói assinaturas
  renderizarAssinaturas(ori, des);
}

// ================================================
// LÓGICA DE ASSINATURAS
// Regra:
//   1. Diretor da Unidade de Origem         (sempre)
//   2. Diretor da Unidade de Destino        (sempre, exceto USM)
//   3. Superintendente da SR de Origem      (sempre)
//   4. Superintendente da SR de Destino     (só se SR destino ≠ SR origem)
// ================================================
function construirListaAssinaturas(ori, des, isUSM) {
  const assinaturas = [];

  // Modelos que assinam somente o Diretor da unidade que comunica
  const somenteDiretorOrigem = ['comunicacao', 'mandado-comarca'].includes(modeloAtual);
  if (somenteDiretorOrigem) {
    assinaturas.push({
      nome:  ori ? ori.diretor   : '[NOME DO DIRETOR]',
      cargo: ori ? `Diretor(a)
${ori.nome}` : 'Diretor(a) — [UNIDADE PRISIONAL]',
    });
    return assinaturas;
  }

  // 1. Diretor origem
  assinaturas.push({
    nome:  ori ? ori.diretor             : '[NOME DO DIRETOR — ORIGEM]',
    cargo: ori ? `Diretor(a)
${ori.nome}` : 'Diretor(a) — [UNIDADE DE ORIGEM]',
  });

  // 2. Diretor destino (não aparece no modelo USM)
  if (!isUSM) {
    assinaturas.push({
      nome:  des ? des.diretor             : '[NOME DO DIRETOR — DESTINO]',
      cargo: des ? `Diretor(a)
${des.nome}` : 'Diretor(a) — [UNIDADE DE DESTINO]',
    });
  }

  // 3. Superintendente da SR de Origem (sempre)
  const srOriInfo = ori ? SR_INFO[ori.sr] : null;
  assinaturas.push({
    nome:  srOriInfo ? srOriInfo.superintendente : '[NOME DO SUPERINTENDENTE — ORIGEM]',
    cargo: srOriInfo ? `Superintendente
${srOriInfo.nome}` : 'Superintendente — [SR DE ORIGEM]',
  });

  // 4. Superintendente da SR de Destino (só se SR diferente)
  if (!isUSM && des) {
    const srDesInfo = SR_INFO[des.sr];
    const srOriId   = ori ? ori.sr : null;
    if (des.sr !== srOriId) {
      assinaturas.push({
        nome:  srDesInfo ? srDesInfo.superintendente : '[NOME DO SUPERINTENDENTE — DESTINO]',
        cargo: srDesInfo ? `Superintendente
${srDesInfo.nome}` : 'Superintendente — [SR DE DESTINO]',
      });
    }
  }

  return assinaturas;
}

function renderizarAssinaturas(ori, des) {
  const assEl = document.getElementById('ofc-assinaturas');
  if (!assEl) return;

  const isUSM  = modeloAtual === 'umax';
  const lista  = construirListaAssinaturas(ori, des, isUSM);

  assEl.innerHTML = lista.map((a) => {
    // Cargo pode ter \n para separar cargo da unidade
    const cargoLinhas = a.cargo.split('\n');
    return `<div class="oficio-assinatura-bloco">
      <div class="ass-digital">(documento assinado digitalmente)</div>
      <div class="ass-nome"><input class="campo-edit" value="${a.nome}" style="font-weight:bold;width:360px;max-width:100%;"/></div>
      ${cargoLinhas.map(l => `<div class="ass-cargo"><input class="campo-edit" value="${l}" style="width:360px;max-width:100%;"/></div>`).join('')}
    </div>`;
  }).join('');
}

// ================================================
// MODAL DO OFÍCIO
// ================================================
function abrirModalOficio(modeloId) {
  const modal = document.getElementById('modalOficio');
  if (!modal) return;

  // Reset seleções anteriores
  unidadeOrigemSel  = null;
  unidadeDestinoSel = null;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Popula os selects (só na primeira abertura)
  popularSelectsUnidades();

  // Zera selects
  const sOri = document.getElementById('sel-origem');
  const sDes = document.getElementById('sel-destino');
  if (sOri) sOri.value = '';
  if (sDes) sDes.value = '';
  atualizarInfoUnidade('origem', null);
  atualizarInfoUnidade('destino', null);

  // Data automática
  const hoje   = new Date();
  const meses  = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const dataFmt = `${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`;
  const dataEl  = document.getElementById('ofc-data-txt');
  if (dataEl) { dataEl.textContent = dataFmt; dataEl.contentEditable = 'true'; }

  // Cidade editável
  const cidEl = document.getElementById('ofc-cidade-txt');
  if (cidEl) { cidEl.textContent = '[CIDADE]'; cidEl.contentEditable = 'true'; }

  selecionarModelo(modeloId);
}

function fecharModalOficio() {
  const modal = document.getElementById('modalOficio');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function fecharModalOficioFora(event) {
  if (event.target === document.getElementById('modalOficio')) fecharModalOficio();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModalOficio(); });

// ================================================
// MODELOS DE OFÍCIOS
// ================================================
const modelosTexto = {

  /* ── EMERGENCIAL ────────────────────────────────── */
  emergencial: {
    titulo: '🚨 Modelo 005/2026 — Segurança / Emergência',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      { texto: 'Encaminho para análise urgente dessa Central de Regulação de Vagas pedido de transferência excepcional do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], em razão de situação de crise/emergência identificada pelas equipes deste estabelecimento penal, conforme passo a detalhar.', editavel: false },
      { texto: 'A solicitação fundamenta-se na existência de [DESCREVER DETALHADAMENTE A SITUAÇÃO: risco iminente à integridade física, ameaça de morte, envolvimento em crise interna, motim, rebelião ou outro fator de segurança], que torna inviável a manutenção do(a) reeducando(a) nesta unidade prisional sem prejuízo à sua integridade física ou à ordem e segurança do estabelecimento, nos termos do art. 21, inciso I, da Resolução Conjunta Interinstitucional n. 01/2026.', editavel: true, label: 'Fundamentação' },
      { texto: 'Diante da urgência da situação, solicita-se a transferência do(a) reeducando(a) para o(a) [UNIDADE PRISIONAL DE DESTINO], onde há condições adequadas para sua custódia em segurança.', editavel: false },
      { texto: 'Destaca-se que a transferência em análise não deve ser considerada como sanção disciplinar de 30 (trinta) dias, uma vez que não constitui efetivamente eventual sanção a ser aplicada, cabível somente após a regular tramitação do PAD, nos termos do art. 57 e 58 da Lei de Execução Penal e art. 73 da Lei Complementar 529/11.', editavel: false },
      { texto: 'Deste modo, os direitos inerentes à pessoa presa deverão ser preservados, não se excluindo a possibilidade de isolamento preventivo, instituto diverso da sanção disciplinar, cuja disciplina encontra-se no art. 60 da Lei nº 7.210/1984 (Lei de Execução Penal).', editavel: false },
      { texto: 'Para subsidiar a análise, encaminho, anexos, o Boletim Penal Informativo da pessoa presa devidamente atualizado, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor. Encaminho ainda [OUTROS DOCUMENTOS: boletim de ocorrência interno, relatório da equipe de segurança, etc.], que subsidiam a presente solicitação.', editavel: false },
      { texto: 'Uma vez efetivada a remoção, caso aprovada, o r. Juízo competente será devidamente comunicado, no prazo legal estabelecido, qual seja em até 24 horas.', editavel: false },
      { texto: 'Informo, por fim, que foram realizados contatos prévios com as autoridades pertinentes, quais sejam, o Diretor do estabelecimento penal de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem o presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se análise e célere deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa.', editavel: false },
    ],
  },

  /* ── PEDIDO DO PRESO ─────────────────────────────── */
  pedido_preso: {
    titulo: '👤 Modelo 1 — Pedido do Preso',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      'Encaminho para análise dessa Central pedido de transferência do reeducando [NOME COMPLETO], IPEN [Nº], atualmente custodiado no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], formulado pelo próprio reeducando por meio de memorando datado de [DATA DO MEMORANDO].',
      'A solicitação tem por fundamento [MOTIVO ALEGADO PELO REEDUCANDO: mudança de domicílio familiar, necessidade de aproximação da família, outro motivo relevante], nos termos do art. 21, inciso II, da Resolução Conjunta Interinstitucional n. 01/2026.',
      'Para subsidiar a análise, encaminho em anexo Boletim Penal Informativo devidamente atualizado, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor, e memorando original do reeducando.',
      'Uma vez efetivada a remoção — caso aprovada —, o r. Juízo competente será devidamente comunicado, no prazo legal estabelecido, qual seja, em até 24 horas.',
      'Informo, por fim, que foram realizados contatos prévios com os entes envolvidos, quais sejam, o Diretor da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem ou anuem ao presente expediente.',
      'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa do referido reeducando.',
    ],
  },

  /* ── PEDIDO POR FAMILIAR ─────────────────────────── */
  pedido_familiar: {
    titulo: '👨‍👩‍👧 Modelo 2 — Pedido por Familiar',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      'Encaminho para análise dessa Central pedido de transferência do reeducando [NOME COMPLETO], IPEN [Nº], atualmente custodiado no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], formulado por seu(ua) familiar [NOME DO FAMILIAR], [GRAU DE PARENTESCO], por meio de [carta / e-mail / petição física / petição judicial] datado(a) de [DATA].',
      'A solicitação tem por fundamento [MOTIVO ALEGADO PELO FAMILIAR: mudança de domicílio, necessidade de aproximação do núcleo familiar, dificuldade de deslocamento para visitas, outro motivo relevante], nos termos do art. 21, inciso II, da Resolução Conjunta Interinstitucional n. 01/2026.',
      'Para subsidiar a análise, encaminho em anexo Boletim Penal Informativo devidamente atualizado, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor, e [carta / e-mail / petição física] original do familiar.',
      'Uma vez efetivada a remoção — caso aprovada —, o r. Juízo competente será devidamente comunicado, no prazo legal estabelecido, qual seja, em até 24 horas.',
      'Informo, por fim, que foram realizados contatos prévios com os entes envolvidos, quais sejam, o Diretor da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem ou anuem ao presente expediente.',
      'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa do referido reeducando.',
    ],
  },

  /* ── PEDIDO POR ADVOGADO ─────────────────────────── */
  pedido_advogado: {
    titulo: '⚖️ Modelo 3 — Pedido por Advogado',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      'Encaminho para análise dessa Central pedido de transferência do reeducando [NOME COMPLETO], IPEN [Nº], atualmente custodiado no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], formulado pelo advogado constituído [NOME DO ADVOGADO], OAB/[UF] n.º [NÚMERO], por meio de petição datada de [DATA].',
      'A solicitação tem por fundamento [MOTIVO ALEGADO PELO ADVOGADO: mudança de domicílio, aproximação familiar, outro motivo relevante devidamente fundamentado], nos termos do art. 21, inciso II, da Resolução Conjunta Interinstitucional n. 01/2026.',
      'Para subsidiar a análise, encaminho em anexo Boletim Penal Informativo devidamente atualizado, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor, e petição original do advogado, com comprovação de mandato.',
      'Uma vez efetivada a remoção — caso aprovada —, o r. Juízo competente será devidamente comunicado, no prazo legal estabelecido, qual seja, em até 24 horas.',
      'Informo, por fim, que foram realizados contatos prévios com os entes envolvidos, quais sejam, o Diretor da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem ou anuem ao presente expediente.',
      'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa do referido reeducando.',
    ],
  },

  /* ── EQUALIZAÇÃO DE VAGAS ───────────────────────── */
  equalizacao: {
    titulo: '⚖️ Modelo — Adequação da Capacidade de Ocupação (Art. 21, III)',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      { texto: 'Considerando a necessidade de gestão e equalização da ocupação carcerária no âmbito do(a) [UNIDADE PRISIONAL DE ORIGEM], bem como a adequada distribuição das pessoas privadas de liberdade entre as diferentes estruturas de estabelecimentos penais, encaminho para análise dessa Central de Regulação de Vagas pedido de transferência do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) nesta unidade prisional, para o(a) [UNIDADE PRISIONAL DE DESTINO].', editavel: false },
      { texto: 'A solicitação fundamenta-se na necessidade de equalização da lotação entre as unidades do sistema prisional catarinense, em conformidade com as diretrizes estabelecidas para a gestão de vagas e movimentações prisionais previstas na Resolução Conjunta Interinstitucional n. 01/2026, especialmente em seu art. 21, inciso III.', editavel: false },
      { texto: 'Para subsidiar a análise, informo a devida atualização no sistema i-PEN do Boletim Penal Informativo, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como anexo o Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor.', editavel: false },
      { texto: 'Uma vez efetivada a remoção, caso aprovada, o r. Juízo competente será devidamente comunicado, no prazo legal estabelecido, qual seja em até 24 horas.', editavel: false },
      { texto: 'Informo, por fim, que foram realizados contatos prévios com as autoridades pertinentes, quais sejam, o Diretor do estabelecimento penal de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que anuem ao presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa.', editavel: false },
    ],
  },

  /* ── MANDADO DE COMARCA DIVERSA ─────────────────── */
  mandado: {
    titulo: '🏛️ Modelo — Mandado de Prisão de Comarca Diversa',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      { texto: 'Encaminho para análise pedido de transferência do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], em razão do cumprimento de Mandado de Prisão expedido pelo(a) [JUÍZO EXPEDIDOR — Ex.: Vara Regional de Execuções Penais da Comarca de XXXXX / 2ª Vara Criminal da Comarca de XXX].', editavel: false },
      { texto: 'Considerando que o(a) referido(a) custodiado(a) foi preso(a) em comarca diversa daquela que expediu a ordem de prisão, bem como que o(a) [UNIDADE PRISIONAL DE DESTINO] é a unidade responsável pela circunscrição da autoridade judiciária expedidora, a transferência mostra-se adequada, em conformidade com as diretrizes estabelecidas para a gestão de vagas e movimentações prisionais previstas na Resolução Conjunta Interinstitucional n. 01/2026, especialmente em seu art. 21, inciso III, bem como em cumprimento ao Art. 24 da Portaria Normativa nº. 2189/2025 do Departamento de Polícia Penal.', editavel: false },
      { texto: 'Informo, por fim, que foram realizados contatos prévios com as autoridades pertinentes, quais sejam, o(a) Diretor(a) da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que anuem ao presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa.', editavel: false },
    ],
  },

  /* ── PERNOITE ────────────────────────────────────── */
  pernoite: {
    titulo: '🌙 Modelo — Pernoite',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    paragrafos: [
      { texto: 'Encaminho para análise pedido de PERNOITE do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], no estabelecimento penal [UNIDADE PRISIONAL DE DESTINO], em razão de [FUNDAMENTAR A RAZÃO].', editavel: true, label: 'Razão do pernoite' },
      { texto: 'Informo, por fim, que fora realizado contato prévio com a gestão da unidade de destino, que subscreve também o presente expediente.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade do pleito administrativo.', editavel: false },
    ],
  },

  /* ── SEGURANÇA MÁXIMA / RDD ──────────────────────── */
  umax: {
    titulo: '🔒 Modelo — Inclusão na Unidade de Segurança Máxima (após RDD deferido)',
    saudacaoInicial: 'Senhor(a) Coordenador(a),',
    destinatarioExtra: true,
    paragrafos: [
      { texto: 'Encaminho para análise e deliberação dessa Comissão Deliberativa para inclusão de presos na Unidade de Segurança Máxima do Estado de Santa Catarina, bem como da Central de Regulação de Vagas (CRV) quanto à inclusão do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM].', editavel: false },
      { texto: 'A presente solicitação fundamenta-se nos documentos e informações que seguem anexos, os quais demonstram a necessidade da medida, especialmente diante das circunstâncias que envolvem o referido custodiado e os riscos à ordem, à disciplina e à segurança do estabelecimento prisional.', editavel: false },
      { texto: 'Para subsidiar a análise dessa Comissão e da CRV, encaminham-se os seguintes documentos: (i) Ofício de solicitação de inclusão em Regime Disciplinar Diferenciado (RDD) encaminhado ao r. Juízo competente; (ii) Decisão judicial que determina a inclusão do apenado em RDD; (iii) Boletim de Ocorrência, PAD, Relatórios e/ou demais informações pertinentes à avaliação da medida.', editavel: false },
      { texto: 'Ademais, informo a devida atualização no sistema i-PEN do Boletim Penal Informativo, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como anexo o Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor.', editavel: false },
      { texto: 'Uma vez efetivada a remoção, caso aprovada, o r. Juízo competente será devidamente comunicado, no prazo legal estabelecido, qual seja em até 24 horas.', editavel: false },
      { texto: 'Diante do exposto, solicita-se a urgente apreciação do presente pedido, com vistas à deliberação acerca da inclusão do apenado na Unidade de Segurança Máxima do Estado.', editavel: false },
      { texto: 'Sem mais para o momento, colocamo-nos à disposição para quaisquer esclarecimentos adicionais que se façam necessários.', editavel: false },
    ],
  },

  /* ── COMUNICAÇÃO AO JUÍZO ───────────────────────── */
  comunicacao: {
    titulo: '🏛️ Comunicação ao Juízo de Execução — Saída e Entrada',
    saudacaoInicial: 'Senhor(a) Juiz(a),',
    destinatarioJuizo: false,
    destinatarioCustom: true,
    tipoSeletor: 'saida_entrada',
    variantes: {
      saida: {
        titulo: '🏛️ Comunicação ao Juízo de Execução — Saída',
        paragrafos: [
          { texto: 'Comunicamos a Vossa Excelência que o(a) custodiado(a) [NOME COMPLETO], IPEN nº [NÚMERO], foi transferido(a) desta Unidade Prisional para a [UNIDADE PRISIONAL DE DESTINO], localizada em [CIDADE DE DESTINO]/SC, no dia [DATA].', editavel: false },
          { texto: 'A transferência foi devidamente autorizada pela Central de Regulação de Vagas — CRV/DPP, mediante despacho nº [Nº DO DESPACHO], de [DATA DO DESPACHO], em razão de [FUNDAMENTAÇÃO].', editavel: false },
          { texto: 'Nada mais havendo a comunicar, ficamos à disposição de Vossa Excelência para quaisquer esclarecimentos que se façam necessários.', editavel: false },
        ],
      },
      entrada: {
        titulo: '🏛️ Comunicação ao Juízo de Execução — Entrada',
        paragrafos: [
          { texto: 'Comunicamos a Vossa Excelência que o(a) custodiado(a) [NOME COMPLETO], IPEN nº [NÚMERO], ingressou nesta Unidade Prisional, oriundo(a) da [UNIDADE PRISIONAL DE ORIGEM], localizada em [CIDADE DE ORIGEM]/SC, no dia [DATA].', editavel: false },
          { texto: 'A transferência foi devidamente autorizada pela Central de Regulação de Vagas — CRV/DPP, mediante despacho nº [Nº DO DESPACHO], de [DATA DO DESPACHO], em razão de [FUNDAMENTAÇÃO].', editavel: false },
          { texto: 'Nada mais havendo a comunicar, ficamos à disposição de Vossa Excelência para quaisquer esclarecimentos que se façam necessários.', editavel: false },
        ],
      },
    },
    paragrafos: [
      { texto: 'Comunicamos a Vossa Excelência que o(a) custodiado(a) [NOME COMPLETO], IPEN nº [NÚMERO], foi transferido(a) desta Unidade Prisional para a [UNIDADE PRISIONAL DE DESTINO], localizada em [CIDADE DE DESTINO]/SC, no dia [DATA].', editavel: false },
      { texto: 'A transferência foi devidamente autorizada pela Central de Regulação de Vagas — CRV/DPP, mediante despacho nº [Nº DO DESPACHO], de [DATA DO DESPACHO], em razão de [FUNDAMENTAÇÃO].', editavel: false },
      { texto: 'Nada mais havendo a comunicar, ficamos à disposição de Vossa Excelência para quaisquer esclarecimentos que se façam necessários.', editavel: false },
    ],
  },

};

let modeloAtual = 'emergencial';

function selecionarModelo(id) {
  modeloAtual = id;
  const m = modelosTexto[id];
  if (!m) return;

  // Título
  document.getElementById('oficioTitulo').textContent = m.titulo;

  // Destaca botão ativo
  document.querySelectorAll('[id^="tab-"]').forEach(b => {
    b.style.background = ''; b.style.color = ''; b.style.borderColor = '';
  });
  const tabBtn = document.getElementById('tab-' + id);
  if (tabBtn) {
    tabBtn.style.background = 'var(--azul-2)';
    tabBtn.style.color      = '#fff';
    tabBtn.style.borderColor = 'var(--azul-2)';
  }

  // Saudação padrão
  const sel = document.getElementById('ofc-saudacao');
  if (sel) sel.value = m.saudacaoInicial === 'Senhor(a) Juiz(a),'
    ? 'Senhor(a) Juiz(a),'
    : 'Senhor(a) Coordenador(a),';

  // Parágrafos — renderização inline com campos [EDITÁVEIS] como inputs amarelos
  const cont = document.getElementById('ofc-paragrafos');
  cont.innerHTML = m.paragrafos.map((p, pIdx) => {
    const isObj = typeof p === 'object';
    const texto = isObj ? p.texto : p;

    // Substitui [CAMPO] por <input> amarelo inline
    const htmlTexto = texto.replace(/\[([^\]]+)\]/g, (match, fieldName) => {
      const inputId = `campo-${pIdx}-${fieldName.replace(/[^a-zA-Z0-9]/g,'_')}`;
      const w = Math.max(120, Math.min(400, fieldName.length * 9 + 40));
      return `<input type="text" class="campo-inline-editavel campo-inline-negrito" id="${inputId}" placeholder="${fieldName}" data-original="${fieldName}" style="width:${w}px;" />`;
    });

    return `<div class="oficio-paragrafo oficio-paragrafo-inline" data-texto-original="${texto.replace(/"/g,'&quot;')}">
      <p class="oficio-paragrafo-texto">${htmlTexto}</p>
    </div>`;
  }).join('');

  // Destinatário
  const destEl = document.getElementById('ofc-destinatario');
  if (m.destinatarioCustom) {
    // Campos editáveis: Juiz(a), Vara, Cidade
    destEl.innerHTML =
      '<p>Ao(À) Senhor(a)</p>' +
      '<p><strong>Dr(a). <input type="text" class="campo-dest-inline" id="dest-juiz" placeholder="NOME DO(A) JUIZ(A)" style="width:280px;" /></strong></p>' +
      '<p>Juiz(a) de Direito</p>' +
      '<p><input type="text" class="campo-dest-inline" id="dest-vara" placeholder="VARA / JUÍZO" style="width:300px;" /></p>' +
      '<p><input type="text" class="campo-dest-inline" id="dest-cidade" placeholder="CIDADE" style="width:200px;" /></p>';
  } else if (m.destinatarioJuizo) {
    destEl.innerHTML = '<p>A</p><p><strong>[VARA DE EXECUÇÕES PENAIS — COMARCA DE [COMARCA]]</strong></p><p>[CIDADE]/SC</p>';
  } else if (m.destinatarioExtra) {
    destEl.innerHTML =
      '<p>À</p><p><strong>COMISSÃO DELIBERATIVA — UNIDADE DE SEGURANÇA MÁXIMA</strong></p>' +
      '<p>Departamento de Polícia Penal — DPP</p>' +
      '<p>Secretaria de Estado de Justiça e Reintegração Social — SEJURI</p>' +
      '<p>Florianópolis/SC</p><br>' +
      '<p>À</p><p><strong>CENTRAL DE REGULAÇÃO DE VAGAS — CRV</strong></p>' +
      '<p>Departamento de Polícia Penal — DPP</p>' +
      '<p>Secretaria de Estado de Justiça e Reintegração Social — SEJURI</p>' +
      '<p>Florianópolis/SC</p>';
  } else {
    destEl.innerHTML =
      '<p>À</p><p><strong>CENTRAL DE REGULAÇÃO DE VAGAS — CRV</strong></p>' +
      '<p>Departamento de Polícia Penal — DPP</p>' +
      '<p>Secretaria de Estado de Justiça e Reintegração Social — SEJURI</p>' +
      '<p>Florianópolis/SC</p>';
  }

  // Seletor Saída/Entrada para comunicacao
  const seletorEl = document.getElementById('ofc-tipo-seletor');
  if (m.tipoSeletor === 'saida_entrada') {
    if (seletorEl) {
      seletorEl.style.display = 'flex';
      seletorEl.querySelectorAll('.tipo-btn').forEach(b => {
        b.classList.toggle('ativo', b.dataset.tipo === 'saida');
      });
    }
    // Load saida by default
    _aplicarVarianteComunicacao('saida');
  } else {
    if (seletorEl) seletorEl.style.display = 'none';
  }


  // Renderiza assinaturas com unidades já selecionadas (ou placeholders)
  renderizarAssinaturas(unidadeOrigemSel, unidadeDestinoSel);
}

function atualizarSaudacao() {
  // Nada a fazer — campo customizado removido
}

// ================================================
// EXPORTAR — Coleta texto do ofício
// ================================================
function coletarTextoOficio() {
  const cidade   = document.getElementById('ofc-cidade-txt')?.textContent || '';
  const data     = document.getElementById('ofc-data-txt')?.textContent   || '';
  const saudSel  = document.getElementById('ofc-saudacao');
  const saudacao = saudSel?.value || 'Prezado(a) Coordenador(a),';
  const despedida = document.getElementById('ofc-despedida')?.value || 'Atenciosamente,';
  // Coleta parágrafos com campos inline preenchidos
  const paras = [...document.querySelectorAll('#ofc-paragrafos .oficio-paragrafo-inline')].map(div => {
    let texto = div.dataset.textoOriginal || '';
    div.querySelectorAll('.campo-inline-editavel').forEach(input => {
      const original = input.dataset.original || input.placeholder;
      const valor = input.value.trim() || input.placeholder;
      texto = texto.replace('[' + original + ']', valor);
    });
    return texto.trim();
  }).filter(Boolean);
  const asss     = [...document.querySelectorAll('#ofc-assinaturas .oficio-assinatura-bloco')].map(b => {
    const nome   = b.querySelector('.ass-nome input')?.value || '';
    const cargos = [...b.querySelectorAll('.ass-cargo input')].map(i => i.value).filter(Boolean);
    return { nome, cargo: cargos.join('\n') };
  });
  // Coleta destinatário — campos editáveis ou texto fixo
  const destEl2 = document.getElementById('ofc-destinatario');
  let destHTML = '';
  if (destEl2) {
    const juiz = destEl2.querySelector('#dest-juiz');
    const vara = destEl2.querySelector('#dest-vara');
    const cidade = destEl2.querySelector('#dest-cidade');
    if (juiz) {
      // Montagem linha a linha do destinatário editável
      destHTML = 'Ao(À) Senhor(a)\n' +
        'Dr(a). ' + (juiz.value || juiz.placeholder) + '\n' +
        'Juiz(a) de Direito\n' +
        (vara.value || vara.placeholder) + '\n' +
        (cidade.value || cidade.placeholder);
    } else {
      destHTML = destEl2.innerText || '';
    }
  }
  return { cidade, data, saudacao, paras, despedida, asss, destHTML };
}

function copiarOficio() {
  const { cidade, data, saudacao, paras, despedida, asss, destHTML } = coletarTextoOficio();
  const NL     = '\n';
  const bigGap = '\n\n\n\n';
  const midGap = '\n\n\n\n\n';
  const assGap = '\n\n';
  const indent = '   ';
  const pad8   = '                                ';
  let txt = cidade + ', ' + data + '.' + bigGap + indent + saudacao + NL + bigGap;
  paras.forEach((p, i) => {
    txt += indent + p + NL;
    if (i < paras.length - 1) txt += NL;
  });
  txt += bigGap + pad8 + despedida + NL + midGap;
  asss.forEach(a => {
    txt += pad8 + '(documento assinado digitalmente)' + NL;
    txt += pad8 + a.nome + NL;
    a.cargo.split('\n').forEach(l => { txt += pad8 + l + NL; });
    txt += assGap;
  });
  txt += bigGap + destHTML;
  navigator.clipboard.writeText(txt).then(() => showToast('✅ Ofício copiado!')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    showToast('✅ Ofício copiado!');
  });
}

function gerarPDF() {
  const { cidade, data, saudacao, paras, despedida, asss } = coletarTextoOficio();
  const destEl = document.getElementById('ofc-destinatario');
  const html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"/><title>Ofício CRV</title>'
    + '<style>@page{size:A4;margin:3cm 2.5cm 2.5cm 3cm;}body{font-family:Arial,sans-serif;font-size:11pt;line-height:1.5;color:#000;}'
    + '.data{text-align:right;margin-bottom:4em;}.saud{text-indent:1.5cm;margin-bottom:4em;}'
    + '.par{text-indent:1.5cm;text-align:justify;margin-bottom:1em;}'
    + '.desp{margin-top:4em;margin-left:8cm;}.asss{margin-top:5em;margin-left:8cm;}'
    + '.ab{margin-bottom:2em;}.dig{font-size:9pt;color:#555;font-style:italic;}.nom{font-weight:bold;}'
    + '.dest{margin-top:4em;}strong{font-weight:bold;text-transform:uppercase;}</style></head><body>'
    + '<div class="data">' + cidade + ', ' + data + '.</div>'
    + '<div class="saud">' + saudacao + '</div>'
    + paras.map(p => '<div class="par">' + p + '</div>').join('')
    + '<div class="desp">' + despedida + '</div>'
    + '<div class="asss">' + asss.map(a =>
        '<div class="ab"><div class="dig">(documento assinado digitalmente)</div>'
        + '<div class="nom">' + a.nome + '</div>'
        + a.cargo.split('\n').map(l => '<div>' + l + '</div>').join('')
        + '</div>').join('') + '</div>'
    + '<div class="dest">' + (destEl ? destEl.innerHTML : '') + '</div>'
    + '</body></html>';
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  setTimeout(() => w.print(), 600);
}

function gerarWord() {
  const { cidade, data, saudacao, paras, despedida, asss } = coletarTextoOficio();
  const destEl = document.getElementById('ofc-destinatario');
  const mso = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">'
    + '<head><meta charset="UTF-8"/>'
    + '<style>@page{mso-page-orientation:portrait;margin:3cm 2.5cm 2.5cm 3cm;}'
    + 'body{font-family:Arial;font-size:11pt;line-height:1.5;}'
    + '.data{text-align:right;}.gap4{margin-bottom:4em;}.gap5{margin-bottom:5em;}.gap2{margin-bottom:2em;}'
    + '.i15{margin-left:1.5cm;text-align:justify;}.i8{margin-left:8cm;}'
    + 'b{font-weight:bold;}.dig{font-size:9pt;color:#555;font-style:italic;}'
    + '</style></head><body>'
    + '<p class="data">' + cidade + ', ' + data + '.</p>'
    + '<p class="gap4">&nbsp;</p>'
    + '<p class="i15 gap4">' + saudacao + '</p>'
    + paras.map(p => '<p class="i15">' + p + '</p><p>&nbsp;</p>').join('')
    + '<p class="i8 gap4">' + despedida + '</p>'
    + '<p class="gap5">&nbsp;</p>'
    + asss.map(a =>
        '<p class="i8 dig">(documento assinado digitalmente)</p>'
        + '<p class="i8"><b>' + a.nome + '</b></p>'
        + a.cargo.split('\n').map(l => '<p class="i8">' + l + '</p>').join('')
        + '<p class="gap2">&nbsp;</p>').join('')
    + '<p class="gap4">&nbsp;</p>'
    + (destEl ? destEl.innerHTML : '')
    + '</body></html>';
  const blob = new Blob(['\ufeff', mso], { type: 'application/msword' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'oficio-crv.doc';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
  showToast('📘 Download Word iniciado!');
}

// ================================================
// TOAST
// ================================================
function showToast(msg) {
  let t = document.getElementById('crvToast');
  if (!t) {
    t = document.createElement('div'); t.id = 'crvToast';
    t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--azul-2);color:#fff;padding:.6rem 1.5rem;border-radius:100px;font-size:.85rem;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.3);transition:opacity .3s;pointer-events:none;';
    document.body.appendChild(t);
  }
  t.textContent = msg; t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ================================================
// INICIALIZAÇÃO
// ================================================
document.addEventListener('DOMContentLoaded', () => {
  // Restaurar dark mode
  if (localStorage.getItem('darkMode') === '1') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('btnDarkMode');
    if (btn) btn.innerHTML = '☀️ Modo Claro';
  }

  // Inicializa modelo padrão (sem abrir modal)
  // selecionarModelo('emergencial'); // só quando o modal abrir

  // Abre página correta pelo hash
  const hash   = window.location.hash.replace('#','').trim();
  const validos = Object.keys(nomesPagina);
  if (hash && validos.includes(hash)) {
    navegarPara(hash);
  } else {
    navegarPara('inicio');
  }

  // Botão voltar/avançar
  window.addEventListener('popstate', () => {
    const h = window.location.hash.replace('#','').trim();
    if (h && validos.includes(h)) {
      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('ativo'));
      const alvo = document.getElementById(h);
      if (alvo) alvo.classList.add('ativo');
      document.querySelectorAll('.nav-principal a').forEach(a => {
        a.classList.remove('ativo');
        if (a.dataset.pagina === h) a.classList.add('ativo');
      });
      atualizarBreadcrumb(h);
    }
  });
});

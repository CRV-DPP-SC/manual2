/* ================================================
   MANUAL OPERACIONAL CRV — Scripts
   Polícia Penal de Santa Catarina

// ================================================
// CADASTRO COMPLETO DAS UNIDADES PRISIONAIS
// Fonte: DPP/SEJURI — dados conforme seção "Unidades"
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

// Preenche os selects de origem e destino ao abrir o modal
function popularSelectsUnidades() {
  const selOri = document.getElementById('sel-origem');
  const selDes = document.getElementById('sel-destino');
  if (!selOri || !selDes) return;
  if (selOri.options.length > 1) return; // já populado

  // Agrupa por SR para optgroup
  const grupos = {};
  UNIDADES.forEach(u => {
    if (!grupos[u.sr]) grupos[u.sr] = [];
    grupos[u.sr].push(u);
  });

  const srNomes = {
    SR01: 'SR01 — Grande Florianópolis',
    SR02: 'SR02 — Sul',
    SR03: 'SR03 — Norte Catarinense',
    SR04: 'SR04 — Vale do Itajaí',
    SR05: 'SR05 — Serrana',
    SR06: 'SR06 — Oeste',
    SR07: 'SR07 — Médio Vale do Itajaí',
    SR08: 'SR08 — Planalto Norte',
  };

  [selOri, selDes].forEach(sel => {
    Object.keys(grupos).sort().forEach(sr => {
      const grp = document.createElement('optgroup');
      grp.label = srNomes[sr] || sr;
      grupos[sr].forEach((u, idx) => {
        const opt = document.createElement('option');
        // Value = index in UNIDADES array
        opt.value = UNIDADES.indexOf(u);
        opt.textContent = u.nome;
        grp.appendChild(opt);
      });
      sel.appendChild(grp);
    });
  });
}

// Estado das unidades selecionadas
let unidadeOrigemSel = null;
let unidadeDestinoSel = null;

function selecionarUnidadeOrigem() {
  const idx = document.getElementById('sel-origem').value;
  if (!idx && idx !== 0) { unidadeOrigemSel = null; atualizarInfoUnidade('origem', null); atualizarDocumentoComUnidades(); return; }
  unidadeOrigemSel = UNIDADES[parseInt(idx)];
  atualizarInfoUnidade('origem', unidadeOrigemSel);
  atualizarDocumentoComUnidades();
}

function selecionarUnidadeDestino() {
  const idx = document.getElementById('sel-destino').value;
  if (!idx && idx !== 0) { unidadeDestinoSel = null; atualizarInfoUnidade('destino', null); atualizarDocumentoComUnidades(); return; }
  unidadeDestinoSel = UNIDADES[parseInt(idx)];
  atualizarInfoUnidade('destino', unidadeDestinoSel);
  atualizarDocumentoComUnidades();
}

function atualizarInfoUnidade(tipo, u) {
  const el = document.getElementById('info-' + tipo);
  if (!el) return;
  if (!u) { el.innerHTML = ''; el.classList.remove('preenchido'); return; }
  el.innerHTML = `<strong>${u.nome}</strong>${u.cidade} · ${u.sr} · ${u.tel}`;
  el.classList.add('preenchido');
}

function atualizarDocumentoComUnidades() {
  const ori = unidadeOrigemSel;
  const des = unidadeDestinoSel;

  // Atualiza cidade na data
  const cidadeEl = document.getElementById('ofc-cidade-txt');
  if (cidadeEl) cidadeEl.textContent = ori ? ori.cidade : '[CIDADE]';

  // Atualiza parágrafos com nomes das unidades
  document.querySelectorAll('#ofc-paragrafos textarea').forEach(ta => {
    let txt = ta.value;
    if (ori) {
      txt = txt.replace(/\[UNIDADE PRISIONAL DE ORIGEM\]/g, ori.nome);
      txt = txt.replace(/\[CIDADE\]/g, ori.cidade);
    }
    if (des) txt = txt.replace(/\[UNIDADE PRISIONAL DE DESTINO\]/g, des.nome);
    ta.value = txt;
  });

  // Atualiza assinaturas
  const assEl = document.getElementById('ofc-assinaturas');
  if (!assEl) return;

  const m = modelosTexto[modeloAtual];
  if (!m) return;

  // Reconstrói assinaturas com dados das unidades
  const assinaturas = construirAssinaturas(m, ori, des);
  assEl.innerHTML = assinaturas.map(a =>
    `<div class="oficio-assinatura-bloco">
      <div class="ass-digital">(documento assinado digitalmente)</div>
      <div class="ass-nome"><input class="campo-edit" value="${a.nome}" style="font-weight:bold;width:340px;max-width:100%;"/></div>
      <div class="ass-cargo"><input class="campo-edit" value="${a.cargo}" style="width:340px;max-width:100%;"/></div>
    </div>`
  ).join('');
}

function construirAssinaturas(m, ori, des) {
  // Usa dados reais se disponíveis, senão placeholder
  const nomeOri   = ori ? ori.diretor : '[NOME DO DIRETOR — ORIGEM]';
  const cargoOri  = ori ? `Diretor(a) — ${ori.nome}` : 'Diretor(a) — [UNIDADE DE ORIGEM]';
  const nomeDes   = des ? des.diretor : '[NOME DO DIRETOR — DESTINO]';
  const cargoDes  = des ? `Diretor(a) — ${des.nome}` : 'Diretor(a) — [UNIDADE DE DESTINO]';
  const srOri     = ori ? `Superintendente — ${ori.sr}` : 'Superintendente — [SR DE ORIGEM]';
  const srDes     = des ? `Superintendente — ${des.sr}` : 'Superintendente — [SR DE DESTINO]';

  if (m.assinaturas.length === 2) {
    // Modelo USM — só origem + SR origem
    return [
      { nome: nomeOri,  cargo: cargoOri },
      { nome: '[NOME DO SUPERINTENDENTE REGIONAL — ORIGEM]', cargo: srOri },
    ];
  }
  return [
    { nome: nomeOri,  cargo: cargoOri },
    { nome: nomeDes,  cargo: cargoDes },
    { nome: '[NOME DO SUPERINTENDENTE REGIONAL — ORIGEM]', cargo: srOri },
    { nome: '[NOME DO SUPERINTENDENTE REGIONAL — DESTINO — SE FOR O CASO]', cargo: srDes },
  ];
}

   ================================================ */

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

// Atalho rápido → abre modelos com modelo pré-selecionado
function abrirModeloDireto(modeloId) {
  navegarPara('modelos');
  setTimeout(() => abrirModalOficio(modeloId), 80);
}

// ================================================
// BREADCRUMB
// ================================================
const nomesPagina = {
  'inicio': 'Início',
  'hipoteses': 'Hipóteses de Transferência',
  'fluxo': 'Fluxo Operacional',
  'documentos': 'Documentos Necessários',
  'modelos': 'Modelos de Ofícios',
  'prazos': 'Prazos',
  'vedacoes': 'Vedações',
  'legislacao': 'Legislação',
  'unidades': 'Unidades Prisionais',
  'emergencial': 'Segurança / Emergência',
  'pedido-preso': 'Pedido do Preso ou Família',
  'equalizacao': 'Adequação da Capacidade de Ocupação',
  'mandado-comarca': 'Mandado de Prisão de Comarca Diversa',
  'pernoite': 'Pernoite',
  'seguranca-maxima': 'Segurança Máxima / RDD'
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
// UNIDADES — Toggle SR e Unidade
// ================================================
function toggleSR(header) {
  const bloco   = header.closest('.sr-bloco');
  const painel  = bloco.querySelector('.sr-unidades');
  const aberto  = header.classList.contains('aberto');
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
        card.classList.remove('oculto');
        algum = true;
        card.querySelector('.up-header')?.classList.add('aberto');
        const det = card.querySelector('.up-detalhe');
        if (det) det.style.display = 'flex';
      } else {
        card.classList.add('oculto');
      }
    });
    if (algum) {
      bloco.querySelector('.sr-header')?.classList.add('aberto');
      const su = bloco.querySelector('.sr-unidades');
      if (su) su.style.display = 'block';
    } else if (!srFilt) {
      bloco.classList.add('oculto');
    }
  });
}

// ================================================
// BUSCA GLOBAL NO MANUAL
// ================================================
function buscarManual() {
  const input   = document.getElementById('buscaManual');
  const termo   = input.value.toLowerCase().trim();
  const resultado = document.getElementById('buscaResultado');
  const btnLimpar = document.getElementById('buscaLimpar');
  btnLimpar.style.display = termo.length > 0 ? 'flex' : 'none';
  if (!termo) {
    resultado.style.display = 'none'; resultado.innerHTML = '';
    document.querySelectorAll('.page-section').forEach(s => s.style.display = '');
    return;
  }
  const hits = [];
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.style.display = 'none';
    const textoSec = sec.innerText.toLowerCase();
    if (textoSec.includes(termo)) {
      const id = sec.id; const nome = nomesPagina[id] || id;
      const idx = textoSec.indexOf(termo);
      const ini = Math.max(0, idx - 60); const fim = Math.min(textoSec.length, idx + termo.length + 100);
      let trecho = sec.innerText.substring(ini, fim).replace(/\n+/g, ' ').trim();
      if (ini > 0) trecho = '…' + trecho;
      if (fim < textoSec.length) trecho = trecho + '…';
      const regex = new RegExp('(' + termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      hits.push({ id, nome, trecho: trecho.replace(regex, '<mark>$1</mark>') });
    }
  });
  if (hits.length === 0) {
    resultado.innerHTML = '<p class="busca-sem-resultado">Nenhum resultado para <strong>"' + input.value + '"</strong>.</p>';
  } else {
    resultado.innerHTML =
      '<p class="busca-contagem">' + hits.length + ' seção(ões) encontrada(s) para <strong>"' + input.value + '"</strong>:</p>' +
      hits.map(h => '<a class="busca-item" href="#" onclick="limparBusca();navegarPara(\'' + h.id + '\');return false;"><span class="busca-item-nome">📄 ' + h.nome + '</span><span class="busca-item-trecho">' + h.trecho + '</span></a>').join('');
  }
  resultado.style.display = 'block';
}

function limparBusca() {
  const input = document.getElementById('buscaManual');
  input.value = '';
  document.getElementById('buscaResultado').style.display = 'none';
  document.getElementById('buscaResultado').innerHTML = '';
  document.getElementById('buscaLimpar').style.display = 'none';
  document.querySelectorAll('.page-section').forEach(s => s.style.display = '');
  navegarPara('inicio');
}

// ================================================
// DARK MODE
// ================================================
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
// MODELOS DE OFÍCIOS — Conteúdo dos parágrafos
// ================================================
const modelosTexto = {
  emergencial: {
    titulo: '🚨 Modelo 005/2026 — Segurança / Emergência',
    paragrafos: [
      'Encaminho para análise urgente dessa Central de Regulação de Vagas pedido de transferência excepcional do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], em razão de situação de crise/emergência identificada pelas equipes deste estabelecimento penal, conforme passo a detalhar.',
      'A solicitação fundamenta-se na existência de [DESCREVER DETALHADAMENTE A SITUAÇÃO: risco iminente à integridade física, ameaça de morte, envolvimento em crise interna, motim, rebelião ou outro fator de segurança], que torna inviável a manutenção do(a) reeducando(a) nesta unidade prisional sem prejuízo à sua integridade física ou à ordem e segurança do estabelecimento, nos termos do art. 21, inciso I, da Resolução Conjunta Interinstitucional n. 01/2026.',
      'Diante da urgência da situação, solicita-se a transferência do(a) reeducando(a) para o(a) [UNIDADE PRISIONAL DE DESTINO], onde há condições adequadas para sua custódia em segurança.',
      'Destaca-se que a transferência em análise não deve ser considerada como sanção disciplinar de 30 (trinta) dias, uma vez que não constitui efetivamente eventual sanção a ser aplicada, cabível somente após a regular tramitação do PAD, nos termos do art. 57 e 58 da Lei de Execução Penal e art. 73 da Lei Complementar 529/11.',
      'Deste modo, os direitos inerentes à pessoa presa deverão ser preservados, não se excluindo a possibilidade de isolamento preventivo, instituto diverso da sanção disciplinar, cuja disciplina encontra-se no art. 60 da Lei nº 7.210/1984 (LEP), o qual estabelece: "Art. 60. A autoridade administrativa poderá decretar o isolamento preventivo do faltoso pelo prazo de até dez dias."',
      'Para subsidiar a análise, encaminho, anexos, o Boletim Penal Informativo da pessoa presa devidamente atualizado no sistema i-PEN, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor. Encaminho ainda: boletim de ocorrência interno, relatório da equipe de segurança e demais documentos que subsidiam a presente solicitação.',
      'Uma vez efetivada a remoção, caso aprovada, o r. Juízo competente será devidamente comunicado, no prazo legal estabelecido, qual seja em até 24 horas.',
      'Informo, por fim, que foram realizados contatos prévios com as autoridades pertinentes, quais sejam, o Diretor do estabelecimento penal de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que subscrevem o presente expediente.',
      'Diante do exposto, solicita-se análise e célere deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa.'
    ],
    assinaturas: [
      { cargo: 'Diretor(a) do(a) [UNIDADE DE ORIGEM]', nome: '[NOME DO DIRETOR DA UNIDADE DE ORIGEM]' },
      { cargo: 'Diretor(a) do(a) [UNIDADE DE DESTINO]', nome: '[NOME DO DIRETOR DA UNIDADE DE DESTINO]' },
      { cargo: 'Superintendente do(a) [SR DE ORIGEM]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — ORIGEM]' },
      { cargo: 'Superintendente do(a) [SR DE DESTINO — SE FOR O CASO]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — DESTINO]' }
    ]
  },
  equalizacao: {
    titulo: '⚖️ Modelo — Adequação da Capacidade de Ocupação (Art. 21, III)',
    paragrafos: [
      'Considerando a necessidade de gestão e equalização da ocupação carcerária no âmbito do(a) [UNIDADE PRISIONAL DE ORIGEM], bem como a adequada distribuição das pessoas privadas de liberdade entre as diferentes estruturas de estabelecimentos penais, encaminho para análise dessa Central de Regulação de Vagas pedido de transferência do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) nesta unidade prisional, para o(a) [UNIDADE PRISIONAL DE DESTINO].',
      'A solicitação fundamenta-se na necessidade de adequação da capacidade de ocupação entre as unidades do sistema prisional catarinense, em conformidade com as diretrizes estabelecidas para a gestão de vagas e movimentações prisionais previstas na Resolução Conjunta Interinstitucional n. 01/2026, especialmente em seu art. 21, inciso III.',
      'Para subsidiar a análise, informo a devida atualização no sistema i-PEN do Boletim Penal Informativo, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como anexo o Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor.',
      'Uma vez efetivada a remoção, caso aprovada, o r. Juízo competente será devidamente comunicado no prazo legal de até 24 horas.',
      'Informo, por fim, que foram realizados contatos prévios com as autoridades pertinentes, quais sejam, o Diretor do estabelecimento penal de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que anuem ao presente expediente.',
      'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa.'
    ],
    assinaturas: [
      { cargo: 'Diretor(a) do(a) [UNIDADE DE ORIGEM]', nome: '[NOME DO DIRETOR DA UNIDADE DE ORIGEM]' },
      { cargo: 'Diretor(a) do(a) [UNIDADE DE DESTINO]', nome: '[NOME DO DIRETOR DA UNIDADE DE DESTINO]' },
      { cargo: 'Superintendente do(a) [SR DE ORIGEM]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — ORIGEM]' },
      { cargo: 'Superintendente do(a) [SR DE DESTINO — SE FOR O CASO]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — DESTINO]' }
    ]
  },
  mandado: {
    titulo: '🏛️ Modelo — Mandado de Prisão de Comarca Diversa',
    paragrafos: [
      'Encaminho para análise pedido de transferência do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], para o(a) [UNIDADE PRISIONAL DE DESTINO], em razão do cumprimento de Mandado de Prisão expedido pelo(a) [JUÍZO EXPEDIDOR — Ex.: Vara Regional de Execuções Penais da Comarca de XXXXX / 2ª Vara Criminal da Comarca de XXX].',
      'Considerando que o(a) referido(a) custodiado(a) foi preso(a) em comarca diversa daquela que expediu a ordem de prisão, bem como que o(a) [UNIDADE PRISIONAL DE DESTINO] é a unidade responsável pela circunscrição da autoridade judiciária expedidora, a transferência mostra-se adequada, em conformidade com as diretrizes estabelecidas para a gestão de vagas e movimentações prisionais previstas na Resolução Conjunta Interinstitucional n. 01/2026, especialmente em seu art. 21, inciso III, bem como em cumprimento ao Art. 24 da Portaria Normativa nº 2.189/2025 do Departamento de Polícia Penal.',
      'Informo, por fim, que foram realizados contatos prévios com as autoridades pertinentes, quais sejam, o(a) Diretor(a) da Unidade Prisional de destino e o(s) respectivo(s) Superintendente(s) Regional(is), que anuem ao presente expediente.',
      'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade da transferência administrativa.'
    ],
    assinaturas: [
      { cargo: 'Diretor(a) do(a) [UNIDADE DE ORIGEM]', nome: '[NOME DO DIRETOR DA UNIDADE DE ORIGEM]' },
      { cargo: 'Diretor(a) do(a) [UNIDADE DE DESTINO]', nome: '[NOME DO DIRETOR DA UNIDADE DE DESTINO]' },
      { cargo: 'Superintendente do(a) [SR DE ORIGEM]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — ORIGEM]' },
      { cargo: 'Superintendente do(a) [SR DE DESTINO — SE FOR O CASO]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — DESTINO]' }
    ]
  },
  pernoite: {
    titulo: '🌙 Modelo — Pernoite',
    paragrafos: [
      'Encaminho para análise pedido de PERNOITE do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM], no estabelecimento penal [UNIDADE PRISIONAL DE DESTINO], em razão de [FUNDAMENTAR A RAZÃO].',
      'Informo, por fim, que fora realizado contato prévio com a gestão da unidade de destino, que subscreve também o presente expediente, bem como com o(s) respectivo(s) Superintendente(s) Regional(is).',
      'Diante do exposto, solicita-se a análise e deliberação da Central de Regulação de Vagas quanto à viabilidade do pleito administrativo.'
    ],
    assinaturas: [
      { cargo: 'Diretor(a) do(a) [UNIDADE DE ORIGEM]', nome: '[NOME DO DIRETOR DA UNIDADE DE ORIGEM]' },
      { cargo: 'Diretor(a) do(a) [UNIDADE DE DESTINO]', nome: '[NOME DO DIRETOR DA UNIDADE DE DESTINO]' },
      { cargo: 'Superintendente do(a) [SR DE ORIGEM]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — ORIGEM]' },
      { cargo: 'Superintendente do(a) [SR DE DESTINO — SE FOR O CASO]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — DESTINO]' }
    ]
  },
  umax: {
    titulo: '🔒 Modelo — Inclusão na Unidade de Segurança Máxima (após RDD deferido)',
    paragrafos: [
      'Encaminho para análise e deliberação dessa Comissão Deliberativa para inclusão de presos na Unidade de Segurança Máxima do Estado e Central de Regulação de Vagas quanto à inclusão do(a) reeducando(a) [NOME COMPLETO], IPEN Nº [NÚMERO], atualmente custodiado(a) no(a) [UNIDADE PRISIONAL DE ORIGEM].',
      'A presente solicitação fundamenta-se nos documentos e informações que seguem anexos, os quais demonstram a necessidade da medida, especialmente diante das circunstâncias que envolvem o referido custodiado e os riscos à ordem, à disciplina e à segurança do estabelecimento prisional.',
      'Para subsidiar a análise dessa Comissão e CRV, encaminham-se os seguintes documentos: (i) Ofício de solicitação de inclusão em Regime Disciplinar Diferenciado (RDD) encaminhado ao r. Juízo competente; (ii) Decisão judicial que determina a inclusão do apenado em RDD; (iii) Boletim de Ocorrência, PAD, Relatórios e/ou demais informações pertinentes à avaliação da medida.',
      'Para subsidiar a análise, informo a devida atualização no sistema i-PEN do Boletim Penal Informativo, assinado pelo Coordenador de Execução Penal (ou pelo Diretor da Unidade Prisional), bem como anexo o Relatório de Saúde, assinado pelo Responsável Técnico (Médico, Enfermeiro, Técnico de Enfermagem, etc.), pelo Coordenador de Saúde, ou pelo Diretor.',
      'Uma vez efetivada a remoção, caso aprovada, o r. Juízo competente será devidamente comunicado no prazo legal de até 24 horas.',
      'Diante do exposto, solicita-se a urgente apreciação do presente pedido, com vistas à deliberação acerca da inclusão do apenado na Unidade de Segurança Máxima do Estado.'
    ],
    assinaturas: [
      { cargo: 'Diretor(a) do(a) [UNIDADE DE ORIGEM]', nome: '[NOME DO DIRETOR DA UNIDADE DE ORIGEM]' },
      { cargo: 'Superintendente do(a) [SR DE ORIGEM]', nome: '[NOME DO SUPERINTENDENTE REGIONAL — ORIGEM]' }
    ],
    destinatarioExtra: true
  },
  comunicacao: {
    titulo: '🏛️ Modelo — Comunicação de Transferência ao Juízo de Execução',
    paragrafos: [
      'Comunicamos que o(a) custodiado(a) [NOME COMPLETO], IPEN nº [NÚMERO], foi transferido(a) para [NOME DA UNIDADE DE DESTINO] — [CIDADE]/SC, em [DATA], às [HORA]h, em razão de [MOTIVO: segurança/emergência / adequação de capacidade / mandado de comarca diversa].',
      'A transferência foi autorizada pela Central de Regulação de Vagas — CRV/DPP/SEJURI, mediante despacho nº [Nº DO DESPACHO], de [DATA].'
    ],
    assinaturas: [
      { cargo: 'Diretor(a) do(a) [UNIDADE DE ORIGEM]', nome: '[NOME DO DIRETOR(A)]' }
    ],
    saudacaoInicial: 'Senhor(a) Juiz(a),',
    destinatarioJuizo: true
  }
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
    b.style.background = '';
    b.style.color = '';
    b.style.borderColor = '';
  });
  const tabBtn = document.getElementById('tab-' + id);
  if (tabBtn) {
    tabBtn.style.background = 'var(--azul-2)';
    tabBtn.style.color = '#fff';
    tabBtn.style.borderColor = 'var(--azul-2)';
  }

  // Saudação padrão
  const sel = document.getElementById('ofc-saudacao');
  if (m.saudacaoInicial === 'Senhor(a) Juiz(a),') {
    sel.value = 'Senhor(a) Juiz(a),';
  } else {
    sel.value = 'Senhor(a) Coordenador(a),';
  }

  // Parágrafos
  const cont = document.getElementById('ofc-paragrafos');
  cont.innerHTML = m.paragrafos.map(p =>
    '<div class="oficio-paragrafo"><textarea class="oficio-paragrafo-area" rows="' +
    Math.max(2, Math.ceil(p.length / 90)) + '">' + p + '</textarea></div>'
  ).join('');

  // Assinaturas — usa dados reais das unidades selecionadas se disponíveis
  const assEl = document.getElementById('ofc-assinaturas');
  const assigs = construirAssinaturas(m, unidadeOrigemSel, unidadeDestinoSel);
  assEl.innerHTML = assigs.map(a =>
    '<div class="oficio-assinatura-bloco">' +
    '<div class="ass-digital">(documento assinado digitalmente)</div>' +
    '<div class="ass-nome"><input class="campo-edit" value="' + a.nome + '" style="font-weight:bold;width:340px;max-width:100%;"/></div>' +
    '<div class="ass-cargo"><input class="campo-edit" value="' + a.cargo + '" style="width:340px;max-width:100%;"/></div>' +
    '</div>'
  ).join('');

  // Destinatário
  const destEl = document.getElementById('ofc-destinatario');
  if (m.destinatarioJuizo) {
    destEl.innerHTML =
      '<p>A</p>' +
      '<p><strong>[VARA DE EXECUÇÕES PENAIS — COMARCA DE [COMARCA]]</strong></p>' +
      '<p>[CIDADE]/SC</p>';
  } else if (m.destinatarioExtra) {
    destEl.innerHTML =
      '<p>À</p>' +
      '<p><strong>COMISSÃO DELIBERATIVA — UNIDADE DE SEGURANÇA MÁXIMA</strong></p>' +
      '<p>Departamento de Polícia Penal — DPP</p>' +
      '<p>Secretaria de Estado de Justiça e Reintegração Social — SEJURI</p>' +
      '<p>Florianópolis/SC</p>' +
      '<br>' +
      '<p>À</p>' +
      '<p><strong>CENTRAL DE REGULAÇÃO DE VAGAS — CRV</strong></p>' +
      '<p>Departamento de Polícia Penal — DPP</p>' +
      '<p>Secretaria de Estado de Justiça e Reintegração Social — SEJURI</p>' +
      '<p>Florianópolis/SC</p>';
  } else {
    destEl.innerHTML =
      '<p>À</p>' +
      '<p><strong>CENTRAL DE REGULAÇÃO DE VAGAS — CRV</strong></p>' +
      '<p>Departamento de Polícia Penal — DPP</p>' +
      '<p>Secretaria de Estado de Justiça e Reintegração Social — SEJURI</p>' +
      '<p>Florianópolis/SC</p>';
  }
}

// Saudação personalizada
function atualizarSaudacao() {
  const sel    = document.getElementById('ofc-saudacao');
  const custom = document.getElementById('ofc-saudacao-custom');
  custom.style.display = sel.value === 'outro' ? 'inline-block' : 'none';
}

// ================================================
// EXPORTAÇÃO — Texto puro do ofício
// ================================================
function coletarTextoOficio() {
  const cidade   = document.getElementById('ofc-cidade-txt')?.textContent || '';
  const data     = document.getElementById('ofc-data-txt')?.textContent || '';
  const saudSel  = document.getElementById('ofc-saudacao');
  const saudCustom = document.getElementById('ofc-saudacao-custom');
  const saudacao = saudSel?.value === 'outro'
    ? (saudCustom?.value || '')
    : (saudSel?.value || 'Senhor(a) Coordenador(a),');
  const despedida = document.getElementById('ofc-despedida')?.value || 'Atenciosamente,';

  const paras = [...document.querySelectorAll('#ofc-paragrafos textarea')]
    .map(t => t.value.trim()).filter(Boolean);

  const asss = [...document.querySelectorAll('#ofc-assinaturas .oficio-assinatura-bloco')].map(b => {
    const nome  = b.querySelector('.ass-nome input')?.value || '';
    const cargo = b.querySelector('.ass-cargo input')?.value || '';
    return { nome, cargo };
  });

  const destHTML = document.getElementById('ofc-destinatario')?.innerText || '';

  return { cidade, data, saudacao, paras, despedida, asss, destHTML };
}

// ------------------------------------------------
// COPIAR TEXTO
// ------------------------------------------------
function copiarOficio() {
  const { cidade, data, saudacao, paras, despedida, asss, destHTML } = coletarTextoOficio();
  const indent = '   '; // ~1,5cm em texto
  const bigGap = '\n\n\n\n';
  const midGap = '\n\n\n\n\n';
  const assGap = '\n\n';

  let txt = cidade + ', ' + data + '.\n';
  txt += bigGap;
  txt += indent + saudacao + '\n';
  txt += bigGap;
  paras.forEach((p, i) => { txt += indent + p + '\n'; if (i < paras.length - 1) txt += '\n'; });
  txt += bigGap;
  const rightPad = '                                '; // ~8cm
  txt += rightPad + despedida + '\n';
  txt += midGap;
  asss.forEach(a => {
    txt += rightPad + '(documento assinado digitalmente)\n';
    txt += rightPad + a.nome + '\n';
    txt += rightPad + a.cargo + '\n';
    txt += assGap;
  });
  txt += bigGap;
  txt += destHTML;

  navigator.clipboard.writeText(txt).then(() => {
    showToast('✅ Ofício copiado!');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = txt; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast('✅ Ofício copiado!');
  });
}

// ------------------------------------------------
// GERAR PDF
// ------------------------------------------------
function gerarPDF() {
  const { cidade, data, saudacao, paras, despedida, asss } = coletarTextoOficio();
  const m = modelosTexto[modeloAtual];
  const destEl = document.getElementById('ofc-destinatario');

  const html = `
<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"/>
<title>Ofício CRV</title>
<style>
  @page { size: A4; margin: 3cm 2.5cm 2.5cm 3cm; }
  body { font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #000; }
  .data { text-align: right; margin-bottom: 4em; }
  .saudacao { text-indent: 1.5cm; margin-bottom: 4em; }
  .paragrafo { text-indent: 1.5cm; text-align: justify; margin-bottom: 1em; }
  .despedida { margin-top: 4em; margin-left: 8cm; }
  .assinaturas { margin-top: 5em; margin-left: 8cm; }
  .ass-bloco { margin-bottom: 2em; }
  .ass-digital { font-size: 9pt; color: #555; font-style: italic; }
  .ass-nome { font-weight: bold; }
  .destinatario { margin-top: 4em; }
  .dest-crv { font-weight: bold; text-transform: uppercase; }
</style></head><body>
<div class="data">${cidade}, ${data}.</div>
<div class="saudacao">${saudacao}</div>
${paras.map(p => `<div class="paragrafo">${p}</div>`).join('')}
<div class="despedida">${despedida}</div>
<div class="assinaturas">
${asss.map(a => `<div class="ass-bloco"><div class="ass-digital">(documento assinado digitalmente)</div><div class="ass-nome">${a.nome}</div><div>${a.cargo}</div></div>`).join('')}
</div>
<div class="destinatario">${destEl ? destEl.innerHTML : ''}</div>
</body></html>`;

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  setTimeout(() => { w.print(); }, 600);
}

// ------------------------------------------------
// GERAR WORD (.docx via HTML blob)
// ------------------------------------------------
function gerarWord() {
  const { cidade, data, saudacao, paras, despedida, asss } = coletarTextoOficio();
  const destEl = document.getElementById('ofc-destinatario');

  const msoDoc = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="UTF-8"/>
<xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml>
<style>
  @page { mso-page-orientation: portrait; margin: 3cm 2.5cm 2.5cm 3cm; }
  body { font-family: Arial; font-size: 11pt; line-height: 1.5; }
  p { margin: 0; }
  .data { text-align: right; margin-bottom: 0; }
  .gap4 { margin-bottom: 4em; }
  .gap5 { margin-bottom: 5em; }
  .gap2 { margin-bottom: 2em; }
  .indent15 { margin-left: 1.5cm; }
  .indent8  { margin-left: 8cm; }
  .justify  { text-align: justify; }
  .bold     { font-weight: bold; }
  .italic   { font-style: italic; font-size: 9pt; color: #555; }
  .upper    { text-transform: uppercase; }
</style>
</head><body>
<p class="data">${cidade}, ${data}.</p>
<p class="gap4">&nbsp;</p>
<p class="indent15 gap4">${saudacao}</p>
${paras.map(p => `<p class="indent15 justify gap1">${p}</p><p>&nbsp;</p>`).join('')}
<p class="indent8 gap4">${despedida}</p>
<p class="gap5">&nbsp;</p>
${asss.map(a => `<p class="indent8 italic">(documento assinado digitalmente)</p><p class="indent8 bold">${a.nome}</p><p class="indent8">${a.cargo}</p><p class="gap2">&nbsp;</p>`).join('')}
<p class="gap4">&nbsp;</p>
${destEl ? destEl.innerHTML.replace(/<strong>/g,'<span class="bold upper">').replace(/<\/strong>/g,'</span>') : ''}
</body></html>`;

  const blob = new Blob(['\ufeff', msoDoc], { type: 'application/msword' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'oficio-crv.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📘 Download Word iniciado!');
}

// ================================================
// TOAST de notificação
// ================================================
function showToast(msg) {
  let t = document.getElementById('crvToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'crvToast';
    t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--azul-2);color:#fff;padding:.6rem 1.5rem;border-radius:100px;font-size:.85rem;font-weight:600;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.3);transition:opacity .3s;pointer-events:none;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}


// ================================================
// FLUXO OPERACIONAL — Toggle passo
// ================================================
function toggleFlowStep(body) {
  body.classList.toggle('aberto');
  const btn = body.querySelector('.flow-toggle-btn');
  if (btn) btn.textContent = body.classList.contains('aberto')
    ? '▼ Ocultar detalhes'
    : '▶ Ver detalhes';
}

// ================================================
// MODAL DE OFÍCIO
// ================================================
function abrirModalOficio(modeloId) {
  const modal = document.getElementById('modalOficio');
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  popularSelectsUnidades();
  // Data automática
  const hoje = new Date();
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const dataFmt = `${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`;
  const dataEl = document.getElementById('ofc-data-txt');
  if (dataEl) { dataEl.textContent = dataFmt; dataEl.contentEditable = 'true'; }
  // Torna cidade editável
  const cidEl = document.getElementById('ofc-cidade-txt');
  if (cidEl) cidEl.contentEditable = 'true';
  // Reset seleções
  unidadeOrigemSel = null; unidadeDestinoSel = null;
  const sOri = document.getElementById('sel-origem');
  const sDes = document.getElementById('sel-destino');
  if (sOri) sOri.value = '';
  if (sDes) sDes.value = '';
  atualizarInfoUnidade('origem', null);
  atualizarInfoUnidade('destino', null);
  selecionarModelo(modeloId);
}

function fecharModalOficio() {
  const modal = document.getElementById('modalOficio');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function fecharModalOficioFora(event) {
  if (event.target === document.getElementById('modalOficio')) {
    fecharModalOficio();
  }
}

// Fechar modal com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fecharModalOficio();
});

// ================================================
// INICIALIZAÇÃO
// ================================================
document.addEventListener('DOMContentLoaded', () => {
  // Restaurar dark mode salvo
  if (localStorage.getItem('darkMode') === '1') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('btnDarkMode');
    if (btn) btn.innerHTML = '☀️ Modo Claro';
  }

  // Inicializa modelo padrão
  selecionarModelo('emergencial');

  // Abre página correta pelo hash
  const hash = window.location.hash.replace('#', '').trim();
  const validos = Object.keys(nomesPagina);
  if (hash && validos.includes(hash)) {
    navegarPara(hash);
  } else {
    navegarPara('inicio');
  }

  // Botão voltar/avançar do navegador
  window.addEventListener('popstate', () => {
    const h = window.location.hash.replace('#', '').trim();
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

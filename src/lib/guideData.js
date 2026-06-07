// ============================================================
// GUIA DE DOSES PEDIÁTRICO — Estrutura rica por medicamento
// ============================================================
import { PENICILINAS_CATEGORY } from './guideDataPenicilinas.js';
import { CARBAPENEMOS_CATEGORY } from './guideDataCarbapenemos.js';
import { QUINOLONAS_CATEGORY } from './guideDataQuinolonas.js';
import { SULFONAMIDAS_CATEGORY, AMINOGLICOSIDEOS_CATEGORY } from './guideDataSulfonamidas.js';
import { MACROLIDEOS_CATEGORY } from './guideDataMacrolideos.js';
import { GLICOPEPTIDEOS_CATEGORY } from './guideDataGlicopeptideos.js';
import { OUTROS_ANTIBACTERIANOS_CATEGORY } from './guideDataOutrosAntibacterianos.js';
import { outrosBacterianos } from './guideDataOutrosBacterianos.js';
import { antimicobacterianos } from './guideDataAntimicobacterianos.js';
import { antifungicosAzolicos } from './guideDataAntifungicosAzolicos.js';
import { antifungicosPolienicos } from './guideDataAntifungicosPolienicos.js';
import { equinocandinas } from './guideDataEquinocandinas.js';
import { outrosAntifungicos } from './guideDataOutrosAntifungicos.js';
import { antiviraisHerpes, antiviraisInfluenza } from './guideDataAntivirais.js';
import { antiHepatite } from './guideDataAntiHepatite.js';
import { antirretroviraisITRN, antirretroviraisITRNN, antirretroviraisIP, antirretroviraisOutros } from './guideDataAntirretrovirais.js';
import { antirretroviraisAssociacoes } from './guideDataAntirretroviraisAssociacoes.js';
import { antimalaricos } from './guideDataAntimalaricos.js';
import { antiparasitarios } from './guideDataAntiparasitarios.js';
import { opioides } from './guideDataOpioides.js';
import { analgesicoEnxaqueca, ainesDrugs } from './guideDataEnxaquecaAINEs.js';
import { corticosteroides } from './guideDataCorticosteroides.js';
import { antihistaminicos, angioedemaHereditario, antihistDescongestionantes } from './guideDataAntihistaminicos.js';
import { antitussigenos, mucoliticos, colutoriosTopicos } from './guideDataAntitussigenosMucoliticos.js';
import { antiespasmódicos, antieméticos } from './guideDataAntiespasmAdicos.js';
import { antiacidos, antagonistasH2, ibp } from './guideDataGastro.js';
import { antiflatulentes, laxantesFibras, laxantesCatarticos, antidiarreicos } from './guideDataGastro2.js';
import { probioticos, proctologicos, outrasGastro } from './guideDataProbioticos.js';
import { vitaminas, minerais } from './guideDataVitaminas.js';
import { reidratacaoOral, estimulantesApetite, auxiliaresObesidade, antianemicos, imunoestimulantes } from './guideDataAntianemicosImuno.js';
import { emergenciaAnticolinergicos, emergenciaAlcalinizantes, emergenciaVasoativos } from './guideDataEmergencia.js';
import { antiHemorragicos } from './guideDataAntiHemorragicos.js';
import { expansoresColoides } from './guideDataExpansoresColoides.js';
import { hipotensao } from './guideDataHipotensao.js';
import { antagonistasAntidotos } from './guideDataAntagonistasAntidotos.js';
import { iecaDrugs } from './guideDataIECA.js';
import { anestesicosSistemicos } from './guideDataAnestesicosSistemicos.js';
import { anestesicosLocais, curares } from './guideDataAnestesicosLocaisCurares.js';
import { antiHipertensivosOutros, antiHipertensivosVasodilatadores, antiHipertensivosAlfaBloqueadores, antiHipertensivosAlfaAgonistas, antiHipertensivosBetaBloqueadores } from './guideDataAntiHipertensivos.js';
import { diureticosTiazidicos, diureticosAlca, diureticosPoupadores, outrosDiureticos } from './guideDataDiureticos.js';
import { antagonistasCalcio } from './guideDataAntagonistasCalcio.js';
import { ADDITIONAL_CATEGORIES } from './guideCategoriesAdditional.js';

export const GUIDE_CATEGORIES = [
  {
    id: 'cefalosporinas',
    label: 'Cefalosporinas',
    color: 'red-500',
    icon: '🦠',
    drugs: [
      // ── 1ª Geração ──
      {
        id: 'cefadroxila',
        name: 'Cefadroxila',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 1ª geração, mais bem absorvida por via oral e com meia-vida maior, permitindo uso em 2 doses ao dia.',
        brands: [
          'Cedroxil / Cefanaxil — cáps. 500 mg',
          'Cefadroxila — cáps. 500 mg; susp. oral 250 mg/5 mL; susp. oral 500 mg/5 mL',
        ],
        presentations: [
          { label: 'Cápsula 500 mg' },
          { label: 'Suspensão oral 250 mg/5 mL' },
          { label: 'Suspensão oral 500 mg/5 mL' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Dose usual', value: '25–50 mg/kg/dia ÷ 2 doses. Máx: 2 g/dia. Susp: ≈ 0,5–1 mL/kg/dia ÷ 2 doses' },
              { label: 'Impetigo / faringite / amigdalite', value: '30 mg/kg/dia ÷ 1–2 doses por 10 dias. Máx: 1000 mg/dia' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '250–500 mg/dose 2×/dia' },
              { label: 'Infecções graves', value: '1 g/dose 2–3×/dia. Máx: 4 g/dia' },
              { label: 'Faringites', value: '30 mg/kg/dia ÷ 1–2 doses por 10 dias. Máx: 1 g/dia' },
              { label: 'Infecções de pele / amigdalite / ITU', value: '1 g/dia ÷ 1–2 doses (ITU por 10 dias)' },
              { label: 'Após reconstituição', value: 'Ambiente por até 10 dias ou geladeira por até 14 dias' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'ClCr 25–50 mL/min', value: '500 mg/dose 2×/dia' },
          { label: 'ClCr 10–25 mL/min', value: '500 mg/dia' },
          { label: 'ClCr < 10 mL/min', value: '500 mg a cada 36 h' },
        ],
        sensitivity: {
          susceptible: [
            'Bacteroides, Estafilococos, Estreptococos, Moraxella catarrhalis',
            'Cepas comunitárias de: Bacilo diftérico, E. coli, H. influenzae, Klebsiella, Proteus mirabilis, Salmonella, Shigella',
          ],
          resistant: [
            'Acinetobacter, Enterobacter, Enterococcus, Morganella morganii, Proteus vulgaris, Pseudomonas',
          ],
          warning: '',
        },
        sideEffects: [
          'Alergia, hipersensibilidade, urticária, prurido',
          'Náusea, vômito, anorexia, diarreia, dispepsia, colite pseudomembranosa',
          'Tontura, cefaleia, febre, dor no local da injeção IM, flebite, tromboflebite',
          'Risco de superinfecção por Candida, Pseudomonas e enterococos',
        ],
        contraindications: [],
      },

      {
        id: 'cefalotina',
        name: 'Cefalotina',
        category: 'cefalosporinas',
        observations: 'Carboximetil penicilina. Cefalosporina de 1ª geração com pouca penetração intratecal — não eficaz em meningites.',
        brands: [
          'Keflin / Kefalomax — Fr. amp. 1.000 mg',
          'Cefalotil / Cefalotina sódica — Fr. amp. 1.000 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 1.000 mg' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Dose usual', value: '80–160 mg/kg/dia ÷ 4–6 doses' },
              { label: 'RN < 1,2 kg / < 28 dias', value: '20 mg/kg/dose × 2' },
              { label: 'RN 1,2–2 kg / ≤ 7 dias', value: '20 mg/kg/dose × 2' },
              { label: 'RN 1,2–2 kg / > 7 dias', value: '20 mg/kg/dose × 3' },
              { label: 'RN > 2 kg / ≤ 7 dias', value: '20 mg/kg/dose × 3' },
              { label: 'RN > 2 kg / > 7 dias', value: '20 mg/kg/dose × 4' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'EV dose usual', value: '0,5–1 g/dose 4×/dia' },
              { label: 'IM dose usual', value: '0,5–1 g/dose 4–6×/dia' },
              { label: 'Infecção grave', value: '2 g/dose 4×/dia. Máx: 12 g/dia' },
            ],
          },
        ],
        preparation: 'EV: diluir para 100 mg/mL para evitar flebite; infundir em 5 min ou mais lento. Injeção IM é dolorosa.',
        renalAdjustment: [
          { label: 'ClCr 25–50 mL/min', value: 'Até 1,5 g/dose 4×/dia' },
          { label: 'ClCr 10–25 mL/min', value: 'Até 1 g/dose 4×/dia' },
          { label: 'ClCr 2–10 mL/min', value: 'Até 0,5 g/dose 4×/dia' },
          { label: 'ClCr < 2 mL/min', value: 'Até 0,5 g/dose 3×/dia' },
        ],
        sensitivity: {
          susceptible: [
            'Estafilococos, Estreptococos',
            'Cepas comunitárias de: E. coli, H. influenzae, Klebsiella, Proteus mirabilis, Salmonella, Shigella',
          ],
          resistant: [
            'Acinetobacter, Bacteroides fragilis, Enterobacter, Enterococcus, Listeria',
            'N. gonorrhoeae, Neisseria meningitidis, Morganella morganii, Pneumococcus resistente à penicilina',
            'Proteus vulgaris, Providencia rettgeri, Pseudomonas aeruginosa, Serratia',
          ],
          warning: '',
        },
        sideEffects: [
          'Anemia hemolítica, neutropenia, trombocitopenia, eosinofilia, anafilaxia, convulsões',
          'Pode piorar função renal em urêmicos',
          'Pode aumentar nefrotoxicidade de aminoglicosídeos',
          'Contém sódio; falso positivo para substâncias redutoras na urina',
        ],
        contraindications: [],
      },

      {
        id: 'cefazolina',
        name: 'Cefazolina',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 1ª geração com melhor biodisponibilidade e meia-vida mais longa. Mais bem tolerada IM que a cefalotina. Não eficaz em meningites.',
        brands: [
          'Cezolin / Fazolon — Fr. amp. 1.000 mg',
          'Cefazolina sódica — Fr. amp. 1.000 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 1.000 mg' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Dose usual', value: '25–50 mg/kg/dia ÷ 3 doses. Máx: 1 g/dose' },
              { label: 'Infecções graves', value: '100–150 mg/kg/dia ÷ 3 doses. Máx: 6 g/dia e 2 g/dose' },
              { label: 'Neonatos ≤ 2 kg', value: '20–25 mg/kg/dose' },
              { label: 'Neonatos > 2 kg', value: '20–50 mg/kg/dose (a cada 12 h se < 7 dias; a cada 8 h se > 7 dias)' },
              { label: 'Endocardite estafilocócica', value: 'EV: 100 mg/kg/dia ÷ 3 doses por 4–6 semanas. Máx: 12 g/dia' },
              { label: 'Profilaxia endocardite', value: '50 mg/kg 30–60 min antes. Máx: 1 g/dose' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Infecções moderadas', value: '0,5–1 g/dose 3–4×/dia' },
              { label: 'Infecções graves / intra-abdominais / osteomielite', value: '1–2 g/dose 3×/dia. Máx: 12 g/dia' },
              { label: 'Infecções leves Gram+', value: '0,25–0,5 g/dose 3×/dia' },
              { label: 'Endocardite estafilocócica', value: 'EV: 2 g/dose 3×/dia por 6 semanas' },
              { label: 'Profilaxia cirúrgica', value: 'EV: 2 g/dose 1 h antes; repetir a cada 2–4 h; depois 0,5–1 g/dose 3–4×/dia por 24 h' },
              { label: 'Pneumonia pneumocócica', value: '500 mg/dose 2×/dia' },
            ],
          },
        ],
        preparation: 'EV: diluir para 50–100 mg/mL em SF ou AD; infundir em 3–5 min. IM: diluir a 330 mg/mL (dolorosa).',
        renalAdjustment: [
          { label: 'ClCr 11–34 mL/min', value: '50% da dose a cada 12 h' },
          { label: 'ClCr ≤ 10 mL/min', value: '50% da dose a cada 18–24 h' },
          { label: 'Hemodiálise', value: 'Remove 20–50%' },
        ],
        sensitivity: {
          susceptible: [
            'Estafilococos sensíveis à meticilina, Estreptococos',
            'Algumas cepas comunitárias de: Enterobacter aerogenes, E. coli, H. influenzae, Klebsiella, Proteus mirabilis, Salmonella, Shigella',
          ],
          resistant: [
            'Acinetobacter, Enterobacter cloacae, Morganella morganii, Proteus vulgaris, Providencia rettgeri, Pseudomonas, Serratia',
          ],
          warning: 'Não penetra bem no SNC; não indicada em meningites.',
        },
        sideEffects: [
          'Coombs direto positivo, prolongamento do TP, aumento transitório de transaminases',
        ],
        contraindications: [],
      },

      {
        id: 'cefalexina',
        name: 'Cefalexina',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 1ª geração bem absorvida por via oral, com meia-vida mais curta que o cefadroxil. Uso principal em piodermites e infecções de partes moles. Não deve ser usada em meningites.',
        brands: [
          'Keflex — drágeas 500 e 1000 mg; gotas 100 mg/mL; susp. 250 e 500 mg/5 mL',
          'Cefalexina — cáps./comp. 500 mg; comp. revestido 1000 mg; susp. 250 e 500 mg/5 mL',
        ],
        presentations: [
          { label: 'Cápsula / comprimido 500 mg' },
          { label: 'Comprimido revestido 1.000 mg' },
          { label: 'Gotas 100 mg/mL' },
          { label: 'Suspensão oral 250 mg/5 mL e 500 mg/5 mL' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Faringite / amigdalite', value: '25–50 mg/kg/dia ÷ 2 doses por 10 dias. Máx: 500 mg/dose' },
              { label: 'Otite / infecções graves', value: '75–100 mg/kg/dia ÷ 4 doses (evitar empiricamente)' },
              { label: 'Piodermites', value: '25–50 mg/kg/dia ÷ 3–4 doses por 5–10 dias. Máx: 500 mg/dose' },
              { label: 'Celulite / erisipela', value: '25–50 mg/kg/dia ÷ 2–4 doses por 10 dias. Máx: 500 mg/dose' },
              { label: 'Infecção urinária (2 m – 2 anos)', value: '50–100 mg/kg/dia ÷ 4 doses por 7–14 dias' },
              { label: 'Infecções graves / osteoarticulares', value: '100 mg/kg/dia ÷ 3–4 doses. Máx: 4 g/dia' },
              { label: 'Profilaxia endocardite', value: '50 mg/kg dose única 30–60 min antes. Máx: 2 g' },
              { label: 'Pneumonia comunitária (> 3 m)', value: '75–100 mg/kg/dia ÷ 3–4 doses. Máx: 4 g/dia' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '250–500 mg/dose 4×/dia' },
              { label: 'Infecções graves', value: '1000 mg/dose 4×/dia. Máx: 4 g/dia' },
              { label: 'Piodermites / sinusite / faringite', value: '250–500 mg 4×/dia por 10 dias' },
              { label: 'Mastite', value: '500 mg/dose 4×/dia por 7–14 dias (drenar se abscesso)' },
              { label: 'Profilaxia endocardite', value: '2 g dose única 30–60 min antes' },
              { label: 'Celulite / erisipela leve', value: '500 mg/dose 4×/dia por 5–10 dias' },
              { label: 'Cistite não complicada', value: '500 mg/dose 2×/dia por 5–7 dias' },
            ],
          },
        ],
        preparation: 'Suspensão: reconstituir com água filtrada ou fervida. Após reconstituição: geladeira 2–8 ºC por até 14 dias.',
        renalAdjustment: [
          { label: 'ClCr 30–60 mL/min', value: 'Máx 1 g/dia' },
          { label: 'ClCr 15–29 mL/min', value: '250 mg a cada 8–12 h' },
          { label: 'ClCr 5–14 mL/min', value: '250 mg a cada 24 h' },
          { label: 'ClCr < 4 mL/min', value: '250 mg a cada 48–60 h' },
          { label: 'Diálise', value: 'Remove 20–50%' },
        ],
        sensitivity: {
          susceptible: [
            'Gram+: Estreptococos, Estafilococo sensível à oxacilina, Pneumococo (menos eficaz que penicilina/amoxicilina)',
            'Actinomyces, Aeromonas, Bacilo diftérico, Bordetella pertussis, Leptospira, Listeria, Moraxella catarrhalis, T. pallidum',
            'Cepas comunitárias de: Enterobacter, E. coli, H. influenzae, Klebsiella pneumoniae, Neisseria, Proteus mirabilis, Salmonella, Shigella, Staphylococcus aureus, Yersinia, Vibrio',
          ],
          resistant: [
            'Estafilococos resistentes à oxacilina, Pneumococo resistente à penicilina, S. faecalis, Pseudomonas, Enterococcus, Haemophilus, Enterobacter, Proteus, Serratia, Providencia, Bacteroides, Acinetobacter',
            'Número crescente de cepas de: E. coli, Proteus mirabilis, Klebsiella',
          ],
          warning: 'Aumenta nível de metformina — risco de hipoglicemia no início e hiperglicemia na retirada. Pode dar falso positivo para leucocitúria.',
        },
        sideEffects: [
          'Cefaleia, fadiga, tontura, agitação, confusão, alucinações, encefalopatia, convulsão',
          'Náusea, vômitos, diarreia, cólicas, colite pseudomembranosa, colestase, hepatite',
          'Alergia, exantema, febre, urticária, eritema multiforme, anafilaxia',
          'Nefrite intersticial, aumento de creatinina, neutropenia, anemia hemolítica, eosinofilia',
          'Coombs falso positivo, proteinúria falso positiva, vaginite por superinfecção',
        ],
        contraindications: [],
      },

      // ── 2ª Geração ──
      {
        id: 'cefaclor',
        name: 'Cefaclor',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 2ª geração. Segunda linha em otites e sinusites. Para pneumococo com resistência moderada, cefuroxima é preferida.',
        brands: [
          'Ceclor — susp. 250 mg/5 mL e 375 mg/5 mL',
          'Ceclor BD — comp. liberação prolongada 500 mg e 750 mg',
          'Cefaclor — cáps. 500 mg; susp. 250 e 375 mg/5 mL',
        ],
        presentations: [
          { label: 'Cápsula 500 mg' },
          { label: 'Suspensão 250 mg/5 mL e 375 mg/5 mL' },
          { label: 'Comp. liberação prolongada 500 mg e 750 mg' },
        ],
        doses: [
          {
            group: 'Crianças > 1 mês',
            items: [
              { label: 'Dose usual', value: '20–40 mg/kg/dia ÷ 2–3 doses. Máx: 1 g/dia' },
              { label: 'Otite média — alternativa', value: '40 mg/kg/dia ÷ 2–3 doses por 10 dias' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '250–500 mg/dose 3×/dia ou 500 mg/dose 2×/dia (liberação prolongada). Máx: 2 g/dia' },
              { label: 'Amigdalite / faringite / piodermite / sinusite', value: '250–500 mg/dose 3×/dia por 10 dias' },
              { label: 'Bronquite / DPOC infectada', value: '500 mg/dose 2×/dia (LP) ou 3×/dia (cáps.) por 7 dias' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'ClCr < 10 mL/min', value: '50% da dose' },
          { label: 'Diálise', value: 'Remove 20–50%' },
        ],
        sensitivity: {
          susceptible: [
            'Gram+: Estreptococos, Pneumococos, S. aureus sensível à oxacilina, Streptococcus grupo B',
            'Maioria das cepas de: H. influenzae, M. catarrhalis',
            'Gram−: E. coli, Proteus mirabilis, Klebsiella, Enterobacter, Salmonella, Shigella, Yersinia, Citrobacter, Providencia, Morganella, Aeromonas, Vibrio',
          ],
          resistant: [
            'Estafilococos resistentes à oxacilina, E. faecalis, algumas cepas de pneumococo, Pseudomonas, Acinetobacter, Enterococcus, Serratia, B. fragilis',
            'Número crescente de: E. coli, Klebsiella ESBL, Proteus mirabilis',
          ],
          warning: '',
        },
        sideEffects: [
          'Alergia, urticária, exantema, prurido, eosinofilia, colite pseudomembranosa',
          'Diarreia, náusea, vômitos, neutropenia',
          'Reação do tipo doença do soro com artralgia (especialmente com múltiplas exposições)',
          'Falso positivo de glicose na urina; Coombs positivo',
        ],
        contraindications: [],
      },

      {
        id: 'cefuroxima',
        name: 'Cefuroxima',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 2ª geração com melhor biodisponibilidade e meia-vida mais longa. Mais bem tolerada IM que a cefalotina.',
        brands: [
          'Zinnat (axetilcefuroxima) — comp. 250 e 500 mg; sachê 250 mg; susp. 250 mg/5 mL',
          'Zinacef / Monocef (cefuroxima sódica) — Fr. amp. 750 mg EV e IM',
          'Cefuroxima — comp. 250 e 500 mg; susp. 250 mg/5 mL; Fr. amp. 750 mg',
        ],
        presentations: [
          { label: 'Comprimido revestido 250 e 500 mg' },
          { label: 'Suspensão oral 250 mg/5 mL' },
          { label: 'Fr. amp. 750 mg (EV/IM)' },
        ],
        doses: [
          {
            group: 'Neonatos (EV/IM)',
            items: [
              { label: '≤ 7 dias / > 1 kg até 14 dias', value: '50 mg/kg/dose 2×/dia' },
              { label: '8–28 dias', value: '50 mg/kg/dose 2–3×/dia' },
            ],
          },
          {
            group: 'Lactentes e Crianças',
            items: [
              { label: 'Otite / sinusite / piodermite — oral', value: '30 mg/kg/dia ÷ 2 doses por 10 dias. Máx: 1 g/dia' },
              { label: 'Faringite / amigdalite — oral', value: '20 mg/kg/dia ÷ 2 doses por 10 dias' },
              { label: 'Pneumonia — EV/IM', value: '35–50 mg/kg/dose 3×/dia. Máx: 2 g/dose' },
              { label: 'Ossos e articulações — EV/IM', value: '50 mg/kg/dose 3×/dia. Máx: 1,5 g/dose' },
              { label: 'Meningite — EV/IM', value: '200–240 mg/kg/dia ÷ 3–4 doses' },
              { label: 'Profilaxia cirúrgica (> 1 ano)', value: '50 mg/kg 1 h antes; repetir a cada 4 h se necessário' },
              { label: 'Infecção urinária — oral', value: '20–30 mg/kg/dose 2×/dia' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Infecções graves — EV', value: '1500 mg/dose 3–4×/dia' },
              { label: 'Sinusite / bronquite / amigdalite — EV', value: '500–750 mg/dose 3×/dia' },
              { label: 'Oral', value: '250–500 mg/dose 2×/dia' },
              { label: 'Pneumonia — EV', value: '750–1500 mg/dose 3×/dia; oral sequencial: 500 mg/dose 2×/dia' },
              { label: 'Doença de Lyme', value: 'Oral: 1 g/dia ÷ 2 doses por 20 dias' },
              { label: 'Profilaxia cirúrgica', value: 'EV: 1,5 g/dose 1 h antes; repetir a cada 4–12 h se necessário' },
              { label: 'Infecção urinária', value: 'EV: 750 mg/dose 3×/dia; Oral: 250 mg/dose 2×/dia por 7–10 dias' },
            ],
          },
        ],
        preparation: 'Via oral: melhor tomar com alimento. EV: diluir a 100 mg/mL; infundir em 5 min. Após reconstituição: geladeira por até 10 dias.',
        renalAdjustment: [
          { label: 'ClCr 10–29 mL/min', value: '1 dose a cada 24 h' },
          { label: 'ClCr < 10 mL/min', value: '1 dose a cada 48 h' },
        ],
        sensitivity: {
          susceptible: [
            'Semelhante ao cefaclor, com maior ação contra H. influenzae e Pneumococo',
          ],
          resistant: [
            'Enterococos, E. faecalis, Bacteroides, Serratia',
            'Número crescente de: E. coli, Klebsiella ESBL, Proteus mirabilis',
          ],
          warning: 'Pode induzir produção de beta-lactamase.',
        },
        sideEffects: [
          'Vertigem, tontura, convulsão, cefaleia, náusea, vômito, diarreia, cólicas, sangramento digestivo, estomatite, colite pseudomembranosa',
          'Alergia, febre, erupção cutânea, prurido, urticária, eritema multiforme, anafilaxia, doença do soro',
          'Anemia, eosinofilia, neutropenia, leucopenia, trombocitopenia, aumento de transaminases, hepatite, colestase',
          'Dor local e flebite',
        ],
        contraindications: [],
      },

      {
        id: 'cefoxitina',
        name: 'Cefoxitina',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 2ª geração. Geralmente usada para cobertura de anaeróbios. Induz resistência bacteriana facilmente.',
        brands: [
          'Cefton / Kefox / Mefoxin — Fr. amp. 1.000 mg',
          'Cefoxitina sódica — Fr. amp. 1.000 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 1.000 mg' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Dose usual EV', value: '70–100 mg/kg/dia ÷ 3–4 doses. Máx: 4 g/dia' },
              { label: 'Infecções graves', value: '160 mg/kg/dia ÷ 4 doses. Máx: 12 g/dia' },
              { label: 'Profilaxia de peritonite', value: '30–40 mg/kg 1 h antes. Máx: 2 g/dose' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual EV', value: '1 g/dose 3–4×/dia' },
              { label: 'Infecções graves', value: '2 g/dose 3–4×/dia' },
              { label: 'Infecções complicadas', value: '2 g/dose 6×/dia. Máx: 12 g/dia' },
              { label: 'Profilaxia cirurgia abdominal', value: '2 g/dose 2×/dia por até 24 h (iniciar 1 h antes)' },
              { label: 'DIP (doença inflamatória pélvica)', value: 'EV: 2 g/dose 4×/dia + doxiciclina por 24–28 h; seguir com doxiciclina por 14 dias' },
            ],
          },
        ],
        preparation: 'Diluir a 100 mg/mL em ABD; infundir em 5 min.',
        renalAdjustment: [
          { label: 'ClCr 30–50 mL/min', value: 'A cada 8–12 h' },
          { label: 'ClCr 10–29 mL/min', value: 'A cada 12–24 h' },
          { label: 'ClCr < 10 mL/min', value: 'Máx 1 g/dia a cada 12–24 h' },
          { label: 'Hemodiálise', value: 'Remove 20–50%' },
        ],
        sensitivity: {
          susceptible: [
            'Cefalosporina mais ativa contra Bacteroides fragilis e anaeróbios',
            'E. coli, Klebsiella, Enterococcus faecalis sensível à vancomicina, Bacteroides, Proteus, Serratia, Salmonella, Shigella',
          ],
          resistant: [
            'Pseudomonas, Enterococcus, Acinetobacter, alguns Enterobacter',
          ],
          warning: '',
        },
        sideEffects: [
          'Cefaleia, flebite, eosinofilia, disfunção renal, náusea, vômito, diarreia, colite pseudomembranosa',
          'Aumento de transaminases, trombocitopenia, leucopenia, anemia, mielotoxicidade',
          'Tempo de sangramento aumentado, febre, prurido, vaginite',
          'Aplicação IM muito dolorosa',
        ],
        contraindications: [],
      },

      // ── 3ª Geração ──
      {
        id: 'cefotaxima',
        name: 'Cefotaxima',
        suffix: 'AM',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de terceira geração. Espectro semelhante à ceftriaxona, mas exige mais doses diárias e é menos eficaz que esta para gonococo e meningococo. Boa opção nas infecções ósseas, articulares e quadros de sepse.',
        brands: [
          'Cetazima (Novafarma) — Fr. Amp.: 500 e 1.000 mg',
          'Clafordil (Blau) — Fr. Amp.: 1.000 mg',
          'Kefozil (Biochimico)',
          '[G] Cefotaxima sódica — Fr. Amp.: 500 e 1.000 mg',
          'Descontinuados: Cefacolin, Ceforan, Claforan, Kefaxim, Loxporin',
        ],
        presentations: [
          { label: 'Fr. Amp. 500 mg', price: 'R$ 20' },
          { label: 'Fr. Amp. 1.000 mg', price: 'R$ 64' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'RN ≤ 7 dias (> 1 kg) a 14 dias', value: '50 mg/kg/dose × 2' },
              { label: 'RN 8 a 28 dias', value: '50 mg/kg/dose × 2 a 3' },
              { label: 'Lactentes e crianças (dose usual EV/IM)', value: '50 a 180 mg/kg/dia ÷ 3 a 4. Máx: 6 g/dia' },
              { label: 'Infecções graves', value: '200 a 225 mg/kg/dia ÷ 4 a 6. Máx: 12 g/dia' },
              { label: 'Endocardite', value: '200 mg/kg/dia ÷ 4, por 4 a 6 semanas' },
              { label: 'Pneumonia', value: '150 a 200 mg/kg/dia ÷ 3 a 4 (7–10 dias). Máx: 2 g/dose' },
              { label: 'Meningite', value: '50 mg/kg/dose × 4 (em < 1 mês: 75 mg/kg/dose × 4). Máx: 2 g/dose. No tratamento empírico, associar ampicilina ou aminoglicosídeo.' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual EV/IM', value: '1 g/dose × 3 a 4' },
              { label: 'Infecções graves', value: '1 a 2 g/dose × 3' },
              { label: 'Infecções complicadas', value: '2 g/dose × 4 a 6' },
              { label: 'Sepse', value: '2 g/dose × 3 a 4' },
              { label: 'Meningite / abscesso cerebral', value: '2 g/dose × 6 + metronidazol 30 mg/kg/dia ÷ 2 ou 4' },
              { label: 'Peritonite / infecções intra-abdominais', value: '2 g/dose × 3 (× 4 nos casos graves)' },
              { label: 'Pneumonia', value: '1 a 2 g/dose × 3' },
              { label: 'Infecção urinária comunitária', value: '1 g/dose × 2' },
              { label: 'Gonorreia (alternativa)', value: 'IM: 0,5 a 1 g/dose única' },
              { label: 'Profilaxia em cesariana', value: '1 g na clampagem do cordão + 6 h e 12 h depois' },
            ],
          },
        ],
        preparation: 'EV: diluir para 200 mg/mL com ABD, agitar até dissolver, depois rediluir para 40 mg/mL com SGI/SF/RL e infundir em 3–5 min. IM: diluir em ABD para 230–330 mg/mL; máximo de 2 g por sítio.',
        renalAdjustment: [
          { label: 'ClCr 10–50 mL/min', value: 'Mesma dose a cada 12 horas' },
          { label: 'ClCr < 10 mL/min', value: 'Mesma dose a cada 24 h ou 50% da dose' },
          { label: 'Hemodiálise', value: 'Mesma dose a cada 12–24 h' },
          { label: 'CPAD', value: '0,5 a 1 g/dose a cada 12–24 h' },
        ],
        sensitivity: {
          susceptible: [
            'Gram+: Streptococcus A,B,C,G, Pneumococo, S. viridans, Estafilococo sensível à oxacilina/meticilina',
            'Gram−: H. influenzae, N. meningitidis, M. catarrhalis, E. coli, Proteus mirabilis, Klebsiella',
            '20–30% das cepas hospitalares de: Pseudomonas, Enterobacter, Salmonella, Shigella, Yersinia, Citrobacter, Providencia, Morganella, Serratia, Pasteurella, Eikenella, Aeromonas, Vibrio cholerae',
            'Anaeróbios: Clostridios não difficile, Actinomyces, Peptostreptococcus',
          ],
          resistant: [],
          warning: '',
        },
        sideEffects: [
          'Alergia, erupção cutânea, prurido',
          'Cefaleia, febre',
          'Colite pseudomembranosa',
          'Diarreia, náusea, vômitos',
          'Flebite, dor no local da injeção',
          'Coombs positivo',
          'Plaquetopenia, leucopenia, neutropenia, eosinofilia',
          'Aumento transitório de ureia, creatinina e transaminases',
          'Candidíase genital',
          'Cada grama contém 2,2 mEq de sódio',
          'Infiltração provoca necrose tecidual',
        ],
        contraindications: [],
      },

      {
        id: 'ceftriaxona',
        name: 'Ceftriaxona',
        suffix: 'AM',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de terceira geração com mesmo espectro que a cefotaxima, mas pode ser usada em dose única diária. Boa opção em sepse, pneumonia e meningite (até a idade pré-escolar). Na meningite neonatal, associar ampicilina para cobrir Listeria e estreptococo do grupo B. Em pediatria, preferir à cefotaxima — exceto em RN < 15 dias, prematuros, ictéricos, colestase intensa e em casos de abscesso cerebral ou ventriculites.',
        brands: [
          'Rocefin (Roche) — Fr. Amp. IV: 500 e 1.000 mg; Fr. Amp. IM: 500 e 1.000 mg',
          'Triaxin (Momenta) — Fr. Amp. IM: 500 e 1.000 mg',
          'Triaxon (Teuto) — Fr. Amp. IV: 500 e 1.000 mg; Fr. Amp. IM: 500 e 1.000 mg',
          'Amplospec (Biochimico), Ceftriax (EMS), Keftron (ABL), Triaxton (Blau)',
          '[G] Ceftriaxona sódica — Fr. Amp. IM e IV: 500 e 1.000 mg',
          'Descontinuados: Bioteral, Celtricina, Celltriaxon, Glicocef, Neoceftriona, Prodoxin, Trioxina',
        ],
        presentations: [
          { label: 'Fr. Amp. IV 500 mg', price: 'R$ 54' },
          { label: 'Fr. Amp. IM 500 mg', price: 'R$ 103' },
          { label: 'Fr. Amp. 250 mg / 1.000 mg', price: '' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Dose usual', value: '50 a 75 mg/kg/dia ÷ 1. Máx: 1 g/dia' },
              { label: 'Sepse / casos graves', value: '100 mg/kg/dia ÷ 1 a 2. Máx: 4 g/dia' },
              { label: 'Meningite não gonocócica', value: 'Ataque: 100 mg/kg; Manutenção: 80–100 mg/kg/dia ÷ 1 a 2. Associar ampicilina no RN para cobrir Listeria.' },
              { label: 'Profilaxia meningite meningocócica', value: '125 mg/dose única IM' },
              { label: 'Pneumonia / Epiglotite', value: '50–100 mg/kg/dia ÷ 1 a 2 por 7–14 dias' },
              { label: 'Otite média aguda', value: '50 mg/kg/dose única. Máx: 1 g/dia' },
              { label: 'Profilaxia contato meningococo / conjuntivite gonocócica neonatal', value: '25–50 mg/kg/dose única. Máx: 125 mg/dose' },
              { label: 'Infecção gonocócica disseminada (neonatos)', value: '25–50 mg/kg/dia ÷ 1 por 7 dias (10–14 dias se meningite)' },
              { label: 'Infecção gonocócica disseminada (lactentes/crianças)', value: '50 mg/kg/dia ÷ 1' },
              { label: 'Doença de Lyme', value: '50–75 mg/kg/dia ÷ 1 por 2–4 semanas' },
              { label: 'Endocardite', value: '100 mg/dia ÷ 2 ou 80 mg/kg/dia ÷ 1 por 4–6 semanas. Máx: 4 g/dia' },
              { label: 'Profilaxia de endocardite/peritonite', value: '50 mg/kg, 30–60 min antes. Máx: 1 g/dose' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '1 a 2 g/dose × 1 a 2' },
              { label: 'Pneumonia', value: '1 a 2 g/dia ÷ 1 a 2 (4 g/dia ÷ 2 para pneumococo resistente)' },
              { label: 'Sepse / meningite', value: '2 g/dose × 2 por 7–14 dias. Máx: 4 g/dia' },
              { label: 'Profilaxia meningite meningocócica', value: '250 mg/dose única' },
              { label: 'Cistite / pielonefrite', value: '1 a 2 g/dia ÷ 1' },
              { label: 'DST — Gonorreia não complicada, cancro mole, estupro', value: 'IM: 250–500 mg (dose única) + azitromicina + metronidazol' },
              { label: 'DST — Granuloma inguinal', value: '1 g/dia por 10–14 dias' },
              { label: 'Infecção gonocócica disseminada', value: '1–2 g/dose × 1 (× 3 nos casos graves), por 7 dias ou enquanto houver sintomas' },
              { label: 'Endocardite', value: '2 g/dia ÷ 1 por 4–6 semanas. Enterococo sensível: 4 g/dia ÷ 2 + ampicilina (2 g × 6) por 6 semanas' },
              { label: 'Profilaxia de endocardite', value: '1 g, 30–60 min antes' },
            ],
          },
        ],
        preparation: 'EV: diluir para 100 mg/mL com ABD ou SF, agitar até dissolver, depois rediluir para 40 mg/mL com SG/SF/RL; infundir em 5–30 min. NÃO infundir com soluções contendo cálcio. IM: diluir com lidocaína 1% sem vasoconstritor para 350 mg/mL. Infusão contínua pode ser mais eficaz que bolus.',
        renalAdjustment: [
          { label: 'Insuficiência renal ou hepática', value: 'Máximo 2 g/dia' },
        ],
        sensitivity: {
          susceptible: [],
          resistant: [
            'Gram+: Estafilococo MRSA, Pneumococo resistente à penicilina',
            'Gram−: Listeria, Pseudomonas aeruginosa, E. coli/Klebsiella ESBL+, KPC+, Acinetobacter, Stenotrophomonas maltophilia, Burkholderia cepacia (maioria), Enterobacter cloacae, Mycoplasma, Chlamydia, Legionella, Flavobacterium',
            'Anaeróbios: Bacteroides fragilis, Clostridium difficile, Prevotella melaninogenica',
          ],
          warning: 'Mesmo quando sensível in vitro, resistência comum durante o tratamento (associar aminoglicosídeo): Enterobacter, P. aeruginosa, Serratia, Citrobacter, Acinetobacter, Proteus.',
        },
        sideEffects: [
          'Erupção cutânea, prurido, alergia',
          'Diarreia, colite pseudomembranosa, náusea, vômitos, estomatite',
          'Formação de "lodo biliar" / colelitíase',
          'Distúrbios de coagulação',
          'Leucopenia, anemia, trombocitopenia/trombocitose, ↑ transaminases',
          'Eosinofilia, febre, calafrio, cefaleia, tontura',
          'Flebite e dor no local da injeção',
          'Risco de precipitados com cálcio (embolia pulmonar em neonatos)',
          'Cada 1g contém 83 mg (3,6 mEq) de sódio',
        ],
        contraindications: [
          'Neonato com icterícia grave — preferir cefotaxima',
        ],
      },

      // ── 3ª Geração (cont.) ──
      {
        id: 'ceftazidima',
        name: 'Ceftazidima',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 3ª geração. A melhor do grupo para Pseudomonas aeruginosa e P. cepacea. Produz menor indução de resistência. Geralmente associada a aminoglicosídeo nos primeiros 5 dias. Reservar para infecções por Pseudomonas e neutropênico febril.',
        brands: [
          'Fortaz — Fr. amp. 1.000 mg',
          'Ceftazima / Ceftazidona / Ceftazidima — Fr. amp. 1.000 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 1.000 mg' },
        ],
        doses: [
          {
            group: 'Crianças (EV/IM)',
            items: [
              { label: '≤ 7 dias / > 1 kg até 14 dias', value: '50 mg/kg/dose 2×/dia' },
              { label: '8–28 dias', value: '50 mg/kg/dose 2–3×/dia' },
              { label: 'Lactentes e crianças — dose usual', value: '90–150 mg/kg/dia ÷ 3–4 doses. Máx: 3 g/dia' },
              { label: 'Casos graves / meningites', value: '150–200 mg/kg/dia ÷ 3 doses. Máx: 6 g/dia' },
              { label: 'Pseudomonas na fibrose cística', value: '150–200 mg/kg/dia ÷ 3–4 doses (até 400 mg/kg/dia se necessário). Máx: 12 g/dia' },
              { label: 'Endocardite', value: 'EV: 100–150 mg/kg/dia ÷ 3 doses. Máx: 4 g/dia' },
              { label: 'Peritonite intermitente', value: '20 mg/kg/dia ÷ 3 doses. Máx: 4 g/dia' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '1–2 g/dose 3×/dia' },
              { label: 'Infecção urinária', value: 'EV/IM: 0,5–1 g/dose 2×/dia' },
              { label: 'Osteomielite', value: 'EV: 6 g/dia ÷ 3 doses por 6 semanas' },
              { label: 'Endoftalmite intravítrea', value: '1 mg em 0,1 mL' },
            ],
          },
        ],
        preparation: 'Bolus: diluir a 100 mg/mL, infundir em 3–5 min (se dor/febre: 40 mg/mL em 20 min). IM: diluir em ABD ou lidocaína 1% para 250 mg/mL. Incompatível com bicarbonato e aminoglicosídeo — não associar no mesmo equipo.',
        renalAdjustment: [
          { label: 'ClCr 31–50 mL/min', value: '1–1,5 g a cada 12 h' },
          { label: 'ClCr 16–30 mL/min', value: '1–1,5 g a cada 24 h' },
          { label: 'ClCr 6–15 mL/min', value: '0,5–1 g a cada 24 h' },
          { label: 'ClCr < 5 mL/min', value: '0,5 g a cada 48 h' },
          { label: 'Diálise', value: 'Remove 50–100%' },
        ],
        sensitivity: {
          susceptible: [
            'Melhor opção entre cefalosporinas de 3ª geração para: Pseudomonas aeruginosa, Stenotrophomonas maltophilia, Acinetobacter (mas muitas cepas hospitalares são resistentes)',
          ],
          resistant: [
            'Bacteroides fragilis, S. faecalis, Enterococos, Listeria, C. difficile, Citrobacter freundii',
            'E. coli e Klebsiella ESBL/KPC, muitas cepas de Pseudomonas e Acinetobacter',
          ],
          warning: 'Contra Pseudomonas, Enterobacter, Citrobacter e Serratia, associar aminoglicosídeo. Menos eficaz que ceftriaxona para Neisseria gonorrhoeae, meningococo e pneumococo.',
        },
        sideEffects: [
          'Cefaleia, tontura, parestesias, mioclonias, febre, alergia, erupção cutânea, prurido, anafilaxia',
          'Diarreia, náusea, vômitos, dor abdominal, colite pseudomembranosa',
          'Dor local, flebite, aumento de transaminases, colestase, aumento de ureia e creatinina',
          'Eosinofilia, leucopenia, trombocitose, Coombs positivo, hemólise, candidíase',
          'Cada grama contém ≈ 54 mg / 2,3 mEq de sódio',
        ],
        contraindications: [],
      },

      // ── 4ª e 5ª Geração ──
      {
        id: 'cefepima',
        name: 'Cefepima',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 4ª geração, mais resistente à beta-lactamase que as de 3ª geração. Eficaz para estafilococos sensíveis à oxacilina. Muito usada em infecções hospitalares por Pseudomonas e neutropenia febril. Alternativa para tratamento empírico da meningite em pediatria.',
        brands: [
          'Cefotax / Cemax / Unifepin — Fr. amp. 1.000 e 2.000 mg',
          'Cloridrato de cefepima — Fr. amp. 1.000 e 2.000 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 1.000 mg' },
          { label: 'Fr. amp. 2.000 mg' },
        ],
        doses: [
          {
            group: 'Crianças (EV/IM)',
            items: [
              { label: 'Dose usual', value: '50 mg/dose 2×/dia. Máx: 2 g/dose' },
              { label: 'Neonatos', value: '30 mg/kg/dose 2×/dia' },
              { label: 'Casos graves (≤ 7 dias, > 1 kg)', value: '50 mg/kg/dose 2×/dia' },
              { label: 'Lactentes e crianças — casos graves', value: '50 mg/kg/dose 2–3×/dia. Máx: 2 g/dose' },
              { label: 'Neutropênico febril', value: '50 mg/kg/dose 3×/dia' },
              { label: 'Pseudomonas na fibrose cística', value: '50 mg/kg/dose 3–4×/dia. Máx: 2 g/dose' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual EV', value: '1–2 g/dose 2–3×/dia' },
              { label: 'Infecções por P. aeruginosa / neutropenia febril', value: '2 g/dose 3×/dia' },
              { label: 'Infecção urinária', value: 'EV/IM: 0,5–1 g/dose 2×/dia (grave: 2 g/dose 2×/dia por 10 dias)' },
              { label: 'Pneumonia', value: '1–2 g/dose 3×/dia por 10 dias' },
              { label: 'Infecções intra-abdominais', value: '2 g/dose 2–3×/dia + metronidazol por 7–10 dias' },
              { label: 'Otite externa maligna / osteomielite', value: '2 g/dose 2–3×/dia' },
            ],
          },
        ],
        preparation: 'Bolus: diluir a 40 mg/mL em SF ou SG; infundir em 20–30 min. IM: diluir a 280 mg/mL em SF, ABD ou lidocaína 0,5–1%.',
        renalAdjustment: [
          { label: 'ClCr 30–60 mL/min', value: '1 dose a cada 24 h' },
          { label: 'ClCr 11–29 mL/min', value: '50% da dose a cada 24 h' },
          { label: 'ClCr < 10 mL/min', value: '25% da dose a cada 24 h' },
          { label: 'Hemodiálise', value: '1 dose a cada 24 h' },
        ],
        sensitivity: {
          susceptible: [
            'E. coli, Klebsiella, Proteus, Enterobacter, Citrobacter, Pseudomonas (maioria), Neisseria meningitidis, Staphylococcus sensível à oxacilina, Serratia marcescens',
            'Melhor que ceftazidima para Pseudomonas na fibrose cística',
          ],
          resistant: [
            'Estafilococo oxacilina/meticilina resistente, Fusobacterium, Veillonella, E. coli e Klebsiella ESBL/KPC',
            'Enterococcus, S. maltophilia, Listeria, Legionella, B. fragilis, Prevotella melaninogenica, C. difficile',
            'Algumas cepas de: Acinetobacter, B. cepacea, Campylobacter, Citrobacter, Pseudomonas',
          ],
          warning: '',
        },
        sideEffects: [
          'Cefaleia, tontura, febre, insônia, parestesia, ansiedade, encefalopatia, convulsões, status não convulsivo, EEG alterado, confusão, desorientação, coma',
          'Náusea, vômitos, dispepsia, diarreia, dor abdominal, colite pseudomembranosa',
          'Exantema, erupção cutânea, prurido, urticária, anafilaxia',
          'Flebite, taquicardia, tosse, Coombs positivo, aumento de transaminases, aumento de ureia e creatinina, nefrite tóxica',
          'Vaginite, leucopenia, trombocitopenia',
        ],
        contraindications: [],
      },

      {
        id: 'ceftarolina',
        name: 'Ceftarolina',
        category: 'cefalosporinas',
        observations: 'Cefalosporina de 5ª geração com modificações estruturais, reservada a microrganismos resistentes. Ativa contra MRSA, enterococo e estreptococo resistente à penicilina. Comparável à vancomicina para alguns Gram+. Menos eficaz para Pseudomonas.',
        brands: [
          'Zinforo — Fr. amp. 600 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 600 mg' },
        ],
        doses: [
          {
            group: 'Crianças ≥ 2 meses (EV)',
            items: [
              { label: 'Até 2 anos', value: '8 mg/kg/dose 3×/dia. Máx: 1200 mg/dia' },
              { label: '≥ 2 anos', value: '12 mg/kg/dose 3×/dia. Máx: 1200 mg/dia' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual EV', value: '600 mg/dose 2×/dia por 5–14 dias' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'ClCr 30–50 mL/min', value: '400 mg/dose 2×/dia' },
          { label: 'ClCr 15–29 mL/min', value: '300 mg/dose 2×/dia' },
          { label: 'ClCr < 15 mL/min', value: '200 mg/dose 2×/dia' },
        ],
        sensitivity: {
          susceptible: [
            'Similar à cefepima, com ação adicional contra: MRSA, Enterococcus, Streptococcus resistente à penicilina',
          ],
          resistant: [
            'Pseudomonas (menos eficaz)',
          ],
          warning: '',
        },
        sideEffects: [
          'Similar às demais cefalosporinas parenterais',
        ],
        contraindications: [],
      },
    ],
  },
  {
    id: 'analgesicos',
    label: 'Analgésicos e Anti-inflamatórios',
    color: 'orange-500',
    icon: '💊',
    drugs: [
      {
        id: 'aas',
        name: 'Ácido acetilsalicílico',
        suffix: 'AAS',
        category: 'analgesicos',
        observations: 'Analgésico, antitérmico, anti-inflamatório e antiagregante plaquetário. Reduz mortalidade em adultos com risco cardíaco elevado (Framingham > 6%). Risco de Síndrome de Reye em menores de 16 anos com gripe/influenza B ou varicela — evitar nesses casos.',
        brands: [
          'Aspirina: comprimido 500 mg',
          'Aspirina Microativa: comprimido liberação modificada 500 mg',
          'Aspirina Prevent: comprimido liberação entérica 100 e 300 mg',
          'Ecasil-81: comprimido revestido 81 mg',
          'AAS: comprimido 100 mg',
          'AAS Protect: comprimido revestido 100 mg',
          'Melhoral: comprimido 85 mg',
          'Aceticil / As-med / Acetildor / Dormec / Salicetil / Sedalive: comprimido 100 e 500 mg',
          'Somalgin Cardio (+ carbonato de magnésio + glicinato de alumínio): comprimido revestido 81, 100, 200 e 325 mg',
          'Aspirina C / Melhoral C: comprimido efervescente 400 mg + vitamina C 240 mg',
          'Descontinuadas: Acstin, Analgesin, Antifebrin, Asetisin, Assedatil, Butlerin Cardio, CAAS, Cardio AAS, entre outras',
        ],
        presentations: [
          { label: 'Comprimido 100 mg', price: '' },
          { label: 'Comprimido 300 mg', price: '' },
          { label: 'Comprimido 500 mg', price: '' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Febre e dor (mg/kg)', value: '10–15 mg/kg/dose, 4 a 6 vezes ao dia (máx: 120 mg/kg/dia ou 4 g/dia)' },
              { label: 'Febre e dor — até 1 ano (comprimido 100 mg)', value: '1/4 a 1/2 comprimido/dose' },
              { label: 'Febre e dor — 1 a 2 anos', value: '1/2 a 1 comprimido/dose' },
              { label: 'Febre e dor — 3 a 5 anos', value: '1 a 2 comprimidos/dose' },
              { label: 'Febre e dor — 6 a 9 anos', value: '2 a 3 comprimidos/dose' },
              { label: 'Febre e dor — 10 a 12 anos', value: '4 a 5 comprimidos/dose' },
              { label: 'Anti-inflamatório', value: '60–90 mg/kg/dia ÷ 3 a 4 doses' },
              { label: 'Febre reumática', value: '80–100 mg/kg/dia ÷ 4 doses por até 15 dias. Máx: 6 g/dia' },
              { label: 'Artrite reumatoide', value: '90–130 mg/kg/dia ÷ 4 a 6 doses' },
              { label: 'Doença de Kawasaki (fase febril)', value: '80–100 mg/kg/dia ÷ 4 doses por até 14 dias; depois 1–5 mg/kg/dia por 6–8 semanas' },
              { label: 'Antiagregante plaquetário', value: '1–5 mg/kg/dia, 1 vez ao dia' },
              { label: 'Prótese valvar', value: '6–20 mg/kg/dia, 1 vez ao dia' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Febre ou dor leve a moderada', value: '500 mg/dose, 4 vezes ao dia. Máx: 3 g/dia' },
              { label: 'Anti-inflamatório', value: '2,5–4,0 g/dia ÷ 4 a 6 doses' },
              { label: 'Artrite reumatoide / osteoartrites', value: 'Iniciar 3 g/dia ÷ 4–6 doses; máx: 8 g/dia' },
              { label: 'Antiagregante plaquetário', value: '100–300 mg/dia' },
              { label: 'Profilaxia cardiovascular (Framingham > 6%)', value: '80–325 mg/dia, 1 vez ao dia' },
              { label: 'Profilaxia do AVC isquêmico', value: '100–325 mg/dia' },
              { label: 'IAM — primeiro sinal', value: 'Mastigar 2–3 comprimidos de 100 mg; manutenção: 80–165 mg/dia' },
              { label: 'Angina instável', value: '80–325 mg/dia' },
              { label: 'Pós-prótese arterial / bypass', value: '160–325 mg/dia, iniciar 6 h depois' },
              { label: 'Implantação de stent', value: '160–325 mg/dia, iniciar 2 h antes' },
              { label: 'Pericardite pós-infarto (Dressler)', value: '500 mg/dose, 4 vezes ao dia' },
              { label: 'Profilaxia da pré-eclâmpsia', value: '80–165 mg/dia entre o 4º e 6º mês de gestação' },
              { label: 'Dor do herpes-zoster (uso tópico)', value: 'Triturar 500 mg em 10 mL de vaselina; aplicar até 3 vezes ao dia no local' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'ClCr < 10 mL/min', value: 'Evitar' },
          { label: 'Insuficiência hepática', value: 'Melhor evitar' },
          { label: 'Idosos > 80 anos', value: 'Evitar uso crônico' },
        ],
        sideEffects: [
          'Hemorragias, inclusive aguda grave; duplica o risco de sangramento gástrico',
          'Gastrite e ulcerações gástricas (até 30%)',
          'Náusea, diarreia, vômitos, cefaleia, dor gástrica, azia e pirose',
          'Alergia, broncoespasmo, angioedema e anafilaxia',
          'Disfunção plaquetária',
          'Agravamento de insuficiência renal; nefrite intersticial; necrose papilar renal',
          'Aumento de enzimas hepáticas e hepatite',
          'Hipertensão, taquicardia e arritmia',
          'Confusão mental, tontura e zumbido',
          'Rabdomiólise',
          'Síndrome de Reye (risco em < 16 anos com gripe ou varicela)',
          'Risco para o feto no primeiro trimestre; retarda trabalho de parto',
        ],
        contraindications: [
          'Suspeita de dengue',
          'Antecedente de anafilaxia ou crise de asma com salicilatos',
          'Último trimestre da gravidez (exceto tratamento de pré-eclâmpsia)',
          'Pré-operatório',
          'Gastrite ou úlcera péptica ativa',
          'Lesão hepática grave; hemofilia ou coagulopatias; trombocitopenia',
          'Uso de anticoagulantes (exceto protocolos específicos)',
          'Crianças com influenza ou varicela',
          'Síndrome de asma + pólipo nasal',
        ],
      },

      {
        id: 'clonixinato',
        name: 'Clonixinato de lisina',
        category: 'analgesicos',
        observations: 'Anti-inflamatório não esteroide com ação predominantemente analgésica. Útil nas cólicas renais, dores neurogênicas ou musculares, dor de dente e cefaleia. Uso não recomendado em crianças.',
        brands: [
          'Dolamin: comprimido revestido 125 mg',
          'Dolamin Flex / Benziflex Lis: comprimido revestido 125 mg + ciclobenzaprina 5 mg',
        ],
        presentations: [
          { label: 'Comprimido revestido 125 mg', price: '' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Uso em crianças', value: 'Não recomendado' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dismenorreia', value: '125 mg/dose, 4 vezes ao dia' },
              { label: 'Artrose de joelho', value: '125 mg/dose, 3 vezes ao dia' },
              { label: 'Dor leve a moderada / pós-operatório', value: '125–250 mg/dose, 3 vezes ao dia. Máx: 750 mg/dia' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'Insuficiência renal', value: 'Não exige ajuste' },
          { label: 'Insuficiência hepática', value: 'Melhor evitar' },
        ],
        sideEffects: [
          'Diarreia, náusea, vômitos, boca seca, dor epigástrica, pirose, azia',
          'Hemorragia digestiva, flatulência',
          'Risco de sangramento',
          'Cefaleia, tontura, sonolência',
          'Edema, hipotensão, proteinúria',
          'Prurido, urticária, irritação da pele',
        ],
        contraindications: [
          'Asma',
          'Úlcera péptica',
          'Lactentes',
        ],
      },

      {
        id: 'dipirona',
        name: 'Dipirona',
        suffix: 'Metamizol',
        category: 'analgesicos',
        observations: 'Analgésico e antitérmico pirazolônico. Único antitérmico de uso parenteral amplamente disponível no Brasil. Apesar de proibida em vários países, tem se mostrado segura em doses habituais, sobretudo em crianças maiores. Não usar em crianças abaixo de 3 meses ou de 5 kg pelo risco de disfunção renal.',
        brands: [
          'Novalgina: ampola 2 mL 500 mg/mL; comprimido 500 e 1000 mg; gotas 500 mg/mL; solução oral 50 mg/mL; supositório 300 mg',
          'Anador: comprimido 500 mg; gotas 500 mg/mL',
          'Alivdip / Diprin / Magnopyrol / Maxalgina: gotas 500 mg/mL; solução oral 50 mg/mL',
          'Hynalgin / Santidor / Dipifarma: ampola 500 mg/mL',
          'Lisador Dip / Termopirona: comprimido 1000 mg',
          'Outras: Algona, Anagos, Doralgina, Dorona, Doron, Febrilon, Prodopirona, Zitalgin, entre outras',
        ],
        presentations: [
          { label: 'Comprimido 500 mg', price: '' },
          { label: 'Gotas 10 mL — 500 mg/mL (25 mg/gota)', price: '' },
          { label: 'Solução oral 100 mL — 50 mg/mL', price: '' },
          { label: 'Ampola 2 mL — 500 mg/mL', price: '' },
          { label: 'Supositório 300 mg', price: '' },
        ],
        doses: [
          {
            group: 'Crianças — Via oral',
            items: [
              { label: 'Dose por peso', value: '10–15 mg/kg/dose, 4 vezes ao dia. Dose máxima: 25 mg/kg/dose' },
              { label: 'Gotas (500 mg/mL)', value: '0,4–0,6 gotas/kg/dose, 4 vezes ao dia' },
              { label: 'Solução oral (50 mg/mL)', value: '0,2–0,3 mL/kg/dose, 4 vezes ao dia' },
              { label: '3–11 meses (5–8 kg)', value: '2–5 gotas ou 1,25–2,5 mL da solução' },
              { label: '1–3 anos (9–15 kg)', value: '3–9 gotas ou 2,5–5,0 mL da solução' },
              { label: '4–6 anos (16–23 kg)', value: '6–14 gotas ou 3,75–7,5 mL da solução' },
              { label: '7–9 anos (24–30 kg)', value: '9–18 gotas ou 5,0–10 mL da solução' },
              { label: '10–12 anos (31–45 kg)', value: '12–27 gotas ou 7,5–15 mL da solução' },
              { label: 'Via retal (> 4 anos)', value: 'Supositório 300 mg, até 4 vezes ao dia' },
            ],
          },
          {
            group: 'Crianças — Via EV ou IM (ampola 500 mg/mL)',
            items: [
              { label: 'Dose por peso', value: '15 mg/kg/dose = 0,03 mL/kg/dose' },
              { label: '5–8 kg', value: 'EV: evitar; IM: 0,1–0,2 mL' },
              { label: '9–15 kg', value: 'EV: 0,2–0,5 mL; IM: 0,2–0,5 mL' },
              { label: '16–23 kg', value: 'EV: 0,3–0,8 mL; IM: 0,3–0,8 mL' },
              { label: '24–30 kg', value: 'EV: 0,4–1,0 mL; IM: 0,4–1,0 mL' },
              { label: '31–45 kg', value: 'EV: 0,5–1,5 mL; IM: 0,5–1,5 mL' },
              { label: '46–53 kg', value: 'EV: 0,8–1,8 mL; IM: 0,8–1,8 mL' },
              { label: '> 53 kg', value: 'EV: 1,0–2,0 mL; IM: 1,0–2,0 mL' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Febre e dor — via oral', value: '500–1000 mg/dose (20–40 gotas), 3–4 vezes ao dia. Máx: 3000 mg/dia' },
              { label: 'EV ou IM', value: '500–2500 mg/dose. Máx: 5000 mg/dia' },
              { label: 'Administração EV', value: 'Diluir em 20 mL de SF ou ABD; infundir lentamente (máx 1 mL/min)' },
              { label: 'Dor oncológica', value: '2000–4000 mg/dia ÷ 3–4 doses; ou 500 mg × 4/dia + morfina 10 mg × 6/dia' },
              { label: 'Idosos', value: 'Usar a dose mais baixa' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'Insuficiência renal', value: 'Melhor evitar' },
          { label: 'Insuficiência hepática', value: 'Melhor evitar' },
        ],
        sideEffects: [
          'Náusea, vômitos, dor abdominal, diarreia, desconforto gástrico, erupção cutânea, sonolência',
          'Hipotermia',
          'Anafilaxia, broncoespasmo, edema angioneurótico, hipotensão, crise de asma',
          'RAROS E GRAVES: depressão medular, neutropenia, agranulocitose (pode ser fatal em até 10%), anemia, plaquetopenia',
          'Choque anafilático; Síndrome de Stevens-Johnson',
          'Distúrbios renais transitórios: anúria, proteinúria, nefrite intersticial',
          'Hemorragia gastrointestinal',
          'Pode corar a urina de vermelho (sem importância clínica)',
        ],
        contraindications: [
          'Crianças abaixo de 3 meses ou de 5 kg',
          'Nefrites crônicas',
          'Discrasias sanguíneas; supressão da medula óssea',
          'Alergia a AAS ou anti-inflamatórios não hormonais',
          'Deficiência de G6PD',
        ],
      },

      {
        id: 'ibuprofeno',
        name: 'Ibuprofeno',
        category: 'analgesicos',
        observations: 'Anti-inflamatório derivado do ácido propiônico. Considerado primeira escolha para substituir analgésicos não opioides no controle da dor. Efeito inicia em 1–2 horas e dura 6–8 horas. Ibuprofeno arginina tem início em 15–30 min. Atenção: existem apresentações em gotas com 50 mg/mL e 100 mg/mL — não calcular dose como gotas/kg sem saber a concentração.',
        brands: [
          'Advil / Buscofem: cápsula 400 mg',
          'Alivium: comprimido 400 e 600 mg; cápsula 400 e 600 mg; suspensão 150 mg/5 mL',
          'Dalsy: gotas 50 mg/mL e 100 mg/mL; comprimido 200, 400 e 600 mg; suspensão 100 mg/5 mL',
          'Motrin: comprimido 600 mg',
          'Ibufran / Ibupril / Ibuliv / Ibuvix / Buprovil: comprimido 300–600 mg; gotas 50 mg/mL',
          'Spidufen (+ arginina): granulado sachê 400 mg e 600 mg',
          'Outras: Algy-Flanderil, Doraliv, Febsen, Ibuprotrat, Novalfem, Parartrin, Vantil, Nurofen, entre outras',
        ],
        presentations: [
          { label: 'Comprimido 200, 300, 400 e 600 mg', price: '' },
          { label: 'Gotas 30 mL — 50 mg/mL', price: '' },
          { label: 'Gotas 20 mL — 100 mg/mL', price: '' },
          { label: 'Suspensão 100 mL — 100 mg/5 mL', price: '' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Febre baixa', value: '5 mg/kg/dose, 1–4 vezes ao dia (= 1 gota/kg se 50 mg/mL)' },
              { label: 'Febre alta', value: '10 mg/kg/dose, 1–3 vezes ao dia. Máx: 40 mg/kg/dia' },
              { label: 'Dor leve a moderada', value: '5–10 mg/kg/dose, 3–4 vezes ao dia. Máx: 50 mg/kg/dia' },
              { label: 'Anti-inflamatório', value: '30–40 mg/kg/dia ÷ 3–4 doses' },
              { label: 'Artrite reumatoide juvenil', value: '30–50 mg/kg/dia ÷ 4 doses. Máx: 2400 mg/dia' },
              { label: 'Fibrose cística', value: '20–30 mg/kg/dose, 2 vezes ao dia (por mais de 4 anos)' },
              { label: 'Canal arterial no prematuro (500–1500 g)', value: '10 mg/kg; depois 5 mg/kg em 24 h e 48 h' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Febre', value: '200–400 mg/dose, 4–6 vezes ao dia. Máx: 1200 mg/dia' },
              { label: 'Dor leve ou moderada', value: '200–400 mg/dose, 4–6 vezes ao dia' },
              { label: 'Dor intensa', value: '400–800 mg/dose, 4 vezes ao dia. Máx: 3200 mg/dia' },
              { label: 'Cefaleia leve/moderada', value: '400–800 mg/dose' },
              { label: 'Cefaleia intensa', value: '800–1200 mg/dose' },
              { label: 'Anti-inflamatório', value: '400–800 mg/dose, 3–4 vezes ao dia. Máx: 3200 mg/dia' },
              { label: 'Dismenorreia', value: '400 mg/dose, até 4 vezes ao dia' },
              { label: 'Dor de drepanocitose', value: '600 mg/dose, 4 vezes ao dia' },
              { label: 'Osteoartrite / artrite reumatoide', value: '1200–3200 mg/dia ÷ 3–4 doses' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'Insuficiência renal', value: 'Usar a menor dose possível' },
          { label: 'Insuficiência hepática', value: 'Evitar' },
        ],
        sideEffects: [
          'Náusea, vômitos, dispepsia, azia, dor abdominal, erupção cutânea, tontura (3–9%)',
          'Cefaleia, edema, prurido, úlcera gástrica, gastrite, zumbido, constipação (1–3%)',
          'Hemorragia digestiva, trombocitopenia, icterícia, ↑ transaminases (< 1%)',
          'RAROS: insuficiência cardíaca, hipertensão, síndrome de Stevens-Johnson, perfuração GI, pancreatite',
          'RAROS: agranulocitose, hepatite fulminante, nefrite intersticial, insuficiência renal aguda',
          'Broncoespasmo e anafilaxia; síndrome de ativação de macrófago (CIVD)',
          'Uso crônico: disfunção renal em 1–5%; hipertensão reversível com suspensão',
        ],
        contraindications: [
          'Suspeita de dengue',
          'Alergia ou broncoespasmo por AAS ou anti-inflamatórios',
          'Úlcera péptica ativa',
          'Hipertensão grave; edema; insuficiência cardíaca',
          'Cardiopatias congênitas canal dependente',
          'Prematuros com sepse ou enterocolite necrosante suspeita/confirmada',
          'Hemorragia ativa',
        ],
      },

      {
        id: 'paracetamol',
        name: 'Paracetamol',
        suffix: 'Acetaminofeno',
        category: 'analgesicos',
        observations: 'Analgésico e antitérmico. Principal alternativa segura em idosos e pacientes com contraindicação a AINEs. Hepatotoxicidade sobretudo com doses altas; risco aumenta com jejum e ingestão de álcool. Antídoto: acetilcisteína.',
        brands: [
          'Tylenol: comprimido 500 e 750 mg; mastigável 160 mg; gotas 200 mg/mL',
          'Tylenol Bebê: suspensão 100 mg/mL',
          'Tylenol Criança: suspensão 160 mg/5 mL',
          'Alivian / Cyfenol / Dorsanol / Multigripe / Paralgen / Termol / Tyflen / Tylaflex / Tylidol: comprimido 500 e 750 mg; gotas 200 mg/mL',
          'Tyflen Bebê / Tylemax Baby: suspensão 100 mg/mL',
          'Tyflen Criança / Tylemax Criança: suspensão 160 mg/5 mL',
          'Vick Pyrena / Cimegripe / Emsgripe / Fervex / Resfenol Thermos: pó sachê 100 mg/g',
          'Pratium: gotas 140 mg/mL',
          'Ofirmev (EV): frasco-ampola 1000 mg/100 mL',
          'Outras: Analgisen, Codyflex, Dorfenol, Dorfen, Paramol, Sonridor efervescente, entre outras',
        ],
        presentations: [
          { label: 'Comprimido 500 mg', price: '' },
          { label: 'Comprimido 750 mg', price: '' },
          { label: 'Gotas 15 mL — 200 mg/mL (10 mg/gota)', price: '' },
          { label: 'Gotas 15 mL — 100 mg/mL (5 mg/gota)', price: '' },
          { label: 'Bebê: suspensão 15 mL — 100 mg/mL', price: '' },
          { label: 'Criança: suspensão 60 mL — 160 mg/5 mL', price: '' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Prematuros 28–32 sem', value: '10–12 mg/kg/dose, 4 vezes ao dia (mínimo 6 h entre doses)' },
              { label: 'Prematuros 32–36 sem', value: '10–15 mg/kg/dose, 4 vezes ao dia' },
              { label: 'Lactentes e crianças', value: '10–15 mg/kg/dose, 4 vezes ao dia' },
              { label: 'Gotas 200 mg/mL (10 mg/gota)', value: '1 gota/kg/dose' },
              { label: 'Gotas 100 mg/mL (5 mg/gota)', value: '2 gotas/kg/dose' },
              { label: '0–3 meses: 40 mg', value: '4 gotas (200 mg/mL) ou 8 gotas (100 mg/mL)' },
              { label: '4–11 meses: 80 mg', value: '8 gotas (200 mg/mL) ou 16 gotas (100 mg/mL)' },
              { label: '1–2 anos: 120 mg', value: '12 gotas (200 mg/mL) ou 24 gotas (100 mg/mL)' },
              { label: '2–3 anos: 160 mg', value: '16 gotas (200 mg/mL) ou 32 gotas (100 mg/mL)' },
              { label: '4–5 anos: 240 mg', value: '24 gotas (200 mg/mL) ou 48 gotas (100 mg/mL)' },
              { label: '6–8 anos: 320 mg', value: '32 gotas (200 mg/mL) ou 64 gotas (100 mg/mL)' },
              { label: '9–10 anos: 400 mg', value: '40 gotas (200 mg/mL) ou 80 gotas (100 mg/mL)' },
              { label: '11–12 anos: 480 mg', value: '48 gotas (200 mg/mL) ou 96 gotas (100 mg/mL)' },
              { label: '> 12 anos: 500 mg', value: '50 gotas (200 mg/mL) ou 100 gotas (100 mg/mL)' },
              { label: 'Suspensão 160 mg/5 mL — 12–15 kg', value: '5,0 mL/dose' },
              { label: 'Suspensão 160 mg/5 mL — 16–21 kg', value: '7,5 mL/dose' },
              { label: 'Suspensão 160 mg/5 mL — 22–26 kg', value: '10,0 mL/dose' },
              { label: 'Suspensão 160 mg/5 mL — 27–32 kg', value: '12,5 mL/dose' },
              { label: 'Suspensão 160 mg/5 mL — 33–43 kg', value: '15,0 mL/dose' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Analgésico e antitérmico', value: '500 mg de 4/4 h; ou 750–1000 mg de 6/6 h. Máx: 4 g/dia' },
              { label: 'Apresentação AP', value: '650–1300 mg de 8/8 h' },
              { label: 'Via EV (não disponível no Brasil)', value: '1000 mg em 15 min, de 6/6 h. Máx: 4 g/dia (> 50 kg)' },
              { label: 'Dor crônica em idosos', value: '500 mg/dose, 3–4 vezes ao dia. Máx: 4 g/dia' },
              { label: 'Cefaleia', value: '500–1000 mg/dose' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'ClCr 10–50 mL/min', value: 'Máx 4 doses/dia, a cada 6 horas' },
          { label: 'ClCr < 10 mL/min', value: 'Máx 3 doses/dia, a cada 8 horas' },
          { label: 'Insuficiência hepática', value: 'Melhor evitar' },
        ],
        sideEffects: [
          'Erupção cutânea, náusea, vômitos, dor de garganta, febre',
          'Urticária, angioedema e anafilaxia',
          'Anemia, leucopenia, neutropenia, pancitopenia',
          'Nefrotoxicidade; lesão renal com uso crônico',
          'Hepatotoxicidade (sobretudo com doses altas, jejum ou álcool); disfunção hepática tardia',
          'Nível tóxico: 200 mcg/mL 4 h após ingestão, ou 50 mcg/mL 12 h após ingestão',
        ],
        contraindications: [
          'Deficiência de G6PD (risco de hemólise em doses altas)',
          'Hepatopatias graves',
        ],
      },
    ],
  },
  {
    id: 'anfenicois-tetraciclinas',
    label: 'Anfenicóis e Tetraciclinas',
    color: 'green-500',
    icon: '🧫',
    drugs: [
      {
        id: 'cloranfenicol',
        name: 'Cloranfenicol',
        category: 'anfenicois-tetraciclinas',
        observations: 'Anfenicol, inibidor de síntese de proteínas de amplo espectro. Bacteriostático para a maioria das bactérias sensíveis e bactericida contra H. influenzae, Neisseria meningitidis e S. pneumoniae. Pelo grande risco de toxicidade, o uso deve ser limitado a infecções para as quais os benefícios superem os riscos.',
        brands: [
          'Arifenicol — Fr. amp. 1.000 mg',
          'Comprimidos/cápsulas 250 mg',
          'Suspensão oral 25 mg/mL',
          'Succinato sódico de cloranfenicol — Fr. amp. 1.000 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 1.000 mg' },
          { label: 'Comprimido/cápsula 250 mg' },
          { label: 'Suspensão oral 25 mg/mL' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'EV / oral (dose usual)', value: '50–75 mg/kg/dia ÷ 3–4 doses' },
              { label: 'RN < 7 dias ou ≤ 2 kg ou metabolismo imaturo', value: '25 mg/kg/dia ÷ 1–4 doses' },
              { label: 'RN > 7 dias e > 2 kg', value: '50 mg/kg/dia ÷ 1–2 doses' },
              { label: 'Meningite', value: '75–100 mg/kg/dia ÷ 4 doses. Associar ampicilina.' },
              { label: 'Tempo de tratamento usual', value: '10–14 dias' },
            ],
          },
          {
            group: 'Adultos — infecções graves',
            items: [
              { label: 'EV / oral', value: '50 mg/kg/dia ÷ 4 doses. Se necessário, iniciar com 75–100 mg/kg/dia e reduzir. Máx: 4 g/dia' },
            ],
          },
        ],
        preparation: 'EV: diluir 100 mg/mL ou mais e infundir em 5 minutos. NÃO usar por via intramuscular. Monitorar hemograma cerca de 2 × por semana. Nível sérico de pico (30 min após dose): neonatos 15–25 µg/mL; crianças/adolescentes 15–30 µg/mL; adultos 10–20 µg/mL. Basal (antes da próxima dose): 5–15 µg/mL.',
        sensitivity: {
          susceptible: [
            'Anaeróbios, B. anthracis, Bacteroides, Bordetella pertussis, Burkholderia cepacia',
            'Enterococcus resistentes à vancomicina, E. coli, Espiroqueta',
            'Haemophilus influenzae, Klebsiella, Mycoplasma, Neisseria gonorrhoeae, Neisseria meningitidis',
            'P. pseudomallei, Rickettsia, Salmonella typhi, Serratia',
            'Staphylococcus aureus, S. epidermidis, Streptococcus A, B, C e G, Streptococcus pneumoniae',
            'Vibrio cholerae, Yersinia pestis',
          ],
          resistant: [
            'Cepas de Pseudomonas, Shigella, Salmonella',
            'Streptococcus pneumoniae resistentes à penicilina',
          ],
          warning: '',
        },
        sideEffects: [
          'Náusea, vômito, diarreia, estomatite, alergia, erupção cutânea, enterocolite, febre',
          'Confusão, cefaleia, pesadelo, neurite óptica, cardiotoxicidade, depressão ventricular aguda',
          'Depressão medular reversível dose-dependente, pior com nível sérico > 25 µg/mL',
          'Aplasia fatal independente da dose — pode ocorrer 1 a 12 meses depois',
          'Síndrome cinzenta em neonatos: colapso circulatório, cianose, hipotermia, acidose, coma e morte',
          'Hepatite medicamentosa com pancitopenia, anafilaxia',
        ],
        contraindications: [],
      },

      {
        id: 'doxiciclina',
        name: 'Doxiciclina',
        category: 'anfenicois-tetraciclinas',
        observations: 'Tetraciclina bacteriostática de amplo espectro e ação longa. Menor toxicidade gastrointestinal que outras tetraciclinas. Útil para infecções do trato respiratório e tecidos moles. Primeira escolha para infecções por Chlamydia trachomatis.',
        brands: [
          'Vibramicina — comprimido solúvel 100 mg; comprimido revestido 100 mg',
          'Clordox, Doxiclin — comprimido revestido 100 mg',
          'Neo doxicillin, Protectina',
          'Genérico (cloridrato de doxiciclina) — comprimido 100 mg; injetável 100 mg; comprimido revestido 100 mg',
        ],
        presentations: [
          { label: 'Comprimido 100 mg' },
          { label: 'Injetável 100 mg' },
        ],
        doses: [
          {
            group: 'Crianças ≥ 8 anos',
            items: [
              { label: 'Dose usual', value: '5 mg/kg/dia no 1º dia, seguido de 2–5 mg/kg/dia ÷ 1–2 doses. Máx: 100 mg/dose' },
              { label: 'Malária', value: '2,2 mg/kg/dose a cada 12 h por 7 dias' },
              { label: 'Profilaxia malária', value: '2,2 mg/kg/dia, de 2 dias antes até 1 mês após o retorno' },
              { label: 'Brucelose', value: '1–2 mg/kg/dia por 6 semanas. Associar rifampicina ou aminoglicosídeo' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '100–200 mg/dia ÷ 1–2 doses' },
              { label: 'Acne grau III', value: '100 mg/dia ÷ 1–2 doses por 3–4 meses' },
              { label: 'Rosácea', value: '50–100 mg/dose 2×/dia por 1–3 meses' },
              { label: 'Pneumonia comunitária / exacerbação DPOC', value: '100 mg/dose 2×/dia' },
              { label: 'Diarreia', value: '100 mg 2×/dia por 5–7 dias' },
              { label: 'Cólera grave', value: '300 mg em dose única (adjunto)' },
              { label: 'Doença de Lyme — tratamento', value: '100 mg/dose 2×/dia por 14–28 dias' },
              { label: 'Doença de Lyme — profilaxia', value: '200 mg em dose única' },
              { label: 'DST (Chlamydia, cancro mole, gonorreia não complicada)', value: '100 mg/dose 2×/dia por 10 dias. Associar ceftriaxona dose única' },
              { label: 'DST — granuloma inguinal', value: '100 mg/dose 2×/dia por 3–4 semanas' },
              { label: 'Sífilis / DIP', value: '100 mg/dose 2×/dia por 14 dias (28 dias na sífilis tardia)' },
              { label: 'Malária por P. falciparum + cloroquina', value: '100 mg/dose 2×/dia por 7 dias' },
              { label: 'Profilaxia malária', value: '100 mg/dia de 2 dias antes até 1 mês após a viagem' },
              { label: 'Rinossinusite aguda / alternativa', value: '100 mg/dose 2×/dia por 5–7 dias' },
              { label: 'Insuficiência renal', value: 'Não exige ajuste' },
            ],
          },
        ],
        sensitivity: {
          susceptible: [
            'Acinetobacter, Actinomyces, Bacteroides, Bartonella, Borrelia, Brucella, Calymmatobacterium',
            'Campylobacter fetus, Chlamydia, Clostridium, C. burnetii, D. fragilis, E. coli, F. tularensis',
            'Haemophilus ducreyi, Legionella, L. buccalis, Listeria monocytogenes, Mycoplasma pneumoniae',
            'Neisseria gonorrhoeae, Rickettsia, Staphylococcus resistente, Streptococcus pneumoniae',
            'Treponema pallidum, Ureaplasma urealyticum, V. cholerae, Y. pestis',
            'Malária por Plasmodium falciparum resistente',
          ],
          resistant: [
            'Enterococcus, Proteus, Salmonella, Serratia, Staphylococcus epidermidis',
            'Cepas de Bacillus anthracis, Enterobacter, H. influenzae, Klebsiella, Moraxella',
            'Pneumococcus, Shigella, Streptococcus pyogenes',
          ],
          warning: 'Aumenta níveis séricos de digoxina e varfarina. Não associar com isotretinoína ou penicilinas.',
        },
        sideEffects: [
          'Descoloração dos dentes e displasia do esmalte em < 8 anos',
          'Anorexia, náusea, vômitos, diarreia, secura na boca, glossite',
          'Fotossensibilização, erupção, urticária, Síndrome de Stevens-Johnson',
          'Anemia hemolítica, depressão medular, eosinofilia, pericardite',
          'Hipertensão intracraniana, hepatotoxicidade',
        ],
        contraindications: [
          'Menores de 8 anos',
        ],
      },

      {
        id: 'limeciclina',
        name: 'Limeciclina',
        category: 'anfenicois-tetraciclinas',
        observations: 'Tetraciclina bacteriostática de amplo espectro.',
        brands: [
          'Tetralysal',
          'Meciclin — cápsulas 150 e 300 mg',
        ],
        presentations: [
          { label: 'Cápsula 150 mg' },
          { label: 'Cápsula 300 mg' },
        ],
        doses: [
          {
            group: 'Adultos',
            items: [
              { label: 'Acne grau III, rosácea ou erupção acneiforme', value: '300 mg/dia ÷ 1–2 doses por 8–12 semanas' },
              { label: 'Outras infecções', value: '300 mg/dose, 1–2 vezes ao dia' },
            ],
          },
        ],
        sensitivity: {
          susceptible: [
            'Brucella, Chlamydia, Haemophilus, Leptospira, M. pneumoniae, N. gonorrhoeae',
            'Pasteurella, Propionibacterium acnes, Rickettsia, T. pallidum, U. urealyticum, V. cholerae',
          ],
          resistant: [],
          warning: 'Não usar antes dos 8 anos de idade — risco de mancha no esmalte dentário.',
        },
        sideEffects: [
          'Mancha no esmalte dentário (não usar < 8 anos), erupção cutânea, urticária, alergia',
          'Anemia hemolítica, plaquetopenia, eosinofilia, neutropenia, disfunção renal',
        ],
        contraindications: [],
      },

      {
        id: 'minociclina',
        name: 'Minociclina',
        category: 'anfenicois-tetraciclinas',
        observations: 'Tetraciclina sintética com meia-vida mais longa. Bacteriostático.',
        brands: [
          'Minociclina — comprimido revestido 100 mg',
          'Genérico — comprimido revestido 100 mg',
        ],
        presentations: [
          { label: 'Comprimido revestido 100 mg' },
        ],
        doses: [
          {
            group: 'Crianças ≥ 8 anos',
            items: [
              { label: 'Dose usual', value: '4 mg/kg/dia ÷ 2 doses. Primeira dose dobrada.' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose inicial', value: '200 mg/dia em dose única' },
              { label: 'Manutenção', value: '100 mg/dose 2×/dia. Máx: 400 mg/dia' },
              { label: 'Acne', value: '50–100 mg/dose 2×/dia' },
              { label: 'Hanseníase — alternativa', value: '100 mg/dia + ofloxacino + rifampicina em dose diária' },
              { label: 'Insuficiência renal (ClCr < 80 mL/min)', value: 'Máx 200 mg/dia' },
              { label: 'Orientação', value: 'Não tomar com alimentos ou leite' },
            ],
          },
        ],
        sensitivity: {
          susceptible: [
            'Acinetobacter, Actinomyces, B. anthracis, Bartonella, B. recurrentis, Brucella, C. fetus',
            'Chlamydia, Clostridium, Cutibacterium, E. histolytica, E. aerogenes, E. coli, F. tularensis',
            'F. fusiforme, Klebsiella, L. monocytogenes, Microbacterium, Neisseria, Nocardia, Rickettsia',
            'Staphylococcus (incluindo SARM), S. pneumoniae, Shigella, Treponema, U. urealyticum',
            'V. cholerae, Y. pestis',
          ],
          resistant: [
            'Enterococcus, Proteus, Providencia, Pseudomonas, Serratia, S. agalactiae',
          ],
          warning: '',
        },
        sideEffects: [
          'Náusea, vômitos, diarreia, esofagite, vertigem, ataxia',
          'Alergia, erupção cutânea, fotossensibilização, anafilaxia',
          'Descoloração de dentes em < 8 anos, Síndrome de Stevens-Johnson',
          'Febre, insuficiência renal, disfunção hepática, eosinofilia, trombocitopenia',
          'Pneumonite por hipersensibilidade',
        ],
        contraindications: [],
      },

      {
        id: 'tetraciclina',
        name: 'Tetraciclina',
        category: 'anfenicois-tetraciclinas',
        observations: 'Bacteriostático de amplo espectro com boa disponibilidade oral. A absorção é melhor em jejum, mas a irritação gástrica é menor após as refeições. Alimentos e suplementos ricos em cálcio ou outros cátions divalentes pioram a absorção.',
        brands: [
          'Tetramed — cáps. 500 mg',
          'Tetraciclina — cáps. 250 mg',
          'MultiGran — cáps. 500 mg',
          'Genérico (cloridrato de tetraciclina) — cáps. 500 mg',
        ],
        presentations: [
          { label: 'Cápsula 250 mg' },
          { label: 'Cápsula 500 mg' },
        ],
        doses: [
          {
            group: 'Crianças ≥ 8 anos',
            items: [
              { label: 'Dose usual', value: '25–50 mg/kg/dia ÷ 4 doses' },
              { label: 'Balanditose', value: '40 mg/kg/dia ÷ 4 doses. Máx: 2 g/dia por 10 dias' },
              { label: 'Malária', value: '6,25 mg/kg/dose a cada 6 h por 7 dias. Máx: 250 mg/dose' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '250–500 mg/dose a cada 6 h. Máx: 2 g/dia' },
              { label: 'Acne grau III', value: 'Iniciar 1 g/dia ÷ 4 doses; reduzir para 250–500 mg/dia por 2–4 meses' },
              { label: 'Brucelose', value: '500 mg a cada 6 h por 3 semanas. Associar aminoglicosídeo' },
              { label: 'Balanditose', value: '500 mg/dose a cada 6 h por 10 dias' },
              { label: 'Cólera', value: '500 mg/dose a cada 6 h por 3 dias' },
              { label: 'Malária (alternativa)', value: '25 mg/kg/dia ÷ 4 doses ou 250 mg a cada 6 h por 7 dias (junto com quinina)' },
              { label: 'Dientamebíase', value: '10 mg/kg/dose a cada 6 h ou 500 mg a cada 6 h por 4 dias. Associar paromomicina ou iodoquinol' },
              { label: 'Helicobacter pylori', value: '500 mg/dose a cada 6 h (associado ao esquema terapêutico)' },
              { label: 'Colonização de delgado', value: '250–500 mg/dose a cada 6 h por 10 dias' },
              { label: 'Sífilis', value: '500 mg/dose a cada 6 h por 14 dias (28 dias na sífilis tardia)' },
              { label: 'Dermatites bolhosas', value: '500 mg/dose a cada 6 h' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'ClCr > 50 mL/min', value: 'A cada 8–12 horas' },
          { label: 'ClCr 10–50 mL/min', value: 'A cada 12–24 horas' },
          { label: 'ClCr < 10 mL/min', value: 'A cada 24 horas' },
        ],
        sensitivity: {
          susceptible: [
            'Acinetobacter, Actinomyces, Bacillus anthracis, Bacteroides, Bartonella bacilliformis',
            'B. pertussis, Borrelia, Brucella, Campylobacter fetus, Chlamydia trachomatis, Clostridium',
            'D. fragilis, Enterobacter aerogenes, E. coli, Francisella tularensis, Fusobacterium fusiforme',
            'H. influenzae, H. ducreyi, Klebsiella, Listeria monocytogenes, Mycoplasma pneumoniae, Moraxella',
            'Shigella, Staphylococcus aureus, Streptococcus pneumoniae, Streptococcus pyogenes',
            'T. pallidum, T. pertenue, Vibrio cholerae, Yersinia pestis',
            'Riquetsioses, psitacose, sífilis, amebíase extraintestinal (associada ao metronidazol), malária',
          ],
          resistant: [
            'Enterococcus, Proteus, Pseudomonas, Staphylococcus epidermidis, Serratia',
            'Boa parte das cepas de: Enterobacter, Neisseria gonorrhoeae, Salmonella',
          ],
          warning: '',
        },
        sideEffects: [
          'Descoloração de dentes em lactentes e crianças; descoloração no estômago durante gestação',
          'Anorexia, náusea, vômitos, diarreia, pirose, secura na boca, glossite, pancreatite, disfagia',
          'Enterocolite, proctite, hepatite, aumento de transaminases, rouquidão, melanoglossia pilosa',
          'Fotossensibilização, erupção cutânea, urticária, febre, Síndrome de Stevens-Johnson',
          'Hemólise, depressão medular, neutropenia, eosinofilia',
          'Pseudotumor cerebral / hipertensão intracraniana benigna, candidíase oral',
          'Medicamento vencido: nefrotoxicidade e síndrome similar à de Fanconi',
        ],
        contraindications: [
          'Menores de 8 anos',
          'Gestantes — provoca defeito permanente no esmalte dentário em formação',
        ],
      },

      {
        id: 'tianfenicol',
        name: 'Tianfenicol',
        category: 'anfenicois-tetraciclinas',
        observations: 'Anfenicol, análogo do cloranfenicol. A depressão medular transitória é mais frequente do que com o cloranfenicol, porém a aplasia é mais rara. Menos propenso a causar síndrome cinzenta.',
        brands: [
          'Glitisol — cáps. 500 mg; env. granulado 8 g; apresentação 2,5 g',
        ],
        presentations: [
          { label: 'Cápsula 500 mg' },
          { label: 'Envelope granulado 2,5 g e 8 g' },
        ],
        doses: [
          {
            group: 'Crianças',
            items: [
              { label: 'Dose usual', value: '30–100 mg/kg/dia ÷ 3 doses' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose usual', value: '500 mg/dose a cada 2–3 horas' },
              { label: 'Casos graves', value: 'Até 3 g/dia ÷ 4 doses' },
              { label: 'Gonorreia', value: '2,5 g/dia por 1–2 dias' },
              { label: 'Gonorreia complicada', value: '2,5 g no 1º dia, seguido de 2 g/dia por 4 dias' },
              { label: 'Clamídias', value: '2,5 g no 1º dia, seguido de 1 g/dia por 10 dias' },
            ],
          },
        ],
        renalAdjustment: [
          { label: 'ClCr > 30 mL/min', value: '500 mg/dose 2×/dia' },
          { label: 'ClCr 10–30 mL/min', value: '500 mg/dia' },
          { label: 'ClCr < 10 mL/min', value: 'Melhor evitar' },
        ],
        sensitivity: {
          susceptible: [
            'Maior ação bactericida para: Haemophilus e Neisseria',
            'Eficaz para: Mycoplasma, Chlamydia, Campylobacter, Legionella, Pasteurella, Vibrio cholerae',
          ],
          resistant: [],
          warning: '',
        },
        sideEffects: [
          'As mesmas do cloranfenicol',
          'Depressão medular transitória mais frequente que o cloranfenicol',
          'Aplasia mais rara que com o cloranfenicol',
          'Menos propenso a causar síndrome cinzenta',
        ],
        contraindications: [],
      },

      {
        id: 'tigeciclina',
        name: 'Tigeciclina',
        category: 'anfenicois-tetraciclinas',
        observations: 'Tetraciclina da classe das glicilciclinas, com espectro bem mais amplo que as outras do grupo. Ativa contra diversas bactérias resistentes, inclusive Staphylococcus resistentes. Mais usada em infecções de pele e tecidos moles e infecções intra-abdominais. Boa penetração pulmonar, SNC, ossos, biofilme e intracelular. Evitar uso quando existem alternativas sensíveis, para preservar sensibilidade.',
        brands: [
          'Tygacil — Fr. amp. 50 mg',
        ],
        presentations: [
          { label: 'Fr. amp. 50 mg' },
        ],
        doses: [
          {
            group: 'Crianças ≥ 8 anos',
            items: [
              { label: 'Dose usual', value: '1,2 mg/kg/dose a cada 12 h. Máx: 50 mg/dose. Eficácia e segurança não totalmente estabelecidas.' },
            ],
          },
          {
            group: 'Adultos',
            items: [
              { label: 'Dose inicial', value: '100 mg EV' },
              { label: 'Manutenção', value: '50 mg a cada 12 h por 5–14 dias (mínimo 7 dias em pneumonias)' },
              { label: 'Infusão', value: 'Em 30–60 min. Concentração máxima: 1 mg/mL' },
              { label: 'Insuficiência renal', value: 'Não exige ajuste' },
              { label: 'Insuficiência hepática grave', value: 'Manutenção com 25 mg/dose a cada 12 h' },
            ],
          },
        ],
        sensitivity: {
          susceptible: [
            'Acinetobacter baumannii, Bacteroides (incluindo B. fragilis, B. thetaiotaomicron, B. uniformis, B. vulgatus)',
            'C. perfringens, C. freundii, Chlamydia pneumoniae, E. coli, E. cloacae',
            'Enterococcus faecalis (sensível à vancomicina), Haemophilus influenzae, K. oxytoca, K. pneumoniae',
            'Legionella pneumophila, Mycoplasma pneumoniae, Peptostreptococcus micros',
            'Staphylococcus aureus (incluindo SARM), Streptococcus agalactiae, S. anginosus, S. constellatus, S. pneumoniae, S. pyogenes',
          ],
          resistant: [
            'Pseudomonas aeruginosa, cepas de Acinetobacter, Proteus',
          ],
          warning: 'Reduz o efeito de contraceptivos orais.',
        },
        sideEffects: [
          'Tontura, cefaleia, insônia, calafrios, fraqueza muscular, pseudotumor cerebral',
          'Erupção cutânea, prurido, fotossensibilização, anafilaxia',
          'Tosse, dispneia, náusea, vômitos, diarreia, dor abdominal, anorexia, dispepsia, constipação, oclusão intestinal',
          'Hipertensão, edema periférico, bradicardia',
          'Coagulopatia, aumento de TP e TTPA, eosinofilia, plaquetopenia, anemia, leucocitose',
          'Creatinina aumentada, bilirrubinas, hepatite colestática, transaminases aumentadas, pancreatite',
          'Hipotireoidismo, hipocalcemia, hipoglicemia, hipomagnesemia',
        ],
        contraindications: [],
      },
    ],
  },
];

const ANTIMICOBACTERIANOS_CATEGORY = {
  id: 'antimicobacterianos',
  label: 'Antimicobacterianos',
  color: 'amber-500',
  icon: '🧬',
  drugs: antimicobacterianos
};

const ANTIFUNGICOS_AZOLICOS_CATEGORY = {
  id: 'antifungicos-azolicos',
  label: 'Antifúngicos Azólicos',
  color: 'pink-500',
  icon: '🍄',
  drugs: antifungicosAzolicos
};

const ANTIFUNGICOS_POLIENICOS_CATEGORY = {
  id: 'antifungicos-polienicos',
  label: 'Antifúngicos Poliênicos',
  color: 'teal-500',
  icon: '🧪',
  drugs: antifungicosPolienicos,
};

const EQUINOCANDINAS_CATEGORY = {
  id: 'equinocandinas',
  label: 'Equinocandinas',
  color: 'indigo-500',
  icon: '💉',
  drugs: equinocandinas,
};

const OUTROS_ANTIFUNGICOS_CATEGORY = {
  id: 'outros-antifungicos',
  label: 'Outros Antifúngicos',
  color: 'amber-500',
  icon: '🔬',
  drugs: outrosAntifungicos,
};

const ANTIVIRAIS_HERPES_CATEGORY = {
  id: 'antivirais-herpes',
  label: 'Antivirais Anti-Herpes',
  color: 'purple-500',
  icon: '🦠',
  drugs: antiviraisHerpes,
};

const ANTIVIRAIS_INFLUENZA_CATEGORY = {
  id: 'antivirais-influenza',
  label: 'Antivirais Anti-Influenza',
  color: 'cyan-500',
  icon: '🤧',
  drugs: antiviraisInfluenza,
};

// Mescla Nifuroxazida e Polimixina B com a categoria principal de Outros Antibacterianos
const OUTROS_ANTIBACTERIANOS_MERGED = {
  ...OUTROS_ANTIBACTERIANOS_CATEGORY,
  drugs: [...OUTROS_ANTIBACTERIANOS_CATEGORY.drugs, ...outrosBacterianos],
};

export const ALL_CATEGORIES = [
  ...GUIDE_CATEGORIES,
  ...ADDITIONAL_CATEGORIES,
  PENICILINAS_CATEGORY,
  CARBAPENEMOS_CATEGORY,
  QUINOLONAS_CATEGORY,
  SULFONAMIDAS_CATEGORY,
  AMINOGLICOSIDEOS_CATEGORY,
  MACROLIDEOS_CATEGORY,
  GLICOPEPTIDEOS_CATEGORY,
  OUTROS_ANTIBACTERIANOS_MERGED,
  ANTIMICOBACTERIANOS_CATEGORY,
  ANTIFUNGICOS_AZOLICOS_CATEGORY,
  ANTIFUNGICOS_POLIENICOS_CATEGORY,
  EQUINOCANDINAS_CATEGORY,
  OUTROS_ANTIFUNGICOS_CATEGORY,
  ANTIVIRAIS_HERPES_CATEGORY,
  ANTIVIRAIS_INFLUENZA_CATEGORY,
  {
    id: 'anti-hepatite',
    label: 'Antivirais Anti-Hepatite',
    color: 'orange-500',
    icon: '🫀',
    drugs: antiHepatite,
  },
  {
    id: 'antirretrovirais-itrn',
    label: 'Antirretrovirais ITRN',
    color: 'red-500',
    icon: '💊',
    drugs: antirretroviraisITRN,
  },
  {
    id: 'antirretrovirais-itrnn',
    label: 'Antirretrovirais ITRNN',
    color: 'pink-500',
    icon: '🔴',
    drugs: antirretroviraisITRNN,
  },
  {
    id: 'antirretrovirais-ip',
    label: 'Antirretrovirais IP',
    color: 'purple-500',
    icon: '💉',
    drugs: antirretroviraisIP,
  },
  {
    id: 'antirretrovirais-outros',
    label: 'Antirretrovirais Outros',
    color: 'indigo-500',
    icon: '🧬',
    drugs: antirretroviraisOutros,
  },
  {
    id: 'antirretrovirais-associacoes',
    label: 'Antirretrovirais — Associações Anti-HIV',
    color: 'pink-500',
    icon: '🔗',
    drugs: antirretroviraisAssociacoes,
  },
  {
    id: 'antimalaricos',
    label: 'Antimaláricos',
    color: 'teal-500',
    icon: '🦟',
    drugs: antimalaricos,
  },
  {
    id: 'antiparasitarios',
    label: 'Antiparasitários',
    color: 'green-500',
    icon: '🪱',
    drugs: antiparasitarios,
  },
  {
    id: 'opioides',
    label: 'Analgésicos Opioides',
    color: 'red-500',
    icon: '💉',
    drugs: opioides,
  },
  {
    id: 'enxaqueca',
    label: 'Analgésicos para Enxaqueca',
    color: 'purple-500',
    icon: '🧠',
    drugs: analgesicoEnxaqueca,
  },
  {
    id: 'aines',
    label: 'Anti-inflamatórios (AINEs)',
    color: 'orange-500',
    icon: '🔥',
    drugs: ainesDrugs,
  },
  {
    id: 'corticosteroides',
    label: 'Corticosteroides Sistêmicos',
    color: 'amber-500',
    icon: '🟡',
    drugs: corticosteroides,
  },
  {
    id: 'antihistaminicos',
    label: 'Anti-histamínicos',
    color: 'cyan-500',
    icon: '💊',
    drugs: [...antihistaminicos, ...angioedemaHereditario, ...antihistDescongestionantes],
  },
  {
    id: 'antitussigenos-mucoliticos',
    label: 'Antitussígenos e Mucolíticos',
    color: 'teal-500',
    icon: '🫁',
    drugs: [...antitussigenos, ...mucoliticos, ...colutoriosTopicos],
  },
  {
    id: 'antiespasmadicos-antieméticos',
    label: 'Antiespasmódicos e Antieméticos',
    color: 'lime-500',
    icon: '🫃',
    drugs: [...antiespasmódicos, ...antieméticos],
  },
  {
    id: 'gastro',
    label: 'Antiácidos, Antagonistas H2 e IBP',
    color: 'amber-500',
    icon: '🫀',
    drugs: [...antiacidos, ...antagonistasH2, ...ibp],
  },
  {
    id: 'laxantes-antidiarreicos',
    label: 'Laxantes e Antidiarreicos',
    color: 'green-500',
    icon: '🌿',
    drugs: [...antiflatulentes, ...laxantesFibras, ...laxantesCatarticos, ...antidiarreicos],
  },
  {
    id: 'probioticos-proctologicos-gastro',
    label: 'Probióticos, Proctológicos e Outras Drogas em Gastroenterologia',
    color: 'pink-500',
    icon: '🦠',
    drugs: [...probioticos, ...proctologicos, ...outrasGastro],
  },
  {
    id: 'vitaminas-minerais',
    label: 'Vitaminas e Suplementos Minerais',
    color: 'yellow-500',
    icon: '🌟',
    drugs: [...vitaminas, ...minerais],
  },
  {
    id: 'reidratacao-apetite-obesidade',
    label: 'Reidratação Oral, Apetite e Obesidade',
    color: 'cyan-500',
    icon: '💧',
    drugs: [...reidratacaoOral, ...estimulantesApetite, ...auxiliaresObesidade],
  },
  {
    id: 'antianemicos-imuno',
    label: 'Antianêmicos e Imunoestimulantes',
    color: 'red-500',
    icon: '🩸',
    drugs: [...antianemicos, ...imunoestimulantes],
  },
  {
    id: 'emergencia',
    label: 'Drogas de Emergência',
    color: 'red-500',
    icon: '🚨',
    drugs: [...emergenciaAnticolinergicos, ...emergenciaAlcalinizantes, ...emergenciaVasoativos],
  },
  {
    id: 'anti-hemorragicos',
    label: 'Anti-hemorrágicos',
    color: 'red-500',
    icon: '🩸',
    drugs: antiHemorragicos,
  },
  {
    id: 'expansores-coloides',
    label: 'Expansores Plasmáticos Coloides',
    color: 'blue-500',
    icon: '💧',
    drugs: expansoresColoides,
  },
  {
    id: 'hipotensao',
    label: 'Tratamento da Hipotensão Sintomática',
    color: 'orange-500',
    icon: '📉',
    drugs: hipotensao,
  },
  {
    id: 'antagonistas-antidotos',
    label: 'Antagonistas e Antídotos',
    color: 'teal-500',
    icon: '🧫',
    drugs: antagonistasAntidotos,
  },
  {
    id: 'anti-hipertensivos-ieca',
    label: 'Anti-hipertensivos — IECAs',
    color: 'indigo-500',
    icon: '🫀',
    drugs: iecaDrugs,
  },
  {
    id: 'anestesicos-sistemicos',
    label: 'Anestésicos Sistêmicos',
    color: 'purple-500',
    icon: '💉',
    drugs: anestesicosSistemicos,
  },
  {
    id: 'anestesicos-locais',
    label: 'Anestésicos Locais',
    color: 'teal-500',
    icon: '🩹',
    drugs: anestesicosLocais,
  },
  {
    id: 'curares-bloqueadores-neuromusculares',
    label: 'Curares — Bloqueadores Neuromusculares',
    color: 'amber-500',
    icon: '🧬',
    drugs: curares,
  },
  {
    id: 'anti-hipertensivos-outros',
    label: 'Anti-hipertensivos — Outros (Alisquireno, Diazóxido, Fenoldopam, Fentolamina)',
    color: 'red-500',
    icon: '🫀',
    drugs: antiHipertensivosOutros,
  },
  {
    id: 'anti-hipertensivos-vasodilatadores',
    label: 'Anti-hipertensivos — Vasodilatadores',
    color: 'orange-500',
    icon: '🩺',
    drugs: antiHipertensivosVasodilatadores,
  },
  {
    id: 'anti-hipertensivos-alfa-bloqueadores',
    label: 'Anti-hipertensivos — Alfa-bloqueadores',
    color: 'purple-500',
    icon: '⚕️',
    drugs: antiHipertensivosAlfaBloqueadores,
  },
  {
    id: 'anti-hipertensivos-alfa-agonistas',
    label: 'Anti-hipertensivos — Alfa-agonistas Centrais',
    color: 'teal-500',
    icon: '🧠',
    drugs: antiHipertensivosAlfaAgonistas,
  },
  {
    id: 'anti-hipertensivos-betabloqueadores',
    label: 'Anti-hipertensivos — Betabloqueadores',
    color: 'indigo-500',
    icon: '❤️',
    drugs: antiHipertensivosBetaBloqueadores,
  },
  {
    id: 'antagonistas-calcio',
    label: 'Anti-hipertensivos — Antagonistas do Cálcio',
    color: 'cyan-500',
    icon: '🫀',
    drugs: antagonistasCalcio,
  },
  {
    id: 'diureticos-tiazidicos',
    label: 'Diuréticos Tiazídicos',
    color: 'blue-500',
    icon: '💧',
    drugs: diureticosTiazidicos,
  },
  {
    id: 'diureticos-alca',
    label: 'Diuréticos de Alça',
    color: 'teal-500',
    icon: '🌊',
    drugs: diureticosAlca,
  },
  {
    id: 'diureticos-poupadores',
    label: 'Diuréticos Poupadores de Potássio',
    color: 'green-500',
    icon: '🧪',
    drugs: diureticosPoupadores,
  },
  {
    id: 'outros-diureticos',
    label: 'Outros Diuréticos (Acetazolamida, Manitol, Metolazona)',
    color: 'indigo-500',
    icon: '⚗️',
    drugs: outrosDiureticos,
  },
];

export function getAllGuideDrugs() {
  return ALL_CATEGORIES.flatMap(cat => cat.drugs.map(d => ({ ...d, catLabel: cat.label, catColor: cat.color, catIcon: cat.icon })));
}
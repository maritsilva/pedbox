// Tópicos Oftalmológicos — Prevenção de Conjuntivite Neonatal, Antivirais, Glaucoma, Anti-inflamatórios e Antimicrobianos

export const prevencaoConjuntiviteNeonatal = [
  {
    id: 'iodopovidona',
    name: 'Iodopovidona (PVPI)',
    category: 'oftalmologia-prevencao',
    observations: 'Eficaz para conjuntivite gonocócica, clamídia e herpes. Diminui muito o risco de infecções importantes se usada à beira do parto. Cuidado: não usar solução detergente de PVPI (causa grave lesão ocular).',
    brands: ['Mandar formular colírio a 2,5%'],
    presentations: [{ label: 'Colírio 2,5%' }],
    doses: [
      {
        group: 'Neonatos',
        items: [
          { label: 'Modo de usar', value: 'Após cuidados iniciais, aplicar uma gota do colírio ou pomada no saco conjuntival inferior. Massagear levemente as pálpebras por um minuto e secar o excesso com algodão ou gaze. Evitar aplicar antes de 1-2 minutos.' },
        ],
      },
    ],
    stability: 'Estável por até 30 dias',
    sideEffects: ['Rara: lesão ocular grave se usar solução detergente'],
    contraindications: [],
  },

  {
    id: 'nitrato-prata',
    name: 'Nitrato de Prata (Credé clássico)',
    category: 'oftalmologia-prevencao',
    observations: 'Conjuntivite gonocócica é a mais temida. Conjuntivite irritativa é frequente. Concentrações > 1% causam conjuntivite grave. Método não é usado comercialmente no Brasil atualmente.',
    brands: ['Mandar formular colírio a 1%'],
    presentations: [{ label: 'Colírio 1%' }],
    doses: [
      {
        group: 'Neonatos',
        items: [
          { label: 'Aplicação', value: 'Uma gota no saco conjuntival inferior' },
        ],
      },
    ],
    stability: 'Solução instável. Fica mais concentrada por evaporação. Trocar semanalmente.',
    sideEffects: ['Conjuntivite irritativa'],
    contraindications: [],
  },

  {
    id: 'tetraciclina-oftalmologia',
    name: 'Tetraciclina',
    category: 'oftalmologia-prevencao',
    brands: ['Cinatrex (Allerga) — Pom. oftálmica 0,5%'],
    presentations: [{ label: 'Pomada oftálmica 0,5%' }],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'vitelinato-prata',
    name: 'Vitelinato de Prata',
    category: 'oftalmologia-prevencao',
    observations: 'Pouco irritante e menos eficaz que nitrato de prata. Ineficaz contra clamídia. Apesar do uso corrente, não existe embasamento científico suficiente para essa indicação.',
    brands: ['Argirol Oculum (Allergan) — Solução a 10%'],
    presentations: [{ label: 'Solução 10%' }],
    sideEffects: [],
    contraindications: [],
  },
];

export const antiviraisOftalmologia = [
  {
    id: 'aciclovir-oftalmologia',
    name: 'Aciclovir',
    category: 'oftalmologia-antivirais',
    observations: 'Para herpes oftálmico',
    brands: ['Zovirax (GSK) / Antivirax (EMS) / Hervirax (Pharlab) — Pomada oftálmica a 3%'],
    presentations: [{ label: 'Pomada oftálmica 3%' }],
    doses: [
      {
        group: 'Adultos e crianças > 4 anos',
        items: [
          { label: 'Dose', value: '1 cm da pomada/dose a cada 4 horas durante o dia (5 vezes/dia), até 3 dias depois da cicatrização' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'ganciclovir',
    name: 'Ganciclovir',
    category: 'oftalmologia-antivirais',
    observations: 'Não disponível no Brasil',
    brands: ['Zirgan (Bausch) — Gel oftálmico a 0,15%'],
    presentations: [{ label: 'Gel oftálmico 0,15%' }],
    doses: [
      {
        group: 'Adultos e crianças > 2 anos',
        items: [
          { label: 'Ceratite: durante o dia', value: '1 gota/dose a cada 3-4 horas (5 vezes/dia)' },
          { label: 'Após cicatrização', value: '1 gota/dose × 3 por 7 dias' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
      renalAdjustment: [
      { label: "Ajuste renal (Lexicomp)", value: "Infants, Children and Adolescents: There are no specific pediatric recommen-dations; based on experience in adult patients, dosage adjustment necessary." },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Parenteral: Reconsti-tute 500 mg vial with 10 mL SWFI not bacteriostatic water because parabens may cause precipitation. Further dilute in DSW or NS to a final concentration <10 mg/mL.",
      monitoring: "CBC with differential and plate-let count, urine output, serum creatinine, ophthalmologic exams, liver enzyme tests, blood pressure, urinalysis",
  },

  {
    id: 'trifluridina',
    name: 'Trifluridina',
    category: 'oftalmologia-antivirais',
    observations: 'Não disponível no Brasil',
    brands: ['Colírio a 1%'],
    presentations: [{ label: 'Colírio 1%' }],
    doses: [
      {
        group: 'Adultos e crianças > 6 anos',
        items: [
          { label: 'Dose usual', value: '1 gota/dose a cada 2 horas durante o dia (9 vezes/dia)' },
          { label: 'Após cicatrização', value: '1 gota/dose a cada 12 horas' },
          { label: 'Máximo', value: '21 dias de tratamento' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Ophthalmic: Wash hands before and after instillation. Avoid contact of bottle tip with skin or eye; instill drops onto the cornea of the affected eye(s). Apply gentle pressure to lacrimal sac during and immediately following instillation (1 minute) or instruct patient to gently close eyelid after administration, to decrease systemic absorption of o...",
      monitoring: "Ophthalmologic exam (test for corneal staining with fluorescein or rose Bengal)",
  },
];

export const glaucomaOftalmologia = [
  {
    id: 'betaxolol-oftalmologia',
    name: 'Betaxolol',
    category: 'oftalmologia-glaucoma',
    observations: 'β-bloqueador β1 seletivo',
    brands: ['Betoptic (Novartis) / Presmin (Libbs) / Visoptic (Biolab) / Betoptic S (Novartis) / Betamon (UmãoQuímica)'],
    presentations: [{ label: 'Colírio 0,5%' }, { label: 'Colírio 0,25%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 a 2 gotas/dose × 2' },
        ],
      },
    ],
    sideEffects: ['Efeitos sistêmicos: broncoconstrição, piora de bloqueio AV, bradicardia, arritmia, síncope'],
    contraindications: [],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Ophthalmic: Administer other topically applied ophthalmic medications at least 10 minutes before Betopic S; wash hands before use; invert closed bottle and shake bottle; remove cap carefully so that tip does not touch anything; hold bottle between thumb and index finger; use index finger of other hand to pull down the lower eyelid to form a pocket ...",
      monitoring: "Intraocular pressure",
  },

  {
    id: 'bimatoprosta',
    name: 'Bimatoprosta',
    category: 'oftalmologia-glaucoma',
    observations: 'Análogo prostaglandina F2α. Não usar em gestantes.',
    brands: ['Lumigan (Allergan) / Glamigan (Legrand) / Latisse (Allergan) / Topgant (Cristália)'],
    presentations: [{ label: 'Colírio 0,03%' }, { label: 'Colírio 0,01%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Glaucoma', value: '1 gota/dose ÷ 1, à noite' },
          { label: 'Hipotricose palpebral (Latisse)', value: 'Aplicar com aplicador na pele da pálpebra superior, na base dos cílios' },
        ],
      },
    ],
    sideEffects: ['Escurecimento de cílios e iris'],
    contraindications: ['Gestantes'],
  },

  {
    id: 'brimonidina',
    name: 'Brimonidina',
    category: 'oftalmologia-glaucoma',
    observations: 'Agonista α2 seletivo',
    brands: ['Alphagan (Allergan) / Glaub (UmãoQuímica) / Alphagan P (Allergan)'],
    presentations: [{ label: 'Colírio 0,2%' }, { label: 'Colírio 0,15%' }, { label: 'Colírio 0,1%' }],
    doses: [
      {
        group: 'Adultos e crianças > 2 anos',
        items: [
          { label: 'Dose', value: '1 gota/dose × 2 a 3' },
        ],
      },
    ],
    sideEffects: ['Sonolência, piora insuficiência coronariana ou cerebral, fenômeno de Raynaud'],
    contraindications: [],
  },

  {
    id: 'brinzolamida',
    name: 'Brinzolamida',
    category: 'oftalmologia-glaucoma',
    observations: 'Inibidor da anidrase carbônica',
    brands: ['Azopt (Novartis) — Colírio 1%'],
    presentations: [{ label: 'Colírio 1%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 gota/dose × 2 a 3' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' }],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'dorzolamida',
    name: 'Dorzolamida',
    category: 'oftalmologia-glaucoma',
    observations: 'Inibidor da anidrase carbônica',
    brands: ['Trusopt (MSD) / Ocupress (UmãoQuímica) / Dorzal (Legrand)'],
    presentations: [{ label: 'Colírio 2%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 gota/dose × 2 a 3' },
        ],
      },
    ],
    renalAdjustment: [{ label: 'ClCr < 30 mL/min', value: 'Uso não recomendado' }],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'latanoprosta',
    name: 'Latanoprosta',
    category: 'oftalmologia-glaucoma',
    observations: 'Análogo da prostaglandina. Não usar em gestantes.',
    brands: ['Xalatan (Pfizer) / Arulatan (Macrofit) / Drenatan (Cosmed)'],
    presentations: [{ label: 'Colírio 0,005%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 gota/dose ÷ 1, à noite' },
        ],
      },
    ],
    sideEffects: ['Escurecimento de cílios e iris'],
    contraindications: ['Gestantes'],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Ophthalmic: Wash hands before use. Unscrew the cap by turning in the direction of the arrows on top of the cap. Pull lower eyelid down slightly to form a pocket for the eye drop and tilt head back; administer 1 drop. Apply gentle pressure to lacrimal sac immediately following instillation (1 minute) or instruct patient to gently close eyelid after ...",
  },

  {
    id: 'timolol-oftalmologia',
    name: 'Timolol',
    category: 'oftalmologia-glaucoma',
    observations: 'β-bloqueador não seletivo',
    brands: ['Timoptol (MSD) / Glaucotrat (UmãoQuímica) / Glautimol (Novartis)'],
    presentations: [{ label: 'Gel oft. 0,5%' }, { label: 'Colírio 0,5%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Inicial', value: '1 gota a 0,25%, 2 vezes ao dia' },
          { label: 'Aumento se necessário', value: '1 gota a 0,5%, 2 vezes ao dia' },
          { label: 'Manutenção', value: '1 gota a 0,5%, 1 vez ao dia' },
        ],
      },
    ],
    sideEffects: ['Efeitos sistêmicos: broncoconstrição, bradicardia, arritmia'],
    contraindications: [],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Ophthalmic: Administer other topically applied ophthalmic medications at least 10 minutes prior to timolol Wash hands before use; invert closed bottle and shake gel once before use; remove cap carefully so that tip does not touch anything; hold bottle between thumb and index finger; use index finger of other hand to pull down the lower eyelid to fo...",
      monitoring: "Monitor IOP; systemic beta-blocker effects including vital signs (especially in younger patients)",
  },

  {
    id: 'travoprosta',
    name: 'Travoprosta',
    category: 'oftalmologia-glaucoma',
    observations: 'Análogo prostaglandina F2α. Não usar em gestantes.',
    brands: ['Travatan (Novartis) / Travamed (Cosmed)'],
    presentations: [{ label: 'Colírio 0,004%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 gota/dose ÷ 1, à noite' },
        ],
      },
    ],
    sideEffects: ['Escurecimento de cílios e iris'],
    contraindications: ['Gestantes'],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Travoprost may be used with other eye drops to lower intraocular pressure. If using more than one ophthalmic product, wait at least 5 minutes in between application of each medication. Apply gentle pressure to lacrimal sac immediately following instillation (1 minute) or instruct patient to gently close eyelid after administration to decrease syste...",
  },

  {
    id: 'pilocarpina',
    name: 'Pilocarpina',
    category: 'oftalmologia-glaucoma',
    observations: 'Agonista colinérgico',
    brands: ['Pilocarpina (Allergan) / Pilocan (Latinofarma)'],
    presentations: [{ label: 'Colírio 1%' }, { label: 'Colírio 2%' }, { label: 'Colírio 4%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 gota/dose × 3 a 4' },
          { label: 'Início', value: 'Iniciar com 1% e aumentar conforme necessidade' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },
];

export const antiinflamatoriasAntialerogicasOftalmologia = [
  {
    id: 'dexametasona-oftalmologia',
    name: 'Dexametasona',
    category: 'oftalmologia-anti-inflamatorio',
    brands: ['Maxidex (Novartis) — Colírio e pomada 0,1% / Ozurdex (Allergan) — Implante 0,7 mg'],
    presentations: [{ label: 'Colírio 0,1%' }, { label: 'Pomada 0,1%' }, { label: 'Implante intravítree 0,7 mg' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Colírio', value: '1 a 2 gotas/dose × 4 a 6' },
          { label: 'Pomada', value: 'Aplicar 1 cm/dose × 3 a 4' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'prednisolona-oftalmologia',
    name: 'Prednisolona',
    category: 'oftalmologia-anti-inflamatorio',
    brands: ['Pred Fort (Allergan) / Ster (UmãoQuímica) — Colírio 1%'],
    presentations: [{ label: 'Colírio 1%' }, { label: 'Suspensão 0,12%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 a 2 gotas/dose × 2 a 4 (iniciar com até 2 gotas a cada 2 horas por 1-2 dias)' },
        ],
      },
      {
        group: 'Crianças',
        items: [
          { label: 'Preferência', value: 'Usar suspensão a 0,12%' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'cetorolaco-oftalmologia',
    name: 'Trometamol cetorolaco',
    category: 'oftalmologia-anti-inflamatorio',
    brands: ['Acular (Allergan) / Cetrolac (UmãoQuímica)'],
    presentations: [{ label: 'Colírio 0,4%' }, { label: 'Colírio 0,5%' }],
    doses: [
      {
        group: 'Adultos e crianças > 2 anos',
        items: [
          { label: 'Dose usual', value: '1 gota/dose × 4' },
          { label: 'Pós-operatório', value: 'Começar 1 dia após procedimento, manter 4-14 dias' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'diclofenaco-oftalmologia',
    name: 'Diclofenaco',
    category: 'oftalmologia-anti-inflamatorio',
    brands: ['Maxilerg (Latinofarma) / Still (Allergan) — Colírio 0,1%'],
    presentations: [{ label: 'Colírio 0,1%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Conjuntivites', value: '1 gota/dose × 4 a 5' },
          { label: 'Pós-operatório catarata', value: 'Começar 1 dia após, manter 14 dias' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },
];

export const antimicrobianoOftalmologia = [
  {
    id: 'ciprofloxacino-oftalmologia',
    name: 'Ciprofloxacino',
    category: 'oftalmologia-antimicrobiano',
    brands: ['Biamotil (Allergan) / Ciloxan (Novartis) / Maxiflox (Legrand) — Colírio 0,3%'],
    presentations: [{ label: 'Colírio 0,3%' }, { label: 'Pomada oftálmica 0,3%' }],
    doses: [
      {
        group: 'Conjuntivites',
        items: [
          { label: 'Dose', value: '1 a 2 gotas no olho afetado a cada 1-2 horas por 48-72 horas, depois cada 4-6 horas até 7 dias' },
        ],
      },
      {
        group: 'Ceratite/úlcera de córnea',
        items: [
          { label: 'Intensivo', value: '1 gota a cada 5 min, depois cada 15 min, depois cada hora por 1-2 dias' },
          { label: 'Seguimento', value: '1-2 gotas/dose até 14 dias ou cicatrização' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Ophthalmic: For topical use only. Avoid contacting tip with skin or eye. Ointment: Instill ointment in the lower conjunctival sac. Solution: Apply gentle pressure to lacrimal sac during and for 1 to 2 minutes after instillation or instruct patient to gently close eyelid after administration to decrease risk of absorption and systemic effects (Urrti...",
  },

  {
    id: 'gatifloxacino-oftalmologia',
    name: 'Gatifloxacino',
    category: 'oftalmologia-antimicrobiano',
    brands: ['Zymar (Allergan) — Colírio 0,3% / Zymar XD (Allergan) — Colírio 0,5%'],
    presentations: [{ label: 'Colírio 0,3%' }, { label: 'Colírio 0,5%' }],
    doses: [
      {
        group: 'Adultos e crianças',
        items: [
          { label: 'Conjuntivites', value: '1 a 2 gotas/dose × 4 a 6' },
          { label: 'Máximo', value: '8 aplicações/dia' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "For topical ophthalmic use only; avoid touching tip of applicator to eye, fingers, or other surfaces. Apply finger pressure to lacrimal sac during and for 1 to 2 minutes after instillation to decrease risk of absorption and systemic effects.",
      monitoring: "Signs of infection",
  },

  {
    id: 'gentamicina-oftalmologia',
    name: 'Gentamicina',
    category: 'oftalmologia-antimicrobiano',
    brands: ['Gentamicina (Allergan) — Colírio 0,5%'],
    presentations: [{ label: 'Colírio 0,5%' }],
    doses: [
      {
        group: 'Conjuntivites',
        items: [
          { label: 'Dose', value: '1 a 2 gotas/dose × 4 a 6' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },

  {
    id: 'tobramicina-oftalmologia',
    name: 'Tobramicina',
    category: 'oftalmologia-antimicrobiano',
    brands: ['Tobrex (Novartis) / Tobracin (Latinofarma) — Colírio e pomada 0,3%'],
    presentations: [{ label: 'Colírio 0,3%' }, { label: 'Pomada oftálmica 0,3%' }],
    doses: [
      {
        group: 'Conjuntivites',
        items: [
          { label: 'Dose', value: '1 a 2 gotas/dose × 4 a 6. Pomada: 1 cm/dose × 3 por 2 dias, depois × 2' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: ['Evitar em crianças com menos de 2 anos'],
  },

  {
    id: 'moxifloxacino-oftalmologia',
    name: 'Moxifloxacino',
    category: 'oftalmologia-antimicrobiano',
    brands: ['Vigamox (Novartis) — Colírio'],
    presentations: [{ label: 'Colírio' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose usual', value: '1 gota/dose × 3' },
          { label: 'Profilático em cirurgias', value: '1 gota a cada 5-15 min, 1 hora antes' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "For topical ophthalmic use only; not for injection. Avoid touching tip of applicator to eye, finger, or other surfaces. Apply gentle pressure to lacrimal sac during and immediately following instillation (1 minute) or instruct patient to gently close eyelid after administration, to decrease systemic absorption of ophthalmic drops (Urtti 1993; Zimme...",
      monitoring: "Signs of infection",
  },

  {
    id: 'besifloxacino-oftalmologia',
    name: 'Besifloxacino',
    category: 'oftalmologia-antimicrobiano',
    brands: ['Besivance (Bausch) — Colírio 0,6%'],
    presentations: [{ label: 'Colírio 0,6%' }],
    doses: [
      {
        group: 'Adultos',
        items: [
          { label: 'Dose', value: '1 gota/dose × 3' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
      renalAdjustment: [
      { label: "Insuficiência renal", value: "Geralmente não requer ajuste de dose" },
    ],
      hepaticAdjustment: "Sem recomendação de ajuste específico na bula; monitorar função clínica.",
      preparation: "Ophthalmic: For topical ophthalmic use only. Wash hands before and after instillation. Invert bottle while closed and shake bottle once prior to each admin-istration. Avoid contaminating the applicator tip with affected eye(s), fingers, or other sources.",
      monitoring: "Signs and symptoms of infection or hypersensitivity reaction",
  },

  {
    id: 'ofloxacino-oftalmologia',
    name: 'Ofloxacino',
    category: 'oftalmologia-antimicrobiano',
    brands: ['Oflox (Allergan) / Nostil (Latinofarma) — Colírio 0,3%'],
    presentations: [{ label: 'Colírio 0,3%' }],
    doses: [
      {
        group: 'Conjuntivites/úlcera',
        items: [
          { label: 'Conjuntivites', value: '1 a 2 gotas/dose a cada 1-2 horas por 48-72 horas, depois cada 4-6h' },
          { label: 'Ceratite', value: 'Intensivo: cada 5-15 min depois cada hora por 1-2 dias' },
        ],
      },
    ],
    sideEffects: [],
    contraindications: [],
  },
];
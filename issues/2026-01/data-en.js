// =================================================================
// ISSUE DATA: JANUARY-FEBRUARY 2026 (ENGLISH VERSION)
// =================================================================

const sdgData = [
  {id:"SDG 1",  name:"SDG 1: No Poverty",                                out:49,   fwci:0.61, cit:135,  color:'#E5243B'},
  {id:"SDG 2",  name:"SDG 2: Zero Hunger",                               out:283,  fwci:2.01, cit:4000, color:'#DDA63A'},
  {id:"SDG 3",  name:"SDG 3: Good Health and Well-being",                out:2027, fwci:0.58, cit:9850, color:'#4C9F38'},
  {id:"SDG 4",  name:"SDG 4: Quality Education",                         out:261,  fwci:0.96, cit:1189, color:'#C5192D'},
  {id:"SDG 5",  name:"SDG 5: Gender Equality",                           out:60,   fwci:0.98, cit:254,  color:'#FF3A21'},
  {id:"SDG 6",  name:"SDG 6: Clean Water and Sanitation",                out:175,  fwci:1.65, cit:2362, color:'#26BDE2'},
  {id:"SDG 7",  name:"SDG 7: Affordable and Clean Energy",               out:333,  fwci:1.72, cit:6425, color:'#FCC30B'},
  {id:"SDG 8",  name:"SDG 8: Decent Work and Economic Growth",           out:392,  fwci:1.18, cit:3164, color:'#A21942'},
  {id:"SDG 9",  name:"SDG 9: Industry, Innovation and Infrastructure",   out:500,  fwci:1.00, cit:3977, color:'#FD6925'},
  {id:"SDG 10", name:"SDG 10: Reduced Inequality",                       out:206,  fwci:0.65, cit:617,  color:'#DD1367'},
  {id:"SDG 11", name:"SDG 11: Sustainable Cities and Communities",       out:222,  fwci:1.31, cit:1832, color:'#FD9D24'},
  {id:"SDG 12", name:"SDG 12: Responsible Consumption and Production",   out:245,  fwci:1.78, cit:3282, color:'#BF8B2E'},
  {id:"SDG 13", name:"SDG 13: Climate Action",                           out:303,  fwci:2.18, cit:5789, color:'#3F7E44'},
  {id:"SDG 14", name:"SDG 14: Life Below Water",                         out:104,  fwci:2.13, cit:1220, color:'#0A97D9'},
  {id:"SDG 15", name:"SDG 15: Life on Land",                             out:176,  fwci:2.11, cit:2703, color:'#56C02B'},
  {id:"SDG 16", name:"SDG 16: Peace, Justice and Strong Institutions",   out:134,  fwci:0.72, cit:268,  color:'#00689D'},
  {id:"SDG 17", name:"SDG 17: Partnerships for the Goals",               out:163,  fwci:0.52, cit:276,  color:'#19486A'}
];

const frontiersData = [
  {name:"Microplastics as Environmental Pollutants and Risks",            id:"T.8",    desc:"Study of the distribution of microplastics in the environment, its impact on ecosystems, animals, and human health, as well as the development of cleaning methods.",                                                                                     pct:"100.000", wPub:25009, rPub:264, wFwci:2.06, rFwci:1.26, share:"1.06"},
  {name:"Interconnections of Economic Growth and Carbon Emissions",        id:"T.252",  desc:"Research on the balance between economic development and environmental consequences, particularly greenhouse gas emissions and climate change.",                                                                                              pct:"99.999",  wPub:15025, rPub:379, wFwci:2.60, rFwci:3.35, share:"2.52"},
  {name:"Innovative Electrocatalysts for Hydrogen and Oxygen Production",  id:"T.1",    desc:"Development of new catalysts to accelerate chemical reactions for producing clean hydrogen and oxygen (e.g., through water splitting).",                                                                                     pct:"99.998",  wPub:19107, rPub:233, wFwci:2.06, rFwci:2.87, share:"1.22"},
  {name:"Aqueous Zinc Ion Battery Technology",                              id:"T.2295", desc:"Creation of safe, low-cost, and eco-friendly batteries based on zinc and aqueous electrolytes as a promising alternative to lithium-ion batteries.",                                                                                     pct:"99.997",  wPub:11482, rPub:37,  wFwci:2.91, rFwci:1.52, share:"0.32"},
  {name:"Transformative Approaches in Language Model Performance",         id:"T.462",  desc:"Development of AI architectures (such as transformers) that improve context understanding and natural language generation by large language models (LLMs).",                                                                                          pct:"99.996",  wPub:27879, rPub:221, wFwci:2.85, rFwci:1.87, share:"0.79"},
  {name:"Innovative Deep Learning Techniques for Object Detection",        id:"T.0",    desc:"Advanced computer vision and neural network algorithms that allow systems to quickly and accurately recognize and localize objects in images and videos.",                                                                                   pct:"99.995",  wPub:38351, rPub:203, wFwci:1.42, rFwci:0.70, share:"0.53"},
  {name:"Perovskite Solar Cell Technologies",                               id:"T.3",    desc:"Development of next-generation solar cells based on perovskites, which promise to be cheaper to produce and highly efficient.",                                                                                    pct:"99.994",  wPub:12332, rPub:193, wFwci:1.82, rFwci:1.42, share:"1.57"},
  {name:"Catalytic Activation of Persulfate for Pollutant Degradation",   id:"T.288",  desc:"Chemical methods for treating wastewater and soils from persistent organic pollutants using activated persulfate.",                                                                                                     pct:"99.993",  wPub:11494, rPub:41,  wFwci:2.03, rFwci:1.70, share:"0.36"},
  {name:"Electrocatalytic Carbon Dioxide Reduction Innovations",           id:"T.264",  desc:"Technologies for converting greenhouse gas (CO₂) into useful chemicals and eco-friendly fuels using electricity and catalysts.",                                                                                              pct:"99.992",  wPub:9571,  rPub:55,  wFwci:2.02, rFwci:2.01, share:"0.57"},
  {name:"Corporate Social Responsibility and Financial Performance",       id:"T.995",  desc:"Study of how corporate social and environmental responsibility (ESG practices) affects their economic performance and attractiveness to investors.",                                                                              pct:"99.990",  wPub:9010,  rPub:149, wFwci:2.13, rFwci:1.12, share:"1.65"}
];

const subjectData = {
  categories: ["Physical Sciences","Medical and Health","Engineering","Life Sciences","Arts and Humanities","Computer Science","Social Sciences","Education Studies","Business and Economics","Psychology","Law"],
  output:     [4165,3791,2510,2376,1224,1213,1115,500,368,155,110],
  fwci:       [0.95,0.45,0.78,1.09,0.86,0.71,0.87,0.99,0.71,0.91,0.27],
  citations:  [32852,12255,19107,20964,2222,6467,3225,1878,1695,554,110]
};

const ridData = [
    {"id": "52406", "type": "Invention", "title": "Method of protection against biofouling using a coating of polyvinyl formal and silver nanoparticles", "authors": "Mazina S.E., Pichugina E.K., Mazin G.M., Fedorov A.S., Kozlova E.V. (Institute of Ecology)", "date": "2026"},
    {"id": "2854905", "type": "Invention", "title": "Method for encapsulating L-lysine-α-oxidase into extracellular erythrocyte vesicles for antitumor therapy", "authors": "Abo Kura L., Babaeva G.A., Pokrovsky V.S. (Medical Institute, Research Institute of Molecular and Cellular Medicine)", "date": "2026"},
    {"id": "2855464", "type": "Invention", "title": "Method for obtaining a tissue-engineered in vitro model of the human intestinal villus wall", "authors": "Arutyunyan I.V., Podoprigora I.V., Soboleva A.G., Fatkhudinov T.Kh., Makarov A.V. et al. (Medical Institute, Research Institute of Molecular and Cellular Medicine)", "date": "2026"},
    {"id": "241025", "type": "Utility Model", "title": "Guiding device for pin insertion in osteosynthesis of femoral neck fractures", "authors": "Nazarov D.S., Ayrapetov G.A., Zagorodniy N.V., Lukin M.P. et al. (Medical Institute, Department of Traumatology and Orthopedics)", "date": "2026"},
    {"id": "31441", "type": "Industrial Design", "title": "Landscaping element (street trash can)", "authors": "Boldyreva K.M. (Engineering Academy, Department of Architecture and Construction)", "date": "2026"},
    {"id": "31442", "type": "Industrial Design", "title": "Landscaping element (bench)", "authors": "Ismatullaev K.U. (Engineering Academy, Department of Architecture and Construction)", "date": "2026"},
    {"id": "31443", "type": "Industrial Design", "title": "Park lantern", "authors": "Singurov A.A. (Engineering Academy, Department of Architecture and Construction)", "date": "2026"},
    {"id": "31454", "type": "Industrial Design", "title": "Park lantern", "authors": "Zakirov A.R. (Engineering Academy, Department of Architecture and Construction)", "date": "2026"},
    {"id": "31455", "type": "Industrial Design", "title": "Street bench", "authors": "Zakirov A.R. (Engineering Academy, Department of Architecture and Construction)", "date": "2026"},
    {"id": "2026610001", "type": "Computer Program", "title": "Computer program for assessing the quality of surgical intervention (ultrasound-guided drainage of abdominal cystic formation) 'Drainage Evaluation Index'", "authors": "Panchenkov D.N., Ivanov Yu.V., Zlobin A.I., Astarit G.E., Gankov V.A. (Medical Institute, Department of Surgery, Oncology and Radiology)", "date": "2026"},
    {"id": "2026610014", "type": "Computer Program", "title": "Information system for recording and analyzing data on the effect of various drug concentrations on tumor cells in vitro", "authors": "Shishkanova A.S., Penkova M.A., Moskaleva N.E., Sinelnikova T.G., Skalny A.V. (Medical Institute, Department of Medical Elementology)", "date": "2026"},
    {"id": "2026610214", "type": "Computer Program", "title": "Service for building and visualizing time series based on statistical data", "authors": "Akhmadov A.A., Kovalev S.P. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026610255", "type": "Computer Program", "title": "Computer program 'Smart home based on LoRa technology'", "authors": "Vinnikov N.V., Loginov V.E. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026610287", "type": "Computer Program", "title": "Software complex for modeling the operation of solar power plants under variable cloudiness conditions", "authors": "Morozov D.A., Stepanov I.V. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026610312", "type": "Computer Program", "title": "Program for calculating the optimal parameters of the server rack cooling system", "authors": "Kuznetsov R.A., Fedorov M.P. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026610411", "type": "Computer Program", "title": "Application for monitoring crop conditions based on satellite data", "authors": "Sergeev K.V., Pavlov A.G. (Agrarian and Technological Institute, Department of Agrobiotechnology)", "date": "2026"},
    {"id": "2026610567", "type": "Computer Program", "title": "Program for predicting the risk of cardiovascular complications in patients with type 2 diabetes mellitus", "authors": "Belov N.I., Kozlov D.A., Morozova I.S. (Medical Institute, Department of Hospital Therapy)", "date": "2026"},
    {"id": "2026610689", "type": "Computer Program", "title": "Software module for automated analysis of Latin texts", "authors": "Vasilyeva E.A., Nikolaev S.P. (Faculty of Philology, Department of Classical Philology)", "date": "2026"},
    {"id": "2026610744", "type": "Computer Program", "title": "Program for simulating the spread of infectious diseases in an urban environment", "authors": "Popov A.S., Orlov V.G. (Institute of Ecology)", "date": "2026"},
    {"id": "2026610811", "type": "Computer Program", "title": "Information system for managing the university's portfolio of innovative projects", "authors": "Semenov D.V., Romanov K.A. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026610923", "type": "Computer Program", "title": "Program for analyzing and classifying the emotional tone of consumer reviews on goods and services", "authors": "Fedorova M.A., Ilyina S.V. (Faculty of Economics, Department of Marketing)", "date": "2026"},
    {"id": "2026611005", "type": "Computer Program", "title": "Software complex for optimizing logistics routes for cargo delivery in a metropolis", "authors": "Zakharov A.B., Sokolov V.P. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026611142", "type": "Computer Program", "title": "Program for automating the educational scheduling process based on genetic algorithms", "authors": "Melnikov K.I., Novikov S.A. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026611256", "type": "Computer Program", "title": "Program for evaluating the investment attractiveness of early-stage startups", "authors": "Grigoriev A.V., Kovaleva E.M. (Faculty of Economics, Department of Management)", "date": "2026"},
    {"id": "2026611389", "type": "Computer Program", "title": "Software module for integrating data from various CRM systems", "authors": "Pavlova S.A., Stepanova I.V. (Engineering Academy, Department of Applied Informatics)", "date": "2026"},
    {"id": "2026611455", "type": "Computer Program", "title": "Program for monitoring and analyzing user activity in social networks", "authors": "Nikitin V.A., Alekseeva M.P. (Faculty of Philology, Department of Mass Communications)", "date": "2026"},
    {"id": "2026611582", "type": "Computer Program", "title": "Software complex for modeling wastewater treatment processes at industrial enterprises", "authors": "Kuznetsova R.V., Smirnov A.S. (Institute of Ecology)", "date": "2026"},
    {"id": "2026620011", "type": "Database", "title": "Database 'Results of microplastics monitoring in the coastal zones of the Black Sea'", "authors": "Egorov P.S., Lavrova T.A. (Institute of Ecology)", "date": "2026"},
    {"id": "2026620144", "type": "Database", "title": "Register of rare and endangered plant species in the Moscow region", "authors": "Volkova E.M., Sidorov I.S. (Agrarian and Technological Institute, Department of Landscape Architecture)", "date": "2026"},
    {"id": "2026620256", "type": "Database", "title": "Database of performance indicators for the implementation of digital technologies in the agro-industrial complex", "authors": "Kozlov A.V., Polyakova O.S. (Faculty of Economics, Department of Agrarian Economics)", "date": "2026"},
    {"id": "2026620389", "type": "Database", "title": "Collection of normative legal acts in the field of artificial intelligence regulation in BRICS countries", "authors": "Borisova K.V., Antonov D.S. (Law Institute, Department of International Law)", "date": "2026"},
    {"id": "2026620455", "type": "Database", "title": "Database of pharmacological properties of medicinal plants of Central Asia", "authors": "Makhmudov R.A., Usmanov S.T. (Medical Institute, Department of Pharmacology)", "date": "2026"},
    {"id": "2026620582", "type": "Database", "title": "Archive of sociological surveys of youth on employment and career growth", "authors": "Andreeva M.S., Titov P.V. (Faculty of Humanities and Social Sciences, Department of Sociology)", "date": "2026"},
    {"id": "2026620611", "type": "Database", "title": "Database of spectral characteristics of new organic semiconductors", "authors": "Yakovlev N.I., Belova A.S. (Faculty of Science, Department of Organic Chemistry)", "date": "2026"},
    {"id": "2026620744", "type": "Database", "title": "Register of colonial-era architectural monuments in Latin American countries", "authors": "Sanchez J.R., Gomez M.L. (Faculty of Humanities and Social Sciences, Department of World History)", "date": "2026"},
    {"id": "2026620856", "type": "Database", "title": "Database of physical development indicators of RUDN students", "authors": "Terentiev A.G., Sorokina O.V. (Institute of Physical Culture and Sports)", "date": "2026"}
];
/* ============================================================
   data.js
   Toda la información del sitio vive aquí. Para agregar una
   rama, un tipo de proceso o un proceso nuevo, solo se agregan
   datos en este archivo — no hay que tocar el HTML ni el CSS.
   ============================================================ */

const SITE_DATA = {
  ramas: {
    familia: {
      nombre: "Familia",
      activa: true,
      color: "#B5563C",
      imagen: "assets/images/rama-familia.jpg",
      descripcion: "Procesos relacionados con custodia, divorcio, alimentos y otros asuntos familiares.",
      tipos: {
        ejecutivo: {
          nombre: "Ejecutivo",
          descripcion: "Procesos para exigir el cumplimiento de una obligación familiar ya establecida.",
          color: "#C9982F",
          imagen: "assets/images/tipo-ejecutivo.jpg",
          procesos: [
            {
              id: "ejecutivo-alimentos",
              titulo: "Ejecutivo de alimentos",
              consiste: "Se exige ante un juez el pago de cuotas de alimentos ya fijadas y que dejaron de cancelarse.",
              aplica: "Cuando existe una obligación previa (sentencia o acta de conciliación) y hay cuotas atrasadas.",
              requisitos: ["Título que fije la obligación", "Liquidación de lo adeudado", "Poder si actúa un abogado"],
              video: { titulo: "Audiencia de ejecutivo de alimentos", url: "" },
              quiz: [
                { pregunta: "¿Cuándo se usa un ejecutivo de alimentos?", opciones: ["Cuando aún no existe ninguna obligación fijada", "Cuando ya existe una obligación y hay cuotas atrasadas", "Cuando se quiere adoptar un menor"], correcta: 1 },
                { pregunta: "¿Qué se necesita para iniciarlo?", opciones: ["Solo la cédula", "Un título que fije la obligación de alimentos", "Una escritura pública de venta"], correcta: 1 }
              ]
            },
            {
              id: "ejecutivo-cuotas-acuerdo",
              titulo: "Ejecutivo de cuotas atrasadas por acuerdo",
              consiste: "Cobro de cuotas pactadas en un acuerdo privado de alimentos, cuando ese acuerdo tiene mérito ejecutivo.",
              aplica: "Cuando existe un acuerdo firmado entre las partes y una de ellas incumple.",
              requisitos: ["Acuerdo firmado", "Prueba del incumplimiento"],
              video: { titulo: "Audiencia por incumplimiento de acuerdo", url: "" },
              quiz: [
                { pregunta: "¿Qué documento es indispensable aquí?", opciones: ["Un acuerdo firmado entre las partes", "Un certificado de tradición", "Un contrato comercial"], correcta: 0 }
              ]
            }
          ]
        },
        declarativo: {
          "nombre": "Declarativo",
          "descripcion": "Procesos para que un juez determine derechos u obligaciones familiares que aún no son claras.",
          "color": "#2F7A6B",
          "imagen": "assets/images/tipo-declarativo.jpg",
          "procesos": [
            {
              "id": "nulidad-matrimonio-civil",
              "titulo": "Nulidad de matrimonio civil",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Según la sentencia T-574 de 2016, la nulidad de matrimonio civil consiste en que la voluntad declarada por parte de los contrayentes es diferente a su voluntad real, como cuando se finge la celebración de un matrimonio y, al mismo tiempo, las partes han determinado no celebrarlo. Es improcedente predicar la causa ilícita del contrato de matrimonio, sino que, en otra dirección, no existe la voluntad real de celebrarlo. La causa ilícita se predica de la causa existente y, en este caso, la verdad es que nunca se pretendió perfeccionar el vínculo matrimonial. No es posible que un contrato nupcial sea celebrado con objeto y causa ilícitos; tales elementos, prima facie, siempre estarán acordes con el ordenamiento jurídico al ser inmodificables. Ello supone que cuando dos personas utilizan la figura jurídica del “contrato civil de matrimonio” y, en realidad, lo hacen con un propósito diferente que se mantiene oculto, se debe entender que su consentimiento fue otorgado para celebrar otro tipo de negocio contractual, en el que posiblemente pudo existir objeto y/o causa ilícita.",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso uno, este proceso se presenta ante un juez de familia en primera instancia: “De los procesos contenciosos de nulidad, divorcio de matrimonio civil, cesación de efectos civiles del matrimonio religioso y separación de cuerpos y de bienes.”",
              "partes": "En este proceso existe el demandado y el demandante; este último generalmente es la persona afectada por la nulidad. Sin embargo, se debe considerar que el demandante depende del tipo de nulidad, y en segundo lugar, la Corte Constitucional en la sentencia T-574 de 2016 menciona que si un tercero tiene interés directo puede también presentar la acción de nulidad.",
              "caracteristicas": [
                "Qué tipos de nulidades existen en Colombia (art. 140 C.C.): 1) Error acerca de las personas de ambos contrayentes o de uno de ellos. 2) Cuando se ha contraído con un menor de 18 años o entre menores de 18 años. 3) Cuando para celebrarlo haya faltado el consentimiento de alguno de los contrayentes o de ambos (la ley presume falta de consentimiento en los furiosos locos, mientras permanecieran en la locura, y en los mentecatos a quienes se haya impuesto interdicción judicial para el manejo de sus bienes; los sordomudos que puedan expresar con claridad su consentimiento por signos manifiestos, contraerán válidamente matrimonio). 5) Cuando se ha contraído por fuerza o miedo suficientes para obligar a alguno a obrar sin libertad (la fuerza o miedo no será causa de nulidad si después de disipada se ratifica el matrimonio con palabras expresas, o por la sola cohabitación de los consortes). 6) Cuando no ha habido libertad en el consentimiento de la mujer, por haber sido robada violentamente, a menos que consienta en él estando fuera del poder del raptor. 8) Cuando uno de los contrayentes ha matado o hecho matar al cónyuge con quien estaba unido en un matrimonio anterior. 9) Cuando los contrayentes están en la misma línea de ascendientes y descendientes o son hermanos. 11) Cuando se ha contraído entre el padre adoptante y la hija adoptiva, o entre el hijo adoptivo y la madre adoptante, o la mujer que fue esposa del adoptante. 12) Cuando respecto del hombre o de la mujer, o de ambos, estuviere subsistente el vínculo de un matrimonio anterior.",
                "Quién puede demandar según el tipo de nulidad: error en contrayentes — solo puede solicitarla la persona que sufrió el engaño (art. 142 C.C.); contrayente menor de 18 años — art. 143 C.C. señala cómo funciona, quién puede promover la acción y cómo se puede celebrar el matrimonio bajo estas condiciones sin que sea nulo; error en el consentimiento — el art. 144 C.C. menciona que pueden presentarla los contrayentes o los padres; matrimonio contraído por fuerza o miedo — el art. 146 C.C. menciona que puede presentarla la persona en la que se ejerció la fuerza."
              ],
              "etapas": [
                "La ley colombiana no contempla un requisito de procedibilidad como la conciliación, que en muchos casos en materia de familia es de obligatorio cumplimiento (art. 69, Ley 2220 de 2022).",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo corto."
              ],
              "documentos": [
                "Registro civil del matrimonio celebrado.",
                "Documentos de identidad de los contrayentes.",
                "Pruebas o documentos que sustenten la nulidad (testimonios, conversaciones); los documentos dependen del caso, según el artículo 387 del Código General del Proceso.",
                "A la demanda en que se pida la nulidad de un matrimonio civil deberá acompañarse la prueba de este.",
                "La intervención de los padres o guardadores de los cónyuges solo procederá cuando el respectivo consorte fuere incapaz.",
                "El agente del Ministerio Público intervendrá únicamente cuando existan hijos menores, en defensa de estos, con las mismas facultades de las partes; para este efecto se le notificará el auto admisorio de la demanda.",
                "Desde la presentación de la demanda y en el curso del proceso, de oficio o a petición de cualquiera de las partes, el juez deberá regular la obligación alimentaria de los cónyuges entre sí y en relación con los hijos comunes, sin perjuicio del acuerdo a que llegaren.",
                "Para el cobro de los alimentos provisionales se seguirá ejecución en el mismo expediente, en cuaderno separado, por el trámite del proceso ejecutivo.",
                "Copia de la sentencia que decrete la nulidad del matrimonio civil se enviará al respectivo funcionario del estado civil para su inscripción en el folio de matrimonio y en el de nacimiento de cada uno de los cónyuges."
              ],
              "material": [
                "Código Civil, artículo 140 (causales de nulidad del matrimonio).",
                "Código Civil, artículos 142, 143, 144 y 146 (legitimados según el tipo de nulidad).",
                "Código General del Proceso, artículo 22, inciso 1 (competencia del juez de familia).",
                "Código General del Proceso, artículo 387.",
                "Ley 2220 de 2022, artículo 69.",
                "Corte Constitucional, Sentencia T-574 de 2016."
              ]
            },
            {
              "id": "divorcio-matrimonio-civil",
              "titulo": "Divorcio de matrimonio civil",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Para que el divorcio se dé, tiene que existir un contrato de matrimonio válidamente celebrado entre dos personas, porque con el divorcio no se busca una nulidad como en otros casos, sino la terminación de este.",
              "comoFunciona": "El divorcio se puede dar por causales como: la muerte real o presunta de uno de los cónyuges (art. 152 C.C.), o por las causales especificadas en el artículo 154 del Código Civil. Es importante recalcar que estas causales deben tener una carga probatoria importante para poderlas demostrar en el proceso, debido a que, por ejemplo, la infidelidad a la hora de probarse puede llegar a afectar el derecho a la intimidad de una de las partes; es decir, existen causales subjetivas y otras objetivas que se pueden probar con facilidad. Todas las causales deben revisarse con jurisprudencia de la Corte Constitucional, debido a que a la hora de aplicarlas no son estrictas, sino que, por el contrario, se pueden flexibilizar porque la jurisprudencia tiene en cuenta cada situación en específico (Sentencias C-096 de 2024, C-111 de 2022 y C-589 de 2019). La ley colombiana no contempla la conciliación como requisito de procedibilidad para este proceso; sin embargo, sí contempla una terminación del matrimonio por mutuo acuerdo ante un notario (Decreto 4436 de 2005), que menciona los requisitos y la documentación necesaria para ese trámite.",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso uno, este proceso se presenta ante un juez de familia en primera instancia: “De los procesos contenciosos de nulidad, divorcio de matrimonio civil, cesación de efectos civiles del matrimonio religioso y separación de cuerpos y de bienes.”",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "La ley colombiana no contempla un requisito de procedibilidad como la conciliación, que en muchos casos y en materia de familia es de obligatorio cumplimiento (art. 69, Ley 2220 de 2022).",
                "Alternativa notarial: terminación del matrimonio por mutuo acuerdo ante notario, conforme al Decreto 4436 de 2005.",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de matrimonio.",
                "Registro civil de nacimiento de los cónyuges.",
                "Registros civiles de nacimiento de los hijos, si los hay.",
                "Poder otorgado al abogado.",
                "Documentos que acrediten los hechos de la causal invocada.",
                "Pruebas relacionadas con alimentos, custodia, visitas o patrimonio, cuando sean necesarias.",
                "En caso de la causal 10, la propuesta de divorcio exigida por el artículo 156 del Código Civil."
              ],
              "material": [
                "Código Civil, artículo 152 (causales y efectos de la disolución).",
                "Código Civil, artículo 154 (causales de divorcio).",
                "Código Civil, artículo 156 (legitimación y oportunidad para presentar la demanda).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Decreto 4436 de 2005 (terminación del matrimonio por mutuo acuerdo ante notario).",
                "Jurisprudencia: Corte Constitucional, Sentencias C-096 de 2024, C-111 de 2022 y C-589 de 2019."
              ]
            },
            {
              "id": "separacion-de-cuerpos",
              "titulo": "Separación de cuerpos",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La separación de cuerpos se origina en el matrimonio; es decir, este debe existir antes para que se pueda declarar la separación de cuerpos, la cual se refiere a la terminación de la vida en común de los casados (art. 167 C.C.).",
              "comoFunciona": "La ley indica que se puede presentar por las causales contempladas en el artículo 154 del Código Civil y por mutuo acuerdo; también es importante destacar que se puede declarar la separación de cuerpos y, a su vez, por mutuo acuerdo, sostener la sociedad conyugal (art. 165 C.C.).",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso uno, este proceso se presenta ante un juez de familia en primera instancia: “De los procesos contenciosos de nulidad, divorcio de matrimonio civil, cesación de efectos civiles del matrimonio religioso y separación de cuerpos y de bienes.”",
              "partes": "",
              "caracteristicas": [
                "Causales: las contempladas en el artículo 154 del Código Civil, y también por mutuo acuerdo (art. 165 C.C.)."
              ],
              "etapas": [
                "Conciliación extrajudicial: en este caso sí se tiene que cumplir el requisito de procedibilidad, es decir, la conciliación (art. 69, numeral 7, Ley 2220 de 2022).",
                "Si no hay acuerdo entre las partes en la etapa de conciliación, se entiende que ya se surtió este requisito y se continúa con la etapa judicial (art. 70, Ley 2220 de 2022).",
                "Proceso judicial: se presenta la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de matrimonio.",
                "Registro civil de nacimiento de los cónyuges.",
                "Registros civiles de nacimiento de los hijos, si existen.",
                "Poder otorgado al abogado, cuando se trate de proceso judicial.",
                "Constancia de haber agotado la conciliación extrajudicial.",
                "Pruebas de los hechos que fundamentan la causal, cuando sea una separación contenciosa."
              ],
              "material": [
                "Código Civil, artículo 154 (causales de divorcio, aplicables a la separación).",
                "Código Civil, artículo 165 (causales de separación de cuerpos).",
                "Código Civil, artículo 167 (efectos de la separación de cuerpos).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Ley 2220 de 2022, artículo 69 numeral 7 y artículo 70."
              ]
            },
            {
              "id": "separacion-de-bienes",
              "titulo": "Separación de bienes",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Es un proceso en el cual se liquida la sociedad patrimonial en caso de la sociedad de hecho, o se liquida la sociedad conyugal en caso del matrimonio; este proceso se inicia naturalmente por las partes que conforman la sociedad. Como lo indica el artículo 197 del Código Civil, no simboliza un divorcio ni la terminación de la relación, sino que se puede presentar porque las partes manifiestan que patrimonialmente no funcionan de forma correcta, o que desean que cada bien que obtengan pertenezca únicamente a la persona que realice todas las actuaciones jurídicas y patrimoniales para su apropiación.",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso uno, este proceso se presenta ante un juez de familia en primera instancia: “De los procesos contenciosos de nulidad, divorcio de matrimonio civil, cesación de efectos civiles del matrimonio religioso y separación de cuerpos y de bienes.”",
              "partes": "",
              "caracteristicas": [
                "Causales: las principales están contempladas en el artículo 154 y en el artículo 200 del Código Civil."
              ],
              "etapas": [
                "Conciliación extrajudicial: en este caso sí se tiene que cumplir el requisito de procedibilidad, es decir, la conciliación (art. 69, numeral 7, Ley 2220 de 2022).",
                "Si no hay acuerdo entre las partes en la etapa de conciliación, se entiende que ya se surtió este requisito y se continúa con la etapa judicial (art. 70, Ley 2220 de 2022).",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de matrimonio.",
                "Poder otorgado al abogado.",
                "Constancia de la conciliación extrajudicial, salvo que opere una excepción.",
                "Documentos que acrediten los bienes de la sociedad conyugal.",
                "Documentos que acrediten las deudas, cuando sean relevantes.",
                "Pruebas de la causal invocada.",
                "Documentos bancarios, financieros, empresariales o contables, según el caso."
              ],
              "material": [
                "Código Civil, artículo 154 (causales).",
                "Código Civil, artículo 197 (separación de bienes).",
                "Código Civil, artículo 200 (causales de separación de bienes).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Ley 2220 de 2022, artículo 69 numeral 7 y artículo 70."
              ]
            },
            {
              "id": "disolucion-sociedad-conyugal",
              "titulo": "Disolución de la sociedad conyugal",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Es un proceso en el cual la sociedad conyugal deja de existir y de producir efectos. Esta proviene de la celebración del matrimonio entre dos partes, puesto que después de la celebración se entiende que la sociedad conyugal se instaura, lo que simboliza que los bienes que adquieran entrarán al patrimonio conjunto de las partes; con la disolución se da la terminación de esto. La sentencia T-401 de 2021 de la Corte Constitucional menciona que la disolución de la sociedad conyugal no produce por sí misma la terminación del matrimonio, ni tampoco una separación de cuerpos; solo produce efectos a nivel patrimonial, siempre que no haya un acuerdo en contrario.",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso tres, este proceso se presenta ante un juez de familia en primera instancia: “De la liquidación de sociedades conyugales o patrimoniales por causa distinta de la muerte de los cónyuges, o cuando la disolución haya sido declarada ante notario, o por juez diferente al de familia, sin perjuicio de la competencia atribuida por la ley a los notarios.”",
              "partes": "",
              "caracteristicas": [
                "Causales (art. 1820 C.C.): se hace énfasis principalmente en dos: la primera, que la disolución se da directamente con la disolución del matrimonio; y la quinta, que indica que la separación de bienes también da como resultado la disolución de la sociedad conyugal."
              ],
              "etapas": [
                "Antes de iniciar un proceso, es importante señalar que, gracias al inciso 5 del artículo 1820 C.C., se puede presentar de mutuo acuerdo por vía notarial, sin que medie un proceso.",
                "La ley menciona que la conciliación es necesaria; sin embargo, ya existiendo la presentación de la disolución de mutuo acuerdo, no se presentan las dos figuras; se recomienda más la presentación notarial que la conciliación, porque en algunos casos puede ser más rápida y el proceso culmina ahí.",
                "Si se presenta la conciliación es porque las personas no están de acuerdo en todos los aspectos y alguna de las partes puede ceder; también existe la posibilidad de que no se concilie y se pase directamente a la instancia judicial.",
                "Conciliación extrajudicial: en este caso sí se tiene que cumplir el requisito de procedibilidad (art. 69 numeral 3, Ley 2220 de 2022).",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de matrimonio.",
                "Documentos de identidad de los cónyuges.",
                "Poder, si se realiza mediante abogado.",
                "Prueba de las obligaciones o deudas.",
                "Inventario de activos y pasivos.",
                "Acuerdo de liquidación, cuando sea por mutuo consentimiento.",
                "Constancia de la conciliación extrajudicial."
              ],
              "material": [
                "Código Civil, artículo 1820 (causales de disolución de la sociedad conyugal).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Ley 2220 de 2022, artículo 69 numeral 3.",
                "Jurisprudencia: Corte Constitucional, Sentencia T-401 de 2021."
              ]
            },
            {
              "id": "inexistencia-capitulaciones-matrimoniales",
              "titulo": "Inexistencia de capitulaciones matrimoniales",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Las capitulaciones matrimoniales son un contrato que se celebra entre dos personas que van a contraer matrimonio, con la finalidad de regular las cuestiones patrimoniales de los bienes entre los cónyuges; por ejemplo, que cualquier bien que se obtenga durante el matrimonio pertenezca a la persona que realizó todas las actuaciones jurídicas y patrimoniales para su apropiación (art. 1771 C.C.). En caso de que, a la hora de la celebración de las capitulaciones, faltara algún elemento de la existencia —como la declaración de la voluntad, algún requisito esencial de las capitulaciones o las solemnidades legales—, se puede declarar la inexistencia, lo que quiere decir que las capitulaciones nunca existieron.",
              "comoFunciona": "La sentencia SC4115 de 2024 explica la inexistencia de las capitulaciones matrimoniales así: “Las capitulaciones, entonces, son fruto de la voluntad de los futuros consortes o compañeros, a través del cual se definen las reglas que han de regir su sociedad de bienes o, incluso, desechar su nacimiento. Su eficacia, por tanto, está supeditada a que se satisfagan las exigencias del artículo 1502 del estatuto civil”.",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 14, este proceso se presenta ante un juez de familia en primera instancia: “De las acciones relativas a la caducidad, a la inexistencia o a la nulidad de las capitulaciones matrimoniales.”",
              "partes": "",
              "caracteristicas": [
                "Requisitos para la existencia de las capitulaciones: art. 1771 C.C. — acuerdo expreso, libre y voluntario de autorregulación de intereses. Art. 1772 C.C. — deben elevarse a escritura pública y estarán sujetos a las capitulaciones los bienes raíces que se encuentren en el territorio. Art. 1773 C.C. — se requiere armonía entre lo pactado y las normas de orden público e imperativas, así como las buenas costumbres."
              ],
              "etapas": [
                "Conciliación extrajudicial: en este caso sí se tiene que cumplir el requisito de procedibilidad (art. 69 numeral 5, Ley 2220 de 2022).",
                "Si no hay acuerdo entre las partes en la etapa de conciliación, se entiende que ya se surtió este requisito y se continúa con la etapa judicial (art. 70, Ley 2220 de 2022).",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de matrimonio.",
                "Escritura pública de las capitulaciones, si existe.",
                "Documentos de identidad.",
                "Documentos relativos a los bienes incluidos en las capitulaciones.",
                "Documentos que demuestren el hecho por el cual se alega la inexistencia.",
                "Poder del abogado.",
                "Cualquier documento que permita demostrar que el supuesto negocio jurídico nunca llegó a perfeccionarse."
              ],
              "material": [
                "Código Civil, artículo 1502 (requisitos para obligarse).",
                "Código Civil, artículo 1771 (definición de capitulaciones matrimoniales).",
                "Código Civil, artículo 1772 (formalidades de las capitulaciones matrimoniales).",
                "Código Civil, artículo 1773 (limitaciones a las estipulaciones).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Ley 2220 de 2022, artículo 69 numeral 5 y artículo 70.",
                "Jurisprudencia: SC4115-2021 (2015-00327-01)."
              ]
            },
            {
              "id": "nulidad-capitulaciones-matrimoniales",
              "titulo": "Nulidad de capitulaciones matrimoniales",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Para que se pueda dar este proceso, deben existir primero las capitulaciones matrimoniales, consignadas en el artículo 1771 del Código Civil. Para que se pueda declarar la nulidad tiene que existir algún vicio que permita cuestionar la validez del contrato. Estas nulidades se originan por elementos como la capacidad de las partes, o que exista algún vicio en la persona, el objeto o la causa, como lo menciona el artículo 1502 del Código Civil.",
              "comoFunciona": "Puede declararse nulidad absoluta, que quiere decir que el vicio o elemento ilícito que crea la nulidad no se puede sanear ni corregir, como por ejemplo el vicio de fuerza; también se puede declarar la nulidad relativa, que indica que los vicios o elementos que dan origen a la nulidad sí se pueden sanear o corregir, es decir, que después de saneado el contrato sigue produciendo efectos (arts. 1741 y 1743 C.C.).",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 14, este proceso se presenta ante un juez de familia en primera instancia: “De las acciones relativas a la caducidad, a la inexistencia o a la nulidad de las capitulaciones matrimoniales.”",
              "partes": "",
              "caracteristicas": [
                "Legitimados para actuar: según la sentencia SC2130 de 2021, las nulidades pueden ser presentadas por cualquiera de las partes que las suscriben, en cualquier momento de la duración del contrato; también puede presentarla un tercero interesado apenas tenga conocimiento de ella."
              ],
              "etapas": [
                "La ley colombiana no contempla requisitos de procedibilidad como la conciliación en este caso en particular.",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento (art. 369 CGP)."
              ],
              "documentos": [
                "Escritura pública de capitulaciones matrimoniales.",
                "Registro civil de matrimonio.",
                "Documentos de identidad.",
                "Registros civiles que sean pertinentes.",
                "Documentos relacionados con los bienes incluidos en las capitulaciones.",
                "Pruebas del supuesto vicio.",
                "Poder del abogado."
              ],
              "material": [
                "Código Civil, artículo 1502 (requisitos para obligarse).",
                "Código Civil, artículo 1741 (nulidad absoluta y relativa).",
                "Código Civil, artículo 1743 (declaración de nulidad relativa).",
                "Código Civil, artículo 1771 (definición de capitulaciones matrimoniales).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Jurisprudencia: SC2130-2021 (2015-00085-01)."
              ]
            },
            {
              "id": "existencia-union-marital-de-hecho",
              "titulo": "Declaración de existencia de unión marital de hecho",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La unión marital de hecho se define en el artículo 1 de la Ley 54 de 1990 como la situación en que dos personas mayores de 18 años, sin estar casadas, hacen una comunidad de vida permanente.",
              "comoFunciona": "Para que se declare la unión marital de hecho se tienen que probar sus elementos, entre ellos la comunidad de vida permanente. La sentencia SC3462 de 2021 lo explica así: “conciencia de que forman un núcleo familiar, exteriorizado en la convivencia y la participación en todos los aspectos esenciales de su existencia, dispensándose afecto y socorro, guardándose mutuo respeto, propendiendo por el crecimiento personal, social y profesional del otro (…). Se trata de la exteriorización de la voluntad interna con ánimo serio e inequívoco de formar una pareja en su condición de acto jurídico hacia un proyecto vital”.",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 14, este proceso se presenta ante un juez de familia en primera instancia: “De los procesos sobre declaración de existencia de unión marital de hecho y de la sociedad patrimonial entre compañeros permanentes, sin perjuicio de la competencia atribuida a los notarios.”",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Conciliación extrajudicial: en este caso sí se tiene que cumplir el requisito de procedibilidad (art. 69 numeral 3, Ley 2220 de 2022).",
                "Si no hay acuerdo entre las partes en la etapa de conciliación, se entiende que ya se surtió este requisito y se continúa con la etapa judicial (art. 70, Ley 2220 de 2022).",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de nacimiento del demandante.",
                "Registro civil de nacimiento del demandado, cuando sea posible.",
                "Documentos de identidad.",
                "Prueba de la convivencia.",
                "Fotografías y comunicaciones.",
                "Documentos relacionados con hijos comunes, si existen.",
                "Pruebas de domicilio común.",
                "Documentos que acrediten gastos o bienes compartidos.",
                "Certificado o constancia de conciliación prejudicial.",
                "Poder otorgado al abogado."
              ],
              "material": [
                "Ley 54 de 1990, artículo 1 (definición de unión marital de hecho).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Ley 2220 de 2022, artículo 69 numeral 3 y artículo 70.",
                "Jurisprudencia: SC3462-2021 (2017-00070-01)."
              ]
            },
            {
              "id": "existencia-sociedad-patrimonial",
              "titulo": "Declaración de existencia de sociedad patrimonial entre compañeros permanentes",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La sociedad patrimonial nace con la existencia de la unión marital de hecho; esta última debe haber cumplido los requisitos exigidos por la ley, como haber existido durante dos años (art. 1, Ley 979 de 2005). Es un régimen económico que nace entre las personas que componen la unión marital de hecho, un patrimonio conjunto entre las dos partes. La sentencia SC2222 de 2020 menciona: “La sociedad patrimonial irradia sus efectos solamente en el plano económico y deriva, en primer lugar, de la existencia de una unión marital de hecho y, en segundo término, de que como consecuencia del trabajo, ayuda y socorro mutuos de los compañeros permanentes, se haya consolidado un patrimonio o capital común.”",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 14, este proceso se presenta ante un juez de familia en primera instancia: “De los procesos sobre declaración de existencia de unión marital de hecho y de la sociedad patrimonial entre compañeros permanentes, sin perjuicio de la competencia atribuida a los notarios.”",
              "partes": "",
              "caracteristicas": [
                "Requisitos de existencia (art. 4, Ley 979 de 2005) — hay tres formas de declararla: por escritura pública ante notario por mutuo consentimiento de los compañeros permanentes; por acta de conciliación suscrita por los compañeros permanentes en centro legalmente constituido; o por sentencia judicial, mediante los medios ordinarios de prueba consagrados en el Código de Procedimiento Civil, con conocimiento de los jueces de familia de primera instancia.",
                "Legitimados para actuar: además de los compañeros permanentes, también lo son sus herederos (art. 4, Ley 979 de 2005)."
              ],
              "etapas": [
                "La ley menciona que la conciliación es necesaria; sin embargo, ya existiendo la presentación de mutuo acuerdo ante notario, no hay necesidad de presentar la conciliación. Se recomienda más la presentación notarial que la conciliación, porque en algunos casos puede ser más rápida y el proceso culmina ahí.",
                "Si se presenta la conciliación es porque las personas no están de acuerdo en todos los aspectos y alguna de las partes puede ceder; también existe la posibilidad de que no se concilie y se pase directamente a instancia judicial.",
                "Conciliación extrajudicial: en este caso sí se tiene que cumplir el requisito de procedibilidad (art. 69 numeral 3, Ley 2220 de 2022).",
                "Si no hay acuerdo entre las partes en la etapa de conciliación, se entiende que ya se surtió este requisito y se continúa con la etapa judicial (art. 70, Ley 2220 de 2022).",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de nacimiento del demandante.",
                "Registro civil de nacimiento del demandado, cuando sea posible.",
                "Documentos de identidad.",
                "Prueba de la convivencia.",
                "Fotografías y comunicaciones.",
                "Documentos relacionados con hijos comunes, si existen.",
                "Pruebas de domicilio común.",
                "Documentos que acrediten gastos o bienes compartidos.",
                "Certificado o constancia de conciliación prejudicial.",
                "Poder otorgado al abogado."
              ],
              "material": [
                "Ley 979 de 2005, artículo 1 (requisito de duración de la unión marital de hecho).",
                "Ley 979 de 2005, artículo 2 (formas de declarar la existencia).",
                "Ley 979 de 2005, artículo 4 (legitimados para actuar).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Ley 2220 de 2022, artículo 69 numeral 3 y artículo 70.",
                "Jurisprudencia: SC2222-2020."
              ]
            },
            {
              "id": "disolucion-sociedad-patrimonial",
              "titulo": "Disolución de la sociedad patrimonial",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La disolución de la sociedad patrimonial es, como su nombre lo indica, la terminación de esta misma; sin embargo, aquí no se hace la liquidación, es decir, no se realiza un conteo de bienes para calcular el valor correspondiente que le pertenece a cada una de las partes que hizo parte de la sociedad. Las causas de disolución están en el artículo 5 de la Ley 54 de 1990.",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso tres, este proceso se presenta ante un juez de familia en primera instancia: “De la liquidación de sociedades conyugales o patrimoniales por causa distinta de la muerte de los cónyuges, o cuando la disolución haya sido declarada ante notario, o por juez diferente al de familia, sin perjuicio de la competencia atribuida por la ley a los notarios.”",
              "partes": "",
              "caracteristicas": [
                "Legitimados para actuar: además de los compañeros permanentes, también lo son sus herederos (art. 6, Ley 979 de 2005)."
              ],
              "etapas": [
                "La ley menciona que la conciliación es necesaria; sin embargo, ya existiendo la presentación de mutuo acuerdo ante notario, no hay necesidad de presentar la conciliación. Se recomienda más la presentación notarial que la conciliación, porque en algunos casos puede ser más rápida y el proceso culmina ahí.",
                "Si se presenta la conciliación es porque las personas no están de acuerdo en todos los aspectos y alguna de las partes puede ceder; también existe la posibilidad de que no se concilie y se pase directamente a instancia judicial.",
                "Conciliación extrajudicial: en este caso sí se tiene que cumplir el requisito de procedibilidad (art. 69 numeral 3, Ley 2220 de 2022).",
                "Si no hay acuerdo entre las partes en la etapa de conciliación, se entiende que ya se surtió este requisito y se continúa con la etapa judicial (art. 70, Ley 2220 de 2022).",
                "Proceso judicial: se presenta directamente la demanda, en la que se debe reflejar las partes, las pretensiones, los hechos, los fundamentos de derecho, las pruebas que se solicitan y los documentos que se aportan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento (art. 369 CGP)."
              ],
              "documentos": [
                "Registro civil de nacimiento del demandante.",
                "Registro civil de nacimiento del demandado, cuando sea posible.",
                "Documentos de identidad.",
                "Prueba de la convivencia.",
                "Fotografías y comunicaciones.",
                "Documentos relacionados con hijos comunes, si existen.",
                "Pruebas de domicilio común.",
                "Documentos que acrediten gastos o bienes compartidos.",
                "Certificado o constancia de conciliación prejudicial.",
                "Poder otorgado al abogado."
              ],
              "material": [
                "Ley 54 de 1990, artículo 5 (causas de disolución).",
                "Ley 979 de 2005, artículo 6 (legitimados para actuar).",
                "Código General del Proceso, artículo 22 (competencia de los jueces de familia en primera instancia).",
                "Código General del Proceso, artículo 369 (traslado de la demanda).",
                "Ley 2220 de 2022, artículo 69 numeral 3 y artículo 70."
              ]
            },
            {
              "id": "investigacion-de-paternidad",
              "titulo": "Investigación de paternidad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La Corte Constitucional la define así: “La investigación de paternidad es un proceso de carácter judicial que se halla totalmente reglado, y que restituye el derecho a la filiación de las personas, cuando no son reconocidas voluntariamente por sus padres; se adelanta ante la Jurisdicción de Familia y para emitir sentencia el juez debe solicitar y practicar pruebas, que le permitan determinar la paternidad, incluida la prueba biológica de ADN, prueba que puede ser ordenada por la autoridad competente, o aportada por las partes interesadas en el proceso.” Tiene la finalidad de proteger la filiación: “La filiación es el derecho que tiene todo individuo al reconocimiento de su personalidad jurídica y conlleva atributos inherentes a su condición humana como el estado civil, la relación de patria potestad, orden sucesoral, obligaciones alimentarias, nacionalidad, entre otros. Además, a través de la protección del derecho a la filiación se concreta el contenido de otras garantías superiores como tener una familia, el libre desarrollo de la personalidad y la dignidad humana.”",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 2, este proceso se presenta ante un juez de familia en primera instancia: “De la investigación e impugnación de la paternidad y maternidad y de los demás asuntos referentes al estado civil que lo modifiquen o alteren.”",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "En este caso no se necesita conciliación extrajudicial como requisito de procedibilidad, puesto que no es un asunto en el que el padre o madre demandado se pueda negar, sino que el juez de familia en primera instancia define y decide si es o no el padre o madre, y qué derechos y deberes se reconocen a cada parte involucrada.",
                "Proceso judicial: se presenta directamente la demanda, partiendo como base el artículo 386 del Código General del Proceso, en la que se debe reflejar las partes, las pretensiones (en las que también se puede solicitar alimentos, que el juez puede admitir provisionalmente si es razonable, mientras culmina el proceso), los hechos, los fundamentos de derecho y las pruebas que se solicitan.",
                "El juez puede decretar de oficio o por voluntad propia la prueba de ADN, que se debe presentar en la audiencia inicial; si la persona se niega a realizarse la prueba, se presume que es el padre o la madre y el proceso continúa con esa pretensión establecida.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento."
              ],
              "documentos": [
                "Registro civil de nacimiento del demandante.",
                "Nombre y dirección del demandado cuando sea posible, o declaración juramentada manifestando que no se conoce el paradero.",
                "Documentos de identidad.",
                "Registro civil de nacimiento del hijo o hija.",
                "Pruebas documentales: fotografías y comunicaciones.",
                "Un escrito de los hechos organizado cronológicamente.",
                "Prueba de ADN."
              ],
              "material": [
                "Corte Constitucional, Sentencia C-258 de 2015.",
                "Código General del Proceso, artículo 386 (investigación o impugnación de la paternidad o la maternidad)."
              ]
            },
            {
              "id": "investigacion-de-maternidad",
              "titulo": "Investigación de la maternidad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La Corte Constitucional la define así: “La investigación de paternidad es un proceso de carácter judicial que se halla totalmente reglado, y que restituye el derecho a la filiación de las personas, cuando no son reconocidas voluntariamente por sus padres; se adelanta ante la Jurisdicción de Familia y para emitir sentencia el juez debe solicitar y practicar pruebas, que le permitan determinar la paternidad, incluida la prueba biológica de ADN, prueba que puede ser ordenada por la autoridad competente, o aportada por las partes interesadas en el proceso.”",
              "comoFunciona": "La particularidad de este proceso es que no solo depende de la prueba de ADN, sino también de la condición social de madre: “La maternidad o la condición de madre trasciende la mera condición biológica de la gestación y del parto. Se conforma por elementos psicológicos, sociales, culturales y afectivos. Implica también un querer ser libre, consciente y responsable. El reconocimiento, por ello, comprende la manifestación externa de esa voluntad. Ser madre es un estado natural y sociocultural de la mujer, a la vez, la conciencia plena de serlo, pero también es ejercicio de la libertad personal. Se refleja en su actitud plena hacia el cuidado personal del hijo y correlativamente cimienta en éste el derecho a ser tratado como hijo. La maternidad, como derecho humano, se protege en cualquier circunstancia fáctica y jurídica. Empero, no es absoluta, pues cederá siempre ante las prerrogativas del mismo hijo, o frente a cualquier otra garantía fundamental, según lo determine el contexto litigioso.” También es relevante que el reconocimiento puede ser voluntario por parte de la madre.",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 2, este proceso se presenta ante un juez de familia en primera instancia: “De la investigación e impugnación de la paternidad y maternidad y de los demás asuntos referentes al estado civil que lo modifiquen o alteren.”",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "En este caso no se necesita conciliación extrajudicial como requisito de procedibilidad, puesto que no es un asunto en el que el padre o madre demandado se pueda negar, sino que el juez de familia en primera instancia define y decide si es o no el padre o madre, y qué derechos y deberes se reconocen a cada parte involucrada.",
                "Proceso judicial: se presenta directamente la demanda, partiendo como base el artículo 386 del Código General del Proceso, en la que se debe reflejar las partes, las pretensiones (en las que también se puede solicitar alimentos, que el juez puede admitir provisionalmente si es razonable, mientras culmina el proceso), los hechos, los fundamentos de derecho y las pruebas que se solicitan.",
                "El juez puede decretar de oficio o por voluntad propia la prueba de ADN, que se debe presentar en la audiencia inicial; si la persona se niega a realizarse la prueba, se presume que es el padre o la madre y el proceso continúa con esa pretensión establecida.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento."
              ],
              "documentos": [
                "Registro civil de nacimiento del demandante.",
                "Nombre y dirección del demandado cuando sea posible, o declaración juramentada manifestando que no se conoce el paradero.",
                "Documentos de identidad.",
                "Registro civil de nacimiento del hijo o hija.",
                "Pruebas documentales: fotografías y comunicaciones.",
                "Un escrito de los hechos organizado cronológicamente.",
                "Prueba de ADN."
              ],
              "material": [
                "Corte Constitucional, Sentencia C-258 de 2015.",
                "Código General del Proceso, artículo 386 (investigación o impugnación de la paternidad o la maternidad).",
                "Jurisprudencia: SC4856-2021 (2014-00340-01)."
              ]
            },
            {
              "id": "impugnacion-de-paternidad",
              "titulo": "Impugnación de paternidad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La Corte Constitucional define la impugnación así: “en cuanto a los procesos de impugnación de la maternidad y la paternidad, se debe decir que en términos generales, la impugnación es el fenómeno jurídico en virtud del cual, se pretende atacar una relación filial que contraría la realidad para que se declare su inexistencia.” Es “la oportunidad que tiene una persona para refutar la relación filial que fue reconocida en virtud de la ley. Dicha figura opera: i) para desvirtuar la presunción establecida en el artículo 214 del Código Civil; ii) para impugnar el reconocimiento que se dio a través de una manifestación voluntaria de quien aceptó ser padre; o, iii) cuando se repele la maternidad en el caso de un falso parto o de la suplantación del menor.”",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 2, este proceso se presenta ante un juez de familia en primera instancia: “De la investigación e impugnación de la paternidad y maternidad y de los demás asuntos referentes al estado civil que lo modifiquen o alteren.”",
              "partes": "",
              "caracteristicas": [
                "Legitimados para actuar: el cónyuge, hijo o hija, herederos o ascendientes, según los artículos 216, 217, 219 y 222 del Código Civil."
              ],
              "etapas": [
                "En este caso no se necesita conciliación extrajudicial como requisito de procedibilidad, puesto que no es un asunto en el que el padre o madre demandado se pueda negar, sino que el juez de familia en primera instancia define y decide si es o no el padre o madre, y qué derechos y deberes se reconocen a cada parte involucrada.",
                "Proceso judicial: se presenta directamente la demanda, partiendo como base el artículo 386 del Código General del Proceso, en la que se debe reflejar las partes, las pretensiones (en las que también se puede solicitar alimentos, que el juez puede admitir provisionalmente si es razonable, mientras culmina el proceso), los hechos, los fundamentos de derecho y las pruebas que se solicitan.",
                "El juez puede decretar de oficio o por voluntad propia la prueba de ADN, que se debe presentar en la audiencia inicial; si la persona se niega a realizarse la prueba, se presume que es el padre o la madre y el proceso continúa con esa pretensión establecida.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento."
              ],
              "documentos": [
                "Nombre y dirección del demandado cuando sea posible.",
                "Documentos de identidad.",
                "Registro civil de nacimiento del hijo o hija.",
                "Pruebas documentales: fotografías y comunicaciones.",
                "Documento de identidad del demandante.",
                "Documento de identidad del hijo, cuando corresponda.",
                "Poder conferido al abogado.",
                "Documentos que acrediten cómo se estableció la paternidad.",
                "Pruebas que sustenten la impugnación."
              ],
              "material": [
                "Corte Constitucional, Sentencia C-258 de 2015.",
                "Código General del Proceso, artículo 386 (investigación o impugnación de la paternidad o la maternidad).",
                "Código Civil, artículo 216 (titulares de la acción de impugnación).",
                "Código Civil, artículo 217 (plazo para impugnar).",
                "Código Civil, artículo 219 (impugnación por terceros).",
                "Código Civil, artículo 222 (impugnación por ascendientes)."
              ]
            },
            {
              "id": "impugnacion-de-maternidad",
              "titulo": "Impugnación de maternidad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "La Corte Constitucional define la impugnación así: “en cuanto a los procesos de impugnación de la maternidad y la paternidad, se debe decir que en términos generales, la impugnación es el fenómeno jurídico en virtud del cual, se pretende atacar una relación filial que contraría la realidad para que se declare su inexistencia.” La principal diferencia con la impugnación de paternidad es que aquí la motivación principal o fundamental es el falso parto o la suplantación del verdadero hijo, conforme al artículo 335 del Código Civil. La Corte Constitucional lo define así: “lo cierto e indiscutible es que la acción así propuesta tiene como soporte fundamental la falsedad de la maternidad afirmada en la partida; falsedad que implica desde luego, que el parto es irreal, haya participado o no en el fraude, como luego se verá, la supuesta madre.”",
              "comoFunciona": "",
              "antePresenta": "Teniendo en cuenta el artículo 22 del Código General del Proceso, en su inciso 2, este proceso se presenta ante un juez de familia en primera instancia: “De la investigación e impugnación de la paternidad y maternidad y de los demás asuntos referentes al estado civil que lo modifiquen o alteren.”",
              "partes": "",
              "caracteristicas": [
                "Legitimados para actuar: el cónyuge, hijo o hija, herederos o ascendientes, según los artículos 216, 217, 219 y 222 del Código Civil."
              ],
              "etapas": [
                "En este caso no se necesita conciliación extrajudicial como requisito de procedibilidad, puesto que no es un asunto en el que el padre o madre demandado se pueda negar, sino que el juez de familia en primera instancia define y decide si es o no el padre o madre, y qué derechos y deberes se reconocen a cada parte involucrada.",
                "Proceso judicial: se presenta directamente la demanda, partiendo como base el artículo 386 del Código General del Proceso, en la que se debe reflejar las partes, las pretensiones (en las que también se puede solicitar alimentos, que el juez puede admitir provisionalmente si es razonable, mientras culmina el proceso), los hechos, los fundamentos de derecho y las pruebas que se solicitan.",
                "El juez puede decretar de oficio o por voluntad propia la prueba de ADN, que se debe presentar en la audiencia inicial; si la persona se niega a realizarse la prueba, se presume que es el padre o la madre y el proceso continúa con esa pretensión establecida.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento."
              ],
              "documentos": [
                "Nombre y dirección del demandado cuando sea posible.",
                "Documentos de identidad.",
                "Registro civil de nacimiento del hijo o hija.",
                "Pruebas documentales: fotografías y comunicaciones.",
                "Documento de identidad del demandante.",
                "Documento de identidad del hijo, cuando corresponda.",
                "Poder conferido al abogado.",
                "Documentos que acrediten cómo se estableció la paternidad.",
                "Pruebas que sustenten la impugnación."
              ],
              "material": [
                "Corte Constitucional, Sentencia C-258 de 2015.",
                "Código General del Proceso, artículo 386 (investigación o impugnación de la paternidad o la maternidad).",
                "Código Civil, artículo 216 (titulares de la acción de impugnación).",
                "Código Civil, artículo 217 (plazo para impugnar).",
                "Código Civil, artículo 219 (impugnación por terceros).",
                "Código Civil, artículo 222 (impugnación por ascendientes).",
                "Código Civil, artículo 335 (impugnación de la maternidad).",
                "Jurisprudencia: Corte Constitucional, Sentencia T-390 de 2005."
              ]
            },
            {
              "id": "declaracion-hijo-de-crianza",
              "titulo": "Declaración de hijo/a de crianza",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo / jurisdicción voluntaria (según el caso)",
              "queEs": "Es un reconocimiento de una situación jurídica parental que tiene la finalidad de incluir en el núcleo familiar a una persona con la que se ha estado compartiendo vínculos familiares durante un determinado periodo de tiempo. La Ley 2388 de 2024 define al hijo(a) de crianza como la “persona que ha sido acogida para su cuidado, protección y educación durante un periodo de tiempo no menor a cinco (5) años, por una familia o personas diferente a la de sus padres biológicos; sean estas familias consanguíneas o no.”",
              "comoFunciona": "Se puede presentar por dos vías: un proceso declarativo o un proceso de jurisdicción voluntaria. La primera vía implica que solo el hijo quiere ser reconocido y que la otra parte no asistirá por voluntad propia o por consenso entre las partes, como lo menciona la sentencia C-029 de 2026: “la jurisprudencia ha reconocido dos vías para obtener la declaración de hijos e hijas de crianza. La primera, mediante un proceso de jurisdicción voluntaria que supone el consenso entre las partes; la segunda, mediante un proceso declarativo verbal, al cual puede acudir cualquiera de ellas en ausencia de dicho acuerdo.”",
              "antePresenta": "Teniendo en cuenta el artículo 21 del Código General del Proceso, en su inciso 21, incluido por la Ley 2388 de 2024, este proceso se presenta ante un juez de familia de única instancia: “De la declaración como hijo/a de crianza así como el reconocimiento como padre o madre de crianza.”",
              "partes": "",
              "caracteristicas": [
                "Legitimados para actuar: la ley indica que en la sentencia o escritura pública de declaración de reconocimiento de hijo y/o nieto de crianza, el juez, subsidiariamente, resolverá que los declarantes o demandantes serán padre, madre y/o abuelo(a) de crianza (art. 3, Ley 2388 de 2024)."
              ],
              "etapas": [
                "Vía de jurisdicción voluntaria: cuando hay consenso entre las partes.",
                "Vía de proceso declarativo verbal: cuando no hay acuerdo entre las partes, a la cual puede acudir cualquiera de ellas.",
                "Presentación de la demanda, con base en el artículo 165 del Código General del Proceso y el artículo 6 de la Ley 2338 de 2024, reflejando las partes, pretensiones, hechos, fundamentos de derecho y pruebas que se solicitan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento."
              ],
              "documentos": [
                "Registro civil de nacimiento que permita constatar la identidad de los padres biológicos y si no han fallecido.",
                "Evidencia de una relación inexistente o precaria con sus padres biológicos, o de la muerte de estos, y demostración de acogida de los presuntos hijos de crianza como si fueran hijos consanguíneos, a través de fuertes lazos de solidaridad, afecto y respeto, y el sostenimiento de sus necesidades durante un periodo no menor a cinco (5) años.",
                "Declaraciones de los presuntos hijos de crianza y de otros familiares o personas cercanas, incluyendo a los padres biológicos si los hubiere.",
                "El otorgamiento de la custodia de manera provisional, si se tratare de menores de edad.",
                "Conceptos psicológicos.",
                "Informes del ICBF, las comisarías de familia o las personerías, a partir de visitas de campo, si se tratare de menores de edad.",
                "Afectación del principio de igualdad.",
                "Existencia de una relación afectiva entre padres e hijos de crianza durante un periodo no menor a cinco (5) años.",
                "La dependencia económica, total o parcial, del hijo con los padres de crianza.",
                "Documento de identidad del demandante.",
                "Nombre y dirección del demandado cuando sea posible."
              ],
              "material": [
                "Ley 2388 de 2024, artículo 2 (definición de hijo/a de crianza y de padre/madre de crianza).",
                "Ley 2388 de 2024, artículo 3 (declaración de reconocimiento).",
                "Ley 2388 de 2024, artículo 5 (competencia del juez de familia).",
                "Código General del Proceso, artículo 165.",
                "Ley 2338 de 2024, artículo 6.",
                "Jurisprudencia: Corte Constitucional, Sentencia C-029 de 2026."
              ]
            },
            {
              "id": "reconocimiento-padre-madre-de-crianza",
              "titulo": "Reconocimiento como padre o madre de crianza",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo / jurisdicción voluntaria (según el caso)",
              "queEs": "Es el reconocimiento de una situación jurídica parental que tiene la finalidad de incluir en el núcleo familiar a una persona con la que se ha estado compartiendo vínculos familiares durante un determinado periodo de tiempo. La Ley 2388 de 2024 define al padre o madre de crianza como la “persona(s) que de forma voluntaria y en virtud de lazos afectivos y emotivos ha(n) acogido dentro de su núcleo familiar a un menor del cual no son sus progenitores, pero que pueden tener o no una filiación biológica, y se encargan de su protección y cuidado como uno más de sus hijos durante un periodo de tiempo no menor a cinco (5) años.”",
              "comoFunciona": "Se puede presentar por dos vías: un proceso declarativo o un proceso de jurisdicción voluntaria. En este caso, la vía declarativa implica que una de las partes no quiere ser reconocida con esta calidad, por lo que existe controversia que deberá ser sometida ante un juez, como lo menciona la sentencia C-029 de 2026: “la jurisprudencia ha reconocido dos vías para obtener la declaración de hijos e hijas de crianza. La primera, mediante un proceso de jurisdicción voluntaria que supone el consenso entre las partes; la segunda, mediante un proceso declarativo verbal, al cual puede acudir cualquiera de ellas en ausencia de dicho acuerdo.”",
              "antePresenta": "Teniendo en cuenta el artículo 21 del Código General del Proceso, en su inciso 21, incluido por la Ley 2388 de 2024, este proceso se presenta ante un juez de familia de única instancia: “De la declaración como hijo/a de crianza así como el reconocimiento como padre o madre de crianza.”",
              "partes": "",
              "caracteristicas": [
                "Legitimados para actuar: la ley indica que en la sentencia o escritura pública de declaración de reconocimiento de hijo y/o nieto de crianza, el juez, subsidiariamente, resolverá que los declarantes o demandantes serán padre, madre y/o abuelo(a) de crianza (art. 3, Ley 2388 de 2024)."
              ],
              "etapas": [
                "Vía de jurisdicción voluntaria: cuando hay consenso entre las partes.",
                "Vía de proceso declarativo verbal: cuando una de las partes no quiere ser reconocida con esa calidad y existe controversia.",
                "Presentación de la demanda, con base en el artículo 165 del Código General del Proceso y el artículo 6 de la Ley 2338 de 2024, reflejando las partes, pretensiones, hechos, fundamentos de derecho y pruebas que se solicitan.",
                "Admisión y notificación: el juez admite la demanda y notifica a la parte demandada para que conteste en un plazo de 20 días.",
                "Contestación: la contraparte puede objetar cualquiera de las pretensiones o aceptarlas, solicitar pruebas, etc.",
                "Después de esto inicia la audiencia inicial y posteriormente la audiencia de instrucción y juzgamiento."
              ],
              "documentos": [
                "Registro civil de nacimiento que permita constatar la identidad de los padres biológicos y si no han fallecido.",
                "Evidencia de una relación inexistente o precaria con sus padres biológicos, o de la muerte de estos, y demostración de acogida de los presuntos hijos de crianza como si fueran hijos consanguíneos, a través de fuertes lazos de solidaridad, afecto y respeto, y el sostenimiento de sus necesidades durante un periodo no menor a cinco (5) años.",
                "Declaraciones de los presuntos hijos de crianza y de otros familiares o personas cercanas, incluyendo a los padres biológicos si los hubiere.",
                "El otorgamiento de la custodia de manera provisional, si se tratare de menores de edad.",
                "Conceptos psicológicos.",
                "Informes del ICBF, las comisarías de familia o las personerías, a partir de visitas de campo, si se tratare de menores de edad.",
                "Afectación del principio de igualdad.",
                "Existencia de una relación afectiva entre padres e hijos de crianza durante un periodo no menor a cinco (5) años.",
                "La dependencia económica, total o parcial, del hijo con los padres de crianza.",
                "Documento de identidad del demandante.",
                "Nombre y dirección del demandado cuando sea posible."
              ],
              "material": [
                "Ley 2388 de 2024, artículo 2 (definición de hijo/a de crianza y de padre/madre de crianza).",
                "Ley 2388 de 2024, artículo 3 (declaración de reconocimiento).",
                "Ley 2388 de 2024, artículo 5 (competencia del juez de familia).",
                "Código General del Proceso, artículo 165.",
                "Ley 2338 de 2024, artículo 6.",
                "Jurisprudencia: Corte Constitucional, Sentencia C-029 de 2026."
              ]
            },
            {
              "id": "custodia-y-cuidado-personal",
              "titulo": "Custodia y cuidado personal",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo / verbal sumario / de única instancia",
              "queEs": "Es el proceso mediante el cual se busca determinar quién tendrá a su cargo la custodia y el cuidado personal de un niño, niña o adolescente, cuando los padres no logran ponerse de acuerdo o cuando resulta necesario que una autoridad judicial establezca las condiciones de cuidado. La custodia se relaciona con la atención directa del menor y con las condiciones en las que desarrolla su vida cotidiana; esto no significa que el padre o madre que no tenga la custodia deje de tener obligaciones frente a su hijo. El numeral 3 del artículo 21 del CGP atribuye a los jueces de familia el conocimiento en única instancia de la custodia, cuidado personal y visitas de niños, niñas y adolescentes.",
              "comoFunciona": "El juez analiza las circunstancias particulares del niño y de su familia para determinar cuál es la medida que mejor garantiza sus derechos; no se basa en decidir cuál de los padres “gana” la custodia, sino en establecer qué situación y ambiente protege de mejor manera el interés superior del menor. La decisión puede establecer también condiciones relacionadas con las visitas del otro progenitor.",
              "antePresenta": "Ante el juez de familia, en única instancia. Cuando interviene un niño, niña o adolescente, la competencia territorial corresponde al juez de su domicilio o residencia, de acuerdo con las reglas especiales de competencia del artículo 28, numeral 2, del CGP.",
              "partes": "",
              "caracteristicas": [
                "Cuándo se cumple el requisito de conciliación: A) cuando se realiza la audiencia y no hay acuerdo; B) cuando alguna de las partes no comparece; C) cuando se presenta alguna de las demás situaciones previstas por la Ley 2220."
              ],
              "etapas": [
                "Conciliación extrajudicial en derecho: es requisito de procedibilidad en controversias sobre custodia y visitas.",
                "Presentación de la demanda.",
                "Admisión y notificación de la parte demandada.",
                "Contestación y solicitud de pruebas.",
                "Audiencia y práctica de pruebas.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil de nacimiento del niño, niña o adolescente (acredita la filiación y la identidad del menor).",
                "Documentos de identidad de los padres o interesados.",
                "Acta de conciliación, cuando las partes lograron un acuerdo sobre custodia o visitas y se busca que tenga efectos.",
                "Constancia de no acuerdo o de inasistencia a la conciliación (acredita el requisito de procedibilidad).",
                "Pruebas sobre las condiciones familiares y de cuidado: documentos, informes, testimonios u otros elementos.",
                "Poder otorgado al abogado, cuando se actúe mediante apoderado judicial."
              ],
              "material": [
                "Constitución Política, artículo 44.",
                "Ley 1098 de 2006, artículos 22 y 23.",
                "Código Civil, artículo 253.",
                "Código General del Proceso, artículo 21 numeral 3.",
                "Código General del Proceso, artículo 390.",
                "Ley 2220 de 2022, artículo 69.",
                "Jurisprudencia: Corte Constitucional, Sentencia T-311 de 2017 (la custodia y el cuidado personal comprenden la atención directa del niño, el contacto físico y la comunicación afectiva; aunque la custodia sea confiada a uno de los padres, el otro no queda liberado de sus deberes frente al hijo)."
              ]
            },
            {
              "id": "regulacion-y-modificacion-de-visitas",
              "titulo": "Regulación y modificación de visitas",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo / verbal sumario / de única instancia",
              "queEs": "Es el proceso mediante el cual se establece o modifica el régimen de visitas de un niño, niña o adolescente respecto del padre, madre o familiar que no convive permanentemente con él. La finalidad es garantizar que el menor pueda mantener relaciones familiares y afectivas, siempre que ello sea compatible con su interés superior; por eso el régimen de visitas no debe entenderse únicamente como un derecho del padre o de la madre, sino también como una forma de proteger el derecho del niño a mantener vínculos familiares. El artículo 21, numeral 3, del CGP incluye expresamente las visitas dentro de los asuntos de competencia del juez de familia en única instancia.",
              "comoFunciona": "El juez puede establecer aspectos como los días, horarios, fines de semana, vacaciones, fechas especiales, forma de entrega y retorno del menor y, dependiendo de las circunstancias, otras condiciones como acompañamiento o supervisión cuando exista alguna situación que lo justifique, para garantizar que las visitas se desarrollen adecuadamente. Si ya existe un régimen de visitas y las circunstancias familiares cambiaron, se puede solicitar su modificación, lo cual no constituye un proceso diferente.",
              "antePresenta": "Ante el juez de familia, en única instancia.",
              "partes": "",
              "caracteristicas": [
                "Excepciones al requisito de conciliación previa: cuando se solicitan medidas cautelares, o cuando el demandante manifiesta bajo juramento que desconoce el domicilio, lugar de habitación o de trabajo del demandado, o que este se encuentra ausente y se desconoce su paradero (Ley 2220 de 2022)."
              ],
              "etapas": [
                "Conciliación extrajudicial: es requisito de procedibilidad en controversias sobre régimen de visitas.",
                "Presentación de la demanda.",
                "Admisión y notificación.",
                "Contestación.",
                "Práctica de pruebas.",
                "Audiencia.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil de nacimiento del menor.",
                "Documentos de identidad de los padres.",
                "Acta o constancia de conciliación, dependiendo de si hubo acuerdo o no.",
                "Decisión judicial o acuerdo anterior sobre visitas, si se está solicitando una modificación.",
                "Pruebas que justifiquen el cambio: por ejemplo, modificación de domicilio, horarios laborales, u otros hechos relevantes.",
                "Poder, si se actúa mediante abogado."
              ],
              "material": [
                "Constitución Política, artículo 44.",
                "Ley 1098 de 2006, artículo 23.",
                "Código Civil, artículo 256.",
                "Código General del Proceso, artículo 21 numeral 3.",
                "Ley 2220 de 2022, artículo 69.",
                "Jurisprudencia: Corte Constitucional, Sentencia T-311 de 2017 (las visitas permiten que los niños mantengan y desarrollen relaciones afectivas con sus progenitores; el régimen debe interpretarse teniendo en cuenta el interés superior del menor)."
              ]
            },
            {
              "id": "controversias-ejercicio-patria-potestad",
              "titulo": "Controversias sobre el ejercicio de la patria potestad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo / verbal sumario / de única instancia",
              "queEs": "Es el proceso utilizado para resolver los desacuerdos que puedan surgir entre los padres respecto del ejercicio de la patria potestad o autoridad parental sobre sus hijos menores de edad. Aquí no se está solicitando necesariamente que uno de los padres pierda la patria potestad; lo que se busca es que el juez resuelva una controversia concreta sobre su ejercicio.",
              "comoFunciona": "La patria potestad comprende facultades y deberes de los padres frente a sus hijos no emancipados; cuando los padres no logran ponerse de acuerdo sobre su ejercicio, puede ser necesaria la intervención judicial. La suspensión de la patria potestad procede por las circunstancias previstas en el artículo 310 del Código Civil, entre ellas la demencia del padre o madre, la situación de estar en entredicho de administrar sus propios bienes y la larga ausencia, conforme al texto de dicha disposición.",
              "antePresenta": "Ante el juez de familia, en única instancia.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Conciliación extrajudicial: es requisito de procedibilidad, porque el artículo 69 de la Ley 2220 incluye expresamente las controversias entre padres sobre el ejercicio de la patria potestad.",
                "Presentación de la demanda.",
                "Admisión y notificación.",
                "Contestación.",
                "Práctica de pruebas.",
                "Audiencia.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil de nacimiento del hijo (acredita la filiación).",
                "Documentos de identidad de los padres.",
                "Acta de conciliación o constancia, dependiendo de si hubo acuerdo o si la conciliación fracasó o no se realizó por inasistencia.",
                "Documentos relacionados con la controversia concreta.",
                "Pruebas que permitan demostrar las circunstancias que dieron origen al desacuerdo: por ejemplo, informes escolares o médicos cuando sean relevantes, denuncias o medidas de protección cuando existan situaciones de violencia, y demás documentos.",
                "Poder, cuando se actúe mediante abogado."
              ],
              "material": [
                "Código Civil, artículos 288 y siguientes.",
                "Código General del Proceso, artículos 21 y 390.",
                "Ley 1098 de 2006.",
                "Ley 2220 de 2022, artículo 69."
              ]
            },
            {
              "id": "perdida-de-la-patria-potestad",
              "titulo": "Pérdida de la patria potestad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Proceso especial de familia",
              "queEs": "Es el proceso mediante el cual se solicita al juez que declare la pérdida de la patria potestad de uno de los padres, cuando se configura alguna de las causales establecidas legalmente, como maltrato habitual del hijo, abandono del hijo, condena privativa de la libertad superior a un año, entre otros. La pérdida de la patria potestad es diferente de la pérdida de la custodia: un padre puede no tener la custodia del hijo y aun así conservar la patria potestad.",
              "comoFunciona": "El juez debe comprobar que efectivamente se presenta una de las causales legales y adoptar la decisión teniendo en cuenta los derechos y el interés superior del niño. No basta con que exista un conflicto entre los padres; debe demostrarse una causal legal de pérdida.",
              "antePresenta": "Ante el juez de familia en primera instancia; el CGP lo atribuye expresamente en el artículo 22, y el artículo 119 de la Ley 1098 de 2006 asigna a estos jueces los procesos de pérdida, suspensión y restablecimiento de la patria potestad.",
              "partes": "",
              "caracteristicas": [
                "Dato: si el proceso es promovido de oficio, el juez debe indicar los hechos que fundamentan la actuación y la finalidad que persigue."
              ],
              "etapas": [
                "Presentación de la demanda o iniciación de oficio.",
                "Admisión y traslado al demandado.",
                "Citación de los parientes que deban ser oídos conforme al artículo 61 del Código Civil.",
                "Contestación.",
                "Práctica de pruebas.",
                "Audiencia y demás actuaciones procesales correspondientes.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil de nacimiento del menor.",
                "Documentos de identidad de las partes.",
                "Pruebas de la causal de pérdida de patria potestad (fundamentales, porque la pérdida debe estar sustentada en una causal legal).",
                "Documentos o decisiones administrativas o judiciales anteriores, si existen y tienen relación con los hechos.",
                "Información de los parientes que deben ser oídos, cuando sea posible suministrarla, porque el artículo 395 exige indicarlos en la demanda.",
                "Poder, cuando se actúe mediante abogado."
              ],
              "material": [
                "Código Civil, artículo 315.",
                "Código General del Proceso, artículos 22 y 395.",
                "Ley 1098 de 2006, artículo 119."
              ]
            },
            {
              "id": "suspension-de-la-patria-potestad",
              "titulo": "Suspensión de la patria potestad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Proceso especial de familia / de primera instancia",
              "queEs": "Es el proceso mediante el cual se solicita que el juez suspenda temporalmente el ejercicio de la patria potestad de uno de los padres, cuando se configura alguna de las circunstancias establecidas por la ley, por ejemplo la larga ausencia, entre otras. A diferencia de la pérdida, la suspensión tiene un carácter temporal y puede dar lugar posteriormente a un proceso de restablecimiento cuando desaparezcan las circunstancias que la originaron.",
              "comoFunciona": "El juez estudia la situación del padre, del hijo y las pruebas aportadas para determinar si existe una causal que justifique la suspensión; la decisión debe orientarse siempre a la protección integral del menor.",
              "antePresenta": "Ante el juez de familia en primera instancia.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Se aplica el trámite especial del artículo 395 del CGP: presentación de la demanda o actuación de oficio.",
                "Admisión y traslado.",
                "Citación de los parientes que deban ser oídos.",
                "Contestación.",
                "Práctica de pruebas.",
                "Audiencia.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil de nacimiento.",
                "Documentos de identidad.",
                "Pruebas de la causal de suspensión.",
                "Decisiones administrativas o judiciales anteriores, si existen.",
                "Información de los parientes que deben ser citados.",
                "Poder, cuando corresponda."
              ],
              "material": [
                "Código Civil, artículos 310 y siguientes.",
                "Código General del Proceso, artículos 22 y 395.",
                "Ley 1098 de 2006.",
                "Jurisprudencia: Corte Constitucional, Sentencia C-145 de 2010 (diferencia los efectos de la suspensión y de la pérdida de la patria potestad: la suspensión tiene carácter temporal y puede ser objeto de restablecimiento cuando desaparecen las circunstancias que la originaron)."
              ]
            },
            {
              "id": "restablecimiento-de-la-patria-potestad",
              "titulo": "Restablecimiento de la patria potestad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Proceso especial de familia / de primera instancia",
              "queEs": "Es el proceso mediante el cual se solicita que se restablezca la patria potestad que anteriormente había sido suspendida o afectada por una decisión judicial, cuando han desaparecido las circunstancias que justificaron esa medida.",
              "comoFunciona": "El juez no se limita a verificar que haya pasado determinado tiempo; también analiza las circunstancias actuales y establece si el restablecimiento resulta compatible con la protección de los derechos del menor.",
              "antePresenta": "Ante el juez de familia en primera instancia; el artículo 22 del CGP incluye expresamente el restablecimiento de la patria potestad dentro de la competencia del juez de familia.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Presentación de la demanda.",
                "Admisión y traslado.",
                "Citación de los parientes que deban ser oídos.",
                "Práctica de pruebas.",
                "Audiencia.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil del hijo.",
                "Copia de la sentencia anterior que suspendió o afectó la patria potestad.",
                "Documentos que permitan demostrar que desaparecieron las circunstancias que originaron la medida.",
                "Pruebas sobre las condiciones actuales del padre y del menor.",
                "Documentos de identidad.",
                "Poder."
              ],
              "material": [
                "Código Civil, artículo 310.",
                "Código General del Proceso, artículos 22 y 395.",
                "Ley 1098 de 2006, artículo 119."
              ]
            },
            {
              "id": "privacion-administracion-bienes-del-hijo",
              "titulo": "Privación de la administración de los bienes del hijo",
              "formato": "declarativoDetallado",
              "tipoProceso": "Proceso especial de familia / de primera instancia",
              "queEs": "Es el proceso mediante el cual se solicita que uno de los padres sea privado de la administración de los bienes de su hijo, cuando se presenta una situación que, conforme a la ley, justifica retirar esa facultad. El artículo 299 del Código Civil establece que la administración y el usufructo legal de los bienes del hijo cesan, entre otros casos, cuando por sentencia judicial se declara a los padres responsables de dolo o culpa grave en la administración; el artículo 395 del Código General del Proceso regula específicamente el trámite judicial para la privación de la administración de los bienes del hijo. No debe confundirse con la autorización para vender o gravar un bien: en este proceso se pretende retirar la facultad de administración.",
              "comoFunciona": "El juez estudia las circunstancias que afectan la administración de los bienes del menor y determina si existe fundamento para privar al padre o madre de esa facultad. El artículo 395 del CGP incluye expresamente esta privación dentro de este trámite especial.",
              "antePresenta": "Ante el juez de familia en primera instancia.",
              "partes": "",
              "caracteristicas": [
                "Dato: cuando se solicite la privación de la administración, la demanda debe indicar los parientes que deban ser oídos conforme al artículo 61 del Código Civil; estos serán citados por aviso o mediante emplazamiento, según el artículo 395 del CGP."
              ],
              "etapas": [
                "Presentación de la demanda.",
                "Admisión.",
                "Citación de los parientes que deban ser oídos.",
                "Contestación.",
                "Práctica de pruebas.",
                "Audiencia.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil de nacimiento del menor.",
                "Documentos que permitan identificar los bienes.",
                "Pruebas relacionadas con la administración de esos bienes.",
                "Pruebas de la conducta o circunstancia que justifica la privación.",
                "Documentos de identidad.",
                "Información de los parientes que deben ser oídos.",
                "Poder, cuando corresponda."
              ],
              "material": [
                "Código Civil, artículos 295 al 300.",
                "Código General del Proceso, artículos 22 y 395."
              ]
            },
            {
              "id": "regulacion-internacional-de-visitas",
              "titulo": "Regulación internacional de visitas",
              "formato": "declarativoDetallado",
              "tipoProceso": "Procedimiento especial de familia",
              "queEs": "Es el mecanismo destinado a facilitar o establecer el contacto entre un niño, niña o adolescente y uno de sus padres, cuando estos se encuentran en diferentes países; su finalidad es proteger el vínculo familiar del menor, pero teniendo siempre como límite el interés superior del niño.",
              "comoFunciona": "Involucra cooperación entre las autoridades de los Estados donde se encuentran el menor y el progenitor; no existe un único procedimiento interno que pueda describirse como si todos los casos de visitas internacionales fueran iguales. La regulación internacional de visitas puede solicitarse de manera independiente a la restitución internacional. La Ley 2524 de 2025 establece que no es necesario que haya existido previamente un traslado o retención ilícitos, ni que exista un régimen de visitas establecido con anterioridad. El derecho de visitas puede comprender, entre otras formas de contacto, visitas personales, comunicación por medios tecnológicos y el traslado temporal del niño al país de residencia habitual del progenitor o a otro Estado.",
              "antePresenta": "El ICBF actúa como Autoridad Central colombiana en la fase administrativa. Cuando la solicitud llega a la fase judicial, conoce el juez de familia o promiscuo de familia del lugar donde se encuentre el niño, niña o adolescente menor de dieciséis (16) años, de conformidad con el artículo 25 de la Ley 2524 de 2025.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Las etapas dependen del mecanismo utilizado, pero normalmente comprenden: solicitud.",
                "Determinación de la autoridad competente.",
                "Comunicación o notificación a los interesados.",
                "Valoración de las circunstancias del menor.",
                "Práctica de pruebas, si son necesarias.",
                "Decisión o establecimiento de las condiciones de visita."
              ],
              "documentos": [
                "Registro civil del menor.",
                "Documentos de identidad.",
                "Decisiones anteriores sobre custodia o visitas, si existen.",
                "Información sobre el domicilio de ambos padres.",
                "Propuesta de régimen de visitas.",
                "Documentos que permitan demostrar la relación familiar.",
                "Información sobre viajes y condiciones de traslado, cuando sea necesario.",
                "Nota: además del formulario internacional correspondiente, pueden requerirse el registro civil de nacimiento del niño, documento de identidad del solicitante, fotografías recientes y datos que permitan ubicar al niño; si el caso lo requiere, pueden exigirse traducciones o documentos adicionales conforme a la legislación del país requerido."
              ],
              "material": [
                "Ley 2524 de 2025, artículos 1, 25, 33 y 34.",
                "Ley 173 de 1994.",
                "Ley 880 de 2004."
              ]
            },
            {
              "id": "homologacion-declaratoria-adoptabilidad",
              "titulo": "Homologación de la declaratoria de adoptabilidad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Actuación judicial especial de familia",
              "queEs": "Es el control judicial que se realiza sobre una declaratoria de adoptabilidad emitida por la autoridad administrativa; su finalidad es que el juez verifique que la decisión administrativa haya cumplido los requisitos legales y haya respetado los derechos y garantías del niño, niña o adolescente y de las demás personas involucradas.",
              "comoFunciona": "El juez recibe el expediente administrativo y revisa la actuación adelantada por la autoridad administrativa; si encuentra que se cumplieron los requisitos, puede homologar la declaratoria. Si encuentra que falta algún requisito legal, no simplemente la confirma: el artículo 123 ordena devolver el expediente al Defensor de Familia para que subsane la irregularidad.",
              "antePresenta": "Ante el juez de familia, de acuerdo con la competencia establecida en la Ley 1098 de 2006.",
              "partes": "",
              "caracteristicas": [
                "Dato: la sentencia de homologación se dicta de plano; si el juez advierte la omisión de alguno de los requisitos legales, debe devolver el expediente al Defensor de Familia para que subsane la irregularidad, conforme al artículo 123 de la Ley 1098 de 2006."
              ],
              "etapas": [
                "Remisión del expediente administrativo.",
                "Revisión judicial.",
                "Verificación de los requisitos.",
                "Decisión de homologación."
              ],
              "documentos": [
                "Aquí no se presenta normalmente una demanda con anexos como en un proceso ordinario; lo fundamental es el expediente administrativo, que contiene: resolución de declaratoria de adoptabilidad.",
                "Pruebas recopiladas durante el PARD.",
                "Actuaciones realizadas por el Defensor de Familia.",
                "Notificaciones.",
                "Conceptos e informes correspondientes."
              ],
              "material": [
                "Ley 1098 de 2006, artículos 119 y 123.",
                "Jurisprudencia: Corte Constitucional, Sentencia T-730 de 2015, retomada posteriormente en la Sentencia T-472 de 2025 (la homologación no constituye únicamente una revisión formal del procedimiento administrativo, sino que implica un control judicial tanto formal como material de la decisión de adoptabilidad; el juez debe verificar el respeto del debido proceso y también si la decisión administrativa resulta razonable y adecuada para proteger los derechos del niño, niña o adolescente)."
              ]
            },
            {
              "id": "pard-aclaracion-de-clasificacion",
              "titulo": "PARD / Aclaración de clasificación",
              "formato": "declarativoDetallado",
              "tipoProceso": "Procedimiento administrativo",
              "queEs": "El Proceso Administrativo de Restablecimiento de Derechos (PARD) es el procedimiento mediante el cual la autoridad administrativa busca restablecer los derechos de un niño, niña o adolescente cuando estos han sido amenazados o vulnerados.",
              "comoFunciona": "La autoridad verifica la situación del menor, determina cuáles derechos están amenazados o vulnerados y adopta las medidas de restablecimiento correspondientes. El asunto pasa al juez, por ejemplo, cuando se requiere la homologación de la declaratoria de adoptabilidad, o cuando la ley atribuye al juez de familia la revisión de determinadas decisiones administrativas.",
              "antePresenta": "Principalmente ante el Defensor de Familia y, en los casos que determine la ley, ante el Comisario de Familia.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [],
              "documentos": [],
              "material": [
                "Ley 1098 de 2006, especialmente artículos 50 y siguientes.",
                "Ley 1098 de 2006, artículo 119 (competencias del juez de familia).",
                "Ley 1098 de 2006, artículos 99 y siguientes (procedimiento administrativo de restablecimiento de derechos)."
              ]
            },
            {
              "id": "proceso-de-adopcion",
              "titulo": "Proceso de adopción",
              "formato": "declarativoDetallado",
              "tipoProceso": "Proceso especial de familia / de primera instancia",
              "queEs": "Es el proceso judicial mediante el cual se busca que el juez declare jurídicamente la adopción de un niño, niña o adolescente, creando entre el adoptante y el adoptado una relación de filiación con los efectos establecidos por la ley; por ejemplo, el adoptado adquiere los apellidos de los adoptantes, se extinguen por regla general los vínculos de parentesco con su familia de origen, y surgen entre adoptante y adoptado los derechos y deberes propios de la relación paterno-filial. Es importante diferenciarlo de la declaratoria de adoptabilidad: esta última no es la adopción misma; primero debe cumplirse la etapa administrativa y posteriormente se adelanta el proceso judicial de adopción.",
              "comoFunciona": "Los interesados presentan la demanda ante el juez de familia con los documentos exigidos por la Ley 1098 de 2006; el juez revisa los requisitos, decreta las pruebas necesarias y posteriormente decide sobre la adopción.",
              "antePresenta": "Ante el juez de familia en primera instancia del domicilio de los adoptantes. Cuando se trata de adopción internacional, es competente cualquier juez de familia del país. La demanda debe formularse mediante apoderado, según el artículo 124 de la Ley 1098 de 2006.",
              "partes": "",
              "caracteristicas": [
                "Dato: el artículo 126 establece reglas especiales y términos propios para este proceso.",
                "Dato: en el caso de adopción internacional existen documentos adicionales, como la autorización del país de residencia de los adoptantes para el ingreso del niño y el concepto favorable correspondiente."
              ],
              "etapas": [
                "Verificación de los requisitos.",
                "Presentación de la demanda mediante apoderado.",
                "Admisión.",
                "Traslado al Defensor de Familia por tres días hábiles.",
                "Si el Defensor se allana, el juez dicta sentencia dentro del término establecido por el artículo 126.",
                "Si es necesario, se decretan y practican pruebas.",
                "Sentencia.",
                "Inscripción de la decisión en el registro civil."
              ],
              "documentos": [
                "Consentimiento para la adopción, cuando sea necesario (por ejemplo, cuando la adopción requiere la manifestación de voluntad de quienes ejercen la patria potestad sobre el niño, niña o adolescente).",
                "Copia de la declaratoria de adoptabilidad o autorización para la adopción, según el caso.",
                "Registro civil de nacimiento de los adoptantes y del niño.",
                "Registro civil de matrimonio o prueba de convivencia extramatrimonial, cuando corresponda.",
                "Certificación de idoneidad expedida por el ICBF o entidad autorizada, con una antigüedad no superior a seis meses.",
                "Constancia de integración personal del niño con el adoptante o adoptantes.",
                "Los documentos adicionales exigidos por el artículo 124 de la Ley 1098 de 2006, cuando sean aplicables al caso, incluyendo los relacionados con la convivencia de los adoptantes, antecedentes y demás requisitos establecidos por la norma.",
                "En adopciones internacionales, además de los anteriores, los documentos previstos en el artículo 125 de la Ley 1098 de 2006, entre ellos la autorización del gobierno del país de residencia de los adoptantes para el ingreso del niño, niña o adolescente y el concepto favorable del Defensor de Familia."
              ],
              "material": [
                "Constitución Política, artículo 44.",
                "Ley 1098 de 2006, artículos 61 y siguientes, especialmente artículos 124 y 126.",
                "Ley 1098 de 2006, artículo 125 (adopción internacional).",
                "Jurisprudencia: Corte Constitucional, Sentencia T-319 de 2019 (útil para comprender la relación entre la declaratoria de adoptabilidad, la patria potestad y los derechos del niño)."
              ]
            },
            {
              "id": "revision-judicial-decisiones-administrativas-adoptabilidad",
              "titulo": "Revisión judicial de decisiones administrativas relacionadas con adoptabilidad",
              "formato": "declarativoDetallado",
              "tipoProceso": "Actuación judicial especial de familia",
              "queEs": "Es la intervención del juez de familia para revisar determinadas decisiones adoptadas por el Defensor de Familia o el Comisario de Familia dentro de los procedimientos administrativos de protección. No debe confundirse con la homologación: la homologación tiene reglas específicas para la declaratoria de adoptabilidad, mientras que la revisión judicial comprende los demás eventos en los que la ley permite o exige la intervención judicial.",
              "comoFunciona": "El juez analiza la actuación administrativa y verifica si la decisión se ajustó a la ley y si fueron protegidos los derechos del niño, niña o adolescente.",
              "antePresenta": "Ante el juez de familia, en los casos expresamente previstos por la Ley 1098 de 2006.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Las etapas dependen de la decisión administrativa objeto de revisión, pero en términos generales comprenden: remisión o presentación del expediente.",
                "Revisión de la actuación.",
                "Análisis de las pruebas.",
                "Verificación de garantías.",
                "Decisión judicial."
              ],
              "documentos": [
                "Expediente administrativo completo.",
                "Decisión administrativa que se pretende revisar.",
                "Pruebas utilizadas por la autoridad administrativa.",
                "Actas y constancias de las actuaciones realizadas.",
                "Recursos o solicitudes presentados durante el trámite, si existen."
              ],
              "material": [
                "Ley 1098 de 2006, artículo 99, siguientes y 119."
              ]
            },
            {
              "id": "proceso-de-alimentos",
              "titulo": "Proceso de alimentos",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo / verbal sumario (la fijación, aumento, disminución, exoneración de alimentos y restitución de pensiones alimenticias se tramitan por esta vía, conforme al artículo 390 del CGP)",
              "queEs": "Es el proceso mediante el cual se busca que el juez de familia, la defensoría de familia o los centros de conciliación determinen la obligación alimentaria que una persona tiene frente a otra, en razón del vínculo de parentesco, matrimonio o unión marital de hecho que exista entre ellos. El derecho de alimentos se fundamenta en el principio de solidaridad: el alimentario (quien recibe) no está en capacidad de proveer su propia subsistencia, y el alimentante (quien paga) cuenta con los medios económicos para contribuir a la subsistencia del otro; esto se ve en el artículo 411 del Código Civil, que establece quiénes son los titulares de este derecho: el cónyuge, los descendientes, los ascendientes, los hermanos, entre otros. Bajo esta figura se tramitan cuatro modalidades con distintas pretensiones: Fijación (solicitud inicial para establecer por primera vez el monto de la cuota alimentaria, cuando no existe un acuerdo previo entre las partes; puede solicitarse también alimentos provisionales desde la presentación de la demanda, si se acredita al menos la prueba de la capacidad económica del demandado). Aumento (procede cuando las circunstancias que dieron origen a la cuota inicial han cambiado favorablemente para el alimentado o han aumentado sus necesidades, por ejemplo si mejoró la capacidad económica del obligado o si las necesidades del beneficiario se incrementaron). Disminución (procede cuando la capacidad económica del alimentante se ha visto reducida —pérdida de empleo, enfermedad, nuevas cargas familiares— o cuando las necesidades del alimentario han disminuido, sin que exista causal suficiente para la exoneración). Exoneración (solicitud para que cese por completo la obligación alimentaria, porque desaparecieron las circunstancias que la originaron; según la jurisprudencia T-854 de 2012 y el artículo 422 del Código Civil, la mayoría de edad no extingue automáticamente la obligación, sino que debe acreditarse que ya no se depende económicamente del alimentario para subsistir o que se perdieron las cualidades necesarias para que se deban alimentos).",
              "comoFunciona": "El artículo 111 de la Ley 1098 de 2006 establece que, tratándose de menores de edad, la fijación puede iniciarse por vía administrativa ante el Defensor o Comisario de Familia, o en un centro de conciliación, quien cita a audiencia de conciliación al obligado; si el obligado no concurre o no se logra conciliar, el defensor/comisario puede fijar una cuota provisional, y si alguna de las partes lo solicita dentro de los cinco días siguientes, el asunto se remite al juez de familia para que dé inicio al proceso judicial. Cuando el asunto llega a sede judicial, se tramita como proceso verbal sumario de única instancia (artículo 390 y siguientes del CGP), armonizado con el artículo 397 del CGP para las reglas específicas de alimentos, y con el artículo 129 del Código de la Infancia y la Adolescencia cuando el beneficiario es menor de edad. El artículo 397 del CGP es la norma central: establece que desde la presentación de la demanda el juez puede fijar alimentos provisionales desde la admisión de la demanda, teniendo en cuenta los elementos aportados sobre las necesidades del alimentario y la capacidad económica del obligado; regula el cobro ejecutivo de lo debido y faculta al juez para decretar pruebas de oficio sobre capacidad económica y necesidades. Las solicitudes de aumento, disminución o exoneración se tramitan mediante el procedimiento previsto para los asuntos de alimentos; cuando existe un proceso o decisión judicial previa, debe verificarse la regla específica de competencia y el mecanismo procesal aplicable al caso concreto.",
              "antePresenta": "En primera instancia administrativa (para menores): ante el Defensor de Familia, el Comisario de Familia o un centro de conciliación. Si no hay acuerdo o no se conoce la dirección del obligado, el defensor/comisario/conciliador remite un acta que sirve de base al juez de familia. Vía judicial: ante el juez de familia (o promiscuo de familia/municipal donde no hay juez de familia), quien tramita el proceso verbal sumario de única instancia conforme al artículo 21, numeral 3 y siguientes, del CGP.",
              "partes": "",
              "caracteristicas": [
                "Fijación, aumento, disminución y exoneración son las cuatro pretensiones que se tramitan bajo esta figura, con requisitos y prueba distintos entre sí (ver «Qué es»)."
              ],
              "etapas": [
                "Vía administrativa (conciliación) previa, si el beneficiario es menor de edad: solicitud ante el Defensor, Comisario de Familia o centro de conciliación; citación a audiencia de conciliación al obligado; si no hay acuerdo o no comparece, se fija cuota provisional y se remite el informe al juez si alguna parte lo pide.",
                "Presentación de la demanda (o remisión del informe administrativo que hace sus veces).",
                "Admisión y fijación de alimentos provisionales, si hay prueba sumaria de la capacidad económica del demandado.",
                "Notificación y traslado al demandado.",
                "Contestación de la demanda.",
                "Audiencia (artículo 392 CGP): se concentran las etapas de saneamiento, fijación del litigio, práctica de pruebas y, de ser posible, sentencia.",
                "Sentencia.",
                "Incidentes posteriores de incremento, disminución o exoneración: se tramitan en el mismo expediente, ante el mismo juez, en audiencia, previa citación de la contraparte (art. 397 num. 6 CGP); no requieren nueva demanda ni nuevo proceso."
              ],
              "documentos": [
                "Registro civil de nacimiento del alimentario (acredita el vínculo) o registro civil de matrimonio (si el alimentario es el cónyuge).",
                "Documentos de identidad de las partes.",
                "Prueba siquiera sumaria de la capacidad económica del demandado (certificado laboral, extractos, declaración de renta, etc.).",
                "Prueba de las necesidades del alimentario, cuando se pida una cuota superior a 1 SMLMV.",
                "Constancia de la conciliación administrativa (o de la inasistencia/no acuerdo), cuando el trámite provino del Defensor o Comisario de Familia.",
                "Para incidentes de aumento: pruebas del cambio favorable en la capacidad económica del alimentante o del incremento de necesidades del alimentario.",
                "Para incidentes de disminución: pruebas de la reducción de ingresos o de nuevas cargas del alimentante.",
                "Para exoneración: pruebas de que el alimentario alcanzó la mayoría de edad sin estar estudiando ni tener impedimento, que se emancipó, que trabaja, o que dejó de tener las cualidades que originaron la obligación.",
                "Poder otorgado al abogado, cuando se actúe mediante apoderado."
              ],
              "material": [
                "Código Civil, artículo 411 (titulares del derecho de alimentos).",
                "Código Civil, artículo 413 (alimentos congruos y necesarios).",
                "Código Civil, artículo 422 (duración de la obligación).",
                "Ley 1098 de 2006 (Código de la Infancia y la Adolescencia), artículos 24 y 111.",
                "Código General del Proceso, artículo 21 (competencia).",
                "Código General del Proceso, artículo 390 (proceso verbal sumario).",
                "Código General del Proceso, artículos 391 y 392 (audiencia concentrada).",
                "Código General del Proceso, artículo 397 (reglas especiales de alimentos, incluido el trámite de incremento/disminución/exoneración en el mismo expediente).",
                "Código Penal, artículo 233 (inasistencia alimentaria).",
                "Jurisprudencia: Corte Constitucional, Sentencia T-854 de 2012 (debido proceso en trámites de exoneración de la obligación alimentaria).",
                "Jurisprudencia: Corte Suprema de Justicia, Sala de Casación Penal, SP1897-2025 (capacidad económica real del obligado y ausencia de justa causa en el delito de inasistencia alimentaria; no puede presumirse capacidad económica suficiente para atribuir responsabilidad penal)."
              ]
            },
            {
              "id": "peticion-de-herencia",
              "titulo": "Petición de herencia",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo (el trámite se determina conforme a las reglas del Código General del Proceso y la cuantía)",
              "queEs": "Es la acción mediante la cual una persona que se considera heredero reclama el reconocimiento de esa calidad y la entrega de los bienes de la herencia (o de su cuota) frente a quien los posee sin ese derecho, o frente a quienes fueron reconocidos como herederos sin que se hubiera incluido a todos los llamados a suceder. Está consagrada en el artículo 1321 del Código Civil.",
              "comoFunciona": "Se dirige contra el heredero putativo o contra quien tenga los bienes hereditarios. Es distinta de la nulidad de la partición o de la escritura de liquidación notarial: procede cuando quien tiene derecho a suceder reclama judicialmente la herencia o la cuota hereditaria frente a quien la posee invocando una calidad hereditaria que corresponde total o parcialmente al demandante.",
              "antePresenta": "Ante el juez de familia (o civil, según la ubicación) del domicilio del demandado, conforme a las reglas generales de competencia del CGP.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Presentación de la demanda declarativa.",
                "Admisión y notificación al demandado.",
                "Contestación de la demanda.",
                "Audiencia inicial y práctica de pruebas.",
                "Audiencia de instrucción y juzgamiento.",
                "Sentencia que reconoce (o niega) la calidad de heredero y ordena la restitución de los bienes o de la cuota correspondiente."
              ],
              "documentos": [
                "Registro civil que acredite el parentesco o vínculo con el causante.",
                "Registro civil de defunción del causante.",
                "Prueba de la existencia y estado de los bienes hereditarios.",
                "Copia del proceso o trámite notarial de sucesión ya realizado, si lo hay.",
                "Poder al abogado."
              ],
              "material": [
                "Código Civil, artículo 1321 y siguientes (de la petición de herencia).",
                "Código General del Proceso (trámite declarativo según cuantía)."
              ]
            },
            {
              "id": "nulidad-de-testamento",
              "titulo": "Nulidad de testamento",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Es el proceso mediante el cual se solicita al juez que declare inválido un testamento porque, al momento de su otorgamiento, no se cumplieron los requisitos de fondo o de forma exigidos por la ley.",
              "comoFunciona": "Debe acreditarse al menos una de las causales legales. La demanda se dirige contra los demás herederos o interesados en la validez del testamento. La consecuencia jurídica de los defectos del testamento depende de la naturaleza de la causal invocada y de las reglas de nulidad aplicables; debe distinguirse entre nulidad absoluta y relativa, y determinarse si el defecto afecta la capacidad, el consentimiento, las solemnidades o el contenido del acto.",
              "antePresenta": "Ante el juez de familia del domicilio pertinente, o en su defecto el juez civil.",
              "partes": "",
              "caracteristicas": [
                "Causales principales: falta de capacidad del testador (por ejemplo, menor de 14 años, art. 1061 C.C., o quien no pudo expresar su voluntad con claridad).",
                "Testamento otorgado por un tercero a nombre del testador (acto personal que no admite representación).",
                "Testamento mancomunado (otorgado por dos o más personas conjuntamente), prohibido en Colombia.",
                "Incumplimiento de las solemnidades legales de forma.",
                "Testigos inhábiles.",
                "Vicios del consentimiento: fuerza, dolo o fraude (art. 1063 C.C.).",
                "Institución a favor de persona incierta que no pueda identificarse."
              ],
              "etapas": [
                "Presentación de la demanda declarativa.",
                "Admisión y notificación al demandado.",
                "Contestación de la demanda.",
                "Audiencia inicial y práctica de pruebas.",
                "Audiencia de instrucción y juzgamiento.",
                "Sentencia."
              ],
              "documentos": [
                "Copia auténtica del testamento.",
                "Registro civil de defunción del causante.",
                "Registros civiles que acrediten el interés de quien demanda.",
                "Pruebas de la causal invocada (peritajes, testimonios, etc.).",
                "Poder al abogado."
              ],
              "material": [
                "Código Civil, artículos 1061, 1063 y concordantes (requisitos y vicios del testamento).",
                "Código Civil, artículos 1740 a 1743 (nulidad absoluta y relativa, en lo aplicable)."
              ]
            },
            {
              "id": "reforma-del-testamento",
              "titulo": "Reforma del testamento (acción de reforma por lesión a la legítima)",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Es la acción que pueden ejercer los legitimarios (hijos, cónyuge y, a falta de estos, otros asignatarios forzosos) cuando el testador dispuso de sus bienes vulnerando las asignaciones forzosas que la ley les reconoce (legítima rigorosa o efectiva, porción conyugal). No busca anular el testamento, sino ajustarlo para que se respeten esas asignaciones.",
              "comoFunciona": "El juez revisa si el testamento efectivamente desconoció la legítima u otra asignación forzosa y, de ser así, ordena reformar las disposiciones testamentarias en la medida necesaria para restablecer el derecho del legitimario afectado.",
              "antePresenta": "Ante el juez de familia del domicilio.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Presentación de la demanda declarativa.",
                "Admisión y notificación al demandado.",
                "Contestación de la demanda.",
                "Audiencia inicial y práctica de pruebas.",
                "Audiencia de instrucción y juzgamiento.",
                "Sentencia."
              ],
              "documentos": [
                "Copia del testamento.",
                "Registro civil que acredite la calidad de legitimario.",
                "Inventario o prueba de los bienes del causante para calcular la legítima.",
                "Poder al abogado."
              ],
              "material": [
                "Código Civil, artículo 1226 y artículos relativos a las asignaciones forzosas y a la acción de reforma del testamento (Libro III, título de las asignaciones forzosas)."
              ]
            },
            {
              "id": "indignidad-sucesoral",
              "titulo": "Indignidad sucesoral",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo",
              "queEs": "Es la acción mediante la cual se solicita que un heredero o legatario sea excluido de la sucesión por haber incurrido en alguna de las causales de indignidad previstas en la ley (por ejemplo, haber atentado contra la vida del causante, haberlo obligado a testar o cambiar su testamento, o haberlo abandonado en circunstancias que ameritaban su cuidado).",
              "comoFunciona": "A diferencia del desheredamiento (que depende de la voluntad expresa del testador), la indignidad opera por disposición de la ley y debe ser declarada judicialmente a petición de quien tenga interés en ella; no opera de pleno derecho.",
              "antePresenta": "Ante el juez de familia del domicilio pertinente.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [
                "Presentación de la demanda declarativa.",
                "Admisión y notificación al demandado.",
                "Contestación de la demanda.",
                "Audiencia inicial y práctica de pruebas.",
                "Audiencia de instrucción y juzgamiento.",
                "Sentencia."
              ],
              "documentos": [
                "Registro civil de defunción del causante.",
                "Registro civil que acredite el parentesco del indigno.",
                "Pruebas de los hechos constitutivos de la causal de indignidad (sentencias penales, denuncias, pruebas testimoniales, etc.).",
                "Poder al abogado."
              ],
              "material": [
                "Código Civil, artículos 1025 y siguientes, con las modificaciones introducidas por la Ley 1893 de 2018 y demás normas concordantes."
              ]
            },
            {
              "id": "desheredamiento",
              "titulo": "Desheredamiento",
              "formato": "declarativoDetallado",
              "tipoProceso": "Declarativo (normalmente se discute dentro de un proceso sobre la validez o eficacia del testamento que contiene la cláusula de desheredamiento)",
              "queEs": "Es la disposición mediante la cual el testador priva a un legitimario de todo o parte de su legítima, por una causa legal expresamente señalada en el testamento (por ejemplo, injuria grave contra el testador). A diferencia de la indignidad, aquí es el propio causante quien, en vida y mediante testamento, decide excluir al heredero.",
              "comoFunciona": "El desheredamiento debe fundarse en una causal legal, expresarse en el testamento y, si es controvertido después de la muerte del testador (por ejemplo, porque el desheredado niega la causal), se discute mediante proceso declarativo ante el juez.",
              "antePresenta": "Ante el juez de familia del domicilio pertinente, cuando se controvierte la validez o procedencia del desheredamiento.",
              "partes": "",
              "caracteristicas": [],
              "etapas": [],
              "documentos": [
                "Copia del testamento que contiene la cláusula de desheredamiento.",
                "Pruebas de la causal invocada por el testador.",
                "Registro civil que acredite el parentesco.",
                "Poder al abogado."
              ],
              "material": [
                "Código Civil, artículo 1266, título de las asignaciones forzosas y del desheredamiento."
              ]
            }
          ]
        },
        jurisdiccionVoluntaria: {
          nombre: "Jurisdicción voluntaria",
          descripcion: "Trámites sin conflicto entre partes, resueltos ante un juez de familia para darles validez legal.",
          color: "#3E6FA5",
          imagen: "assets/images/tipo-jurisdiccion-voluntaria.jpg",
          procesos: [
            {
              id: "conciliacion-familiar",
              titulo: "Audiencia de conciliación familiar",
              consiste: "Espacio dirigido por un juez o conciliador para que las partes lleguen a un acuerdo antes de litigar.",
              aplica: "Como paso previo obligatorio en varios conflictos familiares.",
              requisitos: ["Solicitud de conciliación", "Identificación de las partes"],
              video: { titulo: "Cómo se ve una audiencia de conciliación", url: "" },
              quiz: [
                { pregunta: "¿Para qué sirve la conciliación familiar?", opciones: ["Para litigar directamente", "Para llegar a un acuerdo antes de litigar", "Para registrar un nacimiento"], correcta: 1 }
              ]
            },
            {
              id: "interdiccion",
              titulo: "Proceso de interdicción",
              consiste: "Determina judicialmente si una persona necesita un representante legal por no poder administrar sus asuntos.",
              aplica: "Cuando una persona, por su condición, no puede tomar decisiones por sí misma.",
              requisitos: ["Dictamen médico", "Pruebas de la condición de la persona"],
              video: { titulo: "Audiencia de interdicción", url: "" },
              quiz: [
                { pregunta: "¿Qué prueba es clave en este proceso?", opciones: ["Un dictamen médico", "Un contrato de arriendo", "Una factura"], correcta: 0 }
              ]
            }
          ]
        }
      }
    },

    /* Ramas visibles pero deshabilitadas: "Próximamente".
       Ya tienen imagen y descripción; cuando se activen, solo se
       agrega su bloque "tipos" como en Familia. */
    civil: {
      nombre: "Civil",
      activa: false,
      color: "#6B4E9C",
      imagen: "assets/images/rama-civil.jpg",
      descripcion: "Procesos entre particulares sobre contratos, obligaciones, propiedad y responsabilidad civil.",
      tipos: {}
    },
    comercial: {
      nombre: "Comercial",
      activa: false,
      color: "#2F7A6B",
      imagen: "assets/images/rama-comercial.jpg",
      descripcion: "Procesos relacionados con sociedades, contratos mercantiles y conflictos entre empresas.",
      tipos: {}
    },
    constitucional: {
      nombre: "Constitucional",
      activa: false,
      color: "#16233F",
      imagen: "assets/images/rama-constitucional.jpg",
      descripcion: "Procesos para proteger derechos fundamentales, como la tutela y otras acciones constitucionales.",
      tipos: {}
    }
  }
};

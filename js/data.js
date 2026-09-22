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
          nombre: "Declarativo",
          descripcion: "Procesos para que un juez determine derechos u obligaciones familiares que aún no son claras.",
          color: "#2F7A6B",
          imagen: "assets/images/tipo-declarativo.jpg",
          procesos: [
            {
              id: "divorcio-contencioso",
              titulo: "Divorcio contencioso",
              consiste: "Disolución del matrimonio cuando las partes no están de acuerdo en los términos.",
              aplica: "Cuando uno de los cónyuges no acepta el divorcio o sus condiciones (bienes, custodia, alimentos).",
              requisitos: ["Registro civil de matrimonio", "Pruebas de la causal invocada"],
              video: { titulo: "Audiencia de divorcio contencioso", url: "" },
              quiz: [
                { pregunta: "¿Cuándo es contencioso un divorcio?", opciones: ["Cuando ambas partes están de acuerdo", "Cuando una de las partes no acepta los términos", "Cuando no hay hijos"], correcta: 1 }
              ]
            },
            {
              id: "fijacion-custodia",
              titulo: "Fijación de custodia",
              consiste: "El juez determina con quién vivirá un menor cuando los padres no llegan a un acuerdo.",
              aplica: "Cuando hay desacuerdo entre los padres sobre el cuidado personal de los hijos.",
              requisitos: ["Registro civil del menor", "Pruebas sobre la situación familiar"],
              video: { titulo: "Audiencia de fijación de custodia", url: "" },
              quiz: [
                { pregunta: "¿Qué resuelve este proceso?", opciones: ["Con quién vivirá el menor", "El pago de una deuda", "La venta de un inmueble"], correcta: 0 }
              ]
            }
          ]
        },
        judicial: {
          nombre: "Judicial",
          descripcion: "Trámites que requieren una audiencia formal ante un juez de familia.",
          color: "#3E6FA5",
          imagen: "assets/images/tipo-judicial.jpg",
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

# Gestión de Conocimientos \| VeteriSoft \(Wiki en Confluence\)

#  Práctico N.º 10 — Gestión de Conocimientos | VeteriSoft

**Ingeniería de Software II · Gestión de Proyectos · Proyecto ISII-006-22 · 27/10/2026 · Versión 1.0**  
 

**Estrategia seleccionada (única): Wiki o Base de Conocimientos.** Herramienta de aplicación: espacio compartido de VeteriSoft en Confluence. Este documento distingue los recursos ya existentes de las reglas de gobierno y ejemplos propuestos para el trabajo práctico.

## 1. Selección de la estrategia

Se elige **Wiki o Base de Conocimientos**, una de las alternativas de la consigna. Consiste en un espacio compartido que organiza información por temas, como requisitos, arquitectura, procedimientos, decisiones y preguntas frecuentes. **No se eligen como estrategias independientes** ni un agente de IA ni un registro de lecciones aprendidas; los aprendizajes pueden documentarse como contenido dentro de la wiki.

Esta opción es pertinente porque VeteriSoft ya utiliza un espacio de Confluence con documentación del acta de constitución, EDT/WBS, SRS, matriz de trazabilidad, riesgos, costos y procedimientos de gestión. El proyecto busca entregar un MVP con gestión de usuarios/mascotas, turnos e historial clínico, por lo que la información debe estar accesible y ser coherente durante el desarrollo.

## 2. Desarrollo de la estrategia

### 2.1 Objetivo: ¿qué necesidad del equipo busca resolver?

Centralizar y conservar el conocimiento explícito de VeteriSoft para que los integrantes localicen información confiable sin depender exclusivamente de mensajes o de la memoria de una persona. Se busca reducir búsquedas repetidas, decisiones contradictorias, retrabajo y pérdida de contexto al cambiar de sprint o integrante.

**Objetivo SMART propuesto:** durante los próximos dos sprints de aplicación de la estrategia, catalogar el 100 % de los documentos críticos del MVP con título, categoría, responsable, versión y fecha de revisión; lograr que un integrante pueda localizar un requisito y su evidencia relacionada en un máximo de cinco minutos en al menos cuatro de cinco pruebas internas. Estos umbrales son metas sugeridas, no resultados medidos.

### 2.2 Información a gestionar: ¿qué conocimientos y documentos se incluirán?

| Categoría | Contenido y conocimiento | Ejemplo de VeteriSoft |
| --- | --- | --- |
| Gestión del proyecto | Alcance, objetivos, roles, cronograma, EDT, costos y riesgos | Acta de Constitución, EDT/WBS, Matriz de Riesgos, Matriz de Costes |
| Requisitos | Necesidades del cliente, requisitos funcionales y no funcionales, aceptación y trazabilidad | SRS y Matriz de Trazabilidad |
| Arquitectura y datos | Diseño SaaS multitenant, modelos relacionales, decisiones de seguridad y diagramas | Documentación técnica prevista por EDT 1.2 |
| Desarrollo | Reglas de negocio de usuarios/mascotas, agenda e historia clínica; convenciones y APIs | Especificaciones del MVP y futuras guías técnicas |
| Calidad y pruebas | Casos de prueba, resultados, criterios de aceptación, incidencias y UAT | Actividades QA de EDT 1.6 |
| Procesos y decisiones | Procedimientos de cambios, adquisiciones, evaluación de proveedores y acuerdos | Prácticos 8 y 9 documentados en Confluence |
| Aprendizajes y consultas frecuentes | Problemas resueltos, explicaciones, decisiones con su fundamento y preguntas frecuentes | Sección propuesta «FAQ y aprendizajes» dentro de la wiki |

La existencia de una categoría en la EDT no implica que todos sus documentos ya estén creados o aprobados. Los materiales faltantes deberán registrarse como pendientes.

### 2.3 Herramientas y métodos: ¿qué se utilizará?

**Herramienta principal:** Confluence como repositorio de conocimiento, con páginas jerárquicas, búsqueda, enlaces internos, historial de versiones, comentarios y permisos. **Herramienta complementaria:** el tablero de trabajo y repositorio de código del equipo (GitHub Projects / Git, según su configuración efectiva) para enlazar tickets, entregables y versiones de software. No se propone un segundo repositorio de conocimiento paralelo.

**Método de incorporación:** redactar una página usando plantilla; incluir propósito, contexto, alcance, contenido, referencias, responsable, versión y fecha; revisar antes de declararla vigente; enlazar desde el índice temático; y revisarla cuando cambie el requisito o proceso relacionado. Los borradores y documentos aprobados deben distinguirse explícitamente.

### 2.4 Organización: clasificación, identificación y catalogación

| Sección propuesta de la wiki | Subsecciones | Ejemplos de identificación |
| --- | --- | --- |
| 00 · Inicio e índice | Mapa de contenidos, guía de búsqueda, glosario | KB-INDEX |
| 01 · Gestión | Acta, EDT, tiempos, costos, riesgos y comunicaciones | GES-001 |
| 02 · Requisitos | SRS, RTM, criterios de aceptación | REQ-001 |
| 03 · Diseño y arquitectura | Arquitectura, datos, seguridad, UX/UI | ARQ-001 |
| 04 · Desarrollo y despliegue | Módulos, APIs, entornos, configuración y versiones | DEV-001 |
| 05 · Calidad | Pruebas, UAT, no conformidades | QA-001 |
| 06 · Procedimientos | Cambios, adquisiciones, proveedores, competencias | PRO-001 |
| 07 · FAQ y aprendizajes | Problemas, soluciones, decisiones y lecciones | FAQ-001 |

**Convención de título propuesta:** \[Categoría\] Nombre del documento — VeteriSoft. **Metadatos mínimos:** ID, estado (borrador / en revisión / aprobado / obsoleto), versión, fecha, autor, responsable de revisión, EDT o requisito relacionado, palabras clave y enlaces asociados. La estructura anterior es una propuesta de ordenamiento; no se afirma que todas estas secciones ya existan.

### 2.5 Acceso y consulta: ¿quiénes acceden y cómo encuentran la información?

El equipo del proyecto consulta la documentación general según los permisos de su cuenta en Confluence. El PM y los responsables de cada área revisan los contenidos que les competen. El cliente o patrocinador puede recibir acceso de lectura a documentación aprobada relevante para su validación, si la organización lo autoriza. Las páginas que contengan datos personales, credenciales, información clínica real o detalles sensibles deben tener acceso restringido y no publicarse en la wiki general.

**Formas de recuperación:** (1) índice por categorías; (2) búsqueda por nombre, ID o palabra clave; (3) enlaces entre SRS, RTM, EDT y pruebas; (4) etiquetas por módulo como «turnos», «historia-clinica» o «multitenant»; (5) navegación hacia el documento vigente desde la página de inicio. Antes de utilizar información se comprueban estado, versión, fecha de revisión y relaciones.

### 2.6 Responsables: carga, revisión y mantenimiento

| Responsabilidad | Asignación propuesta | Acción |
| --- | --- | --- |
| Coordinación y aprobación del procedimiento | Responsable del proyecto según la organización documentada | Priorizar revisiones, controlar vigencia y resolver inconsistencias |
| Redacción y actualización de contenido | Integrante responsable de cada entregable (por designar) | Documentar cambios y adjuntar evidencias |
| Revisión cruzada | Otro integrante del equipo, por designar | Verificar claridad, exactitud y trazabilidad |
| Colaboración en la wiki | Colaboradores del proyecto según la organización documentada | Proponer correcciones y aportar documentación según tareas asignadas |
| Validación funcional | Cliente / representante clínico autorizado | Confirmar requisitos y decisiones que requieren aceptación del negocio |

El acta confirma los nombres y roles generales, pero **no establece una designación formal de bibliotecario de conocimiento ni asigna propiedad de cada documento**. La tabla describe un esquema de gobierno sugerido, no responsabilidades ya aceptadas.

### 2.7 Actualización: ¿cuándo se incorpora o modifica información?

| Disparador | Acción de actualización | Plazo sugerido |
| --- | --- | --- |
| Requisito nuevo o cambio aprobado | Actualizar SRS, RTM, criterios y enlaces | Antes de iniciar implementación |
| Decisión de arquitectura | Registrar fundamento, alternativa elegida y versión | En el sprint de la decisión |
| Incidencia resuelta con aprendizaje reutilizable | Agregar FAQ o solución comprobada | Antes de cerrar el ticket |
| Entrega de módulo o prueba UAT | Actualizar manual, evidencia y estado | Antes de declarar el entregable terminado |
| Cierre de sprint | Revisar enlaces rotos, pendientes y páginas obsoletas | Una vez por sprint |
| Cambio de integrante o transferencia | Verificar accesos, responsables y documentación clave | Durante la transición |

**Control de calidad propuesto:** una página pasa a «aprobada» solo si su contenido está revisado, es localizable, tiene responsable y referencias válidas. Una versión obsoleta se conserva para trazabilidad pero se identifica para evitar su uso operativo.

## 3. Ejemplo concreto de aplicación de la wiki en VeteriSoft

### Situación: localizar el requisito del historial clínico

**Escenario didáctico:** un integrante necesita determinar qué información debe consultar antes de implementar la visualización del historial clínico de una mascota y cómo comprobar su relación con requisitos y pruebas. El recorrido es un ejemplo de uso, no un registro de una consulta real.

1. **Ingreso:** abre el espacio VeteriSoft en Confluence y busca «historial clínico» o «HCE».
2. **Localización:** desde el índice de Requisitos accede a la SRS — Especificación de Requisitos y localiza los apartados pertinentes al módulo.
3. **Verificación:** comprueba versión, fecha y estado de la SRS; si la información no está aprobada o es ambigua, registra una consulta al responsable en lugar de asumir una regla no documentada.
4. **Trazabilidad:** abre la Matriz de Trazabilidad y busca el requisito correspondiente para identificar su origen y relaciones con entregables o pruebas. El identificador exacto debe obtenerse del documento, no inventarse.
5. **Contexto:** consulta la EDT/WBS, particularmente 1.3.1 Historia Clínica Electrónica, para entender el entregable previsto.
6. **Uso:** prepara su tarea y casos de prueba utilizando las fuentes vigentes, enlazando las páginas en el ticket del sprint.
7. **Retroalimentación:** si descubre una contradicción o duda, deja comentario o solicita revisión y se registra la corrección con nueva versión.

### Ejemplo de registro de consulta (ficticio)

| Campo | Contenido |
| --- | --- |
| Consulta | KB-CONS-001 (simulada) |
| Pregunta | ¿Dónde se documentan los requisitos de visualización del historial clínico? |
| Fuentes recuperadas | SRS, RTM y EDT 1.3.1 |
| Procedimiento | Búsqueda → verificación de vigencia → trazabilidad → enlace en tarea |
| Resultado | Se identifica la documentación a revisar y se evita decidir requisitos por memoria |
| Aprendizaje | Agregar enlace directo desde índice del módulo HCE a SRS y RTM |

**Valor del ejemplo:** la estrategia no solo almacena documentos; permite recuperar una fuente, evaluar su vigencia y relacionarla con la tarea concreta, conservando el conocimiento para el siguiente integrante.

## 4. Beneficios esperados y dificultades posibles

| Beneficio esperado | Cómo se evidencia |
| --- | --- |
| Menor tiempo de búsqueda | Pruebas de recuperación de requisitos y tiempo medio de localización |
| Menos retrabajo por información contradictoria | Registro de consultas, aclaraciones y correcciones |
| Mejor incorporación de nuevos integrantes | Guía de inicio y acceso a documentos clave |
| Mayor trazabilidad de decisiones y entregables | Enlaces entre requisitos, EDT, tickets, pruebas y versiones |
| Continuidad del conocimiento | Responsables, historial y material reutilizable por sprint |

| Dificultad | Riesgo | Medida de mitigación |
| --- | --- | --- |
| Documentación desactualizada | Implementar requisitos obsoletos | Revisión por sprint, fecha y estado de vigencia |
| Falta de tiempo para documentar | Conocimiento queda en conversaciones | Incluir documentación en definición de terminado |
| Duplicación de páginas | Confusión sobre fuente oficial | Índice único y enlaces a fuente canónica |
| Permisos inadecuados | Exposición de datos o imposibilidad de consultar | Permisos por rol y revisión de accesos |
| Clasificación inconsistente | La búsqueda pierde eficacia | Plantillas, categorías y metadatos comunes |
| Dependencia de la herramienta | Dificultad de acceso o migración | Exportaciones periódicas y respaldos autorizados |

### 4.1 Indicadores de seguimiento propuestos

| Indicador | Cálculo | Meta académica |
| --- | --- | --- |
| Cobertura de catalogación | Documentos críticos catalogados / documentos críticos identificados × 100 | 100 % en 2 sprints |
| Éxito de recuperación | Consultas resueltas en ≤5 min / consultas de prueba × 100 | ≥80 % (4 de 5) |
| Vigencia | Páginas críticas revisadas dentro del período / páginas críticas × 100 | 100 % al cierre del sprint |
| Trazabilidad | Documentos críticos con enlaces válidos a fuentes relacionadas / total crítico × 100 | ≥90 % |

Estos indicadores son propuestas de evaluación de la estrategia. No se dispone de mediciones reales y no se presentan como logros ya alcanzados.

## 5. Conclusión

La **Wiki o Base de Conocimientos en Confluence** es una estrategia concreta y aplicable al proyecto porque aprovecha la documentación ya disponible y propone reglas de clasificación, acceso, actualización y control de vigencia. El ejemplo del historial clínico demuestra cómo recuperar conocimiento útil y vincularlo con requisitos, entregables y tareas. Su éxito depende de mantener responsables claros y revisar continuamente la información.

## 6. Correspondencia con la consigna

| Punto del práctico | Respuesta en esta página |
| --- | --- |
| 1. Seleccionar una sola estrategia | Sección 1 — Wiki o Base de Conocimientos |
| 2. Objetivo, información, herramientas, organización, acceso, responsables y actualización | Secciones 2.1 a 2.7 |
| 3. Ejemplo concreto de recuperación de información | Sección 3 — Historial clínico |
| 4. Beneficios y dificultades | Sección 4 — Beneficios, dificultades y métricas |

## 7. Fuentes

- Práctico N.º 10 — Ingeniería de Software II (2026), Gestión de Conocimientos, consigna de dos páginas aportada por el estudiante.
- Acta de Constitución de VeteriSoft
- EDT / WBS
- SRS — Requisitos
- Matriz de Trazabilidad
- Gestión de Comunicaciones y Stakeholders

## 🔗 Integración de la wiki y la documentación del proyecto

**Wiki complementaria de Gestión del Conocimiento:** Abrir VeteriSoft | Wiki de Gestión del Conocimiento.

La wiki se creó con seis secciones navegables y referencias a las fuentes de Confluence. **Confluence sigue siendo la fuente de verdad documental** para requisitos, acta, EDT y prácticos; La wiki complementaria funciona como catálogo, índice y guía de recuperación. Los vínculos son enlaces manuales y **no constituyen sincronización automática**.

| Sección de la wiki | Acceso directo | Contenido vinculado |
| --- | --- | --- |
| 01 · Gestión del proyecto | Abrir sección | Acta, EDT, tiempos, costos, riesgos y comunicaciones |
| 02 · Requisitos y trazabilidad | Abrir sección | SRS y matriz RTM |
| 03 · Arquitectura y desarrollo | Abrir sección | Diseño previsto, módulos MVP y EDT |
| 04 · Calidad y pruebas | Abrir sección | P12, SRS, RTM y criterios de verificación |
| 06 · FAQ y aprendizajes | Abrir sección | Ejemplos de consulta y aprendizaje |

### Aplicación al Práctico 10

**Estrategia seleccionada:** wiki o base de conocimientos. **Implementación:** Confluence conserva documentos originales y la wiki complementaria ofrece una interfaz de navegación por áreas con enlaces a las fuentes. **Gobierno propuesto:** revisar vigencia, responsable, versión y estado de cada artículo al cierre del sprint; no declarar aprobadas páginas sin validación. **Restricción:** los accesos dependen de los permisos que cada usuario tenga en ambas plataformas; la creación de enlaces no comparte permisos.

## Actualización de enfoque para la entrega — la wiki complementaria + Confluence

**Estrategia única elegida: Wiki o Base de Conocimientos.** La implementación actual se presenta mediante la wiki complementaria como interfaz principal de navegación temática, con seis secciones, mientras Confluence conserva los documentos originales y sus versiones. Esta precisión reemplaza las referencias anteriores que describen a Confluence como la herramienta principal de la wiki.

**Objetivo:** centralizar y recuperar información confiable de VeteriSoft sin duplicar las fuentes. **Información:** gestión, SRS, RTM, EDT, arquitectura prevista, calidad, procedimientos y aprendizajes. **Organización:** seis secciones de la wiki complementaria con enlaces directos a documentos de Confluence. **Acceso:** según permisos en ambas plataformas. **Responsables y actualización:** asignación editorial y revisión por sprint propuestas, sujetas a validación del equipo.

**Ejemplo concreto actualizado:** un integrante abre 02 · Requisitos y trazabilidad en la wiki complementaria; desde allí accede a SRS, RTM y EDT para localizar los requisitos y el entregable de historia clínica. Verifica vigencia y registra cualquier duda antes de implementar. Es un escenario didáctico, no una prueba ejecutada.

**Beneficios esperados:** menos tiempo de búsqueda, mejor trazabilidad, incorporación más sencilla y menor retrabajo. **Dificultades:** enlaces rotos, documentos desactualizados, permisos insuficientes, doble mantenimiento y falta de responsables. Se mitigan con fuente documental única, control de vigencia, revisión por sprint y enlaces verificados.

**Nota de consistencia:** esta sección constituye la formulación vigente del P10; los apartados anteriores reflejan el planteo previo a la creación de la wiki en la wiki complementaria. Los enlaces son manuales y no representan sincronización automática.

> Copia pública: se conservaron los procedimientos generales; los enlaces de acceso privado y la sección editorial retirada no se incluyen.

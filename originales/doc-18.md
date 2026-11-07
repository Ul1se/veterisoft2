# Matriz de Competencias y Plan de Mejora — VeteriSoft

# Matriz de Competencias y Plan de Mejora — VeteriSoft

**Asignatura:** Ingeniería de Software II — Gestión de Proyectos | **Trabajo práctico:** ISII-011-26 | **Versión:** 1.0 | **Fecha:** 27/10/2026

## 1. Objetivo y alcance

Determinar las competencias necesarias para las personas que realizan actividades que afectan el desempeño y la eficacia de VeteriSoft, considerando los cuatro pilares: educación, formación, habilidades y experiencia. Identificar posibles brechas y establecer acciones para adquirir competencias y evaluar su eficacia.

El acta del proyecto identifica a **Participante A** como director y a **Participante B** y **Participante C** como colaboradores. Los roles técnicos de esta matriz son funciones necesarias identificadas en la EDT, no contrataciones ni asignaciones individuales confirmadas. Una persona puede desempeñar varias funciones.

## 2. Matriz de competencias requeridas

| Rol o función | Educación | Formación | Habilidades | Experiencia / evidencia esperada | EDT |
| --- | --- | --- | --- | --- | --- |
| Dirección del proyecto | Fundamentos de gestión e ingeniería de software | PMBOK, Scrum, planificación, riesgos y costos | Liderazgo, comunicación, priorización y seguimiento | Planes, cronograma, seguimiento de sprints y control de riesgos | 1.1 |
| Análisis funcional | Análisis de sistemas | IEEE 830 / ISO/IEC/IEEE 29148, trazabilidad | Relevamiento, especificación y validación | SRS y matriz RTM verificables | 1.2.1 |
| Arquitectura y backend | Programación y arquitectura de software | APIs REST, SaaS y seguridad multitenant | Diseño técnico, integración y resolución de problemas | Servicios implementados y revisados | 1.2.2 / 1.3 |
| Frontend y UX/UI | Desarrollo web e interacción humano-computadora | Diseño responsivo, prototipado y consumo de APIs | Usabilidad, diseño de interfaces e integración | Prototipos y flujos web funcionales | 1.2.4 / 1.4 |
| Base de datos | Bases de datos y modelado de información | SQL, normalización y aislamiento de datos | Diseño relacional, consultas y control de integridad | DER, scripts y pruebas de consultas | 1.2.3 |
| Aseguramiento de calidad | Pruebas e ingeniería de software | Pruebas unitarias, integración, seguridad y UAT | Diseño de casos, automatización y reporte de defectos | Resultados de pruebas y actas de aceptación | 1.6 |
| DevOps y despliegue | Infraestructura y desarrollo de software | Git, CI/CD y servicios cloud | Automatización, configuración y diagnóstico | Pipeline y despliegue verificados | 1.7 |

## 3. Evaluación individual y detección de brechas

**Escala propuesta:** 0 = sin conocimientos demostrados; 1 = básico con supervisión; 2 = realiza tareas con apoyo; 3 = autónomo; 4 = domina la competencia y puede capacitar a otros.

**Brecha = máximo(0, nivel requerido − nivel actual).** La evaluación debe sustentarse en evidencias de los cuatro pilares. La documentación consultada no acredita puntuaciones individuales, por lo que se dejan pendientes.

| Integrante | Rol documentado | Nivel requerido | Nivel actual | Brecha |
| --- | --- | --- | --- | --- |

## 4. Plan de mejora propuesto

Las acciones son preventivas y se activarán o ajustarán cuando se identifiquen brechas individuales. Se priorizan capacitación y tutorías por el tamaño reducido del equipo; ante brechas críticas persistentes podrán considerarse reasignación o apoyo especializado.

| Competencia | Acción de mejora | Evaluación de eficacia |
| --- | --- | --- |
| Gestión ágil | Capacitación en Scrum y tutoría de planificación | Sprint planificado y ejecutado con registros completos |
| Requisitos | Taller de SRS y trazabilidad | Requisitos verificables, sin ambigüedades y vinculados a pruebas |
| Backend y APIs | Práctica guiada de endpoints REST y revisión entre pares | API funcional con pruebas satisfactorias |
| Base de datos | Capacitación en SQL, normalización y multitenancy | Modelo validado y pruebas de integridad y aislamiento |
| Frontend | Desarrollo supervisado de interfaces responsivas | Flujos funcionales en escritorio y móvil |
| QA | Capacitación en pruebas automatizadas | Cumplimiento de criterios de cobertura y aceptación definidos en el proyecto |
| DevOps | Tutoría en GitHub Actions y despliegue | Pipeline ejecutado y despliegue verificado |

## 5. Seguimiento y evaluación de eficacia

1. Registrar competencia requerida, persona evaluada, evidencia y nivel inicial.
2. Identificar la brecha y acordar una acción, responsable y plazo.
3. Realizar capacitación, tutoría, reasignación o apoyo especializado según corresponda.
4. Repetir la evaluación mediante entregables, revisiones de código, resultados de pruebas, actas y demostraciones.
5. Comparar nivel alcanzado con nivel requerido; documentar el resultado y ajustar el plan si la brecha persiste.

## 6. Conclusión

La matriz vincula las capacidades necesarias con los entregables de VeteriSoft y facilita prevenir riesgos derivados de la falta de competencias. El plan de mejora propone acciones verificables y un proceso de seguimiento. Las calificaciones individuales quedan pendientes hasta disponer de evidencia comprobable.

## 7. Fuentes

- Consigna ISII-011-26, Matriz de competencia, 01/10/2026.
- Acta de Constitución del Proyecto
- EDT / WBS
- Matriz de Tiempos

## 8. Revisión de la matriz: criterios de evaluación y priorización

**Versión 2.0 — mejora metodológica.** La ausencia de evidencia se registra como NE (no evaluado), no como nivel cero. Para cada competencia asignada se registrará nivel requerido, nivel demostrado, evidencia, evaluador y fecha. Brecha = máximo(0, nivel requerido − nivel demostrado), solo cuando exista evaluación. Prioridad alta para brechas que comprometan historias clínicas, seguridad y aislamiento entre clínicas; media para capacidades que afecten plazos o usabilidad.

**Escala operativa:** 0 = sin competencia demostrada; 1 = inicial y supervisada; 2 = ejecución con apoyo; 3 = ejecución autónoma y verificable; 4 = referente que revisa y acompaña a otros. Se propone nivel 3 para dirección, análisis, backend, base de datos, frontend y QA, y nivel 2 para DevOps. Son objetivos orientativos, sujetos a la asignación real de funciones.

## 9. Plan de mejora ampliado y criterios de eficacia

| Prioridad / competencia | Acción y plazo propuesto | Evidencia de eficacia |
| --- | --- | --- |
| Alta — Seguridad y base de datos | Taller de aislamiento multitenant, permisos y revisión por pares; 2 semanas | Pruebas de acceso cruzado rechazadas, integridad validada y registro de resultados |
| Alta — Requisitos y trazabilidad | Práctica guiada de SRS y RTM; 1 semana | Requisitos sin ambigüedad y vinculados a casos de prueba |
| Alta — Backend y QA | Implementación supervisada de API y automatización de pruebas; 2 semanas | Endpoints aprobados, pruebas reproducibles y defectos registrados |
| Media — Dirección y planificación | Mentoría en estimación, seguimiento y riesgos; 1 sprint | Backlog priorizado, seguimiento de desvíos y actas de decisión |
| Media — Frontend | Práctica de interfaz responsiva y consumo de APIs; 2 semanas | Flujos validados en escritorio y móvil |
| Media — DevOps | Práctica de Git, CI/CD y despliegue; 1 semana | Pipeline ejecutado y despliegue reproducible |

Las acciones se activarán cuando se compruebe una brecha; sus plazos son propuestas, no fechas aprobadas. Si la capacitación no alcanza el nivel requerido, se aplicará tutoría adicional, reasignación o evaluación de apoyo especializado, sujeto a disponibilidad y presupuesto.

## 10. Seguimiento, indicadores y cierre

1. Asignar funciones técnicas a cada integrante y designar un revisor.
2. Recoger evidencias de educación, formación, habilidades y experiencia mediante entrevistas, cursos, entregables y demostraciones.
3. Evaluar niveles iniciales, calcular brechas y priorizar acciones.
4. Reevaluar al cierre de cada acción con pruebas prácticas y revisión del entregable.
5. Declarar eficaz la acción solo cuando se alcance el nivel objetivo y se cumpla el criterio técnico; de lo contrario registrar una acción correctiva.

**Indicadores:** cobertura de evaluación = competencias asignadas evaluadas / total asignadas × 100; cierre de brechas = brechas cerradas / brechas detectadas × 100; eficacia de acciones = acciones reevaluadas exitosas / acciones reevaluadas × 100. Se propone revisión al cierre de cada sprint.

**Nota de integridad:** Participante A figura como director, Participante B y Participante C como colaboradores. No se asignan puntuaciones ni experiencias personales sin evidencia. Esta ampliación complementa las secciones originales de la página.

## 11. Aplicación completa del Práctico N.º 11 — ejemplo ficticio

**SIMULACIÓN ACADÉMICA:** las calificaciones y experiencias individuales de este apartado son inventadas para mostrar cómo se resuelve la consigna. No representan capacidades reales de los integrantes ni reemplazan la evaluación pendiente documentada arriba.

### 11.1 Competencia necesaria: cuatro pilares

| Función | Educación | Formación | Habilidades | Experiencia/evidencia | Nivel objetivo (0–4) |
| --- | --- | --- | --- | --- | --- |
| Dirección y control de cambios | Fundamentos de gestión de proyectos | Scrum, riesgos y control de cambios | Planificar, decidir y comunicar | Actas, cronograma y decisiones verificables | 3 |
| Backend y QA | Programación e ingeniería de software | APIs REST, pruebas unitarias e integración | Implementar, revisar y probar | API y suite de pruebas reproducible | 3 |
| Requisitos y seguridad de datos | Análisis de sistemas y bases de datos | SRS, trazabilidad, aislamiento multitenant | Especificar, validar y controlar accesos | RTM y pruebas de acceso entre clínicas | 3 |

Educación = estudios pertinentes; Formación = cursos o talleres específicos; Habilidades = desempeño práctico observado; Experiencia = tareas anteriores verificables. La escala es 0 sin competencia demostrada, 1 inicial supervisado, 2 con apoyo, 3 autónomo y 4 referente. **NE (no evaluado) no equivale a 0.** Brecha = máximo(0, requerido − demostrado), cuando existe evidencia.

### 11.2 Matriz individual de brechas simuladas
> Se retiraron calificaciones, comentarios y resultados por participante. La plantilla de evaluación y los criterios generales se conservan.
### 11.3 Plan de mejora con acciones, plazos y medición
> Se retiraron calificaciones, comentarios y resultados por participante. La plantilla de evaluación y los criterios generales se conservan.
### 11.4 Evaluación de eficacia simulada
> Se retiraron calificaciones, comentarios y resultados por participante. La plantilla de evaluación y los criterios generales se conservan.
### 11.5 Evidencias y seguimiento

1. Registrar función, cuatro pilares, nivel requerido, nivel inicial y evidencia.
2. Definir acción, responsable, plazo y criterio de éxito.
3. Ejecutar capacitación, tutoría, reasignación o contratación autorizada.
4. Reevaluar con una tarea real o simulada equivalente.
5. Registrar resultado, cerrar brecha o aplicar acción correctiva y volver a medir.

## 12. Correspondencia con la consigna

| Punto | Secciones |
| --- | --- |
| 1. Competencia necesaria basada en Educación, Formación, Habilidades y Experiencia | 2, 3, 8 y 11.1–11.2 |
| 2. Plan de mejora y evaluación de eficacia | 4, 5, 9, 10 y 11.3–11.5 |

## 12. Caso práctico adicional — Evaluación individual SIMULADA para el P11

**Advertencia metodológica:** los niveles, las asignaciones técnicas, los antecedentes formativos, los comentarios y los resultados de esta sección son **completamente ficticios** y se incorporan solo para mostrar cómo se completa la consigna. No son evaluaciones reales ni valoraciones individuales. La evaluación real de la sección 3 permanece pendiente de evidencia.

### 12.1 Instrumento de los cuatro pilares

| Pilar | Requisito o criterio de evaluación | Evidencia admisible |
| --- | --- | --- |
| Educación | Conocimientos académicos adecuados a la función; no se exige título específico sin justificación | Estudios pertinentes, materias cursadas y conceptos demostrados |
| Formación | Capacitación práctica en métodos, normas y herramientas de la tarea | Talleres, cursos, tutorías, evaluaciones y demostraciones |
| Habilidades | Aplicación autónoma de competencias técnicas y blandas | Observación de tareas, revisión de entregables, pruebas y feedback |
| Experiencia | Antecedentes pertinentes a la función asignada | Entregables previos verificables, participación en proyectos y referencias |

**Escala:** 0 = sin dominio demostrado; 1 = básico supervisado; 2 = realiza con apoyo; 3 = autónomo; 4 = referente. **Brecha = max(0, requerido − observado)**. El valor «No evaluado» no se interpreta como cero. La competencia se valida con evidencias de los cuatro pilares, no solo por autoafirmación.

### 12.2 Matriz individual de brechas — detalle individual omitido en copia pública
> Se retiraron calificaciones, comentarios y resultados por participante. La plantilla de evaluación y los criterios generales se conservan.
### 12.3 Ficha simulada — detalle individual omitido en copia pública
> Se retiraron calificaciones, comentarios y resultados por participante. La plantilla de evaluación y los criterios generales se conservan.
### 12.4 Ficha simulada — detalle individual omitido en copia pública
> Se retiraron calificaciones, comentarios y resultados por participante. La plantilla de evaluación y los criterios generales se conservan.
### 12.5 Ficha simulada — detalle individual omitido en copia pública
> Se retiraron calificaciones, comentarios y resultados por participante. La plantilla de evaluación y los criterios generales se conservan.

> Simulación académica anonimizada. Los casos, puntajes y comentarios individuales se omitieron de esta copia pública; los instrumentos y criterios generales permanecen.

# Plan de Carrera y Mejora para Todos los Roles — VeteriSoft

**Objetivo:** establecer una ruta de desarrollo y mejora para las siete funciones de la matriz de competencias de VeteriSoft. El plan es por rol, dura nueve meses como propuesta y se convierte en un plan individual cuando se asignen funciones y se evalúen las competencias con evidencia.

## 1. Base y reglas de evaluación

Este documento complementa la Matriz de Competencias y Plan de Mejora — VeteriSoft y el Plan de Carrera y Desarrollo de Competencias — VeteriSoft.

- Se consideran los cuatro pilares definidos en la matriz: educación, formación, habilidades y experiencia.
- La escala es 0–4: 0 sin dominio demostrado; 1 inicial con supervisión; 2 realiza tareas con apoyo; 3 trabaja autónomamente; 4 es referente y puede formar a otros.
- El objetivo de la matriz es nivel 3 para dirección, análisis, backend, frontend, datos y QA; para DevOps se propone nivel 2. El nivel 4 es una opción de desarrollo posterior, no una exigencia del proyecto.
- NE significa “no evaluado” y no equivale a nivel 0. No se asignan integrantes a funciones ni se inventan puntuaciones.
- La brecha se calcula como máximo(0, nivel objetivo − nivel demostrado), una vez registrada evidencia suficiente.

## 2. Matriz de desarrollo por rol

| Rol y objetivo | Educación y formación a consolidar | Habilidades a demostrar | Experiencia / evidencia para progresar | Ruta de carrera sugerida |
| --- | --- | --- | --- | --- |
| **Dirección del proyecto** Objetivo: 3 | Fundamentos de ingeniería y gestión de proyectos; PMBOK, Scrum, planificación, riesgos y costos. | Priorizar, estimar, liderar reuniones, resolver impedimentos, comunicar decisiones y controlar cambios. | EDT y cronograma mantenidos; backlog priorizado; riesgos con respuesta; decisiones y desvíos documentados. | Coordinación de proyecto → dirección autónoma → liderazgo de programas o PMO (nivel 4 opcional). |
| **Análisis funcional** Objetivo: 3 | Análisis de sistemas; ingeniería de requisitos; IEEE 830 / ISO/IEC/IEEE 29148; trazabilidad. | Relevar necesidades, definir reglas, redactar requisitos verificables, validar alcance y gestionar cambios. | SRS y RTM revisadas; criterios de aceptación; requisitos vinculados a pruebas y aprobados por interesados. | Analista inicial → analista funcional autónomo → analista principal / responsable de producto (nivel 4 opcional). |
| **Arquitectura y backend** Objetivo: 3 | Programación y arquitectura; APIs REST; SaaS; seguridad, autorización y multitenancy. | Diseñar servicios, integrar módulos, controlar errores, proteger datos y revisar decisiones técnicas. | Servicios y contratos de API; pruebas unitarias e integración; revisión de código; pruebas de aislamiento entre clínicas. | Desarrollador backend → backend autónomo → arquitecto de solución / referente técnico (nivel 4 opcional). |
| **Frontend y UX/UI** Objetivo: 3 | Desarrollo web e interacción humano-computadora; diseño responsivo, accesibilidad, prototipado y consumo de APIs. | Diseñar flujos claros, construir interfaces adaptables, integrar servicios y corregir problemas de usabilidad. | Prototipos y pantallas funcionales; pruebas de flujos en móvil y escritorio; validación de accesibilidad y aceptación. | Desarrollador UI → frontend/UX autónomo → especialista UX o referente frontend (nivel 4 opcional). |
| **Base de datos** Objetivo: 3 | Bases de datos y modelado; SQL, normalización, migraciones, integridad y aislamiento de datos. | Diseñar esquemas relacionales, optimizar consultas, proteger integridad y aplicar separación multitenant. | DER, DDL y migraciones revisadas; consultas probadas; controles de integridad y pruebas de acceso cruzado. | Asistente de datos → responsable de datos autónomo → arquitecto de datos / referente DBA (nivel 4 opcional). |
| **Aseguramiento de calidad (QA)** Objetivo: 3 | Ingeniería de software y pruebas; pruebas unitarias, integración, seguridad, automatización y UAT. | Diseñar casos, priorizar riesgos, automatizar pruebas, reportar defectos y facilitar aceptación. | Plan y casos trazables; ejecución reproducible; resultados, defectos y actas de aceptación; cobertura según objetivo del proyecto. | QA funcional → QA autónomo con automatización → líder de calidad / referente de pruebas (nivel 4 opcional). |
| **DevOps y despliegue** Objetivo inicial: 2 | Infraestructura y desarrollo; Git, CI/CD, entornos y servicios cloud. | Gestionar versiones, automatizar pipeline, configurar entornos y diagnosticar fallas de despliegue. | Repositorio y pipeline documentados; despliegue reproducible; registros de ejecución y procedimiento de recuperación. | Asistente de despliegue → DevOps operativo con apoyo (nivel 2) → DevOps autónomo / SRE (nivel 3–4 si el proyecto lo requiere). |

## 3. Plan de mejora por cada rol

| Rol | Acciones de aprendizaje y práctica | Plazo orientativo | Criterio para declarar eficaz la mejora |
| --- | --- | --- | --- |
| Dirección del proyecto | Tutoría en planificación ágil, estimación y riesgos; conducir un ciclo de seguimiento y documentar una decisión de cambio. | Meses 1–3; revisar al cierre de cada sprint. | Backlog y cronograma actualizados; riesgos prioritarios con respuesta; actas y desvíos comprensibles para el equipo. |
| Análisis funcional | Taller de requisitos y trazabilidad; practicar entrevistas, criterios de aceptación y actualización de RTM con revisión por pares. | Meses 1–3. | Requisitos asignados claros, verificables, aprobados y enlazados con pruebas. |
| Arquitectura y backend | Práctica guiada de diseño REST, autorización multitenant y pruebas; revisión de código por pares. | Meses 2–6. | Endpoints cumplen contratos; pruebas pasan; acceso cruzado entre clínicas queda rechazado y registrado. |
| Frontend y UX/UI | Prototipado y construcción supervisada de flujos prioritarios; práctica de diseño responsivo, accesibilidad y consumo de APIs. | Meses 2–6. | Flujos asignados completados en escritorio y móvil; errores de usabilidad priorizados y criterios de aceptación superados. |
| Base de datos | Capacitación práctica en SQL, normalización y migraciones; revisar modelo, integridad y separación de tenants. | Meses 2–5. | DER y scripts aprobados; consultas verificadas; pruebas de integridad y aislamiento sin defectos críticos abiertos. |
| QA | Diseñar casos trazables, practicar pruebas unitarias/integración/UAT y automatizar una suite prioritaria con apoyo. | Meses 3–8. | Requisitos asignados cubiertos por pruebas; ejecución reproducible; resultados y defectos registrados; cobertura alineada al objetivo de calidad del proyecto. |
| DevOps y despliegue | Tutoría en Git, configuración, CI/CD y cloud; ejecutar un pipeline y un despliegue con lista de verificación. | Meses 4–8. | Pipeline repetible, despliegue verificado y procedimiento documentado; alcanzar el objetivo inicial de nivel 2. |

## 4. Hitos comunes de los nueve meses

| Periodo | Hito de desarrollo | Registro de seguimiento |
| --- | --- | --- |
| Mes 1 | Confirmar personas, funciones, revisores y niveles objetivo. Recolectar evidencia de los cuatro pilares y registrar NE donde falte información. | Ficha inicial de competencias y plan acordado por rol. |
| Meses 2–3 | Cerrar brechas de fundamentos: gestión y requisitos; acordar diseños y prácticas iniciales para desarrollo, datos, QA y DevOps. | Evaluaciones prácticas, entregables revisados y acciones con responsables. |
| Meses 4–6 | Aplicar las competencias en entregables del proyecto, con mentoría y revisión entre pares. | Revisiones de código, RTM, modelos, pruebas, prototipos, actas y registros de pipeline. |
| Meses 7–8 | Demostrar autonomía en los roles asignados y resolver brechas críticas que afecten HCE, seguridad, datos o aceptación. | Pruebas de seguridad y calidad, demostraciones y defectos cerrados o escalados. |
| Mes 9 | Reevaluar niveles, documentar logros y proponer siguiente paso de carrera o apoyo. | Ficha final firmada por evaluado y revisor; acciones eficaces, pendientes y nuevo objetivo. |

## 5. Método de evaluación y decisiones

1. Por cada rol efectivamente asignado, registrar competencia, nivel objetivo, nivel observado, fecha, evaluador y evidencia.
2. Usar entrevistas o antecedentes para educación y experiencia; constancias o demostraciones para formación; entregables y observación práctica para habilidades.
3. Calcular la brecha solo con nivel demostrado. Acordar capacitación para conocimiento faltante y tutoría para desarrollar práctica autónoma.
4. Reevaluar con una tarea comparable al trabajo real. La acción es eficaz cuando se alcanza el nivel objetivo y se cumple el criterio técnico de la tabla.
5. Si la brecha persiste, ampliar tutoría; considerar reasignación temporal en tareas críticas o apoyo especializado sujeto a recursos y decisión de la dirección.
6. Registrar la decisión y conservar evidencias, resultado de reevaluación y fecha del próximo seguimiento.

**Indicadores:** cobertura de evaluación = competencias asignadas evaluadas / competencias asignadas × 100; cierre de brechas = brechas cerradas / brechas confirmadas × 100; eficacia de mejora = acciones reevaluadas que cumplen su criterio / acciones reevaluadas × 100. No calcular resultados hasta contar con registros reales.

## Documentación relacionada

- Matriz de Competencias y Plan de Mejora — VeteriSoft
- Plan de Carrera y Desarrollo de Competencias — VeteriSoft
- 🌳 WBS/EDT
- 🕗 TIEMPOS

> Simulación académica anonimizada. Los casos, puntajes y comentarios individuales se omitieron de esta copia pública; los instrumentos y criterios generales permanecen.

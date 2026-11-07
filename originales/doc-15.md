# Gestión y Control de Cambios \| VeteriSoft \(Simulación\)

# Práctico N.º 9 — Gestión y Control de Cambios | VeteriSoft

**Ingeniería de Software II · Gestión de Proyectos · Proyecto ISII-006-22 · 27/10/2026 · Versión 1.0**

**TRABAJO ACADÉMICO CON SIMULACIÓN:** el procedimiento es una propuesta para VeteriSoft. El ticket CAM-001, estimaciones, aprobación, pruebas y cierre son ficticios; no constituyen evidencia de un cambio implementado realmente. Las personas identificadas por el acta son Director del proyecto (director), Colaborador A y Colaborador B (colaboradores). Las asignaciones técnicas adicionales deben validarse con el equipo.

## 1. Objetivo, alcance y línea base

Establecer un procedimiento único para recibir, analizar, decidir, ejecutar, verificar y cerrar cambios en el alcance, requisitos, diseño, base de datos, código, interfaces, cronograma o costos de VeteriSoft. Se preserva la trazabilidad entre solicitud, decisión, versiones y pruebas, evitando incorporar funcionalidades no aprobadas que pongan en riesgo el MVP de tres módulos: usuarios/mascotas, turnos e historial clínico.

**Línea base:** acta de constitución, SRS, EDT, cronograma, costos y riesgos vigentes. Un cambio aprobado puede exigir nuevas versiones de esos documentos y la actualización de la matriz de trazabilidad. Un defecto que solo corrige el cumplimiento de un requisito vigente se registra como incidencia; si modifica la línea base, debe tramitarse como solicitud de cambio.

## 2. Punto 1 — Procedimiento de gestión de solicitudes

### 2.1 Quién solicita y dónde se registra

Podrán solicitar cambios el cliente/patrocinador, representantes de clínicas piloto, PM, analistas, desarrolladores y QA. La solicitud se formalizará en un ticket del tablero de gestión del proyecto (GitHub Issues/Projects o Jira, según el repositorio que el equipo adopte) con identificador **CAM-###**; Confluence conservará la decisión, el impacto y la documentación actualizada. No se aprobarán cambios exclusivamente por mensajes informales.

### 2.2 Campos obligatorios del ticket

| Campo | Descripción |
| --- | --- |
| ID / título / fecha / solicitante | Identificación única, origen y fecha de registro |
| Necesidad y justificación | Problema actual, beneficio esperado y consecuencia de no actuar |
| Requisitos / EDT afectados | Referencias a SRS, RTM, módulos, pantallas y servicios |
| Prioridad y tipo | Correctivo, preventivo, evolutivo o regulatorio; urgencia e impacto |
| Propuesta y alternativas | Solución planteada, opciones y alternativa de no realizar |
| Impacto | Alcance, tiempo, costo, calidad, seguridad, datos, riesgos y dependencias |
| Decisión | Aprobado, rechazado o postergado; responsable, fecha y fundamento |
| Ejecución y aceptación | Responsables, tareas, versiones, casos de prueba y evidencias |
| Cierre | Resultado, aprobación de verificación, documentación y comunicación final |

### 2.3 Responsables y autoridad

| Etapa | Responsable funcional | Actividad / registro |
| --- | --- | --- |
| Registro | Solicitante; PM recibe | Crear CAM-### y validar campos mínimos |
| Clasificación | PM: Director del proyecto | Determinar urgencia, alcance y si corresponde cambio o defecto |
| Análisis | Analista y responsables técnicos designados | Estimar impacto y opciones; actualizar evaluación de riesgos |
| Decisión | PM para cambios sin impacto en línea base, si existe delegación; patrocinador/cliente para cambios de alcance, costo o plazo | Aprobar, rechazar o postergar con justificación escrita |
| Comunicación | PM | Notificar al solicitante y al equipo; actualizar tablero y acta |
| Implementación | Integrante técnico asignado | Rama, commits, migraciones, interfaz y documentación |
| Verificación | QA / revisor designado; cliente cuando cambia aceptación funcional | Pruebas y UAT; evidencia vinculada al ticket |
| Cierre | PM | Verificar documentación, versión liberada y aceptación; cerrar CAM |

**Estados propuestos:** Registrado → En análisis → Pendiente de decisión → Aprobado / Rechazado / Postergado → En implementación → En verificación → Cerrado. Si falla una prueba, vuelve a implementación; un cambio postergado se reevalúa en el backlog.

## 3. Punto 2 — Diagrama del proceso con decisiones

Diagrama de flujo textual con responsables (cada flecha representa una transición registrada en el ticket):

| Flujo | Responsable |
| --- | --- |
| INICIO → necesidad identificada → CAM-### registrado | Solicitante |
| ↓ Verificar completitud y clasificar → ¿solicitud válida? | PM |
| NO → solicitar información → volver al registro | Solicitante / PM |
| SÍ → analizar alcance, tiempo, costo, calidad y riesgos | Analista + equipo técnico |
| ↓ Presentar alternativas y recomendación → DECISIÓN | PM + autoridad aprobadora |
| RECHAZAR → comunicar motivo → archivar y cerrar | Autoridad / PM |
| POSTERGAR → registrar condición y fecha de revisión → backlog | Autoridad / PM |
| APROBAR → actualizar línea base y planificar implementación | PM |
| ↓ Implementar, vincular commits, migraciones y documentos | Desarrollo / datos / UX |
| ↓ Verificar pruebas → ¿cumple aceptación? | QA + cliente si corresponde |
| NO → registrar defectos → corregir → volver a pruebas | Equipo técnico |
| SÍ → actualizar versiones, comunicar y CERRAR | PM |

**Lectura del diagrama:** ninguna rama aprobada pasa directamente a cierre sin implementación y verificación; las ramas rechazadas y postergadas registran decisión y comunicación, sin introducir cambios al producto.

## 4. Punto 3 — Caso simulado CAM-001: evitar superposición de turnos

### 4.1 Solicitud y motivo

| Campo | Valor simulado |
| --- | --- |
| Ticket | CAM-001 — Validar superposición de turnos por profesional |
| Fecha | 27/10/2026 (escenario académico) |
| Solicitante | Representante ficticio de recepción de clínica piloto |
| Problema | En un ensayo hipotético se observa que dos turnos pueden ocupar intervalos superpuestos para un mismo veterinario |
| Propuesta | Validación transaccional de intervalos antes de confirmar o reprogramar turnos; aviso comprensible en interfaz |
| Alcance | Módulo de turnos del MVP; reglas de disponibilidad, backend, base de datos, interfaz y pruebas |
| Alternativa | Control manual temporal, rechazado por mayor riesgo operativo |

**Regla propuesta:** dos intervalos \inicio1, fin1) y \[inicio2, fin2) se superponen si `inicio1 < fin2 AND inicio2 < fin1`, para el mismo profesional y clínica, excluyendo turnos cancelados. Dos turnos contiguos no se consideran superpuestos. La comprobación debe realizarse en backend y protegerse frente a solicitudes simultáneas.

### 4.2 Matriz de impacto (estimaciones ficticias)

| Dimensión | Impacto estimado | Mitigación / decisión |
| --- | --- | --- |
| Alcance | Agrega regla de validación y mensaje de conflicto al flujo de reserva/reprogramación | Actualizar requisito funcional y criterio de aceptación; no crear nuevo módulo |
| Tiempo | 16 horas: análisis 3 h, backend 5 h, datos 2 h, interfaz 2 h, pruebas 4 h | Asignar capacidad en próximo sprint sin desplazar funciones críticas |
| Costo | 16 h × USD 12/h = USD 192 de costo imputado ilustrativo, sin compra externa | Solicitar autorización si afecta presupuesto base |
| Calidad | Reduce dobles reservas; requiere pruebas de límites y concurrencia | Automatizar casos positivos y negativos |
| Riesgos | Condiciones de carrera, falsos conflictos, regresiones en reprogramación | Bloqueo/serialización transaccional y regresión |
| Documentación | SRS, RTM, diseño, manual y casos de prueba | Actualizar versiones vinculadas a CAM-001 |

### 4.3 Decisión, implementación y cierre ficticios

**Decisión simulada:** aprobado condicionalmente por el patrocinador ficticio a recomendación del PM Director del proyecto, sujeto a incorporar las 16 horas al sprint sin comprometer el hito de MVP. **Esto no representa una autorización real del patrocinador ni una acción efectuada por Director del proyecto.**

1. Actualizar SRS con criterio: «No se pueden confirmar ni reprogramar turnos que se solapen para el mismo profesional dentro de una clínica»; enlazar CAM-001 a RTM.
2. Implementar consulta transaccional de solapamiento en backend; validar tanto creación como reprogramación.
3. Evaluar índice de clínica, profesional y fecha; crear migración solo si es necesaria y reversible.
4. Mostrar mensaje de conflicto y permitir seleccionar otra franja sin perder datos ingresados.
5. Agregar pruebas: franja libre, superposición parcial, contención total, turnos contiguos, cancelados, clínicas distintas y dos solicitudes simultáneas.
6. Ejecutar revisión de código, pruebas automatizadas, integración y UAT simulado de recepción.
7. Publicar documentación y versión del sistema; comunicar resultado y cerrar ticket.

| Evidencia simulada | Resultado |
| --- | --- |
| Pruebas de reserva y reprogramación | 7 escenarios funcionales aprobados |
| Concurrencia | Dos reservas simultáneas: solo una se confirma |
| Revisión | PR ficticia #42 aprobada y fusionada |
| UAT | Recepción ficticia acepta el aviso y flujo alternativo |
| Estado final | **CERRADO — SIMULADO**; versión hipotética v0.3.1 |

## 5. Punto 4 — Control de configuración y versiones

Se propone vincular toda modificación con el identificador **CAM-001**. Las herramientas de la tabla son mecanismos recomendados, no afirmaciones de que ya estén configurados.

| Elemento | Herramienta / mecanismo | Identificación de versiones | Relación con ticket |
| --- | --- | --- | --- |
| Base de datos | Scripts SQL versionados en Git y herramienta de migraciones (p. ej., Flyway o equivalente) | `V003__cam001_turnos.sql`; migración reversible documentada | Referencia CAM-001 en script, PR, registro de ejecución y RTM |
| Interfaz de usuario | Figma, o repositorio de prototipos exportados si no se dispone de Figma | Diseño Turnos v1.1, historial de cambios y fecha | Enlace a CAM-001 en comentario/versión y captura de aceptación |
| Documentación | Confluence y control de versiones de páginas | SRS v2.1, RTM v2.1 y manual Turnos v1.1 (hipotéticos) | Sección «Cambios»: CAM-001, fecha, autor y aprobación |
| Código fuente | GitHub, ramas, pull requests, tags y revisión por pares | `feature/CAM-001-turnos`, commits con CAM-001, tag `v0.3.1` | PR enlazada al ticket, CI y evidencia de pruebas |

### 5.1 Reglas de integridad y recuperación

- Evitar editar directamente la rama principal; requerir revisión y pruebas para fusionar.
- No modificar migraciones ya aplicadas en entornos compartidos: crear una nueva migración correctiva y registrar reversión.
- Conservar versiones anteriores de requisitos, prototipos y manuales, y registrar quién aprobó cada actualización.
- Usar la misma clave CAM-### en ticket, rama, commit, PR, migración, acta y casos de prueba.
- Si falla el despliegue, detener liberación, restaurar versión anterior de aplicación y aplicar procedimiento seguro de reversión de datos.

### 5.2 Ejemplo de trazabilidad de CAM-001

| Artefacto | Identificador simulado | Vinculación |
| --- | --- | --- |
| Solicitud | CAM-001 | Origen del cambio |
| Requisito | RF-TURNOS-CAM001 / SRS v2.1 | Regla de solapamiento |
| Diseño | Turnos v1.1 | Mensaje de conflicto |
| Base de datos | V003\_\_cam001\_turnos.sql | Índice y/o restricción de apoyo |
| Código | feature/CAM-001-turnos / PR #42 | Validación transaccional |
| Pruebas | TC-CAM001-01 a TC-CAM001-07 | Casos de aceptación |
| Release | v0.3.1 | Versión del sistema |
| Cierre | ACT-CAM001 | Verificación y comunicación |

## 6. Riesgos del proceso y medidas de control

| Riesgo | Control |
| --- | --- |
| Cambios informales sin aprobación | Ticket obligatorio y autoridad registrada |
| Desvío de alcance o costo | Análisis de impacto y actualización de líneas base |
| Pérdida de trazabilidad | Clave CAM-### en todos los artefactos |
| Defectos de regresión | PR, pruebas automáticas y UAT |
| Conflictos de concurrencia en turnos | Validación atómica y pruebas simultáneas |

## 7. Correspondencia con la consigna oficial

| Punto | Sección |
| --- | --- |
| 1. Gestión de solicitudes, decisiones, comunicación y cierre | 2 |
| 2. Diagrama con responsables y decisiones | 3 |
| 3. Solicitud simulada e impacto completo | 4 |
| 4. Versiones de BD, UI, documentación y código | 5 |

## 8. Fuentes y referencias del proyecto

- Práctico N.º 9 Ingeniería de Software II — Gestión y control de cambios (consigna aportada por el estudiante).
- [Acta de constitución del proyecto
- SRS — Especificación de requisitos
- EDT/WBS
- Matriz de trazabilidad
- Matriz de riesgos

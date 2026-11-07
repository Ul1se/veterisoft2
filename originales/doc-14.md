# Gestión de Adquisiciones — Selección y Evaluación de Proveedores \(Simulación\) \| VeteriSoft

# Gestión de Adquisiciones y Evaluación de Proveedores — VeteriSoft

**Ingeniería de Software II · Documento de proyecto · Versión 1.0 · 27/10/2026**

**SIMULACIÓN ACADÉMICA:** nombres comerciales, ofertas, costos, SLA, incidentes, aprobaciones y resultados de compra son ficticios. No existe evidencia de contratos reales con los proveedores de ejemplo. Las responsabilidades funcionales y umbrales son propuestas sujetas a aprobación del proyecto.

## 1. Objetivo, alcance y justificación


Se conecta con la EDT (arquitectura SaaS, seguridad, QA y despliegue), la matriz de costos y la matriz de riesgos del proyecto. La integración con pasarelas de pago reales figura fuera del MVP en el acta; por eso no se incorpora como compra obligatoria de este caso.

## 2. Anotaciones del proyecto incorporadas

Esta página recoge los puntos de clase compartidos: roles y puestos; descripción de tareas; experiencia, conocimientos, educación y habilidades requeridas; competencias y mejora; gestión de adquisiciones; objetivos SMART; roles y montos de aprobación; solicitud, selección, compra, contrato, recepción, devoluciones, evaluación del proveedor y cierre; criterios ponderados (disponibilidad, calidad técnica, costo total, soporte y probabilidad de cumplimiento); acuerdos con métricas, mínimos, medición y acciones por incumplimiento; responsabilidades, escalamiento de incidentes; clasificación verde/amarillo/rojo y termómetro de proveedores.

## 3. Roles y autorización de compras

| Rol / puesto | Responsabilidad y tarea | Competencia requerida | Registro |
| --- | --- | --- | --- |
| Solicitante técnico (función) | Identificar necesidad, especificaciones, estimación y criterios | Conocimiento técnico del rubro y estimación de recursos | Solicitud de adquisición |
| PM / director: Director del proyecto (rol documentado) | Coordinar planificación, revisar riesgos, solicitar aprobaciones y monitorear cumplimiento | Gestión de proyecto, costos y proveedores | Acta de selección y seguimiento |
| Patrocinador / aprobador presupuestario (función) | Autorizar compromiso económico según delegación | Presupuesto, contratos y gestión de riesgos | Aprobación escrita |

Colaborador A y Colaborador B figuran como colaboradores en el acta. No se presume que tengan asignado formalmente el rol de compras o QA: la asignación debe registrarse antes de ejecutar el proceso.

### 3.1 Niveles de aprobación propuestos (no vigentes)

| Monto total estimado | Autoriza | Condición |
| --- | --- | --- |
| Cualquier monto de servicio crítico o datos sensibles | Patrocinador + validación técnica y de seguridad | Evaluación de riesgos y acuerdo de servicio |

Los umbrales son una propuesta para el trabajo práctico; no representan una política aprobada de VeteriSoft. No debe fraccionarse una compra para evitar aprobaciones.

## 4. Flujo del proceso de compra

1. **Necesidad:** identificar bien o servicio, justificación, EDT, fecha y presupuesto.
2. **Solicitud:** cargar requisición con especificación técnica, cantidad, criticidad y responsable.
4. **Preselección:** comprobar requisitos excluyentes (seguridad, continuidad, soporte y cumplimiento).
5. **Evaluación:** puntuar criterios ponderados y riesgos; documentar evidencia de cada puntaje.
6. **Selección y aprobación:** recomendar la mejor oferta admisible y obtener autorización según monto.
7. **Contratación y pedido:** emitir orden de compra / contrato con alcance, SLA, costos y responsabilidades.
8. **Recepción:** comprobar acceso, capacidad, seguridad y pruebas de aceptación.
9. **Operación:** medir servicio, registrar incidentes, reclamos, devoluciones o créditos.
10. **Evaluación posterior y cierre:** comparar resultado con lo contratado, documentar conformidad y actualizar padrón.

## 5. Registro de proveedores por rubro

| Rubro | Qué se contrata | Requisitos principales | Ejemplo de candidatos ficticios |
| --- | --- | --- | --- |
| Notificaciones | Mensajería de turnos y recordatorios | Entrega, costo por envío y privacidad | Mensaje Sur, AvisoCloud |

Todos los nombres de esta tabla son etiquetas ficticias para la simulación; no identifican ofertas comerciales verificadas.

## 6. Caso práctico: selección de hosting, backend y base de datos


### 6.1 Restricciones, supuestos y requisitos excluyentes

- **Riesgos:** caída del servicio, filtración entre clínicas, sobrecostos de almacenamiento, dependencia del proveedor y demoras de soporte.

### 6.2 Criterios y ponderación

| Criterio | Peso | Qué se mide |
| --- | --- | --- |
| Disponibilidad | 25 % | SLA, redundancia e historial de interrupciones |
| Costo total | 20 % | Suscripción, puesta en marcha, almacenamiento y egreso |
| Soporte y SLA | 15 % | Canales, tiempos de respuesta y escalamiento |
| Riesgo / continuidad | 10 % | Probabilidad de fallas, dependencia y recuperación |
| Escalabilidad | 5 % | Capacidad de crecer sin rediseño |

Escala de 1 a 5: 1 deficiente, 2 bajo, 3 aceptable, 4 bueno, 5 excelente. **Puntaje ponderado = Σ (puntaje del criterio × peso/100)**, máximo 5. El costo recibe mayor puntaje cuanto menor sea el costo total comparable, sin sustituir el filtro técnico.


| --- | --- | --- | --- | --- | --- |
| Nube Andina (ficticio) | 185 | 150 | 2370 | **4.05** | 🟢 Verde |
| Cloud Sur (ficticio) | 155 | 120 | 1980 | **4.25** | 🟢 Verde |
| Infra Vet (ficticio) | 95 | 80 | 1220 | **3.30** | 🟡 Amarillo |

Fórmula de TCO del ejemplo = 12 × tarifa mensual + costo de implementación. No incluye impuestos, variación cambiaria, consumo extraordinario ni egresos de datos; deben cotizarse antes de una compra real.

### 6.4 Detalle de la matriz ponderada

| Proveedor | Disponibilidad (25%) | Calidad técnica y seguridad (25%) | Costo total (20%) | Soporte y SLA (15%) | Riesgo / continuidad (10%) | Escalabilidad (5%) | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nube Andina (ficticio) | 5/5 | 4/5 | 3/5 | 4/5 | 4/5 | 4/5 | **4.05** |
| Cloud Sur (ficticio) | 4/5 | 5/5 | 4/5 | 4/5 | 4/5 | 4/5 | **4.25** |
| Infra Vet (ficticio) | 3/5 | 3/5 | 5/5 | 3/5 | 2/5 | 3/5 | **3.30** |


### 6.5 Termómetro de proveedores

🟢 **Verde:** puntaje ≥4,00 y sin incumplimientos críticos: candidato preferente. 🟡 **Amarillo:** 3,00–3,99: requiere plan de mitigación. 🔴 **Rojo:** menor a 3,00 o incumplimiento excluyente: no adjudicar hasta resolver. El semáforo es una regla propuesta para este ejercicio.

## 7. Documento de solicitud y orden de compra simulada

| Campo | Ejemplo |
| --- | --- |
| Solicitud | SOL-ADQ-001 |
| Solicitante | Responsable técnico (por designar) |
| Proyecto / EDT | VeteriSoft — plataforma SaaS / despliegue |
| Objeto | Hosting backend y base de datos, backups y soporte por 12 meses |
| Proveedor recomendado | Cloud Sur (ficticio) (ficticio) |
| Responsable de aprobación | Patrocinador / autoridad presupuestaria |
| Estado | Ejemplo — sin aprobación ni orden real emitida |

## 8. Acuerdo de nivel de servicio (SLA) propuesto

| Métrica | Nivel mínimo | Medición | Acción ante incumplimiento |
| --- | --- | --- | --- |
| Disponibilidad mensual | ≥99,9 % | Monitoreo externo cada 5 min y reporte mensual | Ticket, análisis de causa, crédito contractual y plan correctivo |
| Respuesta a incidente crítico P1 | ≤30 min | Hora de apertura y primera respuesta humana | Escalar al responsable de guardia y PM |
| Restablecimiento objetivo P1 | ≤4 h | Tiempo desde declaración hasta recuperación | Activar contingencia y revisión ejecutiva |
| RPO de base de datos | ≤24 h | Fecha del último punto recuperable | Verificar backups y corregir configuración |
| RTO de recuperación | ≤8 h | Simulacro de restauración trimestral | Plan de recuperación y nueva prueba |
| Notificación de incidente de seguridad | ≤1 h desde detección | Registro de alerta y comunicación | Escalamiento inmediato a seguridad y PM |

Los valores son **objetivos contractuales propuestos** y deben ser negociados, no promesas de proveedores reales. Disponibilidad 99,9 % en un mes de 30 días equivale aproximadamente a 43,2 minutos de indisponibilidad admitida.

## 9. Responsabilidades y escalamiento de incidentes

| Severidad | Ejemplo | Responsable inicial | Escalamiento |
| --- | --- | --- | --- |
| P1 — Crítica | Caída total o exposición de datos entre clínicas | Soporte proveedor + responsable técnico | Inmediato a PM y patrocinador; activar contingencia |
| P2 — Alta | Degradación grave de agenda o historial clínico | Soporte técnico | PM si no hay progreso dentro de 2 h |
| P3 — Media | Intermitencia no bloqueante | Mesa de ayuda | Responsable técnico en revisión diaria |
| P4 — Baja | Consulta o mejora menor | Soporte habitual | Revisión de servicio periódica |


## 10. Recepción, devoluciones y evaluación posterior a la compra

**Recepción simulada:** comprobar acceso a consola, despliegue de prueba, conectividad de base de datos, respaldo/restauración, permisos y monitoreo. Documentar conformidad o no conformidad en acta REC-001. Para servicios digitales, la «devolución» puede consistir en corrección, crédito de servicio, rescisión y migración; no necesariamente devolución física.

| Control posterior | Resultado ficticio del mes 1 | Acción |
| --- | --- | --- |
| Disponibilidad | 99,95 % | Conforme al objetivo |
| Primera respuesta P1 | 20 minutos en incidente de simulacro | Conforme |
| Restauración de backup | 7 horas en prueba controlada | Conforme al RTO propuesto |
| Observación del equipo | Documentación inicial mejorable | Solicitar guía de recuperación y actualizar registro |

**Evaluación simulada:** se mantiene al proveedor bajo seguimiento. Si la disponibilidad cae por debajo de 99,9 %, se abre una no conformidad, se solicita plan correctivo y se reevalúa al mes siguiente. Incumplimientos reiterados pueden motivar reemplazo sujeto al contrato.

## 11. Objetivo SMART de adquisiciones


## 12. Registros y documentos resultantes

| ID de ejemplo | Registro | Etapa |
| --- | --- | --- |
| SOL-ADQ-001 | Solicitud de adquisición | Inicio |
| EVA-PROV-001 | Matriz comparativa y evaluación de riesgos | Selección |
| APR-001 | Acta de aprobación | Autorización |
| OC-001 / SLA-001 | Orden de compra y acuerdo de servicio | Contratación |
| REC-001 | Acta de recepción y pruebas | Entrega |
| INC-001 | Incidencias y escalamiento | Operación |
| EVP-001 / CIE-001 | Evaluación posterior y cierre | Seguimiento y cierre |

## 13. Fuentes y relación con otros documentos

- Acta de Constitución — alcance y restricciones
- EDT / WBS — actividades y entregables
- Matriz de Costes — presupuesto y contingencias
- Matriz de Riesgos — continuidad y seguridad
- Comunicaciones y Stakeholders

## 14. Adecuación a la consigna oficial — Práctico N.º 8 (2026)


### 14.1 Punto 1 — Análisis fabricar o adquirir (make-or-buy)

| Producto o servicio | Decisión | Justificación | Relación con el proyecto |
| --- | --- | --- | --- |
| Gestión de usuarios, mascotas y roles | Desarrollar internamente | Contiene reglas propias del negocio y control de acceso entre clínicas; requiere integración directa | MVP / núcleo de aplicación |
| Agenda de turnos | Desarrollar internamente | Debe ajustarse al flujo de recepción y veterinarios y evitar colisiones | MVP / agenda |
| Historia clínica electrónica | Desarrollar internamente | Necesita trazabilidad, confidencialidad y modelo clínico específico | MVP / HCE |
| Frontend web responsivo y APIs | Desarrollar internamente | Es la funcionalidad diferenciadora y debe seguir la arquitectura de VeteriSoft | Arquitectura / frontend y backend |
| Almacenamiento de adjuntos | Adquirir servicio externo | Se necesita capacidad variable, redundancia y políticas de retención | EDT 1.5 |
| Control de versiones y gestión documental | Utilizar servicios disponibles | GitHub y Confluence ya forman parte del trabajo del proyecto; cualquier costo adicional se evaluará por separado | Gestión y documentación |

**Distinción:** adquirir hosting o base de datos gestionada no implica tercerizar el desarrollo del backend ni la propiedad de la lógica clínica. Las herramientas ya utilizadas no se declaran automáticamente compras nuevas.

## 15. Punto 2 — Matriz integral de adquisiciones a terceros


| Ítem y servicio | EDT / requisito | Contrato / modalidad | Proveedores candidatos ficticios | Responsable | Costo estimado | Fecha requerida | Planificación | Cierre previsto |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |


## 16. Punto 3 — Simulación del proceso de compra ADQ-01 de principio a fin

**Compra elegida:** hosting de backend y base de datos gestionada. **Inicio propuesto:** al aprobar la arquitectura de despliegue, capacidad mínima y presupuesto; idealmente dos semanas antes de la fecha requerida para las pruebas de integración (referencia S4). **Dependencias:** diseño de arquitectura, requisitos de seguridad, proyección de consumo y autorización económica.

| Etapa | Actividades concretas | Responsable | Documento o registro resultante |
| --- | --- | --- | --- |
| 1. Identificación | Definir necesidad, riesgos de indisponibilidad y requisitos técnicos | Responsable técnico + PM | Ficha de necesidad ADQ-01 |
| 2. Solicitud | Especificar capacidad, backups, soporte, seguridad, plazo y presupuesto | Solicitante técnico | SOL-ADQ-001 / especificación técnica |
| 4. Evaluación | Aplicar filtros excluyentes y puntuación ponderada | Responsable técnico + PM | EVA-PROV-001 / matriz de comparación |
| 5. Selección | Justificar proveedor recomendado y revisar riesgos y TCO | PM | Informe de recomendación |
| 6. Aprobación | Comprobar disponibilidad presupuestaria y autorizar | Patrocinador / autoridad delegada | APR-001 (simulada, no emitida) |
| 8. Recepción | Habilitar entorno, probar despliegue, backups, acceso y restauración | Responsable técnico + QA | REC-001 y acta de pruebas |
| 9. Seguimiento | Medir disponibilidad, costos, incidentes y cumplimiento de SLA | Responsable técnico + PM | Reportes mensuales e INC-001 |
| 10. Evaluación y cierre | Revisar conformidad, resolver reclamos, aprobar factura y archivar documentación | PM + patrocinador | EVP-001 y CIE-001 |

**Resultado simulado:** se emite una recomendación favorable a Cloud Sur, se simula aprobación presupuestaria y se ejecutan pruebas de recepción. Los documentos mencionados son identificadores de registros propuestos, no comprobantes efectivamente existentes.

## 17. Punto 4 — Selección justificada de proveedor

La matriz de las secciones 6.2–6.5 compara tres proveedores ficticios, superando el mínimo de dos. Los pesos propuestos suman 100 %: disponibilidad 25 %, calidad técnica y seguridad 25 %, costo total 20 %, soporte y SLA 15 %, riesgo/continuidad 10 % y escalabilidad 5 %. Se prioriza la seguridad y la continuidad porque el sistema procesa historias clínicas y separa datos entre clínicas.

| Proveedor | TCO 12 meses | Calificación ponderada | Resultado de selección |
| --- | --- | --- | --- |

**Justificación:** Cloud Sur combina la puntuación más alta con un costo anual inferior al de Nube Andina. Infra Vet es más económico, pero la matriz simulada asigna menores valores en dimensiones críticas. La adjudicación final depende de comprobar requisitos excluyentes: seguridad, aislamiento, backups, recuperación y SLA. **El semáforo no reemplaza esa verificación.**

## 18. Punto 5 — Condiciones del acuerdo, riesgo y seguimiento

| Condición | Acuerdo propuesto para ADQ-01 | Cómo se controla |
| --- | --- | --- |
| Objeto y alcance | Hosting del backend, base de datos gestionada, respaldos y soporte durante 12 meses | Inventario de servicios y pruebas de aceptación |
| Pago | Mensual contra factura y conformidad; instalación tras aceptación inicial | Comprobante y autorización |
| Entrega | Entorno disponible antes de la prueba de integración prevista | Acta de habilitación y checklist |
| Disponibilidad | ≥99,9 % mensual | Monitoreo independiente y reporte mensual |
| Soporte | Respuesta inicial P1 ≤30 minutos; escalamiento documentado | Registro de tickets y tiempos |
| Recuperación | RPO ≤24 h; RTO ≤8 h | Pruebas de restauración |
| Aceptación | Despliegue funcional, backup restaurable y requisitos mínimos cumplidos | REC-001 firmado por revisor autorizado |
| Terminación | Exportación y borrado acordados, devolución de credenciales y cierre de facturas | Acta de cierre y evidencia de migración |

**Riesgo principal:** indisponibilidad o pérdida/exposición de datos. **Prevención:** monitoreo externo, backups y simulacros de restauración, control de accesos y pruebas de aislamiento. **Respuesta:** incidente P1, comunicación inmediata al PM, activación de contingencia y solicitud de análisis de causa al proveedor. **Seguimiento:** reporte mensual de SLA, costos, tickets y acciones correctivas; revisión adicional después de cualquier P1. Se vincula con la matriz de riesgos del proyecto, sin afirmar que estas medidas ya están implementadas.

## 19. Punto 6 — Evaluación de lo recibido y del proveedor

| Aspecto controlado | Método / criterio | Responsable funcional | Registro | Respuesta ante no conformidad |
| --- | --- | --- | --- | --- |
| Entrega y funcionamiento | Despliegue, conexión backend-DB y acceso correcto | Responsable técnico | Checklist REC-001 | Rechazar recepción hasta corregir |
| Backups y restauración | Prueba de restauración con RPO/RTO acordados | Responsable técnico + QA | Acta de recuperación | Solicitar nueva prueba y plan correctivo |
| Disponibilidad | ≥99,9 % mensual | PM + responsable técnico | Reporte SLA | Ticket, crédito contractual y seguimiento |
| Soporte | Respuesta P1 ≤30 min | PM | Registro de tickets | Escalar a nivel contractual |

**Resultado posterior simulado:** disponibilidad 99,95 %, respuesta a P1 en simulacro de 20 minutos y restauración en 7 horas. Se considera conforme con los umbrales propuestos, con una observación de mejora sobre documentación de recuperación. **Acción:** solicitar manual actualizado y verificarlo en la siguiente revisión. Si el proveedor incumple, se registra no conformidad, se establece plazo de corrección, se reevalúa y, ante reiteración, se considera rescisión o sustitución según contrato.

### 19.1 Cierre y evidencia documental


## 20. Correspondencia con la consigna

| Punto oficial | Secciones que lo responden |
| --- | --- |
| 1. Identificación y decisión desarrollar/adquirir | 14.1 |
| 2. Matriz de adquisiciones | 15 |
| 3. Simulación de proceso, responsables, registros y dependencias | 16 |
| 4. Criterios, comparación y selección | 6 y 17 |
| 5. Acuerdo, riesgo y seguimiento | 8, 9 y 18 |
| 6. Evaluación de recepción y proveedor | 10 y 19 |

## 21. Índice navegable de la consigna

Seleccioná un enlace para ir directamente a la sección correspondiente de esta misma página. La tabla original de correspondencia se conserva arriba.

| Punto oficial | Ir a la respuesta |
| --- | --- |
| 1. Identificación y decisión desarrollar/adquirir | Ir a sección 14.1 |
| 2. Matriz de adquisiciones | Ir a sección 15 |
| 3. Simulación de proceso, responsables, registros y dependencias | Ir a sección 16 |
| 4. Criterios, comparación y selección | Ir a sección 6 y 17 |
| 5. Acuerdo, riesgo y seguimiento | Ir a sección 8, 9 y 18 |
| 6. Evaluación de recepción y proveedor | Ir a sección 10 y 19 |

**Nota:** los enlaces utilizan los fragmentos de encabezado de Confluence. Si la interfaz cambia su formato de anclas, se pueden ajustar desde el editor.
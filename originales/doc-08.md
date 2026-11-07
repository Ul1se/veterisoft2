# \[ISII\-012\-26\] Modelo de Calidad ISO 25010

# Trabajo Práctico: Integración de PMBOK e ISO (VeteriSoft)

## 1. Calidad del Producto de Software ISO/IEC 25010

Identificación de las características y subcaracterísticas del modelo de calidad que cumple la plataforma VeteriSoft:

- **Adecuación Funcional:** Se evidencia en la completitud funcional de los módulos operativos desarrollados en el núcleo del sistema, como el "Módulo HCE (1.3.1)", "Módulo Receta Digital (1.3.2)" y "Módulo Turnos y Agenda (1.3.3)".

## 2. Operación y Gobernanza del Servicio según ISO/IEC 20000-1

La evaluación del comportamiento integral del servicio IT de VeteriSoft se gestiona a través de los siguientes componentes del proyecto:

- **Gestión del Nivel de Servicio:** Controlado mediante el "Panel de Superadministración SaaS y Métricas" (Paquete 1.5.2), el cual permite gobernar y monitorear el aprovisionamiento de clínicas, uso de CPU y almacenamiento.
- **Diseño y Transición de Servicios Nuevos:** Ejecutado mediante la fase de "Marcha Blanca y Salida a Producción (Go-Live)" (Paquete 1.7.4), asegurando que el servicio pase de desarrollo a operación estable.

## 3. Procesos de Transición, Operación y Mantenimiento según ISO/IEC/IEEE 12207

Basado en la estructura de desglose (EDT) de VeteriSoft, se identifican los siguientes procesos del ciclo de vida del software:

- **Proceso de Transición del Software:** Cubierto por el paquete "1.7.2 Utilitarios de Migración de Datos Legados", que asegura la transferencia de clientes, mascotas y stock de los sistemas anteriores al nuevo producto.
- **Proceso de Mantenimiento:** Estructurado formalmente a través del "Cierre Contractual y Transferencia" (Paquete 1.1.4), donde se establecen las garantías de "soporte de transición" posproducción.

## 4. Evaluación de Proceso Clave según ISO/IEC 33000


**Nivel de Madurez Asignado:** **Nivel 3 (Establecido)**.

**Justificación de la Evaluación:**
El proceso no opera de forma reactiva o incompleta (Niveles 0 y 1), ni se limita a estar meramente gestionado (Nivel 2). Se evalúa en **Nivel 3** debido a que se utiliza un proceso estándar bien definido que incluye:


## 5. Ampliación y revisión crítica del P12 — integración verificable de normas


### 5.1 Relación entre PMBOK y las cuatro familias ISO

| Marco | Qué gobierna | Aplicación a VeteriSoft | Salida verificable |
| --- | --- | --- | --- |
| ISO/IEC 25010 | Modelo de calidad del producto de software | Características de calidad del SaaS veterinario | Requisitos no funcionales, métricas y resultados de pruebas |
| ISO/IEC 20000-1 | Sistema de gestión del servicio | Operación del servicio cloud, SLA, incidencias, continuidad, proveedores y mejora | Acuerdos, tickets, mediciones, revisiones y acciones correctivas |
| ISO/IEC/IEEE 12207 | Procesos del ciclo de vida del software | Transición, operación y mantenimiento del producto | Actas de despliegue, manuales, monitoreo y cambios versionados |

**Cadena de integración:** PMBOK planifica y controla el proyecto → ISO 25010 define atributos de calidad del producto → ISO 12207 organiza su entrega y evolución → ISO 20000-1 gobierna el servicio operado → ISO 33000 evalúa la capacidad de un proceso elegido y orienta mejoras. Ninguna norma sustituye a las demás.

## 6. Punto 1 — Calidad del producto según ISO/IEC 25010

**Referencia metodológica:** se utiliza el modelo de ocho características de calidad de producto difundido en ISO/IEC 25010:2011, compatible con la clasificación usada en el material existente. La edición 2023 reorganiza el modelo e introduce cambios de denominación y alcance; si la cátedra exige una edición concreta, se debe ajustar esta matriz a ella. La tabla identifica **atributos aplicables y cómo verificar su cumplimiento**; no acredita resultados reales.

| Característica | Subcaracterísticas pertinentes | Aplicación a VeteriSoft | Evidencia y criterio propuestos |
| --- | --- | --- | --- |
| Adecuación funcional | Completitud, corrección y pertinencia funcional | Alta de tutor y mascota, agenda de turnos e historia clínica del MVP | UAT de flujo completo y RTM: 100 % de criterios críticos aprobados |
| Eficiencia de desempeño | Comportamiento temporal, utilización de recursos, capacidad | Consulta de historia clínica y concurrencia de agenda | Consulta de historial en menos de 2 s según acta; prueba de carga con P95 y umbral acordado |
| Compatibilidad | Coexistencia e interoperabilidad | Integración frontend–API–base de datos y servicios externos | Pruebas de contrato API, formatos y compatibilidad de navegador |
| Usabilidad | Reconocibilidad, aprendibilidad, operabilidad, protección frente a errores, estética y accesibilidad | Agenda para recepcionistas y veterinarios; web responsiva para tutores | UAT con tareas reales, pruebas de errores de formulario y accesibilidad |
| Fiabilidad | Madurez, disponibilidad, tolerancia a fallos, recuperabilidad | Acceso continuo a turnos e HCE; respaldo de registros | Monitoreo de disponibilidad y restauración de backups; RTO/RPO acordados |
| Mantenibilidad | Modularidad, reutilización, analizabilidad, modificabilidad, capacidad de prueba | Módulos de turnos, usuarios e HCE; pruebas automatizadas | Revisión de código, cobertura acordada y regresión sin defectos críticos |


## 7. Punto 2 — Operación y gobernanza del servicio ISO/IEC 20000-1

ISO/IEC 20000-1 se centra en el **sistema de gestión del servicio (SMS)**: políticas, responsabilidades, planificación, prestación, evaluación del desempeño y mejora. La existencia de un panel técnico o un pipeline por sí sola no demuestra conformidad integral.

| Dimensión del servicio | Control propuesto | Indicador / evidencia | Situación documentada |
| --- | --- | --- | --- |
| Gobernanza, alcance y responsabilidades | Definir catálogo del servicio SaaS, propietario del servicio, política y objetivos | Catálogo aprobado, RACI, revisión por dirección | Existe acta y estructura EDT; SMS completo no verificado |
| Gestión de niveles de servicio | Acuerdo con clínicas sobre disponibilidad, soporte y rendimiento | SLA, reportes mensuales y revisiones | Panel de métricas 1.5.2 previsto en EDT; operación real no verificada |
| Incidentes y solicitudes | Clasificar prioridad P1–P4, registrar, escalar, resolver y comunicar | Tickets, tiempo de respuesta y resolución | Procedimiento propuesto; no hay muestra de tickets reales |
| Problemas | Analizar causa raíz de incidentes recurrentes | RCA y acciones preventivas | Pendiente de evidencia operativa |
| Cambios y liberaciones | Aprobar cambios, probar, versionar y contar con reversión | Ticket, PR, release y acta de despliegue | Procedimiento P9 documentado; ejecución no verificada |
| Proveedores y relaciones | Evaluación, contrato, SLA y revisión del servicio externo | Matriz de selección, acuerdo y evaluación posterior | P8 documentado como simulación |

### 7.1 Ejemplo de tablero mensual de servicio (simulación, no medición real)

| KPI | Meta propuesta | Resultado ficticio | Evaluación |
| --- | --- | --- | --- |
| Disponibilidad mensual | ≥99,9 % | 99,95 % | Conforme en el ejemplo |
| Respuesta inicial P1 | ≤30 min | 20 min | Conforme en el ejemplo |
| Restauración de respaldo | RTO ≤8 h | 7 h | Conforme en el ejemplo |
| Incidentes críticos sin cierre | 0 al corte mensual | 1 | No conforme; acción correctiva |

**Acción ante desviación simulada:** el PM convoca revisión del incidente P1 pendiente, asigna responsable y plazo, verifica causa raíz, comunica al cliente y comprueba eficacia de la corrección. Las metas SLA son ejemplos de la planificación de adquisiciones, no un acuerdo vigente. La meta RTO \<2 h citada en el texto anterior de esta página pertenece a la planificación de la EDT y **no debe confundirse con el SLA de 8 h propuesto en el P8**; el equipo debe armonizar ambas antes de aprobar una línea base.

## 8. Punto 3 — Procesos según ISO/IEC/IEEE 12207

La norma aborda procesos del ciclo de vida del software. En esta consigna se presentan las tres actividades funcionales solicitadas y su relación con entregables de la EDT; el nombre exacto y descomposición de procesos pueden variar según edición de la norma.

| Grupo solicitado | Actividades en VeteriSoft | Responsables funcionales | Entradas / salidas y criterios | EDT |
| --- | --- | --- | --- | --- |
| Transición del software | Preparar ambiente, desplegar versión, migrar datos legados, capacitar, ejecutar marcha blanca y aceptar puesta en servicio | PM, DevOps, datos, QA y cliente (roles por asignar) | Entrada: release y plan de transición. Salida: entorno instalado, datos conciliados, UAT y acta Go-Live. Criterio: sin defectos bloqueantes. | 1.7.1–1.7.4; 1.6.4 |
| Operación del software | Monitorear disponibilidad, atender solicitudes e incidentes, controlar accesos, ejecutar backups y revisar capacidad | Operador de servicio, soporte y responsable técnico (por asignar) | Entrada: servicio liberado y SLA. Salida: logs, tickets, reportes de uptime y respaldos. Criterio: indicadores acordados y atención de incidentes. | 1.5.2; 1.7.1 |
| Mantenimiento del software | Recibir fallas y mejoras, analizar impacto, corregir, probar regresión, aprobar release, documentar y liberar | Equipo de desarrollo, QA, PM (según cambios) | Entrada: incidencia o solicitud CAM. Salida: código versionado, pruebas, actualización de SRS/manual y release. Criterio: cambio aprobado y verificado. | 1.3; 1.6; 1.1.4 para transferencia contractual |

**Aclaración de la página original:** CI/CD y hosting son medios de transición y operación, no equivalen por sí solos a un proceso de operación completo. Asimismo, el cierre contractual y transferencia 1.1.4 puede definir soporte posterior, pero **el mantenimiento exige actividades técnicas continuas de análisis, modificación, prueba y liberación**.

### 8.1 Ejemplo de interacción entre procesos

Una nueva versión del módulo de turnos se construye y prueba → **transición** la despliega con migraciones y aceptación → **operación** mide errores, tiempos y disponibilidad → si se detecta un defecto, **mantenimiento** registra incidencia, corrige, prueba y libera una versión nueva → transición vuelve a desplegarla. La trazabilidad se mantiene con ticket, commit, pruebas y versión.

## 9. Punto 4 — Evaluación de capacidad de un proceso con ISO/IEC 33000


### 9.1 Escala de capacidad

| Nivel | Significado en la consigna | Evidencia requerida en VeteriSoft |
| --- | --- | --- |
| 2 — Gestionado | Planificado, monitoreado y ajustado; entregables controlados | Responsables, calendario de revisión, cambios de estado y evidencias de seguimiento |
| 3 — Establecido | Proceso estándar definido a nivel organizacional | Procedimiento estándar aprobado, desplegado y aplicado sistemáticamente en distintos trabajos |
| 4 — Predecible | Control cuantitativo y estadístico | Series históricas, límites de control, estabilidad y predicción |
| 5 — En optimización | Mejora continua basada en análisis cuantitativo de causas comunes | Análisis de variación, cambios controlados y mejora sostenida demostrada |

### 9.2 Evidencias disponibles frente a la escala

| Evidencia | Qué demuestra | Qué NO demuestra por sí sola |
| --- | --- | --- |
| Roles de PM y funciones técnicas | Existe una estructura de responsabilidades previstas | Que un procedimiento estándar esté desplegado a nivel organizacional |

### 9.3 Diagnóstico y calificación defendible


**Limitación:** incluso la atribución de Nivel 1 es una apreciación académica documental y no una evaluación certificada. Para corroborarla deben examinarse muestras de aplicación y resultados. Si la cátedra pide una **simulación de Nivel 3**, puede plantearse como escenario objetivo futuro, pero no confundirse con capacidad observada.

### 9.4 Plan de mejora del proceso

| Acción | Responsable funcional | Plazo propuesto | Evidencia de eficacia |
| --- | --- | --- | --- |
| Definir procedimiento de identificación, valoración, respuesta y revisión | PM | Próximo sprint | Procedimiento aprobado y comunicado |
| Controlar versiones de matriz y seguimiento | PM | 2 sprints | Historial de cambios y matriz vigente identificable |
| Verificar efectividad de mitigaciones críticas | Responsables técnicos y QA | Antes de UAT | Pruebas de aislamiento y recuperación; defectos críticos tratados |
| Estandarizar el proceso para proyectos futuros | Dirección / organización | Etapa posterior | Plantilla aprobada y aplicación demostrada en más de un contexto |
| Introducir medición histórica | PM | Cuando exista serie suficiente | Tendencias y límites de control validados, no solo porcentajes aislados |

**Reevaluación:** repetir la revisión después de dos sprints, aportando matriz versionada, actas, decisiones, indicadores y pruebas. Solo elevar el nivel si las evidencias del nivel correspondiente y de los inferiores están satisfechas.

## 10. Síntesis integrada y correspondencia con la consigna

| Punto | Secciones | Resultado académico |
| --- | --- | --- |
| 1. ISO/IEC 25010 — características y subcaracterísticas | 1 y 6 | Ocho características, aplicación al MVP y pruebas de verificación |
| 2. ISO/IEC 20000-1 — operación y gobernanza | 2 y 7 | Dimensiones de gestión, controles, KPIs y brechas de evidencia |
| 3. ISO/IEC/IEEE 12207 — transición, operación, mantenimiento | 3 y 8 | Actividades, responsables, entradas, salidas y EDT |

## 11. Fuentes del proyecto y criterio de evidencia

- Acta de Constitución — alcance y metas del MVP
- EDT/WBS — paquetes de trabajo y entregables
- SRS — especificación de requisitos
- Práctico N.º 8 — Adquisiciones (simulación)
- Práctico N.º 9 — Control de Cambios (simulación)

> Copia pública: algunos detalles técnicos y de planificación interna fueron omitidos. La estructura y el contenido general del documento se conservan.

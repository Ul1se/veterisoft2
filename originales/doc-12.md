# 📣 GESTIÓN DE COMUNICACIONES Y STAKEHOLDERS

# Gestión de Comunicaciones y Partes Interesadas en el Proyecto VeteriSoft — VeteriSoft

## Plataforma Integral de Gestión Veterinaria y Cuidado de Mascotas


**Proyecto:** VeteriSoft | **Código:** ISII-006-22 | **Versión:** 2.0 | **Fecha:** 27/09/2026


---

# ÍNDICE


---


## **1. Comunicaciones Internas**

A continuación se identifican las principales comunicaciones que se producen dentro del equipo de desarrollo y gestión del proyecto VeteriSoft, indicando de forma explícita la herramienta y el espacio específico utilizado:


|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Qué se comunica** | **Quién comunica** | **A quién/es comunica** | **Cómo se comunica (Herramienta y Espacio)** | **Cuándo / Frecuencia** |
| **Asignación y estimación de tareas del Sprint** | Líder del Proyecto / Scrum Master | Equipo de desarrollo y QA | Tablero tablero de seguimiento del proyecto + canal interno de planificación | Al inicio de cada iteración (quincenal) |
| **Avance de tareas y sincronización operativa** | Integrantes del equipo | Equipo completo | Videollamada en Google Meet (Daily de 15 min) + Registro escrito en canal interno de seguimiento | Diario (lunes a viernes, 09:00 h) |
| **Cambios o aclaraciones en los requisitos** | Responsable de Requisitos / Analista | Equipo completo | Incidencias (Issues) en GitHub etiquetadas con type:requirement + Discusión en canal interno de requisitos | Cada vez que se formaliza o aprueba un cambio de alcance |
| **Problemas, incidencias críticas o bloqueos técnicos** | Integrante afectado | Líder del proyecto / Equipo técnico | canal interno de incidencias + grupo de mensajería del equipo | Inmediatamente cuando se presenta el problema o bloqueo |
| **Entrega de una funcionalidad para revisión (Code Review)** | Desarrollador responsable | Revisores asignados / Tech Lead | Pull Request en repositorio GitHub (repositorio/canal interno) + Notificación en canal de revisión técnica | Al finalizar la codificación y pruebas unitarias de la tarea |
| **Resultados de ejecución del pipeline de CI/CD y cobertura** | Bot automatizado (GitHub Actions) | Equipo de desarrollo y Líder QA | Notificación automatizada en canal de estado automatizado | Con cada push o merge en ramas develop y main |
| **Definición de modelos de datos y diagramas de arquitectura** | Arquitecto de Software | Equipo de desarrollo | Espacio colaborativo en espacio de documentación del proyecto + canal de análisis técnico | Al concluir el análisis de un nuevo módulo o spike técnico |


### **1.1. Evidencias de las Comunicaciones Internas**

En cumplimiento del lineamiento de incorporar evidencias del uso real de los canales definidos para la organización del proyecto:


- **Evidencia 1 (Tablero de Organización en GitHub Projects):**
- *Herramienta y Espacio:* Organización GitHub de la cátedra, tablero Kanban repositorio/canal interno.
- *Detalle del registro:* Tareas desglosadas por historias de usuario vinculadas al módulo de agendamiento de turnos y registro de historias clínicas electrónicas (HCE). Cada tarjeta contiene su estimación de complejidad, desarrollador asignado, etiquetas temáticas (backend, frontend, testing) y checklist de criterios de aceptación.


- **Evidencia 2 (Revisión de Código y Flujo de Calidad en Pull Requests):**
- *Herramienta y Espacio:* repositorio del proyecto, solicitud de cambio de código para turnos.
- *Detalle del registro:* Conversación técnica entre pares examinando el algoritmo de consultas concurrentes, aprobación explícita de dos miembros del equipo y validación automática del workflow de GitHub Actions comprobando que los tests unitarios en JUnit superan el 85% de cobertura de ramas (Branch Coverage).


- **Evidencia 3 (Coordinación de Tareas en mensajería interna):**
- *Herramienta y Espacio:* canal interno de planificación.
- *Detalle del registro:* Hilo de conversación donde el equipo consensuó la división de tareas para el sprint, acordando los contratos de interfaz (endpoints REST/JSON) entre el frontend web y la API del servicio de historias clínicas.


## **2. Comunicaciones Externas**


Identificación de los flujos de comunicación mantenidos entre el equipo del proyecto y actores externos (clientes de clínicas veterinarias piloto, usuarios operativos, docentes de la cátedra y especialistas):


|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Qué se comunica** | **Quién comunica** | **A quién/es comunica** | **Cómo se comunica (Herramienta y Espacio)** | **Cuándo / Frecuencia** |
| **Relevamiento inicial de necesidades clínicas** | Analista Funcional / Líder del Proyecto | Responsable de la Clínica / Veterinario Referente | Reunión presencial / Google Meet + Minuta compartida en Google Docs | Al inicio del proyecto y cuando sea necesario profundizar requerimientos |
| **Validación de la especificación de requisitos** | Líder del Proyecto | Cliente (Dirección de la Clínica) | Reunión por Google Meet + documento de requisitos del proyecto | Al finalizar el relevamiento de cada módulo funcional |
| **Presentación de avances e incrementos funcionales (Demo)** | Equipo del Proyecto | Cliente y Usuarios Referentes | Demostración en vivo en Google Meet sobre el ambiente de Staging desplegado | Cada 15 días (al finalizar cada Sprint) |
| **Consulta sobre flujos de atención y disponibilidad de salas** | Analista Funcional | Personal Administrativo / Recepción | canal institucional de mensajería o Correo Electrónico | Según necesidad durante el diseño y modelado de pantallas |
| **Solicitud de aprobación ante cambios de alcance** | Líder del Proyecto | Cliente / Sponsor | Envío formal por Correo Electrónico () con formulario de control de cambios adjunto | Cuando se solicita una modificación sobre el alcance acordado |
| **Entrega de una versión para validación operativa** | Líder del Proyecto | Cliente y Usuarios Referentes | Despliegue en servidor web de prueba + Acta de entrega remitida por Correo Electrónico | Al finalizar una versión o hito contractual del sistema |
| **Entrega de documentación académica y consultas metodológicas** | Líder del Proyecto / Equipo | Docente Responsable / Cátedra UNViMe | Entrega formal en buzón del Campus Virtual UNViMe + enlace al repositorio del proyecto | En las fechas fijadas en el cronograma académico de la cátedra |


### **2.1. Evidencias de las Comunicaciones Externas**

- **Evidencia 1 (Reunión de Relevamiento y Validación de Alcance):**
- *Herramienta y Espacio:* minuta de reunión registrada en la documentación del proyecto y compartida vía enlace seguro con el Administrador y Director Veterinario de la clínica piloto.
- *Detalle del registro:* Validación de las reglas de inmutabilidad del historial médico, obligatoriedad del número de lote en vacunas para control de caducidad y conformidad con el modelo de alertas a usuarios.


- **Evidencia 2 (Demostración de Avance sobre Ambiente de Pruebas):**
- *Herramienta y Espacio:* Grabación de la sesión de Google Meet con la recepcionista y veterinario referente.
- *Detalle del registro:* Navegación interactiva sobre el módulo de turnos y validación de la legibilidad del código QR de extravío de mascotas en dispositivos móviles.


- **Evidencia 3 (Entregas e Intercambio Académico Institucional):**
- *Herramienta y Espacio:* Plataforma de gestión educativa del Campus Virtual UNViMe.
- *Detalle del registro:* Comprobante digital de entrega de las etapas de requerimientos y gestión de proyecto en los plazos establecidos por el docente a cargo.


## **3. Gestión de las Partes Interesadas (Stakeholders)**

Matriz de partes interesadas elaborada a partir del ecosistema del proyecto VeteriSoft. Define con precisión qué debe cumplir el equipo para satisfacer las necesidades y expectativas de cada interesado, junto con su nivel de influencia sobre el producto y las decisiones del proyecto:


|  |  |  |
| --- | --- | --- |
| **Parte Interesada** | **¿Qué debe cumplir el proyecto con esta parte interesada?** | **Nivel de Influencia** |
| **Cliente / Responsable de la Clínica (Sponsor)** | Entregar una plataforma SaaS modular que respete el alcance, plazos y presupuesto acordados, garantizando una reducción medible del 25% en el ausentismo de turnos y un esquema de suscripción autosustentable. | **Alto** |
| **Médico Veterinario (Usuario Final Clínico)** | Proporcionar una solución ágil e intuitiva que permita consultar el historial clínico y cargar diagnósticos en menos de 3 clics, garantizando la inmutabilidad de las atenciones firmadas y la emisión digital de recetas sin retrasar la consulta presencial. | **Alto** |
| **Recepcionista / Administrativo (Usuario Final Operativo)** | Entregar un sistema de agenda que impida activamente la superposición horaria de médicos o consultorios, agilice el alta de tutores y consolide la facturación con débito automático y atómico de insumos de farmacia. | **Medio** |
| **Administrador de la Clínica (Gestión Operativa)** | Proveer un panel de control con reportes financieros consolidados (PDF/Excel), alertas tempranas ante medicamentos con vencimiento menor a 30 días y auditoría estricta de cualquier modificación sobre la lista de aranceles. | **Alto** |
| **Tutor / Propietario de Mascota (Cliente Final)** | Ofrecer una interfaz web/móvil responsiva para autogestionar citas de manera autónoma, consultar el carnet de vacunas digital y disponer de una placa QR para extravíos bajo esquema de privacidad opt-in. | **Medio** |
| **Administrador del SaaS (Infraestructura y Operaciones)** | Garantizar una arquitectura multitenant con aislamiento riguroso de bases de datos entre clínicas (retornando error 403 ante cualquier consulta cruzada), disponibilidad mensual del 99.5% y herramientas de supervisión técnica de suscripciones. | **Alto** |
| **Equipo de Desarrollo y QA** | Disponer de requerimientos especificados formalmente sin ambigüedades, criterios de aceptación cuantitativos y medibles, un backlog priorizado en GitHub Projects y entornos de CI/CD estables con políticas claras de cobertura de pruebas. | **Alto** |
| **Docente Responsable / Cátedra (UNViMe)** | Cumplir rigurosamente con las consignas pedagógicas, aplicar los estándares IEEE Std 830 e ISO/IEC/IEEE 29148, mantener la trazabilidad de la documentación y presentar los entregables en las fechas académicas fijadas. | **Alto** |
| **Especialista del Dominio / Legal** | Contemplar y validar correctamente las normas vigentes de protección de datos personales y las regulaciones de los Colegios Médicos Veterinarios relativas a matriculación y emisión de recetas digitales. | **Medio** |

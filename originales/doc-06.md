# 📝 ESPECIFICACIÓN FORMAL DE LOS REQUISITOS \(SRS\)

# ESPECIFICACIÓN FORMAL DE REQUISITOS DE SOFTWARE (SRS) — VeteriSoft

## Plataforma Integral de Gestión Veterinaria y Cuidado de Mascotas


**Proyecto:** VeteriSoft | **Código:** ISII-006-22 | **Versión:** 2.0 | **Fecha:** 27/09/2026


---


Este documento se rige estrictamente bajo las directrices combinadas de **IEEE Std 830-1998 **(especificación de requerimientos de software) y de la norma internacional **ISO/IEC/IEEE **


**29148:2018 **(procesos de ingeniería de requisitos en el ciclo de vida del sistema y software). ● **Unicidad y Trazabilidad: **Cada requisito posee un identificador taxonómico estructurado  (RN, RI, RF, RNF, RT, RP, RC).


● **Verificabilidad: **En conformidad con ISO/IEC/IEEE 29148 cláusula 5.2.5, cada requisito  incorpora su respectivo Criterio de Aceptación formulado de forma cuantitativa, medible o  empíricamente contrastable mediante pruebas de caja negra, análisis de tráfico,  benchmarks o inspecciones formales.


● **Taxonomía Integral de Requisitos: **Se desglosan explícitamente los niveles de negocio,  interesados (stakeholders), solución (funcionales y técnicos), transición/preparación  operativa, de gestión del proyecto y de calidad de producto/proceso.


## DOCUMENTACION DE REQUERIMIENTOS

| **NOMBRE DEL PROYECTO** | **SIGLAS DEL PROYECTO** |
| --- | --- |
| Plataforma Integral de Gestión Veterinaria y Cuidado de Mascotas | VeteriSoft |
| Las clínicas veterinarias operan frecuentemente con sistemas fragmentados o registros en papel, lo que dificulta el seguimiento clínico continuo, la trazabilidad del inventario de insumos/medicamentos y la gestión eficiente de citas. |  |
| Necesidad de automatizar la programación de turnos, emisión de alertas preventivas (vacunación y desparasitación) y facturación para maximizar los ingresos y reducir el ausentismo de los clientes. |  |
| Desplegar una plataforma confiable, escalable y accesible mediante cliente web y móvil. |  |
| Incrementar la tasa de retorno de pacientes en controles preventivos a través de notificaciones automatizadas. |  |
| Reducir el tiempo de atención administrativa por paciente en un 30% mediante el acceso unificado a Historias Clínicas Electrónicas (HCE). |  |



## 1. Requisitos del Negocio (RN)

Definen las metas organizacionales de alto nivel, el valor de negocio esperado y el retorno de  inversión que justifica la ejecución de la solución tecnológica.

| **ID** | **Interesado Principal** | **Priorida d** | **Declaración del Requisito de Negocio** | **Criterio de Aceptación Cuantificable** |
| --- | --- | --- | --- | --- |
| **RN-01** | Dirección Ejecutiva / Sponsor | Muy Alta | Reducir la tasa de ausentismo de clientes a citas veterinarias mediante la automatización de notificaciones y recordatorios omnicanal. | Disminuir el ausentismo no informado en al menos un 25% dentro de los primeros 6 meses de operación en cada clínica piloto, medido contra la línea base histórica del cliente. |
| **RN-02** | Gerencia de Operaciones | Muy Alta | Optimizar la productividad del personal clínico y administrativo mediante la digitalización unificada del acto médico. | Reducir el tiempo promedio de atención administrativa y registro por paciente en un 30% a través del uso de la Historia Clínica Electrónica (HCE). |
| **RN-03** | Comité Financiero | Alta | Disminuir pérdidas económicas y mermas derivadas del vencimiento de insumos farmacéuticos y vacunas en stock. | Reducir las pérdidas monetarias por lotes de medicamentos vencidos en no menos de un 40% durante el primer año a partir del sistema de alertas tempranas preventivas. |



## 2. Requisitos de los Interesados (RI)

Expresan las necesidades, expectativas y limitaciones de los actores clave clasificados por  perfil operativo.

| **ID** | **Interesado (Stakeholder)** | **Prioridad** | **Necesidad del Interesado** | **Criterio de Aceptación** |
| --- | --- | --- | --- | --- |
| **RI-01** | Médico Veterinario | Muy Alta | Disponer de un mecanismo ágil para acceder al historial médico y registrar consultas en tiempo real sin entorpecer la atención presencial. | El acceso al expediente clínico y la carga de diagnósticos, anamnesis e imágenes diagnósticas debe completarse en menos de 3 clics o pantallas consecutivas desde la selección del paciente. |
| **RI-02** | Recepcionista / Administrativo | Muy Alta | Evitar la duplicación de turnos y sobreasignación de profesionales o quirófanos en horas pico. | La interfaz de agenda debe bloquear en tiempo real cualquier intento de superposición horaria para un mismo recurso (profesional o consultorio/sala) y emitir advertencia visual explícita. |
| **RI-03** | Administrador de la Clínica | Alta | Consolidar el control financiero, facturación e inventario en un tablero unificado de control gerencial. | El panel de gestión debe generar reportes consolidados de facturación, caja y estado de stock exportables a formatos estándar (.xlsx, .pdf) con consistencia total frente a los comprobantes emitidos. |
| **RI-05** | Administrador del SaaS | Muy Alta | Administrar múltiples clientes institucionales (clínicas) garantizando confidencialidad absoluta y autogestión de planes de suscripción. | El administrador de la plataforma debe poder crear, parametrizar y suspender instancias de clínicas (tenants) sin provocar interrupciones de servicio a los demás clientes activos. |



## 3. Requisitos de la Solución

### 3.1 Requisitos Funcionales (RF)

| **ID** | **Interesado** | **Priorid ad** | **Declaración del Requisito Funcional** | **Criterio de Aceptación** |
| --- | --- | --- | --- | --- |
| **RF-01** | Médico Veterinario | Muy Alta | El sistema debe permitir registrar, consultar y actualizar la Historia Clínica Electrónica (HCE), incluyendo anamnesis, diagnóstico, tratamiento, prescripciones e imágenes adjuntas. | Dado un profesional autenticado en la ficha de un paciente, al guardar una entrada clínica con o sin adjunto (JPG/PNG/PDF de hasta 10 MB), el registro debe persistirse en base de datos en menos de 2.0 segundos y quedar indexado en orden cronológico inverso. |
| **RF-02** | Médico Veterinario | Muy Alta | El sistema debe generar recetas digitales vinculadas a la matrícula profesional habilitada del veterinario con firma digital. | El sistema debe validar automáticamente la vigencia de la matrícula del profesional actuante; de ser válida, emitirá un PDF no editable con código de validación alfanumérico/QR; de lo contrario, bloqueará la emisión informando el motivo del bloqueo. |
| **RF-03** | Médico Veterinario | Muy Alta | El sistema debe presentar una vista cronológica unificada del plan de vacunación, desparasitación e intervenciones quirúrgicas previas. | Al seleccionar la pestaña de medicina preventiva en la ficha del animal, se debe renderizar el listado histórico de dosis aplicadas y los recordatorios proyectados, con filtros funcionales por tipo de intervención y rango de fechas. |
| **RF-04** | Recepcionista | Muy Alta | El sistema debe gestionar la agenda médica integral, asignando citas según disponibilidad del profesional, tipo de servicio y sala. | Cualquier intento de crear un turno que solape en horario o recurso (médico o sala) debe ser rechazado por la validación del sistema con mensaje de error específico; al seleccionar el tipo de consulta, se deben autocompletar la duración estándar y el arancel base. |
| **RF-05** | Recepcionista | Muy Alta | El sistema debe registrar el alta y modificación de tutores y mascotas asegurando la consistencia e integridad de los datos. | No se permitirá el guardado de tutores con documentos ya existentes en el mismo tenant; los campos nombre, DNI/identificación, teléfono y correo electrónico deben satisfacer expresiones regulares de validación sintáctica obligatoria. |
| **RF-06** | Recepcionista | Alta | El sistema debe procesar el cobro y facturación de servicios médicos prestados y medicamentos/insumos dispensados. | Al confirmar una atención, el sistema consolidará los aranceles médicos y los insumos cargados en la consulta, generando el comprobante fiscal/recibo y disparando el débito atómico de las unidades correspondientes en el módulo de inventario. |
| **RF-07** | Administrador Clínica | Alta | El sistema debe emitir reportes periódicos de facturación, flujo de caja y rendimiento operativo por profesional. | El usuario con rol de Administrador debe poder seleccionar un rango de fechas y generar reportes financieros y de rendimiento clínico en formatos PDF y Excel (.xlsx) cuyos totales coincidan al 100% con la sumatoria de comprobantes registrados. |
| **RF-08** | Administrador Clínica | Alta | El sistema debe controlar las existencias de stock, alertando automáticamente ante niveles críticos o proximidad de vencimiento de lotes. | El sistema debe disparar alertas visuales diarias y notificaciones de panel cuando un ítem alcance el stock mínimo definido o un lote se encuentre a 30 días o menos de su fecha de caducidad. |
| **RF-10** | Tutor / Cliente | Alta | El sistema debe proveer un portal web/móvil para autogestión de citas y recepción de notificaciones preventivas vía e-mail y WhatsApp. | El tutor podrá confirmar o reprogramar turnos únicamente sobre franjas disponibles; el servicio automatizado despachará un recordatorio por WhatsApp o e-mail exactamente 24 horas antes del turno confirmado. |
| **RF-11** | Tutor / Cliente | Alta | El sistema debe permitir la consulta y descarga de certificados de salud, recetas digitales y constancias de vacunación por mascota. | El tutor autenticado solo podrá visualizar los registros de sus mascotas asociadas, con descarga disponible de documentos en PDF firmados digitalmente. |
| **RF-12** | Tutor / Cliente | Alta | El sistema debe generar un identificador QR único por mascota vinculado a un perfil público de contacto en caso de extravío. | Al escanear el QR desde cualquier navegador web sin autenticación previa, el sistema debe desplegar únicamente el perfil público con el nombre de la mascota y los canales de contacto autorizados por el tutor, bloqueando el acceso a historiales clínicos o datos privados. |
| **RF-14** | Administrador SaaS | Muy Alta | El sistema debe proveer herramientas de supervisión técnica, métricas de rendimiento y administración de planes de suscripción. | El panel de superadministrador debe reflejar en menos de 5 minutos cualquier suspensión, ampliación o bloqueo de un plan de suscripción de un tenant, restringiendo o habilitando los módulos correspondientes en tiempo real. |


### 3.2 Requisitos No Funcionales (RNF)

| **ID** | **Interesado** | **Priorid ad** | **Declaración del Requisito No Funcional** | **Criterio de Aceptación Cuantitativo** |
| --- | --- | --- | --- | --- |
| **RNF 01** | Administrador SaaS | Muy Alta | **Disponibilidad de Servicio (SLA): **La plataforma debe mantener una alta disponibilidad operativa mensual continua. | El tiempo de actividad (uptime) mensual debe ser ≥ 99.5% (indisponibilidad máxima mensual no programada de 3 horas y 39 minutos), medido mediante monitoreo synthetic y sondas externas. |
| **RNF 03** | Administrador SaaS | Alta | **Rendimiento y Tiempo de Respuesta: **La recuperación de historiales y agenda debe responder ágilmente bajo concurrencia normal. | En pruebas de carga con hasta 200 usuarios concurrentes, el percentil 95 (P95) del tiempo de respuesta para búsquedas en HCE y renderizado de la agenda de turnos debe ser inferior a 2.0 segundos. |
| **RNF 04** | Médico / Recepción | Alta | **Usabilidad y Adaptabilidad (Responsive Design): **La interfaz de usuario debe adaptarse fluidamente a múltiples factores de forma. | La interfaz web debe ajustarse sin pérdida de contenido, solapamiento ni desplazamiento horizontal anómalo en anchos de pantalla correspondientes a móvil (≥360px), tablet (≥768px) y escritorio (≥1024px). |



## 4. Requisitos de Transición y Preparación (RT)

Definen los requisitos transitorios necesarios para pasar del estado operativo actual (fichas en  papel o sistemas legados heterogéneos) a la operación productiva en VeteriSoft.

| **ID** | **Interesado** | **Priorid ad** | **Declaración del Requisito de Transición** | **Criterio de Aceptación** |
| --- | --- | --- | --- | --- |
| **RT-02** | Personal de Clínica | Alta | Se debe ejecutar un programa de capacitación operativa previa a la entrada en producción en las clínicas piloto. | El 100% del personal asignado (médicos veterinarios y administrativos) de la clínica piloto debe completar una evaluación práctica de operaciones comunes (alta de turno, carga de HCE, cobro) con un puntaje aprobatorio ≥ 80%. |
| **RT-03** | Líder Técnico / DevOps | Alta | Garantizar una fase de operación paralela o marcha blanca controlada para mitigar contingencias operativas. | Durante 10 días hábiles consecutivos de marcha blanca, se debe verificar la conciliación del 100% de la facturación e inventario entre el método previo y VeteriSoft sin discrepancias no justificadas. |



## 5. Requisitos del Proyecto (RP)

Condiciones de gobernanza, gestión del alcance, entregables contractuales, plazos y  restricciones del proyecto de ingeniería.

| **ID** | **Interesado** | **Priorid ad** | **Declaración del Requisito del Proyecto** | **Criterio de Aceptación** |
| --- | --- | --- | --- | --- |
| **RP-01** | Dirección del Proyecto | Muy Alta | Entrega de un Producto Mínimo Viable (MVP) funcional para pruebas en entorno piloto antes de la fecha límite contractual. | El MVP debe incluir los módulos indispensables (HCE, Turnos, Alta de Pacientes, Catálogo Base) desplegado en ambiente de Staging y con aprobación firmada del acta de aceptación del Sponsor. |
| **RP-02** | Equipo de Desarrollo | Alta | Adopción de metodología ágil con sprints definidos, integración continua y ceremonias de control periódico. | Presentación de reportes quincenales de avance (burndown charts, control de impedimentos y demos funcionales al finalizar cada sprint de 2 semanas). |
| **RP-03** | Comité de Gestión | Alta | Entrega del paquete formal de documentación técnica, manuales de usuario y diagramas de arquitectura del sistema. | Recepción conforme de los manuales de usuario digitales en formato PDF indexado y de la especificación técnica de la arquitectura bajo formato C4 o UML formal. |



## 6. Requisitos de Calidad (RC)

Parámetros de calidad del software y del proceso de desarrollo enmarcados en los atributos del  modelo ISO/IEC 25010 y buenas prácticas de ingeniería de software.

| **ID** | **Interesado** | **Priorid ad** | **Declaración del Requisito de Calidad** | **Criterio de Aceptación** |
| --- | --- | --- | --- | --- |
| **RC-01** | Líder QA / DevOps | Muy Alta | **Mantenibilidad y Cobertura de Pruebas: **Mantener estándares elevados de prueba automatizada en la lógica de negocio. | El pipeline de Integración Continua (CI) debe certificar una cobertura mínima del 85% en líneas y ramas lógicas (Branch Coverage) mediante pruebas unitarias (JUnit o equivalente); el build fallará si el índice es \\\< 85%. |



## 7. Supuestos, Dependencias y Restricciones

| **Tipo** | **Código** | **Descripción** |
| --- | --- | --- |
| **Supuesto** | S-01 | Las clínicas disponen de acceso a internet de banda ancha estable (mínimo 10 Mbps de subida/bajada simétrica) y terminales con exploradores modernos que soportan HTML5/CSS3. |
| **Supuesto** | S-02 | Los tutores poseen dispositivos móviles compatibles con lectura de códigos QR ópticos. |
| **Restricción** | R-01 | El aislamiento de datos en la arquitectura SaaS debe impedir taxativamente cualquier filtración multi-inquilino a través de políticas en base de datos o esquemas delimitados. |
| **Dependencia** | D-01 | La emisión de notificaciones de WhatsApp se encuentra supeditada a los acuerdos de nivel de servicio y tarifas de la API oficial de Meta / WhatsApp Business Partner. |
| **Dependencia** | D-02 | El cobro en línea depende de la disponibilidad y contratos comerciales con gateways de pago autorizados (Stripe, Mercado Pago). |


## **Criterios de Aceptación**

*Especificaciones o requisitos de rendimiento, funcionalidad, etc., que deben cumplirse antes de aceptar el proyecto.*

| **Conceptos** | **Criterios de Aceptación** |
| --- | --- |
| **Administrativos** | Todos los entregables e hitos del proyecto deben contar con la aprobación y firma conforme del Sponsor y la Dirección del Proyecto.Validación de actas de aceptación de los módulos principales (HCE, Turnos, Inventario y Portal del Tutor). |
| **Comerciales** | Correcto funcionamiento del módulo de gestión de planes de suscripción para clínicas clientes.Aplicación adecuada de aranceles y parámetros de facturación configurados por tipo de servicio y clínica. |
| **Sociales** | Garantizar el cumplimiento estricto de las leyes de protección de datos personales de los tutores.Facilitar la restitución de mascotas extraviadas a través de la lectura segura de la placa QR. |
| **Otros** | Entrega completa de la documentación de usuario y manuales operativos para veterinarios, administrativos y tutores.Ejecución del plan de capacitación inicial para el personal de las clínicas piloto. |


---


## **Reglas del Negocio**

*Reglas principales que fijan los principios guías de la organización.*

- Comunicación constante con las áreas de Desarrollo, Soporte Técnico y Capacitación respecto a la ejecución y despliegue del proyecto.
- Emitir informes periódicos de performance y métricas de uso que permitan tomar acciones operativas para mejorar el desarrollo y la estabilidad del servicio.
- El proceso de desarrollo, pruebas y despliegue se rige bajo metodología ágil adaptada con integración continua y estándares de calidad definidos por la organización.


---


## **Impactos en Otras Áreas Organizacionales**

- **Cuerpo Médico Veterinario:** Requisito de adaptación al registro digital estructurado en la Historia Clínica Electrónica durante la consulta, desplazando el uso de fichas de papel.
- **Recepción y Atención al Cliente:** Cambio en el flujo de trabajo operativo al utilizar la agenda médica digital centralizada y confirmaciones automáticas vía e-mail/WhatsApp.
- **Gestión de Stock y Farmacia:** Obligatoriedad de registrar números de lote y fechas de vencimiento en el ingreso de mercadería para alimentar las alertas automáticas de inventario.
- Integración con pasarelas de pago externas (Mercado Pago, Stripe) para el cobro automatizado de suscripciones SaaS y servicios médicos.
- Integración con servicios de mensajería (WhatsApp Business API / SMTP) para el envío masivo de recordatorios y notificaciones.
- Adaptación a las normativas vigentes de los Colegios Médicos Veterinarios locales en cuanto a matriculación y prescripción digital de fármacos.


---


## **Requerimientos de Soporte y Entrenamiento**

- Capacitación inicial para el personal veterinario e interactivo en el uso de la Historia Clínica Electrónica (HCE) y emisión de recetas digitales.
- Entrenamiento al personal administrativo y de recepción para la gestión digital de turnos, cobranzas y registro de clientes.
- Elaboración y entrega de manuales de usuario digitales en PDF y videotutoriales accesibles desde el portal del usuario.


---


## **Supuestos Relativos a Requerimientos**

- Disponibilidad de los recursos humanos capacitados (desarrolladores, diseñadores UX/UI, QA) para llevar a cabo el desarrollo según la planificación.
- Las clínicas cliente disponen de conectividad estable a Internet y dispositivos (PCs/Tablets) aptos para operar la plataforma web.
- Los tutores de las mascotas cuentan con smartphones con cámara y navegador web habilitado para el escaneo de los códigos QR.


---


## **Restricciones Relativas a Requerimientos**

- El desarrollo y despliegue del MVP (Producto Mínimo Viable) debe estar finalizado antes de la fecha límite pactada para la fase de pruebas piloto.

> Copia pública: algunos detalles técnicos y de planificación interna fueron omitidos. La estructura y el contenido general del documento se conservan.

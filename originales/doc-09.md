# 🕗 TIEMPOS

Esta matriz de tiempo detallada está diseñada siguiendo el **Esquema Jerárquico** y los **Criterios Metodológicos** establecidos en el documento de Ingeniería de Software II para el proyecto **VeteriSoft**.


Dado que el documento es una **EDT (Estructura de Desglose del Trabajo)** y no un cronograma con fechas, he elaborado una planificación lógica basada en las directrices de la **Regla del 100%**, la **orientación a entregables** y el estándar de **Paquetes de Trabajo (8-80 horas)** dentro de ciclos de *Sprints*.


Esta matriz asume un modelo de desarrollo **Ágil (Scrum)** mixto para las fases de planificación.


# **VeteriSoft: Matriz de Tiempo Detallada del Proyecto (Plan Maestro)**

**Asignatura:** Ingeniería de Software II – Gestión de Proyectos (**Código ISII-006-22**) **Modelo:** Ágil / Híbrido (**Sprints de 2 semanas**) **Dedicación del Equipo:** 100% durante el Sprint (Rule 8/80)


## **Resumen del Ciclo de Vida (Hitos Principales)**

|  |  |  |  |
| --- | --- | --- | --- |
| **ID Hito** | **Nombre del Hito / Entregable Principal** | **Ubicación (Sprint / Semana)** | **Estado Final Esperado** |
| **H1** | **Cierre del Acta de Constitución y Alcance (1.1.1)** | **Sprint 1 (S2)** | Firma del Sponsor congelando alcance preliminar. |
| **H2** | **Aprobación de la ERS Formal IEEE 830 (1.2.1)** | **Sprint 2 (S4)** | Requisitos funcionales y no funcionales validados. |
| **H3** | **Congelamiento de Línea Base de Diseño (1.2.3)** | **Sprint 3 (S6)** | Modelo DER Multitenant y Prototipos Figma aprobados. |
| **H4** | **MVP Clínico (Módulo 1.3.1) Operativo** | **Sprint 5 (S10)** | HCE y Fichas Médicas funcionales en Staging. |
| **H5** | **Portal del Tutor & QR Integrado (1.4)** | **Sprint 7 (S14)** | Identificación QR y Portal Mobile operativos. |
| **H6** | **Certificación de QA Final (1.6)** | **Sprint 9 (S18)** | Pruebas de Carga/Seguridad (SLA) aprobadas. |
| **H7** | **Go-Live Definitivo (1.7.4)** | **Sprint 10 (S20)** | **Plataforma en Producción operando al 100%.** |

## **Desglose Detallado por Sprints (8-80h por Paquete de Trabajo)**

**Nota:** La columna "Duración Estimada" se refiere al esfuerzo concentrado dentro del timebox de 2 semanas del Sprint para ese entregable específico, cumpliendo el Criterio 8/80.

### **FASE 1: INICIACIÓN Y PLANIFICACIÓN (Sprints 1 - 3)**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Ubicación Temporada** | **Cód. EDT** | **Nombre del Paquete de Trabajo (Entregable)** | **Duración Estimada (h)** | **Responsable** | **Dependencias** |
| **Sprint 1 (Semana 1-2)** | **1.1.1** | **Acta de Constitución y Alcance** (Project Charter) | 16-24h | PM | — |
|  | **1.2.1** | **Especificación de Requisitos Formal** (Inicio relevamiento) | 40-60h | Analista Funcional | 1.1.1 (parcial) |
| **Hito 1** | **S1 (Fin)** | **Congelamiento de Alcance Preliminar (Sign-off)** | **—** | **Sponsor** | — |
|  |  |  |  |  |  |
| **Sprint 2 (Semana 3-4)** | **1.1.2** | **Plan de Dirección del Proyecto** (Cronograma/Costos/Riesgos Linea Base) | 24-32h | PM | 1.1.1 |
|  | **1.2.1** | **Especificación de Requisitos Formal** (Validación IEEE 830) | 40h | Analista Funcional | 1.1.1, S1 Feedback |
| **Hito 2** | **S2 (Fin)** | **Aprobación ERS (Sign-off)** | **—** | **Cuerpo Médico/Stakeholders** | — |
|  |  |  |  |  |  |
| **Sprint 3 (Semana 5-6)** | **1.2.2** | **Arquitectura del Sistema SaaS Multitenant** (Diseño C4) | 40-60h | Arquitecto | 1.2.1 |
|  | **1.2.3** | **Modelo de Datos Relacional y Esquemas Multitenant** (DER/DDL) | 32-40h | Ing. de Datos | 1.2.1, 1.2.2 |
|  | **1.2.4** | **Prototipos UX/UI y Guía de Estilos** (Figma Interactivos) | 40-80h | Diseñador UX/UI | 1.2.1 |
| **Hito 3** | **S3 (Fin)** | **Congelamiento de Línea Base de Diseño** | **—** | **Tech Lead** | — |

### **FASE 2: DESARROLLO DEL NÚCLEO (Sprints 4 - 6)**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Ubicación Temporada** | **Cód. EDT** | **Nombre del Paquete de Trabajo (Entregable)** | **Duración Estimada (h)** | **Responsable** | **Dependencias** |
| **Sprint 4 (Semana 7-8)** | **1.3.1** | **Módulo de Historia Clínica Electrónica (HCE)** (Desarrollo Backend/Frontend) | 80h | Dev Fullstack | 1.2.3, 1.2.4 |
|  | **1.5.1** | **Aislamiento Lógico y Seguridad Multitenant** (Row-Level Security) | 40h | Ing. Ciberseguridad | 1.2.2, 1.2.3 |
|  | **1.1.3** | **Gestión de Sprints y Ceremonias Ágiles** (Continuo) | 8h/Sprint | Scrum Master | — |
|  |  |  |  |  |  |
| **Sprint 5 (Semana 9-10)** | **1.3.1** | **Módulo de HCE** (Integración y Pruebas Unitarias) | 60-80h | Dev Fullstack | 1.3.1 (S4) |
|  | **1.3.3** | **Módulo de Gestión de Turnos y Agenda Médica** (Backend core) | 40h | Dev Fullstack | 1.2.3 |
| **Hito 4** | **S5 (Fin)** | **MVP Clínico Operativo (Staging)** | **—** | **PM / QA** | — |
|  |  |  |  |  |  |
| **Sprint 6 (Semana 11-12)** | **1.3.2** | **Módulo de Prescripción y Receta Digital con Firma** | 60-80h | Dev Backend | 1.3.1 |
|  | **1.3.3** | **Módulo de Gestión de Turnos** (Integración Frontend Real-time) | 40-60h | Dev Fullstack | 1.3.3 (S5) |

### **FASE 3: COMPLEMENTOS, PORTAL Y QA (Sprints 7 - 9)**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Ubicación Temporada** | **Cód. EDT** | **Nombre del Paquete de Trabajo (Entregable)** | **Duración Estimada (h)** | **Responsable** | **Dependencias** |
| **Sprint 7 (Semana 13-14)** | **1.4.1** | **Portal Web / Móvil del Tutor** (Autogestión Turnos) | 80h | Dev Frontend | 1.3.3 |
|  | **1.4.2** | **Módulo de Perfil Público e Identificación por Placa QR** | 32-40h | Dev Fullstack | 1.2.3, 1.3.1 |
| **Hito 5** | **S7 (Fin)** | **Portal Tutor y Sistema QR Integrado** | **—** | **PM / QA** | — |
|  |  |  |  |  |  |
| **Sprint 8 (Semana 15-16)** | **1.3.4** | **Módulo de Facturación y Control de Insumos** | 60-80h | Dev Backend | 1.3.1, 1.3.3 |
|  | **1.3.5** | **Módulo de Control de Inventario y Alertas** | 40-60h | Dev Fullstack | 1.3.4 |
|  | **1.5.3** | **Integración de Pasarelas de Pago y Mensajería** | 40-60h | Dev Backend | 1.3.4 |
|  |  |  |  |  |  |
| **Sprint 9 (Semana 17-18)** | **1.6.2** | **Pruebas de Rendimiento, Carga y Concurrencia** (SLA P95) | 40-60h | Especialista Performance | 1.3.1 a 1.3.5 |
|  | **1.6.3** | **Pruebas de Seguridad, Penetración y Aislamiento Tenant** (Pentest) | 40h | Auditor Seguridad | 1.5.1 |
|  | **1.6.4** | **Pruebas de Aceptación de Usuario** (UAT Clínicas Piloto) | 60-80h | Líder QA / Usuarios | 1.3.1 a 1.3.5 |
| **Hito 6** | **S9 (Fin)** | **Certificación de QA Final y Criterios de SLA** | **—** | **Líder QA** | — |

### **FASE 4: TRANSICIÓN Y DESPLIEGUE (Sprint 10)**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Ubicación Temporada** | **Cód. EDT** | **Nombre del Paquete de Trabajo (Entregable)** | **Duración Estimada (h)** | **Responsable** | **Dependencias** |
| **Sprint 10 (Semana 19-20)** | **1.7.1** | **Infraestructura Cloud y Pipeline CI/CD** (Producción) | 40h | DevOps Engineer | 1.2.2 |
|  | **1.7.2** | **Utilitarios de Migración de Datos Legados** | 32-40h | Ing. de Datos | 1.2.3, Hito 6 |
|  | **1.7.3** | **Material de Capacitación y Manuales Operativos** | 40h | Especialista Capacitación | 1.2.4 |
|  | **1.7.4** | **Marcha Blanca y Salida a Producción (Go-Live)** (Puesta en marcha) | 80h (S20 completo) | PM / Dev / DevOps | Hito 6, 1.7.1, 1.7.2 |
| **Hito Final** | **S20 (Fin)** | **PLATAFORMA INTEGRAL VETERISOFT GO-LIVE** | **—** | **Comité Dirección** | — |
|  |  |  |  |  |  |
| **Post-Proyecto** | **1.1.4** | **Cierre Contractual y Transferencia** | 16-24h | PM | 1.7.4 |

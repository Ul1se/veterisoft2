# 📐 SCOPE STATMENT

| **CONTROL DE VERSIONES** |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Versión | Hecha por | Revisada por | Aprobada por | Fecha | Motivo |
| 1.1 | Director del proyecto | SP | SP | 10/09/2026 | Cambios |

| **Nombre del Proyecto                                                        Siglas del Proyecto** |  |
| --- | --- |
| Desarrollo de Verisoft | DEVESO |

| **Descripción del Alcance del Producto** |  |
| --- | --- |
| Requerimientos: Condiciones o capacidades que debe poseer o satisfacer el producto para cumplir con las necesidades del cliente | Características: Propiedades lógicas y funcionales que son distintivas del producto y describen su singularidad. |
| 1. El Sistema debe permitir el acceso y la visualización de datos de manera segmentada mediante roles estructurados (Director Médico, Veterinario, Recepcionista y Dueño) | 1. Aplicaciones web responsiva programada bajo una arquitectura basada en una backend robusto (Java y Spring Boot) interactuando con una base de datos relacional (SQL) y un frontend dinámico (JavaScript/TypeScript) |
| 1. El Sistema de inventario debe descontar en tiempo real los insumos médicos utilizados en consultorio y los productos comerciales vendidos. | 1. Módulo diferencial de emergencia con generación automática de códigos QR únicos vinculados al perfil digital del paciente (permitiendo, por ejemplo, escanear la chapita de un perro y reportarlo como perdido sin exponer el teléfono de su dueño) |
| 1. La plataforma debe emitir notificaciones automatizadas de calendario para alertar sobre el vencimiento de vacunas y desparasitaciones periódicas. | 1. Estructura de software escalable diseñada para comercializarse bajo un modelo SaaS (Software as a Service) con planes de accesos progresivos (Básicos, Profesional, Premium). |
| 1. El modulo de agendamiento debe bloquear automáticamente la superposición de turnos para un mismo profesional. | 1. Interfaz gráfica orientada a dispositivos móviles para el portal de autogestión de los clientes. |
| 1. El Sistema debe garantizar un tiempo de respuesta menor a 2 segundos para todas las consultas al historial clínico. |  |

| **Criterios de Aceptación del Producto:** Especificaciones o requerimientos de rendimiento, funcionalidad, etc., que deben cumplirse antes que se acepte el producto del Proyecto. |  |
| --- | --- |
| Conceptos | Criterios de Aceptación |
| 1. Técnicos | La plataforma web debe ser completamente responsiva, garantizando su operabilidad tanto en los monitores de la recepción de la clínica como en los celulares de los clientes.Las consultas a la base de datos relacional para recuperar el historial de un paciente deben resolverse en menos de 2 segundos. El Sistema debe gestionar la concurrencia para evitar la superposición de turnos médicos en un mismo horario. |
| 1. De Calidad | El flujo de negocio central (alta de paciente, reserve de turno, registro de atención y descuento de inventario) debe completarse sin arrojar errores o interrupciones de servicio. Seguridad de accesos: los permisos deben restringir estrictamente las vistas según rol (Administrador, Veterinario, Recepción, Dueño). |
| 1. Administrativos | Todos los entregables finales (documentación UML, código Fuente y prototipo desplegado) deben ser aprobados y firmados por el Director Médico de la clínica antes del pase a producción. |
| 1. Comerciales | La arquitectura del software debe soportar la habilitación o bloqueo de módulos funcionales dependiendo del nivel de suscripción SaaS contratado (Plan Básico, Profesional, Premium). |
| 1. Sociales | El Sistema de alertas por mascotas perdidas debe garantizar por si un perro se extravía quien escanee su código QR pueda notificar al dueño a través de la plataforma sin que el telefono o domicilio personal queden expuestos públicamente. |

| **Entregables del Proyecto:** Productos Entregables intermedios y finales que se generarán en cada fase del proyecto |  |
| --- | --- |
| Fase del Proyecto | Productos Entregables |
| 1.0: Gestión del Proyecto | Acta de Constitución, Plan de Proyecto y Registro de Stakeholders debidamente aprobados. |
| 2.0: Requerimientos y Diseño | Documento de Especificación de Requisitos de Software (ERS), diagramas UML (casos de uso, secuencia, clases) y Modelo Entidad-Relación aprobados por el cliente. |
| 3.0: Desarrollo de Software | Repositorios de código Fuente del backend (API REST en Spring Boot) código frontend (JavaScript/TypeScript) y scripts SQL de la base de datos. |
| 4.0: Pruebas e Integración | Informes de pruebas de QA (Quality Assurance) y corrección de error (bugfixing), con el prototipo funcional desplegado en un entorno de pruebas. |
| 5.0: Cierre y Despliegue | Producto Mínimo Viable (MPV) desplegado en producción, manual de usuario para el personal y Acta de Aceptación firmada. |

| **Exclusiones del Proyecto: **ENTREGABLES, PROCESOS, ÁREAS, PROCEDIMIENTOS, CARÁCTERÍSTICAS, REQUERIMIENTOS, FUNCIONES, ESPECIALIDADES, FASES, ETAPAS, ESPACIOS FÍSICOS, VIRTUALES, REGIONES, ETC., QUE SON EXCLUSIONES CONOCIDAS Y NO SERÁN ABORDADAS POR EL PROYECTO, Y QUE POR LO TANTO DEBEN ESTAR CLARAMENTE ESTABLECIDAS PARA EVITAR INCORRECTAS INTERPRETACIONES ENTRE LOS STAKEHOLDERS DEL PROYECTO. |
| --- |
| 1. Provisión, instalación o mantenimiento de hardware físco en la clínica (computadoras, servidores locales, impresoras, tickeadoras o lectores de código de barras. |
| 1. Integración de pagos reales mediante pasarelas (Mercado Pago, Modo, BNA+, etc) o vinculación directa con el sistema de facturación electronica de AFIP. |
| 1. Desarrollo de aplicaciones móviles nativas instalables para sistemas operativos Android (Google Play) o iOS (App Store). |
| 1. Fabricación física, impression o distribución de las chapas identificatorias para collar de las mascotas que contienen el código QR. |

| **Restricciones del Proyecto:** FACTORES QUE LIMITAN EL RENDIMIENTO DEL PROYECTO, EL RENDIMIENTO DE UN PROCESO DEL PROYECTO, O LAS OPCIONES DE PLANIFICACIÓN DEL PROYECTO. PUEDEN APLICAR A LOS OBJETIVOS DEL PROYECTO O A LOS RECURSOS QUE SE EMPLEA EN EL PROYECTO. |  |
| --- | --- |
| Internos a la organización | Ambientales o Externos a la organización |
| El costo del alojamiento web (hosting) y base de datos durante la fase de desarrollo no debe exceeder la capa gratuita(free tier) de los proveedores cloud. | Interrupciones prolongadas en los servicios de infraestructura en la nube (AWS, Google Cloud, Azure) que retrasen el desarrollo o despliegue. |
| El desarrollo y estabilización del Producto Minimo Viable (MVP) debe estar finalizado antes de la fecha limite estipulada contractualmente para el lanzamiento en la temporada de alta demanda (verano 26/27). | Cambios repentinos en las normativas fiscales o de privacidad de datos personalesque fuercen una reestructuración de la base de datos. |

| **Supuestos del Proyecto:** FACTORES QUE PARA PROPÓSITOS DE LA PLANIFICACIÓN DEL PROYECTO SE CONSIDERAN VERDADEROS, REALES O CIERTOS. |  |
| --- | --- |
| Internos a la organización | Ambientales o externos a la organización |
| Disponibilidad plena de los recursos humanos de la clínica (recepcionistas, veterinarias, director) para la toma de requerimientos, entrevistas y pruebas de aceptación (UAT) en los horarios estipulados. | La clínica veterinaria cuenta con una conexión a internet estable y continua en sus instalaciones, indispensable para operar un Sistema basado en la nube. |
| El personal administrativa posee conocimientos básicos de navegación web e interfaces digitales para operar el sistema sin una curva de aprendizaje crítica. | Los dueños de las mascotas poseen smartphones con acceso a internet y capacidad para escanear los códigos QR de las mascotas perdidas o accede a su portal web. |

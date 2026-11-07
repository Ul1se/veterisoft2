# 🗺️ PLANES DEL PROYECTO

# 🐾 Proyecto: Sistema Integral para Veterinarias

> Ejemplos clínicos y de agenda ficticios, anonimizados y creados solo para ilustrar el flujo.

La idea es desarrollar una plataforma web que conecte a dueños de mascotas, veterinarios y personal administrativo. 

**Problema a solucionar:** Muchas veterinarias manejan turnos, historias clínicas, vacunas, tratamientos y recordatorios de manera separada, fragmentada en papel o WhatsApp. La plataforma centralizaría toda la gestión.

---

## 👤 Portal para el Dueño de la Mascota

El usuario tendrá una cuenta donde podrá registrar una o varias mascotas (Ej: Persona tutora A -\> Mascota de ejemplo A \[Perro\], Mascota de ejemplo B \[Gato\]).

Al entrar al perfil de una mascota (ej. Mascota de ejemplo A), podrá visualizar:

- 🐶 Datos de la mascota
- 🎂 Fecha de nacimiento
- ⚖️ Peso
- 💉 Vacunas
- 💊 Tratamientos
- 🩺 Historial de consultas
- 📅 Próximos turnos
- 📄 Estudios y documentación
- 👨‍⚕️ Veterinario habitual

**Flujo para sacar un turno:**

1. **Especialidad:** Clínica veterinaria
2. **Mascota:** Mascota de ejemplo A
3. **Veterinario:** Profesional veterinario
4. **Fecha y Hora:** 28/08 - 16:30 hrs  
*(Confirmación de turno)*

---

## 🩺 Panel para el Veterinario

El profesional de la salud contará con una agenda diaria centralizada.

### Turnos de hoy

| Hora | Mascota | Motivo | Estado |
| --- | --- | --- | --- |
| 09:00 | Mascota de ejemplo A | Control | Pendiente |
| 09:30 | Mascota de ejemplo B | Vacunación | Pendiente |
| 10:00 | Mascota de ejemplo C | Consulta | Atendido |

**Historial Clínico Accesible:**  
Al ingresar al paciente (Mascota de ejemplo A), el veterinario visualiza el historial cronológico (Ej: historial clínico ficticio, sin datos identificables). 

**Registro post-consulta:**

- Motivo de consulta
- Peso
- Observaciones y Diagnóstico
- Tratamiento indicado y Medicación
- Próximo control

---

## 💉 Función Destacada: Vacunas y Recordatorios

El sistema detecta automáticamente próximos vencimientos y emite notificaciones preventivas.

> 🔔 **Recordatorio:** Hay una vacuna próxima a vencer para la mascota seleccionada. \[Solicitar Turno\]

**Beneficio:** Genera valor tanto para el dueño como para la rentabilidad de la clínica, permitiendo configurar campañas automáticas (Ej: *"Mascota de ejemplo A tiene pendiente su vacunación anual"*).

---

## 🚨 Módulo Social: Mascotas Perdidas

Diferenciador clave del proyecto. Cada mascota registrada cuenta con un perfil digital accesible vía **Código QR**.

- **Si la mascota se pierde:** El dueño recibe/compra una chapita con el QR. Quien encuentre a la mascota escanea el código.
- **Pantalla de hallazgo:** "Esta mascota tiene un propietario registrado". Permite enviar un aviso directo al dueño sin exponer públicamente su teléfono o domicilio.
- **Alerta Zonal:** El dueño puede activar el estado **"🔴 MASCOTA PERDIDA"** para que aparezca en un mapa público de mascotas perdidas de la zona.

---

## 🏥 Panel Administrativo (Clínica)

Gestión integral de los recursos e información del establecimiento.

- **Mascotas:** Alta, baja, modificación e historial.
- **Clientes:** Datos personales, mascotas asociadas, historial.
- **Veterinarios:** Horarios de atención, especialidades, agenda asignada.
- **Turnos:** Creación, cancelación, reprogramación y seguimiento de estados.
- **Vacunas & Tratamientos:** Tipos, fechas, vencimientos, indicaciones médicas y duración.

---

## 💰 Módulo Comercial y de Inventario

Gestión de ventas y stock de productos comerciales (alimentos, pipetas, collares, medicamentos veterinarios, accesorios).

- **Control de Stock en tiempo real:** Descuento automático al registrar una venta (`Stock - 1`).
- **Alertas preventivas:** `⚠️ Stock bajo de alimento X (5 unidades restantes)`.

---

## 🐕 Gestión de Servicios Adicionales

El agendamiento no se limita a consultas médicas. Se pueden ofrecer y calendarizar múltiples servicios de forma concurrente:

- Consulta médica y Control
- Vacunación y Desparasitación
- Peluquería y Baño (Ej: Mascota de ejemplo A -\> viernes 17:00)
- Cirugía y Estudios complementarios

---

## 📊 Dashboard de Gestión (Administrador)

Panel de métricas en tiempo real para la toma de decisiones:

- **Métricas Diarias:** 842 Mascotas registradas | 31 Turnos del día | 24 Atendidos | 3 Cancelaciones | 17 Vacunas próximas | 5 Productos con stock bajo | Ingresos: $XXX
- **Reportes Gráficos:** Cantidad de consultas mensuales, servicios más solicitados, tasa de mascotas nuevas, veterinarios con mayor volumen de atención, productos más vendidos.

---

## 👥 Resumen de Roles y Permisos

Excelente caso de uso para Ingeniería de Software II mediante segmentación estricta de accesos funcionales:

1. **🧑 Dueño:** Autogestiona sus mascotas y turnos.
2. **🩺 Veterinario:** Gestiona consultas e historial clínico de los pacientes.
3. **🧑‍💼 Recepcionista:** Administra la grilla de turnos y clientes.
4. **👨‍💻 Administrador:** Acceso total al sistema, configuración y métricas.

---

## 💡 Modelo de Negocio (SaaS: Software as a Service)

Plataforma comercializable "VeteriSoft" bajo pago de suscripción mensual. La clínica administra su propio panel y ofrece el portal a sus clientes.

| 🥉 Plan Básico | 🥈 Plan Profesional | 🥇 Plan Premium |
| --- | --- | --- |
| Gestión de Clientes | *Todo lo del Plan Básico* | *Todo lo del Plan Profesional* |
| Registro de Mascotas | Módulo de Historial Clínico | Gestión de Peluquería |
| Agenda de Turnos | Control de Vacunas | Módulo de Facturación |
|  | Recordatorios Automatizados | Estadísticas y Dashboard |
|  | Control de Stock | Generación de QR (Mascotas) |
|  |  | Notificaciones Avanzadas |

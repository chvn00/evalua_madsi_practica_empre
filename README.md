# Rúbrica de Evaluación — Práctica Empresarial MADSI

Formulario de evaluación para la opción de grado **Práctica Empresarial** de la Maestría en Análisis de Datos y Sistemas Inteligentes (MADSI) — Universidad Santo Tomás, Bucaramanga.

## Descripción

Aplicación web estática servida con Node.js/Express, desplegada en Railway. Permite a los tutores (académico y empresarial) diligenciar la rúbrica de evaluación, generar un PDF firmado y enviar la calificación al sistema de seguimiento MADSI.

## Criterios de evaluación

| # | Criterio | Peso |
|---|---|---|
| 1 | Cumplimiento de actividades del Plan de Trabajo | 30% |
| 2 | Logro de los objetivos propuestos | 25% |
| 3 | Calidad y coherencia del Informe Final | 20% |
| 4 | Resultados y aportes evidenciados en la empresa | 15% |
| 5 | Socialización pública | 10% |

**Concepto:** Aprobado (≥ 3.0) / No Aprobado (< 3.0)

## Uso

El enlace se envía a cada tutor con parámetros de proyecto y evaluador:

```
https://<dominio>.up.railway.app/rubrica_practica_empresarial.html?proyecto=ID&evaluador=1
```

- `proyecto`: ID del proyecto en el sistema de seguimiento
- `evaluador`: `1` = Tutor Académico / `2` = Tutor Empresarial

## Stack

- HTML + CSS + JavaScript (sin frameworks)
- [jsPDF](https://github.com/parallax/jsPDF) para generación de PDF en cliente
- Node.js + Express para servidor estático
- Railway para despliegue
- Backend: [madsi-seguimiento](https://github.com/chvn00/madsi-seguimiento)

## Archivos

```
rubrica_practica_empresarial.html   # Formulario principal
server.js                           # Servidor Express
package.json
logo_usta.png                       # Logo institucional
```

# Inglés: camino al parcial

App de estudio para el parcial de inglés (escrito y oral) del programa ADSO del SENA. Está enfocada en la guía RAP 5: modales, conectores y phrasal verbs.

## Cómo usarla

Abre `camino-parcial.html` con doble clic en Chrome o Edge. No necesita instalación ni internet, salvo el micrófono, porque el reconocimiento de voz del navegador funciona en línea.

## Qué trae

- Dos guías (RAP 5 y RAP 4) organizadas por niveles, con explicación corta, ejemplos fáciles y "Así sí · Así no" antes de cada nivel.
- Simulacros con tiempo, lecturas de comprensión y práctica oral con micrófono.
- **Mejorar**: repasa solo las preguntas que fallaste.
- **Verbos**: las dos hojas de verbos con buscador, pistas para saber qué forma usar, hacks por grupos y práctica.
- **Trucos** y **Clave de respuestas** de las guías impresas.

## Estructura

| Ruta | Qué es |
|---|---|
| `camino-parcial.html` | La app lista para abrir. Se genera, no se edita a mano. |
| `fuente/` | Archivos con los que se arma la app. |
| `fuente/game-template.html` | Plantilla con la interfaz y la lógica. |
| `fuente/*.js`, `fuente/final/*.json` | Contenido: ejercicios, explicaciones, trucos, lecturas y verbos. |
| `repaso-ingles.html` | Página de repaso anterior. |
| Guías `.docx` e imágenes | Material original del curso: guías RAP 4 y RAP 5 y las hojas de verbos. |

## Cómo reconstruir la app

Después de cambiar algo en `fuente/`:

```bash
python fuente/build_game.py
```

El script sobrescribe `camino-parcial.html` en la raíz.

**HANDOVER - Proyecto CodeChallenges_Enero-Abril**

**Metadata**:
- Modelo que firma el documento: GPT-5 mini (Copilot)
- Fecha y hora de creación: 08-02-2026 19:40:54 CST
- Commit actual (short): 2328836
- Tags asociados al commit: snapshot-20260208-185941, snapshot-20260208-194037
- Estado actual del proyecto: funcional (no hay cambios sin commitear)
- Siguiente modelo recomendado: GPT-5 mini

**Resumen de arquitectura**:
- Frontend: Varias aplicaciones React (carpetas dentro de `02.CodeChallenge/`), estilos en CSS vanilla.
- Backend: No se detectó un backend monolítico en la raíz; dependencias y servidores si existen están por carpeta de sprint.
- Estructura: Proyectos organizados por sprint/semana con `package.json` por aplicación.

**Funcionalidades implementadas vs pendientes**:
- Implementadas: Estructura por sprints, ejemplos de apps React, assets en `public/` por proyecto.
- Pendientes: Centralizar herramientas de Dev (lint, husky, CI) en la raíz; pruebas automatizadas uniformes;
  revisar y actualizar dependencias a versiones seguras en cada `package.json`.

**Reglas críticas**:
- Idioma: 100% ESPAÑOL en documentación y mensajes de commit.
- Estilos: CSS vanilla obligatorio según protocolo.
- Tags: Máximo 4 tags activos (implementado: limpieza automática de tags más antiguos).

**Rutas y puntos importantes**:
- Frontend ejemplos: `02.CodeChallenge/sprint-2/semana-3/src` y similares por sprint.
- Documentación principal: `README.md` en raíz y `02.CodeChallenge/*/README.md` por sprint.

**Debugging tips y recordatorios**:
- Para verificar estado git: `git status` desde la raíz.
- Para reinstalar deps por proyecto: entrar en la carpeta correspondiente y ejecutar `npm install`.
- Para ejecutar la app de una semana: `npm start` dentro de su carpeta `sprint-x/semana-y`.

**Acciones realizadas ahora**:
- Commit: se verificó que no había cambios sin commitear.
- Tag: creado `snapshot-20260208-194037` y limpiado tag más antiguo si había más de 4.
- Push: se empujaron `main` y el tag correspondiente al remoto.

**Firma**:
- Modelo: GPT-5 mini
- Timestamp firma: 08-02-2026 19:40:54 CST
- Mensaje al siguiente modelo: Lee este HANDOVER completo antes de modificar código; respeta reglas de estilo y tags.

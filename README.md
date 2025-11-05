
## Uso del I18nService

Este proyecto incluye un servicio mínimo de internacionalización ubicado en `src/app/services/i18n.service.ts`.

Resumen rápido

- `getLang()` — devuelve el código del idioma actual (p. ej. `en`, `es`).
- `setLang(lang: string)` — cambia el idioma activo y lo persiste en `localStorage` (si está disponible).
- `langChanges` — Observable (BehaviorSubject) que emite cambios de idioma. Útil para reaccionar al cambio de idioma.
- `t(key: string)` — traduce una clave. Soporta claves con formato punto (dotted keys) como `header.nav.love`.

Estructura de traducciones

Las traducciones están organizadas como un árbol descriptivo. Ejemplo (simplificado):

```ts
translations = {
	en: {
		header: {
			nav: { love: 'Love', design: 'Design', art: 'Art', creations: 'Creations', contact: 'Contact' }
		}
	},
	es: { /* equivalente en español */ }
}
```

Por eso, para obtener el texto del elemento "love" se usa la clave `header.nav.love`.

Comportamiento y fallback

- `t(key)` intenta resolver la clave con puntos en el idioma actual.
- Si no existe, intenta una clave top-level (compatibilidad con formato antiguo).
- Si sigue sin encontrarse, intenta las mismas búsquedas en el idioma por defecto (`en`).
- Finalmente, si no se encuentra nada, devuelve la clave tal cual.

Ejemplos de uso

En un componente TypeScript:

```ts
import { Component } from '@angular/core';
import { I18nService } from './services/i18n.service';

@Component({ /* ... */ })
export class SomeComponent {
	constructor(private i18n: I18nService) {
		console.log(this.i18n.t('header.nav.love')); // 'Love' o 'Amor' según idioma
		this.i18n.langChanges.subscribe(lang => console.log('Idioma cambiado a', lang));
	}
}
```

En plantillas (templates) de Angular, puedes llamar al método `t()` desde el componente que expone el servicio:

```html
<!-- header.component.html -->
<a>{{ t('header.nav.love') }}</a>
```

Nota: Si prefieres usar el servicio directamente en la plantilla sin envolverlo en el componente, considera exponer sus valores mediante propiedades/observables en el componente o convertir el componente en standalone y usar `inject()`.

Cómo añadir o extender traducciones

1. Abre `src/app/services/i18n.service.ts`.
2. Agrega la nueva clave dentro del árbol correspondiente (por idioma) siguiendo la estructura existente, por ejemplo:

```ts
translations.en.header.nav.newKey = 'New label';
```

3. Usa `t('header.nav.newKey')` en tus componentes.

Mejoras sugeridas

- Mover las traducciones a archivos JSON separados por idioma para facilitar la edición y carga dinámica.
- Proveer un pipe `translate` para usar directamente en templates: `{{ 'header.nav.love' | translate }}`.
- Añadir tipado a la estructura de traducciones para autocompletado.


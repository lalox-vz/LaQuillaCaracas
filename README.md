# La Quilla de Caracas - Propuesta Digital IronLith

## 📋 Descripción del Proyecto

**La Quilla de Caracas** es una propuesta digital interactiva desarrollada por **IronLith** para presentar un proyecto de transformación digital de un centro comercial histórico ubicado en Chacao, Venezuela. La propuesta utiliza una narrativa de "construcción digital" que conecta la historia del lugar (desde 1937) con una visión de futuro tecnológico.

### Propósito
Presentar una propuesta profesional de 3 fases para digitalizar "La Quilla", un centro comercial con raíces históricas, mediante:
- **Fase 1**: Construcción de infraestructura digital base (mapa interactivo + identidad de marca)
- **Fase 2**: Monetización a través de Wi-Fi y publicidad digital
- **Fase 3**: Creación de una base de datos de clientes para fidelización

---

## 🎨 Identidad Visual y Diseño

### Paleta de Colores (IronLith Brand)
```css
--iron-black: #0a0a0a       /* Fondo principal */
--iron-stone: #1a1a1a       /* Fondo secundario */
--iron-gold: #C5A059        /* Acento dorado (marca distintiva) */
```

### Principios de Diseño
1. **Premium Dark Mode**: Todo el sitio usa un esquema oscuro profesional
2. **Precisión en Tipografía**: Uso estratégico de espaciado y jerarquía
3. **Acentos Dorados Selectivos**: El color dorado se usa solo para información crítica
4. **Animaciones Sutiles**: Framer Motion para transiciones suaves
5. **Responsive First**: Mobile-friendly en todas las secciones

### Componente de Colores
- Gold text: `text-iron-gold`
- Gradients: `text-gradient` (definido en `globals.css`)
- Borders: `border-iron-gold`, `border-iron-stone`

---

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico
- **Framework**: Next.js 14.2.35 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Deployment**: Vercel

### Estructura de Carpetas
```
Propuesta2.0/
├── app/
│   ├── components/          # Componentes React reutilizables
│   │   ├── HeroSection.tsx         # Hero principal con "El Manifiesto"
│   │   ├── HeritageSection.tsx     # Historia "1937: El ADN de esta Esquina"
│   │   ├── ExecutionTimeline.tsx   # Timeline de 4 semanas
│   │   ├── PhilosophySection.tsx   # Filosofía de Precisión
│   │   ├── MasterPlan.tsx          # Visión de 3 fases
│   │   ├── PricingTable.tsx        # Tabla de precios interactiva
│   │   ├── TermsSection.tsx        # Condiciones de ejecución
│   │   ├── ProtectionGate.tsx      # Password gate (1937)
│   │   └── Header.tsx              # Navegación superior
│   ├── globals.css          # Estilos globales + Tailwind
│   ├── layout.tsx           # Layout raíz (metadata, fonts)
│   └── page.tsx             # Página principal (orquesta componentes)
├── public/                  # Assets estáticos (imágenes, logos)
├── .eslintrc.json          # Configuración ESLint
├── tailwind.config.ts      # Configuración Tailwind (colores custom)
└── package.json            # Dependencias
```

---

## 📖 Flujo Narrativo de la Propuesta

La propuesta sigue un journey emocional y lógico:

### 1. **ProtectionGate** (Password: `1937`)
- Primera interacción del usuario
- Establece el tono de exclusividad y herencia histórica

### 2. **HeroSection** - "El Manifiesto"
- **Copy**: "No estamos vendiendo un mapa, estamos construyendo un activo digital"
- Badge: "Arquitectura de Élite"
- Marca el tono profesional y premium

### 3. **HeritageSection** - "1937: El ADN de esta Esquina"
- **Narrativa histórica**: Conexión emocional con el pasado alemán del lugar
- **Imagen**: Foto histórica del lugar
- **Cierre con quote dorado**: "Queremos que esta esquina siga siendo un punto de referencia por otros 90 años"

### 4. **ExecutionTimeline** - "El Proceso de 4 Semanas"
Cada semana tiene:
- Título (ej: "Arquitectura & Cimientos")
- Descripción de entregables
- Icono distintivo
- Color de acento

### 5. **PhilosophySection** - "Filosofía de Precisión"
- **Mensaje clave**: "Las grandes obras no se improvisan"
- **Golden highlights**: Solo en "Fase 1" e "IronLith"
- Badge: "Arquitectura de Élite"

### 6. **MasterPlan** - "Visión de 3 Fases"
- **Fase 1 (HOY)**: Cimientos & Marca
- **Fase 2 (PRÓXIMA)**: Wi-Fi & Publicidad [🔒 Requiere Fase 1]
- **Fase 3 (FUTURO)**: Data & Fidelización [🔒 Requiere Fase 2]

### 7. **PricingTable** - "Inversión Fase 1" (INTERACTIVA)
Tres opciones:
- **ESSENTIAL** ($1,950): Infraestructura base
- **PRO** ($2,850): Con modernización de logo [RECOMENDADO]
- **FOUNDERS' LEGACY** ($5,000): Visión completa con galería histórica

**Feature clave**: Selección interactiva que genera WhatsApp URL personalizado

### 8. **TermsSection** - "Condiciones de Ejecución"
- **Esquema de Pago**: 40-20-40
- **Validez**: 7 días hábiles
- **Garantía**: 30 días post-lanzamiento
- **CTA Final**: "ACTIVAR FASE 1 - INICIAR OBRA"

---

## 🔧 Componentes Técnicos Clave

### PricingTable.tsx - Sistema de Selección Dinámica

**Estado**:
```typescript
const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
```

**Visual Feedback**:
- Card seleccionada: `ring-2 ring-iron-gold scale-105`
- Cards no seleccionadas: `opacity-50 grayscale`
- Checkmark dorado en esquina superior derecha

**Sticky Action Bar**:
- Aparece solo cuando hay selección
- Muestra plan seleccionado + precio
- Botón dinámico que genera URL de WhatsApp personalizada

**WhatsApp URL Generator**:
```typescript
function getWhatsAppUrl(planId: PlanId): string {
    const baseUrl = "https://wa.me/584241234567?text=";
    const messages = {
        ESSENTIAL: "Hola, vengo de la propuesta digital. He seleccionado...",
        PRO: "Hola, vengo de la propuesta digital. He decidido invertir...",
        ELITE: "Hola, vengo de la propuesta digital. Vamos con la visión completa..."
    };
    return baseUrl + encodeURIComponent(messages[planId]);
}
```

### ProtectionGate.tsx - Password Protection

**Funcionalidad**:
- Password: `1937` (año histórico)
- Almacena `authenticated=true` en `localStorage`
- Bloquea acceso a toda la propuesta hasta autenticación
- Diseño premium con animación de entrada

---

## 🎯 Lineamientos de Contenido

### Uso del Color Dorado (text-iron-gold)
**Regla de oro**: Solo aplicar a palabras CRÍTICAS. No saturar.

**Ejemplos correctos**:
- ✅ Nombres de fases: "Fase 1", "IronLith"
- ✅ Precios: "$2,850 USD"
- ✅ Badges: "RECOMENDADO", "ARQUITECTURA DE ÉLITE"
- ✅ Conceptos clave en quotes: "La calidad no es negociable"

**Ejemplos incorrectos**:
- ❌ Múltiples palabras en un mismo párrafo
- ❌ Texto decorativo sin valor estratégico

### Tone of Voice
- **Profesional pero humano**: No robótico, evitar jerga técnica innecesaria
- **Construcción como metáfora**: "Cimientos", "Arquitectura", "Obra"
- **Urgencia sutil**: "7 días hábiles", "Reserva exclusiva"
- **Herencia y legado**: Referencias a 1937, tradición alemana de precisión

---

## 🚀 Comandos de Desarrollo

### Desarrollo Local
```bash
npm run dev
# Abre http://localhost:3000
```

### Build de Producción
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

### Deploy a Vercel
```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin main
# Vercel auto-deploya desde main
```

---

## ⚙️ Configuraciones Importantes

### ESLint (.eslintrc.json)
```json
{
    "extends": "next/core-web-vitals",
    "rules": {
        "react/no-unescaped-entities": "off"  // Permite comillas naturales en español
    }
}
```

### Tailwind (tailwind.config.ts)
Colores custom definidos:
```typescript
colors: {
    'iron-black': '#0a0a0a',
    'iron-stone': '#1a1a1a',
    'iron-gold': '#C5A059',
}
```

### VS Code Settings (.vscode/settings.json)
```json
{
    "css.lint.unknownAtRules": "ignore"  // Ignora warnings de @tailwind
}
```

---

## 📝 Protocolo de Edición de Componentes

### Antes de editar:
1. **Lee el componente completo** con `view_file` o `view_file_outline`
2. **Identifica el contexto**: ¿Qué sección narrativa representa?
3. **Revisa el diseño actual**: No romper la estética establecida

### Al editar texto:
1. **Mantén la estructura HTML/JSX intacta**
2. **Preserva las clases de Tailwind existentes**
3. **Usa `&quot;` o escapa comillas solo si ESLint lo requiere** (actualmente deshabilitado)
4. **Aplica color dorado solo a términos críticos**

### Al editar diseño:
1. **Usa las variables de color de Tailwind** (`text-iron-gold`, `bg-iron-black`)
2. **Mantén consistency en spacing** (px-6, py-24, gap-8, etc.)
3. **Preserva animaciones de Framer Motion**
4. **Test responsive**: Verifica mobile (< 768px)

---

## 🐛 Troubleshooting

### Build falla con "react/no-unescaped-entities"
**Solución**: Ya está configurado en `.eslintrc.json` para ignorar esta regla.

### Imágenes no cargan
**Solución**: Verifica que estén en `/public` y usa rutas absolutas: `/images/ejemplo.jpg`

### Animaciones no funcionan
**Solución**: Verifica que `framer-motion` esté instalado y que el componente tenga `"use client"` al inicio.

### Sticky Action Bar no aparece
**Solución**: Verifica que el estado `selectedPlan` no sea `null` y que `AnimatePresence` esté importado.

---

## 📞 Contacto e Información de Proyecto

- **Cliente**: La Quilla de Caracas
- **Desarrollador**: IronLith
- **Password de Acceso**: `1937`
- **WhatsApp de Contacto**: 584241234567 (placeholder - actualizar con número real)
- **Repository**: https://github.com/lalox-vz/LaQuillaCaracas
- **Deploy URL**: [Vercel auto-genera desde main branch]

---

## 📚 Referencias y Recursos

### Documentación Técnica
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

### Design Inspiration
- Narrativa de "construcción digital" como metáfora central
- Herencia alemana de 1937 = precisión y durabilidad
- Dark mode premium = seriedad profesional
- Gold accents = exclusividad y valor

---

## 🎯 Objetivos del Proyecto (Conversión)

### Objetivo Primario
Que el cliente seleccione un plan y haga clic en el botón de WhatsApp.

### Objetivos Secundarios
1. Entender la visión de 3 fases
2. Conectar emocionalmente con la historia de 1937
3. Percibir a IronLith como expertos en "arquitectura digital"
4. Sentir urgencia (7 días de validez)

### KPIs de Éxito
- Tasa de entrada con password correcto
- Tiempo de permanencia en la página
- Clicks en PricingTable (selección)
- Conversión final (click en WhatsApp CTA)

---

## 🔄 Flujo de Trabajo para Nuevas Features

1. **Crear branch** (opcional, pero recomendado para features grandes)
   ```bash
   git checkout -b feature/nombre-feature
   ```

2. **Desarrollar y testear localmente**
   ```bash
   npm run dev
   ```

3. **Build test**
   ```bash
   npm run build
   ```

4. **Commit con mensaje descriptivo**
   ```bash
   git add .
   git commit -m "feat: descripción clara del cambio"
   ```

5. **Push y deploy**
   ```bash
   git push origin main  # O merge a main si usaste branch
   ```

6. **Verificar deploy en Vercel**
   - Vercel auto-deploya en cada push a `main`
   - Revisa el dashboard de Vercel para logs de build

---

## 🧠 Conceptos Clave para Entender el Proyecto

### 1. Narrativa = Construcción
Todo el proyecto usa metáforas de construcción:
- "Cimientos" = Infraestructura técnica
- "Arquitectura" = Diseño de sistemas
- "Obra" = Proyecto
- "Planos" = Diseño técnico

### 2. No es un simple mapa
El proyecto enfatiza que NO es solo un mapa interactivo, es un **activo digital** que genera valor a largo plazo.

### 3. Herencia de Precisión
La conexión con 1937 y la tradición alemana no es decorativa, es la **propuesta de valor**: precisión, durabilidad, excelencia.

### 4. Phased Approach
Las 3 fases están diseñadas para ser secuenciales:
- No se puede hacer Fase 2 sin Fase 1
- Cada fase construye sobre la anterior
- Fase 1 es la "inversión", Fases 2-3 son el "retorno"

---

## 📄 Licencia y Uso

Este proyecto es una propuesta comercial confidencial para La Quilla de Caracas. El código es propiedad de IronLith y está diseñado para un cliente específico.

**Nota**: El contenido, diseño y estrategia son confidenciales y no deben ser replicados para otros clientes sin autorización.

---

*Última actualización: Enero 2026*  
*Versión: 1.0.0*

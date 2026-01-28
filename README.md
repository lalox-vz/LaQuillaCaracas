# La Quilla - Digital Proposal

> Propuesta de arquitectura digital premium para el proyecto inmobiliario La Quilla, presentada por IronLith.

## 🔐 Acceso

Esta es una propuesta confidencial protegida por código de acceso.

**Passcode**: `IRONLITH2026`

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir navegador en http://localhost:3000
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🏗️ Estructura

```
app/
├── components/          # Componentes React
│   ├── ProtectionGate.tsx    # Capa de seguridad con passcode
│   ├── HeroSection.tsx       # Hero premium
│   ├── HeritageSection.tsx   # Historia 1937
│   ├── ExecutionTimeline.tsx # Roadmap 4 semanas
│   ├── PhilosophySection.tsx # Narrativa alemana
│   ├── MasterPlan.tsx        # Visión 3 fases
│   ├── PricingTable.tsx      # 3 tiers de pricing
│   └── TermsSection.tsx      # Términos + WhatsApp CTA
├── globals.css         # Estilos globales + utilidades
└── page.tsx            # Página principal
```

## 🎨 Design System

### Colores
- `iron-black`: #0a0a0a
- `iron-gold`: #C5A059
- `iron-stone`: #1c1c1c

### Tipografía
- Headings: Bold, large scale
- Body: Light, readable
- Gradients: Gold to yellow

## 📱 Responsive

- Desktop: Full experience
- Tablet: Optimizado
- Mobile: Stack vertical

## 🔒 Security

El acceso está protegido por `ProtectionGate` component.
Solo usuarios con el passcode pueden ver la propuesta.

## 📊 Secciones

1. **ProtectionGate** - Exclusividad
2. **Hero** - Primera impresión
3. **Heritage** - Legado 1937
4. **Execution Timeline** - Plan 4 semanas
5. **Philosophy** - Ingeniería alemana
6. **Master Plan** - Visión 3 fases
7. **Pricing** - 3 tiers (Fase 1)
8. **Terms** - Condiciones + CTA

## 🚢 Deploy

### Vercel (Recomendado)

```bash
# Conectar con GitHub y deploy automático
vercel
```

### Manual Build

```bash
npm run build
npm start
```

## ⚙️ Configuración

Actualizar antes de deploy:

1. **WhatsApp Number** en `TermsSection.tsx` (línea 81)
2. **Passcode** en `ProtectionGate.tsx` (si necesario)

## 📄 License

Propuesta confidencial © 2026 IronLith

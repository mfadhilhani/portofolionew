# Muhammad Fadhil Hani — Portfolio Website

Portfolio profesional untuk Staf Jaringan & Keamanan TI, dibangun dengan Next.js 14.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (Bilingual: ID / EN)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## 📁 Struktur Proyek

```
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Locale layout + SEO metadata
│   │   └── page.tsx         # Main page
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx           # Sticky navbar + language toggle
│   ├── Hero.tsx             # Hero section + typing animation
│   ├── About.tsx            # About + profile
│   ├── Skills.tsx           # Skills grid
│   ├── Certifications.tsx   # Certifications + modal
│   ├── Experience.tsx       # Work experience timeline
│   ├── Projects.tsx         # Projects grid
│   ├── Contact.tsx          # Contact form + social links
│   └── Footer.tsx
├── messages/
│   ├── id.json              # Bahasa Indonesia
│   └── en.json              # English
├── lib/
│   └── cookies.ts
├── i18n.ts
├── middleware.ts
└── next.config.js
```

## ⚙️ Setup & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Internationalization

- Default: Bahasa Indonesia (`/` atau `/id`)
- English: `/en`
- Language preference disimpan di cookie (`NEXT_LOCALE`)

## 📸 Menambahkan Foto Profil

Ganti `public/profile.jpg` dengan foto Anda. Kemudian update komponen `About.tsx`:

```tsx
import Image from 'next/image';
// Ganti div placeholder dengan:
<Image
  src="/profile.jpg"
  alt="Muhammad Fadhil Hani"
  width={320}
  height={320}
  className="rounded-full object-cover"
/>
```

## 📄 Menambahkan CV

Letakkan file CV di `public/cv-fadhil-hani.pdf`

## 🔗 Update Kontak

Edit `messages/id.json` dan `messages/en.json` di bagian `contact` untuk mengupdate:
- Email address
- LinkedIn URL
- GitHub URL

## 🚀 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Atau connect repository di [vercel.com](https://vercel.com) untuk auto-deployment.

## 🎨 Design

- **Dark theme** default (`#0a1628`)
- **Accent**: Blue (`#3b82f6`) + Cyan (`#06b6d4`)
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (code)
- **Animasi**: Framer Motion scroll animations + typing effect
- **Background**: Grid pattern + glow effects
# portofolionew

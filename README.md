# PropFirm Frontend

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Environment Variables

Create `.env` file if needed:
```
VITE_API_URL=http://localhost:5000/api
```

## Features

- Single-page marketing site with sections:
  - Hero
  - Challenges
  - Testimonials
  - FAQ
- User authentication (signup, verify email, login)
- Buy challenges with crypto (NOWPayments)
- Trader dashboard with:
  - Balance tracking
  - P/L charts
  - Drawdown monitoring
  - Activity log
- Admin panel to manage purchases

## Tech Stack

- React 18
- React Router
- Axios
- Chart.js
- TailwindCSS
- Vite

## Pages

- `/` - Home (marketing page)
- `/signup` - User registration
- `/verify` - Email verification
- `/login` - User login
- `/buy/:challengeId` - Purchase challenge
- `/dashboard` - Trader dashboard
- `/contact` - Contact form
- `/rules` - Challenge rules
- `/admin` - Admin panel

## Notes

- Make sure backend is running on http://localhost:5000
- Update API_URL in `src/services/api.js` if backend is on different URL

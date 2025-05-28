# DataMentor Pro - Data Career Mentoring Platform

A comprehensive mentoring platform for data professionals built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### For Data Professionals
- **Resume Builder**: AI-powered resume optimization with industry-specific templates
- **1:1 Mentoring**: Book sessions with 10+ year industry veterans
- **Skill Assessment**: Identify gaps and get personalized learning paths
- **Interview Prep**: Mock interviews and company-specific preparation
- **Job Matching**: AI-powered job recommendations
- **Resource Library**: Curated tutorials and industry insights
- **Peer Network**: Connect with fellow data professionals

### Mentor Background
- 10+ years of analytics experience
- Experience in real estate tech, education, and retail
- Worked at Fortune 100 companies and hedge fund real estate firms
- Helped 200+ professionals advance their data careers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Authentication**: NextAuth.js (ready for implementation)
- **Database**: Prisma with PostgreSQL (ready for implementation)
- **Payments**: Stripe (ready for implementation)
- **Deployment**: Vercel

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mentor
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── dashboard/         # User dashboard
│   ├── resume-builder/    # Resume building tool
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # Reusable UI components
├── lib/
│   └── utils.ts          # Utility functions
```

## 🎨 Design System

The platform uses a carefully crafted design system with:
- Custom color palette optimized for data professionals
- Consistent spacing and typography
- Responsive design for all devices
- Accessible components built with Radix UI

## 🔮 Future Enhancements

### Authentication & User Management
- NextAuth.js integration
- User profiles and preferences
- Role-based access control

### Database & Backend
- Prisma ORM setup
- User data persistence
- Session scheduling system
- Payment processing

### Advanced Features
- AI-powered resume feedback
- Video call integration for mentoring sessions
- Progress tracking and analytics
- Mobile app development

### Payment Integration
- Stripe subscription management
- Multiple pricing tiers
- Free trial implementation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Environment Variables (for production)

```env
NEXTAUTH_URL=your-domain.com
NEXTAUTH_SECRET=your-secret
DATABASE_URL=your-database-url
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions about the platform or mentoring services:
- Email: support@datamentorpro.com
- Website: https://datamentorpro.com

---

Built with ❤️ for the data community

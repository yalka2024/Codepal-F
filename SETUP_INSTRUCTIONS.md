# 🚀 CodePal Platform - Setup Instructions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/yalka2024/Codepal-F.git
cd codepal-fix-critical-security-issues
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="codepal-secret-key-2025"
NEXTAUTH_URL="http://localhost:3005"
```

### 4. Set Up Database
```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Start the Development Server
```bash
npx next dev --port 3005
```

## 🌐 Access the Platform

Once the server is running, open your browser and go to:
```
http://localhost:3005
```

## ✅ What You Should See

- **CodePal Platform** header
- **SERVER IS WORKING!** status
- **Success!** message
- Technical details about the platform

## 🔧 Troubleshooting

### If the page doesn't load:
1. Wait 10-15 seconds after seeing "✓ Starting..."
2. Try refreshing the browser (F5)
3. Clear browser cache (Ctrl+Shift+R)
4. Try a different browser

### If you get dependency errors:
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

### If you get database errors:
```bash
npx prisma db push
npx prisma generate
```

## 📁 Project Structure

```
codepal-fix-critical-security-issues/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                   # Utility functions
├── prisma/                # Database schema
├── public/                # Static assets
└── package.json           # Dependencies
```

## 🎯 Features

- ✅ Next.js 15.4.4
- ✅ React 19.1.0
- ✅ TypeScript support
- ✅ Prisma ORM
- ✅ SQLite database
- ✅ Authentication ready
- ✅ Modern UI components

## 🚨 Important Notes

- The platform runs on port 3005 by default
- Make sure no other service is using port 3005
- The database file will be created automatically
- All dependencies are managed through npm

## 📞 Support

If you encounter any issues, check:
1. Node.js version (should be 18+)
2. Port 3005 availability
3. Environment variables setup
4. Database connection

---

**🎉 Your CodePal Platform is now ready to use!** 
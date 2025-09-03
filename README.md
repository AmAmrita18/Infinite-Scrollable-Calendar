# Infinite Scrollable Calendar

A React-based calendar app for tracking hair journal entries with infinite scroll functionality.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── calendar/
│   │   ├── CalendarDay.jsx
│   │   ├── CalendarHeader.jsx
│   │   └── CalendarMonth.jsx
│   ├── common/
│   │   ├── NavigationButton.jsx
│   │   └── StarRating.jsx
│   ├── modal/
│   │   ├── EntryModal.jsx
│   │   ├── ModalContent.jsx
│   │   └── ModalHeader.jsx
│   └── Calendar.jsx (main component)
├── data/
│   └── mockData.js
├── hooks/
│   ├── useInfiniteScroll.js
│   └── useSwipeNavigation.js
├── utils/
│   ├── constants.js
│   └── dateUtils.js
└── App.jsx
```

## Features

- Infinite scroll calendar
- Touch/swipe navigation
- Modal entries with images
- Star ratings
- Responsive design

## Tech Stack

- React Js
- Tailwind 
- Date-fns
- Lucide React icons
- Vite

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

- **Calendar.jsx** - Main component with infinite scroll
- **useInfiniteScroll.js** - Custom hook for scroll logic
- **dateUtils.js** - Date manipulation utilities
- **mockData.js** - Sample journal entries

## Dependencies

- React & React DOM
- Tailwind CSS with Vite plugin
- date-fns for date operations
- lucide-react for icons
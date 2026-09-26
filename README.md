# FitLog — Workout Library

FitLog is a responsive workout library and planning web application built for managing daily workouts. Users can browse exercises, view workout details, add workouts to today's plan, save workouts for later, sort their plans, and track completed exercises.

## Live Website

*[https://fit-log-samiha1.vercel.app/](https://fit-log-samiha1.vercel.app/)*

## GitHub Repository

*[https://github.com/Samiha-26/fit-log](https://github.com/Samiha-26/fit-log)*

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* REST API
* Font Awesome
* Next/Image

## Features

* Browse workouts from the FitLog API
* View detailed workout information including equipment, duration, calories, rating, sets, reps, and instructions
* Add workouts to Today's Plan
* Save workouts for later
* Prevent duplicate workouts from being added
* Limit Today's Plan to five workouts
* Mark workouts as completed
* Remove workouts from Today's Plan or Saved list
* Sort workouts by duration, calories, or rating
* Responsive design for mobile, tablet, and desktop
* Toast notifications for workout actions
* Loading state while workout data is being fetched
* Custom 404 page
* Empty state for Today's Plan and Saved workouts
* Navbar counters for planned and saved workouts

## API

FitLog uses the following API:

https://api.abcz.workers.dev/api/fitlog

Single workout:

https://api.abcz.workers.dev/api/fitlog/:id

## Project Structure

```text
fit-log/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Homepage/
│   │   │   │   ├── Banner.tsx
│   │   │   │   └── Library.tsx
│   │   │   ├── WorkoutDetails/
│   │   │   │   ├── SaveForLater.tsx
│   │   │   │   └── TodaysPlan.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LibraryCard.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── WorkoutCard.tsx
│   │   ├── my-plan/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── workouts/
│   │   │   └── [workoutId]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── assets/
│   ├── context/
│   │   └── WorkoutContext.tsx
│   └── types/
│       └── LibraryTypes.tsx

```

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install

```

Run the development server:

```bash
npm run dev

```

Open `http://localhost:3000` in your browser.

## Build

To create a production build:

```bash
npm run build

```

## Project Highlights

FitLog focuses on a clean dark interface with a simple workout-planning flow. The application uses React Context API to manage Today's Plan and Saved workouts across the application.

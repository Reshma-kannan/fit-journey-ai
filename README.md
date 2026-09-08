# Fit Journey AI

Create a modern, responsive, and visually attractive web application called "FitJourney AI".

The website should help gym users and fitness enthusiasts follow personalized workout and nutrition plans based on their experience level, body details, and fitness goals.

MAIN USER FLOW:

Sign Up/Login → Create Profile → Select Fitness Goal → Select Experience Level → Get Personalized Workout & Diet Plan → Track Progress.

FEATURES:

1. USER AUTHENTICATION

- Sign up and login functionality.

- User profile dashboard.

- Store user information securely.

2. FITNESS PROFILE

Ask users for:

- Name

- Age

- Height

- Weight

- Experience level: Beginner, Intermediate, or Pro

- Primary fitness goal:

  - Weight Loss

  - Muscle Gain

  - Strength Building

  - General Fitness

- Number of days available for workouts per week.

- Dietary preference:

  - Vegetarian

  - Non-Vegetarian

  - Vegan

- Food allergies or restrictions (optional).

3. PERSONALIZED WORKOUT PLANS

Create workout plans based on the user's experience level and goal.

BEGINNER:

- Basic exercises with simple instructions.

- Beginner-friendly workout schedules.

- Focus on proper form and consistency.

- Include warm-up and cool-down exercises.

INTERMEDIATE:

- Structured workout splits.

- Increased training intensity.

- Strength and hypertrophy workouts.

PRO:

- Advanced training programs.

- Progressive overload recommendations.

- Advanced workout splits and performance tracking.

For every exercise, display:

- Exercise name

- Target muscle group

- Number of sets

- Number of repetitions

- Rest time

- Difficulty level

- Step-by-step instructions

- Image or video demonstration

- Safety tips

4. NUTRITION AND FOOD RECOMMENDATIONS

Provide food recommendations according to the user's fitness goal and dietary preference.

Include:

- Daily meal suggestions

- Breakfast

- Lunch

- Dinner

- Healthy snacks

- Protein-rich foods

- Estimated calories

- Protein, carbohydrates, and fat information

- Daily water intake recommendation

Include separate meal plans for:

- Weight loss

- Muscle gain

- Maintaining fitness

5. AI-POWERED FITNESS RECOMMENDATION SYSTEM

Create an intelligent recommendation system that analyzes the user's:

- Fitness goal

- Experience level

- Height and weight

- Workout availability

- Dietary preferences

Based on this information, generate a personalized weekly workout and nutrition plan.

The AI should also provide motivational and supportive suggestions.

Important: Clearly state that the recommendations are general fitness guidance and are not a substitute for professional medical advice.

6. PROGRESS TRACKER

Allow users to track:

- Current weight

- Weight history

- Completed workouts

- Workout streak

- Personal records

- Progress photos (optional)

- Weekly and monthly progress charts

7. WORKOUT CALENDAR

Create an interactive calendar where users can:

- View scheduled workouts

- Mark workouts as completed

- Track rest days

- Reschedule workouts

8. EXERCISE LIBRARY

Create a searchable exercise library.

Users should be able to filter exercises by:

- Muscle group

- Difficulty level

- Equipment required

- Workout type

Categories should include:

- Chest

- Back

- Legs

- Shoulders

- Arms

- Core

- Cardio

- Full Body

9. SMART FEATURES

Include the following additional features:

- BMI calculator

- BMR and estimated calorie calculator

- Daily calorie target

- Water intake tracker

- Step counter integration placeholder

- Workout timer

- Rest timer between sets

- Daily motivational quotes

- Achievement badges

- Workout streaks

10. FITNESS CHATBOT

Create an AI fitness assistant chatbot where users can ask questions such as:

- What exercise should I do today?

- What food should I eat for muscle gain?

- How many calories should I consume?

- How can I improve my workout?

The chatbot should provide safe and general fitness information.

11. EMERGENCY AND SAFETY FEATURES

Display safety warnings and encourage users to consult qualified healthcare or fitness professionals for injuries, medical conditions, or personalized medical advice.

12. DASHBOARD DESIGN

Create a clean and modern dashboard displaying:

- Welcome message

- Today's workout

- Calories consumed

- Water intake

- Current workout streak

- Weekly progress

- Quick access to the nutrition plan

DESIGN REQUIREMENTS:

- Modern and premium fitness application design.

- Dark theme with a professional gym aesthetic.

- Fully responsive for mobile, tablet, and desktop.

- Smooth animations and transitions.

- Simple and intuitive navigation.

- Use fitness-related icons and illustrations.

- Include a progress dashboard with charts.

PAGES REQUIRED:

1. Landing Page

2. Login/Register

3. User Profile Setup

4. Fitness Assessment

5. Personalized Dashboard

6. Workout Plans

7. Exercise Library

8. Nutrition & Meal Plans

9. Progress Tracker

10. Workout Calendar

11. AI Fitness Chatbot

12. Settings

TECHNOLOGY:

Frontend: React.js

Backend: Python FastAPI

Database: PostgreSQL or MongoDB

Authentication: JWT

Charts: Chart.js or Recharts

Create clean, well-structured, reusable code. Use a modular folder structure and provide sample data for exercises and nutrition plans.

The website should feel like a real-world fitness application rather than a basic college project.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2f18c947-36ac-45d6-bf5f-87cf25124d53).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

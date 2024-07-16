# React Redux Toolkit Template
 
This is a modern template to kickstart your React applications using Vite, Redux Toolkit, and TypeScript. It includes a pre-configured setup with commonly used libraries and tools to streamline your development process.
 
## Table of Contents
 
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Redux Toolkit Configuration](#redux-toolkit-configuration)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
 
## Features
 
- **Modern Development Environment**: Uses Vite for fast builds and hot module replacement.
- **State Management**: Configured with Redux Toolkit for state management.
- **TypeScript**: Full TypeScript support.
- **Styling**: Integrated with DaisyUI for Tailwind CSS components.
- **Code Quality**: Pre-configured with ESLint and Prettier for code linting and formatting.
- **Git Hooks**: Husky and lint-staged for pre-commit checks.
- **Authentication**: Basic setup for protected routes and authentication.
- **Responsive Design**: Mobile-first responsive design.
- **Custom Hooks**: Example custom hooks for common tasks like API requests and local storage.
 
## Tech Stack
 
- **Client**: 
  - [React](https://reactjs.org/)
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [DaisyUI](https://daisyui.com/)
- **Utilities**: 
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://github.com/okonet/lint-staged)
 
## Installation
 
1. Clone the repository:
 
   ```bash
   git clone https://github.com/nisar1406/react-redux-toolkit-template.git
   cd react-redux-toolkit-template
   ```
 
2. Install dependencies:
 
   ```bash
   yarn install
   ```
 
## Usage
 
To start the development server:
 
```bash
yarn dev
```
 
Open your browser and navigate to `http://localhost:3000`.
 
## Project Structure
 
```plaintext
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # React components
├── features/         # Redux features (slices)
├── hooks/            # Custom hooks
├── layouts/          # Layout components
├── pages/            # Page components
├── routes/           # Route components and configuration
├── services/         # API service functions
├── store/            # Redux store configuration
├── styles/           # Global styles
└── utils/            # Utility functions
```
 
## Redux Toolkit Configuration
 
The project uses Redux Toolkit to simplify the setup of Redux and enable a more efficient state management approach. Redux Toolkit provides a set of tools and best practices for managing state in a React application.
 
### Store Configuration
 
The store is configured in `src/store/index.ts`:
 
```typescript
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
 
const store = configureStore({
  reducer: rootReducer,
});
 
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
 
export default store;
```
 
### Slices
 
Redux Toolkit introduces the concept of "slices" which are a collection of Redux reducer logic and actions for a single feature. Each slice is defined in the `src/features` directory.
 
Example slice (`src/features/counter/counterSlice.ts`):
 
```typescript
import { createSlice } from '@reduxjs/toolkit';
 
interface CounterState {
  value: number;
}
 
const initialState: CounterState = {
  value: 0,
};
 
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
 
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
 
export default counterSlice.reducer;
```
 
## Available Scripts
 
- **`yarn dev`**: Start the development server.
- **`yarn build`**: Build the project for production.
- **`yarn preview`**: Preview the production build locally.
- **`yarn lint`**: Run ESLint to check for linting errors.
- **`yarn lint:fix`**: Run ESLint and fix linting errors.
- **`yarn format`**: Format code using Prettier.
 
## Contributing
 
Contributions are welcome! Please follow these steps to contribute:
 
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.
 
## License
 
This project is licensed under the MIT License.

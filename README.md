# React Native Test Task

This is a React Native project created as part of a test task. The project includes a simple mobile app with a login screen and a dashboard that contains two tabs: Home and Favorite.

## Table of Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Technical Stack](#technical-stack)
- [Usage](#usage)

## Requirements

The test task required the following features and technologies:

- **Screens**:
  - Login screen with email and password fields.
  - Dashboard screen with bottom navigation containing Home and Favorite tabs.
- **Login Screen**:
  - Validate user input and allow login with fixed credentials.
- **Home Tab**:
  - Fetch data from the Random User API.
  - Implement pagination and pull-to-refresh.
  - Display user profiles with name and optional details.
  - Add a favorite/unfavorite functionality.
- **Favorite Tab**:
  - Display the list of favorite users.
  - Allow marking users as unfavorite.
- **Technical Specifications**:
  - Redux for state management.
  - React hooks for component logic.
  - TypeScript for type-safe code.
  - Random User API for data.

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kaushiktheone/JetDevsPractical.git

   npm install
   npx react-native start
   npx react-native run-ios
   # OR
   npx react-native run-android
   ```

## Technical Stack

This project is built using the following technologies and libraries:

- **Front-end**:

  - React Native: A popular framework for building mobile applications using React.
  - Redux: A state management library for managing application state.
  - React Hooks: Functional components and hooks for managing component state and side effects.
  - React Navigation: A navigation library for creating smooth navigation flows.
  - Axios: A library for making API requests.
  - TypeScript: A statically typed superset of JavaScript for improved code quality.

- **Styling**:

  - Global styles and themes for consistent design.

- **Testing**:

  - Extensive testing on iOS and Android simulators/emulators.

- **Version Control**:
  - Git: A distributed version control system used for tracking changes in the codebase.
  - GitHub: A web-based platform for hosting and collaborating on Git repositories.

## Usage

Follow these steps to use the application:

1. **Login**:

   - Use the provided email (`reactnative@jetdevs.com`) and password (`jetdevs@123`) to log in.

2. **Home Tab**:

   - Scroll through the list of random users.
   - Pull to refresh the user list to fetch the latest data.
   - Mark users as favorites by tapping the favorite icon.

3. **Favorite Tab**:
   - View your list of favorite users.
   - Unfavorite users by tapping the unfavorite option.

These instructions will help you navigate and use the application's features effectively.

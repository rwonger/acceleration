
<img width="100%" alt="Screenshot" src="https://github.com/rwonger/acceleration/assets/89073648/0c1802dd-54c3-4b8e-a6a6-63804441fc29"/>


# Acceleration 
Acceleration is a momentum-esq to-be browser extension meant to replace Chrome's existing new-tabs page for a more personalized user experience

Check out a live demo [here](https://rwonger.github.io/acceleration/)!

### KEY FEATURES 🤩:
- Display localized time and weather using PirateWeather
- Personalized greeting message
- Upload and use your own backgrounds

### Tools and Technologies used:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [PirateWeatherAPI](https://pirateweather.net/)
- [HeadlessUI](https://headlessui.dev/)

### Technical Features
- Data persistence for page state, user name and backgrounds
- Smooth transitions between page states and menu

### Known bugs:
- Unable to upload files greater than 3 mb
- Weather takes a while to fetch from source
- Element resizing issues

If you would like to run acceleration locally, check the sections below!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Vite](https://vitejs.dev/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/acceleration.git
    cd acceleration
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your PirateWeatherAPI key:

    ```bash
    VITE_WEATHER_API_KEY=your_weather_api_key
    ```

### Running for the First Time

Start the development server:

```bash
npm run dev
```

### Acknolodgements
Source Photo by <a href="https://unsplash.com/@cestmoisheedy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sarah Sheedy</a> on <a href="https://unsplash.com/photos/a-person-riding-a-surf-board-on-a-wave-covered-beach-wG26ifbU1ME?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  





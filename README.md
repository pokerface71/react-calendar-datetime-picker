# react-calendar-datetime-picker

### The Simple and fast English and Persian calender for React

version: "1.3.3"

[![NPM](https://img.shields.io/npm/v/react-calendar-datetime-picker.svg)](https://www.npmjs.com/package/react-calendar-datetime-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![alt text](./website/public/image/react-datetime-picker.jpg?raw=true)

Thanks to [PersianDate](https://github.com/babakhani/PersianDate), the only dependency of this date picker.

## Install

```bash
npm install react-calendar-datetime-picker
or
yarn add react-calendar-datetime-picker

```

## Documentation 📄

[Documentation with examples](https://mmehdinasiri.github.io/react-calendar-datetime-picker/)

- [Getting Started](https://mmehdinasiri.github.io/react-calendar-datetime-picker/docs/quick-start)
- [Props](https://mmehdinasiri.github.io/react-calendar-datetime-picker/docs/Props)
- [Customization](https://mmehdinasiri.github.io/react-calendar-datetime-picker/docs/customization)
- [Utilities](https://mmehdinasiri.github.io/react-calendar-datetime-picker/docs/Utilities)
- [Typescript](https://mmehdinasiri.github.io/react-calendar-datetime-picker/docs/typescript)
- [Examples](https://mmehdinasiri.github.io/react-calendar-datetime-picker/docs/examples)

## Usage

```tsx
import React from "react";

import DtPicker from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/index.css";

const App = () => {
  const [date, setDate] = useState(null);
  return <DtPicker onChange={setDate} />;
};
```

- Supports Gregorian and Jalali calender
- Uses context api to share data
- Supports three types of calender: single day - date range - multiple dates
- Fully customizable
- Supports maximum and minimum dates
- Capability to add a list of disabled dates
- Supports time for single and range type
- Capability to mark weekends
- Function called for change, open and close events
- Supports Typescript

## License

MIT © [mehdinasiri](https://github.com/mehdinasiri)

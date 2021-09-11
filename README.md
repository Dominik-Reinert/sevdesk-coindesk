# Info

## Tools and Frameworks

The application was created using the [create react app](https://reactjs.org/docs/create-a-new-react-app.html) npm tool. It uses the following tools and frameworks:

- [Yarn](https://yarnpkg.com/) as build tool
- [React](https://reactjs.org/) as frontend javascript framework
- [React router](https://reactrouter.com/) for routing
- [React I18next](https://react.i18next.com/latest/typescript) for translations
- [Typescript](https://www.typescriptlang.org/) as programming language
- [Emotion](https://github.com/emotion-js) for styling and CSS
- [Fontawesome](https://fontawesome.com/) for icons
- [Jest](https://jestjs.io/) for testing
- [Power assert](https://github.com/power-assert-js/power-assert) for assertions in tests

## Getting things started

Follow these steps to start the application:

- Download and install [Yarn](https://yarnpkg.com/)
- Navigate to the project root directory
- Run `yarn install`
- Select the script you want to run below

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## .env file

the .env file sets the `DISABLE_NEW_JSX_TRANSFORM=true` as a workaround of a [bug in react which interferes with emotionjs](https://github.com/emotion-js/emotion/issues/2041)

## Translations

The app is using [React I18next](https://react.i18next.com/latest/typescript) for translations. As not many translations are needed, it is only using the default namespace `translations`. Translations are found in `i18n.ts` in the root of the project.

### Using translations

There is a custom hook called `useLanguageTranslation`, which is typesafe and automatically returns the right translation based on the browser language of the user. It returns a `t` function as first return value. Call this function with the right key to get the translation. E.g.

```typescript
// in i18n.ts

const resources: LanguageResources = {
  de: {
    translation: {
      myMessageKey: "Hallo welt",
    },
  },
  en: {
    translation: {
      myMessageKey: "Hello world",
    },
  },
};

// in component.tsx
function MyComponent(): JSX.Element {
  const [t] = useLanguageTranslation();
  return <div>{t("myMessageKey")}</div>;
}
```

### Note for the reviewer

You will see more often that I placed many interfaces/classes in a single file. This is not ideal and I am aware of it, but it is a simple way to keep private interfaces eclosed. Ususally they should be in separate files in different modules.

## Data

_TLDR: Data coming from a server or api is supposed to be stored in a proper `Store` and ideally be fetched using the `ServerData<D>`. Extending the `Serverdata<D>` allows for react suspensions and eases the fetching process, if needed_

### (Abstract) Store

The abstract store is supposed to hold information fetched from apis or servers and provide it to the application.

In this very simple store implementation, it simply holds whatever data you throw into it and expects it to be adapted to fit the specific need the user has with implementing it.

#### Why that?

By enforcing an adaptation of the data that is likely coming from a remote, We ensure that whatever component/class/interface/hobbit is using the data, does not directly depend on the datastructure returned by the remote, ensuring reusability and less dependence in the future.

### ServerData<D>

The server data is a simple Wrapper class that makes it easy to call a server or api for data. It provides a simple `get()` method which will

- throw the promise with the state of the current fetch in progress, if still running
- throw an error, if fetching the data was unsuccessfull
- return the data from the server, if successfull

Throwing the currently running fetch promise allows suspending react components while the data is not there yet.

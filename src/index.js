import React from 'react';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import ReactDOM from 'react-dom';
import App from './App';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'navigator', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '../assets/locales/{{lng}}/translation.json',
    },
    react: { 
      useSuspense: false
    },
  })

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

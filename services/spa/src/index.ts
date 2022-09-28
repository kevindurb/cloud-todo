import 'reflect-metadata';
import Container from 'typedi';
import { App } from './App';

const app = Container.get(App);

app.show();

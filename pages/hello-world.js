import React from 'react';
import { RootElement, logging } from 'react-server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from '../components/Counter';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

export default class SimplePage {
	getElements() {
		return [
      <RootElement key={0}>
        <Provider store={store}>
			    <Counter
			      value={store.getState()}
			      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
			      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
			    />
		    </Provider>
      </RootElement>
		];
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}

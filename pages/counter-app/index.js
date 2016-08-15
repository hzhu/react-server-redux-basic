import React from 'react';
import { RootElement, logging } from 'react-server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from '../../components/Counter';
import reducer from './reducer'

const store = createStore(reducer)

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

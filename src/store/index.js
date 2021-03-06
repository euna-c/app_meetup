import Vue from 'vue'
import Vuex from 'vuex'

import meetups from './modules/meetups'
import threads from './modules/threads'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		meetups,
		categories,
		threads
	},
	// Simple functions to mutate a state
	// state[modulename].item
	mutations: {
		setItems (state, {resource, items}) {
			state[resource].items = items
		},
		setItem (state, {resource, item}) {
			state[resource].item = item
		}
	}
})
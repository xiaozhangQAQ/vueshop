import {NUM_ADD} from './mutation_type.js'

var mutations = {
	[NUM_ADD] (state,msg){
		state.count= msg;
	},
	MSG_ARR (state,msg){
		state.msgcontent= msg;
	}
}

export default mutations
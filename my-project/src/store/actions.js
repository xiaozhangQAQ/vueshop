import {
	NUM_ADD
} from './mutation_type.js'

export default {
	async numadd({commit},aa) {	
		var msg =aa;
		console.log(msg);
		commit(NUM_ADD, msg);
	},
	async msgArr({commit},aa) {	
		var msg =aa;
		console.log(msg);
		commit(MSG_ARR, msg);
	}
}

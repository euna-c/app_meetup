export default {
	data () {
		return {
			pageLoader_dataLoaded: false
		}
	},
	methods: {
		pageLoader_resultLoaded () {
			this.pageLoader_dataLoaded = true
		}
	}
}
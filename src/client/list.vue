<template>
    <div>
        <div class="well well-sm"> {{_search}}
        </div>
        <div class="text-center" v-show="loading">
            <p class="text-danger"><span class="glyphicon glyphicon-refresh"></span>&nbsp; {{error[errorIndex]}}</p>
        </div>
        <div class="list-group" v-show="content">
            <a href="#" class="list-group-item" v-for="item in list">
                <div class="media">
                    <a class="media-left media-middle " href="#"> <img v-bind:src="item.src" v-bind:alt="item.name"> </a>
                    <div class="media-body">
                        <h4 class="media-heading"> {{item.name}}</h4>
                        {{item.name }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            loading: true,
            content: false,
            errorIndex: 0,
            error: ['数据加载中...', '对不起！让你失望了，没有找的相关数据！'],
            list: []
        };
    },
    computed: {
        _search() {
            this.fetchData();
            return this.$store.state.search;
        }
    },
    methods: {
        fetchData() {
            this.$http.get('/list', {
                params: {
                    v: this.$store.state.search
                }
            }).then((res) => {
                this.$set(this, 'loading', !res.ok);
                this.$set(this, 'content', res.ok);
                this.$set(this, 'list', res.body);
            }, (error) => {
                console.error(error);
            })
        }
    }
}
</script>
<style>
.list-group-item:first-child {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}

.list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
</style>

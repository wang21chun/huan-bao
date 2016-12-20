<template>
    <div class="index">
        <div class="jumbotron">
            <div class="container">
                <h1>换宝</h1>
                <div class="input-group input-group-lg">
                    <input type="text" class="form-control" :class="{'border-bottom-left-radius-none':automatedKeyword}" placeholder="试试换宝" v-model="search" @keyup.enter.prevent.stop="searchBut" @keyup.up.prevent.stop="moveSelect" @keyup.down.prevent.stop="moveSelect">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button" @click = "searchBut"><span class="glyphicon glyphicon-search"></span></button>
                    </span>
                </div>
                <div class="association" v-show="automatedKeyword" :style="{width:association_w+'px'}" @mouseleave.prevent.stop="mouseleave">
                    <ul>
                        <li :class="{'move-select':index === keyIndex}" v-for="(keyword, index) in keywords" @click="autoSearch(index)" @mouseenter.prevent.stop="mouseenter(index)">{{keyword.key}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    data: function() {
        return {
            search: '',
            association_w: 0,
            automatedKeyword: false,
            keywords: [],
            keyIndex: -1,
            isSearch: true

        };
    },
    watch: {
        search: 'automatedSearch'
    },
    mounted: function() {
        var $_input = $(this.$el).find('input');
        var _input_width = $_input.outerWidth(true);
        this.$set(this, 'association_w', _input_width);
    },
    methods: {
        searchBut: function() {
            if (this.search != '') {
                this.$router.push('list');
                this.$store.commit({
                    type: 'setSearch',
                    search: this.search
                });
                this.$set(this, 'automatedKeyword', false);
            }
        },
        automatedSearch: function(val, oldVal) {
            if (!this.isSearch) {
                this.$set(this, 'isSearch', true);
                return;
            }
            if ('' != val) {
                this.$http.get('/automatedSearch', {
                        params: {
                            keyword: val
                        }
                    })
                    .then((res) => {
                        var keywords = res.body;
                        this.$set(this, 'automatedKeyword', keywords.length > 0);
                        this.$set(this, 'keywords', keywords);
                    }, (error) => {
                        console.error(error);
                    })
            } else {
                this.$set(this, 'automatedKeyword', false);

            }

        },
        autoSearch: function(index) {
            this.$set(this, 'automatedKeyword', false);
            this.mouseenter(index);
            this.searchBut();
        },
        moveSelect: function(event) {
            var keyIndex = this.keyIndex;
            if (event.keyCode === 40) {
                keyIndex += 1;
            }
            if (event.keyCode === 38) {
                keyIndex -= 1;
            }
            var max = this.keywords.length;
            var min = -1;

            if (keyIndex >= max) {
                keyIndex = min;
            } else if (keyIndex <= min) {
                keyIndex = max;
            }
            this.$set(this, 'keyIndex', keyIndex);
            if (keyIndex > min && keyIndex < max) {
                var k = this.keywords[keyIndex].key;
                if (this.search !== k) {
                    this.$set(this, 'isSearch', false);
                }
                this.$set(this, 'search', k);
            }


        },
        mouseenter: function(index) {
            this.$set(this, 'keyIndex', index);
            var k = this.keywords[index].key;
            if (this.search !== k) {
                this.$set(this, 'isSearch', false);
            }
            this.$set(this, 'search', k);
        },
        mouseleave: function() {
            this.$set(this, 'keyIndex', -1);
        }

    }
}
</script>
<style>
.index .page-header {
    padding: 0 20px;
}

.index .lead {
    padding: 0 10px;
}

.association {
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    position: absolute;
    z-index: 100;
}

.association>ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.association>ul>li {
    line-height: 25px;
    padding-left: 16px;
}

.move-select {
    background-color: #ddd;
    font-size: 16px;
}

.border-bottom-left-radius-none {
    border-bottom-left-radius: 0px!important;
}
</style>

<template>
    <div>
        <div class="released" :style="{'left':left+'px','top':top+'px'}" @click.prevent="released" @mousedown.prevent="mousedown" @mouseup.prevent="mouseup" @mouseout.prevent="mouseup" @mousemove.prevent="mousemove">
            <span class="glyphicon glyphicon-bullhorn"></span>
        </div>
        <div class="modal fade" id="released-modal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">发布你的宝贝</h4>
                    </div>
                    <div class="modal-body">
                        <drag-file-upload></drag-file-upload>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">先看看</button>
                        <button type="button" class="btn btn-primary">发布</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </div>
</template>
<script>
import dragFileUpload from './drag-file-upload.vue';
export default {
    data: function() {
        return {
            move: false,
            click: true,
            top: 100,
            left: 100,
        };
    },
    components:{
    	'drag-file-upload':dragFileUpload
    },
    methods: {
        mousedown: function(event) {
            this.$set(this, 'move', true);
        },
        mousemove: function(event) {
            if (this.move) {
                this.$set(this, 'top', event.y - 25);
                this.$set(this, 'left', event.x - 25);
                if (this.click) {
                    this.$set(this, 'click', false);
                }
            }
        },
        mouseup: function(event) {
            if (this.move) {
                this.$set(this, 'move', false);
            }
        },
        released: function() {
            if (this.click) {
                $('#released-modal').modal();
            } else {
                this.$set(this, 'click', true);
            }

        }
    }
}
</script>
<style>
.released {
    margin: 0;
    padding: 10px 0px 0px 11px;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 10;
    top: 100px;
    left: 100px;
    box-shadow: 0 0 10px RGBA(255, 255, , .5);
    background-color: RGBA(54, 54, 54, .85);
    border-radius: 50px;
    display: table-cell;
    color: #FFF;
    font-size: 25px;
}

.released:hover {
    box-shadow: 0 0 15px RGBA(0, 0, 0, .7);
}
</style>

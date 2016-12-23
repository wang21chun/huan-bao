<template>
    <div class="progress" @dragenter.prevent="dragenter" @dragover.prevent="dragover" @dragleave.prevent="dragleave" @dragend.prevent="dragend" @drop.prevent="drop" @dragstart.prevent="dragstart">
        <div class="progress-bar" :style="{width:progressSize+'%'}">
            <span v-show="!show">{{loaded}}/{{fileSize}} 已完成-{{progressSize}}%</span>
        </div>
        <p class="progress-text" v-show="show">拖入上传文件！</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            types: [],
            fileTotalSize:0,
            loadedSize:0,
        };
    },
    computed: {
        progressSize: function() {
            return parseInt(this.loadedSize / this.fileTotalSize * 100);
        },
        show:function(){
            return this.progressSize > 0 ? false : true;
        },
        fileSize:function(){
            return this.toByte(this.fileTotalSize);
        },
        loaded:function(){
            return this.toByte(this.loadedSize);
        }
    },
    methods: {
        toByte:function(val){
            if(val > 1000){
                return this.toKB(val);
            }
            return (Math.round(val * 100) / 100).toFixed(1)+'Byte';
        },
        toKB:function(val){
            val = val / 1000;
            if(val > 1000){
                return this.toMB(val);
            }
            return (Math.round(val * 100) / 100).toFixed(1)+'KB';
        },
        toMB:function(val){
            val = val / 1000;
            return (Math.round(val * 100) / 100).toFixed(1)+'M';
        },
        dragenter: function(event) {
            //console.log(event)
        },
        dragover: function(event) {
            //console.log(event)
        },
        dragleave: function(event) {
            //console.log(event)
        },
        dragend: function(event) {
            //console.log(event)
        },
        drop: function(event) {
            let files = event.dataTransfer.files;
            let formData = new FormData();
            let fileTotalSize = 0;
            console.log(files)
            for (let i = 0, length = files.length; i < length; i++) {
                formData.append('file', files[i]);
                fileTotalSize += files[i].size;
            }
            this.$set(this,'fileTotalSize', fileTotalSize);
            this.$http.post('/upload', formData, {
                    progress: (event) => {
                        this.$set(this, 'loadedSize', event.loaded);
                    }
                })
                .then((res) => {
                    console.log(res)
                    this.$set(this, 'loadedSize', 0);
                }, (err) => {
                    console.log(err)
                })


            /* let reader = new FileReader();

             reader.onloadstart = (event)=>{
                 console.log(event);
             }
             reader.onprogress = (event)=>{
              console.log(event);   
             }
             reader.onload = (event)=>{
                 
               
             }
             reader.onloadend = (event)=>{
                 
             }
             reader.readAsDataURL(files[0]);*/
        },
        dragstart: function(event) {
            //console.log(event)
        }
    }
}
</script>
<style>
.progress {
    height: 100px;
    line-height: 100px;
}

.progress>.progress-bar {
    height: 100px;
    line-height: 100px;
}

.progress>.progress-text {
    padding: 0px 10px;
    font-size: 18px;
    color: #888;
}
</style>

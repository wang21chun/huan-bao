<template>
    <div class="progress" @dragenter.prevent="dragenter" @dragover.prevent="dragover" @dragleave.prevent="dragleave" @dragend.prevent="dragend" @drop.prevent="drop" @dragstart.prevent="dragstart">
        <div class="progress-bar" :style="{width:progressSize+'%'}">
            <span v-show="!show">已完成{{progressSize}}%</span>
        </div>
        <p class="progress-text" v-show="show">拖入上传文件！</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            types: [],
            progress: 0
        };
    },
    computed: {
        progressSize: function() {
            return this.progress;
        },
        show:function(){
            return this.progress > 0 ? false : true;
        }
    },
    methods: {
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
            for (let i = 0, length = files.length; i < length; i++) {
                formData.append('file', files[i]);
            }
            this.$http.post('/upload', formData, {
                    progress: (event) => {
                        let progress = parseInt(event.loaded / event.total * 100);
                        this.$set(this, 'progress', progress);
                    }
                })
                .then((res) => {
                    console.log(res)
                    this.$set(this, 'progress', 0);
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
}
</style>

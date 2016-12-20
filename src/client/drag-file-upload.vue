<template>
    <div class="jumbotron well well-lg" @dragenter.prevent="dragenter" @dragover.prevent="dragover" @dragleave.prevent="dragleave" @dragend.prevent="dragend" @drop.prevent="drop" @dragstart.prevent="dragstart">
        <p class="help-block">拖入上传文件！</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            types:[]
        };
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
            let http = this.$http;
            let files = event.dataTransfer.files;

            let formData = new FormData();
              formData.append('file', files[0]);
              this.$http.post('/upload',formData)
              .then((res)=>{
                console.log(res)
              },(err)=>{
                console.log(err)
              })

            let reader = new FileReader();

            reader.onloadstart = (event)=>{
                console.log(event);
            }
            reader.onprogress = (event)=>{
             console.log(event);   
            }
            reader.onload = (event)=>{
              
            }
            reader.onloadend = (event)=>{
                console.log(event);
            }
            reader.readAsDataURL(files[0]);
        },
        dragstart: function(event) {
            //console.log(event)
        }
    }
}
</script>
<style>
</style>

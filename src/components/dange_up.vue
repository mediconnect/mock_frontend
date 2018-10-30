<!--单个文件上传-->
<template>
	        <el-row :gutter="10">
                            <el-col :span="18"> 
                                <el-input placeholder="请选择文件" v-model="rili" ></el-input>
    </el-col>
                         <el-col :span="6" class="tr">  
<el-upload
  class="avatar-uploader"
  action=""
  :show-file-list="false"
  :before-upload="beforeAvatarUpload"
           >
  <el-button type="primary" class="ssd_deert">上传</el-button>
</el-upload>
                              
                             
                             
                             
                           </el-col>
                        </el-row>
</template>
<script>
    export default {
        data() {
            return {
                rili: ""
            }
        },
        components: {

        },
        methods: {
            beforeAvatarUpload(a, b) {
                this.rili = a.name
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .ssd_deert {
        width: 105px;
    }

</style>

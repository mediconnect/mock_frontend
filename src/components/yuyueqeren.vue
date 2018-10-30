<!--03 预约信息确认-->
<template>
	  <div class="mt20"> 
                        <div class="sd_jhg_dere fz16">
                            <span class="cz">申请人/联系人信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li> 
                                <el-row class="fz16">
                                    <el-col :span="4"> 姓名</el-col>
                                    <el-col :span="20">李大明</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 地址</el-col>
                                    <el-col :span="20">南京市栖霞区迈皋桥街道</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 邮箱</el-col>
                                    <el-col :span="20">4567890@163.com</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 手机号</el-col>
                                    <el-col :span="20">18767855487</el-col>
                                </el-row>
                            </li>

                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4" >微信</el-col>
                                    <el-col :span="20">767786345</el-col>
                                </el-row>
                            </li>
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4" >QQ</el-col>
                                    <el-col :span="20">897512143</el-col>
                                </el-row>
                            </li>
    </ul>
          
          <div class="btm mt20 pt20" v-if="type!=1">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">申请人/联系人信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">患者姓名  </el-col>
                                    <el-col :span="20">李晓明 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 姓名拼音 </el-col>
                                    <el-col :span="20">Li Xiaoming </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">性别  </el-col>
                                    <el-col :span="20">男 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">出生日期  </el-col>
                                    <el-col :span="20">1975-05-18 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 与申请人关系 </el-col>
                                    <el-col :span="20">父母 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">护照号  </el-col>
                                    <el-col :span="20">P45678134 </el-col>
                                </el-row>
                            </li>
                            
    </ul>
          </div>
          
          
          
          
          <div class="btm mt20 pt20"  v-if="type!=1">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">预约信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">预约医院  </el-col>
                                    <el-col :span="20">UPMC </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 医院地址 </el-col>
                                    <el-col :span="20">位于美国东北部宾夕法尼亚州 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">预约时间  </el-col>
                                    <el-col :span="20">2017.10.17 - 2017.10.23 </el-col>
                                </el-row>
                            </li>
                              
                            
    </ul>
          </div>
          
          
          
          
          
          <div class="btm mt20 pt20"  v-if="type!=1">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">疾病信息</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">疾病种类  </el-col>
                                    <el-col :span="20">心脑血管 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 首诊医院 </el-col>
                                    <el-col :span="20">浙江省第一人民医院 </el-col>
                                </el-row>
                            </li>
                              <li>
                                <el-row class="fz16">
                                    <el-col :span="4">主治医生  </el-col>
                                    <el-col :span="20">张军 </el-col>
                                </el-row>
                            </li>
                                <li>
                                <el-row class="fz16">
                                    <el-col :span="4">医生联系方式  </el-col>
                                    <el-col :span="20">13333333333 </el-col>
                                </el-row>
                            </li>
                            
    </ul>
          </div>
          
          
              <div class="btm mt20 pt20"  v-if="type!=1&&type!=2">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">材料要求</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li v-if="!$route.query.is_cfg">
                                <el-row class="fz16" >
                                    <el-col :span="4">病历  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li class="df_drrrtt" v-else>
                                <el-row class="fz16" >
                                    <el-col :span="4">*病历                    
                                  
        <el-tooltip class="item" effect="dark"  placement="top">
                <section slot="content">
            <p>· 病历</p> 
            </section>
        <i class="dx icon-iconset0143 fz20 z9 df_jh_deert sz"></i>
    </el-tooltip>
    
    </el-col>
                                    <el-col :span="12">
                
                <dange_up></dange_up>
                                    </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">xxxxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">xxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">xxxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                             
    </ul>
          </div>
           
          
            <div class="btm mt20 pt20"  v-if="$route.query.is_cfg">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">反馈及翻译材料</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                           
                       
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">提交材料  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4">医院反馈 <span class="fz12">(英文原件)</span>  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                                 <li>
                                <el-row class="fz16">
                                    <el-col :span="4"> 医院反馈 <span class="fz12">(中文翻译) </span> </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                             
    </ul>
          </div>
          
          
          
          
          
            <div class="btm mt20 pt20" v-if="type!=2">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">备注</span>
                       
                        </div>

                        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">备注  </el-col>
                                    <el-col :span="20">

    备注信息备注信息
                                </el-col>
                                </el-row>
                            </li>
                            
    </ul>
                
    </div>
          
          
          
          
    <div class="btm mt20 pt20" v-if="type==2">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">翻译员信息</span>
                       
                        </div>
        <ul class="sd_jh_deer">
                            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">汉译英翻译员  </el-col>
                                    <el-col :span="20">张三 </el-col>
                                </el-row>
                            </li>
            <li>
                                <el-row class="fz16">
                                    <el-col :span="4">英译汉翻译员  </el-col>
                                    <el-col :span="20">李四 </el-col>
                                </el-row>
                            </li>
    </ul>
                     
    </div>
          
         
          
              <div class="btm mt20 pt20" v-if="type==2">
            <div class="sd_jhg_dere fz16">
                            <span class="cz">相关材料</span>
                       
                        </div>
                  <p class="fz16 b mt20  ">原始材料</p>
                  
                    <ul class="sd_jh_deer">
                            <li >
                                <el-row class="fz16" >
                                    <el-col :span="4">病历  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                        <li >
                                <el-row class="fz16" >
                                    <el-col :span="4">xxxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                        <li >
                                <el-row class="fz16" >
                                    <el-col :span="4">xxxx  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                        
    </ul>
                  
                       <p class="fz16 b mt20  ">汉译英文件</p>
                  
                  
                    <ul class="sd_jh_deer">
                            <li >
                                <el-row class="fz16" >
                                    <el-col :span="4">病历汉译英翻译  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                      
                        
    </ul>
                  
                  
                                  <p class="fz16 b mt20  ">医院反馈文件</p>
                  
                  
                    <ul class="sd_jh_deer">
                            <li >
                                <el-row class="fz16" >
                                    <el-col :span="4">医院英文反馈  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                      
                        
    </ul>
                  
                  
                                        <p class="fz16 b mt20  ">英译汉文件</p>
                  
                  
                    <ul class="sd_jh_deer">
                            <li >
                                <el-row class="fz16" >
                                    <el-col :span="4">医院反馈英译汉翻译  </el-col>
                                    <el-col :span="20">
    <el-row :gutter="20">
        <el-col :span="5">56789.jpg</el-col>
     <el-col :span="19"><ins class="ls">下载</ins></el-col>
    </el-row>
    
                                </el-col>
                                </el-row>
                            </li>
                      
                        
    </ul>
                  
                  
    </div>
          
        
          
          
    </div>
        
</template>
<script>
    import dange_up from "./dange_up"
    export default {
        props: {
            type: ""
        },
        data() {
            return {

            }
        },
        components: {
            dange_up
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>
  .df_drrrtt{
     margin-bottom: 10px;
    }
</style>
<style scoped>
    .df_jh_deert {
        position: relative;
        right: inherit;
        left: 0px;
        top: 2px;
    }
  
</style>

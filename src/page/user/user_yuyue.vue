<!--预约详情-->
<template>
	<div >
		  <top_er index_d="0"></top_er>

            <div class="wd1">
        <div class="wd mt20">

            <div class="bgff dfs_jh_drer fz20">
                <p class=" ls">
                    正在预约
                    <span class="ml10 fz14 z6">预约编号：201805100001</span>
                </p>
                
                <div class="mt15 pt15 btm">
                      <div class="sd_jhg_dere fz16">
                            <span class="cz">当前进度</span>
                            
                        </div>
                    <div class="mt30 df_deeert">
                        <div class="sd_deerrttx ">
                                <span class="act">预约申请</span>
                              <span>资料翻译</span>
                              <span>医院反馈</span>
                              <span>预约评价</span>
                              <span>完成</span>
                        </div>
                        
                    </div>
                    
                    <p class="fz14">
                    <span class="yj sd_deeert pr cz mr5"></span>
                        <span class="cz">您提交了预约申请</span>
                    </p>
                    
                    </div>
                
                <div class="mt15  btm">
        <yuyueqeren></yuyueqeren>
    </div>
                
                
            <section class="mt40">
            <el-button type="primary" @click="hf('wodeyuyue')">返回预约列表</el-button>
    </section>
                
                
                
    </div>
    </div>
    </div>
        
	</div>
</template>
<script>
    import top_er from "../../components/top_er"
    import yuyueqeren from "../../components/yuyueqeren"

    export default {
        data() {
            return {
                is_cfg:0
            }
        },
        components: {
            top_er,
            yuyueqeren
        },
        methods: {

        },
        mounted() {
            this.is_cfg= this.$route.query.is_cfg
        },
    }

</script>
<style scoped>
    .df_deeert {
        width: 440px;
        border-top: 1px solid #BFE5FC;
    }

    .sd_deerrttx {
        font-size: 16px;

        position: relative;
        bottom: 12px;
    }

    .sd_deerrttx span {
        padding: 5px 6px;
        background: #fff;
        margin-right: 16px;
        opacity: 1;
        color: #A7DCFB
    }

    .sd_deerrttx span:last-child {
        margin-right: 0px;
    }

    .sd_deerrttx span.act {
        opacity: 1;
        color: #0099F6;
    }

    .sd_deeert {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #0099F6;
    }

    .sd_deeert:after {
        content: " ";
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto
    }

</style>

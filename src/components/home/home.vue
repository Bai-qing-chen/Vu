<template>
    <div>
        <el-container>
            <el-header id="nav_t">
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <img src="../../assets/logo.png" alt="">
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div class="grid-content bg-purple">
                            <h2 class="siz">电商后台管理系统</h2>
                        </div>
                    </el-col>
                    <el-col :span="1">
                        <div class="grid-content bg-purple">
                            <a href="" class="tc" @click.prevent="clearSS()">退出</a>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px" id="slider_c">
                    <el-menu
                        :unique-opened="true"
                        :router="true"
                        default-active="2"
                        class="el-menu-vertical-demo"
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>用户列表</span>
                                    </template>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>权限管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>角色列表</span>
                                    </template>
                                </el-menu-item>
                                <el-menu-item index="2-2">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>角色列表</span>
                                    </template>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>商品管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>商品列表</span>
                                    </template>
                                </el-menu-item>
                                <el-menu-item index="3-2">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>分类参数</span>
                                    </template>
                                </el-menu-item>
                                <el-menu-item index="3-3">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>商品分类</span>
                                    </template>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>订单管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="4-1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>订单列表</span>
                                    </template>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>数据统计</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="5-1">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>数据报表</span>
                                    </template>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main id="admin_co">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    beforeCreate(){
            const token = sessionStorage.getItem('token',token)
            if(!token){
                this.$http.push({
                    name:'login'
                })
                this.$message.warning('请先登录')
            }
    },
  methods: {
    /*清除ses*/
    clearSS() {
      sessionStorage.clear();
      this.$router.push({
        name: "login"
      });
      this.$message.success("退出成功");
    }
  }
};
</script>

<style>
#nav_t {
  background-color: #b3c0d1;
}
#slider_c {
  background-color: #d3dce6;
}
#admin_co {
  background-color: #e9eef3;
  height: 100%;
}
/*电商*/
.siz {
  text-align: center;
  color: #ffff;
}
/*
退出按钮
*/
.tc {
  line-height: 60px;
}
</style>

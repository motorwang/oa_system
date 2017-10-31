<template>
    <div class="fullpage">
        <el-container>
            <el-header>公司logo占位</el-header>
            <el-container>
                <el-aside width="200px">左侧栏</el-aside>
                <el-container>
                    <el-main>右侧栏</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          /* 1-1 */
          label: "日报",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          /* 1-2 */
          label: "周报",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          /* 1-3 */
          label: "查看日报",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            }
          ]
        },
        {
          /* 1-4 */
          label: "查看周报",
          children: [
            {
              label: "二级 3-1"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      //   console.log(data);
    }
  }
};
</script>

<style scoped>
html {
    height: 100%;
    background-color: #fff;
}
body {
    height: 100%;
    background-color: #fff;
}
.fullpage {
    height: 100%;
    background-color: #fff;
}
/* 头部 */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/* 左侧栏 */
.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}   
.el-tree {
    width: 180px;
    /* 禁止选中文字 */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* 右侧栏 */
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>


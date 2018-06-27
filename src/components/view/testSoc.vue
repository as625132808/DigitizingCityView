<template>
  <div>
    <button @click="sendByUser"> 发送(admin发给admin2)</button>
    <button @click="sendAll"> 广播给所有人</button>
    <button @click="test"> 测试后台</button>
    <div>{{this.$store.getters.getSocketMsgByUser}}</div>
    <div>{{this.$store.getters.getSocketSendAll}}</div>
    <el-button type="primary" @click='out'>导出</el-button>
  </div>
</template>

<script>
// import fileSave from "file-saverjs";
require("assets/js/jszip.min.js");
require("script-loader!better-xlsx/dist/xlsx.js");
require("script-loader!assets/js/FileSaver");
//require("script-loader!xlsx-style/dist/xlsx.full.min.js");
//import XLSXStyle from "xlsx-style";
export default {
  data() {
    return {
      abc: "",
      tmpDown: "",
      jsono: [{
        "id": 1,"合并的列头1": "数据11","合并的列头2": "数据12","合并的列头3": "数据13","合并的列头4": "数据14",}, {
        "id": 2,"合并的列头1": "数据21","合并的列头2": "数据22","合并的列头3": "数据23","合并的列头4": "数据24",}] ,
      jsono1: [[
        "id", 1,"合并的列头1", "数据11","合并的列头2", "数据12","合并的列头3", "数据13","合并的列头4", "数据14",],[
        "id", 1,"合并的列头1", "数据11","合并的列头2", "数据12","合并的列头3", "数据13","合并的列头4", "数据14",]]
    };
  },
  created() {},
  sockets: {
    abc(value) {
      console.log("页面接收sockets:", value);

      this.abc = value;
    }
  },
  methods: {
    out() {
      this.downloadExl(this.jsono);
    },
    downloadExl(json, type) {
      const wopts = { bookType: 'xlsx', bookSST: true, type: 'binary' };
      var tmpdata = json[0]; json.unshift({});
      var keyMap = []; //获取keys
       for (var k in tmpdata) {
         keyMap.push(k); json[0][k] = k;
       }
       var tmpdata = [];//用来保存转换好的json
       json.map((v, i) =>
         keyMap.map((k, j) =>
           Object.assign({},
             { v: v[k], position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)}
             ))).reduce((prev, next) =>
         prev.concat(next)).forEach((v, i) => tmpdata[v.position] = { v: v.v });
       var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
   tmpdata["!cols"]=[{wpx: 267}]
//      tmpdata["s"]={
//        "!row" : [{hpx: 367}]
//      },
//
      tmpdata['!rows'] =[
        {hpx: 312}, // "points"
      ];
      tmpdata["!merges"] = [{ s: { c: 1, r: 0 }, e: { c: 4, r: 0 } }];//<====合并单元格
     //tmpdata["B1"].s = { font: { sz: 14, bold: true, color: { rgb: "ff000000" } }, fill: { bgColor: { indexed: 64 }, fgColor: { rgb: "00ff00" },alignment: {horizontal: "center" ,vertical: "center"} } };//<====设置xlsx单元格样式
       var tmpWB = { SheetNames: ['mySheet'], //保存的表标题
           Sheets: { 'mySheet': Object.assign({},
             tmpdata, //内容
              { '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1], //设置填充区域
                 },
//             {'!row':{}}
                 ) } };
//      return;
      console.log(888,tmpWB)
     var  tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB, { bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary' }//这里的数据是用来定义导出的格式类型
       ))], { type: "" });
     saveAs(tmpDown, "这里是下载的文件名" + '.' + (wopts.bookType == "biff2" ? "xls" : wopts.bookType));

    },
//字符串转字符流
    s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    },
    down(data){
      var file = new xlsx.File();
      var sheet = file.addSheet('Sheet1');
      const row = sheet.addRow();
      const cell = row.addCell();

      cell.value = 'I am a cell!';
      cell.hMerge = 2;
      cell.vMerge = 1;

      const style = new xlsx.Style();

      style.fill.patternType = 'solid';
      style.fill.fgColor = '00FF0000';
      style.fill.bgColor = 'FF000000';
      style.align.h = 'center';
      style.align.v = 'center';

      cell.style = style;

      file
        .saveAs()
        .pipe(fs.createWriteStream(__dirname + '/simple.xlsx'))
        .on('finish', () => console.log('Done.'));
    },
      // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
    getCharCol(n) {
      let temCol = "",
        s = "",
        m = 0;
      while (n > 0) {
        m = n % 26 + 1;
        s = String.fromCharCode(m + 64) + s;
        n = (n - m) / 26;
      }
      return s;
    },

    async test() {
      // const startTime = new Date().getTime();
      // const res = await this.$http.post('/index/getTest', {});
      // console.log(res, 2323);
      // const endTime = new Date().getTime();
      // console.log((endTime - startTime) / 1000);
      this.$socket.emit("testEvent", { result: { name: "广播" } });
    },
    //发送
    sendByUser() {
      //指定发送
      this.$socket.emit("sendMsgByUser", {
        userIds: ["04a7cf60-e4a6-11e7-81e2-315e0fb62de4"],
        result: { name: "user" }
      });
      //向所有客户端发
      // this.$socket.emit('sendAll', {name: 'ff'});
    },
    //群发
    sendAll() {
      this.$socket.emit("sendAll", { result: { name: "广播" } });
    },
    //自己对着自己发
    send() {
      this.$socket.emit("send", { result: { name: "单发信息" } });
    }
  }
};
</script>



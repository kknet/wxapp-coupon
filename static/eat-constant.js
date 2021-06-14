!function() {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = exports.DEFAULT_FOOD_LIST = [ "火锅", "粤菜", "沙县小吃", "蒸菜", "酸辣粉", "涮羊肉", "油泼面", "干拌面", "湘菜", "东北菜" ], t = (exports.eatTextColor = [ "#F29B76", "#F39800", "#993E3D", "#FFD986", "#AD9158", "#B96C0C", "#D1D8A0", "#A6B888", "#F74021" ], 
    exports.StorageKey = {
        FOOD_LIST: "FOOD_LIST"
    }, exports.generateRandomFood = function() {
        return e[Math.floor(e.length * Math.random())];
    }, exports.generateRandomName = function() {
        return t[Math.floor(t.length * Math.random())] + "*";
    }, [ "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹" ]);
}();
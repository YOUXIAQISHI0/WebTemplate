/**
 * TODO 本功能需要layer和jquery插件的支持； 本功能为二次开发。
 * @see 源文件地址：http://sc.chinaz.com/jiaobendemo.aspx?downloadid=0201785541739
 */
var layer;
layui.use('layer', function () {
    layer = layui.layer;
});

function main() {
    if (typeof (layer) != "object" || !layer) {
        setTimeout("main()", 400);
        return;
    }
    var myCalendar = new SimpleCalendar('#calendar', {
        width: '100%',
        height: '500px',
        language: 'CH', //语言
        showLunarCalendar: true, //阴历
        showHoliday: false, //休假-暂时禁用
        showFestival: true, //节日
        showLunarFestival: true, //农历节日
        showSolarTerm: true, //节气
        showMark: true, //标记
        realTime: true, //具体时间
        timeRange: {
            startYear: 2002,
            endYear: 2049
        },
        mark: {},
        markColor: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],//记事各个颜色
        main: function (year, month) {
            // alert("[获取数据]" + year + "--->" + month);
            var index = -1;
            if (layer) index = layer.msg('正在查询数据......', {icon: 16, shade: 0.6});
            //@-这里获取数据：
            console.log(year + "--->" + month);

            //模拟获取数据start
            var resultObj = {}, status = ['待揽收', '已发货', '配送中', '已签收'];
            for (var i = 1; i <= 28; i++) {
                var array = [];
                var date = year + "-" + month + "-" + (i < 10 ? '0' + i : i);
                for (var num = 0; num <= i % 4; num++)
                    array.push({
                        title: '第' + (num + 1) + '个货区某个快递在该天需要处理的事情呀呀呀',
                        name: '某区',
                        ratio: (num + 1) * (num + 1) + '%',
                        status: num,
                        statusText: status[num]
                    });
                resultObj[date] = i == 27 ? [] : array;
            }
            console.log(resultObj);
            //模拟获取数据end

            if (layer) layer.close(index);
            return resultObj;
        },
        timeupdate: false,//显示当前的时间HH:mm
        theme: {
            changeAble: false,
            weeks: {
                backgroundColor: '#FBEC9C',
                fontColor: '#4A4A4A',
                fontSize: '20px',
            },
            days: {
                backgroundColor: '#ffffff',
                fontColor: '#565555',
                fontSize: '24px'
            },
            todaycolor: 'orange',
            activeSelectColor: 'orange',
        }
    });
}

main();

// 初始化表单模块
layout = 0;
function initCustomFormGiant(moduleId, layout, options) {
    this.layout = layout;
    options = options || {};
    options.lang = options.lang || {};
    setTimeout(function () { //延时初始化是因为表单模块可能会放到swiper里，而swiper如果启用loop,会克隆一些DOM，这可能会导致初始化有问题
        $('.module_' + moduleId).each(function (i, item) {
            var module = $(item).closest(".ModuleItem");
            module['instanceId'] = parseInt(Math.random() * 100000000);
            //TODO: 做到单选、多选、下拉三者分离
            // 单选、多选、下拉处理
            if (module.find('.customFormRadio, .customFormCheckbox, .customFormSelectValue').length > 0) {
                initCustomFormSomeFieldItems(module, layout, options);
            }

            // 初始化时间
            if (module.find('.customFormDatetime').length > 0) {
                initCustomFormDateTime(module);
            }

            // 初始化地区选择
            if (module.find('.customFormRegion').length > 0) {
                initCustomFormRegionSelector(module);
            }

            // 初始化上传
            if (module.find('.customFormFile').length > 0) {
                initCustomFormFileUpload(module, options);
            }
            // 初始化图片上传
            if (module.find('.customFormImg').length > 0) {
                initCustomFormImgUpload(module, options);
            }
            //解决pc多选和单选右边间距问题
            if (layout = '102') {
                var inFormListCheckBox = module.find('.in-formList-checkbox');
                if (inFormListCheckBox.length > 0) {
                    inFormListCheckBox.each(function (idx, el) {
                        $(el).css({
                            'margin-left': $(el).siblings('.content-title').outerWidth(true) + 10
                        })
                    })
                }
            }
            // 初始化验证码
            var vImg = module.find(".vCodeImg");
            if (vImg.length > 0) {
                var vCode = module.find("[name=vCode]");
                if (vCode.length > 0) {
                    vCode.on("click", function () {
                        if (vImg.attr("src") == "") {
                            vImg.attr("src", "/index.php?c=validatecode&t=" + Math.random());
                            vImg.show();
                            module.find(".refreshVCode").show();
                        }
                    });
                }
            }
            // 初始化表单验证
            initCustomFormValidate(module, options);
        });
    }, 1000);
}

// 初始化单选、多选、下拉组件
function initCustomFormSomeFieldItems(module, layout, options) {
    var currentData = null;

    // 手机弹出层，返回或确定执行的代码
    var GoBack = function (el) {
        $(el).closest('.customFormFieldItem').find('.InsidePage').hide();
        if ($(el).attr('data') == 'back') {
            return;
        };
        var value = '';
        /*如果不是单选(下拉)是多选*/
        if (!$(el).hasClass('ensure-radio')) {
            var valueText = null;
            var values = [];
            $(el).closest('.customFormFieldItem').find('.InsidePage-list :checkbox:checked').each(function (idx, el) {
                var val = escapeValue($(el).val());
                values.push(val);
            });
            if (values.length <= 0) {
                valueText = options.lang.plz_select; // 请选择
            } else {
                valueText = (options.lang.n_items_have_been_selected || '').replace('{n}', values.length); // ('已选择' + values.length + '项')
            };
            // 手机版结果框同步值
            currentData.val(valueText);
            $(el).closest('.customFormFieldItem').find('.Pc-formList-content .customFormCheckbox').prop('checked', false);
            $(el).closest('.customFormFieldItem').find('.Pc-formList-content .customFormCheckbox').each(function () {
                for (var i = 0; i < values.length; i++) {
                    if (values[i] == $(this).val()) {
                        $(this).prop('checked', true);
                    }
                }
            });

        } else {
            $(el).closest('.InsidePage').find('.InsidePage-list-content').each(function (idx, el) {
                if ($(el).attr('thisData') == 'yes') {
                    value = $(el).attr('data-value');
                }
            });
            // 手机版结果框同步值
            currentData.val(value);
            // 单选同步值
            $(el).closest('.customFormFieldItem').find('.Pc-formList-content').find('.customFormRadio[value="' + value + '"]').prop('checked', true);
            // 下拉同步值
            var instance = $(el).closest('.customFormFieldItem').find('.Select_Simulate').data('select_simulate') || {};
            instance.setValue && instance.setValue(value);
        }
    }



    /*手机内页跳转*/
    module.find('.goToInsidePage').off('click').on('click', function () {
        currentData = $(this).find('.theData');
        module.find('.InsidePage').remove();
        var fieldType = $(this).attr('field-type');
        var fieldItem = $(this).closest('.customFormFieldItem');
        var title = fieldItem.find('.mobile-formList-content .Describ-text-color').text() || '';
        if (fieldType == 3 || fieldType == 4) {
            var items = null;
            if (fieldType == 3) {
                items = fieldItem.find('.customFormRadio');
            } else {
                items = fieldItem.find('.customFormSelectItem');
            }
            var html = '';
            html += '<div class="InsidePage" style="display:block;">';
            html += '<h3 class="InsidePage-title">';
            html += '<span data="back" class="backImg goBack">';
            html += '<img src="/skinp/modules/ModuleCustomFormGiant/images/back.png">';
            html += '</span>';
            html += '<span class="InsidePage-title-text">' + title + '</span>';
            html += '<span class="ensure ensure-radio">' + options.lang.select2 + '</span>';
            html += '</h3>';
            html += '<ul class="InsidePage-list InsidePage-list-radio">';
            items.each(function () {
                var val = escapeValue($(this).attr('value'));
                html += '<li class="InsidePage-list-content" data-value="' + val + '">' + val;
                html += '<span class="Describ-text-color CustomForm-icon-radio"><img src="/skinp/modules/ModuleCustomFormGiant/images/checkmack.png"></span>';
                html += '</li>';
            });
            html += '</ul>';
            html += '</div>';

            fieldItem.find('.mobile-formList-top').after(html);
        } else if (fieldType == 5) {
            var items = fieldItem.find('.customFormCheckbox');
            var html = '';
            html += '<div class="InsidePage" style="display:block;">';
            html += '<h3 class="InsidePage-title">';
            html += '<span data="back" class="backImg goBack">';
            html += '<img src="/skinp/modules/ModuleCustomFormGiant/images/back.png">';
            html += '</span>';
            html += '<span class="InsidePage-title-text">' + title + '</span>';
            html += '<span class="ensure">' + options.lang.select2 + '</span>';
            html += '</h3>';
            html += '<ul class="InsidePage-list">';
            items.each(function () {
                var val = escapeValue($(this).attr('value'));
                html += '<li class="InsidePage-list-content">';
                html += '<input type="checkbox" value="' + val + '">' + val;
                html += '</li>';
            });
            html += '</ul>';
            html += '</div>';
            fieldItem.find('.mobile-formList-top').after(html);
        }

        // 模拟返回
        module.find('.goBack').off('clcik').on('click', function () {
            GoBack(this);
        })
        // 确定按钮点击
        module.find('.ensure').off('clcik').on('click', function () {
            GoBack(this);
        });
        // 手机弹出层里选项点击选择事件
        module.find('.InsidePage-list-content').off('click').on('click', function () {
            if ($(this).closest('.customFormFieldItem').find('.ensure').hasClass('ensure-radio')) {
                /*单选*/
                $(this).closest('.InsidePage-list-radio').find('.InsidePage-list-content').find('.CustomForm-icon-radio').hide();
                $(this).closest('.InsidePage-list-radio').find('.InsidePage-list-content').attr('thisData', 'No');
                $(this).find('.CustomForm-icon-radio').show();
                $(this).attr('thisData', 'yes');
            } else {
                /*多选*/
                var inputCheckbox = $(this).closest('li').find('input[type="checkbox"]');
                if (inputCheckbox.is(':checked')) {
                    inputCheckbox.attr('checked', false);
                } else {
                    inputCheckbox.prop('checked', 'true');
                }
            }
        });
        module.find('.InsidePage-list-content input[type="checkbox"]').off('click').on('click', function () {
            if (!$(this).closest('.customFormFieldItem').find('.ensure').hasClass('ensure-radio')) {
                if ($(this).is(':checked')) {
                    $(this).prop('checked', false);
                } else {
                    $(this).prop('checked', true);
                }
            }
        })

        // 设置手机弹出层选中的值
        if (fieldType == 3) {
            if (fieldItem.find('.customFormRadio:checked').length > 0) {
                var val = escapeValue(fieldItem.find('.customFormRadio:checked').val());
                module.find('.InsidePage-list-content[data-value="' + val + '"]').click();
            }
        } else if (fieldType == 4) {
            var val = escapeValue(fieldItem.find('.customFormSelectValue').val());
            module.find('.InsidePage-list-content[data-value="' + val + '"]').click();
        } else if (fieldType == 5) {
            fieldItem.find('.customFormCheckbox:checked').each(function () {
                var val = escapeValue($(this).val());
                module.find('.InsidePage-list-content>:checkbox[value="' + val + '"]').parent().click();
            });
        }
    });

    // PC版单选选择
    module.find('.Pc-formList-content .customFormRadio').off('change').on('change', function () {
        var val = $(this).val();
        $(this).closest('.customFormFieldItem').find('.theData').val(val);
    });

    // PC版多选选择
    module.find('.Pc-formList-content .customFormCheckbox').off('change').on('change', function () {
        var val = $(this).val();
        var count = $(this).closest('.customFormFieldItem').find('.Pc-formList-content .customFormCheckbox:checked').length;
        if (count <= 0) {
            valueText = options.lang.plz_select; // 请选择
        } else {
            valueText = (options.lang.n_items_have_been_selected || '').replace('{n}', count); // ('已选择' + values.length + '项')
        };
        $(this).closest('.customFormFieldItem').find('.theData').val(valueText);
    });

    // 初始化下拉框插件
    if (module.find('.customFormSelectValue').length > 0) {
        if ($.inArray(Number(layout), [102, 103, 104]) > -1) {
            var num = Number(layout) - 100;
            loadStyleSheet('/scripts/widget/Select_Simulate/Select_Simulate-layout' + num + '.css');
        } else {
            loadStyleSheet('/scripts/widget/Select_Simulate/Select_Simulate.css');
        }
        addScript('/scripts/widget/Select_Simulate/Select_Simulate.js', function () {
            module.find('.Select_Simulate').each(function () {
                var instance = new Select_Simulate({
                    selector: this,
                    select: function (val) {
                        $(this).closest('.customFormFieldItem').find('.theData').val(val).text(val);
                    }
                });
                $(this).data('select_simulate', instance);
            });
        });
    }
}

// 值处理
function escapeValue(val) {
    return (val || '').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// 初始化时间组件
function initCustomFormDateTime(module) {

    /*pc端时间插件*/
    loadStyleSheet('/content/jQuery/jquery.datetimepicker.css');
    addScript('/scripts/jQuery/jquery.datetimepicker.js', function () {
        module.find('.customFormDatetime').datetimepicker({
            dayOfWeekStart: 1,
            lang: 'ch',
            format: 'Y-m-d',
            timepicker: false,
            onChangeDateTime: function (date, elem) {
                if (!date) return;
                var sMoths = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
                var sdata = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
                var val = date.getFullYear() + '-' + sMoths + '-' + sdata;
                module.find('.choose-time-mobile').text(val);
                module.find('.chooseTime').attr('value', val);
            }
        });
    });
    /*移动度时间插件*/
    loadStyleSheet('/scripts/ioscalendar/FJL.picker.css');
    loadStyleSheet('/scripts/ioscalendar/FJL.xiugai.css');
    addScripts(['/scripts/ioscalendar/FJL.min.js', '/scripts/ioscalendar/FJL.picker.min.js'], function () {
        (function ($) {
            $.init();
            var btns = module.find('.chooseTime'); //规定触发的元素
            btns.each(function (i, btn) {
                btn.addEventListener('tap', function () {
                    var options = {
                        "type": "date", //date,datetime
                        "beginYear": 1950, //开始年份
                        "endYear": 2050, //结束年份
                        "beginMonth": 1, //开始月份
                        "endMonth": 12 //结束月份
                    };
                    var id = this.getAttribute('id');
                    var picker = new $.DtPicker(options); //初始化
                    var val = this.getAttribute('value');

                    if (val) {
                        picker.setSelectedValue(val); //设置默认值
                    }
                    var _this = this;
                    picker.show(function (rs) {
                        _this.children[0].innerText = rs.text;
                        _this.setAttribute('value', rs.text);
                        jQuery(_this).closest('.customFormFieldItem').find('.customFormDatetime').val(rs.text);
                        picker.dispose();
                    });
                }, false);
            });
        })(mui);
    });
}

// 初始化地区选择组件
function initCustomFormRegionSelector(module) {
    var formElem = module.find("form");
    var moduleId = formElem.find("[name=ModuleID]").val();
    /*pc端地区插件*/
    addScripts(['/scripts/mobileCityPicker/js/city-picker.data.js', '/scripts/cityselect/Region2.js'], function () {
        module.find('.customFormFieldItem .pcCitybox').each(function () {
            //重设几个下拉框的ID值，避免表单放有swipwer里，被swipwer的loop复制了对象时产生冲突
            var provinceElemC = module.find('select[name=selProvince]');
            var selProvinceId = provinceElemC.attr('id') + module['instanceId'];
            provinceElemC.attr('id', selProvinceId);

            var cityElemC = module.find('select[name=selCity]');
            var selCityId = cityElemC.attr('id') + module['instanceId'];
            cityElemC.attr('id', selCityId);

            var areaElemC = module.find('select[name=selArea]');
            var selAreaId = areaElemC.attr('id') + module['instanceId'];
            areaElemC.attr('id', selAreaId);

            var setRegionValue = function (elem) {
                // 同步值到手机地区插件
                var cityBox = $(elem).closest('.pcCitybox');
                var provinceElem = cityBox.find('#' + selProvinceId);
                var cityElem = cityBox.find('#' + selCityId);
                var areaElem = cityBox.find('#' + selAreaId);

                var provinceCode = provinceElem.val();
                var provinceIndex = window.cityPicker.getAreaInfo(ChineseDistricts[86], provinceCode);
                var cityCode = cityElem.val();
                var cityIndex = cityCode ? window.cityPicker.getAreaInfo(ChineseDistricts[provinceCode], cityCode) : 0;
                var areaCode = areaElem.val();
                var areaIndex = areaCode ? window.cityPicker.getAreaInfo(ChineseDistricts[cityCode], areaCode) : 0;
                var cityListId = module.find('ul[id^=cityList]').attr('id');
                //$.mobiscroll.instances[cityListId].setArrayVal([provinceIndex, cityIndex, areaIndex]);

                // 获取选择地区的完整的名称
                var provinceName = provinceElem.find('option:selected').text();
                var cityName = cityElem.find('option:selected').text();
                var areaName = areaElem.find('option:selected').text();
                var wholdName = '';
                if (provinceCode) {
                    wholdName += provinceName;
                    if (cityCode) {
                        wholdName += ' ' + cityName;
                        if (areaCode) {
                            wholdName += ' ' + areaName;
                        }
                    }
                }

                // 设置表单值
                $(elem).closest('.customFormFieldItem').find('[name^=col]').val(wholdName);

                // 设置手机显示的值
                $(elem).closest('.customFormFieldItem').find('.mobile-formList-content .cityval').html(wholdName);
            };

            var instance = AreaSelector({
                selProvinceId: selProvinceId,
                selCityId: selCityId,
                selAreaId: selAreaId,
                onProvinceChange: function () {
                    setRegionValue(this);
                },
                onCityChange: function () {
                    setRegionValue(this);
                },
                onAreaChange: function () {
                    setRegionValue(this);
                }
            });

            $(this).data({ areaSelector: instance });
        });
    });

    /*移动端地区插件*/
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.animation.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.frame.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.frame.ios.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.frame.jqm.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.frame.wp.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.scroller.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.scroller.ios.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/mobiscroll.image.css');
    loadStyleSheet('/scripts/mobileCityPicker/css/Mobilecityxuigai.css');
    addScripts([
        '/scripts/mobileCityPicker/js/mobiscroll.core.js',
        '/scripts/mobileCityPicker/js/mobiscroll.frame.js',
        '/scripts/mobileCityPicker/js/mobiscroll.scroller.js',
        '/scripts/mobileCityPicker/js/mobiscroll.listbase.js',
        '/scripts/mobileCityPicker/js/mobiscroll.treelist.js',
        '/scripts/mobileCityPicker/js/i18n/mobiscroll.i18n.zh.js',
        '/scripts/mobileCityPicker/js/city-picker.data.js',
        '/scripts/mobileCityPicker/js/mobile-cityPicker.js'
    ], function () {
        module.find('ul[id^=cityList' + moduleId + ']').each(function () {
            $(this).attr('id', $(this).attr('id') + module['instanceId']);
            $.mobileCityPicker({
                id: $(this).attr('id'), //容器id
                inputClass: 'cityPickerInput', //
                inputClick: true,
                option: {
                    defaultValue: [0, 0, 0], //默认选项{编号}
                    label: ['province', 'city', 'district'],
                    theme: 'ios', //风格
                    mode: 'scroller', //表现形式
                    inputClass: 'hidden',
                    display: 'bottom', //模式
                    lang: 'zh', //语言
                },
                callback: function (val, citys, el) {
                    // 清除在微信打开时出现两次回调的问题
                    citys.join('') && setCallBack(val, citys, el);
                }
            })
        });
        function setCallBack(val, citys, el) {
            var arr = val.split(' ');
            var provinceCode = window.cityPicker.getAreaCode(window.ChineseDistricts[86], arr[0]);
            var cityCode = arr.length > 1 ? window.cityPicker.getAreaCode(window.ChineseDistricts[provinceCode], arr[1]) : '';
            var areaCode = arr.length > 2 ? window.cityPicker.getAreaCode(window.ChineseDistricts[cityCode], arr[2]) : '';
            // 同步值到PC地区插件
            var areaSelector = $(el).closest('.customFormFieldItem').find('.pcCitybox').data('areaSelector');
            // 微信打开页面偶尔为undefined
            areaSelector && areaSelector.initProvince(provinceCode, cityCode, areaCode);
            // 设置表单值
            $(el).closest('.customFormFieldItem').find('[name^=col]').val(citys.join(' '));
            // 设置显示的值
            $(el).closest('.customFormFieldItem').find('.cityval').html(citys.join(' '));
        }
    });
}

// 初始化上传组件
function initCustomFormFileUpload(module, options) {

    addScript('/framework/ref/scripts/jquery.ajaxfileupload.js', function () {
        module.find('.customFormFile').off('change').on('change', function () {
            var val = $(this).val();
            var fieldItem = $(this).closest('.customFormFileFieldItem')
            if (!/\.(pdf|doc|docx|txt|csv|xls|xlsx|rar|zip)$/i.test(val)) {
                fieldItem.find('.Browse-file-input').val("");
                alert(options.lang.upload_incorrect_type_file+'，'+options.lang.optional_format+'：pdf|doc|docx|txt|csv|xls|xlsx|rar|zip'); // 上传文件类型有误
                return false;
            }
            uploadCustomForm(module, $(this), options, 'file');
        });
    });
}

// 初始化图片上传组件
function initCustomFormImgUpload(module, options) {
    addScript('/framework/ref/scripts/jquery.ajaxfileupload.js', function () {
        module.find('.customFormImg').off('change').on('change', function () {
            var val = $(this).val();
            var fieldItem = $(this).closest('.customFormImgFieldItem')
            if (!/\.(jpg|gif|png|jpeg)$/i.test(val)) {
                fieldItem.find('.Browse-file-input').val("");
                alert(options.lang.upload_incorrect_type_file+'，'+options.lang.optional_format+'：jpg|gif|png|jpeg'); // 上传文件类型有误
                return false;
            }
            uploadCustomForm(module, $(this), options, 'img');
        });
    });
}

//上传附件初始化关闭附件按钮
function closeuploadForm(module, fileElem, options) {

    var fieldItem = fileElem.closest('.customFormFieldItem');
    fieldItem.find('.fileclose').off('click').on('click', function () {
        fieldItem.find('.UploadFileSpan').hide();
        fieldItem.find('.UploadFileSpan').html('');
        fieldItem.find('[name^=col]').val('');
        fieldItem.find('.Browse-file').show();
        var file = fieldItem.find('.Browse-file').html();
        var id = fieldItem.find('.Browse-file').attr("id");
        fieldItem.find('.Browse-file').replaceWith('<span id="' + id + '" class="Browse-file">' + file + '</span>');
        initCustomFormFileUpload(module, options);
    })
}
//上传图片初始化关闭图片按钮
function closeuploadimgForm(module, fileElem, options) {

    var fieldItem = fileElem.closest('.customFormFieldItem');
    fieldItem.find('.imgclose').off('click').on('click', function () {
        fieldItem.find('.customform-upload-img-preview').remove();
        fieldItem.find('[name^=col]').val('');
        fieldItem.find('.Browse-file').show();
        var file = fieldItem.find('.Browse-file').html();
        var id = fieldItem.find('.Browse-file').attr("id");
        fieldItem.find('.Browse-file').replaceWith('<div id="' + id + '" class="Browse-file Browse-file-img">' + file + '</div>');
        initCustomFormImgUpload(module, options);
    })
}

// 触发上传
function uploadCustomForm(module, fileElem, options, type) {
    //上传时加入遮罩层
    var html = '<div class="loadingPanel" style="width: 100%; height: 100%;position: fixed;top: 0;left: 0;opacity: 0.9;background: #999;text-align: center;z-index:999999;">';
    html += '<div style="position: absolute;top: 50%;width:100%">';
    html += '<p><i class="fa fa-spinner fa-spin" style="font-size: 30px;margin-bottom: 10px;';
    html += '"></i></p>';
    html += '<p>' + options.lang.uploading_and_wait_a_moment + '</p>'; // 上传中，请稍后...
    html += '</div>';
    html += '</div>';
    $('body').append(html);

    var fieldItem = fileElem.closest('.customFormFieldItem');
    //隐藏上传按钮
    fieldItem.find('.Browse-file').hide();

    //调用上传组件
    $.ajaxFileUpload({
        url: "/index.php?c=Front/CustomForm&a=uploadfile", //用于文件上传的服务器端请求地址
        secureuri: false, //是否需要安全协议，一般设置为false
        fileElementId: fileElem, //文件上传域的j对象
        dataType: 'text', //返回值类型 一般设置为json
        success: function (data, status) //服务器成功响应处理函数
        {
            // 该死的uc手机浏览器，成功响应的话，会在返回文本中添加一段<script...>的代码
            // 使得ajaxFileUpload原生的eval方法出错
            // 所以dataType改成text，人工处理返回值，使得变会一个真正的json字符串
            if ((data || '').indexOf('<script') > -1) {
                data = data.replace(/<script[\w\W]+$/ig, '').trim();
            }
            eval("data = " + data);

            if (!data.success) {
                fieldItem.find('[name^=col]').val('');
                alert(data.msg);
                return;
            }

            fieldItem.find('.Browse-file-input').val(data.newfile.replace(/.*\//g, ''));
            fieldItem.find('[name^=col]').val(data.newfile);
            //接口返回是图片类型
            if (type == 'img') {
                var html = '';
                html += '<div class="customform-upload-img-preview">';
                html += '<img  src="' + data.newfile + '" />';
                html += '<span title="可点击关闭"  class="iconfont imgclose" style="right: -9px; cursor: pointer;position: absolute; top: -10px;" >&#xe7be;</span>';
                html += '</div>';

                if (layout == '102') {
                    fieldItem.find('.in-formList-img').append(html);
                } else if (layout == '104') {
                    fieldItem.find('.file-operation').append(html);
                } else if (layout == '103') {
                    var html = '';
                    html += '<span class="customform-upload-img-preview">';
                    html += '<img  src="' + data.newfile + '" />';
                    html += '<span title="可点击关闭"  class="iconfont imgclose" style="right: -27px; cursor: pointer;position: absolute; top: -30px;" >&#xe7be;</span>';
                    html += '</span>';
                    fieldItem.find('.file-operation').append(html);
                }
                else {
                    $(html).appendTo(fieldItem);
                }

                closeuploadimgForm(module, fieldItem, options)
            } else {
                fieldItem.find('.UploadFileSpan').css('display', 'flex');
                fieldItem.find('.UploadFileSpan').css('justify-content', 'center');
                fieldItem.find('.UploadFileSpan').css('align-items', 'center');
                var html = '';
                html += '<span class="iconfont iconfont-fujian">&#xe7c1;</span><span class="customform-upload-file-preview">' + data.newfile.replace(/.*\//g, '') + '</span><span style=" cursor: pointer;" title="可点击关闭" class="iconfont fileclose" >&#xe7be;</span>';
                fieldItem.find('.UploadFileSpan').html(html);
                closeuploadForm(module, fieldItem, options)
            }
        },
        error: function (data, status, e) //服务器响应失败处理函数
        {
            alert("发生异常，可能文件太大");
            fieldItem.find('.Browse-file').show();
            if (type == 'img') {
                var file = fieldItem.find('.Browse-file').html();
                var id = fieldItem.find('.Browse-file').attr("id");
                fieldItem.find('.Browse-file').replaceWith('<div id="' + id + '" class="Browse-file Browse-file-img">' + file + '</div>');
                initCustomFormImgUpload(module, options);
            }
            else {
                var file = fieldItem.find('.Browse-file').html();
                var id = fieldItem.find('.Browse-file').attr("id");
                fieldItem.find('.Browse-file').replaceWith('<span id="' + id + '" class="Browse-file">' + file + '</span>');
                initCustomFormFileUpload(module, options);
            }
        },
        complete: function (data) {
            // 移除loading层
            $('.loadingPanel').remove();
        }
    });
}

// 初始化表单验证
function initCustomFormValidate(module, customFormOptions) {
    addScript('/share/global.js', function () {
        var formElem = module.find("form");
        // 绑定表单验证
        var options = {
            ignore: '',
            rules: {},
            messages: {},
            errorElement: 'p',
            errorClass: 'invalid',
            errorPlacement: function (error, element) {
                $(error).appendTo($(element).closest('.customFormFieldItem')).addClass('CustomFormGiant-err');
            },
            showErrors: function (errorMap, errorList) {
                this.defaultShowErrors();
                for (var i = 0; i < errorList.length; i++) {
                    $(errorList[i].element).closest('.customFormFieldItem').addClass('CustomFormGiant-err-box');
                }
            },
            // onkeyup的时候去除空格显示
            onkeyup: false,
            onclick: false,
            onsubmit: true,
            onfocusout: function (element, event) {
                try {
                    //去除左侧空格
                    var value = $.trim(this.elementValue(element));
                    $(element).val(value);
                } catch (e) { }
            },
            submitHandler: function (form) {
                return submitCustomForm(module, customFormOptions);
            }
        }
        var validateOptions = getformValidateOptions(formElem, customFormOptions);
        options.rules = validateOptions.rules;
        options.messages = validateOptions.messages;
        formElem.validate(options);

        // 点击提交按钮提交表单
        module.find('.customFormSubmit').off('click').on('click', function () {
            $(this).closest('form').submit();
        });

        // 刷新验证码
        module.find('.refreshVCode').off('click').on('click', function () {
            var src = formElem.find('img.vCodeImg').attr('src').replace(/t=[^&]*/) + '&t=' + new Date().getTime();
            formElem.find('img.vCodeImg').attr('src', src);
        });
    });
}

// 获取表单验证参数（规则和对应的提示信息）
function getformValidateOptions(formElem, options) {
    if (!formElem && $(formElem).length == 0) {
        return {};
    }
    var rules = {};
    var messages = {};
    $(formElem).find('[name^=col], [name=vCode]').each(function (i, item) {
        var type = $(item).attr("type");
        var require = $(item).attr("isrequire");
        var ftype = $(item).attr("fieldtype");
        var vtype = $(item).attr("validatetype");
        var chname = $(item).attr("chname");
        var name = $(item).attr("name");
        rules[name] = {};
        messages[name] = {};

        if (ftype == '1' || ftype == '2') {
            if (require == '1') {
                rules[name]['required'] = true;
                messages[name]['required'] = options.lang.plz_fill_in_the_item; // '该项不能为空'
            }
            if (vtype == '2') {
                rules[name]['digits'] = true;
                messages[name]['digits'] = options.lang.plz_enter_numbers; //'请填写数字';
            }
            if (vtype == '3') {
                if (getCookie('Lang') == 'big5') {
                    //验证香港澳门号码
                     jQuery.validator.addMethod("custformMobile", function (value, element) {
                        return this.optional(element) || /^(5|6|8|9)\\d{7}$/.test($.trim(value));
                    });
                }else{
                    jQuery.validator.addMethod("custformMobile", function (value, element) {
                        return this.optional(element) || /^(1)\d{10}$/.test($.trim(value));
                    });
                }
                rules[name]['custformMobile'] = true;
                messages[name]['custformMobile'] = options.lang.mobileformat; // '手机号码格式不正确！'
            }
            if (vtype == '4') {
                jQuery.validator.addMethod("custformTel", function (value, element) {
                    return this.optional(element) || /^\d{3,4}\-\d{6,9}$/.test(value);
                });
                rules[name]['custformTel'] = true;
                messages[name]['custformTel'] = options.lang.plz_enter_correct_phone_number; //'请填写正确的电话号码，格式如区号-电话号码'
            }
            if (vtype == '5') {
                jQuery.validator.addMethod("custformTelOrMobile", function (value, element) {
                    return this.optional(element) || /^\d{3,4}\-\d{6,9}$/.test(value) || /^(1)\d{10}$/.test(value);
                });
                rules[name]['custformTelOrMobile'] = true;
                messages[name]['custformTelOrMobile'] = options.lang.plz_enter_the_correct_tel_or_mobile_number; // '请填写座机格式：区号-电话号码或手机号码'
            }
            if (vtype == '6') {
                rules[name]['email'] = true;
                messages[name]['email'] = options.lang.emailfomart; // '请填写正确的邮箱地址';
            }
            if (vtype == '7') {
                jQuery.validator.addMethod("custformIdcard", function (value, element) {
                    return this.optional(element) || /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value);
                });
                rules[name]['custformIdcard'] = true;
                messages[name]['custformIdcard'] = options.lang.plz_enter_the_correct_idcard_number; //'请填写正确的身份证'
            }
        } else if (ftype == '3' || ftype == '4') {
            if (require == '1') {
                rules[name]['required'] = true;
                messages[name]['required'] = options.lang.plz_select_one_of_these_items; //"请选择其中一项"
            }
        } else if (ftype == '5') {
            if (require == '1') {
                rules[name]['required'] = true;
                messages[name]['required'] = options.lang.plz_select_at_least_one_item; //"请至少选择一项"
            }
        } else if (ftype == '6') {
            if (require == '1') {
                rules[name]['required'] = true;
                messages[name]['required'] = options.lang.plz_select_a_file_to_upload; //'请选择文件上传'
            }
        } else if (ftype == '7') {
            if (require == '1') {
                rules[name]['required'] = true;
                messages[name]['required'] = options.lang.plz_select_the_region; // '请选择地区'
            }
        } else if (ftype == '8') {
            if (require == '1') {
                rules[name]['required'] = true;
                messages[name]['required'] = options.lang.plz_select_the_date; //'请选择日期'
            }
            jQuery.validator.addMethod("custformDate", function (value, element) {
                return this.optional(element) || /\d{4}-\d{2}-\d{2}/.test(value);
            });
            rules[name]['custformDate'] = true;
            messages[name]['custformDate'] = options.lang.the_date_is_not_in_the_correct_format; //'日期格式不正确'
        }

        if (vtype == '99') {
            var validateFunction = $(item).attr('validateFunction'); // 实际存在的函数方法名
            var validateFunctionName = 'validateFunction_' + name; // jquery.validate验证方法名
            var fieldName = chname || name; // 字段名称
            var errMsg = $(item).attr('validateErrMsg') || ('请正确填写' + fieldName); //通用的错误提示信息

            // 定义jquery.validate验证方法
            window[validateFunctionName] = function (value, element) {
                if (typeof window[validateFunction] != 'function') {
                    throw validateFunction + ' is not a function';
                }
                return window[validateFunction].call(window, value, element);
            }

            // 验证方法加入jquery.validate框架
            jQuery.validator.addMethod(validateFunctionName, function (value, element) {
                return this.optional(element) || window[validateFunctionName](value, element);
            }, errMsg);

            // 加入规则和提示信息
            rules[name][validateFunctionName] = name;
            messages[name][validateFunctionName] = function () {
                return window['validateErrMsg_' + name] || errMsg;
            }
        }
    });

    if ($(formElem).attr('id')) {
        window['jquery_validate_rules_' + $(formElem).attr('id')] = rules;
        window['jquery_validate_messages_' + $(formElem).attr('id')] = messages;
    }
    return {
        rules: rules,
        messages: messages
    };
}

// 提交表单
function submitCustomForm(module, options) {
    var formElem = module.find('form');
    formElem.find('.customFormSubmit').prop('disabled', true);
    formElem.find('.customFormSubmit').val(options.lang.form_submitting);

    var submitType = formElem.find('[name=submitType]').val();
    if (submitType != 'ajax') {
        if (window[formElem[0]] && window[formElem[0]].submitHandle) {
            return window[formElem[0]].submitHandle.call(this);
        }
        return true;
    }

    $('.customFormMask, .customFormLoading').remove();
    $('<div class="customFormMask" style="position:fixed;z-index:9999999;top:0px;left:0px;width:100%;height:100%;background:black;opacity:0.5;filter:alpha(opacity=50);zoom:1;"></div>').appendTo('body');
    $('<div class="customFormLoading" style="position:fixed;z-index:10000000;top:50%;left:50%;width:auto;height:100%;"><img src="/images/loading.gif"></div>');

    var data = formElem.serializeArray();
    var moduleId = formElem.find("[name=ModuleID]").val();
    $.ajax({
        type: "POST",
        url: "/index.php?c=Front/CustomForm&a=save",
        data: data,
        dataType: "json",
        success: function (json) {
            if (!json.success) {
                alert(json.msg);
                return;
            }

            // 提交完，重新加载表单
            $.get("/index.php?c=front/LoadModule&moduleId=" + moduleId, null, function (data) {
                module.replaceWith(data);
            });

            // 提示成功
            alert(options.lang.submit_success);

            // 若果有设置跳转链接，就跳转页面
            if (options.successRedirectUrl) {
                location = options.successRedirectUrl;
            }
        },
        error: function () {
            alert(options.lang.submit_failed);
            formElem.find('.customFormSubmit').prop('disabled', false);
            formElem.find('.customFormSubmit').text(formElem.find('.customFormSubmit').attr('btntext'));
        },
        complete: function () {
            if (arguments[1] == 'success' && arguments[0].responseJSON.success && options.successRedirectUrl) {
                return;
            }
            formElem.find('.customFormSubmit').prop('disabled', false);
            formElem.find('.customFormSubmit').text(formElem.find('.customFormSubmit').attr('btntext'));
            $('.customFormMask, .customFormLoading').remove();
            //刷新验证码
            var vcode = formElem.find('img.vCodeImg');
            if (vcode.length > 0) {
                var src = vcode.attr('src').replace(/t=[^&]*/) + '&t=' + new Date().getTime();
                vcode.attr('src', src);
            }
        }
    });
    return false;
}
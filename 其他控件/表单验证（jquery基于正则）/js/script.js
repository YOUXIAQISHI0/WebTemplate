//手机号
$(document).on('keyup', '.sjh', function () {
    if ($(".sjh").val().match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/) == null) {
        $('.a').fadeIn();
        $('.a').text("*请输入正确的手机号");
        $('.sjh').addClass('error_input');
        return;
    } else {
        var Users = (localStorage.getItem('Users') == null || JSON.parse(localStorage.getItem('Users')).length == 0) ? new Array() : JSON.parse(localStorage.getItem('Users'));
        for (var i = 0; i < Users.length; i++) {
            if ([i].UserName == $(this).val()) {
                $('.a').fadeIn();
                $('.a').text("*请输入正确的手机号");
                $('.sjh').addClass('error_input');
                return;
            }
        }
        $('.a').fadeOut();
        $('.a').text("");
        $('.sjh').removeClass('error_input');
    }
})
//密码
$(document).on('keyup', '.mm', function () {
    if ($('.mm').val().length <= 7) {
        $('.ab').fadeIn();
        $('.ab').text("*密码最少输入8位");
        $('.mm').addClass('error_input');
        return;
    } else {
        $('.ab').fadeOut();
        $('.ab').text("");
        $('.mm').removeClass('error_input');
    }
})
//重复密码
$(document).on('keyup', '.cfmm', function () {
    var mmm = $('.mm').val();
    if ($('.cfmm').val() != mmm) {
        $('.abc').fadeIn();
        $('.abc').text("*两次密码输入不一致");
        $('.cfmm').addClass('error_input');
        return;
    } else {
        $('.abc').fadeOut();
        $('.abc').text("");
        $('.cfmm').removeClass('error_input');
    }
})
//邮箱
$(document).on('keyup', '.yx', function () {
    if ($('.yx').val().match(/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/) == null) {
        $('.abcd').fadeIn();
        $('.abcd').text("请输入正确的邮箱");
        $('.yx').addClass('error_input');
        return;
    } else {
        $('.abcd').fadeOut();
        $('.abcd').text("");
        $('.yx').removeClass('error_input');
    }
})
//只能输入数字
$(document).on('keyup', '.znsz', function () {
    if (!$(".znsz").val().match(/^\d*$/)) {
        $('.abcde').fadeIn();
        $('.abcde').text("*只能输入纯数字");
        $('.znsz').addClass('error_input');
        return;
    } else {
        $('.abcde').fadeOut();
        $('.abcde').text("");
        $('.znsz').removeClass('error_input');
    }
})
//开头不能为0
$(document).on('keyup', '.ktbn', function () {
    if ($('.ktbn').val().match(/^[0]+[0-9]*$/gi)) {
        $('.abcdef').fadeIn();
        $('.abcdef').text("*开头不能为0");
        $('.ktbn').addClass('error_input');
        return;
    } else {
        $('.abcdef').fadeOut();
        $('.abcdef').text("");
        $('.ktbn').removeClass('error_input');
    }
})
//银行卡
$(document).on('keyup', '.yhk', function () {
    var len = $('.yhk').val();
    var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
    if ($(".yhk").val().match(/^\d*$/)) {
        $('.abcdefg').fadeOut();
        $('.abcdefg').text("");
        $('.yhk').removeClass('error_input');
        if (strBin.indexOf(len.substring(0, 2)) == -1) {
            $('.abcdefg').fadeIn();
            $('.abcdefg').text("*银行卡号前六位不符合规范，请检查后重新输入");
            $('.yhk').addClass('error_input');
        } else {
            $('.abcdefg').fadeOut();
            $('.abcdefg').text("");
            $('.yhk').removeClass('error_input');
            if (len.length == 16 || len.length == 17 || len.length == 19) {
                $('.abcdefg').fadeOut();
                $('.abcdefg').text("");
                $('.yhk').removeClass('error_input');
            } else {
                $('.abcdefg').fadeIn();
                $('.abcdefg').text("*请输入完整银行卡");
                $('.yhk').addClass('error_input');
            }
        }
    } else {
        $('.abcdefg').fadeIn();
        $('.abcdefg').text("*银行卡必须为全数字，请重新输入");
        $('.yhk').addClass('error_input');
    }
})
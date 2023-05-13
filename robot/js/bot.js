﻿var question = 0;
var defaultscore = 10;
var defaultanswer = ['Ooops，到我的知识盲区了，请拨打内线电话2186咨询详情'];
var answers = {
  你好: ['你好呀，有什么问题可以咨询我哟'],
  口令设置要求: ['国网公司口令设置要求是长度至少8位，数字+字母+字符组合而成'],
  内网办公软件下载: ['下载内网办公软件请到省公司主页-信息服务驿站-软件下载栏'],
  内网保密监测关键字: [
    '内网保密监测关键字有秘密|机密|绝密|中共中央办公厅|中央办公厅|中央通报|中共中央办公厅发电|中办发电|厅字|中办秘书部|中办信息综合室',
  ],
  内网电脑必装软件: [
    '内网电脑必装软件有开机画面和IP安全策略|桌面终端注册客户端|防病毒软件 360天擎',
  ],
  主机无法开机: ['主机无法开机时请检查电源是否松动，确认电源无问题请联系2186人工处理'],
  主机蓝屏: ['遇到主机蓝屏，先重启主机，重启后依然蓝屏请联系2186人工处理'],
  主机发出蜂鸣声: ['当主机发出蜂鸣声，应该是内存条松动，重新插拔内存条即可'],
  主机死机: ['遇到主机死机，先重启，重启后依然死机请联系2186人工处理'],
  主机发出糊味并伴有冒烟: ['当主机发出糊味并伴有冒烟，立即关机，联系2186人工处理'],
  显示器无法点亮: ['当显示器无法点亮时，先检查电源是否松动，确认电源无问题请联系2186人工处理'],
  显示器出现条纹: ['当显示器出现条纹时，重新插拔电源；更换VGA或HDMI连接线；更换显示器'],
  显示器屏闪: ['显示器屏闪，确认是否有KVM切换器，如有请更换切换器；无切换器请更换显示器'],
  网络无法连接显示网络连接已断开: ['网络无法连接，显示网络连接已断开，请检查网线是否松动，重新插拔依然无反应请联系2186人工处理'],
  键盘或鼠标无反应: ['键盘或鼠标无反应，更换键盘鼠标'],
  打印机无法打印: ['打印机无法打印，检查是否安装驱动，检查默认打印机是否正确；重新插拔打印线'],
  音响没有声音: ['音响没有声音，连接线是否松动，重新插拔后无反应联系2186人工处理'],
  办公室新增人员: ['办公室新增人员，请在文具室领取交换机（内外网各一个）后联系2186人工处理'],
  办公室无内外网需新增内外网网线: ['办公室无内外网需新增内外网网线，机关本部联系后勤，其他单位联系本单位运维'],
  电话新增或故障: ['电话新增或故障，请联系2270'],
  新电脑接入: ['新电脑接入，联系2186人工处理'],
  WIFI接入: ['WIFI接入，防止违规外联不允许外网接入WIFI'],
  无线键鼠接入: ['无线键鼠接入，防止违规外联不允许内网使用无线键鼠'],
  重装系统: ['重装系统，联系2186人工处理'],
  门户内ERP打开无显示: ['门户内ERP打开无显示，安装ERP客户端并使用国网安全浏览器，将其内核改为IE8，更改方式：地址栏右边有个闪电图标，点开更改内核为IE8'],
  企讯无法登陆: ['企讯无法登陆，同时登陆人数过多，请等待一段时间，或联系省公司运维186'],
  内网邮箱申请及密码重置: ['内网邮箱申请及密码重置，联系2186人工处理'],
  WPS无法打开或者很慢: ['WPS无法打开或者很慢，重启电脑，到省公司主页-信息服务驿站-软件下载，重新安装WPS'],
  协同办公身份更改: ['协同办公身份更改，填报申请表单，联系2186人工处理'],
  网络已连接但是无法上网: ['网络已连接但是无法上网，将自动获取的IP地址报给2186，由人工后台绑定'],
  可以登企讯不能打开主页: ['可以登企讯不能打开主页，重新安装IP安全策略，到省公司主页-信息服务驿站-软件下载-开机画面和IP安全策略下载安装'],
  协同办公阅文无法打开或下载: ['协同办公阅文无法打开或下载，使用国网安全浏览器，重新安装协同办公安全控件，可以到省公司主页-信息服务驿站-软件下载'],
  转版工具无法使用: ['转版工具无法使用，请检查内网电脑是否为XP系统，目前仅支持XP系统'],
  安装网络打印机: ['安装网络打印机，打印机能否设置密码，没有密码功能则不符合安全规定，不允许接入；是否有驱动光盘，如无请将打印机型号报与2186人工处理'],
  企业门户及企讯密码遗忘: ['企业门户及企讯密码遗忘，企讯上联系企讯运维，告知问题并按其要求填写密码重置申请单'],
  i国网无法登陆: ['i国网无法登陆，请使用门户账号密码登陆，依然无法登陆请联系i国网运维；详情可下载i国网操作手册，荆州公司主页-服务之窗-i国网操作手册'],
  安装谷歌浏览器: ['安装谷歌浏览器，省公司主页-信息服务驿站-软件下载'],
  安装PDF: ['安装PDF，省公司主页-信息服务驿站-软件下载'],
  安装CEB: ['安装CEB，省公司主页-信息服务驿站-软件下载'],
  压缩文件无法打开: ['压缩文件无法打开，重新安装WINRAR5.70，省公司主页-信息服务驿站-软件下载'],
  安装国网安全浏览器: ['安装国网安全浏览器，省公司主页-信息服务驿站-软件下载'],
  安装方正字库: ['安装方正字库，省公司主页-信息服务驿站-软件下载'],
  安装OFD阅读器: ['安装OFD阅读器，省公司主页-信息服务驿站-软件下载'],
  内网安装五笔输入法: ['内网安装五笔输入法，省公司主页-信息服务驿站-软件下载'],
  本部以外公司内网接入: ['本部以外的公司内网接入，联系本公司运维人员，安装必装软件，将自动获取的IP地址报与2186后台绑定'],
  违规外联告警: ['电脑弹出违规外联告警，不要插拔网线，立即联系2186人工处理'],
  提示有敏感字: ['提示有敏感字，立即联系2186人工处理'],
  内网U盘制作: ['内网U盘制作，联系本单位运维人员，如无请联系2186'],
  关闭远程管理: ['关闭远程管理，计算机-属性-远程设置-取消“允许远程协助连接这台计算机”选项-应用-确定'],
  电脑本地没有声音: ['电脑本地没有声音，一般卸载声卡驱动可以解决问题，选择此电脑-右键属性，设备管理器-音频输入和输出，如果是播放器没有声音就卸载扬声器，如果是麦克风没有声音就卸载麦克风，然后重启电脑，还有一种情况，我们右下角没有扬声器的图标，也是通过卸载声卡驱动解决'],
  网络正常但网页无法访问: ['网络正常但网页无法访问，搜索cmd-鼠标右键点击cmd.exe-选择以管理员身份运行，在弹出的页面输入netsh winsock reset，最后点击回车后重启电脑即可，若还无法访问请联系2186人工客服进行处理'],
  电脑蓝屏: ['电脑蓝屏，可能原因：温度过高；软件不兼容；内存条接触不良；硬件故障，尝试重启电脑，或者联系2186重装系统'],
  电脑无法开机或无法充电: ['电脑无法开机或无法充电，如果是笔记本无法开机或无法充电，通常是长按电源键20秒以上解决；如果是台式机无法开机，1.检查一下电源线是否插紧，拔插一下；2.长按电源键20秒以上；3.如果开机时有“滴滴滴”声音，建议擦一下内存条'],
};

var text = $('#f-left');
text.focus();

function action() {
  if (text.val() == null || text.val() == '') {
    text.focus();
    return;
  }

  $('.b-body').append(
    "<div class='mWord'><span></span><p>" + text.val() + '</p></div>'
  );
  $('.b-body').scrollTop(10000000);

  var array = search(text.val());
  for (var i = 0; i < array.length; i++) {
    var result = array[i];
    $('.b-body').append(
      "<div class='rotWord'><span></span> <p id='member'>" +
        result +
        '</p></div>'
    );
    $('.b-body').scrollTop(10000000);
  }
  question++;

  text.val('');
  text.focus();
}

$('#btn').click(function () {
  action();
});
$(document).keydown(function (event) {
  if (event.keyCode == 13) {
    action();
  }
});

function search(query) {
  var topkey = '';
  var topscore = 0;

  for (const key in answers) {
    var keyscore = score(key, query);
    if (keyscore > topscore) {
      topkey = key;
      topscore = keyscore;
    }
    // console.log(key, keyscore, topkey, topscore);
  }

  if (topscore > defaultscore) {
    return answers[topkey];
  } else {
    return defaultanswer;
  }
}

function score(text, query) {
  var len_t = text.length;
  var len_q = query.length;
  var len_vv = [...Array(len_t + 1).fill(0)].map((x) =>
    Array(len_q + 1).fill(0)
  );

  for (let i = 1; i < len_t + 1; i++) {
    for (let j = 1; j < len_q + 1; j++) {
      if (text[i - 1] == query[j - 1]) {
        len_vv[i][j] = 1 + len_vv[i - 1][j - 1];
      } else {
        len_vv[i][j] = Math.max(len_vv[i - 1][j], len_vv[i][j - 1]);
      }
    }
  }

  return (len_vv[len_t][len_q] * 200) / (len_t + len_q);
}

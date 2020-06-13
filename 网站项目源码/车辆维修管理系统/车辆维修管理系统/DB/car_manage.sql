/*
Navicat MySQL Data Transfer

Source Database       : car_manage

Target Server Type    : MYSQL
Target Server Version : 50165
File Encoding         : 65001

Date: 2020-05-14 17:49:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car_info
-- ----------------------------
DROP TABLE IF EXISTS `car_info`;
CREATE TABLE `car_info` (
  `id` varchar(255) NOT NULL,
  `plate` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car_info
-- ----------------------------
INSERT INTO `car_info` VALUES ('1482305826221', '京A WS123', '1482305606196', '奔驰', 'c200', '黑色', '40万', '2016-12-21', '', 'user1');
INSERT INTO `car_info` VALUES ('1482305902052', '京A WP456', '1482305606196', '宝马', 'x5', '白色', '60万', '2016-12-19', '', 'user1');
INSERT INTO `car_info` VALUES ('1482306789178', '沪A WW123', '1482306686697', '宝马', 'X5', '黑色', '60万', '2016-12-20', '', 'user4');

-- ----------------------------
-- Table structure for order_info
-- ----------------------------
DROP TABLE IF EXISTS `order_info`;
CREATE TABLE `order_info` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `plate` varchar(255) NOT NULL,
  `trouble_name` varchar(255) DEFAULT NULL,
  `trouble_code` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `contact_way` varchar(255) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `long_time` bigint(20) DEFAULT NULL,
  `creart_time` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0未处理，1已处理',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_info
-- ----------------------------
INSERT INTO `order_info` VALUES ('1482306027659', '1482305606196', 'user1', '京A WP456', '燃油温度感知器', 'P0189', '用户1', '13112344321', '', '1482306027659', '2016年12月21日   15:40:27', '1');
INSERT INTO `order_info` VALUES ('1482306071145', '1482305606196', 'user1', '京A WS123', '空气流量计线路不良', 'P0100', '用户1', '13112344321', '', '1482306071146', '2016年12月21日   15:41:11', '1');
INSERT INTO `order_info` VALUES ('1482306857175', '1482306686697', 'user4', '沪A WW123', '节气门位置感知器线路不良', 'P0120', '用户4', '12345678926', '', '1482306857176', '2016年12月21日   15:54:17', '1');

-- ----------------------------
-- Table structure for parts_info
-- ----------------------------
DROP TABLE IF EXISTS `parts_info`;
CREATE TABLE `parts_info` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of parts_info
-- ----------------------------
INSERT INTO `parts_info` VALUES ('1', '轮胎', 'lt.png', '￥200.0', '2');
INSERT INTO `parts_info` VALUES ('2', '方向盘', 'fxp.png', '￥150.0', '2');
INSERT INTO `parts_info` VALUES ('3', '油表盘', 'yb.png', '￥100.0', '0');
INSERT INTO `parts_info` VALUES ('4', '变档杆', 'dw.png', '￥100.0', '2');
INSERT INTO `parts_info` VALUES ('5', '齿轮', 'cl.png', '￥50.0', '0');

-- ----------------------------
-- Table structure for personal_info
-- ----------------------------
DROP TABLE IF EXISTS `personal_info`;
CREATE TABLE `personal_info` (
  `user_id` varchar(255) NOT NULL,
  `real_name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `tel_num` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of personal_info
-- ----------------------------
INSERT INTO `personal_info` VALUES ('1482305606196', '用户1', '男', '2016-12-21', '13112344321@sina.com', '北京', '13112344321', '');
INSERT INTO `personal_info` VALUES ('1482305613319', null, null, null, null, null, null, null);
INSERT INTO `personal_info` VALUES ('1482305618885', null, null, null, null, null, null, null);
INSERT INTO `personal_info` VALUES ('1482306686697', '用户4', '男', '2016-12-21', '12345678956@qq.com', '上海', '12345678956', '');

-- ----------------------------
-- Table structure for trouble_info
-- ----------------------------
DROP TABLE IF EXISTS `trouble_info`;
CREATE TABLE `trouble_info` (
  `id` varchar(255) NOT NULL,
  `trouble_code` varchar(255) NOT NULL,
  `trouble_name` varchar(255) DEFAULT NULL,
  `trouble_remark` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0启用，1禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of trouble_info
-- ----------------------------
INSERT INTO `trouble_info` VALUES ('1482144327160', 'P0100', '空气流量计线路不良', '空气流量计线路不良', '0');
INSERT INTO `trouble_info` VALUES ('1482144384271', 'P0106', '进气压力感知器线路不良', '进气压力感知器线路不良', '0');
INSERT INTO `trouble_info` VALUES ('1482144432605', 'P0120', '节气门位置感知器线路不良', '节气门位置感知器线路不良', '0');
INSERT INTO `trouble_info` VALUES ('1482144455679', 'P0176', '燃料含水量感知器线路故障', '燃料含水量感知器线路故障', '0');
INSERT INTO `trouble_info` VALUES ('1482144482465', 'P0189', '燃油温度感知器', '燃油温度感知器', '1');
INSERT INTO `trouble_info` VALUES ('1482144560156', 'P0227', '节气门感知器或节气门开关', '节气门感知器或节气门开关', '0');
INSERT INTO `trouble_info` VALUES ('1482144592192', 'P0234', '引擎增压系统故障', '引擎增压系统故障', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int(11) NOT NULL COMMENT '0管理员，1普通用户',
  `status` int(11) DEFAULT NULL COMMENT '0启用，1禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3', '0', '0');
INSERT INTO `user` VALUES ('1482305606196', 'user1', '21232f297a57a5a743894a0e4a801fc3', '1', '0');
INSERT INTO `user` VALUES ('1482305613319', 'user2', '21232f297a57a5a743894a0e4a801fc3', '0', '0');
INSERT INTO `user` VALUES ('1482305618885', 'user3', '21232f297a57a5a743894a0e4a801fc3', '0', '0');
INSERT INTO `user` VALUES ('1482306686697', 'user4', '21232f297a57a5a743894a0e4a801fc3', '1', '0');

-- ----------------------------
-- Table structure for visitor
-- ----------------------------
DROP TABLE IF EXISTS `visitor`;
CREATE TABLE `visitor` (
  `id` varchar(255) NOT NULL,
  `v_name` varchar(255) NOT NULL,
  `v_time` varchar(255) NOT NULL,
  `long_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of visitor
-- ----------------------------
INSERT INTO `visitor` VALUES ('1482305588602', 'admin', '2016年12月21日   15:33:08', '1482305588602');
INSERT INTO `visitor` VALUES ('1482305918092', 'admin', '2016年12月21日   15:38:38', '1482305918092');
INSERT INTO `visitor` VALUES ('1482306669135', 'admin', '2016年12月21日   15:51:09', '1482306669135');
INSERT INTO `visitor` VALUES ('1482306810137', 'admin', '2016年12月21日   15:53:30', '1482306810137');
INSERT INTO `visitor` VALUES ('1482306939331', 'admin', '2016年12月21日   15:55:39', '1482306939331');
INSERT INTO `visitor` VALUES ('1589446233601', 'admin', '2020年05月14日   16:50:33', '1589446233601');
INSERT INTO `visitor` VALUES ('1589446777245', 'admin', '2020年05月14日   16:59:37', '1589446777245');
INSERT INTO `visitor` VALUES ('1589447540646', 'admin', '2020年05月14日   17:12:20', '1589447540646');
INSERT INTO `visitor` VALUES ('1589448187808', 'admin', '2020年05月14日   17:23:07', '1589448187808');
INSERT INTO `visitor` VALUES ('1589449440107', 'admin', '2020年05月14日   17:44:00', '1589449440108');

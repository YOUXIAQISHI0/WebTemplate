/*
Navicat MySQL Data Transfer

Source Server Version : 50165
Source Database       : db_stock_manager_ssm

Target Server Type    : MYSQL
Target Server Version : 50165
File Encoding         : 65001

Date: 2020-05-03 20:31:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for authority
-- ----------------------------
DROP TABLE IF EXISTS `authority`;
CREATE TABLE `authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleId` int(11) NOT NULL,
  `menuId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`),
  KEY `menuId` (`menuId`)
) ENGINE=MyISAM AUTO_INCREMENT=1449 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authority
-- ----------------------------
INSERT INTO `authority` VALUES ('1403', '2', '61');
INSERT INTO `authority` VALUES ('1402', '2', '68');
INSERT INTO `authority` VALUES ('1401', '2', '52');
INSERT INTO `authority` VALUES ('1400', '2', '60');
INSERT INTO `authority` VALUES ('1399', '2', '67');
INSERT INTO `authority` VALUES ('1398', '2', '51');
INSERT INTO `authority` VALUES ('1438', '2', '66');
INSERT INTO `authority` VALUES ('1437', '2', '65');
INSERT INTO `authority` VALUES ('1436', '2', '74');
INSERT INTO `authority` VALUES ('1435', '2', '64');
INSERT INTO `authority` VALUES ('1434', '2', '73');
INSERT INTO `authority` VALUES ('1433', '2', '63');
INSERT INTO `authority` VALUES ('1432', '2', '72');
INSERT INTO `authority` VALUES ('1431', '2', '62');
INSERT INTO `authority` VALUES ('1430', '2', '71');
INSERT INTO `authority` VALUES ('1429', '2', '61');
INSERT INTO `authority` VALUES ('1428', '2', '70');
INSERT INTO `authority` VALUES ('1427', '2', '60');
INSERT INTO `authority` VALUES ('1426', '2', '69');
INSERT INTO `authority` VALUES ('1425', '2', '59');
INSERT INTO `authority` VALUES ('1424', '2', '68');
INSERT INTO `authority` VALUES ('1423', '2', '1');
INSERT INTO `authority` VALUES ('1422', '2', '58');
INSERT INTO `authority` VALUES ('1421', '2', '67');
INSERT INTO `authority` VALUES ('1420', '2', '74');
INSERT INTO `authority` VALUES ('1419', '2', '57');
INSERT INTO `authority` VALUES ('1418', '2', '66');
INSERT INTO `authority` VALUES ('1417', '2', '73');
INSERT INTO `authority` VALUES ('1416', '2', '65');
INSERT INTO `authority` VALUES ('1415', '2', '56');
INSERT INTO `authority` VALUES ('1414', '2', '72');
INSERT INTO `authority` VALUES ('1413', '2', '55');
INSERT INTO `authority` VALUES ('1412', '2', '64');
INSERT INTO `authority` VALUES ('1411', '2', '71');
INSERT INTO `authority` VALUES ('1410', '2', '54');
INSERT INTO `authority` VALUES ('1409', '2', '63');
INSERT INTO `authority` VALUES ('1408', '2', '70');
INSERT INTO `authority` VALUES ('1407', '2', '53');
INSERT INTO `authority` VALUES ('1406', '2', '62');
INSERT INTO `authority` VALUES ('1405', '2', '69');
INSERT INTO `authority` VALUES ('1404', '2', '49');
INSERT INTO `authority` VALUES ('1397', '2', '50');
INSERT INTO `authority` VALUES ('1396', '2', '66');
INSERT INTO `authority` VALUES ('1395', '2', '1');
INSERT INTO `authority` VALUES ('1394', '2', '65');
INSERT INTO `authority` VALUES ('1393', '2', '48');
INSERT INTO `authority` VALUES ('1392', '2', '74');
INSERT INTO `authority` VALUES ('1391', '2', '64');
INSERT INTO `authority` VALUES ('1390', '2', '47');
INSERT INTO `authority` VALUES ('1389', '2', '73');
INSERT INTO `authority` VALUES ('1388', '2', '63');
INSERT INTO `authority` VALUES ('1387', '2', '75');
INSERT INTO `authority` VALUES ('1386', '2', '72');
INSERT INTO `authority` VALUES ('1385', '2', '62');
INSERT INTO `authority` VALUES ('1384', '2', '59');
INSERT INTO `authority` VALUES ('1383', '2', '46');
INSERT INTO `authority` VALUES ('1382', '2', '61');
INSERT INTO `authority` VALUES ('1381', '2', '71');
INSERT INTO `authority` VALUES ('1380', '2', '58');
INSERT INTO `authority` VALUES ('1379', '2', '45');
INSERT INTO `authority` VALUES ('1378', '2', '57');
INSERT INTO `authority` VALUES ('1377', '2', '60');
INSERT INTO `authority` VALUES ('1376', '2', '70');
INSERT INTO `authority` VALUES ('1375', '2', '44');
INSERT INTO `authority` VALUES ('1374', '2', '69');
INSERT INTO `authority` VALUES ('1373', '2', '59');
INSERT INTO `authority` VALUES ('1372', '2', '43');
INSERT INTO `authority` VALUES ('1371', '2', '56');
INSERT INTO `authority` VALUES ('1370', '2', '68');
INSERT INTO `authority` VALUES ('1369', '2', '42');
INSERT INTO `authority` VALUES ('1368', '2', '58');
INSERT INTO `authority` VALUES ('1367', '2', '55');
INSERT INTO `authority` VALUES ('1366', '2', '67');
INSERT INTO `authority` VALUES ('1365', '2', '41');
INSERT INTO `authority` VALUES ('1364', '2', '57');
INSERT INTO `authority` VALUES ('1363', '2', '54');
INSERT INTO `authority` VALUES ('1362', '2', '66');
INSERT INTO `authority` VALUES ('1361', '2', '56');
INSERT INTO `authority` VALUES ('1360', '2', '40');
INSERT INTO `authority` VALUES ('1359', '2', '53');
INSERT INTO `authority` VALUES ('1358', '2', '1');
INSERT INTO `authority` VALUES ('1357', '2', '55');
INSERT INTO `authority` VALUES ('1356', '2', '39');
INSERT INTO `authority` VALUES ('1355', '2', '65');
INSERT INTO `authority` VALUES ('1354', '2', '49');
INSERT INTO `authority` VALUES ('1353', '2', '64');
INSERT INTO `authority` VALUES ('1352', '2', '38');
INSERT INTO `authority` VALUES ('1351', '2', '54');
INSERT INTO `authority` VALUES ('1350', '2', '74');
INSERT INTO `authority` VALUES ('1349', '2', '52');
INSERT INTO `authority` VALUES ('1348', '2', '73');
INSERT INTO `authority` VALUES ('1347', '2', '1');
INSERT INTO `authority` VALUES ('1346', '2', '63');
INSERT INTO `authority` VALUES ('1345', '2', '53');
INSERT INTO `authority` VALUES ('1344', '2', '37');
INSERT INTO `authority` VALUES ('1343', '2', '51');
INSERT INTO `authority` VALUES ('1342', '2', '49');
INSERT INTO `authority` VALUES ('1341', '2', '74');
INSERT INTO `authority` VALUES ('1340', '2', '72');
INSERT INTO `authority` VALUES ('1339', '2', '36');
INSERT INTO `authority` VALUES ('1338', '2', '62');
INSERT INTO `authority` VALUES ('1337', '2', '50');
INSERT INTO `authority` VALUES ('1336', '2', '35');
INSERT INTO `authority` VALUES ('1335', '2', '52');
INSERT INTO `authority` VALUES ('1334', '2', '71');
INSERT INTO `authority` VALUES ('1333', '2', '73');
INSERT INTO `authority` VALUES ('1332', '2', '61');
INSERT INTO `authority` VALUES ('1331', '2', '48');
INSERT INTO `authority` VALUES ('1112', '1', '1');
INSERT INTO `authority` VALUES ('1111', '1', '1');
INSERT INTO `authority` VALUES ('1110', '1', '74');
INSERT INTO `authority` VALUES ('1109', '1', '74');
INSERT INTO `authority` VALUES ('1108', '1', '73');
INSERT INTO `authority` VALUES ('1107', '1', '73');
INSERT INTO `authority` VALUES ('1106', '1', '72');
INSERT INTO `authority` VALUES ('1105', '1', '72');
INSERT INTO `authority` VALUES ('1104', '1', '71');
INSERT INTO `authority` VALUES ('1103', '1', '71');
INSERT INTO `authority` VALUES ('1102', '1', '70');
INSERT INTO `authority` VALUES ('1101', '1', '70');
INSERT INTO `authority` VALUES ('1100', '1', '69');
INSERT INTO `authority` VALUES ('1099', '1', '69');
INSERT INTO `authority` VALUES ('1098', '1', '68');
INSERT INTO `authority` VALUES ('1097', '1', '68');
INSERT INTO `authority` VALUES ('1096', '1', '67');
INSERT INTO `authority` VALUES ('1095', '1', '67');
INSERT INTO `authority` VALUES ('1094', '1', '66');
INSERT INTO `authority` VALUES ('1093', '1', '66');
INSERT INTO `authority` VALUES ('1092', '1', '65');
INSERT INTO `authority` VALUES ('1091', '1', '65');
INSERT INTO `authority` VALUES ('1090', '1', '64');
INSERT INTO `authority` VALUES ('1089', '1', '64');
INSERT INTO `authority` VALUES ('1088', '1', '63');
INSERT INTO `authority` VALUES ('1087', '1', '1');
INSERT INTO `authority` VALUES ('1086', '1', '63');
INSERT INTO `authority` VALUES ('1085', '1', '62');
INSERT INTO `authority` VALUES ('1084', '1', '74');
INSERT INTO `authority` VALUES ('1083', '1', '62');
INSERT INTO `authority` VALUES ('1082', '1', '61');
INSERT INTO `authority` VALUES ('1081', '1', '73');
INSERT INTO `authority` VALUES ('1080', '1', '61');
INSERT INTO `authority` VALUES ('1079', '1', '60');
INSERT INTO `authority` VALUES ('1078', '1', '72');
INSERT INTO `authority` VALUES ('1077', '1', '60');
INSERT INTO `authority` VALUES ('1076', '1', '59');
INSERT INTO `authority` VALUES ('1075', '1', '71');
INSERT INTO `authority` VALUES ('1074', '1', '59');
INSERT INTO `authority` VALUES ('1073', '1', '58');
INSERT INTO `authority` VALUES ('1072', '1', '70');
INSERT INTO `authority` VALUES ('1071', '1', '58');
INSERT INTO `authority` VALUES ('1070', '1', '57');
INSERT INTO `authority` VALUES ('1069', '1', '69');
INSERT INTO `authority` VALUES ('1068', '1', '56');
INSERT INTO `authority` VALUES ('1067', '1', '57');
INSERT INTO `authority` VALUES ('1066', '1', '68');
INSERT INTO `authority` VALUES ('1065', '1', '55');
INSERT INTO `authority` VALUES ('1064', '1', '56');
INSERT INTO `authority` VALUES ('1063', '1', '67');
INSERT INTO `authority` VALUES ('1062', '1', '54');
INSERT INTO `authority` VALUES ('1061', '1', '55');
INSERT INTO `authority` VALUES ('1060', '1', '66');
INSERT INTO `authority` VALUES ('1059', '1', '53');
INSERT INTO `authority` VALUES ('1058', '1', '54');
INSERT INTO `authority` VALUES ('1057', '1', '65');
INSERT INTO `authority` VALUES ('1056', '1', '49');
INSERT INTO `authority` VALUES ('1055', '1', '53');
INSERT INTO `authority` VALUES ('1054', '1', '64');
INSERT INTO `authority` VALUES ('1053', '1', '52');
INSERT INTO `authority` VALUES ('1052', '1', '49');
INSERT INTO `authority` VALUES ('1051', '1', '63');
INSERT INTO `authority` VALUES ('1050', '1', '51');
INSERT INTO `authority` VALUES ('1049', '1', '52');
INSERT INTO `authority` VALUES ('1048', '1', '62');
INSERT INTO `authority` VALUES ('1047', '1', '50');
INSERT INTO `authority` VALUES ('1046', '1', '51');
INSERT INTO `authority` VALUES ('1045', '1', '61');
INSERT INTO `authority` VALUES ('1044', '1', '48');
INSERT INTO `authority` VALUES ('1043', '1', '50');
INSERT INTO `authority` VALUES ('1042', '1', '60');
INSERT INTO `authority` VALUES ('1041', '1', '48');
INSERT INTO `authority` VALUES ('1040', '1', '47');
INSERT INTO `authority` VALUES ('1039', '1', '59');
INSERT INTO `authority` VALUES ('1038', '1', '58');
INSERT INTO `authority` VALUES ('1037', '1', '47');
INSERT INTO `authority` VALUES ('1036', '1', '75');
INSERT INTO `authority` VALUES ('1035', '1', '57');
INSERT INTO `authority` VALUES ('1034', '1', '75');
INSERT INTO `authority` VALUES ('1033', '1', '46');
INSERT INTO `authority` VALUES ('1032', '1', '45');
INSERT INTO `authority` VALUES ('1031', '1', '46');
INSERT INTO `authority` VALUES ('1030', '1', '56');
INSERT INTO `authority` VALUES ('1029', '1', '44');
INSERT INTO `authority` VALUES ('1028', '1', '55');
INSERT INTO `authority` VALUES ('1027', '1', '45');
INSERT INTO `authority` VALUES ('1026', '1', '54');
INSERT INTO `authority` VALUES ('1025', '1', '43');
INSERT INTO `authority` VALUES ('1024', '1', '44');
INSERT INTO `authority` VALUES ('1023', '1', '53');
INSERT INTO `authority` VALUES ('1022', '1', '42');
INSERT INTO `authority` VALUES ('1021', '1', '43');
INSERT INTO `authority` VALUES ('1020', '1', '41');
INSERT INTO `authority` VALUES ('1019', '1', '49');
INSERT INTO `authority` VALUES ('1018', '1', '42');
INSERT INTO `authority` VALUES ('1017', '1', '40');
INSERT INTO `authority` VALUES ('1016', '1', '52');
INSERT INTO `authority` VALUES ('1015', '1', '41');
INSERT INTO `authority` VALUES ('1014', '1', '39');
INSERT INTO `authority` VALUES ('1013', '1', '51');
INSERT INTO `authority` VALUES ('1012', '1', '40');
INSERT INTO `authority` VALUES ('1011', '1', '50');
INSERT INTO `authority` VALUES ('1010', '1', '38');
INSERT INTO `authority` VALUES ('1009', '1', '39');
INSERT INTO `authority` VALUES ('1008', '1', '48');
INSERT INTO `authority` VALUES ('1007', '1', '37');
INSERT INTO `authority` VALUES ('1006', '1', '38');
INSERT INTO `authority` VALUES ('1005', '1', '34');
INSERT INTO `authority` VALUES ('1004', '1', '47');
INSERT INTO `authority` VALUES ('1003', '1', '37');
INSERT INTO `authority` VALUES ('1002', '1', '75');
INSERT INTO `authority` VALUES ('1001', '1', '33');
INSERT INTO `authority` VALUES ('1000', '1', '34');
INSERT INTO `authority` VALUES ('999', '1', '46');
INSERT INTO `authority` VALUES ('998', '1', '32');
INSERT INTO `authority` VALUES ('997', '1', '45');
INSERT INTO `authority` VALUES ('996', '1', '33');
INSERT INTO `authority` VALUES ('995', '1', '31');
INSERT INTO `authority` VALUES ('994', '1', '32');
INSERT INTO `authority` VALUES ('993', '1', '44');
INSERT INTO `authority` VALUES ('992', '1', '26');
INSERT INTO `authority` VALUES ('991', '1', '31');
INSERT INTO `authority` VALUES ('990', '1', '43');
INSERT INTO `authority` VALUES ('989', '1', '25');
INSERT INTO `authority` VALUES ('988', '1', '26');
INSERT INTO `authority` VALUES ('987', '1', '42');
INSERT INTO `authority` VALUES ('986', '1', '24');
INSERT INTO `authority` VALUES ('985', '1', '25');
INSERT INTO `authority` VALUES ('984', '1', '15');
INSERT INTO `authority` VALUES ('983', '1', '41');
INSERT INTO `authority` VALUES ('982', '1', '24');
INSERT INTO `authority` VALUES ('981', '1', '40');
INSERT INTO `authority` VALUES ('980', '1', '14');
INSERT INTO `authority` VALUES ('979', '1', '15');
INSERT INTO `authority` VALUES ('978', '1', '39');
INSERT INTO `authority` VALUES ('977', '1', '23');
INSERT INTO `authority` VALUES ('976', '1', '14');
INSERT INTO `authority` VALUES ('975', '1', '38');
INSERT INTO `authority` VALUES ('974', '1', '22');
INSERT INTO `authority` VALUES ('973', '1', '23');
INSERT INTO `authority` VALUES ('972', '1', '37');
INSERT INTO `authority` VALUES ('971', '1', '21');
INSERT INTO `authority` VALUES ('970', '1', '22');
INSERT INTO `authority` VALUES ('969', '1', '34');
INSERT INTO `authority` VALUES ('968', '1', '13');
INSERT INTO `authority` VALUES ('967', '1', '21');
INSERT INTO `authority` VALUES ('966', '1', '20');
INSERT INTO `authority` VALUES ('965', '1', '33');
INSERT INTO `authority` VALUES ('964', '1', '13');
INSERT INTO `authority` VALUES ('963', '1', '19');
INSERT INTO `authority` VALUES ('962', '1', '32');
INSERT INTO `authority` VALUES ('961', '1', '20');
INSERT INTO `authority` VALUES ('960', '1', '18');
INSERT INTO `authority` VALUES ('959', '1', '31');
INSERT INTO `authority` VALUES ('958', '1', '19');
INSERT INTO `authority` VALUES ('957', '1', '17');
INSERT INTO `authority` VALUES ('956', '1', '26');
INSERT INTO `authority` VALUES ('955', '1', '1');
INSERT INTO `authority` VALUES ('954', '1', '18');
INSERT INTO `authority` VALUES ('953', '1', '5');
INSERT INTO `authority` VALUES ('952', '1', '25');
INSERT INTO `authority` VALUES ('951', '1', '74');
INSERT INTO `authority` VALUES ('950', '1', '17');
INSERT INTO `authority` VALUES ('1439', '2', '1');
INSERT INTO `authority` VALUES ('1440', '2', '67');
INSERT INTO `authority` VALUES ('1441', '2', '68');
INSERT INTO `authority` VALUES ('1442', '2', '69');
INSERT INTO `authority` VALUES ('1443', '2', '70');
INSERT INTO `authority` VALUES ('1444', '2', '71');
INSERT INTO `authority` VALUES ('1445', '2', '72');
INSERT INTO `authority` VALUES ('1446', '2', '73');
INSERT INTO `authority` VALUES ('1447', '2', '74');
INSERT INTO `authority` VALUES ('1448', '2', '1');

-- ----------------------------
-- Table structure for c3p0testtable
-- ----------------------------
DROP TABLE IF EXISTS `c3p0testtable`;
CREATE TABLE `c3p0testtable` (
  `a` char(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c3p0testtable
-- ----------------------------

-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log
-- ----------------------------
INSERT INTO `log` VALUES ('13', '用户名为admin的用户登录时输入验证码错误!', '2018-12-16 18:17:30');
INSERT INTO `log` VALUES ('14', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2018-12-16 18:22:56');
INSERT INTO `log` VALUES ('15', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2018-12-16 18:37:15');
INSERT INTO `log` VALUES ('16', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2018-12-16 18:40:21');
INSERT INTO `log` VALUES ('17', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2018-12-16 19:11:49');
INSERT INTO `log` VALUES ('18', '用户名为{admin}，的用户成功修改密码!', '2018-12-16 19:13:32');
INSERT INTO `log` VALUES ('19', '用户名为{admin}，的用户成功修改密码!', '2018-12-16 19:14:01');
INSERT INTO `log` VALUES ('20', '用户名为{猿来入此}，角色为{普通用户}的用户登录成功!', '2018-12-16 19:17:46');
INSERT INTO `log` VALUES ('21', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 18:33:35');
INSERT INTO `log` VALUES ('22', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 18:39:00');
INSERT INTO `log` VALUES ('23', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 19:12:32');
INSERT INTO `log` VALUES ('24', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 19:13:45');
INSERT INTO `log` VALUES ('25', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 19:14:44');
INSERT INTO `log` VALUES ('26', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 19:15:53');
INSERT INTO `log` VALUES ('27', '用户名为admin的用户登录时输入验证码错误!', '2019-03-04 19:34:41');
INSERT INTO `log` VALUES ('28', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 19:34:48');
INSERT INTO `log` VALUES ('29', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 20:53:11');
INSERT INTO `log` VALUES ('30', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 21:07:32');
INSERT INTO `log` VALUES ('31', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 21:09:13');
INSERT INTO `log` VALUES ('32', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 21:37:56');
INSERT INTO `log` VALUES ('33', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-04 21:39:29');
INSERT INTO `log` VALUES ('34', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-05 21:21:19');
INSERT INTO `log` VALUES ('35', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-05 21:30:29');
INSERT INTO `log` VALUES ('36', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-05 21:56:28');
INSERT INTO `log` VALUES ('37', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 19:18:05');
INSERT INTO `log` VALUES ('38', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 19:32:59');
INSERT INTO `log` VALUES ('39', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 19:33:25');
INSERT INTO `log` VALUES ('40', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 20:29:06');
INSERT INTO `log` VALUES ('41', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 22:57:00');
INSERT INTO `log` VALUES ('42', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 22:58:40');
INSERT INTO `log` VALUES ('43', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 22:59:56');
INSERT INTO `log` VALUES ('44', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 23:01:46');
INSERT INTO `log` VALUES ('45', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 23:07:41');
INSERT INTO `log` VALUES ('46', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 23:10:43');
INSERT INTO `log` VALUES ('47', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-06 23:12:01');
INSERT INTO `log` VALUES ('48', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 18:06:58');
INSERT INTO `log` VALUES ('49', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 18:43:15');
INSERT INTO `log` VALUES ('50', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 18:52:58');
INSERT INTO `log` VALUES ('51', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 18:54:54');
INSERT INTO `log` VALUES ('52', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 18:58:42');
INSERT INTO `log` VALUES ('53', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 19:08:39');
INSERT INTO `log` VALUES ('54', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 19:36:51');
INSERT INTO `log` VALUES ('55', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 19:55:40');
INSERT INTO `log` VALUES ('56', '用户名为admin的用户登录时输入验证码错误!', '2019-03-07 19:58:23');
INSERT INTO `log` VALUES ('57', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 19:58:32');
INSERT INTO `log` VALUES ('58', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 21:13:43');
INSERT INTO `log` VALUES ('59', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 21:36:17');
INSERT INTO `log` VALUES ('60', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 21:38:50');
INSERT INTO `log` VALUES ('61', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 22:34:44');
INSERT INTO `log` VALUES ('62', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 22:36:24');
INSERT INTO `log` VALUES ('63', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-07 22:46:56');
INSERT INTO `log` VALUES ('64', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 17:48:42');
INSERT INTO `log` VALUES ('65', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 17:59:38');
INSERT INTO `log` VALUES ('66', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 18:03:14');
INSERT INTO `log` VALUES ('67', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 18:26:26');
INSERT INTO `log` VALUES ('68', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 18:41:02');
INSERT INTO `log` VALUES ('69', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 19:23:34');
INSERT INTO `log` VALUES ('70', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 19:28:38');
INSERT INTO `log` VALUES ('71', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 20:17:08');
INSERT INTO `log` VALUES ('72', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 20:19:04');
INSERT INTO `log` VALUES ('73', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 20:25:21');
INSERT INTO `log` VALUES ('74', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 20:28:17');
INSERT INTO `log` VALUES ('75', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 20:29:54');
INSERT INTO `log` VALUES ('76', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-08 21:19:54');
INSERT INTO `log` VALUES ('77', '用户名为admin的用户登录时输入验证码错误!', '2019-03-09 10:34:10');
INSERT INTO `log` VALUES ('78', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 10:34:19');
INSERT INTO `log` VALUES ('79', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 11:05:13');
INSERT INTO `log` VALUES ('80', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 11:07:16');
INSERT INTO `log` VALUES ('81', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 11:09:04');
INSERT INTO `log` VALUES ('82', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 11:58:26');
INSERT INTO `log` VALUES ('83', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 11:59:51');
INSERT INTO `log` VALUES ('84', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 12:01:25');
INSERT INTO `log` VALUES ('85', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 12:28:06');
INSERT INTO `log` VALUES ('86', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 13:10:14');
INSERT INTO `log` VALUES ('87', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 13:14:52');
INSERT INTO `log` VALUES ('88', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 13:18:50');
INSERT INTO `log` VALUES ('89', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 13:35:26');
INSERT INTO `log` VALUES ('90', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 14:20:06');
INSERT INTO `log` VALUES ('91', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 15:07:02');
INSERT INTO `log` VALUES ('92', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 15:42:32');
INSERT INTO `log` VALUES ('93', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 15:49:26');
INSERT INTO `log` VALUES ('94', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 16:09:12');
INSERT INTO `log` VALUES ('95', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 16:22:16');
INSERT INTO `log` VALUES ('96', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 16:54:19');
INSERT INTO `log` VALUES ('97', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 16:58:00');
INSERT INTO `log` VALUES ('98', '用户名为admin的用户登录时输入验证码错误!', '2019-03-09 17:01:50');
INSERT INTO `log` VALUES ('99', '用户名为admin的用户登录时输入验证码错误!', '2019-03-09 17:01:58');
INSERT INTO `log` VALUES ('100', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:02:06');
INSERT INTO `log` VALUES ('101', '用户名为admin的用户登录时输入验证码错误!', '2019-03-09 17:06:49');
INSERT INTO `log` VALUES ('102', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:06:56');
INSERT INTO `log` VALUES ('103', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:11:01');
INSERT INTO `log` VALUES ('104', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:13:14');
INSERT INTO `log` VALUES ('105', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:25:47');
INSERT INTO `log` VALUES ('106', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:38:34');
INSERT INTO `log` VALUES ('107', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:41:13');
INSERT INTO `log` VALUES ('108', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2019-03-09 17:47:49');
INSERT INTO `log` VALUES ('109', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2020-05-03 08:45:09');
INSERT INTO `log` VALUES ('110', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2020-05-03 08:54:31');
INSERT INTO `log` VALUES ('111', '用户名为admin的用户登录时输入验证码错误!', '2020-05-03 09:18:12');
INSERT INTO `log` VALUES ('112', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2020-05-03 09:18:33');
INSERT INTO `log` VALUES ('113', '用户名为admin的用户登录时输入验证码错误!', '2020-05-03 10:21:51');
INSERT INTO `log` VALUES ('114', '用户名为{admin}，角色为{超级管理员}的用户登录成功!', '2020-05-03 10:22:02');

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parentId` int(11) NOT NULL DEFAULT '-1',
  `name` varchar(32) NOT NULL,
  `url` varchar(128) DEFAULT NULL,
  `icon` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '0', '系统设置', '', 'icon-advancedsettings');
INSERT INTO `menu` VALUES ('5', '1', '菜单管理', '../admin/menu/list', 'icon-chart-organisation');
INSERT INTO `menu` VALUES ('13', '1', '角色管理', '../admin/role/list', 'icon-group-key');
INSERT INTO `menu` VALUES ('14', '0', '用户管理', '', 'icon-group-gear');
INSERT INTO `menu` VALUES ('15', '14', '用户列表', '../admin/user/list', 'icon-group');
INSERT INTO `menu` VALUES ('17', '5', '添加', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('18', '5', '编辑', 'openEdit()', 'icon-bullet-edit');
INSERT INTO `menu` VALUES ('19', '5', '删除', 'remove()', 'icon-cross');
INSERT INTO `menu` VALUES ('20', '5', '添加按钮', 'openAddMenu()', 'icon-add');
INSERT INTO `menu` VALUES ('21', '13', '添加', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('22', '13', '编辑', 'openEdit()', 'icon-bullet-edit');
INSERT INTO `menu` VALUES ('23', '13', '删除', 'remove()', 'icon-cross');
INSERT INTO `menu` VALUES ('24', '15', '添加', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('25', '15', '编辑', 'openEdit()', 'icon-bullet-edit');
INSERT INTO `menu` VALUES ('26', '15', '删除', 'remove()', 'icon-cross');
INSERT INTO `menu` VALUES ('31', '0', '系统日志', '', 'icon-table-cell');
INSERT INTO `menu` VALUES ('32', '31', '日志列表', '../admin/log/list', 'icon-page-white-text');
INSERT INTO `menu` VALUES ('33', '32', '添加日志', 'openAdd()', 'icon-add1');
INSERT INTO `menu` VALUES ('34', '32', '删除', 'remove()', 'icon-cancel');
INSERT INTO `menu` VALUES ('35', '1', '修改密码', 'edit_password', 'icon-lock-edit');
INSERT INTO `menu` VALUES ('36', '35', '修改密码', 'openAdd()', 'icon-lock-edit');
INSERT INTO `menu` VALUES ('37', '0', '供应商管理', '', 'icon-user-brown');
INSERT INTO `menu` VALUES ('38', '37', '供应商列表', '../admin/supplier/list', 'icon-vcard');
INSERT INTO `menu` VALUES ('39', '38', '添加', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('40', '38', '编辑', 'openEdit()', 'icon-bullet-edit');
INSERT INTO `menu` VALUES ('41', '38', '删除', 'remove()', 'icon-cancel');
INSERT INTO `menu` VALUES ('42', '0', '商品管理', '', 'icon-medal-bronze-1');
INSERT INTO `menu` VALUES ('43', '42', '商品列表', '../admin/product/list', 'icon-table-cell');
INSERT INTO `menu` VALUES ('44', '43', '添加', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('45', '43', '编辑', 'openEdit()', 'icon-book-edit');
INSERT INTO `menu` VALUES ('46', '43', '删除', 'remove()', 'icon-DeleteRed');
INSERT INTO `menu` VALUES ('47', '0', '进货管理', '', 'icon-package-add');
INSERT INTO `menu` VALUES ('48', '47', '进货列表', '../admin/order_in/list', 'icon-text-padding-top');
INSERT INTO `menu` VALUES ('49', '47', '库存盘点', '../admin/stock/list', 'icon-brick-edit');
INSERT INTO `menu` VALUES ('50', '48', '添加进货单', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('51', '48', '支付进货单', 'openEdit()', 'icon-cart-edit');
INSERT INTO `menu` VALUES ('52', '48', '查看进货单', 'openView()', 'icon-eye');
INSERT INTO `menu` VALUES ('53', '49', '调整库存', 'openEdit()', 'icon-book-addresses-edit');
INSERT INTO `menu` VALUES ('54', '49', '删除库存', 'remove()', 'icon-DeleteRed');
INSERT INTO `menu` VALUES ('55', '0', '进货退货', '', 'icon-basket-delete');
INSERT INTO `menu` VALUES ('56', '55', '进货退货列表', '../admin/order_in_reback/list', 'icon-mail');
INSERT INTO `menu` VALUES ('57', '56', '添加退货单', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('58', '56', '查看退货单', 'openView()', 'icon-eye');
INSERT INTO `menu` VALUES ('59', '56', '支付退货单', 'openEdit()', 'icon-coins');
INSERT INTO `menu` VALUES ('60', '0', '销售管理', '', 'icon-coins');
INSERT INTO `menu` VALUES ('61', '60', '销售列表', '../admin/sell/list', 'icon-database-table');
INSERT INTO `menu` VALUES ('62', '61', '添加销售单', 'openAdd()', 'icon-coins-add');
INSERT INTO `menu` VALUES ('63', '61', '查看销售单', 'openView()', 'icon-eye');
INSERT INTO `menu` VALUES ('64', '61', '支付销售单', 'openEdit()', 'icon-tag-blue-edit');
INSERT INTO `menu` VALUES ('65', '0', '销售退货', '', 'icon-arrow-rotate-clockwise');
INSERT INTO `menu` VALUES ('66', '65', '销售退货列表', '../admin/sell_reback/list', 'icon-build');
INSERT INTO `menu` VALUES ('67', '66', '添加退货单', 'openAdd()', 'icon-add');
INSERT INTO `menu` VALUES ('68', '66', '支付退货单', 'openEdit()', 'icon-database-edit');
INSERT INTO `menu` VALUES ('69', '66', '查看退货单', 'openView()', 'icon-eye');
INSERT INTO `menu` VALUES ('70', '0', '统计分析', '', 'icon-chart-bar');
INSERT INTO `menu` VALUES ('71', '70', '销售统计', '../admin/stats/stats', 'icon-chart-curve');
INSERT INTO `menu` VALUES ('72', '71', '按日统计', 'statsDay()', 'icon-chart-curve-add');
INSERT INTO `menu` VALUES ('73', '71', '按月统计', 'statsMonth()', 'icon-chart-curve-link');
INSERT INTO `menu` VALUES ('74', '71', '按年统计', 'statsYear()', 'icon-chart-curve-go');
INSERT INTO `menu` VALUES ('75', '43', '导入商品', 'openImport()', 'icon-upload');

-- ----------------------------
-- Table structure for order_in
-- ----------------------------
DROP TABLE IF EXISTS `order_in`;
CREATE TABLE `order_in` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `money` float(11,2) DEFAULT NULL,
  `productNum` int(5) NOT NULL,
  `payType` int(2) NOT NULL DEFAULT '0',
  `status` int(2) NOT NULL DEFAULT '0',
  `operator` varchar(32) NOT NULL,
  `remark` varchar(128) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_in
-- ----------------------------
INSERT INTO `order_in` VALUES ('13', '1408426.00', '182', '4', '1', 'admin', '进的高科技产品。', '2019-03-08 18:47:04');
INSERT INTO `order_in` VALUES ('14', '8064.00', '222', '2', '1', 'admin', '生活用品。', '2019-03-08 18:48:02');
INSERT INTO `order_in` VALUES ('15', '55104.00', '10', '1', '0', 'admin', '进了全量商品！', '2019-03-08 18:48:46');
INSERT INTO `order_in` VALUES ('16', '155335.00', '1004', '4', '1', 'admin', '进货一大批！', '2019-03-08 21:35:30');
INSERT INTO `order_in` VALUES ('17', '5291.00', '4', '2', '0', 'admin', '进货三种商品！', '2019-03-09 17:29:13');
INSERT INTO `order_in` VALUES ('18', '29828.00', '8', '0', '0', 'admin', '', '2019-03-09 17:44:49');

-- ----------------------------
-- Table structure for order_in_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_in_detail`;
CREATE TABLE `order_in_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderInId` int(11) NOT NULL,
  `productName` varchar(128) NOT NULL,
  `price` float(8,2) NOT NULL,
  `productNum` int(5) NOT NULL,
  `money` float(8,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderInId` (`orderInId`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_in_detail
-- ----------------------------
INSERT INTO `order_in_detail` VALUES ('18', '13', '洗衣机', '4399.00', '10', '43990');
INSERT INTO `order_in_detail` VALUES ('19', '13', '电视机', '2988.00', '122', '364536');
INSERT INTO `order_in_detail` VALUES ('20', '13', '智能机器人', '19998.00', '50', '999900');
INSERT INTO `order_in_detail` VALUES ('21', '14', '男士长袖', '66.00', '100', '6600');
INSERT INTO `order_in_detail` VALUES ('22', '14', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '122', '1464');
INSERT INTO `order_in_detail` VALUES ('23', '15', 'Java实战开发教程', '128.00', '2', '256');
INSERT INTO `order_in_detail` VALUES ('24', '15', '洗衣机', '4399.00', '2', '8798');
INSERT INTO `order_in_detail` VALUES ('25', '15', '电视机', '2988.00', '2', '5976');
INSERT INTO `order_in_detail` VALUES ('26', '15', '智能机器人', '19998.00', '2', '39996');
INSERT INTO `order_in_detail` VALUES ('27', '15', '男士长袖', '66.00', '1', '66');
INSERT INTO `order_in_detail` VALUES ('28', '15', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `order_in_detail` VALUES ('29', '16', 'Java实战开发教程', '128.00', '999', '127872');
INSERT INTO `order_in_detail` VALUES ('30', '16', '男士长袖', '66.00', '1', '66');
INSERT INTO `order_in_detail` VALUES ('31', '16', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `order_in_detail` VALUES ('32', '16', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `order_in_detail` VALUES ('33', '16', '电视机', '2988.00', '1', '2988');
INSERT INTO `order_in_detail` VALUES ('34', '16', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `order_in_detail` VALUES ('35', '17', '男士长袖', '66.00', '1', '66');
INSERT INTO `order_in_detail` VALUES ('36', '17', '电视机', '2988.00', '1', '2988');
INSERT INTO `order_in_detail` VALUES ('37', '17', 'Iphone XR 128G', '238.00', '1', '238');
INSERT INTO `order_in_detail` VALUES ('38', '17', '笔记本电脑', '1999.00', '1', '1999');
INSERT INTO `order_in_detail` VALUES ('39', '18', 'Java实战开发教程', '128.00', '1', '128');
INSERT INTO `order_in_detail` VALUES ('40', '18', '男士长袖', '66.00', '1', '66');
INSERT INTO `order_in_detail` VALUES ('41', '18', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `order_in_detail` VALUES ('42', '18', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `order_in_detail` VALUES ('43', '18', '电视机', '2988.00', '1', '2988');
INSERT INTO `order_in_detail` VALUES ('44', '18', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `order_in_detail` VALUES ('45', '18', 'Iphone XR 128G', '238.00', '1', '238');
INSERT INTO `order_in_detail` VALUES ('46', '18', '笔记本电脑', '1999.00', '1', '1999');

-- ----------------------------
-- Table structure for order_in_reback
-- ----------------------------
DROP TABLE IF EXISTS `order_in_reback`;
CREATE TABLE `order_in_reback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `money` float(11,2) DEFAULT NULL,
  `productNum` int(5) NOT NULL,
  `payType` int(2) NOT NULL DEFAULT '0',
  `status` int(2) NOT NULL DEFAULT '0',
  `operator` varchar(32) NOT NULL,
  `remark` varchar(128) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_in_reback
-- ----------------------------
INSERT INTO `order_in_reback` VALUES ('17', '408.00', '5', '2', '1', 'admin', '退货五个商品！', '2019-03-08 21:31:47');
INSERT INTO `order_in_reback` VALUES ('18', '27591.00', '6', '0', '1', 'admin', '每类都退一个！', '2019-03-08 21:33:41');
INSERT INTO `order_in_reback` VALUES ('19', '2065.00', '2', '0', '0', 'admin', '', '2019-03-09 17:45:12');

-- ----------------------------
-- Table structure for order_in_reback_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_in_reback_detail`;
CREATE TABLE `order_in_reback_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderInRebackId` int(11) NOT NULL,
  `productName` varchar(128) NOT NULL,
  `price` float(8,2) NOT NULL,
  `productNum` int(5) NOT NULL,
  `money` float(8,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderInId` (`orderInRebackId`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_in_reback_detail
-- ----------------------------
INSERT INTO `order_in_reback_detail` VALUES ('31', '17', 'Java实战开发教程', '128.00', '3', '384');
INSERT INTO `order_in_reback_detail` VALUES ('32', '17', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '2', '24');
INSERT INTO `order_in_reback_detail` VALUES ('33', '18', '男士长袖', '66.00', '1', '66');
INSERT INTO `order_in_reback_detail` VALUES ('34', '18', 'Java实战开发教程', '128.00', '1', '128');
INSERT INTO `order_in_reback_detail` VALUES ('35', '18', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `order_in_reback_detail` VALUES ('36', '18', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `order_in_reback_detail` VALUES ('37', '18', '电视机', '2988.00', '1', '2988');
INSERT INTO `order_in_reback_detail` VALUES ('38', '18', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `order_in_reback_detail` VALUES ('39', '19', '男士长袖', '66.00', '1', '66');
INSERT INTO `order_in_reback_detail` VALUES ('40', '19', '笔记本电脑', '1999.00', '1', '1999');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplierId` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `place` varchar(128) DEFAULT NULL,
  `spec` varchar(64) DEFAULT NULL,
  `pk` varchar(64) DEFAULT NULL,
  `unit` varchar(32) DEFAULT NULL,
  `price` float(8,2) NOT NULL,
  `remark` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `supplierId` (`supplierId`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('2', '3', '男士长袖', '杭州', '尺寸176', '袋装', '件', '66.00', '阿里巴巴男士长袖');
INSERT INTO `product` VALUES ('3', '4', '义乌市震昊编织袋无纺布袋有限公司', '义务', '长120ml', '袋装', '件', '12.00', '袋子');
INSERT INTO `product` VALUES ('4', '4', '洗衣机', '北京', '100*300*189mm', '箱装', '台', '4399.00', '百度出的智能洗衣机。');
INSERT INTO `product` VALUES ('5', '10', '电视机', '深圳', '300*500*198mm', '盒装', '台', '2988.00', '腾讯出的智能电视机。');
INSERT INTO `product` VALUES ('6', '3', '智能机器人', '杭州', '100*200*300', '箱装', '个', '19998.00', '阿里巴巴出的叼炸天智能机器人。');
INSERT INTO `product` VALUES ('9', '2', 'Iphone XR 128G', '上海', '3*3*7', '盒装', '台', '238.00', '测试导入商品');
INSERT INTO `product` VALUES ('10', '2', '笔记本电脑', '广东', '67*88*78', '箱装', '台', '1999.00', '笔记本电脑');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `remark` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', '超级管理员拥有一切权限！');
INSERT INTO `role` VALUES ('2', '普通用户', '普通用户，请自由授权！');

-- ----------------------------
-- Table structure for sell
-- ----------------------------
DROP TABLE IF EXISTS `sell`;
CREATE TABLE `sell` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `money` float(11,2) DEFAULT NULL,
  `productNum` int(5) NOT NULL,
  `payType` int(2) NOT NULL DEFAULT '0',
  `status` int(2) NOT NULL DEFAULT '0',
  `operator` varchar(32) NOT NULL,
  `remark` varchar(128) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sell
-- ----------------------------
INSERT INTO `sell` VALUES ('17', '256.00', '2', '2', '1', 'admin', '卖了猿来入此的教程！', '2017-06-01 11:12:22');
INSERT INTO `sell` VALUES ('18', '27591.00', '6', '1', '1', 'admin', '卖了一大批货！', '2018-07-02 11:14:22');
INSERT INTO `sell` VALUES ('19', '14092.00', '111', '2', '0', 'admin', '购买！', '2019-01-24 13:29:08');
INSERT INTO `sell` VALUES ('20', '41683.00', '117', '4', '0', 'admin', '', '2019-02-13 13:29:41');
INSERT INTO `sell` VALUES ('21', '7477.00', '5', '1', '0', 'admin', '购买商品', '2019-03-09 13:30:09');
INSERT INTO `sell` VALUES ('22', '30852.00', '16', '0', '0', 'admin', '进货', '2019-03-09 17:39:07');
INSERT INTO `sell` VALUES ('23', '31236.00', '19', '0', '0', 'admin', '', '2019-03-09 17:41:31');

-- ----------------------------
-- Table structure for sell_detail
-- ----------------------------
DROP TABLE IF EXISTS `sell_detail`;
CREATE TABLE `sell_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sellId` int(11) NOT NULL,
  `productName` varchar(128) NOT NULL,
  `price` float(8,2) NOT NULL,
  `productNum` int(5) NOT NULL,
  `money` float(8,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderInId` (`sellId`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sell_detail
-- ----------------------------
INSERT INTO `sell_detail` VALUES ('35', '17', 'Java实战开发教程', '128.00', '2', '256');
INSERT INTO `sell_detail` VALUES ('36', '18', 'Java实战开发教程', '128.00', '1', '128');
INSERT INTO `sell_detail` VALUES ('37', '18', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `sell_detail` VALUES ('38', '18', '电视机', '2988.00', '1', '2988');
INSERT INTO `sell_detail` VALUES ('39', '18', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `sell_detail` VALUES ('40', '18', '男士长袖', '66.00', '1', '66');
INSERT INTO `sell_detail` VALUES ('41', '18', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_detail` VALUES ('42', '19', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_detail` VALUES ('43', '19', 'Java实战开发教程', '128.00', '110', '14080');
INSERT INTO `sell_detail` VALUES ('44', '20', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '2', '24');
INSERT INTO `sell_detail` VALUES ('45', '20', 'Java实战开发教程', '128.00', '111', '14208');
INSERT INTO `sell_detail` VALUES ('46', '20', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `sell_detail` VALUES ('47', '20', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `sell_detail` VALUES ('48', '20', '电视机', '2988.00', '1', '2988');
INSERT INTO `sell_detail` VALUES ('49', '20', '男士长袖', '66.00', '1', '66');
INSERT INTO `sell_detail` VALUES ('50', '21', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '2', '24');
INSERT INTO `sell_detail` VALUES ('51', '21', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `sell_detail` VALUES ('52', '21', '电视机', '2988.00', '1', '2988');
INSERT INTO `sell_detail` VALUES ('53', '21', '男士长袖', '66.00', '1', '66');
INSERT INTO `sell_detail` VALUES ('54', '22', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `sell_detail` VALUES ('55', '22', '电视机', '2988.00', '1', '2988');
INSERT INTO `sell_detail` VALUES ('56', '22', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `sell_detail` VALUES ('57', '22', '男士长袖', '66.00', '1', '66');
INSERT INTO `sell_detail` VALUES ('58', '22', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_detail` VALUES ('59', '22', 'Java实战开发教程', '128.00', '9', '1152');
INSERT INTO `sell_detail` VALUES ('60', '22', 'Iphone XR 128G', '238.00', '1', '238');
INSERT INTO `sell_detail` VALUES ('61', '22', '笔记本电脑', '1999.00', '1', '1999');
INSERT INTO `sell_detail` VALUES ('62', '23', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `sell_detail` VALUES ('63', '23', '电视机', '2988.00', '1', '2988');
INSERT INTO `sell_detail` VALUES ('64', '23', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `sell_detail` VALUES ('65', '23', '男士长袖', '66.00', '1', '66');
INSERT INTO `sell_detail` VALUES ('66', '23', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_detail` VALUES ('67', '23', 'Java实战开发教程', '128.00', '12', '1536');
INSERT INTO `sell_detail` VALUES ('68', '23', 'Iphone XR 128G', '238.00', '1', '238');
INSERT INTO `sell_detail` VALUES ('69', '23', '笔记本电脑', '1999.00', '1', '1999');

-- ----------------------------
-- Table structure for sell_reback
-- ----------------------------
DROP TABLE IF EXISTS `sell_reback`;
CREATE TABLE `sell_reback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `money` float(11,2) DEFAULT NULL,
  `productNum` int(5) NOT NULL,
  `payType` int(2) NOT NULL DEFAULT '0',
  `status` int(2) NOT NULL DEFAULT '0',
  `operator` varchar(32) NOT NULL,
  `remark` varchar(128) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sell_reback
-- ----------------------------
INSERT INTO `sell_reback` VALUES ('19', '12.00', '1', '0', '1', 'admin', '退货！', '2017-06-01 12:05:15');
INSERT INTO `sell_reback` VALUES ('20', '28755.00', '16', '1', '0', 'admin', '客户退了一批货！', '2018-07-02 12:06:12');
INSERT INTO `sell_reback` VALUES ('21', '233076.00', '79', '2', '0', 'admin', '质量问题，退货！', '2019-02-13 14:43:29');
INSERT INTO `sell_reback` VALUES ('22', '24409.00', '3', '1', '0', 'admin', '退货', '2019-03-09 14:43:52');
INSERT INTO `sell_reback` VALUES ('23', '78.00', '2', '0', '0', 'admin', '', '2019-03-09 17:48:31');
INSERT INTO `sell_reback` VALUES ('24', '78.00', '2', '0', '0', 'admin', '', '2019-03-09 17:49:18');

-- ----------------------------
-- Table structure for sell_reback_detail
-- ----------------------------
DROP TABLE IF EXISTS `sell_reback_detail`;
CREATE TABLE `sell_reback_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sellRebackId` int(11) NOT NULL,
  `productName` varchar(128) NOT NULL,
  `price` float(8,2) NOT NULL,
  `productNum` int(5) NOT NULL,
  `money` float(8,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderInId` (`sellRebackId`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sell_reback_detail
-- ----------------------------
INSERT INTO `sell_reback_detail` VALUES ('42', '19', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_reback_detail` VALUES ('43', '20', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '2', '24');
INSERT INTO `sell_reback_detail` VALUES ('44', '20', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `sell_reback_detail` VALUES ('45', '20', '电视机', '2988.00', '1', '2988');
INSERT INTO `sell_reback_detail` VALUES ('46', '20', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `sell_reback_detail` VALUES ('47', '20', '男士长袖', '66.00', '1', '66');
INSERT INTO `sell_reback_detail` VALUES ('48', '20', 'Java实战开发教程', '128.00', '10', '1280');
INSERT INTO `sell_reback_detail` VALUES ('49', '21', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_reback_detail` VALUES ('50', '21', '电视机', '2988.00', '78', '233064');
INSERT INTO `sell_reback_detail` VALUES ('51', '22', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_reback_detail` VALUES ('52', '22', '智能机器人', '19998.00', '1', '19998');
INSERT INTO `sell_reback_detail` VALUES ('53', '22', '洗衣机', '4399.00', '1', '4399');
INSERT INTO `sell_reback_detail` VALUES ('54', '23', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_reback_detail` VALUES ('55', '23', '男士长袖', '66.00', '1', '66');
INSERT INTO `sell_reback_detail` VALUES ('56', '24', '义乌市震昊编织袋无纺布袋有限公司', '12.00', '1', '12');
INSERT INTO `sell_reback_detail` VALUES ('57', '24', '男士长袖', '66.00', '1', '66');

-- ----------------------------
-- Table structure for stock
-- ----------------------------
DROP TABLE IF EXISTS `stock`;
CREATE TABLE `stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `productNum` int(8) NOT NULL,
  `sellNum` int(8) NOT NULL DEFAULT '0',
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stock
-- ----------------------------
INSERT INTO `stock` VALUES ('4', '4', '10', '1', '2019-03-08 18:47:04');
INSERT INTO `stock` VALUES ('5', '5', '200', '1', '2019-03-08 18:47:04');
INSERT INTO `stock` VALUES ('6', '6', '51', '1', '2019-03-08 18:47:04');
INSERT INTO `stock` VALUES ('7', '2', '100', '1', '2019-03-08 18:48:02');
INSERT INTO `stock` VALUES ('8', '3', '121', '1', '2019-03-08 18:48:02');
INSERT INTO `stock` VALUES ('9', '1', '765', '12', '2019-03-08 18:48:46');
INSERT INTO `stock` VALUES ('10', '9', '11', '1', '2019-03-09 17:29:13');
INSERT INTO `stock` VALUES ('11', '10', '10', '1', '2019-03-09 17:29:13');

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `tel` varchar(32) NOT NULL,
  `address` varchar(128) NOT NULL,
  `contactName` varchar(32) NOT NULL,
  `contactPhone` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('3', '阿里巴巴', '020-56565656', '浙江 杭州 西湖河畔', '马云', '13818181818');
INSERT INTO `supplier` VALUES ('4', '百度', '010-12123232', '北京 朝阳区', '李彦宏', '13616816888');
INSERT INTO `supplier` VALUES ('10', '腾讯', '035-45465464', '深圳', '马化腾', '1357878787');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `roleId` int(11) NOT NULL,
  `photo` varchar(128) DEFAULT NULL,
  `sex` int(1) NOT NULL DEFAULT '0',
  `age` int(3) NOT NULL DEFAULT '0',
  `address` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin', '1', '/StockManagerSSM/resources/upload/1552123215881.png', '1', '1', '上海市浦东新区浦东南路1835号');
INSERT INTO `user` VALUES ('13', 'user', '123456', '2', '/StockManagerSSM/resources/upload/1552116101099.jpg', '1', '1', '');

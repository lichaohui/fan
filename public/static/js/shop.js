// JavaScript Document
var map = new BMap.Map("map");
// 创建地图实例  
var point = new BMap.Point(116.404, 39.915);
// 创建点坐标 初始化地图，设置中心点坐标和地图级别  
map.centerAndZoom(point, 15);
// 创建标注   
var marker = new BMap.Marker(point);         
map.addOverlay(marker)
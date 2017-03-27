---
title: "Postal code search in Korea"
excerpt: 'Integrate postal search with a few simple steps<br/><br/><br/>'
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: https://c1.staticflickr.com/3/2850/33290848710_84c5790e11_o.png
  teaser: https://c1.staticflickr.com/3/2850/33290848710_84c5790e11_o.png
categories:
  - Korea
  - IT
---

In Korea, Daum and Naver are two companies providing services such as map, address and navigation. Their services are almost free and you cannot see too much different in quality between those companies. Here is a simple example to integrate Daum postal search in your web application

Nothing except some lines of code (in javascript)

```javascript
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        }
    }).open();
</script>
```

Here is the result:

<input type="text" id="postcode" placeholder="Postal Code" readonly="true" style="width: 7em" value="16702">
<input type="button" onclick="execDaumPostcode()" value="Find"><br style="display: inline-block;
    padding: .5em 1em;
    margin: .4em .15em;
    border: 1px solid #ccc;
    border-color: #dbdbdb #d2d2d2 #b2b2b2 #d2d2d3;
    cursor: pointer;
    color: #464646;
    border-radius: .2em;
    vertical-align: middle;
    font-size: 1em;
    line-height: 1.25em;
    background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#f2f2f2));">
<input type="text" id="roadAddress" placeholder="Road Address" readonly="true" value="경기 수원시 영통구 덕영대로1673번길 8-11 (영통동)">
<input type="text" id="jibunAddress" placeholder="Building Address" readonly="true" value="경기 수원시 영통구 영통동 992-7">
<div id="map" style="min-width:300px;width:500px;height:500px;margin-top:10px;"></div>

<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=52e068538338ad2e6481d5d45cec4567&libraries=services"></script>
<script>
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new daum.maps.LatLng(37.2480917899, 127.0748453175), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };

    //지도를 미리 생성
    var map = new daum.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    var geocoder = new daum.maps.services.Geocoder();
    //마커를 미리 생성
    var marker = new daum.maps.Marker({
        position: new daum.maps.LatLng(37.2480917899, 127.0748453175),
        map: map
    });
    marker.setTitle('Nhà tui');
    // var markerImage = new daum.maps.MarkerImage('https://c2.staticflickr.com/4/3853/33518120332_8c48f4ecbb_o.png',new daum.maps.Size(31, 35), new daum.maps.Point(13, 34));
    // marker.setImage(markerImage);
    //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
    function execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 도로명 조합형 주소 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }
                // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                if(fullRoadAddr !== ''){
                    fullRoadAddr += extraRoadAddr;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('roadAddress').value = fullRoadAddr;
                document.getElementById('jibunAddress').value = data.jibunAddress;

                // 주소로 좌표를 검색
                geocoder.addr2coord(data.address, function(status, result) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === daum.maps.services.Status.OK) {
                        console.log(result.addr[0].lat)
                        console.log(result.addr[0].lng)
                        // 해당 주소에 대한 좌표를 받아서
                        var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
                        // 지도를 보여준다.
                        mapContainer.style.display = "block";
                        map.relayout();
                        // 지도 중심을 변경한다.
                        map.setCenter(coords);
                        // 마커를 결과값으로 받은 위치로 옮긴다.
                        marker.setPosition(coords)
                        marker.setTitle('Nhà người ta');
                    }
                });
            }
        }).open();
    }
</script>
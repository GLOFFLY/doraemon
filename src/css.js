const string = `
.doraemon *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 .doraemon *::before{box-sizing: border-box;}
 
 .doraemon{
    background: #93B8CA;
    min-height: 60vh;
 }
.head{
    position: relative;
    width: 420px;
	height: 400px;
	background: #07bbee;
	border: 3px solid #000;
	border-radius: 48% 48% 48% 48%;
    background: -webkit-radial-gradient(right top,#fff 10%,#08b8e9 20%,#4b9ef1 75%,#000);
    top:20px;
    left:50%;
    margin-left:-210px;
}

.eye{
    border: 2px solid #000;
    position: absolute;  
    top: 40px;
    left: 50%;
    margin-left: -47px;
    width: 94px;
    height: 120px;
    border-radius: 46%;
    background-color: #FFF;
    z-index: 1;
}
.eye.left{
    transform: translateX(-46px);
}
.eye.right{
    transform: translateX(47px);
}
.eye .black{
    width: 19px;
	height: 19px;
	background: #000;
	border-radius: 50%;
	position: absolute;
	top: 40px;
    animation: eyemove 2s linear infinite;	
}
.eye .bleft{left: 60px;}
.eye .bright{left: 12px;}

.face{
    position: absolute;
    bottom: 0;
	left: 50%;
	width: 360px;
	height: 300px;
    margin-left: -180px;
    border: 2px solid #000;
    background-color: #FFF;
    border-radius: 50% 50% 45% 45%;
    background: -webkit-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);
}
.nose{
    border: 2px solid #000;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 46px;
    left: 50%;
    margin-left: -25px;
    background-color: #f00c;
    border-radius: 50%;
}
.nose .light{
    position: absolute;
    width: 13px;
    height: 13px;
    top: 10px;
    left: 25px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.8);
}
.nose_line{
    position: absolute;
    background:#000;
    height: 30px;
    width: 2px;
    left: 50%;
    margin-left: -1px;
    top: 95px;
}
.mouth{
    position: absolute;
    width: 240px;
	height: 180px;
    left: 50%;
    margin-left: -120px;
    top: 120px;
}
.mouth::before{
    content: '';
    display: block;
    height:26px;
}
.mouth .up .lip{
    position: absolute;
    border: 2px solid #000;
    height: 90px;
    width: 40px;
    border-top-color: transparent;
    top: -30px;  
    background: #fff;
}
.mouth .up .lip.right{
    border-radius: 0 0 0 100%;
    border-right-color: transparent;
    transform: rotate(-61deg) translateX(-3px);
    left: 200px;
    z-index: 1;
}
.mouth .up .lip.left{
    border-radius: 0 0 100% 0;
    border-left-color: transparent;
    transform: rotate(61deg) translateX(5px);
    left: -4px;
    z-index: 1;
}
.mouth .up .lip.center{
    width: 220px;
	height: 80px;
    background: #9b000a;
	border-radius: 50% 50% 0 0 / 100% 100% 0 0;
	top: 3px;
	left: 50%;
    margin-left: -110px;
}

.mouth .down{
   position: absolute;
   height: 226px;
   width: 100%;
   overflow: hidden;
}
.mouth .down .yuan1{
   border: 2px solid #000;
   position: absolute;
   width: 240px;
   height: 1000px;
   bottom: 95px;
   border-radius: 210px / 220px;
   background: #9b000a;
   overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
   width: 240px;
   height: 100px;
   left: 50%;
   margin-left: -160px;
   position: absolute;
   bottom:-2px;  
   border-radius:50% 50% 0 0 / 100% 100% 0 0;
   background:#ff495f;
   z-index: 1;
}

.face .whiskers{
	width: 280px;
	height: 80px;
	border-radius: 15px;
	position: absolute;
	top: 80px;
	left: 50%;
    margin-left: -140px;
}
.face .whiskers .whisker{
	width: 70px;
	height: 2px;
	background: #333;
	position: absolute;
	z-index: 2;
}
.doraemon .whiskers .rTop{
	left: 205px;
	top: 5px;
    transform: rotate(160deg);
}
.doraemon .whiskers .rMiddle{
	left: 207px;
	top: 25px;
}
.doraemon .whiskers .rBottom{
	left: 205px;
	top: 45px;
    transform: rotate(200deg);
}
.doraemon .whiskers .lTop{
	left: 0;
	top: 5px;
    transform: rotate(-160deg);
}
.doraemon .whiskers .lMiddle{
	left: -2px;
	top: 25px;
}
.doraemon .whiskers .lBottom{
	left: 0;
	top: 45px;
    transform: rotate(-200deg);
}

.choker{
    position: relative;
    border: 2px solid #000;
    width: 260px;
    height: 33px;
    left: 50%;
    margin-left: -130px;
    z-index: 1;
    border-radius: 20px;
    background: #c40;	
    background: -webkit-gradient(linear,left top ,left bottom,from(#c40),to(#800400));
 }
.choker .bell {
    position: absolute;
    border: 2px solid #000;
    width: 40px;
    height: 40px;
    overflow: hidden; /*IE6 hack*/
    border-radius: 50%;
    top: 5px;
    left: 50%;
    margin-left: -20px;
    background: #f9f12a;
    background: -webkit-gradient(linear, left top, left bottom, from(#f9f12a),color-stop(0.5, #e9e11a), to(#a9a100));
    box-shadow: -5px 5px 10px rgba(0,0,0,0.25);
}
.choker .bell_line {
    position: absolute;
    border: 2px solid #333;
    width: 36px;
    height: 5px;
    top:7px;
}
.choker .bell_circle{
    width:12px;
    height:10px;
    background:#000;
    border-radius:5px;
    position:absolute;
    top:15px;
    left:13px;
}
.choker .bell_under{
    width: 3px;
    height:15px;
    background:#000;
    position:absolute;
    left: 17px;
    top: 25px;
}
.doraemon .choker .bell_light{
    width:12px;
    height:12px;
    border-radius:10px;
    box-shadow:19px 8px 5px #fff;
    position:absolute;
    top:-5px;
    left:5px;
    opacity:0.7;
}

@keyframes eyemove{
    20%{
		margin: 20px 0 0 0;
	}
	40%{
		margin: -15px 0 0 0;
	}
	60%{
		margin: -15px 0 0 5px;
	}
	80%{
		margin: -15px 0 0 0;
	}
}
`
export default string;
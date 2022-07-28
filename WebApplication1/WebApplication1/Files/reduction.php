<?php 
include "php/blocks/config.php";
global $connection;
$sql = "SELECT * FROM pages ORDER BY id";
$result = mysqli_query($connection, $sql);
header('Content-type: text/html; charset=utf-8');
session_start();
if (! $_SESSION['admin'])
header('Location: adminavt.php');
?>
<!DOCTYPE html>
<html>
<head>
<title>Добавление/удаление статьи</title>
<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet">
	<link rel="stylesheet" href="css/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="css/icomoon.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="css/bootstrap.css">
	<!-- Flexslider  -->
	<link rel="stylesheet" href="css/flexslider.css">
	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css/magnific-popup.css">
	<!-- Owl Carousel -->
	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.theme.default.min.css">
		<link rel="stylesheet" href="css/style.css">

</head>
<body style=”background-color: #FF00CC”>
		<aside id="colorlib-aside" role="complementary" class="js-fullheight">
			<h1 id="colorlib-logo"><a href="index.php">Admin Panel v0.3</a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li class="colorlib-active"> 
					<li><a href="adminpanel.php" class="current">Добавить статью</a></li>
                        <li><a href="deletep.php">Удалить статью</a></li>
                        <li><a href="reduction.php">Редактировать статью</a></li>
                        <li><a href="advertisement.php">Управление рекламой</a></li>
						 <li><a href="editci.php">Редактирование категорий</a></li>
				</ul>
			</nav>
<script src="js/jquery-1.9.0.min.js"></script>
	<script src="js/jquery.accordion.js"></script>
	<script src="js/jquery.cookie.js"></script>
			<div class="colorlib-footer">
				<p><small>Третья версия админ панели от:15 декабря 2019 года.</small></p>
				<ul>
					<li><a href="#"><i class="icon-facebook2"></i></a></li>
					<li><a href="#"><i class="icon-twitter2"></i></a></li>
					<li><a href="#"><i class="icon-instagram"></i></a></li>
					<li><a href="#"><i class="icon-linkedin2"></i></a></li>
				</ul>
			</div>
		</aside>
<h1 align="center">Редактирование статьи:</h1>
<div id="action_form" style="left: 30%;margin-left: -150px;position: absolute;width: 1000px;margin-top: 0%;">
		   <?php while($row = mysqli_fetch_assoc($result)) {
$id=$row['id'];	
$title=$row['title'];
$date=$row['date'];
$_SESSION["id"]=$id;			?>

           <?PHP echo "<li><a href=\"red1.php?id=$id\">Статья $id | \"$title\" От: $date</a></li>";?>
            <?php } ?>
	
</div>
</body>
</html>
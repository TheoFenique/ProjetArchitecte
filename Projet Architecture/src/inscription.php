<?php
if(isset($_POST['mailform']))
{
	if(!empty($_POST['name']) AND !empty($_POST['surname'])AND !empty($_POST['email']) AND !empty($_POST['message']))
	{
		$message='
		<html>
			<body>
				<div align="center">
					<u>Nom de l\'expéditeur :</u>'.$_POST['nom'].'
					<u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'
					'.nl2br($_POST['message']).'
				</div>
			</body>
		</html>
		';

		mail("studio@florentdufourcq.com", "CONTACT - Monsite.com", $message);
		$msg="Votre message a bien été envoyé !";
	}
	else
	{
		$msg="Tous les champs doivent être complétés !";
	}
}
?>

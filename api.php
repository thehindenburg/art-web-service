<?php
 /**
 *
 * The page can be called via AJAX either via GET or POST, using a variable 
 * named "cat":
 *
 * <code>
 * api.php?cat=artist
 * </code>
 *
 * @package art-works-web-service
 * @author Alex Aragon
 * @version 1.01 2015/02/22
 * @link 
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @see index.html
 * @todo none
 */

if(isset($_REQUEST['cat']))
{//check to be sure data has been transmitted via GET or POST
	switch($_REQUEST['cat'])
	{//determine contents of 'cat'
		case "artist":
			include('data/artist-data.js'); 
			break;
    case "title":
      include('data/title-data.js'); 
      break;
		default:
			include('data/title-data.js'); 
	}
}else{//if not data sent, inform calling application
	echo "Incorrect parameter sent";
}

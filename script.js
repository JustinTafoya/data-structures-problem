$(document).ready(function(){
var users_joined = [];
var chatrooms = {'west_side':[], 'east_side':[];

window.new_user_joined = function(name) {
	users_joined.unshift(name);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
 var newuser = users_joined.pop();
 var UsersWest = Object.keys(chatrooms.west_side).length;
 var UsersEast = Object.keys(chatrooms.east_side).length;

if(UserWest > UserEast){
	if(!chatrooms.east_side.hasOwnProperty(newUser){
		$(".chat-2 > .users").append('<p><button type="button" class="btn btn-warning btn-xs">' + newUser + '</button></p>')
		}
		chatrooms.east_side[newUser] = newUser;
		
}else{
	if(!chatrooms.west_side.hasOwnProperty(newUser){
		$(".chat-2 > .users").append('<p><button type="button" class="btn btn-warning btn-xs">' + newUser + '</button></p>');
	}
		chatrooms.west_side[newUser] = newUser;
}
	console.log("assigning users to rooms");
	console.log(chatrooms.west_side);
	console.log(chatrooms.east_side);


};
// 	if (chatrooms.west_side.length < chatrooms.east_side.length){
// 	chatrooms.west_side.unshift(newuser);

// 	}

// 	else {

// 	chatrooms.east_side.push(newuser);

// 	}

// 	console.log("assigning users to rooms");
// 	console.log(chatrooms.west_side);
// 	console.log(chatrooms.east_side);
// };

// for( var i = users_joined.length - 1; i >= 0; --i) {
// 	 var user = users_joined[i];

// if (i % 2 == 0){
// 	chatrooms.west_side[i] = user;
// 	$(".one").append("<p >" = user + "</p>");
// }else{
// 	chatrooms.west_side[i] = user;
// 	$(".two").append("<p >" = user + "</p>");
// }


//-----if (user = even){
//---------.push('west_side');

//------}else if (user = odd){
//---------.push('east_side');

//----------}

	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
 


   // console.log("assigning users to rooms");
// };





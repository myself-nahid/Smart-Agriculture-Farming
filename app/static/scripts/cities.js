var state_arr = new Array("Dhaka", "Chattogram", "Khulna", "Barisal", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet");

var s_a = new Array();
s_a[0] = "";
s_a[1] = " Dhaka | Narayanganj | Gazipur | Manikgonj | Munshigonj | Narsingdi | Tangail | Kishorgonj | Netrokona |  Faridpur | Gopalgonj | Madaripur | Rajbari | Shariatpur";
s_a[2] = " Chittagong | Bandarban Town | Brahmanbaria | Comilla | Cox's Bazar | Rangamati | Khagrachhari | Feni | Noakhali | Lakshmipur | Chandpur ";
s_a[3] = " Bagherhat | Sathkhira | Jessore | Magura | Jhenaidah | Narail | Kushtia | Chuadanga | Meherpur ";
s_a[4] = " Barisal | Shaistabad | Korapur | Chandpura | Chorkawa | Chormonai | Choramoddi | Chorbaria | Tungibaria | Kashipur | Bongaigaon | Cachar | Chandromohon | Jagua | Raipasha ";
s_a[5] = " Rajshahi | Natore | Sirajganj | Pabna | Bogura | Chapainawabganj | Naogaon | Joypurhat ";
s_a[6] = " Rangpur | Badarganj | Pirgacha | Mithapukur ";
s_a[7] = " Ishwarganj | Gaffargaon | Gauripur | Trishal | Dhobaura | Nandail | Phulpur | Fulbaria | Bhaluka | Mymensingh Sadar | Muktagachha	 | Haluaghat ";
s_a[8] = " Sylhet | Sunamganj | Moulvibazar | Habiganj ";

function print_state(state_id) {
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Select Division', '');
	option_str.selectedIndex = 0;
	for (var i = 0; i < state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i], state_arr[i]);
	}
}

function print_city(city_id, city_index) {
	var option_str = document.getElementById(city_id);
	option_str.length = 0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City', '');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i = 0; i < city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i], city_arr[i]);
	}
}

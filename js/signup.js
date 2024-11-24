//  ---------- for ghost ----------
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// --------------------
// const sign_up = document.getElementById("new_sign_up"); 
let user_name = document.getElementById("new_user_name");
let email = document.getElementById("new_user_email");
let password = document.getElementById("new_user_pass");
const signUp = document.getElementById("sign_up_btn");
const signIn = document.getElementById("sign_in_btn");

signUp.addEventListener("click", () => {
	sign_up()
});

async function sign_up() {

	if (!passChecker(password.value)) {
		window.prompt("Enter a valid password");
		return;
	}
	insertSingleUser(user_name.value, email.value, password.value);
	window.open('/home.html');


}

function passChecker(password) {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

	if (passwordRegex.test(password)) {
		return true;
	}
	return false;
}

async function insertData(tableName, rows) {
	const { data, error } = await supabase_data.from(tableName).insert(rows);

	if (error) {
		console.error(`Error inserting data into ${tableName}:`, error);
		return { error };
	}

	console.log(`Data successfully inserted into ${tableName}:`, data);
	return { data };
}

async function insertSingleUser(name, email, password) {
	const user = { user_name: name, user_email: email, user_pass: password };
	const result = await insertData('users', [user]);
	console.log(result);
}

async function fetchData() {
	const { data, error } = await supabase_data
		.from('users')
		.select('*');

	if (error) {
		console.error('Error:', error);
	} else {
		data.forEach(row => {
			console.log(row.user_email);
		});
		console.log('hello');
	}
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
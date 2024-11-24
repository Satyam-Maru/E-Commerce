let login_email = document.getElementById("exist_user_email");
let login_password = document.getElementById("exist_user_pass");
const signInBtn = document.getElementById("sign_in_btn");

signInBtn.addEventListener("click", () => {
  checkUserExists();
});

async function checkUserExists() {
  try {
    const { data, error } = await supabase_data
      .from('users')
      .select('*');

    if (error) {
      console.error('Error fetching user data:', error);
      return;
    }

    data.forEach(row => {
      if (login_email.value == row.user_email && login_password.value == row.user_pass) {
        console.log("success", row.user_email, row.user_pass);
      }
    });

  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

let login_email = document.getElementById("exist_user_email");
let login_password = document.getElementById("exist_user_pass");
const signInBtn = document.getElementById("sign_in_btn");

signInBtn.addEventListener("click", () => {
    user_exist();
});

async function user_exist() {
    const { data, error } = await supabase_data
      .from('users')
      .select('*');
  
    if (error) {
      console.error('Error:', error);
    } else {
        console.log('Fetched data:', data);

        data.forEach(row => {
            console.log(row.user_id);
        });
      
      console.log('Fetch complete');
    }
  }

  console.log("hi manthan");
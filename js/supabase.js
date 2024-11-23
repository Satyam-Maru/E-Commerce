const SUPABASE_URL = "https://whiviqkvbbeeofsfixkm.supabase.co";
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoaXZpcWt2YmJlZW9mc2ZpeGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzODEyNjQsImV4cCI6MjA0Nzk1NzI2NH0.N1z5Axm_gdHydKn-jw-O74OR5Rksh-1grczXNeJvo44';

// Initialize the client
const supabase_data = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function insertData(tableName, rows) {
    const { data, error } = await supabase_data.from(tableName).insert(rows);

    if (error) {
        console.error(`Error inserting data into ${tableName}:`, error);
        return { error };
    }

    console.log(`Data successfully inserted into ${tableName}:`, data);
    return { data };
}

async function insertSingleUser(email, password) {
    const user = { user_email: email, user_pass: password };
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

// insertSingleUser("firstuser@gmail.com", "firstuser123");

fetchData();
console.log('hi');
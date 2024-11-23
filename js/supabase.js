const SUPABASE_URL = "https://whiviqkvbbeeofsfixkm.supabase.co";
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoaXZpcWt2YmJlZW9mc2ZpeGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzODEyNjQsImV4cCI6MjA0Nzk1NzI2NH0.N1z5Axm_gdHydKn-jw-O74OR5Rksh-1grczXNeJvo44';

// Initialize the client
const supabase_data = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

(async () => {
    const { data, error } = await supabase_data.from('users').select('*');
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
})();
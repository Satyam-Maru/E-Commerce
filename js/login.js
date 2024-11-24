async function insertData(tableName, rows) {
	const { data, error } = await supabase_data.from(tableName).insert(rows);

	if (error) {
		console.error(`Error inserting data into ${tableName}:`, error);
		return { error };
	}

	console.log(`Data successfully inserted into ${tableName}:`, data);
	return { data };
}
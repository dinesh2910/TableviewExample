function turnOnEdit() {
	
	var editingstate = $.table.getEditing();
	if (editinfstate == 0){
		$.table.setEditing(true);
		$.editTable.setTitle("Done");
	}else{
		$.table.setEditing(false);
		$.editTable.setTitle("Edit");
	}
}
$.index.open();

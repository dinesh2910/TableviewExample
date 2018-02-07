var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.index = Ti.UI.createWindow(
	{ backgroundColor: "white", layout: "vertical", id: "index" });

	$.__views.index && $.addTopLevelView($.__views.index);
	$.__views.edittable = Ti.UI.createButton(
	{ top: 20, right: 10, width: 40, id: "edittable", title: "Edit" });

	$.__views.index.add($.__views.edittable);
	turnOnEdit ? $.addListener($.__views.edittable, 'click', turnOnEdit) : __defers['$.__views.edittable!click!turnOnEdit'] = true;var __alloyId0 = [];$.__views.Subjectssection = Ti.UI.createTableViewSection(
	{ id: "Subjectssection", headerTitle: "ComputerCourses" });

	__alloyId0.push($.__views.Subjectssection);$.__views.__alloyId1 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Java", id: "__alloyId1" });

	$.__views.Subjectssection.add($.__views.__alloyId1);$.__views.__alloyId2 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Swift", id: "__alloyId2" });

	$.__views.Subjectssection.add($.__views.__alloyId2);$.__views.__alloyId3 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "iOS", id: "__alloyId3" });

	$.__views.Subjectssection.add($.__views.__alloyId3);$.__views.__alloyId4 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Computer Arcitecture", id: "__alloyId4" });

	$.__views.Subjectssection.add($.__views.__alloyId4);$.__views.__alloyId5 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Sowfware Development", id: "__alloyId5" });

	$.__views.Subjectssection.add($.__views.__alloyId5);$.__views.Subjectssection = Ti.UI.createTableViewSection(
	{ id: "Subjectssection", headerTitle: "ElectricalCourses" });

	__alloyId0.push($.__views.Subjectssection);$.__views.__alloyId6 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Digital Systems", id: "__alloyId6" });

	$.__views.Subjectssection.add($.__views.__alloyId6);$.__views.__alloyId7 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Communication Systems", id: "__alloyId7" });

	$.__views.Subjectssection.add($.__views.__alloyId7);$.__views.__alloyId8 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Power Electronics", id: "__alloyId8" });

	$.__views.Subjectssection.add($.__views.__alloyId8);$.__views.__alloyId9 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Power Systems", id: "__alloyId9" });

	$.__views.Subjectssection.add($.__views.__alloyId9);$.__views.__alloyId10 = Ti.UI.createTableViewRow(
	{ moveable: true, title: "Electrical Circuits", id: "__alloyId10" });

	$.__views.Subjectssection.add($.__views.__alloyId10);$.__views.table = Ti.UI.createTableView(
	{ top: 25, searchHidden: true, data: __alloyId0, id: "table", editing: false });

	$.__views.index.add($.__views.table);
	exports.destroy = function () {};




	_.extend($, $.__views);


	function turnOnEdit() {

		var editingstate = $.table.getEditing();
		if (editinfstate == 0) {
			$.table.setEditing(true);
			$.editTable.setTitle("Done");
		} else {
			$.table.setEditing(false);
			$.editTable.setTitle("Edit");
		}
	}
	$.index.open();





	__defers['$.__views.edittable!click!turnOnEdit'] && $.addListener($.__views.edittable, 'click', turnOnEdit);



	_.extend($, exports);
}

module.exports = Controller;
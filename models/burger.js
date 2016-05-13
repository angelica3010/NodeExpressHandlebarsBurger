var orm = require('../config/orm.js');


var burger = {
	all: function(cb) {
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('burgers', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}

};
// 	<form action="cats/update/{{this.id}}?_method=PUT" method="POST">
//           <input type="hidden" name="sleepy" value="true">
//           <button type="submit">SLEEP TIME!</button>
//         </form>
// };

//export the name of the variable burger
module.exports = burger;

//Inside `burger.js` create the code that will call the orm functions using burger specific input for the orm



//orm.selectWhere('burgers', "devoured", "false");



// Make a function where it has been devoured and not devoured??
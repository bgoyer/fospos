extends Node


var database = {
	config = {
		pip = false,
		add_tax = false,
		require_emp_state_tips = true,
		emp_break_tracking = true,
		emp_time_tracking = true,
	},
	tickets = [
		{
			id = 'abcd-1234-abcd-1234',
			cart = [
				{
					quantity = 1,
					options = [
						{ label = 'option1', price = 1295, selected = true },
						{ label = 'option2', price = 125, selected = true },
						{ label = 'option3', price = 1505, selected = true },
					],
				},
			],
			payment_method = null, ## null = not paid -- otherwise 'credit', 'cash', 'voucher/coupon', other??
			sub_total = 950,
			tips = 0,
			closed = false,
		},
		{
			id = '1234-abcd-1234-abcd',
			cart = [
				{
					quantity = 1,
					options = [
						{ label = 'option1', price = 1295, selected = true },
						{ label = 'option2', price = 125, selected = true },
						{ label = 'option3', price = 1505, selected = true },
					],
				},
			],
			payment_method = 'credit',
			sub_total = 950,
			tips = 0,
			closed = false,
		},
	],
	types = [
		{
			id = 1,
			name = 'Beverages',
			types = [
				{
					id = 10,
					name = 'Sodas',
					types = null,
				},
				{
					id = 11,
					name = 'Beer',
					types = null,
				},
				{
					id = 12,
					name = 'Cocktails',
					types = null,
				},
			],
		},
		{
			id = 2,
			name = 'Food',
			types = [
				{
					id = 20,
					name = 'Chicken',
					types = null,
				},
				{
					id = 21,
					name = 'Beef',
					types = null,
				},
				{
					id = 22,
					name = 'Sides',
					types = null,
				},
			],
		},
	],
	menu = [
		{
			id = '12345',
			type = 11,
			name = 'Bud Light',
			price = 850,
			tax = 45,
			options = [
				{ label = 'option1', price = 1295, selected = true },
				{ label = 'option2', price = 125, selected = true },
				{ label = 'option3', price = 1505, selected = true },
			],
		},
		{
			id = '12345',
			type = 11,
			name = 'White Claw',
			price = 850,
			tax = 45,
			options = [
				{ label = 'option1', price = 1295, selected = true },
				{ label = 'option2', price = 125, selected = true },
				{ label = 'option3', price = 1505, selected = true },
			],
		},
		{
			name = 'Cheese Burger',
			type = 21,
			price = 1375,
			tax = 105,
			options = [
				{ label = 'option1', price = 1295, selected = true },
				{ label = 'option2', price = 125, selected = true },
				{ label = 'option3', price = 1505, selected = true },
			],
		},
		{
			name = 'Hamburger',
			type = 21,
			price = 1550,
			tax = 105,
			options = [
				{ label = 'option1', price = 1295, selected = true },
				{ label = 'option2', price = 125, selected = true },
				{ label = 'option3', price = 1505, selected = true },
			],
		},
	],
	users = [
		{
			name = 'John Doe',
			pin = 123456, ##TODO Encrypt this
			username = "jdoe",
			active_tickets = ['abcd-1234-abcd-1234', '1234-abcd-1234-abcd'],
			pay_period_time = 0,
			shift_time = 0,
			admin_notes = {
				note_1 = {
					note = 'Failed to show up to work',
					date = '6/1/15',
					points = 4,
				},
				note_2 = {
					note = 'Stayed late to help the team',
					date = '6/12/15',
					points = 0,
				},
			},
		},
	],
};


signal  password_incorrect
signal  update_main_page

var current_orders = []

var selected_user: String
var order_screen_data

@onready var user_template = preload("res://scenes/user_template.tscn")

func _ready():
	get_users()

func get_users():
	var recieved_list = sync_user_list() ##server
	for user in recieved_list.size():
		var temp_user_template = user_template.instantiate()
		add_child(temp_user_template)
		temp_user_template.reparent($Main/VBoxContainer/User_Panel/HBoxContainer/Users/ScrollContainer/GridContainer)
		var button = temp_user_template.get_node("Panel/Button")
		var split_text = recieved_list[user][1].split(" ")
		button.text = ""
		for word in split_text:
			button.text += word.split("")[0].to_upper()
		button.pressed.connect(self.show_login.bind(recieved_list[user][0]))

func show_login(username):
	$"Keypad".visible = true
	selected_user = username

func _on_keypad_password_complete(input: int):
	if try_pass(selected_user, input): ## server
		$"Main".visible = false
		$"Keypad".visible = false
		update_main_page.emit(get_main_page_data())
		await load_order_screen()
		$"POS_Main_Screen".visible = true
	else:
		password_incorrect.emit()

######Order Screen######
func load_order_screen():
	pass

######Server Communication########




func set_password(_password):
	pass

func get_order_screen_data(data):
	order_screen_data = data

func send_order(_order_data):
	pass

#################################

########################Server Temp stuff so i can test
func sync_user_list() -> Array:
	var username_list = []
	for i in database.users.size():
		var temp_user = [database.users[i].username, database.users[i].name]
		username_list.insert(0, temp_user)
	return username_list

func try_pass(username: String, input: int) -> bool:
	for i in database.users.size():
		if database.users[i].username == username:
			if database.users[i].pin == input:
				return true
			else:
				return false
	printerr("User doesn't exist")
	return false

func get_main_page_data() -> Dictionary:
	var list = {}
	for i in database.users.size():
		if database.users[i].username == selected_user:
			list.username = database.users[i].username
			list.name = database.users[i].name
			list.tickets = database.users[i].active_tickets
	return list
########################################################

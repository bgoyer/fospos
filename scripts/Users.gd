extends Node

var database = {
	users = 
		{
			name = "John Doe",
			pin = 124085
		},
	menu = 
	[	
		{
			name = "Beer",
			children = [
				{
					name = "Lager",
					children = [
						{
							name = "Bud Light",
							price = 8.50
						},
						{
							name = "White Claw",
							price = 9.50
						}
					]
				}
			]
		},
		{
			name = "Food",
			children = [
				{
					name = "Burger",
					children = [
						{
							name = "Cheese Burger",
							price = 13.75
						},
						{
							name = "Hamburger",
							price = 15.50
						}
					]
				}
			],	
		}
		
	
		
	]
}






signal  password_incorrect
signal  init

var current_orders = []

var keypad
var selected_user
var order_screen_data

@onready var user_template = preload("res://scenes/user_template.tscn")

func _ready():
	init.emit(database)	

######Order Screen######
func load_order_screen():
	pass

######Number Pad#######
func show_login(username):
	keypad.visible = true
	selected_user = username

########################

######Server Commands########
func sync_user_list(user_list):
	for i in user_list.size():
		var temp_user_template = user_template.instantiate()
		add_child(temp_user_template)
		temp_user_template.reparent($Main/VBoxContainer/User_Panel/HBoxContainer/Users/ScrollContainer/GridContainer)
		var button = temp_user_template.get_node("Panel/Button")
		var split_text = user_list[i].split(" ")
		button.text = ""
		for j in split_text:
			button.text += split_text[0].split("")[0].to_upper()
			button.pressed.connect(self.show_login.bind(user_list[i]))



func password_incorrect_server_response():
	password_incorrect.emit()
	

func password_correct_server_response():
	$"Main".visible = false
	$"Keypad".visible = false
	await load_order_screen()
	$"POS_Main_Screen".visible = true	

func set_password(_password):
	pass
	
func try_password(_username, _password):
	pass
	

func get_order_screen_data(data):
	order_screen_data = data


func send_order(_order_data):
	pass
	
#################################



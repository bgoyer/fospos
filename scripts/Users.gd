extends Node


var database = {
	users = {
		user_id = {
			name = "John Doe",
			pin = 124085, #TODO Encrypt this
			active_tickets = {
				ticket_id = {
					cart = {
						item_id = {
							quantity = 1,
							options = {
								option_1 = false,
								option_2 = false,
								option_3 = true
							}
						}
					},
					payment_method = "credit",
					sub_total = 9.5,
					tips = 0.0
				}
			},
			pay_period_time = 0,
			shift_time = 0,
			admin_notes = {
				note_1 = {
					note = "Failed to show up to work",
					date = "6/1/15",
					points = 4
				},
				note_2 = {
					note = "Stayed late to help the team",
					date = "6/12/15",
					points = 0
				}
			}
		}
	},
 
	menu =
	{
		beer = {
			name = "Beer",
			children = {
				lager = {
				name = "Lager",
					children = {
						bud_light = {
							name = "Bud Light",
							price = 8.50,
							options = {
								"toggle" = {},

							}
						},
						white_claw = {
							name = "White Claw",
							price = 9.50,
							options = {

							}
						}
					}
				}
			}
		},
		food = {
		name = "Food",
			children = {
				burger = {
					name = "Burger",
					children = {
						cheese_burger = {
						name = "Cheese Burger",
						price = 13.75
						},
						hamburger = {
						name = "Hamburger",
						price = 15.50
						}
					}
				}
			}
		}
	},
	config = {
		pip = false,
		add_tax = false,
		require_emp_state_tips = true,
		emp_break_tracking = true,
		emp_time_tracking = true
	}
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



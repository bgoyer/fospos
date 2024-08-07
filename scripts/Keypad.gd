extends Panel

signal password_complete
signal password_changed

var indicator_inactive
var indicator_active
var indicator_error

var indicator_1
var indicator_2
var indicator_3
var indicator_4
var indicator_5
var indicator_6

var current_password: String = "":
	set(value):
		current_password = value
		password_changed.emit()



func _ready():
	indicator_inactive = ResourceLoader.load("res://img/circle-dot-inactive.png")
	indicator_active = ResourceLoader.load("res://img/circle-dot-active.png")
	indicator_error = ResourceLoader.load("res://img/circle-dot-error.png")
	
	indicator_1 = $VBoxContainer/Panel/HBoxContainer/Panel/HBoxContainer/Key_Pad_Container/VBoxContainer/Indicators/VBoxContainer/Pass_Indicator/HBoxContainer/Char_1/TextureRect
	indicator_2 = $VBoxContainer/Panel/HBoxContainer/Panel/HBoxContainer/Key_Pad_Container/VBoxContainer/Indicators/VBoxContainer/Pass_Indicator/HBoxContainer/Char_2/TextureRect
	indicator_3 = $VBoxContainer/Panel/HBoxContainer/Panel/HBoxContainer/Key_Pad_Container/VBoxContainer/Indicators/VBoxContainer/Pass_Indicator/HBoxContainer/Char_3/TextureRect
	indicator_4 = $VBoxContainer/Panel/HBoxContainer/Panel/HBoxContainer/Key_Pad_Container/VBoxContainer/Indicators/VBoxContainer/Pass_Indicator/HBoxContainer/Char_4/TextureRect
	indicator_5 = $VBoxContainer/Panel/HBoxContainer/Panel/HBoxContainer/Key_Pad_Container/VBoxContainer/Indicators/VBoxContainer/Pass_Indicator/HBoxContainer/Char_5/TextureRect
	indicator_6 = $VBoxContainer/Panel/HBoxContainer/Panel/HBoxContainer/Key_Pad_Container/VBoxContainer/Indicators/VBoxContainer/Pass_Indicator/HBoxContainer/Char_6/TextureRect
	
	password_changed.connect(password_has_changed)

func password_has_changed():
	var pass_length = current_password.length()
	if pass_length <= 6:
		match pass_length:
			0:
				reset_indictors()
			1:
				reset_indictors()
				indicator_1.texture = indicator_active
			2:
				reset_indictors()
				indicator_1.texture = indicator_active
				indicator_2.texture = indicator_active
			3: 
				reset_indictors()
				indicator_1.texture = indicator_active
				indicator_2.texture = indicator_active
				indicator_3.texture = indicator_active
			4:
				reset_indictors()
				indicator_1.texture = indicator_active
				indicator_2.texture = indicator_active
				indicator_3.texture = indicator_active
				indicator_4.texture = indicator_active
			5:
				reset_indictors()
				indicator_1.texture = indicator_active
				indicator_2.texture = indicator_active
				indicator_3.texture = indicator_active
				indicator_4.texture = indicator_active
				indicator_5.texture = indicator_active
			6:
				reset_indictors()
				indicator_1.texture = indicator_active
				indicator_2.texture = indicator_active
				indicator_3.texture = indicator_active
				indicator_4.texture = indicator_active
				indicator_5.texture = indicator_active
				indicator_6.texture = indicator_active
				password_complete.emit(current_password)

func reset_indictors():
	indicator_1.texture = indicator_inactive
	indicator_2.texture = indicator_inactive
	indicator_3.texture = indicator_inactive
	indicator_4.texture = indicator_inactive
	indicator_5.texture = indicator_inactive
	indicator_6.texture = indicator_inactive

func add_pass(value):
	if current_password.length() < 6:
		current_password += value

func _on_button_1_pressed():
	add_pass("1")

func _on_button_2_pressed():
	add_pass("2")

func _on_button_3_pressed():
	add_pass("3")

func _on_button_4_pressed():
	add_pass("4")

func _on_button_5_pressed():
	add_pass("5")

func _on_button_6_pressed():
	add_pass("6")

func _on_button_7_pressed():
	add_pass("7")
	
func _on_button_8_pressed():
	add_pass("8")

func _on_button_9_pressed():
	add_pass("9")

func _on_button_0_pressed():
	add_pass("0")

func _on_texture_button_close_pressed():
	close_keypad()
	
func _on_texture_button_delete_pressed():
	if current_password.length() >= 1:
		current_password = current_password.substr(0, current_password.length() - 1)

func close_keypad():
	reset_indictors()
	current_password = ""
	visible = false

func _on_control_password_incorrect():
	for x in 3:
		await get_tree().create_timer(.125).timeout
		indicator_1.texture = indicator_error
		indicator_2.texture = indicator_error
		indicator_3.texture = indicator_error
		indicator_4.texture = indicator_error
		indicator_5.texture = indicator_error
		indicator_6.texture = indicator_error
		await get_tree().create_timer(.125).timeout
		indicator_1.texture = indicator_active
		indicator_2.texture = indicator_active
		indicator_3.texture = indicator_active
		indicator_4.texture = indicator_active
		indicator_5.texture = indicator_active
		indicator_6.texture = indicator_active
		
	reset_indictors()
	current_password = ""

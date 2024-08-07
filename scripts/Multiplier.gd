extends LineEdit

var current_text = "1"

@onready var line_edit:LineEdit = $"."

func _on_text_changed(new_text):
	if not new_text == "":
		if new_text.is_valid_int():
			current_text = new_text
		else:
			line_edit.text = current_text
		
func _on_text_submitted(new_text):
	if new_text == "" or new_text == "0":
		line_edit.text = "1"
		current_text = "1"


func _on_plus_button_up():
	if str_to_var(current_text) + 1 < 100:
		current_text = str(str_to_var(current_text) + 1)
	else:
		current_text = "99"
	line_edit.text = current_text

func _on_minus_button_up():
	if str_to_var(current_text) - 1 > 0:
		current_text = str(str_to_var(current_text) - 1)
	else:
		current_text = "1"
	line_edit.text = current_text

def check_user_input(input):
    """
    Function to verify that the inpunt has the correct format.
    """
    try:
        # Convert it into integer
        val = int(input)
        return val
    except ValueError:
        exit("\nEl numero introducido no es un numero entero")

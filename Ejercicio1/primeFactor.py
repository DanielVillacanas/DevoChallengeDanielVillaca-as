import math

def obtainPrimeFactors(number):
    """
    Function to retrieve the prime factors of a number.
    """
    primeFactors = []
    divisor = 2
    while number > 2:
        if number % divisor == 0:
            primeFactors.append(divisor)
            number = number / divisor
        else:
            divisor = divisor+1
    return primeFactors    

        


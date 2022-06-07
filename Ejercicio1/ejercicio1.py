import inputVerify
import primeFactor
import time

listNumbers = []
listLength = input("Introuzca el tamaño de la lista de numero que desea comprobar : ")
listLength = inputVerify.check_user_input(listLength)

for i in range(0,listLength):
    number =  input("\n" + str(i+1)+"ºNúmero: ")
    number = inputVerify.check_user_input(number)
  
    listNumbers.append(number)

inicio = time.time()

for number in listNumbers:

    primeFactors = primeFactor.obtainPrimeFactors(number)

    divs = [1] 

    for fact in primeFactors:
        temp = [] 
        for div in divs:
         if divs.count(fact * div) == 0:
            temp.append(fact * div )
        divs = divs + temp 
    sum = 0
    for div in divs:
        sum = sum + div
    if sum - number == number : print("\nEl número ",number," es un número perfecto")
    elif sum - number > number : print("\nEl número ",number," es un número abundante")
    elif sum - number < number : print("\nEl número ",number," es un número defectivo")

fin = time.time()

print("\nEl tiempo de ejecución ha sido: ",fin-inicio," segundos\n")